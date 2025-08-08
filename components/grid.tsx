import { colors } from "@/constants/Colors";
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Block from '../components/block';
import { GameProvider, UseGame } from "@/contexts/gameContext";
import GestureRecognizer from "react-native-swipe-gestures";

interface ButtonProps {
    
}

export default function Button(props:ButtonProps){

  const {grid, moveBlocks, newBlock} = UseGame();

  
  const handleSwipe = (direction: string) => {
    
    switch (direction) {
      case 'SWIPE_LEFT':
        moveBlocks(2); 
        break;
      case 'SWIPE_RIGHT':
        moveBlocks(1); 
        break;
      case 'SWIPE_UP':
        moveBlocks(3); 
        break;
      case 'SWIPE_DOWN':
        moveBlocks(4); 
        break;
    }
  };

    return(
        <GestureRecognizer
                        onSwipe={(dir) => handleSwipe(dir)}
                        config={{ velocityThreshold: 0.3, directionalOffsetThreshold: 80 }}>
            <View style={styles.container}>
                
                <View style={styles.row}>
                <Block number={grid[0][0]}></Block> 
                <Block number={grid[0][1]}></Block> 
                <Block number={grid[0][2]}></Block> 
                <Block number={grid[0][3]}></Block> 
                </View>
                <View style={styles.row}>
                <Block number={grid[1][0]}></Block> 
                <Block number={grid[1][1]}></Block> 
                <Block number={grid[1][2]}></Block> 
                <Block number={grid[1][3]}></Block> 
                </View>
                <View style={styles.row}>
                <Block number={grid[2][0]}></Block> 
                <Block number={grid[2][1]}></Block> 
                <Block number={grid[2][2]}></Block> 
                <Block number={grid[2][3]}></Block> 
                </View>
                <View style={styles.row}>
                <Block number={grid[3][0]}></Block> 
                <Block number={grid[3][1]}></Block> 
                <Block number={grid[3][2]}></Block> 
                <Block number={grid[3][3]}></Block> 
                </View>

            </View>
        </GestureRecognizer>
    );
}

const styles = StyleSheet.create({
    container:{
       width:290,
       alignItems:"center",
       backgroundColor:'#242A32',
       justifyContent:'center',
       padding:5,
       borderRadius:10,
       borderColor:colors.playAgain,
       borderWidth:1,
    },
    row:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
    }
});

