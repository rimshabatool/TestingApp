import React from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const bars = [0, 1, 2];

const BottomBars = ({scrollX}: {scrollX: SharedValue<number>}) => {
  const barWidth = 10;
  const barHeight = 5;
  return (
    <View style={styles.bottomContainer}>
      {bars.map(index => {
        const animatedStyle = useAnimatedStyle(() => {
          const color = withTiming(scrollX.value >= index ? 'green' : 'gray', {
            duration: 300,
          });
          return {backgroundColor: color};
        });

        return (
          <Animated.View
            key={index}
            style={[
              styles.bar,
              animatedStyle,
              {width: barWidth, height: barHeight},
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  bar: {
    marginHorizontal: 3,
    borderRadius: 5,
  },
});

export default BottomBars;
