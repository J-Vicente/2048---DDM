import { colors } from "@/constants/Colors";
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { RelativePathString, useRouter } from "expo-router";
import { Entypo,Ionicons } from '@expo/vector-icons';

interface NavBarProps {
    iconHome: boolean;
    iconUser: boolean;
}

export default function Button(props:NavBarProps){
    const router = useRouter();

    return(
        <View style={styles.container}>
            <TouchableOpacity style={[styles.iconHome, !props.iconHome && {opacity:0}]} disabled={!props.iconHome}
            onPress={() => router.push('/')}>
                <Entypo name="home" size={38} color={colors.text} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.iconUser, !props.iconUser && {opacity:0}]} disabled={!props.iconUser}
            onPress={() => router.push('/login')}>
                <Ionicons name="person-circle-sharp" size={44} color={colors.text} />
            </TouchableOpacity>
        </View>
    );
}
            
const styles = StyleSheet.create({
    container:{
        height:70,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        justifyContent:'space-between'
    },
    iconHome:{
        marginLeft:'5%',
    },
    iconUser:{
        marginRight:'5%',
    }
});

