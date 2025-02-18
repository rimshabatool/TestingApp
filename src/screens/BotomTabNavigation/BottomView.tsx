import React, {FC} from 'react';
import {View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
//@ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  offsetY: SharedValue<number>;
  isScrolling: SharedValue<boolean>;
}

const {width: WD} = Dimensions.get('window');

const BottomView: FC<Props> = ({offsetY, isScrolling}) => {
  const rnStyle = useAnimatedStyle(() => {
    let isUserScrolling = isScrolling.value;
    let translateY = isUserScrolling ? -40 : 0;
    let width = isUserScrolling ? WD * 0.9 : WD;
    let height = isUserScrolling ? 70 : 120;

    return {
      transform: [{translateY: withTiming(translateY)}],
      width: withTiming(width),
      height: withTiming(height),
      borderRadius: withTiming(isUserScrolling ? 28 : 0),
    };
  });

  return (
    <Animated.View style={[styles.transparentView, rnStyle]}>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="home" size={20} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="search" size={20} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="user" size={20} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="heart" size={20} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="cogs" size={20} color="#fff" />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  transparentView: {
    position: 'absolute',
    bottom: 0,
    height: 120,
    backgroundColor: 'rgba(0, 0, 0, 0.87)',
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 20,
    alignSelf: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomView;
