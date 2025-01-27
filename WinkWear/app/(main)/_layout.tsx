import "./global.css";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text } from 'react-native'
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
          tabBarIcon: ({ color }: { color: string }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }: { color: string }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }: { color: string }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wish List",
          tabBarIcon: ({ color }: { color: string }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />


    </Tabs>
  )
}

export default _layout
