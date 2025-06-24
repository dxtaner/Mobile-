import React, {useState} from 'react';
import {
  Modal,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const ContentInputModal = ({
  visible,
  onClose,
  onSend,
  placeholder,
  buttonText,
}) => {
  const [content, setContent] = useState('');

  const handleSend = () => {
    if (content.trim()) {
      onSend(content);
      setContent('');
    } else {
      alert('Lütfen oda ismini girin.');
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <TextInput
            value={content}
            onChangeText={setContent}
            placeholder={placeholder}
            style={styles.input}
            placeholderTextColor="#aaa"
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleSend}>
              <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}>
              <Text style={[styles.buttonText, styles.cancelButtonText]}>
                İptal
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

// Styles
const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    width: 280,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 10,
  },
  input: {
    width: '100%',
    padding: 12,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    padding: 12,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#f44336',
    marginRight: 0,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  cancelButtonText: {
    color: '#fff',
  },
});

export default ContentInputModal;
