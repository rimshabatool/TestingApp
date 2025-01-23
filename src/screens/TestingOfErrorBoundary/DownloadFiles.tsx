import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import RNFS from 'react-native-fs';

const DownloadFile = () => {
  const [url, setUrl] = useState('');

  const downloadFile = async () => {
    if (!url) {
      Alert.alert('Please enter a URL.');
      return;
    }

    const fileName = url.split('/').pop().split('?')[0];
    const destinationPath = `${RNFS.ExternalStorageDirectoryPath}/Download/${fileName}`;
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'This app needs access to your storage to download files.',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
          buttonNeutral: 'Ask Me Later',
        },
      );

      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Storage permission denied');
        return;
      }
    }

    RNFS.downloadFile({
      fromUrl: url,
      toFile: destinationPath,
    })
      .promise.then(result => {
        Alert.alert('Download complete!', `File saved to ${destinationPath}`);
      })
      .catch(err => {
        Alert.alert('Download failed', err.message);
        console.log(err.message);
      });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', padding: 16}}>
      <TextInput
        placeholder="Enter file URL"
        value={url}
        onChangeText={setUrl}
        style={{borderWidth: 1, marginBottom: 16, padding: 8, height: 50}}
        placeholderTextColor={'black'}
      />
      <Button title="Download File" onPress={downloadFile} />
    </View>
  );
};

export default DownloadFile;
