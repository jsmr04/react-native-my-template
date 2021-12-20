import React, {useEffect} from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import {Provider as PaperProvider} from 'react-native-paper';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {store} from '~state/store';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PaperProvider>
        <RootNavigator />
      </PaperProvider>
    </Provider>
  );
};

export default App;

AppRegistry.registerComponent(appName, () => App);
