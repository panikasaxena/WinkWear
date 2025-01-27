import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (
    <Stack>
      {/* Auth Group - No Header */}
      <Stack.Screen
        name="(auth)" // Matches the (auth) folder
        options={{ headerShown: false }} // Hide header for all auth screens
      />
      {/* Main Group - No Header */}
      <Stack.Screen
        name="(main)" // Matches the (main) folder
        options={{ headerShown: false }} // Hide header for all main screens
      />
    </Stack>
  );
}