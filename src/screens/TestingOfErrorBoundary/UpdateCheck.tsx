import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import SpInAppUpdates, {
  NeedsUpdateResponse,
  IAUUpdateKind,
  StartUpdateOptions,
} from 'sp-react-native-in-app-updates';

const inAppUpdates = new SpInAppUpdates(false); 

const UpdateCheck = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [updateAvailable, setUpdateAvailable] = useState(false);

  const checkForUpdates = async () => {
    try {
      const result: NeedsUpdateResponse = await inAppUpdates.checkNeedsUpdate({
        curVersion: '0.0.8',
      });

      console.log('Update check result:', result); 

      if (result.shouldUpdate) {
        console.log('Update Available!'); 
        setUpdateAvailable(true);
      } else {
        console.log('App is up-to-date.'); 
        setUpdateAvailable(false);
      }
      setModalVisible(true);
    } catch (e) {
      console.error('Error checking for updates:', e); 
      setModalVisible(true);
      setUpdateAvailable(false);
    }
  };

  const startUpdate = async () => {
    let updateOptions: StartUpdateOptions = {};

    if (Platform.OS === 'android') {
      updateOptions = {
        updateType: IAUUpdateKind.FLEXIBLE,
      };
    }

    try {
      console.log('Starting update...');
      await inAppUpdates.startUpdate(updateOptions);
      console.log('Update started successfully');
    } catch (e) {
      console.error('Error during update:', e); 
    }
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to Your App</Text>
      <Button title="Check for Updates" onPress={checkForUpdates} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              {updateAvailable
                ? 'A new version of the app is available. Would you like to update?'
                : 'Your app is up-to-date.'}
            </Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
              {updateAvailable && (
                <TouchableOpacity
                  style={[styles.button, styles.updateButton]}
                  onPress={startUpdate} // Start the update process
                >
                  <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
    alignItems: 'center',
  },
  updateButton: {
    backgroundColor: '#28a745',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default UpdateCheck;
