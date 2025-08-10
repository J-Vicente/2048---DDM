import { colors } from "@/constants/Colors";
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinkProps, useRouter } from "expo-router";
import { FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
import { GameProvider, UseGame } from "@/contexts/gameContext";


interface ButtonProps {
  title: string;
  icon?: string;
  color: string;
  border?: boolean;
  route: LinkProps['href'];
}

export default function Button(props:ButtonProps){
    const {newGame, continueGame} = UseGame();

    const router = useRouter();
    
    let color: string = '';

    if(props.color == 'newGame'){
        color = colors.newGame;
    }else if(props.color == 'continue'){
        color = colors.continue;
    }else if(props.color == 'ranking'){
        color = colors.ranking;
    }else if(props.color == 'playAgain'){
        color = colors.playAgain;
    }

    const iconMap = {
        newGame: <MaterialIcons name="looks-two" size={40} color="white" />,
        continue: <Entypo name="controller-play" size={40} color="white" />,
        ranking: <FontAwesome name="trophy" size={40} color="white" />,
    };

    const icon = iconMap[props.color as keyof typeof iconMap];

    function goTo(){
        console.log('antes do if Novo jogo');
        if( props.title == 'Novo Jogo'){
            console.log('antes do newGame');
            newGame();
        }
        if(props.title == 'Continuar'){
            console.log('antes do newGame');
            continueGame();
        }
        console.log('antes do push');
        router.push(props.route)
    }

    return(
            <View style={styles.container}>
                <TouchableOpacity style={[styles.button, {backgroundColor:color}, props.border && styles.buttonBorder]}
                onPress={() => goTo()}>     
                    <View style={styles.content}>
                        {icon}     
                        <Text style={[styles.text, props.border && styles.textBorder]}>{props.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
    container:{
      marginTop:15,
      marginBottom:15,  
    },
    button:{
        borderRadius: 10,
        height: 65,
        width:200,
        display:'flex',
        justifyContent:'center',

    },
    buttonBorder:{
        borderWidth:1,
        borderColor:'#838383',
    },
    text:{
        color: 'white',
        fontWeight: 'bold',
        fontSize:18,
        width:120,
        textAlign:'left',
    },
    textBorder:{
        color: colors.text,
    },
    content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    },
});

