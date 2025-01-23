import React, {useState} from 'react';
import {
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  Text,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Entypo from 'react-native-vector-icons/Entypo';

interface CustomGoogleAutocompleteProps {
  placeholder?: string;
  onPlaceSelected: (data: any, details: any) => void;
  query: {key: string; language: string};
  containerStyle?: ViewStyle;
  textInputStyle?: TextStyle;
}

const CustomGoogleAutocomplete: React.FC<CustomGoogleAutocompleteProps> = ({
  placeholder = 'Search location...',
  onPlaceSelected,
  query,
  containerStyle,
  textInputStyle,
}) => {
  const [text, setText] = useState('');

  const handleClearInput = () => {
    setText('');
  };

  return (
    <GooglePlacesAutocomplete
      placeholder={placeholder}
      minLength={2}
      fetchDetails={true}
      onPress={(data, details) => {
        onPlaceSelected(data, details);
        setText(data.description);
      }}
      query={query}
      textInputProps={{
        placeholderTextColor: '#999',
        value: text,
        onChangeText: setText,
      }}
      renderRightButton={() => (
        <TouchableOpacity onPress={handleClearInput}>
          <Entypo
            name="circle-with-cross"
            size={24}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
      styles={{
        container: [styles.container, containerStyle],
        textInput: [styles.textInput, textInputStyle],
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    width: '90%',
    alignSelf: 'center',
    zIndex: 1,
    backgroundColor: 'red',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    color: 'black',
  },
  icon: {
    marginVertical: 10,
  },
});

export default CustomGoogleAutocomplete;
