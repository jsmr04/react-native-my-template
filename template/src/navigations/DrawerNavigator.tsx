import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useSelector} from 'react-redux';
import {Button} from 'react-native-paper';
import {DASHBOARD, STACK} from './screens';
import {RootState} from '../redux/store';
import {CustomText} from '../components/atoms';
import * as instmintSession from '../helpers/sessionHelper';

//Screens
import DashboardScreen from '../screens/Dashboard';

//Stacks
import Stack from './Stack';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={DASHBOARD}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        options={{title: 'Dashboard'}}
        name={DASHBOARD}
        component={DashboardScreen}
      />
      <Drawer.Screen
        options={{title: 'Item'}}
        name={STACK}
        component={Stack}
      />
    </Drawer.Navigator>
  );
};

//Customizations
const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const {userSession} = useSelector((state: RootState) => state.session);
  const onLogoutPress = async () => {
    try {
      await instmintSession.clear();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.itemContainer}>
        <CustomText>{userSession.username}</CustomText>
      </View>
      <DrawerItemList {...props} />
      <View style={styles.itemContainer}>
        <Button icon="logout" onPress={onLogoutPress}>
          Logout
        </Button>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
});

export default DrawerNavigator;
