import {Image, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
//@ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../../helpers/colors/colors';
import {profile} from '../../../assets/Images';

export default function Header() {
  return (
    <View style={styles.headerRow}>
      <View style={styles.imageView}>
        <Image
          source={profile}
          resizeMode="contain"
          style={{height: '100%', width: '100%'}}
        />
      </View>

      <TextInput
        placeholder="Search"
        placeholderTextColor={'black'}
        style={styles.searchInput}
      />

      <Icon
        name="plus-square"
        size={24}
        color="black"
        solid
        style={styles.icon}
      />

      <Icon
        name="comment-alt"
        size={24}
        color="black"
        solid
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 10,
    padding: 10,
    backgroundColor: '#FaF9F6',
  },
  imageView: {
    height: 40,
    width: 40,
    borderRadius: 25,
    backgroundColor: colors.lightgray,
  },
  searchInput: {
    width: '60%',
    borderColor: 'gray',
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'black',
    backgroundColor: colors.lightgray,
  },
  icon: {
    marginLeft: 10,
  },
});
