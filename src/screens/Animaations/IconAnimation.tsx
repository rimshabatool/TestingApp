import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type IconAnimationProps = {
  delay: number;
  width: number;
};

const IconAnimation: React.FC<IconAnimationProps> = ({delay, width = 25}) => {
  const translateX = useSharedValue(100);
  const translateY = useSharedValue(-100);

  const rnStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  useEffect(() => {
    setTimeout(() => {
      translateX.value = withTiming(0);
      translateY.value = withTiming(0);
    }, delay);

    setTimeout(() => {
      translateX.value = withTiming(100);
      translateY.value = withTiming(-100);
    }, delay + 2000);

    return () => {
      setTimeout(() => {
        translateX.value = withTiming(100);
        translateY.value = withTiming(-100);
      }, delay);
    };
  }, [delay]);

  return (
    <Animated.View style={[styles.lineContainer, rnStyle]}>
      <View
        style={[
          styles.line,
          {width, backgroundColor: 'black', transform: [{rotate: '-45deg'}]},
        ]}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  lineContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    height: 3,
  },
});

export default IconAnimation;
