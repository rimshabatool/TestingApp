import { StyleSheet, View } from 'react-native';
import React from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { GestureDetector, GestureHandlerRootView, Gesture, GestureHandler } from 'react-native-gesture-handler';

const size = 100;
const circleradius = size * 2;

export default function Video2() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const prevTranslationX = useSharedValue(0);
  const prevTranslationY = useSharedValue(0);
  const widthscale = useSharedValue(1);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: widthscale.value }],
    };
  });

  const panGesture = Gesture.Pan()
    .onStart(() => {
        prevTranslationX.value = translateX.value;
        prevTranslationY.value = translateY.value;
      
    })
    .onUpdate((event) => {
        translateX.value = prevTranslationX.value + event.translationX;
        translateY.value = prevTranslationY.value + event.translationY;
      
    })
    .onEnd(() => {
        const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);
        if (distance < circleradius + size / 2) {
          translateX.value = withSpring(0);
          translateY.value = withSpring(0);
        
      }
    });

  const pinchGesture = Gesture.Pinch()
    .onUpdate((event) => {
      if (event.pointerType === GestureHandler.PointerType.TOUCH) {
        widthscale.value = event.scale;
      }
    })
    .onEnd(() => {
      widthscale.value = withSpring(1); 
    });

  return (
    <GestureHandlerRootView style={styles.main}>
      <GestureDetector gesture={Gesture.Race(panGesture, pinchGesture)}>
        <View style={styles.circle}>
          <Animated.View style={[styles.square, rStyle]} />
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    height: size*1.5,
    width: size*1.5,
    backgroundColor: 'blue',
    borderRadius: 30,
  },
  circle: {
    width: circleradius * 2,
    height: circleradius * 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: circleradius * 2,
    borderWidth: 5,
    borderColor: 'blue',
  },
});
