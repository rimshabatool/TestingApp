import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk-next';
import colors from '../../helpers/colors/colors';
import { EmailAuthenticationProps } from '../../types/Types';

export default function EmailAuthentication({ navigation }: EmailAuthenticationProps) {
  const onFacebookButtonPress = async () => {
    try {
      await LoginManager.logOut();
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        Alert.alert('Login Cancelled', 'The user cancelled the login process.');
        return;
      }

      console.log(result);
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw new Error('Failed to get access token');
      }
      const profileRequest = new GraphRequest(
        '/me?fields=name,email,picture',
        null,
        (error, result) => {
          if (error) {
            Alert.alert('Error Fetching Profile', error.toString());
          } else {
            console.log('Profile Data:', result);
            const email = result?.email || 'Email not available'; 
            const profilePicture = result?.picture?.data?.url || null;
      
            navigation.navigate('LoginSuccess', {
              name: result?.name || 'Unknown',
              email: email,
              profilePicture: profilePicture,
            });
          }
        }
      );
      
      
      new GraphRequestManager().addRequest(profileRequest).start();
      } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Login Error', error.message);
      } else {
        Alert.alert('Login Error', 'An unexpected error occurred.');
      }
    }
  };

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Sign In</Text>
      <Text>Login with Facebook</Text>
      <TouchableOpacity onPress={onFacebookButtonPress}>
        <Image
          source={require('../../assets/Images/facebook.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
  },
  image: {
    height: 40,
    width: 40,
  },
});
