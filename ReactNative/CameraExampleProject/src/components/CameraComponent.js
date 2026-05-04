import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import { RNCamera } from 'react-native-camera';

const CameraComponent = () => {
  const cameraRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(false);

  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        );

        console.log('izin sonucu:', granted);

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setHasPermission(true);
        } else {
          setHasPermission(false);
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      setHasPermission(true);
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const data = await cameraRef.current.takePictureAsync();
      console.log('Fotoğraf:', data.uri);
    }
  };

  if (!hasPermission) {
    return (
      <View style={styles.center}>
        <Text>Kamera izni bekleniyor...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
      >
        <View style={styles.overlay}>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>📸 Çek</Text>
          </TouchableOpacity>
        </View>
      </RNCamera>
    </View>
  );
};

export default CameraComponent;

const styles = StyleSheet.create({
  container: { flex: 1 },
  preview: { flex: 1, justifyContent: 'flex-end' },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 50,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
