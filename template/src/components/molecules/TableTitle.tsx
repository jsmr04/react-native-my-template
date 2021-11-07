import React from 'react';
import {StyleSheet, View} from 'react-native';
import Title from "../atoms/Title";

const TableTitle:React.FC<{}> = (props) => (
    <View style={styles.container}>
        <Title>{props.children}</Title>
    </View>
  
)
    
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent:'flex-start'
  },
});

export default TableTitle