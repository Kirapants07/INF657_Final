import { useState, useEffect, createContext, useContext } from "react";
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
import { UserAuth } from "./AuthContext";


const FavoritesContext = createContext();

export const FavoritesProvider = ({children}) => {

  const {user } = UserAuth();

  const [FavoriteList, setFavoriteList] = useState([]);
  // const [FavoriteListEdit, setFavoriteListEdit] = useState({
  //   item: {},
  //   edit: false,
  // });

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
            console.log(favoriteList);
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
            // user: user.uid,
            },
        ]);
    }
    catch (error) {
        console.log(error);
    }
  };
  
  // //edit Item
  // const editFavItem = (item) => {
  //   setFavoriteListEdit({ item, edit: true });
  // };

  // //Update Item
  // const updateFavItem = async (id, updItem) => {
  //   try {
  //     const docRef = doc(db, "MovieList", id);
  //     await updateDoc(docRef, updItem);
  //     const updatedFavoriteList = FavoriteList.map((item) => {
  //       if (item.id === id) {
  //         return {
  //           id,
  //           data: {
  //             ...item.data,
  //             ...updItem,
  //           },
  //         };
  //       } else {
  //         return item;
  //       }
  //     });
  //     setFavoriteList(updatedFavoriteList);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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