import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import {NavigationProp} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {storeSessionInMemory} from '../redux/reducers/session';
import {REGISTER, DRAWER_NAVIGATOR} from '../navigations/screens';
import {User, UserSession} from '../types';
import {Logo} from '../components/atoms';
import {LoginForm} from "../components/organisms";
import { showErrorAlert } from "../helpers/errorHelper";
import * as localSession from "../helpers/sessionHelper";

type Props = {
  navigation: NavigationProp<any, string, any, any>;
};

const Home: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();

  const onRegisterPress = () => {
    //Go to sign up screen
    navigation.navigate(REGISTER);
  };

  //Submit form
  const onSubmit = async (user: User) => {
    try {
      //Store user session
      let session: UserSession = { token: '-FAKE TOKEN-', userId: 0, username: user.username};
      await storeUserSession(session);

      //Store in Redux
      dispatch(storeSessionInMemory(session));
      navigation.navigate(DRAWER_NAVIGATOR);
  
    } catch (error) {
      showErrorAlert({message: 'User unauthorized'})
    }
  };

  const storeUserSession = async (session: UserSession) => {
    await localSession.init(session)
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Logo />
          <LoginForm onSubmit={onSubmit} onRegisterPress={onRegisterPress} />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default Home;
