import React, { useState } from 'react';
import {StyleSheet, Text} from 'react-native';
import ItemList from './ItemList';

//top-level component
// ShoppingList accepts the following props:
    // Title (string): the title of the item.
    // Description (string): the description of the item.
    // Price (integer): the price of the item.
    // Image: the image of the item.
    // Quantity: the quantity of the item.
//{title, description, price, image, quantity}
// Swipable buttons to edit and delete the items. 

export default function ShoppingList({title, description, price, quantity}) {
    //state variable called items that is initialized as an empty array.
    const [items, setItems] = useState([]);
  return (
    <>
      <Text style={styles.paragraph}>
        <h1>Shopping List</h1>
        <ItemList items={items} />
      </Text>
    </>
  )
}

const styles = StyleSheet.create({
    paragraph: {
      fontSize: 30,
    },
  });