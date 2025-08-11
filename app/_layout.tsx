import { GameProvider } from "@/contexts/gameContext";
import { UserProvider } from "@/contexts/userContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <UserProvider>
 '  <GameProvider>
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
    </GameProvider>'
   </UserProvider>
  )
}
