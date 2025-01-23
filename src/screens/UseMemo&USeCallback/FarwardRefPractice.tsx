import React, {useState, Suspense, lazy} from 'react';
import {View, Image, ActivityIndicator, StyleSheet, Text} from 'react-native';
import LazyLoadedImage from './LazyImage';


const FarwardRefPractice = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);

  const handlePress = () => {
    setIsImageVisible(!isImageVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.button} onPress={handlePress}>
        {isImageVisible ? 'Hide Image' : 'Show Image'}
      </Text>
      <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" />}>
        {isImageVisible && <LazyLoadedImage />}
      </Suspense>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 18,
    marginBottom: 20,
    color: 'blue',
  },
});

export default FarwardRefPractice;
