import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/splashScreen'; // Path to your SplashScreen component
import Login from './screens/login';

// Import other screens as needed

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen 
          name="SplashScreen" 
          component={SplashScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
      <Stack.Screen name='login' component={Login}  ></Stack.Screen>
    </NavigationContainer>
  );
};

export default App;
