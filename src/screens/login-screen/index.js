//import liraries
import React, {Component, useState, useContext} from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import Input from '../../components/text-input';
import Button from '../../components/button/buttonComp';
import styles from './styles';
import {PracContext} from '../../components/global-context/global';
// create a component
const LoginScreen = () => {
  const {user, setIsLoggedIn} = useContext(PracContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = () => {
    if (email == user.email) {
      setIsLoggedIn(true);
    }
  };
  return (
    <View style={styles.container}>
      <Input
        label="Email Address"
        style={styles.inputStyle}
        placeholder="Email"
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <Input
        label="Password"
        style={styles.inputStyle}
        placeholder="Password"
        value={password}
        onChangeText={value => setPassword(value)}
      />
      <Button title="Login" onPress={handleSubmit} />
    </View>
  );
};

//make this component available to the app
export default LoginScreen;
