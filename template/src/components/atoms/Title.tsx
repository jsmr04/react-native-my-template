import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from "react-native-paper";

const Title:React.FC<{}> = (props) => (
  <Text style={styles.text}>{props.children}</Text>
)
    
const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: 'bold'
  },
});

export default Title