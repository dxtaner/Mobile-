import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { saveData, getData } from '../storage/storage';

const WhitelistScreen = () => {
  const [word, setWord] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await getData('whitelist');
    setList(data);
  };

  const addWord = async () => {
    if (!word.trim()) return;

    // tekrar eklemeyi engelle
    if (list.includes(word.trim().toLowerCase())) {
      return;
    }

    const updated = [...list, word.trim().toLowerCase()];
    setList(updated);
    await saveData('whitelist', updated);
    setWord('');
  };

  const removeWord = async index => {
    const updated = list.filter((_, i) => i !== index);
    setList(updated);
    await saveData('whitelist', updated);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🤍 Beyaz Liste</Text>

      <TextInput
        style={styles.input}
        placeholder="Filtrelenmeyecek kelime ekle"
        value={word}
        onChangeText={setWord}
      />

      <Button title="Ekle" onPress={addWord} />

      <FlatList
        style={{ marginTop: 20 }}
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemRow}>
            <Text style={styles.itemText}>• {item}</Text>

            <TouchableOpacity onPress={() => removeWord(index)}>
              <Text style={styles.delete}>Sil</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ marginTop: 20, color: 'gray' }}>
            Henüz beyaz liste kelimesi yok.
          </Text>
        }
      />
    </View>
  );
};

export default WhitelistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
  },
  delete: {
    color: 'red',
    fontWeight: 'bold',
  },
});
