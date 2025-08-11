import { UseUser } from '@/contexts/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const getBaseUrl = () => {
  if (Platform.OS === 'android') {
    return 'http://192.168.2.153:3000/api'; 
  }
  return 'http://192.168.2.153:3000/api'; 
};

const BASE_URL =getBaseUrl();

interface CadastroData {
  userName: string | null;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

class AuthService {
  async cadastrar(userData: CadastroData) {
    try {
      const response = await fetch(`${BASE_URL}/user/registration`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro no cadastro');
      }

      return data;
    } catch (error: any) {
      throw error;
    }
  }

  async login(credentials: LoginData) {

    try {
      const response = await fetch(`${BASE_URL}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      const userName = data?.user?.userName || null;

      await AsyncStorage.setItem('userName', userName);

      if (!response.ok) {
        throw new Error(data.error || 'Erro no login');
      }

      return data;
    } catch (error: any) {
      throw error;
    }
  }
}

export const authService = new AuthService();