import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MemberResult = ({ route, navigation }) => {
  const { name, age, email, phone, address } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Membership Details</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Name: <Text style={styles.infoValue}>{name}</Text></Text>
        <Text style={styles.info}>Age: <Text style={styles.infoValue}>{age}</Text></Text>
        <Text style={styles.info}>Email: <Text style={styles.infoValue}>{email}</Text></Text>
        <Text style={styles.info}>Phone: <Text style={styles.infoValue}>{phone}</Text></Text>
        <Text style={styles.info}>Address: <Text style={styles.infoValue}>{address}</Text></Text>
      </View>

      <Button 
        title="Go to Home Page" 
        onPress={() => navigation.navigate('WelcomeScreen')} 
        color="#6200ee"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#333',
    marginBottom: 30,
  },
  infoContainer: {
    width: '100%',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  info: {
    fontSize: 18,
    color: '#555',
    marginBottom: 12,
  },
  infoValue: {
    fontWeight: 'bold',
    color: '#333',
  },
});

export default MemberResult;
