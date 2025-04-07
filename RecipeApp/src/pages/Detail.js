import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from 'react-native';

const Detail = ({route}) => {
  const {mealId} = route.params;
  const [mealDetails, setMealDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then(response => response.json())
      .then(data => {
        setMealDetails(data.meals[0]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching meal details:', error);
        setLoading(false);
      });
  }, [mealId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#FF6347" />;
  }

  const openRecipeLink = () => {
    Linking.openURL(mealDetails.strSource);
  };

  return (
    <ScrollView style={styles.container}>
      {mealDetails && (
        <>
          <View style={styles.headerContainer}>
            <Image
              source={{uri: mealDetails.strMealThumb}}
              style={styles.image}
            />
            <Text style={styles.mealName}>{mealDetails.strMeal}</Text>
            <Text style={styles.category}>{mealDetails.strCategory}</Text>
            <Text style={styles.area}>{mealDetails.strArea}</Text>
          </View>

          <View style={styles.ingredientsContainer}>
            <Text style={styles.sectionTitle}>Ingredients:</Text>
            <View style={styles.ingredientList}>
              {mealDetails.strIngredient1 && (
                <View style={styles.ingredientItem}>
                  <Text style={styles.ingredient}>
                    {mealDetails.strMeasure1} {mealDetails.strIngredient1}
                  </Text>
                </View>
              )}
              {mealDetails.strIngredient2 && (
                <View style={styles.ingredientItem}>
                  <Text style={styles.ingredient}>
                    {mealDetails.strMeasure2} {mealDetails.strIngredient2}
                  </Text>
                </View>
              )}
              {mealDetails.strIngredient3 && (
                <View style={styles.ingredientItem}>
                  <Text style={styles.ingredient}>
                    {mealDetails.strMeasure3} {mealDetails.strIngredient3}
                  </Text>
                </View>
              )}
              {/* Continue adding ingredients similarly */}
            </View>
          </View>

          <View style={styles.instructionsContainer}>
            <Text style={styles.sectionTitle}>Instructions:</Text>
            <Text style={styles.instructions}>
              {mealDetails.strInstructions}
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <Text style={styles.sectionTitle}>Watch the Recipe:</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL(mealDetails.strYoutube)}>
              <Text style={styles.videoLink}>Watch on YouTube</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.sourceContainer}>
            <Text style={styles.sourceText}>Recipe Source:</Text>
            <TouchableOpacity onPress={openRecipeLink}>
              <Text style={styles.sourceLink}>Check Full Recipe</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F4F1',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    marginBottom: 15,
  },
  mealName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  category: {
    fontSize: 18,
    color: '#FF6347',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 5,
  },
  area: {
    fontSize: 18,
    color: '#999',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#444',
    marginBottom: 10,
  },
  ingredientsContainer: {
    marginBottom: 25,
  },
  ingredientList: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  ingredientItem: {
    marginBottom: 8,
    paddingVertical: 5,
    borderBottomColor: '#EEE',
    borderBottomWidth: 1,
  },
  ingredient: {
    fontSize: 16,
    color: '#555',
  },
  instructionsContainer: {
    marginBottom: 40,
  },
  instructions: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    textAlign: 'justify',
  },
  videoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  videoLink: {
    fontSize: 16,
    color: '#FF6347',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  sourceContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  sourceText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  sourceLink: {
    fontSize: 16,
    color: '#FF6347',
    textDecorationLine: 'underline',
  },
});

export default Detail;
