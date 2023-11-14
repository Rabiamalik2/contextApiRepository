//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import Colors from '../../services/constants/colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
// create a component
const Input = React.forwardRef((props, ref) => {
  const [hidePassword, setHidePassword] = useState(props.password);
  return (
    <View>
      {props.search && <AntDesign name="search1" style={styles.searchIcon} />}
      <Text
        style={{
          fontWeight: 'bold',
          color: Colors.black,
          fontSize: responsiveFontSize(2),
          marginLeft: responsiveHeight(2),
          // margin: responsiveHeight(0.6),
        }}>
        {props.label}
      </Text>

      <TextInput
        {...props}
        autoCapitalize={props.autoCapitalize}
        value={props.value}
        ref={ref}
        label={props.label}
        onSubmitEditing={props.onSubmitEditting}
        returnKeyType={props.returnKeyType}
        onChangeText={props.onChangeText}
        secureTextEntry={hidePassword}
        placeholder={props.placeholder}
        placeholderTextColor={Colors.darkGrey}
        style={[styles.input, props.style]}
      />
      {props.error ? (
        <Text
          style={{
            color: Colors.red,
            margin: responsiveHeight(0.5),
            marginLeft: responsiveHeight(2),
          }}>
          {props.error}
        </Text>
      ) : null}
      {props.password && (
        <Entypo
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
          name={hidePassword ? 'eye' : 'eye-with-line'}
          style={styles.icon1S}
        />
      )}
    </View>
  );
});

//make this component available to the app
export default Input;
