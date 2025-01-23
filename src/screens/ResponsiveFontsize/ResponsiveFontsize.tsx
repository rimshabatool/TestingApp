import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { scale } from '../../helpers/Fontsize/Fontsize';

const ResponsiveFontsize = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.smallText]}>Small Text</Text>
      <Text style={[styles.text, styles.mediumText]}>Medium Text</Text>
      <Text style={[styles.text, styles.largeText]}>Large Text</Text>
      <Text style={[styles.text, styles.extraLargeText]}>Extra Large Text</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginVertical: 5,
  },
  smallText: {
    fontSize: scale.h(1) 
  },
  mediumText: {
    fontSize: scale.h(2) 
  },
  largeText: {
    fontSize: scale.w(3) 
  },
  extraLargeText: {
    fontSize: scale.w(4) 
  },
});

export default ResponsiveFontsize;
