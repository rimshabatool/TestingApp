import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
//@ts-ignore
import LottieView from 'lottie-react-native';

export default function Home() {
  return (
    <View style={styles.main}>
      <Text style={styles.welcomeText}>Welcome To Home Screen</Text>
      <LottieView
        source={require('../../assets/SVGS/welcome.json')}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontFamily: 'SF-Pro-Display-Regular',
    marginBottom: 20,
  },
  animation: {
    width: 300,
    height: 300,
  },
});
