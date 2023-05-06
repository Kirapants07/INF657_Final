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


const MovieListContext = createContext();

export const MovieListProvider = ({children}) => {
  const [MovieList, setMovieList] = useState({});
  const [MovieListEdit, setMovieListEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect (() => {
    const fetchItem = async () => {
        try { 
            const MovieListRef = collection(db, "Movielist");
            const q = query(MovieListRef, orderBy("title"), limit(20));
            const querySnapShot = await getDocs(q);
            const MovieList = querySnapShot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }));
            setMovieList(MovieList);
        }
        catch (error) {
            console.log(error);
        }
    };
    fetchItem();
  }, );

  //Add Item
  const addItem = (newItem) => {
    try{
        const docRef = addDoc(collection (db, "Movielist"), newItem);
        console.log("Document written: ", docRef.id);
        setMovieList((previousMovieList) => [
          ...previousMovieList, 
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
    setMovieListEdit({ item, edit: true });
  };

  //Update Item
  const updateItem = async (id, updItem) => {
    try {
      const docRef = doc(db, "MovieList", id);
      await updateDoc(docRef, updItem);
      const updatedMovieList = MovieList.map((item) => {
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
      setMovieList(updatedMovieList);
    } catch (error) {
      console.log(error);
    }
  };

  //Delete Item
  const deleteItem = (id) => {
    if (window.confirm("Deleted Items cannot be recovered. Do you want to delete?")) {
        try {
            const docRef = doc(db, "Movielist", id);
            deleteDoc(docRef);
            setMovieList(MovieList);
        }
        catch (error) {
            console.log(error);
        }
    }
  };

    return (
        <MovieListContext.Provider value = {{MovieList, addItem, editItem, updateItem, deleteItem, MovieListEdit}}>
            {children}
        </MovieListContext.Provider>

  );
};

export default MovieListContext;