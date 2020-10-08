import * as actions from '../../services/Actions';

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
import {DarkTheme, DefaultTheme} from '@react-navigation/native';
import React, {Component, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {COLORS} from '../theme/Colors.js';
import CheckTwo from '../../checkTwo';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Metrics from '../theme/Metrics';
import {changeTheme} from '../../services/Actions/CheckAction';
import {checkbox} from '../../services/Actions/index';
import info from '../../assets/icons/info.svg';
import logo from '../../assets/images/logo.png';
import rigthLogo from '../../assets/icons/contact.png';
import sideBar from '../../assets/images/sideBAR.png';
import styles from './style.js';
import {useTheme} from '@react-navigation/native';

var {width, height} = Dimensions.get('window');

export default function display({navigation}) {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const textcolor = colors.textColor;
  const currentTheme = useSelector((state) => {
    return state.myDarMode;
  });
  const customDarkTheme = useSelector((state) => {
    return state.myDarMode;
  });
  const customDefaultTheme = useSelector((state) => {
    return state.myDarMode;
  });

  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checked5, setChecked5] = React.useState(false);
  const [checked6, setChecked6] = React.useState(false);
  const [checked7, setChecked7] = React.useState(false);

 const checkToggle = () => {
   alert('hi')
    //   checked4 == true
    //   ? ({setChecked4: false, setChecked5: true})
    //   : ({setChecked4: true, setChecked5: false});

    //   checked5 == false
    // ? ({ setChecked5: true })
    // : ({ setChecked5: false })
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.backColor}]}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.blueView}>
          <View style={{width: width * 0.9, flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.sideBarView}
              onPress={() => navigation.openDrawer()}>
              <Image source={sideBar} style={styles.sidebarStyle} />
            </TouchableOpacity>
            <View style={styles.sidebarViewCenter}>
              <Text style={styles.centerText}>Display</Text>
            </View>
            <TouchableOpacity
              style={styles.sidebarViewRight}
              onPress={() =>
                dispatch({type: 'change_theme', payload: !currentTheme})
              }
              >
              <Image source={rigthLogo} style={styles.sidebarStyle} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.middleView}>
        <View style={styles.FirstView}>
          <Text style={[styles.boldText, {color: textcolor}]}>
            Sort Contacts by:
          </Text>
          <View style={styles.checkView}>
            <CheckBox
              value={checked}
              onValueChange={() => {
                setChecked(!checked);
              }}
              tintColors={{true: '#1374A3', false: '#000'}}
            />
            <Text style={[styles.normalText, {color: textcolor}]}>
              First Name
            </Text>
          </View>
          <View style={styles.checkViewtwo}>
            <CheckBox
              value={checked1}
              onValueChange={() => {
                setChecked1(!checked1);
              }}
              tintColors={{true: '#1374A3', false: '#000'}}
            />

            <Text style={[styles.normalText, {color: textcolor}]}>
              Last Name
            </Text>
          </View>
        </View>
        <View style={styles.FirstView}>
          <Text style={[styles.boldText, {color: textcolor}]}>
            Display Contact's Name by
          </Text>
          <View style={styles.checkView}>
            <CheckBox
              value={checked2}
              onValueChange={() => {
                setChecked2(!checked2);
              }}
              tintColors={{true: '#1374A3', false: '#000'}}
            />
            <Text style={[styles.normalText, {color: textcolor}]}>
              First Name First
            </Text>
          </View>
          <View style={styles.checkViewtwo}>
            <CheckBox
              value={checked3}
              onValueChange={() => {
                setChecked3(!checked3);
              }}
              tintColors={{true: '#1374A3', false: '#000'}}
            />
            <Text style={[styles.normalText, {color: textcolor}]}>
              Last Name Last
            </Text>
          </View>
        </View>
        <View style={styles.FirstView}>
          <Text style={[styles.boldText, {color: textcolor}]}>Night Mode</Text>

          <View style={styles.checkView}>
            <CheckBox
              value={checked4}
              onValueChange={() => {
                dispatch({type: 'change_theme', payload:  !customDarkTheme
                })
              }}
              // onPress={() =>
              //   dispatch({type: 'change_theme', payload: !currentTheme})
              // }
              tintColors={{true: '#1374A3', false: '#000'}}
            />

            <Text style={[styles.normalText, {color: textcolor}]}>On</Text>
          </View>
          <View style={styles.checkViewtwo}>
            <CheckBox
              value={checked5}
              onValueChange={() => {
                dispatch({type: 'change_theme', payload:! customDefaultTheme
                })
              }}
              tintColors={{true: '#1374A3', false: '#000'}}
            />
            <Text style={[styles.normalText, {color: textcolor}]}>Off</Text>
          </View>
        </View>
        <View style={styles.FirstView}>
          <Text style={[styles.boldText, {color: textcolor}]}>
            Export Dates to Calendar
          </Text>
          <View style={styles.checkView}>
            <CheckBox
              value={checked6}
              onValueChange={() => {
                setChecked6(!checked6);
              }}
              tintColors={{true: '#1374A3', false: '#000'}}
            />
            <Text style={[styles.normalText, {color: textcolor}]}>On</Text>
          </View>
          <View style={styles.checkViewtwo}>
            <CheckBox
              value={checked7}
              onValueChange={() => {
                setChecked7(!checked7);
              }}
              tintColors={{true: '#1374A3', false: '#000'}}
            />
            <Text style={[styles.normalText, {color: textcolor}]}>Off</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
