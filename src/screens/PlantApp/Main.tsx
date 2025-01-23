import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import TopBar from './Components/Topbar';

export default function Main() {
  return (
    <LinearGradient
      colors={['#FFFAFA', '#E6F9DA']}
      style={styles.main}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <StatusBar backgroundColor={'transparent'} translucent />
      <Header />
      <SearchBar />
      <TopBar />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingLeft: 20,
  },
});
