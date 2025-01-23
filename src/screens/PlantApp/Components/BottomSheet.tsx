import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomSheet from '@devvie/bottom-sheet';

export default function BottomSheetComponent() {
  const bottomSheetRef = useRef<any>(null);

  useEffect(() => {
    bottomSheetRef.current?.open(); // Open automatically
  }, []);

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        closeOnPressBack={false} // Prevent closing on back press
        closeOnPressMask={false} // Prevent closing on outside tap
        closeOnDragDown // Allow dragging down
        height={300} // Max height
        minHeight={100} // Stays slightly visible when dragged down
        backgroundStyle={{backgroundColor: 'transparent'}} // No background change
        enablePanDownToClose={false} // Prevent full closure
      >
        <View style={styles.content}>
          <Text style={styles.text}>This is the Bottom Sheet Content!</Text>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});
