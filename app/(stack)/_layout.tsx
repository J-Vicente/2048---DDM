import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack>

    <Stack.Screen
    name = "login"
    options={{headerShown:false}}
    />

    <Stack.Screen
    name = "registration"
    options={{headerShown:false}}
    />

    <Stack.Screen
    name = "ranking"
    options={{headerShown:false}}
    />

    <Stack.Screen
    name = "game"
    options={{headerShown:false}}
    />
  </Stack>
  )
}
