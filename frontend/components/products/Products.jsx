import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductCard from '../products/ProductCard'
import {Productdata} from '../../data/Productdata.js'

const Products = () => {
  return (
    <View>
        {
            Productdata.map((p)=>(
                <ProductCard key={p._id} product={p} />
            ))
        }
    </View>
  )
}

export default Products

const styles = StyleSheet.create({})