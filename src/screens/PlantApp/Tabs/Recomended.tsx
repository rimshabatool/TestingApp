import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../helpers/colors/colors';

const plantData = [
  {
    id: '1',
    image: require('../../../assets/Images/plant1.png'),
    plantName: 'Flawill',
    price: '$10',
  },
  {
    id: '2',
    image: require('../../../assets/Images/plant2.png'),
    plantName: 'Cactus',
    price: '$15',
  },
  {
    id: '3',
    image: require('../../../assets/Images/plant3.png'),
    plantName: 'Flawill',
    price: '$10',
  },
  {
    id: '4',
    image: require('../../../assets/Images/plant4.png'),
    plantName: 'Cactus',
    price: '$15',
  },
  {
    id: '5',
    image: require('../../../assets/Images/plant3.png'),
    plantName: 'Flawil',
    price: '$10',
  },
  {
    id: '6',
    image: require('../../../assets/Images/plant4.png'),
    plantName: 'Cactus',
    price: '$15',
  },
  {
    id: '7',
    image: require('../../../assets/Images/plant4.png'),
    plantName: 'Cactus',
    price: '$15',
  },
];

export default function Recomended() {
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textWrapper}>
              <Text
                style={styles.plantName}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.plantName}
              </Text>
              <Text style={styles.price}>
                {' '}
                {item.price} {'   '}
                <Text style={styles.discount}> $2.98</Text>
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <View style={styles.iconBackground}>
                <Ionicons name={'heart'} color={'white'} size={16} />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={plantData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
  },
  flatListContent: {
    flexGrow: 1,
    paddingVertical: 10,
  },
  itemContainer: {
    width: '48%',
    marginVertical: 10,
  },
  cardContainer: {
    height: 200,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
  },
  imageContainer: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  image: {
    height: '90%',
    width: '90%',
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 0.3,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  textWrapper: {
    flex: 0.8,
  },
  plantName: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 16,
    color: '#333',
  },
  price: {
    fontFamily: 'SF-Pro-Display-Semibold',
    fontSize: 14,
    color: '#333',
  },
  iconContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBackground: {
    height: 25,
    width: 25,
    backgroundColor: '#2ba82b',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  discount: {
    fontSize: 12,
    fontFamily: 'SF-Pro-Display-Regular',
    color: 'gray',
  },
});
