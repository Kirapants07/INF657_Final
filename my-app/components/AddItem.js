import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function AddItem({callback}) {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');
    const [quantity,setQuantity] = useState('');
    const [id, setid] = useState(1);

    // adds new item
    const handleSubmit = () => {
      // if we have all required fields
      if(title && description && price && quantity) {
        const item = {
          id,
          title,
          description,
          price: parseInt(price),
          quantity: parseInt(quantity),
        };
        callback(item); //send item to items useState in ShoppingList
        console.log(item);
        
        //reset fields
        setTitle('');
        setDescription('');
        setPrice('');
        setQuantity('');
        setid(id+1); //increment id to make sure they are unique
      }
      else {
        alert("Missing required field(s)");
      }
    };

  return (
    <SafeAreaView style={styles.screen}> 
        <View style={styles.viewContainer}>
            <Text>
                {/* input field for item  title */}
                <TextInput
                style={styles.input}
                placeholder="New Item"
                onChangeText={(title) => setTitle(title)}
                value = {title}
                />
                {/* input field for item  description */}
                <TextInput
                style={styles.input}
                placeholder="description"
                onChangeText={(description) => setDescription(description)}
                value = {description}
                multiline="true"
                />               
                {/* input field for item  price */}
                <TextInput
                style={styles.input}
                placeholder="Price $"
                onChangeText={(price) => setPrice(price)}
                value = {price}
                />               
                {/* input field for item  quantity */}
                <TextInput
                style={styles.input}
                placeholder="Quantity"
                onChangeText={(quantity) => setQuantity(quantity)}
                value = {quantity}
                />  
            </Text>
        </View>
        {/* submit button */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>
            Add Item
          </Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#add8ed",
    alignItems: "center",
    justifyContent: "center",
  },
  viewContainer: {
    flex: 2,
    padding: 50,
    backgroundColor: "#add8ed",
  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 20,
    borderColor: "#add8ed",
    borderBottomColor: "black",
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});