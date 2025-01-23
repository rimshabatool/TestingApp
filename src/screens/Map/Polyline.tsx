import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, PermissionsAndroid, Platform, Alert, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default function Polyline() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
          const backgroundGranted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION
          );
          if (backgroundGranted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Background location permission granted');
            getCurrentLocation();
          } else {
            Alert.alert('Permission Denied', 'Background location access is required.');
          }
        } else {
          Alert.alert('Permission Denied', 'Location access is required to display your location on the map.');
          setLoading(false);
        }
      } catch (err) {
        console.warn(err);
        Alert.alert('Error', 'An error occurred while requesting location permissions.');
        setLoading(false);
      }
    } else {
      Geolocation.requestAuthorization();
      getCurrentLocation();
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log('Received location:', position.coords.latitude, position.coords.longitude);
        setCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLoading(false);
      },
      (error) => {
        console.log('Error fetching location:', error);
        Alert.alert(
          'Error',
          `Unable to fetch location: ${error.message}. Error code: ${error.code}`
        );
        setLoading(false);
        if (error.code === 3) {
          console.log('Possible solution: GPS signal might be weak or location services not enabled.');
        }
        setCurrentLocation({ latitude: 37.7749, longitude: -122.4194 }); 
      },
      {
        enableHighAccuracy: true,
        timeout: 60000, 
        maximumAge: 30000, 
      }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Google Map</Text>
      </View>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="blue" />
          <Text style={styles.loadingText}>Fetching location...</Text>
        </View>
      ) : currentLocation ? (
        <MapView
          style={styles.map}
          zoomControlEnabled={true}
          initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={currentLocation} />
        </MapView>
      ) : (
        <View style={styles.error}>
          <Text style={styles.errorText}>
            Unable to fetch location. Please check your settings.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 80,
    backgroundColor: '#6200EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  map: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});
