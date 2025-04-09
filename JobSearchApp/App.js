import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Text, StyleSheet} from 'react-native';

import Jobs from './src/pages/JobsPage';
import Detail from './src/pages/Detail';
import Favorite from './src/pages/Favorite';

import reducers from './src/context/reducers';
import initialState from './src/context/store';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const store = createStore(reducers, initialState);

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: styles.tabBarStyle,
      tabBarLabelStyle: styles.tabBarLabelStyle,
      tabBarIconStyle: styles.tabBarIconStyle,
    }}>
    <Tab.Screen
      name="Jobs"
      component={Jobs}
      options={{
        title: 'Jobs',
        tabBarIcon: () => <Text style={styles.tabIcon}>💼</Text>,
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={Favorite}
      options={{
        title: 'Favorites',
        tabBarIcon: () => <Text style={styles.tabIcon}>❤️</Text>,
      }}
    />
  </Tab.Navigator>
);

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: styles.headerStyle}}>
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailJobs"
          component={Detail}
          options={{
            title: 'Job Detail',
            headerTitleStyle: styles.headerTitleStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#34495E',
    borderTopWidth: 0,
    height: 60,
    paddingBottom: 5,
  },
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ECF0F1',
    marginBottom: 5,
  },
  tabBarIconStyle: {
    marginBottom: 3,
  },
  tabIcon: {
    fontSize: 24,
    color: '#ECF0F1',
  },
  headerStyle: {
    backgroundColor: '#2C3E50',
    height: 90,
    elevation: 0,
    shadowOpacity: 0,
    paddingTop: 20,
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ECF0F1',
    textAlign: 'center',
  },
});

export default App;
