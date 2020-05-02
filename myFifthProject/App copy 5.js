import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}
    >
      <View
        style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}
      ></View>
      <View
        style={{ width: 50, height: 50, backgroundColor: 'steelblue' }}
      ></View>
      <View style={{ width: 50, height: 50, backgroundColor: 'blue' }}></View>
    </View>
  );
}
