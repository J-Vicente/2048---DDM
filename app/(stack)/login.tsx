import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import NavBar from '../../components/navbar';
import Input from '../../components/input';
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/constants/Colors";
import ButtonAuth from "@/components/buttonauth";
import { Link} from "expo-router";
import { useLoadFonts } from "@/hooks/useLoadFonts";
import { UserProvider } from "@/contexts/userContext";

export default function login(){
  const fontsLoaded = useLoadFonts();

    return(
      <View style={styles.screen}>
          <LinearGradient
              colors={[colors.gradient1, colors.gradient2, colors.gradient3]} 
              style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
              
              <NavBar iconHome={true} iconUser={false} />
              
              <View style={styles.main}>
                <View style={styles.form} > 

                  <Text style={[styles.text, styles.title]} >Entrar</Text>
                  <Text style={[styles.text, {marginBottom:20}]} >Entre para salvar seus resultados</Text>

                  <Input label={'Email'} placeHolder={'seu@email.com'} name="email"/>

                  <Input label={'Senha'} placeHolder={'sua senha'} name="password"/>

                  <ButtonAuth title={'Entrar'} route={'/'} name="login"/>

                  <Text style={[styles.text, styles.options]} >Esqueceu a senha?</Text>
                  <Text style={[styles.text, styles.options]} >Não tem conta?
                    <Link style={styles.link} href='/registration'> Criar Conta</Link> 
                  </Text> 

                </View>
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
  text:{
    color:colors.text,  
  },
  link:{
    color: colors.newGame,
    fontFamily:'Inter_700Bold',
  },
  form:{
    borderWidth:1,
    borderColor:colors.text,
    borderRadius: 8, 
    width:'100%',
    display:'flex',
    alignItems:'center',
    paddingBottom:40,
    paddingTop:20,
  },
  main:{
    justifyContent:'center',
    height:'80%',
    width:'85%',
  },
  title:{
    fontFamily:'Inter_900Black',
    fontSize:36,
    marginBottom:10,
  },
  options:{
    fontFamily:'Inter_700Bold',
    marginTop:20,
  }
});