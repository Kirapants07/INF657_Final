import React, { useContext, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FavoritesContext from "../context/FavoritesContext";


//Child of ItemList
//A Single item in the Movie list
export default function ListItem({
  data,
  renderRightActions,
  renderLeftActions,
}) {
  
  const {FavoriteList, deleteItem, addFavItem } = useContext(FavoritesContext);
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
            <Image style={styles.image} source={data.Poster}/>
            <Text style={styles.title}>
            <TouchableWithoutFeedback onPress={() => addFavItem(data)}>
              <MaterialCommunityIcons
                name="heart-outline"
                size={40}
                color="pink"
              />
            </TouchableWithoutFeedback>
            {data.Title}
            {}
            </Text>
          </View>
        </>
      </TouchableHighlight>
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
    width: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 222,
    width: 150,
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
