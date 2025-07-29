import { colors } from "@/constants/Colors";
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinkProps, useRouter } from "expo-router";
import { FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';


interface ButtonProps {
  title: string;
  route: LinkProps['href'];
}

export default function ButtonAuth(props:ButtonProps){
    const router = useRouter();
    
    let color: string = '';

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}
            onPress={() => router.push(props.route)}>     
                    <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      marginTop:30,
      marginBottom:15,  
    },
    button:{
        borderRadius: 10,
        height: 45,
        width:180,
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

