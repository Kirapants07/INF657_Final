import {
  FlatList,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  SafeAreaView,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useContext } from "react";
import Constants from 'expo-constants';
// import MovieListContext from "../../context/MovieListContext";
import ListItem from "../ListItem";  //single item
import FavoritesContext from "../../context/FavoritesContext";

//Child of MovieList
//Parent of ListItem
//displays a list of items
export default function FavoritesList() {
  
  const {FavoriteList, deleteFavItem} = useContext(FavoritesContext);

  return (
  <SafeAreaView style={styles.outerscreen}>
    <Text style={styles.center}>
        <h1>Favorites List</h1>
    </Text>
  <>
     <FlatList
        data={FavoriteList}
        keyExtractor={(FavoriteList) => FavoriteList.id}
        renderItem={({ item }) => (
        <ListItem
            data = {item}
            renderRightActions={() => (
              <View style={styles.deleteContainer}>
                <TouchableWithoutFeedback onPress={() => deleteFavItem(item.id)}>
                  <MaterialCommunityIcons
                    name="trash-can"
                    size={40}
                    color="black"
                  />
                </TouchableWithoutFeedback>
              </View>
            )}
          />
        )}
      />
    </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerscreen: {
    paddingTop: Constants.StatusBarHeight,
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteContainer: {
    backgroundColor: "red",
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
      textAlign: "center",
  },
});

