import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
//@ts-ignore
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../helpers/colors/colors';

interface CakeCartComponentProps {
  backgroundColor?: string;
  image?: any;
  cakeName?: string;
  flavor?: string;
  price?: string;
  onPress?: () => void;
}

export default function CakeCartComponent({
  backgroundColor = 'orange',
  image = require('../../assets/Images/cake1.png'),
  cakeName = 'Birthday Cake',
  flavor = 'Flavour Chocolate',
  price = '$10.00',
  onPress = () => {},
}: CakeCartComponentProps) {
  return (
    <View style={styles.cakeContainer}>
      {/* Empty overview space (top section, possibly for spacing purposes) */}
      <View style={styles.emptyOverView}></View>
      {/*Image and data  Container */}
      <View style={styles.imageDataContainer}>
        <View
          style={[
            styles.imageContainer,
            {backgroundColor: `${backgroundColor}30`},
          ]}>
          <Image source={image} style={styles.image} />
        </View>
        {/* Bottom details section (name, flavor, price, button) */}
        <View style={styles.bottomDetailsView}>
          {/* Name and flavour Text */}
          <View style={styles.nameFlavourView}>
            <Text style={styles.title}>{cakeName}</Text>
            <Text style={styles.flavor}>{flavor}</Text>
          </View>
          {/*Button and Price */}
          <View style={styles.priceButtonView}>
            <Text style={styles.price}>{price}</Text>
            <TouchableOpacity
              style={styles.plusIconContainer}
              onPress={onPress}>
              <Icon name="plus" size={25} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cakeContainer: {
    height: 300,
    backgroundColor: colors.ghostwhite,
    overflow: 'hidden',
    borderRadius: 10,
    width: '100%',
  },
  emptyOverView: {
    flex: 0.4,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderEndEndRadius: 0,
    borderBottomLeftRadius: 0,
    overflow: 'visible',
  },
  image: {
    height: 150,
    width: 150,
    transform: [{translateY: -45}],
    shadowColor: colors.black,
    shadowOffset: {width: 1, height: 5},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
  },

  bottomDetailsView: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    overflow: 'hidden',
  },
  flavor: {
    fontSize: 16,
    color: colors.gray,
    lineHeight: 20,
    flexWrap: 'wrap',
    maxWidth: '100%',
    flexShrink: 1,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange',
  },
  plusIconContainer: {
    backgroundColor: colors.orange,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderTopLeftRadius: 10,
  },
  imageDataContainer: {
    flex: 1,
  },
  nameFlavourView: {
    flex: 0.5,
    maxHeight: '100%',
  },
  priceButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: 0.5,
  },
});
