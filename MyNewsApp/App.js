import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
  View,
} from 'react-native';
import NewsCard from './components/NewsCard.js';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';

function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Today's News</Text>
      </View>
      
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(bannerNews => (
              <View key={bannerNews.u_id} style={styles.bannerContainer}>
                <Image
                  style={styles.banner_image}
                  source={{uri: bannerNews.imageUrl}}
                />
                <View style={styles.bannerTextContainer}>
                  <Text style={styles.bannerTitle}>{bannerNews.title}</Text>
                  <Text style={styles.bannerDescription}>{bannerNews.description}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        )}
        keyExtractor={item => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
    paddingHorizontal: 15,
  },
  headerContainer: {
    backgroundColor: 'linear-gradient(45deg, #6a11cb, #2575fc)',
    paddingVertical: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  bannerContainer: {
    marginRight: 15,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 6, // Shadow for Android
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 4},
    position: 'relative',
  },
  banner_image: {
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width - 30,
    borderRadius: 15,
  },
  bannerTextContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    padding: 10,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  bannerDescription: {
    fontSize: 14,
    color: '#fff',
    lineHeight: 18,
    letterSpacing: 0.5,
  },
});

export default App;
