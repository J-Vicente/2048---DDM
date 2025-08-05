import { colors } from "@/constants/Colors";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLoadFonts } from '@/hooks/useLoadFonts';
import { GameProvider } from "@/contexts/gameContext";

interface BlockProps {
  number: number;
}

export default function Block(props:BlockProps){
    
    const fontsLoaded = useLoadFonts();

    let color;
    let n;
    let font;

    if(props.number > 0 && (props.number & (props.number - 1)) === 0){
        color = colors[`block${props.number}` as keyof typeof colors];
        n=props.number;

        if(n<1000){
            font = 20   ;
        }else{
            font = 18;
        }

    }else{
        color = '#0C0F14';
    }

    

    return(
        <View style={[styles.container, {backgroundColor:color}, {borderColor:'#0C0F14'} ]}>
            <Text style={[styles.text, {fontSize:font}]}>{n}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      borderWidth:5,
      width:65,
      height:65,
      borderRadius:10,
      margin:'0.8%',
    },
    text:{
      color:'white',  
      fontFamily:'Inter_900Black',
      opacity:0.9,
    }
});