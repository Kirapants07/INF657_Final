import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FavoritesContext from "../../context/FavoritesContext";


const MovieDetailsScreen = ({movieID, API_KEY}) => {

  // const {FavoriteList, addFavItem} = useContext(FavoritesContext);
  const [movieDetails, setMovieDetails] = useState([]);


  // fetch movie results
  useEffect(() => {
    const fetchMovies = async () =>{
            try{
                // const response =  await fetch(`https://www.omdbapi.com/?i=${movieID}&apikey=${API_KEY}`);
                const response =  await fetch(`https://www.omdbapi.com/?i=tt1646971&apikey=e9dc20d0`);
                let movieList = await response.json();

                //if results found, map and display
                if (movieList.Response == "True"){

                    // movieList = movieList.Search.map((doc) => ({
                    //     imdbID: doc.imdbID,
                    //     Title: doc.Title,
                    //     Year: doc.Year,
                    //     Poster: doc.Poster,
                    // }));
                    setMovieDetails(movieList);
                    // console.log(API_KEY);
                    console.log(movieID);
                }
            } catch (err) {
                console.log(err);
            }
          }
        fetchMovies();
    }, [] );


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator="false" > 
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={movieDetails.Poster}/>
        </View>
        <View style={styles.detailsContainer}>
          <Text>movieID: {movieID}</Text>
          <Text style={styles.title}>{movieDetails.Title} ({movieDetails.Year})</Text>
          <Text style={styles.details}>{movieDetails.Rated}     {movieDetails.Runtime}    {movieDetails.Language}      {movieDetails.imdbRating}/10</Text>
          <Text style={styles.Plot}>{movieDetails.Plot}</Text>
          <Text style={styles.subdetails}>{movieDetails.Genre}</Text>
          <Text style={styles.subdetails}>Director: {movieDetails.Director}</Text>
          <Text style={styles.subdetails}>Writer: {movieDetails.Writer}</Text>
        </View>
      </ScrollView>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: "70%",
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
  title: {
    fontSize: 70,
    fontWeight: "bold",
  },
  Plot: {
    fontSize: 30,
    marginVertical: 10,
  },
  details: {
    fontSize: 30,
    marginVertical: 10,
    color: "gray",
  },
  subdetails: {
    fontSize: 20,
    marginVertical: 10,
    color: "gray",
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