import React, {useState, useRef} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import CustomGoogleAutocomplete from './GoogleAutoplacesComponent';
import MapView, {Marker, Region} from 'react-native-maps';

interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

interface Details {
  address_components: AddressComponent[];
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
}

interface Data {
  description: string;
}

const GoogleAutoplaces: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<{
    name: string;
    latitude: number;
    longitude: number;
  } | null>(null);
  const [region, setRegion] = useState<Region>({
    latitude: 33.5651,
    longitude: 73.0169,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [streetNumber, setStreetNumber] = useState<string>('');
  const [postalCode, setPostalCode] = useState<string>('');
  const [premises, setPremises] = useState<string>('');

  const mapRef = useRef<MapView>(null);

  const handlePlaceSelected = (data: Data, details: Details | null) => {
    if (details) {
      const {lat, lng} = details.geometry.location;
      const location = {name: data.description, latitude: lat, longitude: lng};

      setSelectedLocation(location);
      console.log('Selected Location:', location);

      const newRegion: Region = {
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      };

      setRegion(newRegion);
      if (mapRef.current) {
        mapRef.current.animateToRegion(newRegion, 1000);
      }

      const getAddressComponent = (type: string) =>
        details.address_components.find(component =>
          component.types.includes(type),
        );

      const streetNumberComponent = getAddressComponent('street_number');
      const postalCodeComponent = getAddressComponent('postal_code');
      const premiseComponent = getAddressComponent('premise');
      const subPremiseComponent = getAddressComponent('subpremise');
      const premisesValue = [
        premiseComponent?.long_name,
        subPremiseComponent?.long_name,
      ]
        .filter(Boolean) 
        .join(' ');

      setStreetNumber(streetNumberComponent?.long_name || '');
      setPostalCode(postalCodeComponent?.long_name || '');
      setPremises(premisesValue);
    }
  };

  

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region} ref={mapRef}>
        {selectedLocation && (
          <Marker
            coordinate={{
              latitude: selectedLocation.latitude,
              longitude: selectedLocation.longitude,
            }}
            title={selectedLocation.name}
          />
        )}
      </MapView>
      <CustomGoogleAutocomplete
        placeholder="Search for a location..."
        onPlaceSelected={handlePlaceSelected}
        query={{
          key: 'AIzaSyAfKmuTa7iuhzhdHpm7tPFWMoKgT7oPNck',
          language: 'en',
        }}
      />
      <TextInput
        style={styles.input}
        value={streetNumber}
        placeholder="Street Number"
        placeholderTextColor={'black'}
      />
      <TextInput
        style={styles.input}
        value={postalCode}
        placeholder="Postal Code"
        placeholderTextColor={'black'}
      />
      <TextInput
        style={styles.input}
        value={premises}
        placeholder="Premises"
        placeholderTextColor={'black'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    paddingHorizontal: 10,
    width: '90%',
  },
});

export default GoogleAutoplaces;
