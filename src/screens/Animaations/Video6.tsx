import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { cuisines } from './Constants';

export default function Video6() {
  const { top: safeTop } = useSafeAreaInsets();
  
  return (
    <View style={{ ...styles.main, paddingTop: safeTop + 24 }}>
      <Text style={styles.text}>What is your favourite cuisine?</Text>
      <View style={styles.listContainer}>
        {cuisines.map(causin=>{
          return(
            <View>
              <Text style={styles.listItem}>{causin.name}</Text>
            </View>
          )
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
    padding: 24, 
  },
  text: {
    color: 'white',
    fontSize: 25,
  },
  listContainer:{
backgroundColor:'red',
flexWrap:'wrap',
flexDirection:'row',
gap:12
  },
  listItem:{
    fontSize:24,
    color:'white'
  }
});
