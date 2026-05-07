import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const Windmill = ({ speed }) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 4000 / speed,
        useNativeDriver: true,
      }),
    ).start();
  }, [speed]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.blades, { transform: [{ rotate }] }]}>
        {[...Array(4)].map((_, i) => (
          <View
            key={i}
            style={[styles.blade, { transform: [{ rotate: `${i * 90}deg` }] }]}
          />
        ))}
      </Animated.View>
      <View style={styles.center} />
    </View>
  );
};

export default Windmill;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  blades: {
    width: 180,
    height: 180,
    position: 'absolute',
  },
  blade: {
    position: 'absolute',
    width: 25,
    height: 80,
    backgroundColor: '#333',
    borderRadius: 10,
    top: 50,
    left: 77,
  },
  center: {
    width: 20,
    height: 20,
    backgroundColor: '#000',
    borderRadius: 10,
  },
});
