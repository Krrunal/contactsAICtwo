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

import {COLORS} from '../theme/Colors.js';
import {CommonActions} from '@react-navigation/native';
import Metrics from '../theme/Metrics';
import logo from '../../assets/images/logo.png';
import rigthLogo from '../../assets/icons/contact.png';
import sideBar from '../../assets/images/sideBAR.png';
import styles from './style.js';

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

var {width, height} = Dimensions.get('window');
export default class afterSentInvite extends Component {
  renderHeader() {
    return (
      <View style={{alignItems: 'center', flex: 1}}>
        <View style={styles.blueView}>
          <View style={{width: width * 0.9, flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.sideBarView}
              onPress={() => this.props.navigation.openDrawer()}>
              <Image source={sideBar} style={styles.sidebarStyle} />
            </TouchableOpacity>
            <View style={styles.sidebarViewCenter}>
              <Text style={styles.centerText}>Invite Contacts</Text>
            </View>
            <View style={styles.sidebarViewRight}>
              <Image source={rigthLogo} style={styles.sidebarStyle} />
            </View>
          </View>
        </View>
        <Text
          style={{
            marginTop: Metrics.xdoubleBaseMargin,
            fontFamily: 'Roboto-Bold',
            fontSize: width * 0.04,
          }}>
          Invite(s) Sent
        </Text>
        <View style={{marginTop: Metrics.doubleBaseMargin}}>
          <TouchableOpacity style={styles.Whiteview} onPress={this.oknavigate}>
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: 'Roboto-Bold',
                fontSize: width * 0.045,
              }}>
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  oknavigate = () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: 'Invite',
        //routes: [{ name: 'Login' }],
      }),
    );
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: COLORS.white}}>
        {this.renderHeader()}
      </View>
    );
  }
}
