import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import Button from './src/components/Button/Button';

const App = () => {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const renderElements = ({item}) => (
    <Text style={styles.itemText}>{item}</Text>
  );

  const addToList = () => {
    if (!text.trim()) return;
    setList([...list, text.trim()]);
    setText('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        testID="list"
        keyExtractor={(_, index) => index.toString()}
        data={list}
        renderItem={renderElements}
      />
      <TextInput
        style={styles.input}
        testID="input-area"
        placeholder="add..."
        onChangeText={setText}
        value={text}
      />
      <Button title="Add" onClick={addToList} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  input: {
    backgroundColor: '#e0e0e0',
    margin: 10,
    padding: 10,
  },
  itemText: {
    fontSize: 16,
    padding: 5,
    marginHorizontal: 10,
  },
});
