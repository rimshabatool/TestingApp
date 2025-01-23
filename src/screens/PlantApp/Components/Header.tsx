import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
//@ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.contentView}>
        <Text style={styles.letsFindText}>Lets find</Text>
        <Text style={styles.favouritePlantText}>Favourite Plant</Text>
      </View>
      <View style={styles.iconView}>
        <View style={styles.iconBackView}>
          <Ionicons
            name={'notifications-outline'}
            color={'#2ba82b'}
            size={25}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentView: {
    flex: 0.8,
  },
  iconView: {
    flex: 0.2,
  },
  letsFindText: {
    fontSize: 20,
    fontFamily: 'SF-Pro-Display-Medium',
  },
  favouritePlantText: {
    fontSize: 28,
    fontFamily: 'SF-Pro-Display-Bold',
  },
  iconBackView: {
    height: 40,
    width: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 4,
    borderRadius: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
