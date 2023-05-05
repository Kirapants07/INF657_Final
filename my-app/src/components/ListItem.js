import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

//Child of ItemList
//A Single item in the shopping list
export default function ListItem({
  data,
  renderRightActions,
  renderLeftActions,
}) {
  const [checked, setChecked] = useState(false); //useState for checkbox. Initial is false

  const handleChange = () => {
    setChecked(!checked); //toggle between true and false
  };

  return (
    <Swipeable renderRightActions={renderRightActions} 
    renderLeftActions={renderLeftActions}>
      <TouchableHighlight underlayColor={"#lightgrey"}>
        <>
          <View style={styles.mainContainer}>
            <Image style={styles.image} source={data.image} />
            <Text style={styles.title}>
            <input 
              type="checkbox"
              checked={checked}
              onChange={handleChange}
              style={styles.checkBox}
            />
            {data.title}
            </Text>
            <Text style={styles.description}>{data.description}</Text>
            <Text style={styles.description}>Price: ${data.price}.00</Text>
            <Text style={styles.description}>Quantity: {data.quantity}</Text>
          </View>
        </>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#4fa6d1",
    padding: 25,
    paddingTop: 50,
    marginBottom:5,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 5,
    color: "black",
  },
  description: {
    fontWeight: "normal",
    fontSize: 25,
    padding: 5,
    color: "black",
  },
  checkBox: {
    width: 20,
    height: 20,
    marginRight: 30,
    marginLeft: 0,
    border: "white",
  }
});
