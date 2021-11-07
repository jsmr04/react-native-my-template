import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { LabelInputText } from '../molecules';
import { RegisterData } from '../../types';

type Props = {
  onSubmit: (user: RegisterData) => void,
}

const LoginForm: React.FC<Props> = (props) => {
  const { onSubmit } = props

  //Form initial value
  const initialValues: RegisterData = {
    username: '',
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  //Validation schema
  const LoginSchema = Yup.object().shape({
    username: Yup.string().required('*Required'),
    name: Yup.string().required('*Required'),
    email: Yup.string().required('*Required').email("Invalid format"),
    password: Yup.string().required('*Required'),
    passwordConfirmation: Yup.string().required('*Required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={onSubmit}>
      {({handleSubmit, handleBlur, handleChange, values, errors, touched}) => (
        <>
          <LabelInputText
            label={'Username'}
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.username}
            autoCapitalize={'none'}
            error={errors.username && touched.username ? errors.username : ''}
          />
          <LabelInputText
            label={'Name'}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            autoCapitalize={'words'}
            error={errors.name && touched.name ? errors.name : ''}
          />
          <LabelInputText
            label={'Email'}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            autoCapitalize={'none'}
            error={errors.email && touched.email ? errors.email : ''}
          />
          <LabelInputText
            label={'Password'}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry={true}
            autoCapitalize={'none'}
            error={errors.password && touched.password ? errors.password : ''}
          />
          <LabelInputText
            label={'Confirm Password'}
            onChangeText={handleChange('passwordConfirmation')}
            onBlur={handleBlur('passwordConfirmation')}
            value={values.passwordConfirmation}
            secureTextEntry={true}
            autoCapitalize={'none'}
            error={errors.passwordConfirmation && touched.passwordConfirmation ? errors.passwordConfirmation : ''}
          />

          <View style={styles.bottonContainer}>
            <Button icon="login" mode="contained" onPress={handleSubmit}>
              Register
            </Button>
          </View>
        </>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  link: {
    color: '#0645AD',
    textDecorationLine: 'underline',
    fontSize: 17,
  },
  bottonContainer: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
});

export default LoginForm