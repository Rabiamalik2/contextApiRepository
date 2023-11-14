import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RouteNames from '../constants/route-names';
import AppNavigation from './app-nav/app-navigation';
import AuthNavigation from './auth-nav/auth-navigation';
import TabNavigation from './app-nav/tab-navigation';
import myShoppingData from '../../components/shopping-flatList/myShoppingData';
import {useSelector, useDispatch} from 'react-redux';
import {addToProduct} from '../redux/reducers/product-reducer';
const {navigatorNames} = RouteNames;
const Stack = createNativeStackNavigator();
const options = {
  headerShown: false,
};

const MainNavigation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    myShoppingData.map(item => {
      dispatch(addToProduct(item));
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={navigatorNames.appNavigator}
        screenOptions={options}>
        <Stack.Screen
          name={navigatorNames.appNavigator}
          component={AppNavigation}
        />
        <Stack.Screen
          name={navigatorNames.authNavigator}
          component={AuthNavigation}
        />
        <Stack.Screen
          name={navigatorNames.tabNavigator}
          component={TabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigation;
