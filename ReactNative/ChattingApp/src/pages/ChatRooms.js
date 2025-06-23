import React, {useEffect, useState, useContext} from 'react';
import {View, FlatList, TouchableOpacity, Text, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {showMessage} from 'react-native-flash-message';

import FloatingButton from '../components/FloatingButton';
import ContentInputModal from '../components/Modal/ContentInput';
import {ChatRoomContext} from '../context/ChatRoomContext';

const parseContentData = contentData => {
  const parsedData = [];
  for (let key in contentData) {
    if (contentData.hasOwnProperty(key)) {
      parsedData.push({
        id: key,
        ...contentData[key],
      });
    }
  }
  return parsedData;
};

const ChatRooms = ({navigation}) => {
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [rooms, setRooms] = useState([]);
  const {setRoomTitle} = useContext(ChatRoomContext);

  useEffect(() => {
    const roomsRef = database().ref('rooms/');
    const onValueChange = roomsRef.on('value', snapshot => {
      const contentData = snapshot.val();
      const parsedData = parseContentData(contentData || {});
      setRooms(parsedData);
    });

    return () => roomsRef.off('value', onValueChange);
  }, []);

  const handleInputToggle = () => setInputModalVisible(!inputModalVisible);

  const handleCreateRoom = content => {
    if (content.trim()) {
      createRoom(content);
      setInputModalVisible(false);
    } else {
      showMessage({
        message: 'Lütfen oda ismini girin.',
        type: 'warning',
      });
    }
  };

  const createRoom = async content => {
    const user = auth().currentUser;
    if (!user) {
      showMessage({message: 'Giriş yapmanız gerekiyor.', type: 'danger'});
      return;
    }

    const newRoomIndex = rooms.findIndex(
      room => room.text && room.text.toLowerCase() === content.toLowerCase(),
    );

    if (newRoomIndex >= 0) {
      showMessage({message: 'Bu oda zaten mevcut.', type: 'danger'});
      return;
    }

    const newRoom = {
      text: content,
      username: user.email.split('@')[0],
      date: new Date().toISOString(),
    };

    try {
      const ref = await database().ref('rooms/').push(newRoom);
      handleRoomSelect({...newRoom, id: ref.key});
    } catch (err) {
      showMessage({message: err.message, type: 'danger'});
    }
  };

  const handleRoomSelect = room => {
    navigation.navigate('ChatRoomDetail', {room});
    setRoomTitle(room.text);
  };

  const renderRooms = ({item}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleRoomSelect(item)}>
      <View style={styles.roomCardContainer}>
        <Text style={styles.roomName}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList numColumns={2} data={rooms} renderItem={renderRooms} />
      <FloatingButton icon="plus" onPress={handleInputToggle} />
      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleCreateRoom}
        placeholder="Oda ekle..."
        buttonText="Ekle"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  card: {
    flex: 1,
    margin: 12,
    borderRadius: 12,
    elevation: 5,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  roomCardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#4CAF50',
  },
  roomName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ChatRooms;
