import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      showMessage({
        message: 'Lütfen tüm alanları doldurun.',
        type: 'danger',
      });
      return;
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        showMessage({
          message: 'Giriş başarılı!',
          type: 'success',
        });
      })
      .catch(() =>
        showMessage({
          message: 'Giriş başarısız. Bilgilerinizi kontrol edin.',
          type: 'danger',
        }),
      );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="E-posta"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Şifre"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Hesabınız yok mu?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignPage')}>
          <Text style={styles.signupLink}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    fontSize: 16,
    color: '#777',
  },
  signupLink: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default LoginPage;
