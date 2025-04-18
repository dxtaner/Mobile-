import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './pages/Welcome.js';
import MemberSign from './pages/MemberSign.js';
import MemberResult from './pages/MemberResult.js';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen" component={Welcome} />
      <Stack.Screen name="MemberSignScreen" component={MemberSign} />
      <Stack.Screen name="MemberResultScreen" component={MemberResult} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
