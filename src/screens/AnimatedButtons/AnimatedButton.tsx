import {Dimensions, StyleSheet} from 'react-native';
import React, {useMemo} from 'react';
import {
  Blur,
  Canvas,
  Circle,
  ColorMatrix,
  Group,
  Paint,
  Skia,
  SweepGradient,
  vec,
} from '@shopify/react-native-skia';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  runOnJS,
} from 'react-native-reanimated';
import {useGestureHandler} from 'react-native-skia-gesture';
import Touchable from 'react-native-skia-gesture';

const {height, width} = Dimensions.get('window');
const radius = 40;

export default function AnimatedButton() {
  'worklet';
  const cx = useSharedValue(width / 2);
  const cy = useSharedValue(height / 2);

  const gestureHandler = useGestureHandler({
    onStart: event => {
      'worklet';
      event.x = cx.value;
      event.y = cy.value;
    },
    onActive: event => {
      'worklet';
      cx.value = withSpring(event.translationX + width / 2);
      cy.value = withSpring(event.translationY + height / 2);
    },
  });

  const layer = useMemo(() => {
    return (
      <Paint>
        <Blur blur={5} />
        <ColorMatrix
          matrix={[
            1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 18, -7,
          ]}
        />
      </Paint>
    );
  }, []);

  return (
    <GestureHandlerRootView style={styles.main}>
      <Touchable.Canvas style={styles.canvas}>
        <Group layer={layer}>
          <Touchable.Circle
            {...gestureHandler}
            cx={cx}
            cy={cy}
            r={radius}
            color="blue"
          />
          <Circle
            {...gestureHandler}
            cx={width / 2}
            cy={height / 2}
            r={radius}
            color="black"
          />

          <SweepGradient
            c={vec(0, 0)}
            colors={['#FF0000', '#00FF00', '#0000FF']}
          />
        </Group>
      </Touchable.Canvas>
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
  canvas: {
    width: '100%',
    height: '100%',
  },
});
