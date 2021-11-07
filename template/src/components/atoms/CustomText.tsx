import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from "react-native-paper";

const CustomText:React.FC<{}> = (props) => (
  <Text style={styles.text}>{props.children}</Text>
)
    
const styles = StyleSheet.create({
  text: {
    fontSize: 17,
  },
});

export default CustomText