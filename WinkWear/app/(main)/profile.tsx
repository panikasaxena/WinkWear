import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const profile = () => {
  return (
    <View>
      <Link href="/(auth)/sign_in">Sign In</Link>
      <Link href="/(auth)/sign_up">Sign up</Link>
    </View>
  )
}

export default profile