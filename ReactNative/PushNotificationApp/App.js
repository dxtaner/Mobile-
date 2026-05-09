import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import {
  configureNotification,
  showNotification,
} from './src/services/notificationService';

export default function App() {
  useEffect(() => {
    configureNotification();
  }, []);

  return (
    <View style={{ marginTop: 50 }}>
      <Button title="Bildirim Göster" onPress={showNotification} />
    </View>
  );
}
