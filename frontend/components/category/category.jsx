import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Categorydata} from '../../data/Categorydata.js'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from 'expo-router'

const category = () => {
    const navigation=useNavigation()
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
        {
            Categorydata?.map((item)=>(
                <View key={item._id} >
                    <TouchableOpacity style={styles.category} onPress={()=>navigation.navigate(item.path)}>
                        <img src={item.image} style={styles.image} />
                        <Text style={styles.title}>{item.name}</Text>
                    </TouchableOpacity>
                    
                </View>
            ))
        }
    </View>
    </ScrollView>
    
  )
}

export default category

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        display:"flex",
        gap:20,
        padding:10
    },
    category:{
        alignItems:"center",
        justifyContent:"center"
    },
    image:{
        borderRadius:50,
        height:50,
        width:50
    },
    title:{
        fontSize:14,
        fontWeight:500
        
    }
})