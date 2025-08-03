import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Grid from '../../components/grid';
import NavBar from '../../components/navbar';
import Score from '../../components/score';
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/constants/Colors";

export default function game(){
    return(
      <View style={styles.screen}>
        <LinearGradient
          colors={[colors.gradient1, colors.gradient2, colors.gradient3]} 
          style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>

            <NavBar iconHome={true} iconUser={true}/>

            <Score score={12480}/>

            <Grid/>

        </LinearGradient>
       </View> 

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