// components/WeatherInfoCard.js

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WeatherInfoCard = ({label, value, unit, color}) => (
  <View style={[styles.card]}>
    <Text style={styles.label}>{label}</Text>
    <Text style={[styles.value, {color}]}>{value}</Text>
    <Text style={styles.unit}>{unit}</Text>
  </View>
);

export default WeatherInfoCard;

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    width: 100,
  },
  label: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 4,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  unit: {
    color: '#aaa',
    fontSize: 12,
  },
});
