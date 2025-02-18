import {StyleSheet, View} from 'react-native';
import React from 'react';
//@ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Icon name="home" size={24} color="black" solid />
      <Icon name="search" size={24} color="black" solid />
      <Icon name="plus-square" size={24} color="black" solid />
      <Icon name="bell" size={24} color="black" solid />
      <Icon name="user" size={24} color="black" solid />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FaF9F6',
    width: '100%',
    height:50,
  },
});
