import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

import { getData } from '../utils/storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    // Perform login logic here
    const userData = await getData('user');
    const user = JSON.parse(userData);

    if (user && user.email === email && user.password === password) {
      navigation.navigate('Dashboard');
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.errorMessage}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2', // Background color
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white', // Input background color
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
  },
});

export default LoginScreen;
