import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../services/constants/colors';
import Fonts from '../../services/constants/fonts';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
const SubmitButton = ({title, submitting, onPress}) => {
  const backgroundColor = submitting ? Colors.darkGrey : Colors.lightGrey;
  return (
    <TouchableOpacity
      style={[styles.btnSaveTo, {backgroundColor}]}
      onPress={!submitting ? onPress : null}>
      <Text style={styles.btnSaveStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  btnSaveTo: {
    margin: responsiveHeight(5),
    height: responsiveHeight(7),
    width: responsiveWidth(40),
    borderWidth: responsiveHeight(0.3),
    borderRadius: responsiveHeight(2),
    backgroundColor: Colors.lightGrey,
    borderColor: Colors.black,
  },
  btnSaveStyle: {
    margin: responsiveHeight(0.7),
    fontFamily: Fonts.proximaNovaExtraBold,
    fontWeight: '700',
    color: Colors.black,
    alignSelf: 'center',
    fontSize: responsiveFontSize(4),
  },
});
