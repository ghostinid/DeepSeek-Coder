import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const RoleSelectionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Role</Text>
      <View style={styles.buttonContainer}>
        <Button title="Student" onPress={() => navigation.navigate('Register', { role: 'student' })} />
        <Button title="Teacher" onPress={() => navigation.navigate('Register', { role: 'teacher' })} />
        <Button title="Parent" onPress={() => navigation.navigate('Register', { role: 'parent' })} />
        <Button title="Peer Educator" onPress={() => navigation.navigate('Register', { role: 'peer_educator' })} />
        <Button title="Admin" onPress={() => navigation.navigate('Register', { role: 'admin' })} />
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

export default RoleSelectionScreen;
