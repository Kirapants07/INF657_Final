import { SafeAreaView, StyleSheet } from "react-native";
import { AuthContextProvider } from "./src/context/AuthContext";
import { ShoppingListProvider } from "./src/context/ShoppingListContext";
import Navigation from "./Navigation";
import 'react-native-gesture-handler';

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