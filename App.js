import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Slider from '@react-native-community/slider';
import Logo from './componetes/Logo';
import Form from './componetes/Forms';
import Sexo from './componetes/Sexo';
import Limite from './componetes/Limite';
import Study from './componetes/Estudante';

export default function App() {
  return (
    <View style={styles.containerAll}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <Form/>
      <View style={styles.container}>
      <Text style={styles.textSexo}>Qual seu sexo:</Text>
      <Sexo/>
      </View>
      <Limite/>
      <Study/>
      
    </View>
  );
  
}

const styles = StyleSheet.create({
  containerAll: {
    flex: 1,
    backgroundColor: '#A020F0',
    alignItems: 'center',
    justifyContent: 'center', // Align items at the top
    
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items at the top
  },
  textColor: {
    color: '#ecf0f1',
    textAlign: 'center',
    fontSize: 29,
    alignContent: 'flex-start',
    paddingBottom: 20,
    fontWeight: '800',
    textTransform: 'uppercase'
  },
  textSexo: {
    width: 120,
    height: 30,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'condensedBold',
    borderRadius: 10,
    color:'#fff',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});