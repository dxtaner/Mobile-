import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FlashMessage from 'react-native-flash-message';

import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import Messages from './pages/Messages';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="LoginPage" component={Login} />
    <Stack.Screen name="SignPage" component={Sign} />
  </Stack.Navigator>
);

const App = () => {
  const [userSession, setUserSession] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUserSession(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
          <Stack.Screen
            name="AuthStack"
            component={AuthStack}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="MessageScreen"
            component={Messages}
            options={{
              title: 'Nothing',
              headerTitleAlign: 'center',
              headerTintColor: '#006400',
              headerRight: () => (
                <Icon
                  name="logout"
                  size={28}
                  color="#006400"
                  onPress={() => signOut(auth)}
                  style={{marginRight: 10}}
                />
              ),
            }}
          />
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
