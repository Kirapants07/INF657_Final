import React, { useContext, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CustomInput from './shared/CustomInput';
import CustomButton from './shared/CustomButton';
import ShoppingListContext from '../context/ShoppingListContext';

export default function AddItem() {
  const {addItem} = useContext(ShoppingListContext);

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');
    const [quantity,setQuantity] = useState('');

    // adds new item
    const handleSubmit = () => {
      // if we have all required fields
      if(title && description && price && quantity) {
        const item = {
          title,
          description,
          price: parseInt(price),
          quantity: parseInt(quantity),
        };
        
        addItem(item);
        console.log(item);

        //reset fields
        setTitle('');
        setDescription('');
        setPrice('');
        setQuantity('');
      }
      else {
        alert("Missing required field(s)");
      }
    };

  return (
    <SafeAreaView style={styles.screen}> 
        <View style={styles.viewContainer}>
            <Text>
                <CustomInput placeholder="New Item" value={title} setValue={setTitle} />
                <CustomInput placeholder="Description" value={description} setValue={setDescription} />        
                <CustomInput placeholder="Price $" value={price} setValue={setPrice} />            
                <CustomInput placeholder="Quantity" value={quantity} setValue={setQuantity} />
            </Text>
        </View>
        <CustomButton text="Add Item" onPress={handleSubmit} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  viewContainer: {
    padding: 50,
    backgroundColor: "#f5f5f5",
  },
});