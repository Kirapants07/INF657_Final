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
export default function ShoppingList() {
    const [items, setItems] = useState([]); //holds shopping list

    const callback = (item) => {
      setItems(
        [ item, ...items]
      );
      console.log("items(previous version): ");
      console.log(items);
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