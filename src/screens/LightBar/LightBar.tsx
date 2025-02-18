import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
//@ts-ignore
import Immersive from 'react-native-immersive';
//@ts-ignore
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Home from './Home';
import Search from './Search';
import Notify from './Notify';
import Setting from './Setting';
import Facts from './Facts';

const iconData = [
  {name: 'home', index: 0},
  {name: 'search', index: 1},
  {name: 'notifications', index: 2},
  {name: 'settings', index: 3},
  {name: 'help-outline', index: 4},
];

export default function LightBar() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  useEffect(() => {
    Immersive.setImmersive(true);
    return () => Immersive.setImmersive(false);
  }, []);

  const translateX = useSharedValue(0);

  const handlePress = (index: number) => {
    setSelectedIndex(index);
    translateX.value = withTiming(index * 75, {duration: 300});
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
  }));

  const renderSelectedScreen = () => {
    switch (selectedIndex) {
      case 0:
        return <Home />;
      case 1:
        return <Search />;
      case 2:
        return <Notify />;
      case 3:
        return <Setting />;
      case 4:
        return <Facts />;
      default:
        return <Home />;
    }
  };

  return (
    <View style={styles.main}>
      <View style={{flex: 0.1}}>
        <Text style={styles.heading}>React Native Animations</Text>
      </View>
      <View style={{flex: 0.8, width: '100%'}}>{renderSelectedScreen()}</View>
      <View style={styles.bottomView}>
        <Animated.View
          style={[{position: 'absolute', top: 7, left: 7}, animatedStyle]}>
          <Svg width="300" height="160" fill="none">
            <Defs>
              <LinearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <Stop offset="0%" stopColor="#F9F9F9" stopOpacity="1" />
                <Stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
              </LinearGradient>
            </Defs>
            <Path
              d="M8.99107 0H52.1161L63 35H0L8.99107 0Z"
              fill="url(#grad1)"
            />
          </Svg>
        </Animated.View>
        <Animated.View style={[styles.bar, animatedStyle]} />
        {iconData.map(({name, index}) => (
          <TouchableOpacity key={index} onPress={() => handlePress(index)}>
            <MaterialIcons
              name={name}
              size={24}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 5,
  },
  bottomView: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'black',
    height: 60,
    width: '100%',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 0.1,
  },
  icon: {
    padding: 5,
  },
  bar: {
    height: 7,
    width: 50,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    borderRadius: 4,
    left: 12,
  },
  heading: {
    fontSize: 25,
    fontFamily: 'SF-Pro-Display-Bold',
  },
  screenContent: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});
