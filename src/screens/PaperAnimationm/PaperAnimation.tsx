import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  useDerivedValue,
  interpolate,
} from 'react-native-reanimated';

export default function PaperAnimation() {
  const translateY = useSharedValue(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnimation = () => {
    translateY.value = withTiming(isOpen ? 0 : 100, {duration: 1000});
    setIsOpen(!isOpen);
  };

  const translateUp = useDerivedValue(() => -translateY.value);
  const translateDown = useDerivedValue(() => translateY.value);

  const rotate = useDerivedValue(() =>
    interpolate(translateY.value, [0, 100], [-15, 0]),
  );

  const animatedStyle1 = useAnimatedStyle(() => ({
    transform: [{translateY: translateUp.value}],
    opacity: 1,
    zIndex: 1,
  }));

  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [{translateY: 0}, {rotateX: `${rotate.value}deg`}],
  }));

  const animatedStyle3 = useAnimatedStyle(() => ({
    transform: [{translateY: translateDown.value}],
    opacity: 0.4,
  }));

  return (
    <View style={styles.main}>
      <Animated.View style={[styles.topView, animatedStyle1]} />
      <Animated.View
        style={[styles.topView, animatedStyle2, {backgroundColor: '#FaF9F6'}]}
      />
      <Animated.View
        style={[styles.topView, animatedStyle3, {backgroundColor: '#FaF9F6'}]}
      />
      <TouchableOpacity style={styles.button} onPress={toggleAnimation}>
        <Text style={styles.buttonText}>
          {isOpen ? 'Close Page' : 'Open Page'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#e3e3e3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topView: {
    height: 100,
    width: 170,
    position: 'absolute',
    backgroundColor: 'white',
  },
  button: {
    marginTop: 200,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    position: 'absolute',
    bottom: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
