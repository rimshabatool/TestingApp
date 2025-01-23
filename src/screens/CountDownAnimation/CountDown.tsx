import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  withDecay,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const historicalPlaces = [
  'Great Wall',
  'Machu Picchu',
  'Taj Mahal',
  'Colosseum',
  'Pyramids',
  'Angkor Wat',
  'Eiffel Tower',
  'Statue of Liberty',
  'Stonehenge',
  'Mount Rushmore',
  'Petra',
  'Christ the Redeemer',
  'Sydney Opera House',
];

const itemSize = width * 0.38;
const itemSpacing = (width - itemSize) / 2;

const CountDown = () => {
  const [selectedPlace, setSelectedPlace] = useState('');
  const scrollX = useSharedValue(0);
  const isScrolling = useSharedValue(false);

  const scrollHandler = (event) => {
    scrollX.value = event.nativeEvent.contentOffset.x;
    isScrolling.value = true;
  };

  const onMomentumScrollEnd = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / itemSize);
    setSelectedPlace(historicalPlaces[index]);
    isScrolling.value = false;
  };

  return (
    <View style={styles.main}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Historical Places</Text>
      </View>

      <Animated.ScrollView
        style={{ flexGrow: 0 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={itemSize}
        decelerationRate="fast"
        bounces={false}
        onScroll={scrollHandler}
        onMomentumScrollEnd={onMomentumScrollEnd}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingHorizontal: itemSpacing }}
      >
        {historicalPlaces.map((place, index) => {
          const animatedStyle = useAnimatedStyle(() => {
            const inputRange = [
              (index - 1) * itemSize,
              index * itemSize,
              (index + 1) * itemSize,
            ];            
            const opacity = interpolate(
              scrollX.value,
              inputRange,
              [0.2, 1, 0.2] ,
              Extrapolation.CLAMP
            );

            const scale = interpolate(
              scrollX.value,
              inputRange,
              isScrolling.value ? [0.6, 1, 0.6] : [0, 1, 0],

              Extrapolation.CLAMP
            );

            return {
              opacity: withSpring(opacity),
              transform: [{ scale: withTiming(scale) }],
            };
          });

          return (
            <Animated.View
              key={index.toString()}
              style={[styles.timerItem, animatedStyle]}
            >
              <View style={styles.textContainer}>
                <Animated.Text style={styles.timerText}>
                  {place}
                </Animated.Text>
              </View>
            </Animated.View>
          );
        })}
      </Animated.ScrollView>

      {/* Text showing selected place */}
      <View style={styles.selectedTextContainer}>
        <Text style={styles.selectedText}>You selected: {selectedPlace}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingContainer: {
    width: '100%',
    padding: 20,
  },
  headingText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'gray',
  },
  timerItem: {
    width: itemSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  selectedTextContainer: {
    width: '100%',
    padding: 20,
  },
  selectedText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
});

export default CountDown;
