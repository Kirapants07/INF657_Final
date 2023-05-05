import {
  FlatList,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import ListItem from "./ListItem"; //single item
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import ShoppingListContext from "../context/ShoppingListContext";

//Child of ShoppingList
//Parent of ListItem
//displays a list of items
export default function ItemList() {
  
  const {shoppingList, deleteItem, editItem, updateItem } = useContext(ShoppingListContext);
  const [items, setItems] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [price,setPrice] = useState("");
  const [quantity,setQuantity] = useState("");
  const [id, setId] = useState(null);

  const handleEditItem = (item) => {
    setId(item.id);
    setTitle(item.data.title);
    setDescription(item.data.description);
    setPrice(item.data.price);
    setQuantity(item.data.quantity);

    setModalVisible(true);
    editItem(item);
  };
  
  const handleUpdateItem = () => {
    if (id) {
      updateItem(id, {title, description, price, quantity});
      setModalVisible(false);
    }
  };

  return (
  <>
     <FlatList
        data={shoppingList}
        keyExtractor={(shoppingList) => shoppingList.id}
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
            renderLeftActions={() => (
              <View style={styles.editContainer}>
                <TouchableWithoutFeedback onPress={() => handleEditItem(item)}>
                  <MaterialCommunityIcons
                    name="pencil"
                    size={40}
                    color="black"
                  />
                </TouchableWithoutFeedback>
              </View>
            )}
          />
        )}
      />
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>
            Edit Item
          </Text>
          <TextInput style={styles.input} placeholder="Item" value ={title} onChangeText={setTitle}/>
          <TextInput style={styles.input} placeholder="Item" value ={description} onChangeText={setDescription}/>
          <TextInput style={styles.input} placeholder="Item" value ={price} onChangeText={setPrice}/>
          <TextInput style={styles.input} placeholder="Item" value ={quantity} onChangeText={setQuantity}/>
          <TouchableOpacity onPress={handleUpdateItem} style={styles.button}>
            <Text style={styles.buttonText}>Update Item</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  editContainer: {
    backgroundColor: "yellow",
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
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
});

