import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CarItem from './components/CarItem/index.js';
import { NavigationContainer } from '@react-navigation/native';




function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}



export default function App() {
  return (
    <NavigationContainer> 

    <View>
    
      <CarItem />
     
      <StatusBar style="auto" />
      
    </View>

    </NavigationContainer>
    
  );
}
