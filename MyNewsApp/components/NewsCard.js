import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function NewsCard({news}) {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.image}
        source={{uri: news.imageUrl}}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.author}>{news.author}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {news.description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffff',
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 6},
    marginHorizontal: 15, // Adds horizontal padding between cards
  },
  image: {
    height: 220,
    width: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
    lineHeight: 26,
  },
  author: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
    fontStyle: 'italic',
  },
  description: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
    letterSpacing: 0.5,
  },
});

export default NewsCard;
