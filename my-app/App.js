import { SafeAreaView, StyleSheet } from "react-native";
import Navigation from "./navigation/Navigation";
import { AuthContextProvider } from "./context/AuthContext";

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <AuthContextProvider>
        <Navigation />
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