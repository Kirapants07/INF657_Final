import { useState, useEffect, createContext } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";


const ShoppingListContext = createContext();

export const ShoppingListProvider = ({children}) => {
  const [shoppingList, setShoppingList] = useState([]);
  const [shoppingListEdit, setShoppingListEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect (() => {
    const fetchItem = async () => {
        try { 
            const shoppingListRef = collection(db, "shoppinglist");
            const q = query(shoppingListRef, orderBy("title"), limit(20));
            const querySnapShot = await getDocs(q);
            const shoppingList = querySnapShot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }));
            setShoppingList(shoppingList);
        }
        catch (error) {
            console.log(error);
        }
    };
    fetchItem();
  });

  //Add Item
  const addItem = (newItem) => {
    try{
        const docRef = addDoc(collection (db, "shoppinglist"), newItem);
        console.log("Document written: ", docRef.id);
        setShoppingList((previousShoppingList) => [
          ...previousShoppingList, 
          {
            id: docRef.id,
            data: newItem
            },
        ]);
    }
    catch (error) {
        console.log(error);
    }
  };
  
  //edit Item
  const editItem = (item) => {
    setShoppingListEdit({ item, edit: true });
  };

  //Update Item
  const updateItem = async (id, updItem) => {
    try {
      const docRef = doc(db, "shoppingList", id);
      await updateDoc(docRef, updItem);
      const updatedShoppingList = shoppingList.map((item) => {
        if (item.id === id) {
          return {
            id,
            data: {
              ...item.data,
              ...updItem,
            },
          };
        } else {
          return item;
        }
      });
      setShoppingList(updatedShoppingList);
    } catch (error) {
      console.log(error);
    }
  };

  //Delete Item
  const deleteItem = (id) => {
    if (window.confirm("Deleted Items cannot be recovered. Do you want to delete?")) {
        try {
            const docRef = doc(db, "shoppinglist", id);
            deleteDoc(docRef);
            setShoppingList(shoppingList);
        }
        catch (error) {
            console.log(error);
        }
    }
  };

    return (
        <ShoppingListContext.Provider value = {{shoppingList, addItem, editItem, updateItem, deleteItem, shoppingListEdit}}>
            {children}
        </ShoppingListContext.Provider>

  );
};

export default ShoppingListContext;