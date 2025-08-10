import { colors } from "@/constants/Colors";
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { LinkProps, useRouter } from "expo-router";
import { FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
import { UseUser } from "@/contexts/userContext";
import { authService } from "@/services/auth";

interface ButtonProps {
  title: string;
  route: LinkProps['href'];
  name: string;
}

export default function ButtonAuth(props:ButtonProps){
    const router = useRouter();
    
    let color: string = '';

    const {username, email, password} = UseUser();

    function callApi(name:string){
        if(name == 'login'){
            authService.login({email, password});
            Alert.alert('usuario logdo com sucesso');
        }

        if(name == 'registration'){
            authService.cadastrar({username, email, password});
            Alert.alert('usuario cadastrado com sucesso');
        }

        router.push(props.route)
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}
            onPress={() => callApi(props.name)}>     
                    <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      marginTop:20,
 
    },
    button:{
        borderRadius: 10,
        height: 40,
        width:150,
        display:'flex',
        justifyContent:'center',
        backgroundColor:colors.newGame,
        alignItems:'center',
    },
    text:{
        color: 'white',
        fontWeight: 'bold',
        fontSize:18,
        width:120,
        textAlign:'center',
    },
});

