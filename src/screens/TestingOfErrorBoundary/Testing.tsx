import React from 'react';
import { LogBox, StyleSheet, View } from 'react-native';
import ErrorBoundaries from '../../Components/ErrorBoundries';
import ErrorFile from './ErrorFile';
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <ErrorBoundaries>
      <ErrorFile />
    </ErrorBoundaries>
  );
}

const styles = StyleSheet.create({
});
