import Geolocation from 'react-native-geolocation-service';
import { useEffect, useState } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';

export default function useLocation() {
  const [location, setLocation] = useState(null);

  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Konum izni reddedildi');
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    (async () => {
      const hasPermission = await requestPermission();

      if (!hasPermission) return;

      Geolocation.getCurrentPosition(
        position => {
          console.log('LOCATION:', position);
          setLocation(position.coords);
        },
        error => {
          console.log('ERROR:', error);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        },
      );
    })();
  }, []);

  return location;
}
