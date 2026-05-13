import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import movieStore from '../store/movieStore';
import { getMovies } from '../services/api';
import MovieCard from '../components/MovieCard';

const HomeScreen = observer(({ navigation }) => {
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await getMovies();
      movieStore.setMovies(res.data.results);
    };
    fetchMovies();
  }, []);

  if (!movieStore.movies.length) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={movieStore.movies}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() => navigation.navigate('Detail', { movie: item })}
          />
        )}
      />
    </View>
  );
});

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
});
