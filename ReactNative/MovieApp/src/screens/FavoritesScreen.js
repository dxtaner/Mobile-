import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import movieStore from '../store/movieStore';
import MovieCard from '../components/MovieCard';

const FavoritesScreen = observer(() => {
  if (!movieStore.favorites.length) {
    return (
      <View style={styles.empty}>
        <Text style={styles.text}>Favori yok 😢</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={movieStore.favorites}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <MovieCard movie={item} />}
    />
  );
});

export default FavoritesScreen;

const styles = StyleSheet.create({
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
