import React, { createContext, useState,useContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [MovieItems, setMovieItems] = useState([]);

  const addItemToMovie = (item) => {
    setMovieItems((prevItems) => [...prevItems, item]);
  };

  const removeItemFromMovie = (item) => {
    setMovieItems((prevItems) => {
      return prevItems.filter((i) => i.id !== item.id);
    });
  };

  const calculateTotalPrice = () => {
    return MovieItems.reduce((total, item) => {
      return total + item.price;
    }, 0);
  };

  const values = {
    MovieItems,
    addItemToMovie,
    removeItemFromMovie,
    calculateTotalPrice,
  };

  return <MovieContext.Provider value={values}>{children}</MovieContext.Provider>;
};

export const Movie = () => {
  return useContext(MovieContext);
};
