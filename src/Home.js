import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';
import LinearGradient from 'react-native-linear-gradient';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
// close, heart
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// star
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// lightning-bolt, reload

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://images.pexels.com/photos/1638407/pexels-photo-1638407.jpeg?cs=srgb&dl=pexels-meijii-1638407.jpg&fm=jpg',
        'https://images.pexels.com/photos/1638406/pexels-photo-1638406.jpeg?cs=srgb&dl=pexels-meijii-1638406.jpg&fm=jpg',
        'https://images.pexels.com/photos/1638408/pexels-photo-1638408.jpeg?cs=srgb&dl=pexels-meijii-1638408.jpg&fm=jpg',
        'https://images.pexels.com/photos/1638399/pexels-photo-1638399.jpeg?cs=srgb&dl=pexels-meijii-1638399.jpg&fm=jpg',
      ],
    };
  }
  onLayout = e => {
    this.setState({
      width: e.nativeEvent.layout.width,
    });
  };
  render() {
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={'99%'}
          dotColor="#FFFD"
          dotStyle={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
          inactiveDotColor="#6D6968"
          circleLoop
          paginationBoxStyle={styles.pagina}
          ImageComponentStyle={styles.imagens}
        />

        <View style={styles.containerInfos}>
          <View style={styles.infos}>
            <Text style={styles.texto}>Huan</Text>
            <Text style={styles.idade}>19</Text>
            <Ionicons
              style={styles.iconeinfo}
              name="information-circle"
              size={20}
              color="white"
            />
          </View>

          <View style={styles.visualizacao}>
            <Feather
              name="map-pin"
              size={17}
              color="#fff"
              style={styles.iconeOn}
            />
            <Text style={styles.online}> 12 Km de distância</Text>
          </View>
          <Image
          source={require('./Assets/Icons/iconesTinder.png')}
          style={{width: 350, height: 60, marginTop: 15}} />
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    marginTop: 10,
  },
  pagina: {
    position: 'absolute',
    bottom: 0,
    padding: 0,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 15,
    zIndex: 1,
  },
  imagens: {
    borderRadius: 5,
    width: '98%',
    height: '100%',
  },
  containerInfos: {
    zIndex: 2,
    position: 'absolute',
    fontSize: 28,
    left: '5%',
    top: '75%',
  },
  infos: {
    flexDirection: 'row',
  },
  texto: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FEFFFF',
    textShadowColor: '#111',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  idade: {
    marginTop: 7,
    fontSize: 26,
    color: '#FEFFFF',
    textShadowColor: '#111',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  iconeinfo: {
    marginTop: 15,
    textShadowColor: '#111',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  visualizacao: {
    fontSize: 28,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconeOn: {
    marginRight: 5,
  },
  online: {
    fontSize: 16,
    color: 'white',
    textShadowColor: '#111',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});
