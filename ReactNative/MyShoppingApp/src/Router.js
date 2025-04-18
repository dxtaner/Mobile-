import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import StackNavigator from './navigation/StackNavigator.js';
import Landing from './components/Landing.js';

const Router = () => {
  const userSession = useSelector(state => state.user);
  const isAuthLoading = useSelector(state => state.isAuthLoading);

  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Landing />
      ) : (
        <StackNavigator userSession={userSession} />
      )}
    </NavigationContainer>
  );
};

export default Router;
