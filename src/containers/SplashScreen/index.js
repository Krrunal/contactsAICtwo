import {Image, Text, View} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Colors} from '../theme/Colors';
import {CommonActions} from '@react-navigation/native';
// import GeneralStatusBar from '../../components/statusbar/index';
import styles from './style';
import {useTheme} from '@react-navigation/native';

export default function Splash({navigation}) {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const textcolor = colors.textColor;
  const currentTheme = useSelector((state) => {
    return state.myDarMode;
  });

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  });
  // async componentDidMount() {
  //     this.timeoutHandle = setTimeout(async() => {
  //         this.props.navigation.dispatch(
  //             CommonActions.reset({
  //               index: 0,
  //               routes: [{ name: 'Login' }],
  //             })
  //         );
  //     }, 2000);
  // }

  return (
    <View style={[styles.container, {backgroundColor: colors.backColor}]}>
      {/* <GeneralStatusBar backgroundColor={Colors.transparent} barStyle="light-content" /> */}
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      <View style={styles.nameView}>
        <Text style={styles.text}> CONTACTS AIC </Text>
      </View>
      {/* <View style={styles.lineStyle}>
                </View> */}
    </View>
  );
}
