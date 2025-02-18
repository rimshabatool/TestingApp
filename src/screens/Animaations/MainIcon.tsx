import React, {useState, useEffect} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import IconAnimation from './IconAnimation';
import CrossIcon from './CrossIcon';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Data from './Data';

const {width, height} = Dimensions.get('window');

export default function MainIcon() {
  const [showMenu, setShowMenu] = useState(true);
  const [showImage, setShowImage] = useState(false);

  const greenWIDTH = useSharedValue(width);
  const redWIDTH = useSharedValue(width);
  const scale = useSharedValue(1);

  const blueViewStyle = useAnimatedStyle(() => {
    return {
      width: greenWIDTH.value,
    };
  });

  const whiteViewStyle = useAnimatedStyle(() => {
    return {
      width: redWIDTH.value,
    };
  });

  const imageStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  useEffect(() => {
    const animationLoop = () => {
      if (showMenu) {
        greenWIDTH.value = withTiming(width);
        redWIDTH.value = withTiming(width);
        setShowImage(true);
        scale.value = withSpring(1);

        setTimeout(() => {
          scale.value = withTiming(0);
          setTimeout(() => setShowImage(false), 500);
        }, 3500);
      } else {
        greenWIDTH.value = withTiming(0, {duration: 500});
        redWIDTH.value = withTiming(0, {duration: 500});
      }
    };

    const intervalId = setInterval(() => {
      setShowMenu(prevState => !prevState);
      animationLoop();
    }, 3500);

    return () => clearInterval(intervalId);
  }, [showMenu]);

  return (
    <View collapsable={false} style={styles.container}>
      <View style={styles.iconView}>
        <View style={styles.iconAdjustment}>
          {showMenu ? (
            <CrossIcon />
          ) : (
            <>
              <IconAnimation delay={1000} width={18} />
              <IconAnimation delay={500} width={25} />
              <IconAnimation delay={1500} width={14} />
            </>
          )}
        </View>
      </View>
      <View style={styles.dataView}>
        <Data />
      </View>

      {showImage && (
        <Animated.Image
          source={require('../../assets/Images/icon2.png')}
          style={[styles.meetImage, imageStyle]}
        />
      )}
      <Animated.View style={[styles.blueView, blueViewStyle]} />
      <Animated.View style={[styles.whiteView, whiteViewStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  blueView: {
    position: 'absolute',
    backgroundColor: 'gray',
    width: width,
    height: height,
    transform: [{rotate: '35deg'}],
    top: -150,
    left: -130,
  },

  whiteView: {
    position: 'absolute',
    backgroundColor: 'gray',
    width: width,
    height: height,
    transform: [{rotate: '35deg'}],
    top: 150,
    left: 129,
  },

  iconAdjustment: {
    width: 50,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 50,
    zIndex: 1,
  },

  meetImage: {
    position: 'absolute',
    width: 150,
    height: 150,
    top: height / 2 - 80,
    left: width / 2 - 80,
    zIndex: 2,
  },
  dataView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
  },
  iconView: {
    flex: 0.1,
    height: 10,
    width: '100%',
    alignItems: 'flex-end',
    padding: 20,
  },
});
