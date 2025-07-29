import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import NavBar from '../../components/navbar';
export default function ranking(){
    return(
        <View>
           <NavBar iconHome={true} iconUser={true}/>
           melhores pontuações
        </View>
    );
}