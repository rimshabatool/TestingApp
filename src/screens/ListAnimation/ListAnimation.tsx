import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

const images = Array.from({length: 10}, (_, i) => ({
  id: (i + 1).toString(),
  src: require('../../assets/Images/1.jpg'),
}));

const ITEM_WIDTH = width * 0.15;
const ITEM_HEIGHT = height * 0.3;
const FOCUSED_ITEM_WIDTH = width * 0.5;
const SPACING = (width - ITEM_WIDTH) / 2;

export default function ListAnimation() {
  const offsetX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    offsetX.value = event.contentOffset.x;
  });

  return (
    <View style={styles.screen}>
      <Animated.FlatList
        data={images}
        keyExtractor={item => item.id}
        horizontal
        onScroll={scrollHandler}
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        // snapToAlignment="center"
        contentContainerStyle={{
          paddingHorizontal: SPACING,
          alignItems: 'center',
        }}
        renderItem={({item, index}) => {
          return <RenderItem item={item} index={index} offsetX={offsetX} />;
        }}
      />
    </View>
  );
}

const RenderItem = ({item, index, offsetX}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 2) * ITEM_WIDTH,
      (index - 1) * ITEM_WIDTH,
      index * ITEM_WIDTH,
      (index + 1) * ITEM_WIDTH,
      (index + 2) * ITEM_WIDTH,
    ];

    const scale = interpolate(
      offsetX.value,
      inputRange,
      [0.5, 0.8, 1, 0.8, 0.5],
      Extrapolation.CLAMP,
    );

    const rotateY = interpolate(
      offsetX.value,
      inputRange,
      [30, 15, 0, -15, -30],
      Extrapolation.CLAMP,
    );

    const widthAnimated = interpolate(
      offsetX.value,
      inputRange,
      [
        ITEM_WIDTH * 0.8,
        ITEM_WIDTH,
        FOCUSED_ITEM_WIDTH,
        ITEM_WIDTH,
        ITEM_WIDTH * 0.8,
      ],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{scale}, {rotateY: `${rotateY}deg`}],
      width: widthAnimated,
    };
  });

  return (
    <Animated.View
      style={[styles.imageContainer, animatedStyle, {height: ITEM_HEIGHT}]}>
      <Image source={item.src} style={styles.image} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});
