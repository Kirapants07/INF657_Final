import React, { useState } from 'react'
import {
    Text,
    SafeAreaView,
    StyleSheet,
  } from "react-native";
import ItemList from './ItemList'
import Constants from 'expo-constants';
import AddItem from './AddItem';

//Top level component
//accepts props title, description, price, image, and quantity
//NOTE to instructor: I could not figure out what information these props could be passing to ShoppingList (it would only be a single item?)
export default function ShoppingList({title, description, price, image, quantity}) {
    const [items, setItems] = useState([]); //holds shopping list

    const callback = (item) => {
      setItems(
        [ item, ...items]
      );
    };

      return (
    <SafeAreaView style={styles.screen}>
        <Text style={styles.center}>
            <h1>Shopping List</h1>
        </Text>
        <AddItem callback={callback}/>
        <ItemList items={items} setItems={setItems} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    screen: {
      paddingTop: Constants.StatusBarHeight,
      flex: 1,
      flexDirection: "column",
    },
    center: {
        textAlign: "center",
    },
});