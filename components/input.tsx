import { colors } from "@/constants/Colors";
import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

interface InputProps {
    label: string;
    placeHolder: string;
}

export default function Button(props:InputProps){

    return(
        <View style={styles.container}>
            <Text style={styles.textLabel}>{props.label}</Text>
            <TextInput style={styles.textInput} placeholder={props.placeHolder}></TextInput>
        </View>
    );
}
            
const styles = StyleSheet.create({
    container:{
        width:'100%',
        display:'flex',
        alignItems: 'center',
    },
    textLabel:{
        color:'white',
        fontWeight: 'bold',
        width:'75%',
        marginBottom:5,
        marginTop:10,
    },
    textInput:{
        color: colors.text,
        borderWidth: 1,
        borderColor:colors.text,
        borderRadius: 10,
        height: 30,
        width: '80%',
        display:'flex', 
        textAlign:'left',
        padding:20,
    }
});