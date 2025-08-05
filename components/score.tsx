import { colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useLoadFonts } from '@/hooks/useLoadFonts';
import { GameProvider, UseGame } from "@/contexts/gameContext";

    
interface ScoreProps {
    
}

export default function Score(props:ScoreProps){
  const fontsLoaded = useLoadFonts();
  const {score} = UseGame();

    return(

        <View style={styles.container}>
            <Text style={[styles.text, styles.text_score]}>PONTUAÇÃO</Text>
            <Text style={[styles.text, styles.score]}>{score}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.playAgain,
        borderWidth:1,
        borderColor:'#838383',
        alignItems:'center',
        marginBottom:'10%',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        borderRadius:5,
    },
    text:{
        color:colors.text,      
    },
    score:{
        fontFamily:'Inter_900Black',
        fontSize:20,
        
    },
    text_score:{
        marginBottom:5,
        opacity:0.7,
    }
});

