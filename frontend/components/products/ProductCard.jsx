import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{uri: product?.image}} style={styles.image}/>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.description}>{product.description.substring(0,30)}...more</Text>
        <Text style={styles.price}>{product.price}</Text>
        <View style={styles.buttoncontainer}>
            <TouchableOpacity style={styles.btn1}>
                <Text>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}>
                <FontAwesome5 name="shopping-cart" size={16} color="white" />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        padding:10,
        flexDirection:"row",
    },
    card:{
        borderWidth:1.5,
        borderRadius:5,
        borderColor:"#9b9898",
        width:"40%",
        padding:10,
        backgroundColor:"white",
        justifyContent:"center"
    },
    image:{
        height:100,
        width:100,
        alignSelf:"center"
    },
    description:{
        fontSize:12,
        marginBottom:5,
    },
    buttoncontainer:{
        flexDirection:'row',
        gap:10
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
        marginBottom:5,
    },
    price:{
        fontSize:13,
        fontWeight:"bold",
        marginBottom:5,
    },
    btn2:{
        backgroundColor:"#004aab",
        width:100,
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:5,
        borderRadius:5
    },
    btn1:{
        backgroundColor:"#004aab",
        width:100,
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:5,
        borderRadius:5,
    }
})