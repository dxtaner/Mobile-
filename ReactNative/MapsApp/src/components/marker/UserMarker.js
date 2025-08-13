import React from 'react';
import { Marker } from 'react-native-maps';
import { Image } from 'react-native';

const UserMarker = ({ coordinates, userImageURL, onSelect }) => {
  return (
    <Marker coordinate={coordinates} onPress={onSelect}>
      <Image
        source={{ uri: userImageURL }}
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: '#fff',
        }}
      />
    </Marker>
  );
};

export default UserMarker;
