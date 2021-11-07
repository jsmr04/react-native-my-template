import {Alert} from 'react-native';

export const showErrorAlert = (error: any, action?: any) => {
    const data = error?.response?.data;
    
    const errorTitle = data?.message ? data?.message : 'Error';
    const errorMessage = data?.reason ? data?.reason : error.message;
  
    Alert.alert(errorTitle, errorMessage, [
      {
        text: 'OK',
        onPress: action,
      },
    ]);
  };