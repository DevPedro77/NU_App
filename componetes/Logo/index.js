import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function Logo() {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require('../../images/bank.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {

    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 220, // Reduziu a largura para 50
    height: 100, // Reduziu a altura para 50
    borderRadius: 98
  },
});

export default Logo;