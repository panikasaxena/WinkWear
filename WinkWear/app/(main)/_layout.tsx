import "./global.css";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const _layout = () => {
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
        headerShown: false,
      }}
    >

        {/* Home Tab */}
        <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: true, // Enable the header for the Home screen only
          headerTitle: "Home", // Custom header title
          tabBarIcon: ({ color }: { color: string }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
          // Add a search button in the top-right corner
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                console.log("Search button pressed!");
                // Add your navigation or functionality here
              }}
              style={{ marginRight: 10 }}
            >
              <FontAwesome name="search" size={24} color="#007AFF" />
            </TouchableOpacity>
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }: { color: string }) => (
            <FontAwesome name="shopping-cart" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }: { color: string }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wish List",
          tabBarIcon: ({ color }: { color: string }) => (
            <FontAwesome name="heart" size={24} color={color} />
          ),
        }}
      />


    </Tabs>
  )
}

export default _layout
