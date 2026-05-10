import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = ({ route }) => {
  const { name } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 Detail Screen</Text>

      <Text style={styles.name}>Welcome {name}</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },

  name: {
    color: '#03dac6',
    fontSize: 20,
    marginTop: 10,
  },
});
