import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Formulario from './components/Fomulario';

const App = () => {

  const ocultarTeclado = () => {
    Keyboard.dismiss()
  }
  return (
    <>
      <TouchableWithoutFeedback onPress={()=> ocultarTeclado()}>
        <View style={styles.app}>
          <View style={styles.contenido}>
            <Formulario />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#5BABE2',
    justifyContent: 'center',
  },
  contenido: {
    marginHorizontal: '2.5%',
  },
});

export default App;
