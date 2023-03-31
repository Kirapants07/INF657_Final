import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoApp from './ToDoList/TodoApp';
import ShoppingList from './components/ShoppingList';
import Top from './TestComps/Top';
import { ShoppingListData } from './components/ShoppingListData';
import { useState } from 'react';

export default function App() {
  const [data, setData] = useState(ShoppingListData);

  return (
    <View style={styles.container}>
      <Text style={styles.card}>
        <TodoApp />
        <ShoppingList 
          title={data.title}
          description={data.description} 
          price={data.price}
          image={data.image}
          quantity={data.quantity}
        />
        {/* <Top /> */}

      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b4cdee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
  },
});
