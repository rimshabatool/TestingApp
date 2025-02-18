import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import List from './Component/List';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  Extrapolation,
} from 'react-native-reanimated';

export default function MainScreenOfLinkedIn() {
  const offsetY = useSharedValue(0);
  const scrollDirection = useSharedValue<'up' | 'down' | null>(null);

  const headerStyle = useAnimatedStyle(() => {
    const translateY = withTiming(
      interpolate(
        offsetY.value,
        [0, 100],
        [0, scrollDirection.value === 'down' ? -100 : 0],
        Extrapolation.CLAMP,
      ),
      {duration: 200},
    );

    return {transform: [{translateY}]};
  });

  const footerStyle = useAnimatedStyle(() => {
    const translateY = withTiming(
      interpolate(
        offsetY.value,
        [0, 100],
        [0, scrollDirection.value === 'down' ? 100 : 0],
        Extrapolation.CLAMP,
      ),
      {duration: 200},
    );

    return {transform: [{translateY}]};
  });

  const floatingButtonStyle = useAnimatedStyle(() => {
    const width = withTiming(
      interpolate(
        offsetY.value,
        [0, 50],
        [120, scrollDirection.value === 'down' ? 60 : 120],
        Extrapolation.CLAMP,
      ),
      {duration: 100},
    );

    return {width};
  });
  return (
    <View style={styles.main}>
      <Animated.View style={[styles.headerContainer, headerStyle]}>
        <Header />
      </Animated.View>
      <View style={{flex: 1}}>
        <List offsetY={offsetY} scrollDirection={scrollDirection} />
      </View>
      <Animated.View style={[styles.footerContainer, footerStyle]}>
        <Footer />
      </Animated.View>
      <Animated.View style={[styles.floatingButton, floatingButtonStyle]}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
  },
  ListView: {
    flex: 1,
    width: '100%',
  },
  headerContainer: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 200,

  },
  floatingButton: {
    position: 'absolute',
    bottom: 100,
    right: 10,
    height: 60,
    borderRadius: 15,
    backgroundColor: 'rgba(0, 0, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
