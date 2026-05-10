import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#121212',
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
