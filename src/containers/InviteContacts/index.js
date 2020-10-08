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
import {CommonActions} from '@react-navigation/native';
import Metrics from '../theme/Metrics';
import {TouchableHighlight} from 'react-native-gesture-handler';
import logo from '../../assets/images/logo.png';
import rigthLogo from '../../assets/icons/contact.png';
import sideBar from '../../assets/images/sideBAR.png';
import styles from './style.js';
import {useTheme} from '@react-navigation/native';

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

var {width, height} = Dimensions.get('window');
export default function InviteContact({navigation}) {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const textcolor = colors.textColor;
  const currentTheme = useSelector((state) => {
    return state.myDarMode;
  });

  const invitenavigate = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'afterSentInvite',
        //routes: [{ name: 'Login' }],
      }),
    );
  };

  return (
    <View style={[{backgroundColor: COLORS.white, flex: 1},{backgroundColor: colors.backColor}]}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.blueView}>
          <View style={{width: width * 0.9, flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.sideBarView}
              onPress={() => navigation.openDrawer()}>
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
            marginTop: Metrics.baseMargin,
            fontFamily: 'Roboto-Light',
            fontSize: width * 0.04,
          }}>
          Invite People to join Contacts AIC
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={[styles.whiteBigView,{backgroundColor: colors.backColor}]}>
          <View style={{marginTop: Metrics.doubleBaseMargin}}>
            <View style={styles.checkboxView}>
              <CheckBox
                // value={this.state.checked}
                // onValueChange={() =>
                //   this.setState({checked: !this.state.checked})
                // }
                tintColors={{true: '#1374A3', false: '#000'}}
              />
              <Text style={[styles.showText, {color: colors.textColor}]}>Select (De-select) All</Text>
            </View>
            <View></View>

            <ScrollView style={[{height: height * 0.5},{backgroundColor: colors.backColor}]}>
              <View style={[{flex: 1},{backgroundColor: colors.backColor}]}>
                <View style={styles.checkboxViewTwo}>
                  <CheckBox
                    // value={this.state.checked1}
                    // onValueChange={() =>
                    //   this.setState({checked1: !this.state.checked1})
                    // }
                    tintColors={{true: '#1374A3', false: '#000'}}
                  />
                  <Text style={[styles.showText, {color: colors.textColor}]}>Ron Aron</Text>
                </View>
                <View style={styles.checkboxView}>
                  <CheckBox
                    // value={this.state.checked2}
                    // onValueChange={() =>
                    //   this.setState({checked2: !this.state.checked2})
                    // }
                    tintColors={{true: COLORS.main_text_color, false: '#000'}}
                  />
                  <Text style={[styles.showText, {color: colors.textColor}]}>Shelly Blimton</Text>
                </View>
                <View style={styles.checkboxView}>
                  <CheckBox
                    // value={this.state.checked3}
                    // onValueChange={() =>
                    //   this.setState({checked3: !this.state.checked3})
                    // }
                    tintColors={{true: '#1374A3', false: '#000'}}
                  />
                  <Text style={[styles.showText, {color: colors.textColor}]}>Arnoid Broser</Text>
                </View>
                <View style={styles.checkboxView}>
                  <CheckBox
                    // value={this.state.checked4}
                    // onValueChange={() =>
                    //   this.setState({checked4: !this.state.checked4})
                    // }
                    tintColors={{true: '#1374A3', false: '#000'}}
                  />
                  <Text style={[styles.showText, {color: colors.textColor}]}>catherine</Text>
                </View>
                <View style={styles.checkboxView}>
                  <CheckBox
                    // value={this.state.checked5}
                    // onValueChange={() =>
                    //   this.setState({checked5: !this.state.checked5})
                    // }
                    tintColors={{true: '#1374A3', false: '#000'}}
                  />
                  <Text style={[styles.showText, {color: colors.textColor}]}>Debra Evans</Text>
                </View>
                <View style={styles.checkboxView}>
                  <CheckBox
                    // value={this.state.checked6}
                    // onValueChange={() =>
                    //   this.setState({checked6: !this.state.checked6})
                    // }
                    tintColors={{true: '#1374A3', false: '#000'}}
                  />
                  <Text style={[styles.showText, {color: colors.textColor}]}>Lizzatte Frankin</Text>
                </View>
                <View style={styles.checkboxView}>
                  <CheckBox
                    // value={this.state.checked7}
                    // onValueChange={() =>
                    //   this.setState({checked7: !this.state.checked7})
                    // }
                    tintColors={{true: '#1374A3', false: '#000'}}
                  />
                  <Text style={[styles.showText, {color: colors.textColor}]}>Louis Gossett</Text>
                </View>
                <View style={styles.checkboxView}>
                  <CheckBox
                    // value={this.state.checked8}
                    // onValueChange={() =>
                    //   this.setState({checked8: !this.state.checked8})
                    // }
                    tintColors={{true: '#1374A3', false: '#000'}}
                  />
                  <Text style={[styles.showText, {color: colors.textColor}]}>Amaanda Hornberger</Text>
                </View>
                <View style={styles.checkboxView}>
                  <CheckBox
                    // value={this.state.checked8}
                    // onValueChange={() =>
                    //   this.setState({checked8: !this.state.checked8})
                    // }
                    tintColors={{true: '#1374A3', false: '#000'}}
                  />
                  <Text style={[styles.showText, {color: colors.textColor}]}>Amaanda Hornberger</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center', flex: 1}}>
      <View style={{alignItems: 'center', flex: 1}}>
        <View style={{flex: 1, bottom: 10, position: 'absolute'}}>
          <TouchableOpacity style={styles.Whiteview} onPress={invitenavigate}>
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: 'Roboto-Bold',
                fontSize: width * 0.045,
              }}>
              Invite
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </View>
  );
}
