import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Logout logic will go here
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile & Settings</Text>
      <View style={styles.buttonContainer}>
        <Button title="Edit Profile" onPress={() => {}} />
        <Button title="Change Password" onPress={() => {}} />
        <Button title="Language" onPress={() => navigation.navigate('LanguageSelection')} />
        <Button title="Logout" onPress={handleLogout} />
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  buttonContainer: {
    width: '80%',
  },
});

export default ProfileScreen;
