import React, {useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
import {item_Image} from '../../assets/Images';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

const CartItem = ({item, onIconPress, additionalTranslation}) => {
  const iconTranslateY = useSharedValue(0);
  const iconTranslateX = useSharedValue(0);
  const [isMoved, setIsMoved] = useState(false); // Track whether the icon has moved

  const Iconstyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: withTiming(iconTranslateY.value, {duration: 500})},
        {translateX: withTiming(iconTranslateX.value, {duration: 500})},
      ],
    };
  });

  const handlePress = () => {
    // Toggle the state
    setIsMoved(prev => !prev);

    if (isMoved) {
      // If the icon was moved, move it back to the original position
      iconTranslateY.value = withTiming(0, {duration: 500});
      iconTranslateX.value = withTiming(0, {duration: 500});
    } else {
      // If the icon was in the original position, move it to the final position
      onIconPress(iconTranslateY, iconTranslateX, additionalTranslation);
    }
  };

  return (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
      <Animated.View style={[Iconstyle, {zIndex: 10}]}>
        <TouchableOpacity
          style={styles.cartIconContainer}
          onPress={handlePress}>
          <Icon name="cart-outline" size={24} color="white" />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default function CartAnimations() {
  const [modalVisible, setModalVisible] = useState(false);
  const modelTranslateY = useSharedValue(200);
  const iconFinalY = 550;
  const iconFinalX = -170;

  const rnstyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: modelTranslateY.value}],
    };
  });

  const data = Array.from({length: 20}, (_, index) => ({
    id: (index + 1).toString(),
    name: `Product ${index + 1}`,
    description: `This is a high-quality product with great features.`,
    image: item_Image,
  }));

  useEffect(() => {
    if (modalVisible) {
      modelTranslateY.value = withTiming(0, {duration: 500});
    } else {
      modelTranslateY.value = withTiming(200, {duration: 300}, isFinished => {
        if (isFinished) {
          runOnJS(setModalVisible)(false);
        }
      });
    }
  }, [modalVisible]);

  const handleIconPress = (
    iconTranslateY: any,
    iconTranslateX: any,
    additionalTranslation = 0,
  ) => {
    setModalVisible(true);
    iconTranslateY.value = withTiming(iconFinalY + additionalTranslation, {
      duration: 1000,
    });
    iconTranslateX.value = withTiming(iconFinalX, {duration: 1000});
  };

  const handleBackgroundPress = () => {
    modelTranslateY.value = withTiming(200, {duration: 500}, isFinished => {
      if (isFinished) {
        runOnJS(setModalVisible)(false);
      }
    });
  };

  return (
    <View style={styles.main}>
      <Text style={styles.heading}>React Native Animations</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <CartItem
            item={item}
            onIconPress={handleIconPress}
            additionalTranslation={index * -130}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      {modalVisible && (
        <TouchableWithoutFeedback onPress={handleBackgroundPress}>
          <View style={styles.modalBackground}>
            <Animated.View style={[styles.modalContainer, rnstyle]}>
              <Text style={styles.modalTitle}>Confirm Payment</Text>
              <Text style={styles.modalItemName}>
                Are you sure you want to add this item to the cart?
              </Text>
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    width: '100%',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  image: {
    height: 50,
    width: 50,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemDescription: {
    color: '#666',
    fontSize: 14,
  },
  cartIconContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContainer: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    height: 200,
    position: 'absolute',
    bottom: 0,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  modalItemName: {
    fontSize: 16,
  },
});
