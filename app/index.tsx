import { useRouter } from "expo-router";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function Index() {
  const router = useRouter();



  return (
    <View>
      <TouchableOpacity>
        <Text>Novo Jogo</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>Continuar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>Ranking</Text>
      </TouchableOpacity>

    </View>
  );
}
