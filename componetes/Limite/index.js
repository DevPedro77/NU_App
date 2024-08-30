import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Slider from '@react-native-community/slider';

function Limite () {
  const [valor, setValor] = useState(1000)
  return (
    <View style={styles.container}>
      <Slider
      minimumValue={0}
      maximumValue={5000}
      value={valor}
      onValueChange={(valorSelecionado) =>setValor(valorSelecionado)}
      />
      <Text style={styles.textColor}> Você tem: R$ {valor.toFixed(0)} de Limite</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 300
  },
  textColor: {
    fontSize: 16,
    color: "#fff",
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default Limite ;