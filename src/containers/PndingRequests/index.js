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
import Metrics from '../theme/Metrics';
import logo from '../../assets/images/logo.png';
import rigthLogo from '../../assets/icons/contact.png';
import sideBar from '../../assets/images/sideBAR.png';
import styles from './style.js';
import {useTheme} from '@react-navigation/native';

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

var {width, height} = Dimensions.get('window');
export default function pendingRequest  ({navigation}) {
      
  
  
    const {colors} = useTheme();
    const dispatch = useDispatch();
    const textcolor = colors.textColor
    const currentTheme = useSelector((state) => {
      return state.myDarMode;
    });
  
 
    return (
      <View style={[{flex: 1, backgroundColor: COLORS.white},{backgroundColor: colors.backColor}]}>
        <View style={{alignItems: 'center'}}>
        <View style={styles.blueView}>
          <View style={{width: width * 0.9, flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.sideBarView}
              onPress={() => navigation.openDrawer()}>
              <Image source={sideBar} style={styles.sidebarStyle} />
            </TouchableOpacity>
            <View style={styles.sidebarViewCenter}>
              <Text style={styles.centerText}>Pending Requests</Text>
            </View>
            <View style={styles.sidebarViewRight}>
              <Image source={rigthLogo} style={styles.sidebarStyle} />
            </View>
          </View>
        </View>
        <Text style={[styles.textMiddle, {color: colors.textColor}]}>
          The following users are requesting to be added to your contacts list
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={[styles.whiteBigView,{backgroundColor: colors.backColor}]}>
          <View style={{marginTop: Metrics.doubleBaseMargin}}>
            {/* <View style={styles.checkboxView}>
              <CheckBox
                value={this.state.checked}
              
                onValueChange={() =>
                  this.setState({checked: !this.state.checked})
                }
                tintColors={{true: '#1374A3', false: '#000'}}
              />
              <Text style={styles.showText}>Select All</Text>
            </View> */}

            <ScrollView>
              <View style={{flex: 1}}>
                <View style={styles.checkboxViewTwo}>
                  {/* <CheckBox
                    value={this.state.checked1}
                    onValueChange={() =>
                      this.setState({checked1: !this.state.checked1})
                    }
                    tintColors={{true: '#1374A3', false: '#000'}}
                  /> */}
                  <Text style={[styles.showText, {color: colors.textColor}]}>Username_1</Text>
                  <View style={styles.twoWhiteView}>
                    <View style={styles.smallWhiteView}>
                      <Text style={styles.smallText}>Accept</Text>
                    </View>
                    <View style={styles.smallWhiteView}>
                      <Text style={styles.smallText}>Deny</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.checkboxView}>
                  {/* <CheckBox
                    value={this.state.checked2}
                    onValueChange={() =>
                      this.setState({checked2: !this.state.checked2})
                    }
                    tintColors={{true: COLORS.main_text_color, false: '#000'}}
                  /> */}
                  <Text style={[styles.showText, {color: colors.textColor}]}>Phone Number_1</Text>
                  <View style={styles.twoWhiteView}>
                    <View style={styles.smallWhiteView}>
                      <Text style={styles.smallText}>Accept</Text>
                    </View>
                    <View style={styles.smallWhiteView}>
                      <Text style={styles.smallText}>Deny</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.checkboxView}>
                  {/* <CheckBox
                    value={this.state.checked3}
                    onValueChange={() =>
                      this.setState({checked3: !this.state.checked3})
                    }
                    tintColors={{true: '#1374A3', false: '#000'}}
                  /> */}
                  <Text style={[styles.showText, {color: colors.textColor}]}>First Name Last Name</Text>
                  <View style={styles.twoWhiteView}>
                    <View style={styles.smallWhiteView}>
                      <Text style={styles.smallText}>Accept</Text>
                    </View>
                    <View style={styles.smallWhiteView}>
                      <Text style={styles.smallText}>Deny</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
        {/* <View style={{alignItems: 'center', flex: 1}}>
          <View style={{flex: 1, bottom: 20, position: 'absolute'}}>
            <View style={styles.Whiteview}>
              <Text
                style={{
                  color: COLORS.main_text_color,
                  fontFamily: 'Roboto-Bold',
                  fontSize: width * 0.045,
                }}>
                Add Contacts
              </Text>
            </View>
          </View>
        </View> */}
      </View>
    );
  }

