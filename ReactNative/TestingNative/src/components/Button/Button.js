import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({title, onClick}) => (
  <TouchableOpacity style={styles.button} onPress={onClick} testID="add-button">
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1976d2',
    padding: 12,
    margin: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
