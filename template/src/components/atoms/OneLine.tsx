import React from 'react';
import {View, StyleSheet} from 'react-native';

const OneLine: React.FC = props => (
  <View style={styles.container}>{props.children}</View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 30,
  },
});

export default OneLine;
