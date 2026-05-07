import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function App() {
  const [image, setImage] = useState(null);

  const openCamera = () => {
    launchCamera({ mediaType: 'photo' }, response => {
      if (response.assets) {
        setImage(response.assets[0].uri);
      }
    });
  };

  const openGallery = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (response.assets) {
        setImage(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Kamera Aç" onPress={openCamera} />
      <Button title="Galeri Aç" onPress={openGallery} />

      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
});
