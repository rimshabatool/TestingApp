import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {stories} from './Constants';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const windowWidth = Dimensions.get('window').width;
export const storyListItemWidth = windowWidth * 0.8;
export const StoryListItemHeight = (storyListItemWidth / 3) * 4;

export default function Index() {
  const scrollOffset = useSharedValue(0); // Shared value for scroll position

  // Update shared value when scrolling
  const onScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    console.log('offsetX', offsetX);

    // Update scrollOffset to trigger changes in the animation
    scrollOffset.value = offsetX;
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'black'} barStyle={'dark-content'} />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        snapToInterval={storyListItemWidth}
        decelerationRate={'fast'}
        onScroll={onScroll}
        scrollEventThrottle={16} 
      >
        {stories.map((story, index) => {
          // Interpolate scale based on scroll position
          const rnScale = interpolate(
            scrollOffset.value, // Use scrollOffset as the base for interpolation
            [
              (index - 2) * storyListItemWidth,
              (index - 1) * storyListItemWidth,
              index * storyListItemWidth,
              (index + 1) * storyListItemWidth,
              (index + 2) * storyListItemWidth,
            ],
            [0.6, 0.8, 1, 0.8, 0.6], // Scale values
            Extrapolation.CLAMP, // Clamp to avoid going out of bounds
          );

          // Use AnimatedStyle to apply animated changes
          const rnS = useAnimatedStyle(() => {
            return {
              transform: [{scale: withTiming(rnScale, {duration: 300})}],
            };
          }, [scrollOffset.value]);

          return (
            <Animated.View key={index} style={[styles.imageContainer, rnS]}>
              <Image source={story.Image} style={styles.image} />
            </Animated.View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    width: storyListItemWidth,
    height: StoryListItemHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
});
