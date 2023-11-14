//import liraries
import React, {Component, useState, useContext} from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import Input from '../../components/text-input';
import Button from '../../components/button/buttonComp';
import Colors from '../../services/constants/colors';
import Fonts from '../../services/constants/fonts';
import styles from './styles';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {PracContext} from '../../components/global-context/global';
// create a component
const RegisterScreen = () => {
  const {user, register} = useContext(PracContext);
  const validationSchema = Yup.object({
    fullname: Yup.string()
      .trim()
      .min(3, 'Invalid Name')
      .required('Name is required!'),
    phoneNo: Yup.string()
      .trim()
      .min(11, 'Invalid Phone Number')
      .required('Phone Number is required!'),
    email: Yup.string().email('Invalid Email!').required('Email is required!'),
    password: Yup.string()
      .trim()
      .min(8, 'Password is too short')
      .required('Password is required!'),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password')],
      'Password does not match!',
    ),
  });

  const userInfo = {
    fullname: '',
    phoneNo: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const registerUser = values => {
    console.log('user: ', values);
    const payload = {
      name: values.fullname,
      phone: values.phoneNo,
      email: values.email,
      password: values.password,
    };
    register(payload);
    console.log('myData:', user);
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={userInfo}
        validationSchema={validationSchema}
        onSubmit={(values, formikActions) => {
          console.log(values);
          registerUser(values);
          formikActions.resetForm();
          formikActions.setSubmitting(false);
        }}>
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => {
          const {fullname, phoneNo, email, password, confirmPassword} = values;

          // console.log('myVal', values);
          return (
            <>
              <Text style={styles.regTxtStyle}>Registration Form</Text>
              <Input
                style={styles.inputStyle}
                label="Name"
                error={touched.fullname && errors.fullname}
                placeholder="Name"
                value={fullname}
                onChangeText={handleChange('fullname')}
                onBlur={handleBlur('fullname')}
              />
              <Input
                label="Phone Number"
                error={touched.phoneNo && errors.phoneNo}
                style={styles.inputStyle}
                placeholder="Phone No"
                value={phoneNo}
                onChangeText={handleChange('phoneNo')}
                onBlur={handleBlur('phoneNo')}
              />
              <Input
                label="Email Address"
                error={touched.email && errors.email}
                style={styles.inputStyle}
                placeholder="Email"
                value={email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              <Input
                label="Password"
                error={touched.password && errors.password}
                style={styles.inputStyle}
                placeholder="Password"
                value={password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
              />
              <Input
                label="Confirm Password"
                error={touched.confirmPassword && errors.confirmPassword}
                style={styles.inputStyle}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
              />
              <Button
                title="Save"
                onPress={handleSubmit}
                submitting={isSubmitting}
              />
            </>
          );
        }}
      </Formik>
    </View>
  );
};

//make this component available to the app
export default RegisterScreen;
