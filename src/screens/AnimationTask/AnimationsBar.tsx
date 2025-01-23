import React, {useCallback} from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import colors from '../../helpers/colors/colors';

export default function Animationbar({
  scrollX,
}: {
  scrollX: SharedValue<number>;
}) {
  const {height, width: ScreenWidth} = useWindowDimensions();
  const bars = [0, 1, 2];
  const AnimaedView = () => {
    return <View style={styles.bar}></View>;
  };

  return (
    <View style={styles.container}>
      {bars.map(index => {
        const animatedStyle = useAnimatedStyle(() => {
          const color = withTiming(
            scrollX.value >= index ? 'orange' : '#f3f4f3',
          );

          console.log('scrollX.value', scrollX.value);

          // const width = interpolate(
          //   scrollX.value,
          //   [0 , 3 * ScreenWidth],
          //   [40, 40],
          // );
          const width = scrollX.value >= index * ScreenWidth ? 40 : 0;

          return {
            backgroundColor: 'orange',
            width: withTiming(width),
            height: 5,
            // borderRadius: 5,
            alignSelf: 'flex-start',
          };
        });

        return (
          <View style={[styles.bar]} key={index}>
            <Animated.View style={[animatedStyle]} />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  bar: {
    width: 40,
    height: 5,
    marginHorizontal: 2,
    borderRadius: 5,
    backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
