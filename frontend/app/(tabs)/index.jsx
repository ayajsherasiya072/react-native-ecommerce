import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screens/Home'
import About from '../..//screens/About'
import ProductDetails from '../../screens/ProductDetails'
import Notification from '../../screens/Notification'
import Profile from '../../screens/Profile'
import Cart from '../../screens/Cart'

const stack=createNativeStackNavigator()

const index = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="home" options={{headerShown:false}} component={Home} />
      <stack.Screen name="mobile" options={{headerShown:false}} component={About} />
      <stack.Screen name="productdetail" options={{headerShown:false}} component={ProductDetails} />
      <stack.Screen name="notification" options={{headerShown:false}} component={Notification} />
      <stack.Screen name="cart" options={{headerShown:false}} component={Cart} />
      <stack.Screen name="profile" options={{headerShown:false}} component={Profile} />
    </stack.Navigator>
  )
}

export default index

const styles = StyleSheet.create({})