import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import Products from '../pages/Products';
import Detail from '../pages/Detail';
import Login from '../pages/Login';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const userSession = useSelector(state => state.auth.user);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTitleAlign: 'center',
        headerTitleStyle: styles.headerTitle,
        headerTintColor: '#fff',
      }}>
      {!userSession ? (
        <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <>
          <Stack.Screen
            name="ProductsPage"
            component={Products}
            options={{
              headerStyle: styles.productsHeader,
              title: <CustomTitle text="MY STORE" />,
            }}
          />
          <Stack.Screen
            name="DetailPage"
            component={Detail}
            options={{
              headerStyle: styles.detailHeader,
              title: <CustomTitle text="PRODUCT" />,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

const CustomTitle = ({text}) => (
  <View style={styles.customTitleContainer}>
    <Text style={styles.customTitle}>
      {text.split(' ')[0]}{' '}
      <Text style={styles.customTitleSecondary}>{text.split(' ')[1]}</Text>
    </Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#e56903',
    elevation: 5,
    shadowOpacity: 0.3,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
  },
  customTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  customTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  customTitleSecondary: {
    fontWeight: '500',
    color: '#ffd700',
  },
  productsHeader: {
    backgroundColor: '#e56903',
    elevation: 5,
    shadowOpacity: 0.3,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  detailHeader: {
    backgroundColor: '#ffe5d1',
    elevation: 5,
    shadowOpacity: 0.2,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
});

export default StackNavigator;
