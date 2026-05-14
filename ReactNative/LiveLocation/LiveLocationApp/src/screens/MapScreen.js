import React, { useEffect, useState } from 'react';
import { View, StyleSheet, PermissionsAndroid, Platform } from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

import socket from '../services/socket';

const MapScreen = () => {
  const [region, setRegion] = useState(null);
  const [users, setUsers] = useState({});

  useEffect(() => {
    requestLocationPermission();

    socket.on('usersLocation', data => {
      setUsers(data);
    });

    return () => {
      socket.off('usersLocation');
    };
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getLocation();
      }
    }
  };

  const getLocation = () => {
    Geolocation.watchPosition(
      position => {
        const coords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        setRegion({
          ...coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });

        socket.emit('sendLocation', coords);
      },
      error => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 1,
      },
    );
  };

  if (!region) return null;

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region}>
        {Object.keys(users).map(id => (
          <Marker key={id} coordinate={users[id]} title={id} />
        ))}
      </MapView>
    </View>
  );
};

export default MapScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    flex: 1,
  },
});
