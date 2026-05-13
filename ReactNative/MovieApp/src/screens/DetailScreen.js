import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const DetailScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Poster + Overlay */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: IMAGE_URL + movie.poster_path }}
          style={styles.image}
        />
        <View style={styles.overlay} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Title */}
        <Text style={styles.title}>{movie.title}</Text>

        {/* Rating Badge */}
        <View style={styles.ratingBox}>
          <Text style={styles.ratingText}>
            ⭐ {movie.vote_average.toFixed(1)}
          </Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Overview */}
        <Text style={styles.sectionTitle}>Overview</Text>
        <Text style={styles.overview}>
          {movie.overview || 'No description available.'}
        </Text>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },

  imageContainer: {
    position: 'relative',
  },

  image: {
    width: '100%',
    height: 420,
  },

  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 120,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },

  content: {
    marginTop: -60,
    marginHorizontal: 15,
    backgroundColor: '#1c1c1c',
    borderRadius: 20,
    padding: 20,

    // shadow (Android + iOS)
    elevation: 5,
  },

  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  ratingBox: {
    alignSelf: 'flex-start',
    backgroundColor: '#f5c518',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginBottom: 15,
  },

  ratingText: {
    fontWeight: 'bold',
    color: '#000',
  },

  divider: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 15,
  },

  sectionTitle: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 5,
  },

  overview: {
    color: '#ddd',
    fontSize: 15,
    lineHeight: 22,
  },
});
