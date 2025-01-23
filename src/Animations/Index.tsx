import {
  ImageSourcePropType,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import colors from '../helpers/colors/colors';
import {stories} from './Constants';
import {
  StoryListItem,
  StoryListItemHeight,
  storyListItemWidth,
  windowWidth,
} from './Sroty-List-Item';
import Animated, {
  useAnimatedRef,
  useDerivedValue,
  useScrollViewOffset,
} from 'react-native-reanimated';

const listPadding = windowWidth - storyListItemWidth;

export default function Index() {
  const animatedrf = useAnimatedRef<Animated.ScrollView>();
  const scrollofset = useScrollViewOffset(animatedrf);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'black'} />
      <View style={styles.header}>
        <Text style={styles.title}>React Native Animations</Text>

        <Animated.ScrollView
          horizontal
          style={styles.scrollView}
          ref={animatedrf}
          decelerationRate={'normal'}
          snapToInterval={windowWidth}
          showsHorizontalScrollIndicator={false}>
          {stories.map((story, index) => (
            <View style={styles.storyContainer} key={index}>
              <StoryListItem
                imageSource={story.Image}
                index={index}
                scrollOffset={scrollofset}
              />
            </View>
          ))}
        </Animated.ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  title: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: 1.5,
  },
  subtitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1,
  },
  scrollView: {
    height: '100%',
    flexGrow: 1,
  },
  storyContainer: {
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
