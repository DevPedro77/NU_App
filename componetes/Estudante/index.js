import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

function Study() {
  const [isEnabled, setIsEnabled] = useState(false); // Estado para o switch

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Sou Estudante</Text> 
      <Switch
        value={isEnabled}
        onValueChange={(statusAtivo) => setIsEnabled(statusAtivo)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Define os elementos em linha
    justifyContent: 'center', // Alinha horizontalmente ao centro
    alignItems: 'center', // Alinha verticalmente ao centro
    padding: 10, // Espaço ao redor do conteúdo para melhor visualização
  },
  texto: {
    marginRight: 10, // Adiciona um espaço entre o texto e o switch
    color: '#fff',
    fontSize: 21
  },
});

export default Study;
