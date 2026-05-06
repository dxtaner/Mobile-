import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import counterStore from '../store/counterStore';

const HomeScreen = observer(() => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {counterStore.count}</Text>

      <Button title="Artır" onPress={() => counterStore.increase()} />
      <Button title="Azalt" onPress={() => counterStore.decrease()} />
    </View>
  );
});

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    margin: 20,
  },
});
