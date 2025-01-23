import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, SafeAreaView, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import ItemScreenHeader from './Components/ItemScreenHeader';
import BottomBars from './Components/BottomBars';
import BottomSheetComponent from './Components/BottomSheet';

export default function ItemScreen() {
  const scrollX = useSharedValue(0); 

  useEffect(() => {
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor={'#F2FBE8'} />
      <ItemScreenHeader />
      <BottomBars scrollX={scrollX} />
      <BottomSheetComponent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F2FBE8',
    padding: 15,
  },
});
