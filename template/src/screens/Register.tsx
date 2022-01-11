import React from 'react';
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {RegisterData} from '~/types';
import {signup} from '~api/client/authentication';
import {Logo} from '~components/atoms';
import {RegisterForm} from '~components/organisms';
import {showErrorAlert} from '~helpers/errorHelper';

type Props = {
  navigation: NavigationProp<any, string, any, any>;
};

const Register: React.FC<Props> = ({navigation}) => {
  //Submit form
  const onSubmit = async (user: RegisterData) => {
    try {
      //request signup
      const response = await signup(user);
      navigation.goBack();
    } catch (error) {
      showErrorAlert(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.container}>
          <Logo />
          <RegisterForm onSubmit={onSubmit} />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
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

export default Register;
