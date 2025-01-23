import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import i18next from './i18';

export default function Localization() {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang:any) => {
    setLanguage(lang);
    i18next.changeLanguage(lang);
  };

  const languageOptions = [
    { label: 'English', value: 'en' },
    { label: 'Urdu', value: 'ur' },
    { label: 'Hindi', value: 'hi' },
    { label: 'Chinese', value: 'zh' },

  ];

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>{i18next.t('welcome')}</Text>
      <Text style={styles.subText}>{i18next.t('signInPrompt')}</Text>

      <TextInput
        style={styles.input}
        placeholder={i18next.t('emailPlaceholder')}
        placeholderTextColor="#999"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder={i18next.t('passwordPlaceholder')}
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>{i18next.t('loginButton')}</Text>
      </TouchableOpacity>

      <Dropdown
        data={languageOptions}
        labelField="label"
        valueField="value"
        value={language}
        onChange={(item) => changeLanguage(item.value)}
        placeholder="Select Language"
        style={styles.dropdown}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    color: '#333',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  loginButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  dropdown: {
    width: '100%',
    height: 50,
    marginTop: 20,
  },
});
