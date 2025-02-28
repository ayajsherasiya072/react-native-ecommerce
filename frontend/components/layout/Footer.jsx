import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

import { useRoute } from '@react-navigation/native';
import { useNavigation } from 'expo-router';


const Footer = () => {
  const navigation=useNavigation()
  const route=useRoute()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('home')}>
      <Entypo name="home" size={24} color={route.name === "home" ? "black" : "white"} />
        <Text style={[styles.btntext, route.name==="home" && styles.active]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menu} onPress={()=>navigation.navigate("notification")}>
        <Ionicons name="notifications" size={24} color={route.name === "notification" ? "black" : "white"} />
        <Text style={[styles.btntext, route.name==="notification" && styles.active]}>Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menu} onPress={()=>navigation.navigate("cart")}>
        <Entypo name="shopping-cart" size={24} color={route.name === "cart" ? "black" : "white"}  />
        <Text style={[styles.btntext, route.name==="cart" && styles.active]}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menu} onPress={()=>navigation.navigate("profile")}>
        <Entypo name="user" size={24} color={route.name === "profile" ? "black" : "white"}  />
        <Text style={[styles.btntext, route.name==="profile" && styles.active]}>Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    padding:10,
    justifyContent:"space-between"
  },
  menu:{
    alignItems:"center",
    justifyContent:"center",
  },
  btntext:{
    color:"white",
    fontSize:16
  },
  active:{
    color:"black"
  }
})