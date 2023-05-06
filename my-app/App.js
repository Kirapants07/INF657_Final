import { SafeAreaView, StyleSheet } from "react-native";
import { AuthContextProvider } from "./src/context/AuthContext";
import Navigation from "./Navigation";
import 'react-native-gesture-handler';
import { FavoritesProvider } from "./src/context/FavoritesContext";

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <AuthContextProvider>
        <FavoritesProvider>
          <Navigation />
        </FavoritesProvider>
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

