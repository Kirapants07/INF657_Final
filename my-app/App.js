import { SafeAreaView, StyleSheet } from "react-native";
import { AuthContextProvider } from "./context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./navigation/BottomNavigation";
import { ShoppingListProvider } from "./context/ShoppingListContext";
import Navigation from "./navigation/Navigation";

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <AuthContextProvider>
        <ShoppingListProvider>
          {/* <NavigationContainer> 
            <MyTabs />
          </NavigationContainer> */}
          <Navigation />
        </ShoppingListProvider>
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