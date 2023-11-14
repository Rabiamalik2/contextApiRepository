import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppRoutes} from '../../../screens';
import {TabRoutes} from '../../../screens';
import RouteNames from '../../constants/route-names';
import TabNavigation from './tab-navigation';
const {appRoutes, tabRoutes} = RouteNames;
const Stack = createNativeStackNavigator();
const options = {
  headerShown: false,
};
const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen
        name={appRoutes.welcomeScreen}
        component={AppRoutes.WelcomeScreen}
      />
      <Stack.Screen
        name={appRoutes.profileScreen}
        component={AppRoutes.ProfileScreen}
      />
      <Stack.Screen
        name={appRoutes.productScreen}
        component={AppRoutes.ProductScreen}
      />
    </Stack.Navigator>
  );
};
export default AppNavigation;
