import React from 'react';
import { Modal, View, Text, Image, StyleSheet, Pressable } from 'react-native';

const InfoCard = ({ visibile, onClose, user }) => {
  if (!user) return null;

  return (
    <Modal visible={visibile} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.card}>
          <Image source={{ uri: user.image }} style={styles.image} />
          <Text style={styles.name}>{user.name}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Phone: {user.phone}</Text>
          <Text>Location: {user.location}</Text>
          <Pressable onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>Kapat</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000aa',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
  },
  button: {
    marginTop: 15,
    backgroundColor: '#2196f3',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
  },
});

export default InfoCard;
