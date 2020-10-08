/* eslint-disable no-undef */
// eslint-disable-next-line prettier/prettier
import {
  CheckBox,
  Image,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {COLORS} from '../theme/Colors.js';
import {CommonActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Metrics from '../theme/Metrics';
import {TouchableHighlight} from 'react-native-gesture-handler';
import checked from '../../assets/icons/checked.png';
import innerimg from '../../assets/images/innerimg.png';
import logo from '../../assets/images/logo.png';
import outerimg from '../../assets/images/outerimg.png';
import styles from './style.js';
import unchecked from '../../assets/icons/unchecked.png';
import {useTheme} from '@react-navigation/native';

// const {colors} = useTheme();
export default function Login({navigation}) {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const textcolor = colors.textColor;
  const currentTheme = useSelector((state) => {
    return state.myDarMode;
  });
  const [checked, setChecked, show, setShow] = useState(false);

  // const showPassword = () => {
  //   show ?  setShow = true : setShow = false
  // };

  const showPassword = () => {
    show == false ? {show: true} : {show: false};
  };

  //   check = () => {
  //     this.state.checked == false
  //     ? this.setState({ checked: true })
  //     : this.setState({ checked: false })
  // }

  const navigate = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Signup',
        //routes: [{ name: 'Login' }],
      }),
    );
  };

  return (
    <ScrollView style={styles.mainStyle}>
      <View style={[styles.container, {backgroundColor: colors.backColor}]}>
        <View style={styles.headerView}>
          <Image source={logo} style={styles.logoImg} />
          <Text style={styles.logoText}>CONTACTS AIC</Text>
        </View>
        <View style={styles.viewEmail}>
          <TextInput
            placeholderTextColor={COLORS.main_text_color}
            style={styles.textInputView}
            autoCapitalize="none"
            placeholder="Phone Number or Username"
            keyboardType="default"
            // value={this.state.email}
            // onChangeText={(value) => this.setState({ email: value })}
            // ref={input => { this.email = input }}
            // onFocus={()=>this.setState({ emailError: null })}
          />
        </View>
        <View style={styles.viewPassword}>
          <TextInput
            placeholderTextColor={COLORS.main_text_color}
            style={styles.passwordInputView}
            autoCapitalize="none"
            placeholder="Password"
            keyboardType="default"
            secureTextEntry={show == false ? true : false}
            // value={this.state.email}
          />
          <View style={styles.eyeView}>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={showPassword}>
              {show == false ? (
                <Icon
                  name="eye-slash"
                  size={18}
                  color={COLORS.main_text_color}
                />
              ) : (
                <Icon name="eye" size={18} color={COLORS.main_text_color} />
              )}
            </TouchableHighlight>
          </View>
        </View>
        <TouchableOpacity style={styles.viewLogin}>
          <Text style={styles.loginText}>LOG IN</Text>
        </TouchableOpacity>
        <View style={styles.rememberView}>
          <CheckBox
            value={checked}
            onValueChange={setChecked}
            tintColors={{true: '#1374A3', false: '#000'}}
          />
          <Text style={[styles.rememberText, {color: colors.textColor}]}>
            Remember Me
          </Text>
        </View>
        <View style={styles.lineStyle}>
          <View style={styles.lineView}></View>
          <Text style={styles.orText}>OR</Text>
          <View style={styles.lineViewTwo}></View>
        </View>
        <TouchableOpacity style={styles.signupInlogin} onPress={navigate}>
          <Text style={styles.loginText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
