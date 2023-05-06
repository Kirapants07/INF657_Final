// import React, { useContext, useState } from "react";
// import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import FavoritesContext from "../../context/FavoritesContext";


// const MovieDetailsScreen = ({ route, navigation }) => {

// const {FavoriteList, addFavItem, deleteItem} = useContext(FavoritesContext);

//   const { movie } = route.params;
//   const [favorite, setFavorite] = useState(false);



//   const handleAddToFavorites = () => {
//     addFavItem({ ...movie, favorite });
//     setFavorite(true);
//     navigation.navigate("Favorites");
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <Image style={styles.image} source={{ uri: data.image }} />
//       </View>
//       <View style={styles.detailsContainer}>
//         <View style={styles.quantityContainer}>
//           {/* <TouchableOpacity
//             style={styles.button}
//             onPress={() => setFavorite((prev) => !prev)}
//           >
//             <MaterialCommunityIcons name="heart" size={24} color="pink" />
//           </TouchableOpacity> */}
//           <Text style={styles.quantity}>{favorite}</Text>
//         </View>
//         <TouchableOpacity
//           style={styles.addToCartButton}
//           onPress={handleAddToFavorites}
//         >
//           <MaterialCommunityIcons name="heart" size={24} color="pink" />
//           <Text style={styles.addToCartText}>Add to Favorites</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   imageContainer: {
//     height: "50%",
//     width: "100%",
//     backgroundColor: "#ccc",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   image: {
//     height: "100%",
//     width: "100%",
//   },
//   detailsContainer: {
//     padding: 20,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   price: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginVertical: 10,
//   },
//   quantityContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: "#FF6347",
//     borderRadius: 20,
//     height: 40,
//     width: 40,
//     justifyContent: "center",
//     alignItems: "center",
//     marginHorizontal: 10,
//   },
//   quantity: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginHorizontal: 10,
//   },
//   addToCartButton: {
//     backgroundColor: "#FF6347",
//     borderRadius: 20,
//     height: 40,
//     width: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: 20,
//   },
//   addToCartText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#fff",
//   },
// });

// export default MovieDetailsScreen;