import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Grid from '../../components/grid';
import NavBar from '../../components/navbar';
import Score from '../../components/score';
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/constants/Colors";
import { GameProvider, UseGame } from "@/contexts/gameContext";
import GestureRecognizer from 'react-native-swipe-gestures';


export default function game(){
  const {score, moveBlocks} = UseGame();

  const handleSwipe = (direction: string) => {
    
    switch (direction) {
      case 'SWIPE_LEFT':
        moveBlocks(2); 
        break;
      case 'SWIPE_RIGHT':
        console.log(direction)
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
      <GameProvider>
        <View style={styles.screen}>
          <LinearGradient
            colors={[colors.gradient1, colors.gradient2, colors.gradient3]} 
            style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>

              <NavBar iconHome={true} iconUser={true}/>

              <Score/>
              
                
                <Grid/>

            
              

          </LinearGradient>
        </View> 
      </GameProvider>
    ); 
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
  },
  container: {
    flex: 1,
    alignItems: 'center' ,
    height:'100%',
  },
});