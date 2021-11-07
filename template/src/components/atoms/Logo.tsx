import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Logo: React.FC = () => (
  <Image style={styles.image} source={require('../../../assets/logo.png')} />
);

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '35%',
  },
});

export default Logo;
