import { StyleSheet, Switch, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';

const colors = {
  dark: {
    backgroundColor: 'black',
    circle:"#252525",
    text: 'white',
  },
  light: {
    backgroundColor: 'white',
    circle: 'white',
    text: 'black',
  },
};

const switchTrackColors = {
  true: 'rgba(256,0,256,0.2)',
  false: 'rgba(0,0,0,0.1)',
};
const size=200
type Theme = 'light' | 'dark';

export default function Video4() {

  const [theme, setTheme] = useState<Theme>('light');

  const progress = useDerivedValue(() => {
    return theme === 'dark' ? withTiming(1, { duration: 1200 }) : withTiming(0, { duration: 1200 });
  }, [theme]);
  
  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.light.backgroundColor, colors.dark.backgroundColor]
    );
    return {
      backgroundColor: backgroundColor,
    };
  });

  const rCircleStyle = useAnimatedStyle(() => {
    const circlecolor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.light.circle, colors.dark.circle]
    );
    return {
      backgroundColor: circlecolor,
    };
  });
  const rtextStyle = useAnimatedStyle(() => {
    const circlecTextColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.light.text, colors.dark.text]
    );
    return {
      color: circlecTextColor,
    };
  });

  return (
    <Animated.View style={[styles.main, rStyle]}>
        <Animated.Text style={[styles.text,rtextStyle]}>Theme Animation</Animated.Text>
     <Animated.View style={[styles.circle,rCircleStyle]}>
     <Switch
        value={theme === 'dark'}
        onValueChange={(toggleSwitch) => setTheme(toggleSwitch ? 'dark' : 'light')}
        trackColor={switchTrackColors}
      />
     </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle:{
height:size,
width:size,
backgroundColor:'white',
alignItems:'center',
justifyContent:'center',
borderRadius:size/2,
shadowOffset:{width:0,height:20},
shadowOpacity:0.05,
shadowRadius:10,
elevation:10
},
text:{
    fontSize:40,
    letterSpacing:5
}
});
