import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true, // Show header for all screens
        headerTitle: "WinkWear", // Set the app name as the header title
        headerTitleAlign: "center", // Center the title
        headerStyle: {
          backgroundColor: "#f8f8f8", // Customize header background color
        },
        headerTitleStyle: {
          fontWeight: "bold", // Customize title font
          fontSize: 20,
        },
      }}
    >
      {/* Auth Group */}
      <Stack.Screen name="(auth)" />
      {/* Main Group */}
      <Stack.Screen name="(main)" />
    </Stack>
  );
}