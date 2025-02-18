// import {Dimensions, StyleSheet, View} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import CardComponent from './CardComponent';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import {useSharedValue, withTiming} from 'react-native-reanimated';

// const {height, width} = Dimensions.get('window');

// const initialData = [
//   {id: '1', color: 'red'},
//   {id: '2', color: 'green'},
//   {id: '3', color: 'blue'},
//   {id: '4', color: 'orange'},
//   {id: '5', color: 'yellow'},
//   {id: '6', color: 'gray'},
// ];

// export default function SamosaCardAnimation() {
//   const [data, setData] = useState(initialData);
//   const xPositions = data.map(() => useSharedValue(0));
//   const yPositions = data.map(() => useSharedValue(0));

//   const handleGesture = (index: number, X: number, Y: number) => {
//     xPositions[index].value = X;
//     yPositions[index].value = Math.max(
//       -height * 0.2,
//       Math.min(Y, height * 0.2),
//     );
//   };

//   const resetPosition = (index: number) => {
//     xPositions[index].value = withTiming(0);
//     yPositions[index].value = withTiming(0);
//   };

//   const moveFirstToLast = (index: number) => {
//     resetPosition(index);
//   };

//   return (
//     <GestureHandlerRootView style={styles.main}>
//       {data.map((item, index) => {
//         return (
//           <CardComponent
//             key={item.id}
//             index={index}
//             color={item.color}
//             moveFirstToLast={moveFirstToLast}
//             translateX={xPositions[index]}
//             translateY={yPositions[index]}
//             handleGesture={handleGesture}
//           />
//         );
//       })}
//     </GestureHandlerRootView>
//   );
// }

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useSharedValue, withTiming} from 'react-native-reanimated';
import CardComponent from './CardComponent';

const {height, width} = Dimensions.get('window');

const initialData = [
  {
    id: '1',
    color: 'red',
  },
  {
    id: '2',
    color: 'green',
  },
  {
    id: '3',
    color: 'blue',
  },
  {
    id: '4',
    color: 'orange',
  },
  {
    id: '5',
    color: 'yellow',
  },
  {
    id: '6',
    color: 'gray',
  },
];

export default function SamosaCardAnimation() {
  const [data, setData] = useState(initialData);
  const xPositions = data.map(() => useSharedValue(0));
  const yPositions = data.map(() => useSharedValue(0));
  const [topCardIndex, setTopCardIndex] = useState(data.length - 1);

  const handleGesture = (index: number, X: number, Y: number) => {
    if (index === topCardIndex) {
      xPositions[index].value = X;
      yPositions[index].value = Math.max(
        -height * 0.2,
        Math.min(Y, height * 0.2),
      );
    }
  };

  const resetPosition = (index: number) => {
    xPositions[index].value = withTiming(0);
    yPositions[index].value = withTiming(0);
  };

  const moveFirstToLast = (index: number) => {
    resetPosition(index);
    if (index === topCardIndex) {
      setTopCardIndex(prevIndex => (prevIndex - 1 + data.length) % data.length);
    }
  };

  return (
    <GestureHandlerRootView style={styles.main}>
      {data.map((item, index) => (
        <CardComponent
          key={item.id}
          index={index}
          color={item.color}
          moveFirstToLast={moveFirstToLast}
          translateX={xPositions[index]}
          translateY={yPositions[index]}
          handleGesture={handleGesture}
        />
      ))}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
