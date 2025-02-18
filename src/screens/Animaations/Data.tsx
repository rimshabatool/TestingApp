import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Data() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.text}>Login</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Register</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Support</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>About</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',     
    width: '100%',
  },
  item: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
});
