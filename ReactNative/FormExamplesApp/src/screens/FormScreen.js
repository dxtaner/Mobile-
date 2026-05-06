import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FormScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!name) newErrors.name = 'İsim gerekli';
    if (!email.includes('@')) newErrors.email = 'Geçerli email gir';
    if (password.length < 6) newErrors.password = 'En az 6 karakter';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log('FORM DATA:', { name, email, password });
      alert('Başarılı 🎉');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayıt Formu</Text>

      <TextInput
        placeholder="İsim"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      {errors.name && <Text style={styles.error}>{errors.name}</Text>}

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <TextInput
        placeholder="Şifre"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}

      <Button title="Gönder" onPress={handleSubmit} />
    </View>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
