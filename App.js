import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
// App.js
import React from 'react';
import SignupScreen from './screens/SignupScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
