import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
        <View>{children}</View>
        <View style={styles.footer}>
        <Footer/>
        </View>
    </>
  )
}

export default Layout

const styles = StyleSheet.create({
  footer:{
    display:"flex",
    flex:1,
    width:"100%",
    justifyContent:"flex-end",
    zIndex:100,
    borderTopWidth:1,
    position:"absolute",
    bottom:0,
    padding:10,
    borderColor:"#9b9898",
    height:80,
    backgroundColor:"#004aab"
  }
})