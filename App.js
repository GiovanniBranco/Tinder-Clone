import React from 'react';
import {View, StyleSheet} from 'react-native';
import Perfil from './src/Perfil.js';

const App = () => {
  return (
    <View style={styles.container}>
      <Perfil />
    </View>
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
