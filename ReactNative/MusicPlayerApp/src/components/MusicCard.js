import React from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const MusicCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.artist}>{item.artist}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MusicCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#1e1e1e',
    marginBottom: 15,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
  },

  image: {
    width: 100,
    height: 100,
  },

  info: {
    padding: 15,
    justifyContent: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  artist: {
    color: '#aaa',
    marginTop: 5,
    fontSize: 15,
  },
});
