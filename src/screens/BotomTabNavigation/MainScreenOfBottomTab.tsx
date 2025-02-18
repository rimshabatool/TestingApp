import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { FlashList } from '@shopify/flash-list';
import {
  useSharedValue,
} from 'react-native-reanimated';
import BottomView from './BottomView';

const colorSets = [
  ['#4c669f', '#3b5998', '#192f5d'],
  ['#ff7f50', '#ff6347', '#ff4500'],
  ['#7fff00', '#32cd32', '#228b22'],
  ['#8a2be2', '#4b0082', '#6a5acd'],
  ['#ff69b4', '#ff1493', '#db7093'],
];

const GradientBox = ({ colors }: { colors: string[] }) => (
  <LinearGradient colors={colors} style={styles.box}></LinearGradient>
);

export default function MainScreenOfBottomTab() {
  const offsetY = useSharedValue(0);
  const isScrolling = useSharedValue(false);

  const data = Array.from({ length: 100 }, (_, index) => {
    const colorSet = colorSets[index % colorSets.length];
    return {
      id: index + 1,
      colors: colorSet,
    };
  });

  const scrollHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    offsetY.value = event.nativeEvent.contentOffset.y;
    isScrolling.value = true;
  };

  const handleScrollEnd = () => {
    isScrolling.value = false;
  };

  return (
    <View style={styles.main}>
      <FlashList
        data={data}
        renderItem={({ item }) => <GradientBox colors={item.colors} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={4}
        showsHorizontalScrollIndicator={false}
        estimatedItemSize={117}
        disableAutoLayout={false}
        onScroll={scrollHandler}
        onMomentumScrollEnd={handleScrollEnd}
        onScrollEndDrag={handleScrollEnd}
      />

      <BottomView offsetY={offsetY} isScrolling={isScrolling} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  box: {
    height: 100,
    width: 100,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
