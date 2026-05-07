import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Windmill from './src/components/Windmill';
import Slider from '@react-native-community/slider';

export default function App() {
  const [speed, setSpeed] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.sun} />

      <Windmill speed={speed} />

      <View style={styles.sliderContainer}>
        <Text>Rüzgar Hızı: {speed.toFixed(1)}</Text>
        <Slider
          minimumValue={0.5}
          maximumValue={5}
          value={speed}
          onValueChange={setSpeed}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sun: {
    position: 'absolute',
    top: 80,
    right: 50,
    width: 80,
    height: 80,
    backgroundColor: 'yellow',
    borderRadius: 40,
  },
  sliderContainer: {
    position: 'absolute',
    bottom: 50,
    width: '80%',
  },
});
