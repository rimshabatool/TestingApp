import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet, Text } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

export const windowWidth = Dimensions.get('window').width;
export const storyListItemWidth = windowWidth * 0.8;
export const StoryListItemHeight = (storyListItemWidth / 3) * 4;

type StoryListItemProps = {
  imageSource: any;
  index: number;
  scrollOffset: SharedValue<number>;
};

export const StoryListItem: React.FC<StoryListItemProps> = ({
  imageSource,
  index,
  scrollOffset,
}) => {
  useEffect(() => {
    console.log('--->', index, scrollOffset);
  }, [index, scrollOffset]);

  const rnStyle = useAnimatedStyle(() => {
    const activeIndex = Math.floor(scrollOffset.value / storyListItemWidth);

    const scale = interpolate(
      index,
      [activeIndex - 1, activeIndex, activeIndex + 1],
      [0.7, 1, 0.7],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ scale: withSpring(scale, { damping: 1 }) }],
    };
  });

  return (
    <Animated.View style={[rnStyle]}>
      {/* Image */}
      <Image
        source={imageSource}
        style={styles.image}
      />
      {/* Text on top of the image */}
      <Text style={styles.text}>Story {index + 1}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: StoryListItemHeight,
    width: storyListItemWidth,
    borderRadius: 25,
  },
  text: {
    position: 'absolute',
    top: 20,
    left: 20,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
