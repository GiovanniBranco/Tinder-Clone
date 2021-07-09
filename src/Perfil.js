import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {LinearTextGradient} from 'react-native-text-gradient';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFontAws from 'react-native-vector-icons/FontAwesome';
import IconOctions from 'react-native-vector-icons/Octicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
        <View style={styles.containerIcone}>
          <View style={styles.containerCircCinza}>
            <IconFontAws name="gear" color="#BCC1C7" size={35} />
          </View>
          <Text style={styles.descricaoIcone}>CONFIGURAÇÕES</Text>
        </View>
        <View style={styles.containerIcone}>
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
        <Text style={styles.descricaoIcone}>ADD MÍDIA</Text>
        </View>

        <View style={styles.containerIcone}>
        <View style={styles.containerCircCinza}>
          <IconOctions name="pencil" color="#BCC1C7" size={35} />
        </View>
        <Text style={styles.descricaoIcone}>EDITAR INFO</Text>
        </View>
      </View>
      <View style={styles.separador} />
      <View style={styles.propaganda}>
        <View style={styles.primeiraLinha}>
          <Fontisto name="tinder" size={30} color="#D69E3A" />
          <Text style={styles.textoPropaganda}>Assine o Tinder Gold</Text>
        </View>
        <Text>Veja quem curtiu você e mais!</Text>
        <View style={styles.circle}>
          <MaterialCommunityIcons name="circle" size={10} color="#BCC1C7" />
          <MaterialCommunityIcons name="circle" size={10} color="#D69E3A" />
          <MaterialCommunityIcons name="circle" size={10} color="#BCC1C7" />
          <MaterialCommunityIcons name="circle" size={10} color="#BCC1C7" />
          <MaterialCommunityIcons name="circle" size={10} color="#BCC1C7" />
          <MaterialCommunityIcons name="circle" size={10} color="#BCC1C7" />
          <MaterialCommunityIcons name="circle" size={10} color="#BCC1C7" />
          <MaterialCommunityIcons name="circle" size={10} color="#BCC1C7" />
        </View>
        <TouchableOpacity style={styles.btn}>
          <LinearTextGradient
            style={{fontWeight: '700', fontSize: 18, letterSpacing: 1}}
            locations={[0, 1]}
            colors={['#d69e3a', '#d1a758']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text>ASSINE O TINDER GOLD</Text>
          </LinearTextGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    justifyContent: "space-around",
    zIndex: 2,
    marginTop: 15,
  },
  containerCircCinza: {
    height: 70,
    width: 70,
    right: -2,
    borderRadius: 40,
    backgroundColor: '#EBEFF2',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  linearGradient: {
    height: 75,
    width: 75,
    borderRadius: 40,
    backgroundColor: 'red',
    marginTop: 20,
    position: 'relative',
    justifyContent: 'center',
    left: -3,
  },
  descricaoIcone:{
    color: "#BCC1C7",
    fontWeight: "700",
    fontSize: 12,
    textAlign: "center",
    maxWidth: "99.5%",
    marginTop: 12,
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
        translateX: 57,
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
        translateY: -875,
      },
      {
        translateX: -303,
      },
    ],
  },
  propaganda: {
    transform: [
      {
        translateY: -870,
      },
      {
        translateX: 0,
      },
    ],
    justifyContent: 'center',
    alignItems: 'center',
  },
  primeiraLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  textoPropaganda: {
    marginLeft: 22,
    marginTop: 7,
    fontSize: 20,
    fontWeight: '700',
  },
  circle: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 30,
    width: 250,
    height: 55,
    backgroundColor: '#F6F6F6',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});

export default Perfil;
