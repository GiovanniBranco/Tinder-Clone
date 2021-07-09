import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree',
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
        <View style={styles.info}>
          <Text style={styles.texto}>Donald Trump </Text>
          <Text style={styles.idade}>19 </Text>
          <Ionicons
            style={styles.iconeinfo}
            name="information-circle"
            size={20}
            color="white"
          />
        </View>
        <View style={styles.visualizacao}>
          <FontAwesome5
            name="circle"
            size={15}
            color="#7BD746"
            solid={true}
            style={styles.iconeOn}
          />
          <Text style={styles.online}> Online recentemente</Text>
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
    borderRadius: 15,
    width: '95%',
    margin: 5,
  },
  info: {
    zIndex: 2,
    position: 'absolute',
    fontSize: 28,
    flexDirection: 'row',
    marginTop: 475,
    marginLeft: 30,
  },
  texto: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FEFFFF',
    alignSelf: 'flex-start',
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
    position: 'absolute',
    fontSize: 28,
    flexDirection: 'row',
    marginTop: 525,
    marginLeft: 30,
  },
  iconeOn: {
    marginTop: 4,
  },
  online: {
    fontSize: 16,
    color: 'white',
    textShadowColor: '#111',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});
