import React, {useState} from 'react';
import {Picker} from '@react-native-community/picker';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

const Fomulario = () => {
  const [animacionBoton] = useState(new Animated.Value(1));

  const animacionEntrada = () => {
    Animated.spring(animacionBoton, {
        toValue: .9
    }).start()
  };

  const animacionSalida = () => {
    console.log('Salida...');
  };



  const estiloAnimacion = {
      transform : [{
          scale : animacionBoton
      }]
  }
  return (
    <>
      <View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Ciudad"
            placeholderTextColor="#666"
          />
        </View>
        <View>
          <Picker style={{height: 100, backgroundColor: '#FFF'}}>
            <Picker.Item label="-- Seleccione --" value="" />
            <Picker.Item label="Estados unidos" value="US" />
            <Picker.Item label="Mexico" value="MX" />
            <Picker.Item label="Colombia" value="CO" />
            <Picker.Item label="Argentina" value="AR" />
            <Picker.Item label="España" value="ES" />
          </Picker>
        </View>

        <TouchableWithoutFeedback
          onPress={() => animacionEntrada()}
          onPressOut={() => animacionSalida()}>
          <Animated.View style={[styles.btnBuscar, estiloAnimacion]}>
            <Text style={styles.txtBuscar}>Buscar Clima</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    height: 50,
    backgroundColor: '#fff',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  btnBuscar: {
    marginTop: 50,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 6,
  },
  txtBuscar: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 18,
  },
});

export default Fomulario;
