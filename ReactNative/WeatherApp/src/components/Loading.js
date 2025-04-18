import React from 'react';
import {View, ActivityIndicator, Text, StyleSheet} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ffffff" />
      <Text style={styles.text}>Veriler yükleniyor...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D47A1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 10,
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
