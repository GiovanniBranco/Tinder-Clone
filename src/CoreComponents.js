import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  TextInput,
  Image,
} from 'react-native';

const CoreComponents = () => {
  const [numero, setNumero] = useState(0);
  const [isLigado, setIsLigado] = useState(true);
  const [texto, setTexto] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.containerSwitch}>
        <Text style={{fontSize: 20}}>Ligue/Desligue o aplicativo</Text>
        <Switch value={isLigado} onValueChange={setIsLigado} />
      </View>
      <Text style={styles.texto}>O valor está em: {numero}</Text>
      <TouchableOpacity
        disabled={!isLigado}
        style={styles.botaoProximo}
        onPress={() => setNumero(numero + 1)}>
        <Text style={styles.textoBotao}>Próximo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={!isLigado}
        style={styles.botaoAnterior}
        onPress={() => setNumero(numero - 1)}>
        <Text style={styles.textoBotao}>Anterior</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={!isLigado}
        style={styles.botaoReset}
        onPress={() => setNumero(0)}>
        <Text style={styles.textoBotao}>Reset</Text>
      </TouchableOpacity>
      <TextInput
        value={texto}
        onChangeText={setTexto}
        placeholder="Qualquer"
        // keyboardType="email-address"
        keyboardType="numeric"
        style={styles.textInput}
      />
      <Image
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
        }}
        source={require('./assets/Images/1_xDi2csEAWxu95IEkaNdFUQ.png')}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 30,
  },
  textoBotao: {
    color: '#ddd',
    fontSize: 22,
    fontWeight: 'bold',
  },
  botaoProximo: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#1459F7',
  },
  botaoAnterior: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F04335',
  },
  botaoReset: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#888',
  },
  textInput: {
    width: 250,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    fontSize: 22,
  },
});

export default CoreComponents;
