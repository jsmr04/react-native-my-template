import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import { Text } from 'react-native-paper';

//TODO: Refactor component

type Props = {
    label: string,
    onChangeText?: any,
    onBlur?: any,
    value?: any,
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined,
    autoFocus?: boolean,
    secureTextEntry?: boolean
    error?: string
    multiline?: boolean
    height?: number | string
    labelWidth?: number | string
}

 const LabelInputText: React.FC<Props> = props => {
   const {label, onChangeText, onBlur, value, autoCapitalize, autoFocus, secureTextEntry, error, multiline, height = 40, labelWidth = 85} =
     props;

     const [isFocused, setIsFocused] = React.useState(false)

     const onFocusHandler = ()=>{
      setIsFocused(true)
     }

     const onBlurHandler = ()=>{
      setIsFocused(false)
     }

   return (
       <View style={styles.row}>
         <Text style={[styles.inputLabel, {width: labelWidth}]}>{label}</Text>
         <View style={[styles.inputContainer]}>
           <TextInput
             style={[styles.input,{height, borderColor: isFocused ? '#5829e4' : '#d8d8d8'}]}
             autoFocus={autoFocus}
             onChangeText={onChangeText}
             onFocus={onFocusHandler}
             onBlur={onBlurHandler}
             value={value}
             autoCapitalize={autoCapitalize}
             secureTextEntry={secureTextEntry}
             multiline={multiline}
             textAlignVertical={multiline ? 'top' : 'auto'}
           />           
           {error != undefined && <Text style={styles.error}>{error}</Text>}
         </View>
       </View>
   );
 };

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flex: 1,
    marginVertical: 3
  },
  input: {
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    paddingVertical: 0,
    padding: 5,
    borderColor: 'grey',
    borderWidth: 1,
  },
  inputLabel: {
    fontSize: 17,
    marginRight: 10,
    width: 85,
    marginBottom: 5,
  },
  error: {
    color: 'red'
  },
});


export default LabelInputText