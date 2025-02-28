import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, Pressable } from 'react-native';
import XCarousel from 'react-native-x-carousel';
import {Bannerdata} from '../../data/Bannerdata.js'
const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 1;
const ITEM_HEIGHT = 200; // Adjust as needed

const Banner = () => {
  return (
    <View style={styles.container}>
      <XCarousel
        data={Bannerdata}
        renderItem={(item) => (
          <View key={item._id} style={styles.itemContainer}>
            <Pressable onPress={()=>alert(item._id)}>
                <Image source={{ uri: item.image }} style={styles.image} />
            </Pressable>
          </View>
        )}
        autoplay
        loop
        autoplayInterval={3000}

      />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop:10,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
