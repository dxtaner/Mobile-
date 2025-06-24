import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MessageCard = ({message}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.username}>{message.username}</Text>
      <Text style={styles.messageText}>{message.text}</Text>
      <Text style={styles.date}>{new Date(message.date).toLocaleString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  username: {
    fontWeight: 'bold',
    color: '#333',
  },
  messageText: {
    color: '#555',
    marginVertical: 5,
  },
  date: {
    fontSize: 12,
    color: '#aaa',
    textAlign: 'right',
  },
});

export default MessageCard;
