import React, { Component, ReactNode } from 'react';
import { Alert, StyleSheet, View, Text } from 'react-native';

type ErrorBoundaryProps = React.PropsWithChildren<{}>;
type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

class ErrorBoundaries extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.errorText}> Dear User Something went wrong 😁.Check in your Code</Text>
          {this.state.error && <Text style={styles.errorDetails}>{this.state.error.message}</Text>}
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    marginBottom: 10,
  },
  errorDetails: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ErrorBoundaries;
