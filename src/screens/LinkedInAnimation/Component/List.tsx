import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import React, {useCallback} from 'react';
import {cakes} from './Data';
import {useSharedValue} from 'react-native-reanimated';
import CakeItem from './CakeItem';

export default function List({
  offsetY,
  scrollDirection,
}: {
  offsetY: any;
  scrollDirection: any;
}) {
  const lastScrollY = useSharedValue(0);

  const scrollHandler = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const currentOffset = event.nativeEvent.contentOffset.y;

      if (currentOffset > lastScrollY.value + 10) {
        scrollDirection.value = 'down';
      } else if (currentOffset < lastScrollY.value - 10) {
        scrollDirection.value = 'up';
      }

      lastScrollY.value = currentOffset;
      offsetY.value = currentOffset;
    },
    [lastScrollY, offsetY, scrollDirection],
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={cakes}
        scrollEventThrottle={16}
        renderItem={CakeItem}
        keyExtractor={item => item.id.toString()}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        onScroll={scrollHandler}
        windowSize={5}
        removeClippedSubviews={true}
        style={{flex: 1}}
        getItemLayout={(data, index) => ({
          length: 120,
          offset: 120 * index,
          index,
        })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
});
