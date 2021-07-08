import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFontAws from 'react-native-vector-icons/FontAwesome';
import IconOctions from 'react-native-vector-icons/Octicons';
import IconEntypo from 'react-native-vector-icons/Entypo';

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
        <View style={styles.containerCircVermelho}>
          <IconFontAws
            name="camera"
            color="#F6F6F6"
            size={40}
            style={styles.iconeCamera}
          />
          <View style={styles.containerBranco}>
            <IconEntypo name="plus" color="red" size={15} />
          </View>
        </View>
        <View style={styles.containerCircCinza}>
          <IconOctions name="pencil" color="#BCC1C7" size={35} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    width: '100%',
  },
  containerFoto: {
    marginTop: 25,
    alignSelf: 'center',
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  containerDados: {
    marginTop: 10,
    alignItems: 'center',
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  containerCircCinza: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#EBEFF2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCircVermelho: {
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
    borderWidth: 1,
    borderColor: '#EBEFF2',
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
});
export default Perfil;
