import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {PracContext} from '../../components/global-context/global';

const MyPracticeScreen = () => {
  const {user} = useContext(PracContext);
  return (
    <View>
      <Text>hello!! {user.name}</Text>
      <Text>Your phone no is: {user.phone}</Text>
      <Text>Your Email Address is: {user.email}</Text>
    </View>
  );
};

export default MyPracticeScreen;

const styles = StyleSheet.create({});
