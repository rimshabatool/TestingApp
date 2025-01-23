import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

// Constants for dimensions
export const windowWidth = Dimensions.get('window').width;
export const storyListItemWidth = windowWidth * 0.8;
export const StoryListItemHeight = (storyListItemWidth / 3) * 4;

type StoryListItemProps = {
  imageSource: any;
  index: number;
  scrollOffset: SharedValue<number>;
};

export const Card: React.FC<StoryListItemProps> = ({
  imageSource,
  index,
  scrollOffset,
}) => {
  const rnStyle = useAnimatedStyle(() => {
    const paddingLeft = (windowWidth - storyListItemWidth) / 4;
    const activeIndex = Math.floor(scrollOffset.value / storyListItemWidth);

    const translateX = interpolate(
      activeIndex,
      [index - 2, index - 1, index, index + 1, index + 2],
      [120, 60, -1, -storyListItemWidth, -storyListItemWidth * 2],
      Extrapolation.CLAMP
    );

    const scale = interpolate(
      activeIndex,
      [index - 2, index - 1, index, index + 1, index + 2],
      [0.2, 0.5, 1, 0.8, 0.4],
      Extrapolation.CLAMP
    );

    return {
      transform: [
        { translateX: withTiming(scrollOffset.value + translateX) },
        { scale: withTiming(scale) },
      ],
    };
  });

  return (
    <Animated.View style={[{ zIndex: -index }, rnStyle]}>
      <Image
        source={imageSource}
        style={styles.imageStyle}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: StoryListItemHeight,
    width: storyListItemWidth,
    borderRadius: 25,
    position: 'absolute',
  },
});
