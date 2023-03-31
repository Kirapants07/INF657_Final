import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
} from "react-native";

import Swipeable from "react-native-gesture-handler/Swipeable";

//************************equivalent of Task*/
//child component
//represents a SINGLE ITEM in the shopping list
//ListItem component should accept the item data as a prop, and display the item name and quantity.
export default function ListItem({data}) {
  return (
    // <Swipeable renderRightActions={renderRightActions}>
    <Swipeable>
      {/* <TouchableHighlight underlayColor={"#lightgrey"} onPress={data.onPress}> */}
      <TouchableHighlight>
        <>
          <View style={styles.mainContainer}>
            {/* <Image style={styles.image} source={data.image} /> */}
            {/* <Text style={styles.title}>{data.title}</Text> */}
            {/* <Text style={styles.description}>Description: {data.description}</Text> */}
          </View>
        </>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#b8860b",
    flexDirection: "column",
    padding: 25,
    paddingTop: 50,
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
    fontWeight: "bold",
    fontSize: 25,
    padding: 5,
    color: "black",
  },
});