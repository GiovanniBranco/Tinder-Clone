import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Curtidas = () => {
  return <Image style={styles.img} source={require('./Assets/Images/curtidas.jpeg')} />;
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "100%",
  }
})

export default Curtidas;
