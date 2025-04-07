import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerStyle: {backgroundColor: '#f8f9fa'},
  headerTitleStyle: {
    color: '#FF6347',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerTitleAlign: 'center',
  headerTintColor: '#FF6347',
  animation: 'slide_from_right',
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="CategoriesPage"
          component={Categories}
          options={{title: '🍽 Categories'}}
        />
        <Stack.Screen
          name="MealsPage"
          component={Meals}
          options={{title: '🥘 Meals'}}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{title: '📖 Recipe Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
