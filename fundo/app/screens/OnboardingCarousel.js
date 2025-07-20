import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Swiper from 'react-native-swiper';

const OnboardingCarousel = ({ navigation }) => {
  return (
    <Swiper style={styles.wrapper} showsButtons={true}>
      <View style={styles.slide}>
        <Text style={styles.text}>Welcome to Fundo!</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Learn at your own pace.</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Connect with peers and teachers.</Text>
        <Button title="Get Started" onPress={() => navigation.navigate('Welcome')} />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default OnboardingCarousel;
