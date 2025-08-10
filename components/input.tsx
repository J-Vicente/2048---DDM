import { colors } from "@/constants/Colors";
import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { UseUser } from "@/contexts/userContext";

interface InputProps {
    label: string;
    placeHolder: string;
    name: string;
}

export default function Button(props:InputProps){

    const {updateField} = UseUser();

    return(
        <View style={styles.container}>
            <Text style={styles.textLabel}>{props.label}</Text>
            <TextInput style={styles.textInput} placeholder={props.placeHolder}
            onChangeText={(text) => updateField(props.name, text)}></TextInput>
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
        height: 50,
        width: '80%',
        display:'flex', 
        textAlign:'left',
        padding:10,
    }
});