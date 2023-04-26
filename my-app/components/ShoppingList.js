import React, { useContext, useState } from 'react'
import {
    Text,
    SafeAreaView,
    StyleSheet,
  } from "react-native";
import ItemList from './ItemList'
import Constants from 'expo-constants';
import AddItem from './AddItem';

//Top level component
export default function ShoppingList() {

      return (
    <SafeAreaView style={styles.screen}>
        <Text style={styles.center}>
            <h1>Shopping List</h1>
        </Text>
        <AddItem />
        <ItemList />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    screen: {
      paddingTop: Constants.StatusBarHeight,
      flexDirection: "column",
      flex: 1,
    },
    center: {
        textAlign: "center",
    },
});