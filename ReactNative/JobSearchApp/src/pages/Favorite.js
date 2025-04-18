import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {removeFavorite} from '../context/reducers';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  const handleRemoveFavorite = job => {
    dispatch(removeFavorite(job));
    Alert.alert(
      'Removed from Favorites',
      `${job.name} has been removed from your favorites.`,
    );
  };

  if (favorites.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          You don't have any favorite jobs yet.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Jobs</Text>

      <FlatList
        data={favorites}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.favoriteItem}>
            <Text style={styles.jobTitle}>{item.name}</Text>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => handleRemoveFavorite(item)}>
              <Ionicons name="trash" size={22} color="#E74C3C" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0F1',
    padding: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#BDC3C7',
    fontWeight: '500',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 20,
  },
  favoriteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#BDC3C7',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 3,
  },
  jobTitle: {
    fontSize: 18,
    color: '#34495E',
    flex: 1,
    paddingLeft: 10,
  },
  removeButton: {
    backgroundColor: '#F5F5F5',
    padding: 8,
    borderRadius: 20,
  },
});

export default Favorites;
