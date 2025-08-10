import { GameProvider } from "@/contexts/gameContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <GameProvider>
    <Stack>

      <Stack.Screen
      name = "index"
      options={{headerShown:false}}
      />

      <Stack.Screen
      name = "(stack)"
      options={{headerShown:false}}
      />

    </Stack>
   </GameProvider>
  )
}
