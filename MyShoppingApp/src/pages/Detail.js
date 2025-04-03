import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import {API_URL_PRODUCT_DETAIL} from '../../config';

const Detail = ({route}) => {
  const {productId} = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL_PRODUCT_DETAIL}${productId}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ff6f61" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.errorText}>
          Error occurred when loading the product details.
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: product.image}}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productCategory}>
            {product.category.toUpperCase()}
          </Text>
          <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>
              ⭐ {product.rating.rate} / 5 ({product.rating.count} Comments)
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  scrollContentContainer: {
    paddingBottom: 30,
  },
  imageContainer: {
    backgroundColor: '#fff',
    padding: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center',
    elevation: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 15,
    marginBottom: 15,
  },
  image: {
    width: 160,
    height: 140,
    borderRadius: 25,
  },
  detailsContainer: {
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  productTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  productCategory: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7c7c7c',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  productPrice: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ff6f61',
    textAlign: 'center',
    marginBottom: 25,
  },
  productDescription: {
    fontSize: 18,
    color: '#4b4b4b',
    lineHeight: 26,
    textAlign: 'justify',
    marginBottom: 30,
  },
  ratingContainer: {
    paddingVertical: 15,
    backgroundColor: '#fff3f1',
    borderRadius: 18,
    marginTop: 25,
    alignItems: 'center',
    marginBottom: 30,
  },
  ratingText: {
    fontSize: 18,
    color: '#ff6f61',
    fontWeight: '700',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  errorText: {
    color: '#ff0000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Detail;
