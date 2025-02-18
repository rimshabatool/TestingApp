import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const item_margin_bottom = 20;
const item_padding = 10;
const item_height = 100;
const itemsize = item_height + item_padding * 2 + item_margin_bottom;

const data = [
  {
    id: '1',
    name: 'John Doe',
    description: 'A brief description about John.',
    image: require('../../assets/Images/1.jpg'),
  },
  {
    id: '2',
    name: 'Jane Doe',
    description: 'A brief description about Jane.',
    image: require('../../assets/Images/2.jpg'),
  },
  {
    id: '3',
    name: 'Alice',
    description: 'A brief description about Alice.',
    image: require('../../assets/Images/2.jpg'),
  },
  {
    id: '4',
    name: 'John Doe',
    description: 'A brief description about John.',
    image: require('../../assets/Images/1.jpg'),
  },
  {
    id: '5',
    name: 'Jane Doe',
    description: 'A brief description about Jane.',
    image: require('../../assets/Images/2.jpg'),
  },
  {
    id: '6',
    name: 'Alice',
    description: 'A brief description about Alice.',
    image: require('../../assets/Images/2.jpg'),
  },
  {
    id: '7',
    name: 'John Doe',
    description: 'A brief description about John.',
    image: require('../../assets/Images/1.jpg'),
  },
  {
    id: '8',
    name: 'Jane Doe',
    description: 'A brief description about Jane.',
    image: require('../../assets/Images/2.jpg'),
  },
  {
    id: '9',
    name: 'Alice',
    description: 'A brief description about Alice.',
    image: require('../../assets/Images/2.jpg'),
  },
  {
    id: '10',
    name: 'Alice',
    description: 'A brief description about Alice.',
    image: require('../../assets/Images/2.jpg'),
  },
  {
    id: '11',
    name: 'Alice',
    description: 'A brief description about Alice.',
    image: require('../../assets/Images/2.jpg'),
  },
  {
    id: '12',
    name: 'Alice',
    description: 'A brief description about Alice.',
    image: require('../../assets/Images/2.jpg'),
  },
  {
    id: '13',
    name: 'Alice',
    description: 'A brief description about Alice.',
    image: require('../../assets/Images/2.jpg'),
  },
];

const AnimatedItem = ({item, index, scrollY}) => {
  const inputRange = [-2, 0, itemsize * index, itemsize * (index + 1)];
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollY.value,
      inputRange,
      [1, 1, 1, 0],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{scale}],
    };
  });

  return (
    <Animated.View style={[styles.itemContainer, animatedStyle]}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const FlatlistAnimation = () => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const renderItem = ({item, index}) => {
    return <AnimatedItem item={item} index={index} scrollY={scrollY} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>FlatList Animation</Text>
      </View>

      <Animated.FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderColor: '#ddd',
    marginVertical: 5,
    borderWidth: 1,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5,
    borderRadius: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FlatlistAnimation;
