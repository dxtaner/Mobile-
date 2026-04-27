import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { checkSpam } from '../utils/filterEngine';
import { getData } from '../storage/storage';

const HomeScreen = () => {
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');
  const [blacklist, setBlacklist] = useState([]);
  const [whitelist, setWhitelist] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    setBlacklist(await getData('userBlacklist'));
    setWhitelist(await getData('whitelist'));
  };

  const analyze = () => {
    const res = checkSpam(message, blacklist, whitelist);
    setResult(`${res.spam ? '🚨 SPAM' : '✅ TEMİZ'} - ${res.reason}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SpamShield</Text>

      <TextInput
        style={styles.input}
        placeholder="Mesaj gir..."
        multiline
        value={message}
        onChangeText={setMessage}
      />

      <Button title="Analiz Et" onPress={analyze} />

      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 50 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    height: 120,
    marginBottom: 20,
  },
  result: { marginTop: 20, fontSize: 18 },
});
