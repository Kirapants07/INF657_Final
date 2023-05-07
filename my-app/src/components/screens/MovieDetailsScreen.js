import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FavoritesContext from "../../context/FavoritesContext";


const MovieDetailsScreen = () => {

  const {FavoriteList, addFavItem} = useContext(FavoritesContext);

  //fetch movie results
  // useEffect(() => {
  //   const fetchMovies = async () =>{
  //       if (search !== "") {
  //           try{
  //               const response =  await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`);
  //               let movieList = await response.json();

  //               //if results found, map and display
  //               if (movieList.Response == "True"){

  //                   movieList = movieList.Search.map((doc) => ({
  //                       imdbID: doc.imdbID,
  //                       Title: doc.Title,
  //                       Year: doc.Year,
  //                       Poster: doc.Poster,
  //                   }));
  //                   setMovieData(movieList);
  //               }
  //           } catch (err) {
  //               console.log(err);
  //           }
  //         }
  //       }
  //       fetchMovies();
  //   }, [search] );

//   <View style={styles.imageContainer}>
//   <Image style={styles.image} source={{ uri: data.image }} />
// </View>
// <View style={styles.detailsContainer}>
//   <View style={styles.quantityContainer}>
//     {/* <TouchableOpacity
//       style={styles.button}
//       onPress={() => setFavorite((prev) => !prev)}
//     >
//       <MaterialCommunityIcons name="heart" size={24} color="pink" />
//     </TouchableOpacity> */}
//     <Text style={styles.quantity}>{favorite}</Text>
//   </View>
//   <TouchableOpacity
//     style={styles.addToCartButton}
//     // onPress={}
//   >
//     <MaterialCommunityIcons name="heart" size={24} color="pink" />
//     <Text style={styles.addToCartText}>Add to Favorites</Text>
//   </TouchableOpacity>
// </View>



  return (
    <View style={styles.container}>
      <Text>Movie Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    height: "50%",
    width: "100%",
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  detailsContainer: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FF6347",
    borderRadius: 20,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  quantity: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  addToCartButton: {
    backgroundColor: "#FF6347",
    borderRadius: 20,
    height: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  addToCartText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default MovieDetailsScreen;