import {Dimensions, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CardComponent from './CardComponent';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');

const initialData = [
  {id: '1', color: 'red'},
  {id: '2', color: 'green'},
  {id: '3', color: 'blue'},
  {id: '4', color: 'orange'},
  {id: '5', color: 'yellow'},
  {id: '6', color: 'gray'},
];

export default function SamosaCardAnimation() {
  const [data, setData] = useState(initialData);
  const xPositions = data.map(() => useSharedValue(0));

  const handleGesture = (index: number, X: number) => {
    xPositions[index].value = X;
  };

  const resetPosition = (index: number) => {
    xPositions[index].value = withTiming(0);
  };

  const moveFirstToLast = (index: number) => {
    resetPosition(index);
  };

  return (
    <GestureHandlerRootView style={styles.main}>
      {data.map((item, index) => {
        return (
          <CardComponent
            key={item.id}
            index={index}
            color={item.color}
            moveFirstToLast={moveFirstToLast}
            translateX={xPositions[index]}
            handleGesture={handleGesture}
          />
        );
      })}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import {Dimensions, StyleSheet} from 'react-native';
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
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');

interface CardComponentProps {
  index: number;
  color: string;
  moveFirstToLast: (index: number) => void;
  translateX: SharedValue<number>;
  handleGesture: (index: number, X: number) => void;
}

const CardComponent: React.FC<CardComponentProps> = ({
  index,
  color,
  moveFirstToLast,
  translateX,
  handleGesture,
}) => {
  const rotation = useSharedValue(0);
  const translateXX = useSharedValue(0);
  const opacity = useSharedValue(1);
  const zIndex = useSharedValue(1);
  const scale = useSharedValue(1);

  useEffect(() => {
    rotation.value = (index + 1) % 2 === 0 ? 20 : -5;
  }, [index]);

  const animatedStyle = useAnimatedStyle(() => {
    const rotateZ = interpolate(translateXX.value, [-width, width], [-20, 20]);
    const scaleVal = interpolate(
      Math.abs(translateXX.value),
      [0, width * 1.2],
      [1, 0.9],
    );

    return {
      transform: [
        {rotate: `${rotation.value + rotateZ}deg`},
        {translateX: translateXX.value},
        {scale: scaleVal},
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

  const panGestureHandler = Gesture.Pan()
    .runOnJS(true)
    .onUpdate(({translationX}) => {
      handleGesture(index, translationX);
    })
    .onEnd(({translationX}) => {
      if (Math.abs(translationX) > width * 0.2) {
        opacity.value = withTiming(0, {duration: 300});
        scale.value = withTiming(0.9, {duration: 300});

        translateX.value = withTiming(
          translationX > 0 ? width * 1.5 : -width * 1.5,
          {},
          () => {
            translateX.value = 0;
            opacity.value = withDelay(300, withTiming(1, {duration: 300}));
            scale.value = withTiming(1, {duration: 300});
          },
        );

        moveFirstToLast(index);
        zIndex.value -= 1;
      } else {
        translateXX.value = withSpring(0);
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
});

export default CardComponent;   x axis pe thk ha anb translate Y b kro ta upar nice Y pe drag ho sake lkn Y k case me drag kr k chore to ani position pe wapis a jye