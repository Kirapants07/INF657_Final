import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import Constants from "expo-constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {ShoppingListData} from "./ShoppingListData"; //example items
import ListItem from "./ListItem"; //single item


//***********************Equivalent of TaskList */

export default function ItemList({items}) {
    //state variable with example data
    const [shoppingList, setShoppingList] = useState(ShoppingListData);
    const [refreshing, setRefreshing] = useState(false);

    //"deletes" items by displaying only items that do not match given id
    const deleteTask = (id) => {
        setShoppingList(shoppingList.filter((item) => item.id !== id));
    };
    return (
        <SafeAreaView style={styles.screen}>
        <h2>ItemList</h2>
        <FlatList
            data={shoppingList} //required; an array of data to use
            keyExtractor={(shoppingList) => shoppingList.id} //optional; extracts unique key for a given item at specified index
            //required; takes an item from data and renders it into the list
            renderItem={({ item }) => (
            <ListItem
                // passing data
                title={item.title}
                description={item.description}
                price={item.price}
                image={item.image}
                quantity={item.quantity}
                //function runs when user swipes right
                renderRightActions={() => (
                <View style={styles.deleteContainer}>
                    <TouchableWithoutFeedback onPress={() => deleteTask(item.id)}>
                    <MaterialCommunityIcons
                        name="trash-can"
                        size={35}
                        color="black"
                    />
                    </TouchableWithoutFeedback>
                </View>
                )}
            />
            )}
        />
        </SafeAreaView>
    );
    }

    const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.StatusBarHeight,
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
