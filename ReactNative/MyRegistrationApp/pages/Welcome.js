import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Our App!</Text>
      <Text style={styles.subtitle}>We're glad to have you here.</Text>
      <Button 
        title="Sign Up" 
        onPress={() => navigation.navigate('MemberSignScreen')} 
        color="#6200ee"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f5',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#333',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    color: '#777',
    marginBottom: 30,
  },
});

export default WelcomeScreen;
