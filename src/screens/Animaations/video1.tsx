import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring, withRepeat } from 'react-native-reanimated';

const size = 100;

export default function Video1() {
  const progress = useSharedValue(1);
  const scale = useSharedValue(1);

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), 3, true);
    scale.value = withRepeat(withTiming(2), 3, true);
  }, []);

  const handlerotation = (progress: Animated.SharedValue<number>) => {
    'worklet'
    return `${progress.value * 2 * Math.PI}rad`; 
  };

  const reAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [
        { scale: scale.value },
        { rotate: handlerotation(progress) },
      ],
      borderRadius: progress.value * size / 2, 
    };
  });

  return (
    <View style={styles.main}>
      <Animated.View style={[styles.animatedView, reAnimatedStyle]}>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedView: {
    height: size,
    width: size,
    backgroundColor: 'red',
  },
});
