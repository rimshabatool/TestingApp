import React from 'react';
import { Image, StyleSheet } from 'react-native';

const LazyLoadedImage = () => {
  return (
    <Image
      source={require('../../assets/Images/cake1.png')}
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
});

export default LazyLoadedImage;
