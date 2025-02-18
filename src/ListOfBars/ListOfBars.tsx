import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default function ListOfBars() {
  const isExpanded = useSharedValue(false);

  const translateY = useSharedValue(-22);
  const rotateX = useSharedValue(30);
  const scale = useSharedValue(0.98);

  const translateBook = useSharedValue(-35);
  const rotateXBook = useSharedValue(30);
  const scaleBook = useSharedValue(0.96);

  const translateChart = useSharedValue(-50);
  const rotateChart = useSharedValue(30);
  const scaleChart = useSharedValue(0.94);

  const translateHeader = useSharedValue(-67);
  const rotateHeader = useSharedValue(30);
  const scaleHeader = useSharedValue(0.92);

  const translateCamera = useSharedValue(0);
  const animateBars = () => {
    isExpanded.value = !isExpanded.value;

    translateY.value = withTiming(isExpanded.value ? -22 : -100, {
      duration: 500,
    });
    rotateX.value = withTiming(isExpanded.value ? 30 : 0, {duration: 500});
    scale.value = withTiming(isExpanded.value ? 0.98 : 1, {duration: 500});

    translateBook.value = withTiming(isExpanded.value ? -35 : -25, {
      duration: 500,
    });
    rotateXBook.value = withTiming(isExpanded.value ? 30 : 0, {duration: 500});
    scaleBook.value = withTiming(isExpanded.value ? 0.96 : 1, {duration: 500});

    translateChart.value = withTiming(isExpanded.value ? -50 : 50, {
      duration: 500,
    });
    rotateChart.value = withTiming(isExpanded.value ? 30 : 0, {duration: 500});
    scaleChart.value = withTiming(isExpanded.value ? 0.94 : 1, {duration: 500});

    translateHeader.value = withTiming(isExpanded.value ? -67 : 130, {
      duration: 500,
    });
    rotateHeader.value = withTiming(isExpanded.value ? 30 : 0, {duration: 500});
    scaleHeader.value = withTiming(isExpanded.value ? 0.92 : 1, {
      duration: 500,
    });

    translateCamera.value = withTiming(isExpanded.value ? 0 : -180, {
      duration: 500,
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {translateY: translateY.value},
      {rotateX: `${rotateX.value}deg`},
      {scale: scale.value},
    ],
  }));

  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [
      {translateY: translateBook.value},
      {rotateX: `${rotateXBook.value}deg`},
      {scale: scaleBook.value},
    ],
  }));

  const animatedStyle3 = useAnimatedStyle(() => ({
    transform: [
      {translateY: translateChart.value},
      {rotateX: `${rotateChart.value}deg`},
      {scale: scaleChart.value},
    ],
  }));

  const animatedStyle4 = useAnimatedStyle(() => ({
    transform: [
      {translateY: translateHeader.value},
      {rotateX: `${rotateHeader.value}deg`},
      {scale: scaleHeader.value},
    ],
  }));
  const animatedStyle5 = useAnimatedStyle(() => ({
    transform: [{translateY: translateCamera.value}],
  }));

  return (
    <View style={styles.mainContainer}>
      <Animated.View
        style={[styles.Bar, animatedStyle4, {backgroundColor: '#D9D9D9'}]}>
        <Text style={styles.text}>Header</Text>
      </Animated.View>
      <Animated.View
        style={[styles.Bar, animatedStyle3, {backgroundColor: '#A6A6A6'}]}>
        <Text style={styles.text}>Charts</Text>
      </Animated.View>
      <Animated.View
        style={[styles.Bar, animatedStyle2, {backgroundColor: '#737373'}]}>
        <Text style={styles.text}>Books</Text>
      </Animated.View>
      <Animated.View
        style={[styles.Bar, animatedStyle, {backgroundColor: '#595959'}]}>
        <Text style={styles.text}>Calendar</Text>
      </Animated.View>
      <Animated.View
        style={[styles.Bar, {backgroundColor: '#404040'}, animatedStyle5]}>
        <Text style={styles.text}>Camera</Text>
      </Animated.View>
      <TouchableOpacity style={styles.button} onPress={animateBars}>
        <Text style={styles.buttonText}>
          {isExpanded.value ? 'Close' : 'Open'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Bar: {
    height: 60,
    width: 300,
    backgroundColor: 'gray',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    position: 'absolute',
    bottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
