import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RouteNames from '../../constants/route-names';
// import appRoutes from '../../constants/route-names';
import {TabRoutes} from '../../../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
const Tab = createBottomTabNavigator();
const screenOptions = {
  showIcon: true,
  tabBarHideOnKeyboard: true,
  tabBarShowLabel: false,
  headerShown: false,
  tabBarInactiveTintColor: Colors.lightGrey,
  tabBarActiveTintColor: Colors.lightGrey1,
  tabBarStyle: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderTopRadius: 30,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: responsiveHeight(8),
    backgroundColor: Colors.white,
    // background: Colors.darkGrey,
  },
};
const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={RouteNames.tabRoutes.homeScreen}
        component={TabRoutes.HomeScreen}
        options={{
          tabBarIcon: ({focused, tintColor, color}) => {
            focused = {focused};
            return (
              <View style={{display: 'flex', justifyContent: 'center'}}>
                <MaterialCommunityIcons
                  name="home"
                  height={responsiveHeight(5)}
                  width={responsiveWidth(10)}
                  color={color}
                  style={{
                    fontSize: responsiveFontSize(3),
                    fontFamily: Fonts.poppinsExtraBold,
                    textAlign: 'center',
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={RouteNames.tabRoutes.shopScreen}
        component={TabRoutes.ShopScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <View style={{display: 'flex', justifyContent: 'center'}}>
                <AntDesign
                  name="appstore1"
                  height={responsiveHeight(5)}
                  width={responsiveWidth(12)}
                  color={color}
                  style={{
                    fontSize: responsiveFontSize(3),
                    fontFamily: Fonts.poppinsExtraBold,
                    textAlign: 'center',
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={RouteNames.tabRoutes.wishlistScreen}
        component={TabRoutes.WishlistScreen}
        options={{
          tabBarIcon: ({color}) => {
            return (
              <View style={{display: 'flex', justifyContent: 'center'}}>
                <FontAwesome
                  name="heart"
                  height={responsiveHeight(5)}
                  width={responsiveWidth(10)}
                  color={color}
                  style={{
                    fontSize: responsiveFontSize(3),
                    fontFamily: Fonts.poppinsExtraBold,
                    textAlign: 'center',
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={RouteNames.tabRoutes.cartScreen}
        component={TabRoutes.CartScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View style={{display: 'flex', justifyContent: 'center'}}>
                <FontAwesome
                  name="shopping-cart"
                  height={responsiveHeight(5)}
                  width={responsiveWidth(10)}
                  color={color}
                  style={{
                    fontSize: responsiveFontSize(3),
                    fontFamily: Fonts.poppinsExtraBold,
                    textAlign: 'center',
                  }}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;
