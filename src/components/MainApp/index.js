import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {PracContext, PracProvider} from '../global-context/global';
import MyPracticeScreen from '../../screens/practice-screen';
import LoginScreen from '../../screens/login-screen';
import RegisterScreen from '../../screens/register-screen';

const MainApp = () => {
  //   const {user} = useContext(PracContext);
  const {user, isLoggedin} = useContext(PracContext);
  console.log('App:', user);
  return (
    <>
      {!user.email ? (
        <RegisterScreen />
      ) : isLoggedin ? (
        <MyPracticeScreen />
      ) : (
        <LoginScreen />
      )}
    </>
  );
};

export default MainApp;

const styles = StyleSheet.create({});
