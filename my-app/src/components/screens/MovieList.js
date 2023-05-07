import {
    FlatList,
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    SafeAreaView,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    Pressable,
  } from "react-native";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import { useContext, useEffect, useState } from "react";
  import Constants from 'expo-constants';
  import ListItem from "../ListItem";  //single item
  import FavoritesContext from "../../context/FavoritesContext";
import CustomInput from "../shared/CustomInput";
import CustomButton from "../shared/CustomButton";

  
  //Parent of ListItem
  //displays a list of items
  export default function MovieList({navigation}) {
    const {FavoriteList, addFavItem} = useContext(FavoritesContext);
    const [search, setSearch] = useState('');
    const [movieData, setMovieData] = useState([]);
    const API_KEY= 'e9dc20d0';

    
    // const navigateToMovieDetails = (movie) => {
    //     navigation.navigate("MovieDetails", { move: movie, API_KEY: API_KEY });
    //   };
    

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


{/* 
                <TouchableWithoutFeedback onPress={() => addFavItem(item)}>
                    <MaterialCommunityIcons
                        name="heart-outline"
                        size={80}
                        color="red"
                        style={styles.heart}
                    />
                </TouchableWithoutFeedback> */}

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
                <Pressable onPress={() => {
                  navigation.navigate('MovieDetails', {
                    itemId: 86,
                    otherParam: 'anything you want here',
                  });
                }}>
                    <View>
                      <ListItem
                          data = {item}
                      />
                    </View>
                </Pressable>
                <TouchableWithoutFeedback onPress={() => addFavItem(item)}>
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
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: 400,
    },
    heart: {
        position: "relative",
        top: "-95%", 
        left: "-2%", 
        margin: 0,
        padding: 0,  
        width: 0,
        height: 0,
    },
  });
  
  