import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screens/Home'
import About from '../..//screens/About'

const stack=createNativeStackNavigator()

const index = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="home" options={{headerShown:false}} component={Home} />
      <stack.Screen name="mobile" options={{headerShown:false}} component={About} />
    </stack.Navigator>
  )
}

export default index

const styles = StyleSheet.create({})