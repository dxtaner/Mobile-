import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import BlacklistScreen from './src/screens/BlacklistScreen';
import WhitelistScreen from './src/screens/WhitelistScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Ana Sayfa" component={HomeScreen} />
        <Stack.Screen name="Kara Liste" component={BlacklistScreen} />
        <Stack.Screen name="Beyaz Liste" component={WhitelistScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
