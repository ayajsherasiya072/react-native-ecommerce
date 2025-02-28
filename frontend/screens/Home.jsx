import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from '../components/layout/Layout'
import Category from '../components/category/category'
import Banner from '../components/banner/Banner'
import Products from '../components/products/Products'
import Header from '../components/layout/Header'
const Home = () => {
  return (
    <Layout>
      <Header/>
        <Category/>
        <Banner/>
        <Products/>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({});
