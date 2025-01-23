import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
//@ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ItemScreenHeader() {
  return (
    <View>
      <View style={styles.headerView}>
        <View style={styles.iconsBackgound}>
          <Ionicons name="chevron-back" size={24} color={'#2ba82b'} />
        </View>

        <Text style={styles.headerTitle}>Flawill Fern</Text>

        <View style={styles.iconsBackgound}>
          <Ionicons name="cart-outline" size={24} color={'#2ba82b'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconsBackgound: {
    height: 30,
    width: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 4,
    borderRadius: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'SF-Pro-Display-Bold',
  },
});
