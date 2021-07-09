import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFontAws from 'react-native-vector-icons/FontAwesome';
import IconOctions from 'react-native-vector-icons/Octicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Perfil = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerFoto}>
        <Image
          style={styles.foto}
          source={require('./Assets/Images/markim.webp')}
        />
      </View>
      <View style={styles.containerDados}>
        <View style={styles.containerNome}>
          <Text style={styles.dados}>Mark Zuckerberg, 37</Text>
          <IconMaterial name="verified" color="#2A82E4" size={30} />
        </View>
        <Text style={styles.complemento}>CEO do Facebook</Text>
      </View>

      <View style={styles.containerIcones}>
        <View style={styles.containerCircCinza}>
          <IconFontAws name="gear" color="#BCC1C7" size={35} />
        </View>

        <LinearGradient
          start={{x: 0.0, y: 1}}
          end={{x: 0.4, y: 0}}
          colors={['#f33b6d', '#f54269', '#f4605b']}
          style={styles.linearGradient}>
          <IconFontAws
            name="camera"
            color="#F6F6F6"
            size={40}
            style={styles.iconeCamera}
          />
          <View style={styles.containerBranco}>
            <IconEntypo name="plus" color="red" size={15} />
          </View>
        </LinearGradient>

        <View style={styles.containerCircCinza}>
          <IconOctions name="pencil" color="#BCC1C7" size={35} />
        </View>
      </View>
      <View style={styles.separador} />
      <View style={styles.propaganda}>
        <View style={styles.primeiraLinha}>
          <Fontisto name="tinder" size={30} color="#BCC1C7" />
          <Text>Assine o Tinder Gold</Text>
        </View>
        <Text>Veja quem curtiu você e mais!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F6F6F6',
    backgroundColor: '#F6F7FB',
    width: '100%',
  },
  containerFoto: {
    marginTop: 25,
    alignSelf: 'center',
    zIndex: 2,
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  containerDados: {
    marginTop: 10,
    alignItems: 'center',
    zIndex: 2,
  },
  containerNome: {
    flexDirection: 'row',
  },
  dados: {
    fontSize: 22,
    fontWeight: '700',
  },
  complemento: {
    marginTop: 10,
    fontSize: 18,
  },
  containerIcones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    zIndex: 2,
    marginTop: 15,
  },
  containerCircCinza: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#EBEFF2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: 'red',
    marginTop: 30,
    position: 'relative',
    justifyContent: 'center',
  },
  iconeCamera: {
    alignSelf: 'center',
    position: 'absolute',
  },
  containerBranco: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,

    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [
      {
        translateY: 28,
      },
      {
        translateX: 60,
      },
    ],
  },
  separador: {
    zIndex: 1,
    width: 1000,
    height: 1000,
    backgroundColor: '#F6F6F6',
    borderColor: '#ebecf0',
    borderWidth: 2,
    borderRadius: 5000,
    transform: [
      {
        translateY: -840,
      },
      {
        translateX: -303,
      },
    ],
  },
  propaganda: {
    transform: [
      {
        translateY: -810,
      },
      {
        translateX: 0,
      },
    ],
    alignSelf: 'center',
  },
  primeiraLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 5
  },
});
export default Perfil;
