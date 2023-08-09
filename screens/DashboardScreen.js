import { Button, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const DashboardScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Perform logout logic here
    // For example, clear user data and navigate to the Login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the Dashboard!</Text>
      <Button title="Logout" onPress={handleLogout} />
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
});

export default DashboardScreen;
