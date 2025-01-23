import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ErrorFile() {
  const nullObject = null;
  console.log(nullObject.someProperty);

  return (
    <View>
      <Text>Testing</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
