import {
  FlatList,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import ListItem from "./ListItem"; //single item
import Constants from 'expo-constants';
import { movies } from "../data/Movies";

//Child of MovieList
//Parent of ListItem
//displays a list of items
export default function ItemList() {
  
  const navigateToMovieDetails = (movie) => {
    navigation.navigate("Movie Details", { movie });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToMovieDetails(item)}>
      <View style={styles.cardContainer}>
        <Image source={item.image} style={styles.movieImage} />
        <View style={styles.movieDetails}>
          <Text style={styles.movieTitle}>{item.title}</Text>
          <Text style={styles.movieDescription}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
  <SafeAreaView style={styles.outerscreen}>
    <Text style={styles.center}>
        <h1>Movie List</h1>
    </Text>
  <>
     <FlatList
        data={movies}
        keyExtractor={(movie) => movie.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToMovieDetails(item)}>
              <View>
                <ListItem
                    data = {item}
                  />
              </View>
          </TouchableOpacity>
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
      textAlign: "center",
  },
});

