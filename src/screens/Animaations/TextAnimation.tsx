import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  FadeInDown,
  FadeInUp,
  FadeOutRight,
  FadeOutUp,
} from 'react-native-reanimated';

const sentencesArray = [
  'This animated sentence component brings words to life. Hope You Like my Animations😊',
  'Changing colors and sentences seamlessly. Enjoy the animations!',
  'Every 3 seconds, a new color and sentence appear. Stay tuned!',
  'React Native is fun with animations and changing colors!',
  'Hope you Like it 😉😊',
];
const colorsArray = ['#ffa600', '#ADD8E6', '#f0e68c', '#8fbc8f', '#3498db'];
const textColor = ['#00008b', '#8b0000', '#8b4513', '#dc143c', '#f0ffff'];
export default function SentenceAnimation() {
  const [bgColor, setBgColor] = useState('#ffa600');
  const [textColorChnage, setTextColor] = useState('#00008b');
  const [sentence, setSentence] = useState(sentencesArray[0]);
  const [key, setKey] = useState(0);

  const chnageBgColor = () => {
    let currentindex = 0;
    setInterval(() => {
      setBgColor(colorsArray[currentindex]);
      setTextColor(textColor[currentindex]);
      setSentence(sentencesArray[currentindex]);
      currentindex = (currentindex + 1) % colorsArray.length;
      setKey(prevKey => prevKey + 1);
    }, 4000);
  };

  useEffect(() => {
    chnageBgColor();
  }, []);

  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <View key={key} style={styles.sentenceContainer}>
        {sentence.split(' ').map((word, index) => {
          return (
            <Animated.Text
              key={index}
              entering={FadeInDown.delay(index * 150)}
              style={[styles.text, {color: textColorChnage}]}>
              {word}{' '}
            </Animated.Text>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffa600',
    padding: 20,
  },
  sentenceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 28,
    color: 'black',
    fontFamily: 'SF-Pro-Display-Bold',
  },
});
