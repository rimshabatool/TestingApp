import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  SharedValue,
  useAnimatedReaction,
  withDelay,
  interpolate,
  runOnJS,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');

interface CardComponentProps {
  index: number;
  color: string;
  moveFirstToLast: (index: number) => void;
  translateX: SharedValue<number>;
  translateY: SharedValue<number>;
  handleGesture: (index: number, X: number, Y: number) => void;
}

const CardComponent: React.FC<CardComponentProps> = ({
  index,
  color,
  moveFirstToLast,
  translateX,
  translateY,
  handleGesture,
}) => {
  const rotation = useSharedValue(0);
  const translateXX = useSharedValue(0);
  const translateYY = useSharedValue(0);
  const opacity = useSharedValue(1);
  const zIndex = useSharedValue(1);

  useEffect(() => {
    rotation.value = (index + 1) % 2 === 0 ? 20 : -5;
  }, [index]);

  const animatedStyle = useAnimatedStyle(() => {
    const rotateZ = interpolate(translateXX.value, [-width, width], [-30, 30]);

    return {
      transform: [
        {rotate: `${rotation.value + rotateZ}deg`},
        {translateX: translateXX.value},
        {translateY: translateYY.value},
      ],
      opacity: opacity.value,
      zIndex: zIndex.value,
    };
  });

  useAnimatedReaction(
    () => translateX.value,
    c => {
      translateXX.value = c;
    },
  );

  useAnimatedReaction(
    () => translateY.value,
    c => {
      translateYY.value = c;
    },
  );

  const panGestureHandler = Gesture.Pan()
    .runOnJS(true)
    .onUpdate(({translationX, translationY}) => {
      handleGesture(index, translationX, translationY);
    })
    .onEnd(({translationX, translationY}) => {
      if (Math.abs(translationX) > width * 0.4) {
        translateX.value = withTiming(
          translationX > 0 ? width * 2.5 : -width * 2.5,
          {duration: 500},
          () => {
            opacity.value = withTiming(0, {duration: 300}, () => {
              runOnJS(moveFirstToLast)(index);
              translateX.value = 0;
              translateY.value = 0;
              opacity.value = withDelay(300, withTiming(1, {duration: 300}));
              zIndex.value -= 1;
            });
          },
        );
      } else {
        translateXX.value = withTiming(0);
        translateYY.value = withTiming(0);
      }
    });

  return (
    <GestureDetector gesture={panGestureHandler}>
      <Animated.View
        style={[styles.card, {backgroundColor: color}, animatedStyle]}
      />
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  card: {
    height: height * 0.3,
    width: width * 0.85,
    borderRadius: 30,
    position: 'absolute',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 10,
  },
});

export default CardComponent;
