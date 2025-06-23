import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

const ChatRoomDetail = ({route}) => {
  const {room} = route.params;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Mesajları dinle
  useEffect(() => {
    const messagesRef = database().ref(`rooms/${room.id}/messages`);

    const listener = messagesRef.on('value', snapshot => {
      const data = snapshot.val();
      if (!data) {
        setMessages([]);
        return;
      }

      const parsed = Object.entries(data).map(([id, val]) => ({
        id,
        ...val,
      }));

      // Yeni mesajlar alta gelsin
      setMessages(parsed.sort((a, b) => new Date(a.date) - new Date(b.date)));
    });

    return () => messagesRef.off('value', listener);
  }, [room.id]);

  const handleSendMessage = async () => {
    const trimmed = newMessage.trim();
    if (!trimmed) {
      showMessage({
        message: 'Lütfen boş mesaj göndermeyin.',
        type: 'warning',
      });
      return;
    }

    const user = auth().currentUser;
    if (!user) {
      showMessage({
        message: 'Giriş yapılmamış kullanıcı!',
        type: 'danger',
      });
      return;
    }

    const messageData = {
      text: trimmed,
      username: user.email.split('@')[0],
      date: new Date().toISOString(),
    };

    try {
      await database().ref(`rooms/${room.id}/messages`).push(messageData);
      setNewMessage('');
    } catch (error) {
      showMessage({
        message: 'Mesaj gönderilemedi: ' + error.message,
        type: 'danger',
      });
    }
  };

  const renderMessage = ({item}) => (
    <View style={styles.messageBubble}>
      <Text style={styles.username}>{item.username}</Text>
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.messageTime}>
        {new Date(item.date).toLocaleTimeString('tr-TR', {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Text style={styles.header}>{room.text}</Text>

      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />

      <View style={styles.inputContainer}>
        <TextInput
          value={newMessage}
          onChangeText={setNewMessage}
          style={styles.input}
          placeholder="Mesaj yaz..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Gönder</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f4f4f4'},
  header: {
    padding: 16,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  listContent: {
    padding: 12,
    gap: 10,
  },
  messageBubble: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
  },
  username: {
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 4,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  messageTime: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    flex: 1,
    backgroundColor: '#eee',
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    marginLeft: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ChatRoomDetail;
