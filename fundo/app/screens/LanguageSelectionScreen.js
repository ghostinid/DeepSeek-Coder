import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const LanguageSelectionScreen = ({ navigation }) => {
  const selectLanguage = (language) => {
    // Language selection logic will go here
    console.log(language);
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Language</Text>
      <View style={styles.buttonContainer}>
        <Button title="English" onPress={() => selectLanguage('en')} />
        <Button title="Shona" onPress={() => selectLanguage('sn')} />
        <Button title="Setswana" onPress={() => selectLanguage('tn')} />
        <Button title="Ndebele" onPress={() => selectLanguage('nd')} />
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

export default LanguageSelectionScreen;
