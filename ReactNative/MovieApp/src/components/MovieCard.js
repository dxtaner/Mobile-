import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import movieStore from '../store/movieStore';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = observer(({ movie, onPress }) => {
  const isFav = movieStore.isFavorite(movie.id);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <Image
        source={{ uri: IMAGE_URL + movie.poster_path }}
        style={styles.image}
      />

      <View style={styles.overlay} />

      <TouchableOpacity
        style={styles.favButton}
        onPress={() =>
          isFav
            ? movieStore.removeFavorite(movie.id)
            : movieStore.addFavorite(movie)
        }
      >
        <Text style={styles.favText}>{isFav ? '❤️' : '🤍'}</Text>
      </TouchableOpacity>

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {movie.title}
        </Text>

        <View style={styles.ratingBox}>
          <Text style={styles.ratingText}>
            ⭐ {movie.vote_average.toFixed(1)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default MovieCard;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#1a1a1a',

    // shadow (Android)
    elevation: 6,
  },

  image: {
    width: '100%',
    height: 220,
  },

  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },

  info: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },

  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  ratingBox: {
    alignSelf: 'flex-start',
    backgroundColor: '#f5c518',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },

  ratingText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 12,
  },

  favButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 20,
    padding: 6,
  },

  favText: {
    fontSize: 18,
  },
});
