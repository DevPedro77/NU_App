import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function Sexo() {
  const [sexo, setSexo] = useState(''); // Inicia com um valor existente
  const options = [
    { key: 1, sexo: 'Masculino' },
    { key: 2, sexo: 'Feminino' },
    { key: 3, sexo: 'Outros' },
  ];

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={sexo}
        onValueChange={(itemValue) => setSexo(itemValue)}
        style={styles.picker} // Adicionado estilo ao Picker
      >
        {options.map((valor) => (
          <Picker.Item
            key={valor.key}
            value={valor.sexo}
            label={valor.sexo}
            color='#000'
          />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    height: 50, // Altura do Picker
    width: 200, // Largura do Picker7
    color: '#fff'
  },
});

export default Sexo;
