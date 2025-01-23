import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../../../helpers/colors/colors';
//@ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={{paddingVertical: 30}}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="gray"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Ionicons
          name={'search'}
          color={'white'}
          size={18}
          style={styles.rightIcon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightgray,
    borderRadius: 10,
    width: '100%',
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  rightIcon: {
    backgroundColor: '#2ba82b',
    borderRadius: 10,
    padding: 18,
  },
});
