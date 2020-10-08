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
import {NavigationContainer, useTheme} from '@react-navigation/native';
import React, {Component} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';

import {COLORS} from '../theme/Colors.js';
import CheckTwo from '../../checkTwo';
import {CommonActions} from '@react-navigation/native';
import Metrics from '../theme/Metrics';
import {bindActionCreators} from 'redux';
import logo from '../../assets/images/logo.png';
import rigthLogo from '../../assets/icons/contact.png';
import sideBar from '../../assets/images/sideBAR.png';
import styles from './style';

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
//screen.js

var {width, height} = Dimensions.get('window');
export default function Add({navigation}) {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const textcolor = colors.textColor;
  const currentTheme = useSelector((state) => {
    return state.myDarMode;
  });

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
              <Text style={styles.centerText}>Add Contact(s)</Text>
            </View>

            <TouchableOpacity style={styles.sidebarViewRight}>
              <Image source={rigthLogo} style={styles.sidebarStyleRight} />
            </TouchableOpacity>
            {/* <Text style={{textAlign:'center',fontSize:17,color:COLORS.white}}>Add Contact(s)</Text> */}
            {/* <View style={styles.left}><Image source={logo} style={styles.sidebarStyleRight}/></View> */}
          </View>
        </View>
      </View>

      <View style={{justifyContent: 'center', flex: 1}}>
        <TouchableOpacity
          style={styles.firstView}
          onPress={() => navigation.navigate('chooseContactFromLabel')}>
          <Text style={styles.firstText}>Add Contacts AIC User(s)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.SecondView}
          onPress={() => navigation.navigate('addmanuallyContact')}>
          <Text style={styles.firstText}>Add Contact Manually</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SecondView}>
          <Text
            style={styles.firstText}
            onPress={() => navigation.navigate('ImportContacts')}>
            Import Contact(s) From My Device
          </Text>
        </TouchableOpacity>
        {/* {this.renderFirst()}
          {this.renderSecond()}
          {this.renderThird()} */}
      </View>
    </View>
  );
}
