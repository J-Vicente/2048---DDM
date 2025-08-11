import {jwtDecode} from 'jwt-decode';
import { useRouter } from "expo-router";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserContextControls{
  userName: string | null;
  email: string;
  password: string;
  updateField: (name:string,value:string) => void
}

const UserContext = createContext<UserContextControls>({} as UserContextControls);

export function UserProvider({children}:{children: ReactNode }){
    
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState<string | null>(null);


    function updateField(name:string ,value:string){
      switch(name){
        case 'username':
          setUserName(value);
          break;
        case 'email':
          setEmail(value)
          break;
        case 'password':
          setPassword(value)
          break;
        case 'passwordConf':
          try{
            if(value == password) return;
          }catch (error) {
            console.error('Erro no cadastro: senhas diferentes', error);
          break;
          }
      }
    }

  return(
    <UserContext.Provider value={{
      userName,
      email,
      password,
      updateField: (a,b) => updateField(a,b),
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function UseUser(){
  const context = useContext(UserContext);

  if(!context){
    throw new Error("useUser deve ser usado dentro de GameProvider");
  }
  return context;
}