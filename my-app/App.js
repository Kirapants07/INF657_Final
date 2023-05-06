import { SafeAreaView, StyleSheet } from "react-native";
import { AuthContextProvider } from "./src/context/AuthContext";
import { MovieListProvider } from "./src/context/MovieListContext";
import Navigation from "./Navigation";
import 'react-native-gesture-handler';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <AuthContextProvider>
        <MovieListProvider>
          <Navigation />
        </MovieListProvider>
      </AuthContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffe4b5",
  },
});

