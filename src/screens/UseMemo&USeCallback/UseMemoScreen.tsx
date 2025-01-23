import React, { useState, useMemo } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState(10);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const filteredNumbers = useMemo(() => {
    console.log('Filtering numbers...');
    return numbers.filter(number => number >= filter);
  }, [filter]); 

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>Count: {count}</Text>

      <Text style={styles.filterText}>
        Filtered Numbers (greater than or equal to {filter}): {filteredNumbers.join(', ')}
      </Text>

      <Button
        title="Increment Count"
        onPress={() => setCount(prevCount => prevCount + 1)}
      />
      <Button
        title="Change Filter"
        onPress={() => setFilter(prevFilter => prevFilter + 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  countText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  filterText: {
    fontSize: 18,
    marginVertical: 10,
  },
});
