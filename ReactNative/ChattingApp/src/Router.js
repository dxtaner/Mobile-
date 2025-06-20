import React, {useState, useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import FlashMessage from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import ChatRooms from './pages/ChatRooms';
import ChatRoomDetail from './pages/ChatRoomDetail/ChatRoomDetail';

import {ChatRoomContext} from './context/ChatRoomContext';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="LoginPage" component={Login} />
    <Stack.Screen name="SignPage" component={Sign} />
  </Stack.Navigator>
);

const MainStack = () => {
  const {roomTitle} = useContext(ChatRoomContext);
  const primaryColor = '#FFA500';

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Rooms"
        component={ChatRooms}
        options={{
          title: 'Odalar',
          headerTitleAlign: 'center',
          headerTitleStyle: {color: primaryColor},
        }}
      />
      <Stack.Screen
        name="ChatRoomDetail"
        component={ChatRoomDetail}
        options={{
          title: roomTitle,
          headerTitleAlign: 'center',
          headerTintColor: primaryColor,
          headerTitleStyle: {color: primaryColor},
          headerRight: () => (
            <Icon
              name="logout"
              size={28}
              color={primaryColor}
              onPress={() => auth().signOut()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!userSession ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <Stack.Screen name="MainStack" component={MainStack} />
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Router;
