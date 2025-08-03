import { colors } from "@/constants/Colors";
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Block from '../components/block';


interface ButtonProps {
    
}

export default function Button(props:ButtonProps){

    return(
        <View style={styles.container}>
            <View style={styles.row}>
               <Block number={2}></Block> 
               <Block number={4}></Block> 
               <Block number={8}></Block> 
               <Block number={16}></Block> 
            </View>
            <View style={styles.row}>
               <Block number={32}></Block> 
               <Block number={64}></Block> 
               <Block number={128}></Block> 
               <Block number={256}></Block> 
            </View>
            <View style={styles.row}>
               <Block number={512}></Block> 
               <Block number={1024}></Block> 
               <Block number={2048}></Block> 
               <Block number={0}></Block> 
            </View>
            <View style={styles.row}>
               <Block number={0}></Block> 
               <Block number={0}></Block> 
               <Block number={0}></Block> 
               <Block number={0}></Block> 
            </View>

        

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
       width:'90%',
       alignItems:"center",
       backgroundColor:'#242A32',
       justifyContent:'center',
       padding:5,
       borderRadius:10,
    },
    row:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
    }
});

