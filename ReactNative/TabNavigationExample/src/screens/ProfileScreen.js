import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://i.pravatar.cc/200',
        }}
        style={styles.avatar}
      />

      <Text style={styles.name}>Taner Özer</Text>

      <Text style={styles.job}>React Native Developer</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },

  name: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },

  job: {
    color: '#aaa',
    marginTop: 10,
    fontSize: 18,
  },
});
