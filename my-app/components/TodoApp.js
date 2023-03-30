import React, { useState } from 'react'
import {StyleSheet, Text} from 'react-native';
import TodoList from './TodoList';

//Parent of TodoList
//Renders a TodoList component and a form to add new todo items
export default function TodoApp() {
    const [input, setInput] = useState('');
    const [todo, setTodo] = useState([]);

    const handleChange = e => {
        setInput(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        setTodo([input, ...todo]);
        setInput('');
    };

  return (
    <Text>
        <Text style={styles.paragraph}>
          <h1>To Do List</h1>
        </Text>
        <Text style={styles.paragraph}>
          {/* add new item input */}
          <form onSubmit={handleSubmit}>
              <input type = "text" placeholder="New List Item" value={input} onChange={handleChange}></input>
              <button>Add</button>
          </form>
          {/* Display all todo items */}

          {todo.map((task, index) => (
              <TodoList
                  description = {task}
                  key = {index} 
              />
          ))}
      </Text>
    </Text>
  )
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 30,
  },
});