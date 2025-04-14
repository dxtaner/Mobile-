import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import database from '@react-native-firebase/database';
import {getAuth} from '@react-native-firebase/auth';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }

    const messagesRef = database().ref('/messages');
    const onValueChange = messagesRef.on('value', snapshot => {
      const data = snapshot.val();
      if (data) {
        const messagesArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key],
        }));
        const sortedMessages = messagesArray.sort(
          (a, b) => b.timestamp - a.timestamp,
        );
        setMessages(sortedMessages);
      } else {
        setMessages([]);
      }
    });

    return () => messagesRef.off('value', onValueChange);
  }, []);

  const handleAddMessage = async () => {
    if (newMessage.trim() === '') {
      Alert.alert('Error', 'Please enter a message.');
      return;
    }

    try {
      const newMessageData = {
        text: newMessage,
        likes: 0,
        timestamp: Date.now(),
      };
      await database().ref('/messages').push(newMessageData);
      setNewMessage('');
    } catch (error) {
      Alert.alert('Error', 'Failed to send message.');
    }
  };

  const handleLikeMessage = async (messageId, currentLikes) => {
    try {
      await database()
        .ref(`/messages/${messageId}`)
        .update({
          likes: currentLikes + 1,
        });
    } catch (error) {
      Alert.alert('Error', 'Failed to like the message.');
    }
  };

  const renderMessageItem = ({item}) => {
    return (
      <View style={styles.messageItem}>
        <Text style={styles.messageText}>{item.text}</Text>
        <View style={styles.likeContainer}>
          <Text style={styles.likeText}>Likes: {item.likes}</Text>
          <TouchableOpacity
            style={styles.likeButton}
            onPress={() => handleLikeMessage(item.id, item.likes)}>
            <Text style={styles.likeButtonText}>Like</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.header}>
        {user ? (
          <Text style={styles.welcomeText}>
            Welcome, {user.displayName || user.email}
          </Text>
        ) : (
          <Text style={styles.welcomeText}>Welcome, Guest</Text>
        )}
      </View>

      <View style={styles.messagesContainer}>
        {messages.length === 0 ? (
          <Text style={styles.noMessagesText}>No messages found.</Text>
        ) : (
          <FlatList
            data={messages}
            renderItem={renderMessageItem}
            keyExtractor={item => item.id}
          />
        )}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type a message..."
          value={newMessage}
          onChangeText={setNewMessage}
          style={styles.input}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleAddMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 40,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  messagesContainer: {
    flex: 1,
  },
  noMessagesText: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginTop: 30,
  },
  messageItem: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  messageText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 8,
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  likeText: {
    fontSize: 14,
    color: '#888',
  },
  likeButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 25,
  },
  likeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
    marginTop: 15,
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sendButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginLeft: 10,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Messages;
