import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../helpers/colors/colors'
const { height, width } = Dimensions.get('window');

export default function Edge() {
  return (
    <View style={styles.edge}>
    <Text style={styles.Text}>Go</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  edge:{
height:50,
width:50,
backgroundColor:'orange',
borderRadius:25,
borderEndEndRadius:0,
alignItems:'center',
justifyContent:'center',

  },
  Text:{
    color:colors.white,
    fontSize:25
  }
})