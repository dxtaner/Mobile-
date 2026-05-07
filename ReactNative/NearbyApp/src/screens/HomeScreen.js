import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import useLocation from '../hooks/useLocation';

const HomeScreen = () => {
  const location = useLocation();

  if (!location) {
    return <Text>Konum alınıyor...</Text>;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={location} title="Sen buradasın" />

        <Marker
          coordinate={{
            latitude: location.latitude + 0.002,
            longitude: location.longitude + 0.002,
          }}
          title="Nearby User"
        />
      </MapView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});
