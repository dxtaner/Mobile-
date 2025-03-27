import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const MemberSignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    if (!name || !age || !email || !phone || !address) {
      alert('Please fill in all fields!');
      return;
    }

    navigation.navigate('MemberResultScreen', { name, age, email, phone, address });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up Form</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Enter your name" 
        value={name} 
        onChangeText={setName} 
      />

      <TextInput 
        style={styles.input} 
        placeholder="Enter your age" 
        keyboardType="numeric" 
        value={age} 
        onChangeText={setAge} 
      />

      <TextInput 
        style={styles.input} 
        placeholder="Enter your email address" 
        keyboardType="email-address" 
        value={email} 
        onChangeText={setEmail} 
      />

      <TextInput 
        style={styles.input} 
        placeholder="Enter your phone number" 
        keyboardType="phone-pad" 
        value={phone} 
        onChangeText={setPhone} 
      />

      <TextInput 
        style={styles.input} 
        placeholder="Enter your address" 
        value={address} 
        onChangeText={setAddress} 
      />

      <Button title="Complete Registration" onPress={handleSubmit} color="#6200ee" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 25,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
  },
});

export default MemberSignUp;
