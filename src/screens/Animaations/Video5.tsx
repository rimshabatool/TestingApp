import {Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  clamp,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const imagepath =
  'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0';
const {height, width} = Dimensions.get('window');
const AnimatedImage = Animated.createAnimatedComponent(Animated.Image);

export default function Video5() {
  const scale = useSharedValue(1);

  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const pinchGesture = Gesture.Pinch()
    .onUpdate(event => {
      scale.value = clamp(event.scale, 1, 5);
      focalX.value = event.focalX;
      focalY.value = event.focalY;
    })
    .onEnd(event => {
      scale.value = withTiming(1);
      focalX.value = withTiming(0);
      focalY.value = withTiming(0);
    });

  const rnstyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: focalX.value},
        {translateY: focalY.value},
        {translateX: -width / 2},
        {translateY: -height / 2},
        {scale: scale.value},
        {translateX: -focalX.value},
        {translateY: -focalY.value},
        {translateX: width / 2},
        {translateY: height / 2},
      ],
    };
  });

  const focalpointStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: focalX.value}, {translateY: focalY.value}],
    };
  });

  return (
    <GestureHandlerRootView>
      <Animated.View style={styles.container}>
        <GestureDetector gesture={pinchGesture}>
          <Animated.View style={styles.wrapper}>
            <AnimatedImage
              style={[styles.image, rnstyle]}
              source={{uri: imagepath}}
            />
          </Animated.View>
        </GestureDetector>
        <Animated.View style={[styles.focalPoint, focalpointStyle]} />
      </Animated.View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height,
    width,
  },
  focalPoint: {
    ...StyleSheet.absoluteFillObject,
    // top: 0,
    // left: 0,
    // position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: 'blue',
    borderRadius: 10,
    zIndex: 999999,
  },
});
