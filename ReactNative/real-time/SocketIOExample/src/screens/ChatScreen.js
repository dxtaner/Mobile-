import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';

import socket from '../services/socket';

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('receiveMessage', data => {
      setMessages(prev => [...prev, data]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  const sendMessage = () => {
    if (!message.trim()) return;

    socket.emit('sendMessage', message);

    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>⚡ Real-Time Chat</Text>

      <FlatList
        data={messages}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.messageBox}>
            <Text style={styles.messageText}>{item}</Text>
          </View>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Mesaj yaz..."
          placeholderTextColor="#aaa"
          value={message}
          onChangeText={setMessage}
          style={styles.input}
        />

        <Button title="Gönder" onPress={sendMessage} />
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 10,
  },

  header: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
  },

  messageBox: {
    backgroundColor: '#1e1e1e',
    padding: 12,
    borderRadius: 12,
    marginVertical: 5,
  },

  messageText: {
    color: '#fff',
    fontSize: 16,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  input: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: 12,
    borderRadius: 10,
    marginRight: 10,
  },
});
