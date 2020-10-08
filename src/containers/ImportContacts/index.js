import {
  CheckBox,
  Dimensions,
  Image,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {COLORS} from '../theme/Colors.js';
// import { CheckBox } from 'react-native-paper'
import {CommonActions} from '@react-navigation/native';
import Metrics from '../theme/Metrics';
import logo from '../../assets/images/logo.png';
import rigthLogo from '../../assets/icons/contact.png';
import sideBar from '../../assets/images/sideBAR.png';
import styles from './style.js';
import {useTheme} from '@react-navigation/native';

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

var {width, height} = Dimensions.get('window');
export default function importContact({navigation}) {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const textcolor = colors.textColor;
  const currentTheme = useSelector((state) => {
    return state.myDarMode;
  });
  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  
  const importnavigate = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'SerachEditContact',
        //routes: [{ name: 'Login' }],
      }),
    );
  };
  // SerachEditContact

  return (
    <View
      style={[
        {flex: 1, backgroundColor: COLORS.white},
        {backgroundColor: colors.backColor},
      ]}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.blueView}>
          <View style={{width: width * 0.9, flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.sideBarView}
              onPress={() => navigation.openDrawer()}>
              <Image source={sideBar} style={styles.sidebarStyle} />
            </TouchableOpacity>
            <View style={styles.sidebarViewCenter}>
              <Text style={styles.centerText}>Import Contacts</Text>
            </View>
            <View style={styles.sidebarViewRight}>
              <Image source={rigthLogo} style={styles.sidebarStyle} />
            </View>
          </View>
        </View>
        <Text style={styles.textMiddle}>Import Contact(s) from Device</Text>
      </View>
      <View style={{alignItems: 'center', height: height * 0.55}}>
        <ScrollView style={{marginTop: Metrics.smallMargin}}>
          <View
            style={[styles.whiteBigView, {backgroundColor: colors.backColor}]}>
            <View style={{}}>
              <View style={styles.checkboxView}>
                <CheckBox
                  value={checked}
                  onValueChange={() => {
                    setChecked(!checked);
                  }}
                  tintColors={{true: '#1374A3', false: '#000'}}
                />

                <Text style={[styles.showText, {color: colors.textColor}]}>
                  Select (De-select) All
                </Text>
              </View>
              <View></View>

              <View style={{flex: 1}}>
                <View style={styles.checkboxViewTwo}>
                  <CheckBox
                    value={checked1}
                    onValueChange={() => {
                      setChecked1(!checked1);
                    }}
                    tintColors={{true: '#1374A3', false: '#000'}}
                  />
                  <Text style={[styles.showText, {color: colors.textColor}]}>
                    Ron Aron
                  </Text>
                </View>
                <View style={styles.checkboxView}>
                  <CheckBox
                    value={checked2}
                    onValueChange={() => {
                      setChecked2(!checked2);
                    }}
                    tintColors={{true: '#1374A3', false: '#000'}}
                  />
                  <Text style={[styles.showText, {color: colors.textColor}]}>
                    Shelly Blimton
                  </Text>
                </View>
                <View style={styles.checkboxView}>
                  <CheckBox
                    value={checked3}
                    onValueChange={() => {
                      setChecked3(!checked3);
                    }}
                    tintColors={{true: '#1374A3', false: '#000'}}
                  />
                  <Text style={[styles.showText, {color: colors.textColor}]}>
                    Arnold Brosser
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{alignItems: 'center', flex: 1}}>
        <View style={{flex: 1, bottom: 10, position: 'absolute'}}>
          <TouchableOpacity style={styles.Whiteview} onPress={importnavigate}>
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: 'Roboto-Bold',
                fontSize: width * 0.045,
              }}>
              Import
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
