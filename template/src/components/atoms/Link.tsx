import React from 'react';
import {GestureResponderEvent, StyleSheet, TouchableOpacity } from 'react-native';
import {Text} from "react-native-paper";

type Props = {
    text: string
    onPress?: (event: GestureResponderEvent)=>void
}

const Link:React.FC<Props> = (props) => (
    <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.link}>{props.text}</Text>
    </TouchableOpacity>
)
    
const styles = StyleSheet.create({
  link: {
    color: '#0645AD',
    textDecorationLine: 'underline',
    fontSize: 17,
  },
});

export default Link