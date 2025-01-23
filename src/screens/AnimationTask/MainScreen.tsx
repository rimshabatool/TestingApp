import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {pages} from './Constants'
import Animationbar from './AnimationsBar';
import Edge from './Edge';

const {width, height} = Dimensions.get('window');

export default function MainScreen() {
  const scrollX = useSharedValue<number>(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollX.value = event.nativeEvent.contentOffset.x;
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: {id: string; image: any; subtitle: string; desc: string};
    index: number;
  }) => {
    const isLastItem = index === pages.length - 1;
    return (
      <View style={styles.page}>
        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
          {isLastItem && <Edge />}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={pages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
      <View style={styles.bottomSection}>
        <Animationbar scrollX={scrollX} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  page: {
    width: width,
    height: height * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    height: '50%',
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  desc: {
    fontSize: 25,
    color: 'gray',
  },
  bottomSection: {
    height: height * 0.1,
    justifyContent: 'center',
  },
});
