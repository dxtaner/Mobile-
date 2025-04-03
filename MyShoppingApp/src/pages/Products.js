import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {API_URL_PRODUCTS} from '../../config';
import {setUser} from '../../redux/slices/authSlice';

const ProductCard = ({product, onPress}) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image
      source={{uri: product.image}}
      style={styles.image}
      resizeMode="cover"
    />
    <Text style={styles.productName} numberOfLines={2}>
      {product.title}
    </Text>
    <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
  </TouchableOpacity>
);

const Products = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(API_URL_PRODUCTS)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('API hatası:', error);
        setLoading(false);
      });
  }, []);

  const handleLogout = () => {
    dispatch(setUser(null));
    navigation.navigate('Login');
  };

  const renderItem = ({item}) => (
    <ProductCard
      product={item}
      onPress={() => navigation.navigate('DetailPage', {productId: item.id})}
    />
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#A3A3A3" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.usernameText}>
          Welcome, {user ? user.username : 'Guest'}
        </Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#4F4F4F',
    elevation: 3,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },
  usernameText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFF',
  },
  logoutButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 8,
    elevation: 2,
  },
  logoutText: {
    color: '#4F4F4F',
    fontWeight: 'bold',
  },
  listContainer: {
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 8,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  image: {
    width: 100,
    height: 130,
    borderRadius: 10,
    marginBottom: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
    paddingHorizontal: 6,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FF6347',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
});

export default Products;
