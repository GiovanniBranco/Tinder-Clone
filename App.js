import React from 'react';
import {View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import Home from './src/Home';
import BottomTab from './components/BottomTab';

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <BottomTab />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
