import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "@/constants/Colors";
import Button from '../components/button';
import NavBar from '../components/navbar';
import { useLoadFonts } from '../hooks/useLoadFonts';


export default function Index() {

const fontsLoaded = useLoadFonts();

  return (
      <View style={styles.screen}>
        <LinearGradient
          colors={[colors.gradient1, colors.gradient2, colors.gradient3]} 
          style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>

            <NavBar iconHome={false} iconUser={true}/>

            <View>
              <Text style={styles.title}>2048</Text>
            </View>

            <Button title="Novo Jogo" color="newGame" route="/game"></Button>
            <Button title="Continuar" color="continue" route="/game"></Button>
            <Button title="Melhores Pontuações" color="ranking" route="/ranking"></Button>

            <View style={styles.instructionsView}>
              <Text style={styles.instructions}>Deslize para combinar blocos e conseguir as maiores pontuações.</Text> 
            </View>
              
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
  instructions: {
    color: colors.text,
    textAlign:'center',
  },
  instructionsView:{
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center' ,
    width:'60%',
    marginTop:30,
  },
  title:{
    fontSize: 85,
    color: colors.text,
    marginBottom:10,
    fontFamily:'Inter_900Black'
  },
});