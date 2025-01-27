import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Disable header for all auth screens
      }}
    >
      <Stack.Screen name="sign_in" />
      <Stack.Screen name="sign_up" />
    </Stack>
  );
}