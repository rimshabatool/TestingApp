import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {fetchProducts} from './ApiCall';
import FastImage from 'react-native-fast-image';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const ProductList = () => {
  const {data, isLoading, error} = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,

  });

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <Text style={styles.noDataText}>
        Error fetching data: {error.message}
      </Text>
    );
  }

  if (!data || data.length === 0) {
    return <Text style={styles.noDataText}>No products available</Text>;
  }

  const renderItem = ({item}: {item: Product}) => (
    <View style={styles.productContainer}>
      <FastImage source={{uri: item.image}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: 'green',
  },
  category: {
    fontSize: 12,
    color: 'gray',
  },
  description: {
    fontSize: 12,
    color: 'gray',
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 18,
  },
  noDataText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
    color: 'red',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductList;
