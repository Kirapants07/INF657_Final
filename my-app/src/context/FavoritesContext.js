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


const FavoritesContext = createContext();

export const FavoritesProvider = ({children}) => {
  const [FavoriteList, setFavoriteList] = useState([]);
  const [FavoriteListEdit, setFavoriteListEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect (() => {
    const fetchItem = async () => {
        try { 
            const FavoriteListRef = collection(db, "Movielist");
            const q = query(FavoriteListRef, orderBy("title"), limit(20));
            const querySnapShot = await getDocs(q);
            const FavoriteList = querySnapShot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }));
            setFavoriteList(FavoriteList);
        }
        catch (error) {
            console.log(error);
        }
    };
    fetchItem();
  }, []);

  //Add Item
  const addFavItem = (newItem) => {
    try{
        const docRef = addDoc(collection (db, "Movielist"), newItem);
        console.log("Document written: ", docRef.id);
        setFavoriteList((previousFavoriteList) => [
          ...previousFavoriteList, 
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
  const editFavItem = (item) => {
    setFavoriteListEdit({ item, edit: true });
  };

  //Update Item
  const updateFavItem = async (id, updItem) => {
    try {
      const docRef = doc(db, "MovieList", id);
      await updateDoc(docRef, updItem);
      const updatedFavoriteList = FavoriteList.map((item) => {
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
      setFavoriteList(updatedFavoriteList);
    } catch (error) {
      console.log(error);
    }
  };

  //Delete Item
  const deleteFavItem = (id) => {
    if (window.confirm("Deleted Items cannot be recovered. Do you want to delete?")) {
        try {
            const docRef = doc(db, "Movielist", id);
            deleteDoc(docRef);
            setFavoriteList(FavoriteList);
        }
        catch (error) {
            console.log(error);
        }
    }
  };

    return (
        <FavoritesContext.Provider value = {{FavoriteList, addFavItem, editFavItem, updateFavItem, deleteFavItem, MovieListEdit}}>
            {children}
        </FavoritesContext.Provider>

  );
};

export default FavoritesContext;