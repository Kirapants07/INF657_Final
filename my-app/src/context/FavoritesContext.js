import { useState, useEffect, createContext} from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";


const FavoritesContext = createContext();

export const FavoritesProvider = ({children}) => {

  const [FavoriteList, setFavoriteList] = useState([]);

  useEffect (() => {
    const fetchItem = async () => {
        try { 
            const FavoriteListRef = collection(db, "Movielist");
            const q = query(FavoriteListRef, orderBy("Title"), limit(20));
            const querySnapShot = await getDocs(q);
            const favoriteList = querySnapShot.docs.map((doc) => ({
                id: doc.id,
                imdbID: doc.data().imdbID,
                Title: doc.data().Title,
                Year: doc.data().Year,
                Poster: doc.data().Poster,
            }));
            setFavoriteList(favoriteList);
        }
        catch (error) {
            console.log(error);
        }
    };
    fetchItem();
  },[]);

  //Add Item
  const addFavItem = async (newItem) => {
    try{
        const docRef = await addDoc(collection (db, "Movielist"), newItem);
        console.log("Document written: " + docRef.id);
        setFavoriteList((previousFavoriteList) => [
          ...previousFavoriteList, 
          {
            id: docRef.id,
            imdbID: newItem.imdbID,
            Title: newItem.Title,
            Year: newItem.Year,
            Poster: newItem.Poster,
            },
        ]);
    }
    catch (error) {
        console.log(error);
    }
  };
  
  //Delete Item
  const deleteFavItem = async (id) => {
        try {
            const docRef = doc(db, "Movielist", id);
            await deleteDoc(docRef);
            setFavoriteList(FavoriteList.filter((movie) => movie.id !== id));
        }
        catch (error) {
            console.log(error);
        }
  };

    return (
        <FavoritesContext.Provider value = {{FavoriteList, addFavItem, deleteFavItem}}>
            {children}
        </FavoritesContext.Provider>

  );
};

export default FavoritesContext;