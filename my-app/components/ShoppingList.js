import React, { useContext, useState } from 'react'
import {
    Text,
    SafeAreaView,
    StyleSheet,
  } from "react-native";
import ItemList from './ItemList'
import Constants from 'expo-constants';
import AddItem from './AddItem';
import ShoppingListContext from '../context/ShoppingListContext';

//Top level component
//accepts props title, description, price, image, and quantity
//NOTE to instructor: I could not figure out what information these props could be passing to ShoppingList (it would only be a single item?)
export default function ShoppingList({title, description, price, image, quantity}) {
    const {ShoppingList} = useContext(ShoppingListContext);
    const [items, setItems] = useState(ShoppingList); //holds shopping list

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
      flexDirection: "column",
    },
    center: {
        textAlign: "center",
    },
});