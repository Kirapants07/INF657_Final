import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, SafeAreaView, ScrollView } from "react-native";


const MovieDetailsScreen = ({route}) => {

  const [movieDetails, setMovieDetails] = useState([]);
  const { item, API_KEY } = route.params;

  // fetch movie results
  useEffect(() => {
    const fetchMovies = async () =>{
            try{
                const response =  await fetch(`https://www.omdbapi.com/?i=${item.imdbID}&apikey=${API_KEY}`);
                let movieList = await response.json();

                //if results found, map and display
                if (movieList.Response == "True"){
                    setMovieDetails(movieList);
                    console.log(item);
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
});

export default MovieDetailsScreen;