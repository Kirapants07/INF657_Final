import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";


//A Single item in the Movie list
export default function ListItem({
  data,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions} >
        <>
          <View style={styles.mainContainer}>
            <Image style={styles.image} source={data.Poster}/>
            <Text style={styles.title}>
            {data.Title}
            </Text>
          </View>
        </>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 25,
    paddingTop: 50,
    marginBottom:5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 444,
    width: 300,
    marginRight: 10,
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 5,
    color: "black",
  },
});
