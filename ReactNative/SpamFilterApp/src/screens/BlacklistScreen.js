import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { saveData, getData } from '../storage/storage';

const BlacklistScreen = () => {
  const [word, setWord] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    setList(await getData('userBlacklist'));
  };

  const add = async () => {
    if (!word) return;
    const updated = [...list, word];
    setList(updated);
    await saveData('userBlacklist', updated);
    setWord('');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Kara Liste</Text>
      <TextInput
        placeholder="Kelime ekle"
        value={word}
        onChangeText={setWord}
      />
      <Button title="Ekle" onPress={add} />

      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>• {item}</Text>}
      />
    </View>
  );
};

export default BlacklistScreen;
