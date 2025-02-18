import {StyleSheet, TouchableOpacity, View, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
//@ts-ignore
import Feather from 'react-native-vector-icons/Feather';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');
const buttonSize = width * 0.2;
const moveDistance = width * 0.35;

export default function BottomTab() {
  const [activeIndex, setActiveIndex] = useState(1);
  const floatingButtonTranslateX = useSharedValue(0);
  const blueTranslateY = useSharedValue(-35);
  const IconMove = useSharedValue(0);

  const updateIndex = (index: number) => {
    setActiveIndex(index);
  };

  const moveLeft = () => {
    floatingButtonTranslateX.value = withTiming(
      -moveDistance,
      {duration: 300},
      () => {
        runOnJS(updateIndex)(0);
      },
    );
  };

  const moveRight = () => {
    floatingButtonTranslateX.value = withTiming(
      moveDistance,
      {duration: 300},
      () => {
        runOnJS(updateIndex)(2);
      },
    );
  };

  const resetPosition = () => {
    floatingButtonTranslateX.value = withTiming(0, {duration: 300}, () => {
      runOnJS(updateIndex)(1);
    });
  };

  const floatingButtonStyle = useAnimatedStyle(() => ({
    transform: [{translateX: floatingButtonTranslateX.value}],
  }));

  const blueCircleStyle = useAnimatedStyle(() => ({
    transform: [
      {translateX: floatingButtonTranslateX.value},
      {translateY: blueTranslateY.value},
    ],
  }));
  const IconMoveStyle = useAnimatedStyle(() => ({
    transform: [{translateY: IconMove.value}],
  }));

  useEffect(() => {
    IconMove.value = -38;
  });
  return (
    <View style={styles.main}>
      <Animated.View style={[styles.floatingButton, floatingButtonStyle]} />
      <Animated.View style={[styles.blueCircle, blueCircleStyle]} />

      <View style={styles.bottomView}>
        <Animated.View style={[IconMoveStyle, {zIndex: 1}]}>
          <TouchableOpacity onPress={moveLeft} style={[styles.tab]}>
            <Feather
              name="home"
              size={width * 0.06}
              color={activeIndex === 0 ? 'white' : 'blue'}
            />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View>
          <TouchableOpacity onPress={resetPosition} style={[styles.tab]}>
            <Feather
              name="search"
              size={width * 0.06}
              color={activeIndex === 1 ? 'black' : 'red'}
            />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View>
          <TouchableOpacity onPress={moveRight} style={[styles.tab]}>
            <Feather
              name="user"
              size={width * 0.06}
              color={activeIndex === 2 ? 'black' : 'red'}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#e3e3e3',
  },
  bottomView: {
    height: height * 0.1,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tab: {
    zIndex: 1,
    padding: 10,
    borderRadius: 10,
  },

  floatingButton: {
    height: buttonSize,
    width: buttonSize,
    backgroundColor: 'white',
    borderRadius: buttonSize / 2,
    position: 'absolute',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    bottom: height * 0.05,
    left: (width - buttonSize) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueCircle: {
    height: width * 0.16,
    width: width * 0.16,
    backgroundColor: 'blue',
    borderRadius: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    zIndex: 1,
    left: (width - buttonSize) / 2.15 + buttonSize / 4,
  },
});
