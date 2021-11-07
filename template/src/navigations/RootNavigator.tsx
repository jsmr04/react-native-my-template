import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {LOGIN, REGISTER, DRAWER_NAVIGATOR} from './screens';
import {UserSession} from '../types';
import {useDispatch, useSelector} from 'react-redux';
import {storeSessionInMemory} from '../redux/reducers/session';
import {RootState} from '../redux/store';
import * as session from '../helpers/sessionHelper';

//Screens
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
// import TestScreen from "../screens/Test";

//Navigators
import HomeDrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const RootStack = () => {
  const dispatch = useDispatch();
  const {userSession: userSessionInMemory} = useSelector(
    (state: RootState) => state.session,
  );

  useEffect(() => {
    getAndStoreUserSessionInMemory();
  }, []);

  //Authentication control
  const getAndStoreUserSessionInMemory = async () => {
    //Get from storage
    const sessionString = await session.get();
    if (sessionString) {
      //Store in redux
      const session: UserSession = JSON.parse(sessionString);
      dispatch(storeSessionInMemory(session));
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Authenticated */}
        {userSessionInMemory.token ? (
          <Stack.Screen
            name={DRAWER_NAVIGATOR}
            component={HomeDrawerNavigator}
            options={{headerShown: false}}
          />
        ) : (
          <>
            <Stack.Screen
              name={LOGIN}
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen name={REGISTER} component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
