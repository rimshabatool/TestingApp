import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';

interface PageProps {
  title: string;
  index: number;
  translateX: SharedValue<number>;
}

const { height, width } = Dimensions.get('window');
const size = width * 0.7;

const Page: React.FC<PageProps> = ({ index, title, translateX }) => {
  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, 1, 0],
      Extrapolation.CLAMP
    );

    const borderRadius = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, size / 2, 0],
      Extrapolation.CLAMP
    );

    return {
      borderRadius: borderRadius,
      transform: [{ scale }],
    };
  });
  const rTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [height/2, 0, -height/2],
      Extrapolation.CLAMP
    );

   const opacity=interpolate(
    translateX.value,
    [(index - 1) * width, index * width, (index + 1) * width],
    [-2,1,-2],
    Extrapolation.CLAMP
   )

    return {
      transform: [{ translateY }],
      opacity
    };
  });

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: `rgba(0,0,256,0.${index + 2})` },
      ]}
    >
      <Animated.View style={[styles.square, rStyle]}>
        <Animated.View style={rTextStyle}>
        <Text style={styles.text}>{title}</Text>

        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    height,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    height: size,
    width: size,
    backgroundColor: 'rgba(0,0,256,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center', 
  },
});
