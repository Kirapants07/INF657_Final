import {
  FlatList,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import ListItem from "./ListItem"; //single item
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Child of ShoppingList
//Parent of ListItem
//displays a list of items
export default function ItemList({items, setItems}) {
  const deleteItem = (id) => {
    console.log(id);
    setItems(items.filter((item) => item.id !== id));
  };

  return (
  <>
     <FlatList
        data={items}
        keyExtractor={(shoppingList) => shoppingList.id}
        renderItem={({ item }) => (
          <ListItem
            data = {item}
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
  );
}

const styles = StyleSheet.create({
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
});

