import React, { useState } from 'react';
import { SafeAreaView, Text, FlatList, StyleSheet, StatusBar } from 'react-native';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';

const products = [
  { 
    id: 1, 
    name: 'Apple iPhone 13', 
    price: '$999', 
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-unselect-gallery-1-202207_GEO_TR?wid=940&hei=1112&fmt=png-alpha&.v=1657641867367' 
  },
  { 
    id: 2, 
    name: 'Samsung Galaxy S21', 
    price: '$799', 
    imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/tr/sm-g991bzadeue/gallery/tr-galaxy-s21-5g-g991-sm-g991bzadeue-368406149?$650_519_PNG$' 
  },
  { 
    id: 3, 
    name: 'Sony WH-1000XM4', 
    price: '$348', 
    imageUrl: 'https://www.sony.com.tr/image/ccd62c2c3b8a81eb2579b4c18e989c92?fmt=png-alpha&wid=660&hei=660' 
  },
  { 
    id: 4, 
    name: 'MacBook Pro 14"', 
    price: '$1,799', 
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-mbp14-silver-m1-2021?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1645727339000' 
  },
];

const App = () => {
  const [searchText, setSearchText] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f4f7fb" />
      
      <Text style={styles.header}>My Store</Text>

      <SearchBar searchText={searchText} setSearchText={setSearchText} />

      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  productList: {
    paddingBottom: 20,
  },
});

export default App;
