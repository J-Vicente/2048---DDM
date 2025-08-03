import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import NavBar from '../../components/navbar';
import Input from '../../components/input';
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/constants/Colors";
import ButtonAuth from "@/components/buttonauth";
import { Link} from "expo-router";

export default function login(){


    return(
    <View style={styles.screen}>
        <LinearGradient
            colors={[colors.gradient1, colors.gradient2, colors.gradient3]} 
            style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
            
            <NavBar iconHome={true} iconUser={true} />
            
            <View style={styles.main}>
              <View style={styles.form} > 

                <Text style={[styles.text, styles.title]} >Cadastro</Text>
                <Text style={[styles.text, {marginBottom:10}]} >Cadastre-se para salvar seus resultados</Text>
                
                <Input label={'Nome do usuário'} placeHolder={'seu nome'}/>

                <Input label={'Email'} placeHolder={'seu@email.com'}/>

                <Input label={'Senha'} placeHolder={'sua senha'}/>

                <Input label={'Confirmar Senha'} placeHolder={'confirme sua senha'}/>

                <ButtonAuth title={'Criar Conta'} route={'/login'}/>

                <Text style={[styles.text, styles.options]} >Já tem conta?
                  <Link style={styles.link} href='/login'> Entrar</Link> 
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
    paddingBottom:10,
    paddingTop:10,
  },
  main:{
    justifyContent:'center',
    height:'80%',
    width:'85%',
    marginTop:20,
  },
  title:{
    fontFamily:'Inter_900Black',
    fontSize:32,
    marginBottom:10,
  },
  options:{
    fontFamily:'Inter_700Bold',
    marginTop:10,
  }
});