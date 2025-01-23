import {LogBox, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Routes} from './src/Routes/Routes';
import colors from './src/helpers/colors/colors';
import {ApolloProvider} from '@apollo/client';
import client from './src/screens/Api/Client';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from './src/screens/ReactQuery/client';
import store from './src/Redux/Store';
import {Provider} from 'react-redux';
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <View style={styles.main}>
      {/* <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider> */}
      {/* <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider> */}
      <Provider store={store}>
        <Routes />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
