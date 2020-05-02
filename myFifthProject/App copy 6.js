import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
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
