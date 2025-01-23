import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React from 'react';

export default function Accessibilty() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Accessibility Example</Text>

      <TouchableOpacity
        accessible={false} 
        accessibilityLabel="Login Button" 
        accessibilityRole="button" 
        accessibilityHint="Logs you into the app" 
        onPress={() => Alert.alert("Logged in!")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
