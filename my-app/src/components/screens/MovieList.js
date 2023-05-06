import {
    FlatList,
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    SafeAreaView,
    Text,
  } from "react-native";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import { useContext, useEffect, useState } from "react";
  import Constants from 'expo-constants';
  // import MovieListContext from "../../context/MovieListContext";
  import ListItem from "../ListItem";  //single item
  import FavoritesContext from "../../context/FavoritesContext";
  
  //Parent of ListItem
  //displays a list of items
  export default function MovieList() {
    
    // const {FavoriteList, deleteItem} = useContext(FavoritesContext);

    const [movieData, setMovieData] = useState([]);
    const API_KEY= 'e9dc20d0';
    let searchTitle = "Jaws";

    useEffect(() => {
        const fetchMovies = async () =>{
                try{
                    const response =  await fetch(`https://www.omdbapi.com/?s=${searchTitle}&apikey=${API_KEY}`);
                    let movieList = await response.json();
                    console.log(movieList);
                    // console.log(movieList.Title);
                    // console.log(movieList.Rated);
                    // console.log(movieList.Year);
                    // console.log(movieList.Plot);
                    // console.log(movieList.Poster);

                    movieList = movieList.Search.map((doc) => ({
                        id: doc.imdbID,
                        data: doc,
                    }));

                    console.log(movieList);

                    setMovieData(movieList);
                    
                } catch (err) {
                    console.log(err);
                }
              }
            fetchMovies();
        }, [] );

  
    return (
    <SafeAreaView style={styles.outerscreen}>
      <Text style={styles.center}>
          <h1>Movie List</h1>
      </Text>
    <>
       <FlatList
          data={movieData}
          keyExtractor={(movieData) => movieData.imdbID}
          renderItem={({ item }) => (
            <View>
              <ListItem
                  data = {item}
                  renderRightActions={() => (
                    <View style={styles.deleteContainer}>
                      <TouchableWithoutFeedback onPress={() => deleteItem(item.imdbID)}>
                        <MaterialCommunityIcons
                          name="trash-can"
                          size={40}
                          color="black"
                        />
                      </TouchableWithoutFeedback>
                    </View>
                  )}
                />
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
    },
    screen: {
      flex: 1,
    },
    container: {
      padding: 20,
      paddingTop: 100,    
    },
    secondContainer: {
      padding: 20,
      paddingTop: 50,
    },
    image: {
      width: "100%",
      height: 200,
    },
    title: {
      fontWeight: "bold",
      marginBottom: 7,
    },
    description: {
      color: "#fff",
      fontWeight: "bold",
    },
    deleteContainer: {
      backgroundColor: "red",
      width: 70,
      justifyContent: "center",
      alignItems: "center",
    },
    editContainer: {
      backgroundColor: "yellow",
      width: 70,
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
      width: "100%",
    },
    button: {
      backgroundColor: "#0a5273",
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 16,
    },
      center: {
        textAlign: "center",
    },
  });
  
  