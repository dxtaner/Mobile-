import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const Meals = ({route, navigation}) => {
  const {category} = route.params;
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(response => response.json())
      .then(data => {
        setMeals(data.meals);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching meals:', error);
        setLoading(false);
      });
  }, [category]);

  const handleMealSelect = mealId => {
    navigation.navigate('DetailPage', {mealId});
  };

  const renderMealItem = ({item}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleMealSelect(item.idMeal)}>
      <Image source={{uri: item.strMealThumb}} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title}>{item.strMeal}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meals in {category}</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#FF6347" />
      ) : (
        <FlatList
          data={meals}
          keyExtractor={item => item.idMeal}
          renderItem={renderMealItem}
          numColumns={2}
          contentContainerStyle={styles.flatListContent}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6EC',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 150,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default Meals;
