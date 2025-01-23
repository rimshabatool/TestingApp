import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useQuery} from '@apollo/client';
import FastImage from 'react-native-fast-image';
import {Get_Location} from '../Api/ApiCall';

export default function Graphql() {
  const {loading, error, data} = useQuery(Get_Location);

  if (loading) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  if (error) {
    console.error('Error fetching data:', error);
    return <Text style={styles.noDataText}>Error fetching data</Text>;
  }

  if (!data || data.locations.length === 0) {
    return <Text style={styles.noDataText}>No locations available</Text>;
  }

  const renderItem = ({
    item,
  }: {
    item: {id: string; name: string; description: string; photo: string};
  }) => (
    <View style={styles.locationContainer}>
      <FastImage
        source={{
          uri: item.photo,
          priority: FastImage.priority.normal,
        }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Locations</Text>
      <FlatList
        data={data.locations}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
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
});
