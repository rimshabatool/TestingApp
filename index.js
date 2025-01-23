/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);


// useEffect(() => {
//     if (Platform.OS === 'android') {
//       PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
//       );
//     }
//     messaging()
//       .getToken()
//       .then(token => {
//         console.log('Device Token : ', token);
//       });