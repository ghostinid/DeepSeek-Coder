import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './app/screens/SplashScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import RoleSelectionScreen from './app/screens/RoleSelectionScreen';
import RegistrationScreen from './app/screens/RegistrationScreen';
import HomeScreen from './app/screens/HomeScreen';
import OnboardingCarousel from './app/screens/OnboardingCarousel';
import LanguageSelectionScreen from './app/screens/LanguageSelectionScreen';
import ProfileScreen from './app/screens/ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={OnboardingCarousel} options={{ headerShown: false }} />
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} options={{ title: 'Select Role' }} />
        <Stack.Screen name="Register" component={RegistrationScreen} options={{ title: 'Register/Login' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LanguageSelection" component={LanguageSelectionScreen} options={{ title: 'Select Language' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile & Settings' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
