import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import Page from './Page';

const data = ['whats', 'up', 'react native ', 'mob', 'developers'];

export default function Video3() {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <Animated.ScrollView
      style={styles.main}
      horizontal
      pagingEnabled
      onScroll={scrollHandler}
      scrollEventThrottle={16}
    >
      {data.map((title, index) => {
        return (
          <Page key={index.toString()} title={title} index={index} translateX={translateX} />
        );
      })}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
});
