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
import React, {Component} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {COLORS} from '../theme/Colors.js';
import {CommonActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Metrics from '../theme/Metrics';
import info from '../../assets/icons/info.svg';
import logo from '../../assets/images/logo.png';
import rigthLogo from '../../assets/icons/contact.png';
import sideBar from '../../assets/images/sideBAR.png';
import styles from './style.js';
import {useTheme} from '@react-navigation/native';

var {width, height} = Dimensions.get('window');

export default function AddContactAICUser({navigation}) {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const textcolor = colors.textColor;
  const currentTheme = useSelector((state) => {
    return state.myDarMode;
  });

  const byLabelNavigate = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'manuallyAddContact',
        //routes: [{ name: 'Login' }],
      }),
    );
  };
  const manuallyAddNavigate = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'forAddContact',
        //routes: [{ name: 'Login' }],
      }),
    );
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
              <Text style={styles.centerText}>Add Contact AIC User(s)</Text>
            </View>
            <View style={styles.sidebarViewRight}>
              <Image source={rigthLogo} style={styles.sidebarStyle} />
            </View>
          </View>
        </View>
      </View>
      <View>
        <View style={{alignItems: 'center', marginTop: Metrics.baseMargin}}>
          <TouchableOpacity style={styles.Whiteview} onPress={byLabelNavigate}>
            <Text style={styles.blueText}>QR Code</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Whiteview}
            onPress={manuallyAddNavigate}>
            <Text style={styles.blueText}>Username</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
