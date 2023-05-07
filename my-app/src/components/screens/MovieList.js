import {
    FlatList,
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    SafeAreaView,
    Text,
    TouchableOpacity,
  } from "react-native";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import { useContext, useEffect, useState } from "react";
  import Constants from 'expo-constants';
  import ListItem from "../ListItem";  //single item
  import FavoritesContext from "../../context/FavoritesContext";
import CustomInput from "../shared/CustomInput";

  
  //Parent of ListItem
  //displays a list of items
  export default function MovieList({navigation}) {
    const {addFavItem} = useContext(FavoritesContext);
    const [search, setSearch] = useState('');
    const [movieData, setMovieData] = useState([]);
    const API_KEY= 'e9dc20d0';

    //fetch movie results
    useEffect(() => {
        const fetchMovies = async () =>{
            if (search !== "") {
                try{
                    const response =  await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`);
                    let movieList = await response.json();

                    //if results found, map and display
                    if (movieList.Response == "True"){

                        movieList = movieList.Search.map((doc) => ({
                            imdbID: doc.imdbID,
                            Title: doc.Title,
                            Year: doc.Year,
                            Poster: doc.Poster,
                        }));
                        setMovieData(movieList);
                    }
                } catch (err) {
                    console.log(err);
                }
              }
            }
            fetchMovies();
        }, [search] );
        
      const navigateToMovieDetails = (item) => {
        while (item  === undefined){
          console.log("undefined");
        }
        navigation.navigate("MovieDetails", { item, API_KEY });
      };

    return (
    <SafeAreaView style={styles.outerscreen}>
      <Text style={styles.center}>
          <h1>Movie List</h1>
          <CustomInput placeholder="Search Titles" value={search} setValue={setSearch} />
      </Text>
    <>
       <FlatList
          data={movieData}
          keyExtractor={(movieData) => movieData.imdbID}
          renderItem={({ item }) => (
            <View >
              <TouchableOpacity onPress={() => navigateToMovieDetails(item)}>
                      <ListItem
                          data = {item}
                      />
                </TouchableOpacity>
                <TouchableWithoutFeedback onPress={() => {alert("movie added to favorites"); addFavItem(item);}}>
                    <MaterialCommunityIcons
                        name="heart-outline"
                        size={80}
                        color="red"
                        style={styles.heart}
                    />
                </TouchableWithoutFeedback>
            </View>
          )}
        />
      </>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    outerscreen: {
      paddingTop: Constants.StatusBarHeight,
      flexDirection: "column",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
      center: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: 400,
    },
    heart: {
        position: "relative",
        top: "-97%", 
        margin: 0,
        padding: 0,  
        width: 0,
        height: 0,
    },
  });
  
  