import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnUI,
} from 'react-native-reanimated';

const RenderItem = ({item, targetY, index}) => {
  const translateY = useSharedValue(0);
  const initialY = useSharedValue(0);

  const rnStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  const handlePress = () => {
    runOnUI(() => {
      'worklet';
      const diff = targetY - initialY.value - index * 70;
      translateY.value = withSpring(diff, {
        damping: 10,
        stiffness: 80,
      });
    })();
  };

  return (
    <TouchableOpacity
      onLayout={event => {
        const {y} = event.nativeEvent.layout;
        initialY.value = y;
      }}
      onPress={handlePress}>
      <Animated.View
        style={[
          {
            height: 50,
            width: 50,
            backgroundColor: item.backgroundColor,
            borderRadius: 25,
            marginVertical: 10,
          },
          rnStyle,
        ]}></Animated.View>
    </TouchableOpacity>
  );
};

export default function CartAnimations() {
  const data = [
    {id: '1', backgroundColor: 'red'},
    {id: '2', backgroundColor: 'blue'},
    {id: '3', backgroundColor: 'green'},
    {id: '4', backgroundColor: 'yellow'},
  ];

  const screenHeight = Dimensions.get('window').height;
  const targetY = screenHeight - 150;

  return (
    <View style={styles.main}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <RenderItem item={item} targetY={targetY} index={index} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
});
