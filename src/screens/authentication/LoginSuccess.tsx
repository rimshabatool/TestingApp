import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import colors from '../../helpers/colors/colors';

function LoginSuccess({ route }) {
  const { name, email, profilePicture } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
});
export default LoginSuccess


