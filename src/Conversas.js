import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Conversas = () => {
  return <Image style={styles.img} source={require('./Assets/Images/conversas.jpeg')} />;
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "100%",
  }
})

export default Conversas;
