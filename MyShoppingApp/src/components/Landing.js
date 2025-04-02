import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

const Landing = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#e56903" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 16,
    fontSize: 18,
    color: '#333',
  },
});

export default Landing;
