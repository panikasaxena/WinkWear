import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import "./global.css";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        // Style configuration for the tab bar
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          paddingBottom: 5,
        },
        // Hide the header since you might not need it
        // headerShown: false,
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }: { color: string }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      
      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }: { color: string }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
      
      {/* Cart Tab */}
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }: { color: string }) => (
            <FontAwesome name="shopping-cart" size={24} color={color} />
          ),
        }}
      />
      
      {/* Wishlist Tab */}
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wishlist",
          tabBarIcon: ({ color }: { color: string }) => (
            <FontAwesome name="heart" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}