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
import logo from '../../assets/images/logo.png';
import rigthLogo from '../../assets/icons/contact.png';
import sideBar from '../../assets/images/sideBAR.png';
import styles from './forContactStyle.js';
import {useTheme} from '@react-navigation/native';

var {width, height} = Dimensions.get('window');

export default function forAddContact({navigation}) {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const textcolor = colors.textColor;
  const currentTheme = useSelector((state) => {
    return state.myDarMode;
  });
  // onPress={this.afterContactNavigate}
  const afterContactNavigate = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'manuallyAddContact',
        //routes: [{ name: 'Login' }],
      }),
    );
  };

  const forAddContactNavigate = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'manuallyAddContact',
        //routes: [{ name: 'Login' }],
      }),
    );
  };

  const backtNavigate = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'manuallyAddContact',
        //routes: [{ name: 'Login' }],
      }),
    );
  };
  const finishtNavigate = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'AddContact',
        //routes: [{ name: 'Login' }],
      }),
    );
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.backColor}]}>
      <View>
        <View style={styles.blueView}>
          <View style={{width: width * 0.9, flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.sideBarView}
              onPress={() => navigation.openDrawer()}>
              <Image source={sideBar} style={styles.sidebarStyle} />
            </TouchableOpacity>
            <View style={styles.sidebarViewCenter}>
              <Text style={styles.centerText}>Add Contacts AIC User(s)</Text>
            </View>
            <View style={styles.sidebarViewRight}>
              <Image source={rigthLogo} style={styles.sidebarStyle} />
            </View>
          </View>
        </View>
        <View style={styles.TopView}>
          <View style={styles.topOne}>
            <Text style={[styles.sizeText,{color:colors.textColor}]}>Contact(s) to Add </Text>
          </View>
          <View style={styles.toptwo}>
            <Text style={[styles.sizeText,{color:colors.textColor}]}>Label (s)</Text>
          </View>
        </View>
      </View>
      <View style={styles.WhiteBigview}>
        <TouchableOpacity style={styles.textLeft}>
          <Text style={styles.sizeText}>[ USER NAME ]</Text>
        </TouchableOpacity>
        <View style={styles.textRigh}>
          <Text style={[styles.sizeTextSmall,{color:colors.textcolor}]}>
            Sport Gambling Podcast {' \n'}
            Green Inc.
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.SmallMiddle}
          onPress={forAddContactNavigate}>
          <Text
            style={{
              fontSize: width * 0.035,
              fontFamily: 'Roboto-Bold',
              fontSize: width * 0.045,
            }}>
            Add Contact
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', flex: 1}}>
        <View
          style={{
            flex: 1,
            bottom: 20,
            position: 'absolute',
            flexDirection: 'row',
          }}>
          <TouchableOpacity style={styles.Whiteview} onPress={backtNavigate}>
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: 'Roboto-Bold',
                fontSize: width * 0.045,
              }}>
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.WhiteviewTwo}
            onPress={finishtNavigate}>
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: 'Roboto-Bold',
                fontSize: width * 0.045,
              }}>
              Finish
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
