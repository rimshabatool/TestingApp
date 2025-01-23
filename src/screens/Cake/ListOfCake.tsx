import React from 'react';
import {View, FlatList, StyleSheet, Alert, ListRenderItem} from 'react-native';
import CakeCartComponent from './CakeCartComponent';
import colors from '../../helpers/colors/colors';

interface CakeItem {
  id: string;
  backgroundColor: string;
  image: any;
  cakeName: string;
  flavor: string;
  price: string;
}

const cakesData: CakeItem[] = [
  {
    id: '1',
    backgroundColor: colors.khaki,
    image: require('../../assets/Images/cake1.png'),
    cakeName: 'Birthday Cake',
    flavor: 'Flavoour:ChocolatVanilvvvvvvvvvvvvvvvvvvvvjggggggggghghhhhhhhhhjggjhgjhgjgfgfhgglae',
    price: '$250.90',
  },
  {
    id: '2',
    backgroundColor: colors.darksalmon,
    image: require('../../assets/Images/cake2.png'),
    cakeName: 'Wedding Cake',
    flavor: 'Flavoour:Vanilla',
    price: '$300.50',
  },
  {
    id: '3',
    backgroundColor: colors.lightpink,
    image: require('../../assets/Images/cake3.png'),
    cakeName: 'Anniversary Cake',
    flavor: 'Flavoour:Velvet',
    price: '$200.00',
  },
  {
    id: '4',
    backgroundColor: colors.gray,
    image: require('../../assets/Images/cake4.png'),
    cakeName: 'Chocolate Cake',
    flavor: 'Flavoour:Chocolate',
    price: '$150.75',
  },
  {
    id: '5',
    backgroundColor: colors.khaki,
    image: require('../../assets/Images/cake1.png'),
    cakeName: 'Birthday Cake',
    flavor: 'Flavour: Chocolate',
    price: '$250.90',
  },
  {
    id: '6',
    backgroundColor: colors.skyblue,
    image: require('../../assets/Images/cake2.png'),
    cakeName: 'Wedding Cake',
    flavor: 'Flavoour: chocolate',
    price: '$300.50',
  },
];

export default function ListOfCake() {
  const handlePress = () => {
    Alert.alert('Cake added to cart!');
  };

  const renderItem: ListRenderItem<CakeItem> = ({item}) => (
    <View style={styles.listView}>
      <CakeCartComponent
        backgroundColor={item.backgroundColor}
        image={item.image}
        cakeName={item.cakeName}
        flavor={item.flavor}
        price={item.price}
        onPress={handlePress}
      />
    </View>
  );

  return (
    <View style={styles.main}>
      <FlatList
        data={cakesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.ghostwhite,
  },
  listView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    width: '100%',
  },
});
