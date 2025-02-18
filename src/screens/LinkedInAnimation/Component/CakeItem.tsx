import React from 'react';
import {View, Text, Image, StyleSheet, ListRenderItem} from 'react-native';
import FastImage from 'react-native-fast-image';
import {profile} from '../../../assets/Images';

interface Cake {
  id: string;
  name: string;
  description: string;
  price: string;
  image: any;
}

const CakeItem: ListRenderItem<Cake> = ({item}: {item: Cake}) => (
  <View style={styles.card}>
    <FastImage
      source={profile}
      style={{width: 80, height: 80}}
      resizeMode={FastImage.resizeMode.cover}
    />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  </View>
);

export default CakeItem;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 3,
    height: 120,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#e91e63',
  },
});
