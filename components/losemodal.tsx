import { colors } from "@/constants/Colors";
import React from "react";
import { TouchableOpacity, View, Modal, Text, StyleSheet } from "react-native";
import { GameProvider, UseGame } from "@/contexts/gameContext";
import Score from "./score";
import Button from "./button";
import { LinearGradient } from "expo-linear-gradient";


export default function LoseModal(){

    const {canMerge,restartGame} = UseGame();

    return(
    <View>   
      
      <Modal visible={!canMerge} transparent animationType="fade">

        <View style={[styles.container, styles.modal]}>

            <LinearGradient
                colors={[colors.gradient1, colors.gradient2, colors.gradient3]} 
                 style={styles.gradient} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }}>

                <View style={styles.container}>
                    <Text style={styles.loseText}>Você Perdeu</Text>
                </View>

                <View style={styles.container}>
                    <Score/>
                </View>

                <View style={styles.container}>
                    <TouchableOpacity style={styles.button} onPress={restartGame}>     
                        <View style={styles.content}>    
                            <Text style={styles.text}>jogar Novamente</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </LinearGradient>

        </View>

      </Modal>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',      
    },
    modal:{
        marginTop:'20%',
        width:"100%",
    },
    gradient:{
        width:'80%',
        borderWidth:1,
        borderColor:'#838383',
        borderRadius:10,
        height:'60%',
    },
    text:{
        color: 'white',
        fontWeight: 'bold',
        fontSize:18,
        width:120,
        textAlign:'center',
    },
    button:{
        borderRadius: 10,
        height: 65,
        width:200,
        display:'flex',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#838383',
        backgroundColor:colors.playAgain,
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
    },
    loseText:{
        color:colors.text,
        fontSize:30,
        fontFamily:'Inter_900Black',
        marginTop:'10%',
    }
});
