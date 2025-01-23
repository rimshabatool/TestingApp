import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import User from './User';
import Setting from './Setting';

export default function Dashboard() {
  const [currentScreen, setCurrentScreen] = useState('User'); 

  const renderScreen = () => {
    if (currentScreen === 'User') {
      return <User />;
    } else if (currentScreen === 'Setting') {
      return <Setting />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}

      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setCurrentScreen('User')}
        >
          <Icon name="user" color="white" size={30} />
          <Text style={styles.tabText}>User</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setCurrentScreen('Setting')}
        >
          <Icon name="setting" color="white" size={30} />
          <Text style={styles.tabText}>Setting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#0a465d',
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabButton: {
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    fontSize: 12,
  },
});
