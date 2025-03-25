import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, View } from 'react-native';
import TodoItem from './components/TodoItem.js';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setText('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const activeTodoCount = todos.filter((todo) => !todo.completed).length;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>To do ({activeTodoCount})</Text>

      <TextInput
        style={styles.input}
        placeholder="Add New ..."
        placeholderTextColor="#bbb"
        value={text}
        onChangeText={setText}
        onSubmitEditing={addTodo}
      />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onPress={() => toggleTodo(item.id)}
            onLongPress={() => deleteTodo(item.id)}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 2,
  },
  input: {
    backgroundColor: '#2C2C2C',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    elevation: 4, // adding shadow for better interaction feedback
  },
  item: {
    backgroundColor: '#333',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3, // shadow for items
  },
  todoText: {
    fontSize: 18,
    color: '#fff',
    textDecorationLine: 'none',
  },
  completedText: {
    fontSize: 18,
    color: '#aaa',
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    padding: 10,
    backgroundColor: '#f44336',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default App;
