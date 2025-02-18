import {Button, StyleSheet} from 'react-native';
import React from 'react';
import {
  GestureHandlerRootView,
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';
import Animated, {useSharedValue} from 'react-native-reanimated';
import Svg, {Path} from 'react-native-svg';

export default function DrawAnimations() {
  const prevPath = useSharedValue('');
  const path = useSharedValue<string>('');

  const AnimatedPath = Animated.createAnimatedComponent(Path);

  const panGesture = Gesture.Pan()
    .onBegin(event => {
      if (!event.velocityX && !event.velocityY) {
        // Adding dot effect
        path.value += `M${event.x},${event.y} h2`;
      } else {
        path.value = prevPath.value + `M${event.x},${event.y}`;
      }
    })
    .onUpdate(event => {
      const lastCoords = path.value.split(' ').slice(-1)[0].split(',');
      if (lastCoords.length === 2) {
        const lastX = parseFloat(lastCoords[0].replace('L', ''));
        const lastY = parseFloat(lastCoords[1]);
        const midX = (lastX + event.x) / 2;
        const midY = (lastY + event.y) / 2;

        path.value = `${path.value} Q${midX},${midY} ${event.x},${event.y}`;
      } else {
        path.value = `${path.value} L${event.x},${event.y}`;
      }
    })
    .onEnd(() => {
      prevPath.value = path.value;
    });

  return (
    <GestureHandlerRootView style={styles.main}>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={styles.container}>
          <Svg style={StyleSheet.absoluteFill}>
            <AnimatedPath
              d={path}
              stroke="blue"
              strokeWidth={15}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </Animated.View>
      </GestureDetector>
      <Button
        title="Clear"
        onPress={() => {
          path.value = '';
          prevPath.value = '';
        }}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },
});
