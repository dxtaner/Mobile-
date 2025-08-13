import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import Config from 'react-native-config';

import InfoCard from './components/InfoCard/InfoCard';
import Loading from './components/Loading';
import UserMarker from './components/marker/UserMarker';
import useFetch from './hooks/useFetch';

const API_URL = 'https://randomuser.me/api/?results=20';

const App = () => {
  const mapRef = useRef();
  const [selectedUser, setSelectedUser] = useState(null);
  const [infoModalVisible, setInfoModalVisible] = useState(false);

  const { data, loading, error } = useFetch(API_URL);

  const handleSelectUser = (coords, user) => {
    setSelectedUser(user);
    setInfoModalVisible(true);

    mapRef.current.animateToRegion({
      latitude: coords.latitude,
      longitude: coords.longitude,
      latitudeDelta: 5,
      longitudeDelta: 5,
    });
  };

  const renderMarkers = () => {
    return data.results?.map((user, index) => {
      const { location, picture, name, email, phone } = user;

      const coordinates = {
        latitude: parseFloat(location.coordinates.latitude),
        longitude: parseFloat(location.coordinates.longitude),
      };

      const userData = {
        name: `${name.first} ${name.last}`,
        email,
        phone,
        image: picture.large,
        location: location.city + ', ' + location.country,
      };

      return (
        <UserMarker
          key={index}
          coordinates={coordinates}
          userImageURL={picture.thumbnail}
          onSelect={() => handleSelectUser(coordinates, userData)}
        />
      );
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView ref={mapRef} style={{ flex: 1 }}>
        {!loading && renderMarkers()}
      </MapView>
      {loading && <Loading />}
      {selectedUser && (
        <InfoCard
          visibile={infoModalVisible}
          onClose={() => setInfoModalVisible(false)}
          user={selectedUser}
        />
      )}
    </View>
  );
};

export default App;
