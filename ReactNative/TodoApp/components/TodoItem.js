import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TodoItem = ({ todo, onPress, onLongPress }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={styles.itemContent}>
        <Text style={[styles.todoText, todo.completed && styles.completedText]}>{todo.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#333',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3, // Adding shadow for a raised effect
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
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
});

export default TodoItem;
