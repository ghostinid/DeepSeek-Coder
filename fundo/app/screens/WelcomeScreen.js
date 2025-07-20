import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fundo</Text>
      <View style={styles.buttonContainer}>
        <Button title="Sign Up" onPress={() => navigation.navigate('RoleSelection')} />
        <Button title="Log In" onPress={() => navigation.navigate('Login')} />
        <Button title="Continue as Guest" onPress={() => navigation.navigate('Home')} />
        <Button title="Select Language" onPress={() => navigation.navigate('LanguageSelection')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  buttonContainer: {
    width: '80%',
  },
});

export default WelcomeScreen;
