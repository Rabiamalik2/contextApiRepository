//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../services/constants/colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import styles from './styles';
// create a component
const Touchable = ({propOne, propTwo}) => {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setSelected(!selected)}
      style={{
        borderColor: selected ? Colors.black : Colors.lightGrey,
        borderWidth: responsiveHeight(0.2),
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveWidth(20),
        height: responsiveHeight(4),
        marginLeft: responsiveHeight(1),
        // marginTop: responsiveHeight(-5),
        borderRadius: responsiveHeight(6),
      }}>
      <Text
        style={{
          fontSize: responsiveFontSize(1.8),
          color: Colors.black,
          fontWeight: '400',
        }}>
        US 6
      </Text>
    </TouchableOpacity>
  );
};

//make this component available to the app
export default Touchable;
