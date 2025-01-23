import React from 'react';
import { FlatList, View, Text, StyleSheet, Dimensions, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import colors from '../helpers/colors/colors';

const { width } = Dimensions.get('window');

const Page1 = () => {
  const outerDotWidth = useSharedValue<number>(30);
  const pages = [
    { 
      id: '1', 
      color: colors.black, 
      title: 'Discover Endless Possibilities', 
    },
    { 
      id: '2', 
      color: colors.gray, 
      title: 'Simplicity at Its Best', 
    },
    { 
      id: '3', 
      color: colors.lightpink, 
      title: 'Feel the Warmth', 
    },
  ];
  

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: outerDotWidth.value,
    };
  });

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const pageIndex = Math.round(contentOffsetX / width);

    if (pageIndex === 0) {
      outerDotWidth.value = withTiming(25);
    } else if (pageIndex === 1) {
      outerDotWidth.value = withTiming(50);
    } else if (pageIndex === 2) {
      outerDotWidth.value = withTiming(80);
    }
  };

  const renderItem = ({ item }: { item: { color: string, title: string, description: string } }) => (
    <View style={[styles.page, { backgroundColor: item.color }]}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.dotContainer}>
        <Animated.View style={[styles.outerDot, animatedStyle]}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </Animated.View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={pages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flexGrow: 1,
  },
  page: {
    width,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  textContainer: {
    position: 'absolute',
    top: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginHorizontal: 7,
  },
  outerDot: {
    height: 25,
    borderRadius: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'green',
    flexDirection: 'row',
  },
  dotContainer: {
    flexDirection: 'row',
    paddingBottom: 20,
    width: '100%',
    justifyContent: 'center',
  },
});

export default Page1;
