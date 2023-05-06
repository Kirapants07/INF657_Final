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
import MovieListContext from "../../context/MovieListContext";
import ListItem from "../ListItem";

//Child of MovieList
//Parent of ListItem
//displays a list of items
export default function ItemList() {
  
  const {MovieList, deleteItem} = useContext(MovieListContext);

  return (
  <SafeAreaView style={styles.outerscreen}>
    <Text style={styles.center}>
        <h1>Favorites List</h1>
    </Text>
  <>
     <FlatList
        data={MovieList}
        keyExtractor={(MovieList) => MovieList.id}
        renderItem={({ item }) => (
          <ListItem
            data = {item.data}
            renderRightActions={() => (
              <View style={styles.deleteContainer}>
                <TouchableWithoutFeedback onPress={() => deleteItem(item.id)}>
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
  },
  screen: {
    flex: 1,
  },
  container: {
    padding: 20,
    paddingTop: 100,    
  },
  secondContainer: {
    padding: 20,
    paddingTop: 50,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 7,
  },
  description: {
    color: "#fff",
    fontWeight: "bold",
  },
  deleteContainer: {
    backgroundColor: "red",
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  editContainer: {
    backgroundColor: "yellow",
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
  button: {
    backgroundColor: "#0a5273",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
    center: {
      textAlign: "center",
  },
});

