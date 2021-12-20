import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ITEMS, DETAIL} from './screens';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

//Screens
const itemScreen = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>ITEMS</Text>
  </View>
);

const detailScreen = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>DETAIL</Text>
  </View>
);

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ITEMS} component={itemScreen} />
      <Stack.Screen name={DETAIL} component={detailScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
