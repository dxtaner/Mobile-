import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Home Screen</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Detail', {
            name: 'Taner',
          })
        }
      >
        <Text style={styles.buttonText}>Go To Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

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
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#6200ee',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
