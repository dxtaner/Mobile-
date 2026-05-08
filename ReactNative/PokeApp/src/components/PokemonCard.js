import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PokemonCard = ({ name }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{name.toUpperCase()}</Text>
    </View>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
  },
});
