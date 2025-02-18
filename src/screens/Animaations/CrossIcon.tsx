import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export default function CrossIcon() {
  const translateX = useSharedValue(-100);
  const translateY = useSharedValue(100);

  const animatedStyle1 = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}, {translateY: translateX.value}],
  }));

  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [{translateX: translateY.value}, {translateY: translateY.value}],
  }));

  useEffect(() => {
    setTimeout(() => {
      translateX.value = withTiming(0, {duration: 300});
    }, 1000);

    setTimeout(() => {
      translateY.value = withTiming(0, {duration: 300});
    }, 2000);

    setTimeout(() => {
      translateX.value = withTiming(-100, {duration: 300});
    }, 3500);

    setTimeout(() => {
      translateY.value = withTiming(200, {duration: 300});
    }, 4000);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[animatedStyle1]}>
        <View style={styles.line} />
      </Animated.View>

      <Animated.View style={[animatedStyle2]}>
        <View style={styles.line2} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  line: {
    height: 3,
    width: 30,
    backgroundColor: 'black',
    transform: [{rotate: '-45deg'}],
    position: 'absolute',
  },
  line2: {
    height: 3,
    width: 30,
    backgroundColor: 'black',
    transform: [{rotate: '45deg'}],
    position: 'absolute',
  },
});
