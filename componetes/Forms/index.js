import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

function Form({ setNome, setCelular }) {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#fff"
          onChangeText={setNome} // Atualiza o estado do nome
        />
        <TextInput
          style={styles.input}
          placeholder="Número de celular"
          keyboardType="numeric"
          placeholderTextColor="#fff"
          onChangeText={setCelular} // Atualiza o estado do celular
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    padding: 20,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 320,
    color: '#fff',
  },
});

export default Form;
