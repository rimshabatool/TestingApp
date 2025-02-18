import React, {useEffect} from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';

const images = [
  require('../../assets/Images/1.jpg'),
  require('../../assets/Images/2.jpg'),
  require('../../assets/Images/3.jpg'),
  require('../../assets/Images/4.jpg'),
];
const {height, width} = Dimensions.get('window');
const RightGap = width - 230;
const LeftGap = width - 530;

export default function CardAnimation() {
  const currentIndex = useSharedValue(0);

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % images.length;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getAnimatedStyle = (index: number) => {
    return useAnimatedStyle(() => {
      // let width = interpolate(
      //   currentIndex.value,
      //   [0, 1, 2, 3],
      //   [ITEM_WIDTH, ITEM_WIDTH - ITEM_GAP, ITEM_WIDTH, ITEM_WIDTH - ITEM_GAP],
      //   Extrapolation.CLAMP,
      // );
      const isActive = currentIndex.value === index;
      const isLeft =
        (currentIndex.value - 1 + images.length) % images.length === index;
      const isRight = (currentIndex.value + 1) % images.length === index;
      const isFourth = (currentIndex.value + 2) % images.length === index;

      return {
        // width:withTiming(width,{duration:2000}),
        transform: [
          {
            translateX: withTiming(
              isActive ? 0 : isLeft ? LeftGap : isRight ? RightGap : 0,
              {duration: 2000},
            ),
          },
          {
            rotateY: withTiming(
              isActive
                ? '0deg'
                : isLeft
                ? '-110deg'
                : isRight
                ? '110deg'
                : '180deg',
              {duration: 2000},
            ),
          },
          {
            scale: withTiming(isActive ? 1 : isFourth ? 0.6 : 0.8, {
              duration: 2000,
            }),
          },
        ],
        zIndex: isActive ? 3 : isLeft ? 2 : isRight ? 1 : 0,
      };
    });
  };

  return (
    <View style={styles.main}>
      {images.map((source, index) => (
        <Animated.View
          key={index}
          style={[styles.item, getAnimatedStyle(index)]}>
          <Image source={source} style={styles.image} resizeMode="cover" />
        </Animated.View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  item: {
    position: 'absolute',
    height: 400,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
