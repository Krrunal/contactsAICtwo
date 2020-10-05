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
import edit from '../../assets/images/edit.png';
import logo from '../../assets/images/logo.png';
import outerimg from '../../assets/images/outerimg.png';
import plus from '../../assets/images/plus.png';
import reset from '../../assets/images/reset.png';
import rigthLogo from '../../assets/icons/contact.png';
import sideBar from '../../assets/images/sideBAR.png';
import styles from './style.js';

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

var {width, height} = Dimensions.get('window');
export default class searchContact extends Component {
  renderHeader() {
    return (
      <View style={{alignItems: 'center'}}>
        <View style={styles.blueView}>
          <View style={{width: width * 0.9, flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.sideBarView}
              onPress={() => this.props.navigation.openDrawer()}>
              <Image source={sideBar} style={styles.sidebarStyle} />
            </TouchableOpacity>
            <View style={styles.sidebarViewCenter}>
              <Text style={styles.centerText}>Search Contacts</Text>
            </View>
            <View style={styles.sidebarViewRight}>
              <Image source={rigthLogo} style={styles.sidebarStyle} />
            </View>
          </View>
        </View>
      </View>
    );
  }
  renderMiddle() {
    return (
      <View style={styles.scrollStyle}>
        <ScrollView style={{marginTop: Metrics.doubleBaseMargin}}>
          <View style={styles.mainView}>
            <View style={styles.quardView}>
              <Image source={outerimg} style={styles.outerImgStyle} />
              <Text style={styles.personName}>Ron Aron</Text>
              <Image source={edit} style={styles.editImgStyle} />
              <Image source={reset} style={styles.resetImgStyle} />
            </View>
            <View style={styles.quardView}>
              <Image source={outerimg} style={styles.outerImgStyle} />
              <Text style={styles.personName}>Shelly Blimton</Text>
              <Image source={edit} style={styles.editImgStyle} />
              <Image source={reset} style={styles.resetImgStyle} />
            </View>
            <View style={styles.quardView}>
              <Image source={outerimg} style={styles.outerImgStyle} />
              <Text style={styles.personName}>Arnold Brosser</Text>
              <Image source={edit} style={styles.editImgStyle} />
              <Image source={reset} style={styles.resetImgStyle} />
            </View>
            <View style={styles.quardView}>
              <Image source={outerimg} style={styles.outerImgStyle} />
              <Text style={styles.personName}>Catherine Charcoal</Text>
              <Image source={edit} style={styles.editImgStyle} />
              <Image source={reset} style={styles.resetImgStyle} />
            </View>
            <View style={styles.quardView}>
              <Image source={outerimg} style={styles.outerImgStyle} />
              <Text style={styles.personName}>Amanda Hornberger </Text>
              <Image source={edit} style={styles.editImgStyle} />
              <Image source={reset} style={styles.resetImgStyle} />
            </View>
            <View style={styles.quardView}>
              <Image source={outerimg} style={styles.outerImgStyle} />
              <Text style={styles.personName}>Ron Aron</Text>
              <Image source={edit} style={styles.editImgStyle} />
              <Image source={reset} style={styles.resetImgStyle} />
            </View>
            <View style={styles.quardView}>
              <Image source={outerimg} style={styles.outerImgStyle} />
              <Text style={styles.personName}>Shelly Blimton</Text>
              <Image source={edit} style={styles.editImgStyle} />
              <Image source={reset} style={styles.resetImgStyle} />
            </View>
            <View style={styles.quardView}>
              <Image source={outerimg} style={styles.outerImgStyle} />
              <Text style={styles.personName}>Arnold Brosser</Text>
              <Image source={edit} style={styles.editImgStyle} />
              <Image source={reset} style={styles.resetImgStyle} />
            </View>
            <View style={styles.quardView}>
              <Image source={outerimg} style={styles.outerImgStyle} />
              <Text style={styles.personName}>Catherine Charcoal</Text>
              <Image source={edit} style={styles.editImgStyle} />
              <Image source={reset} style={styles.resetImgStyle} />
            </View>
            <View style={styles.quardView}>
              <Image source={outerimg} style={styles.outerImgStyle} />
              <Text style={styles.personName}>Amanda Hornberger </Text>
              <Image source={edit} style={styles.editImgStyle} />
              <Image source={reset} style={styles.resetImgStyle} />
            </View>
            <View style={styles.quardView}>
              <Image source={outerimg} style={styles.outerImgStyle} />
              <Text style={styles.personName}>Ron Aron</Text>
              <Image source={edit} style={styles.editImgStyle} />
              <Image source={reset} style={styles.resetImgStyle} />
            </View>
            <View style={styles.quardView}>
              <Image source={outerimg} style={styles.outerImgStyle} />
              <Text style={styles.personName}>Shelly Blimton</Text>
              <Image source={edit} style={styles.editImgStyle} />
              <Image source={reset} style={styles.resetImgStyle} />
            </View>
            <View style={styles.quardView}>
              <Image source={outerimg} style={styles.outerImgStyle} />
              <Text style={styles.personName}>Arnold Brosser</Text>
              <Image source={edit} style={styles.editImgStyle} />
              <Image source={reset} style={styles.resetImgStyle} />
            </View>
            <View style={styles.quardView}>
              <Image source={outerimg} style={styles.outerImgStyle} />
              <Text style={styles.personName}>Catherine Charcoal</Text>
              <Image source={edit} style={styles.editImgStyle} />
              <Image source={reset} style={styles.resetImgStyle} />
            </View>
            <View style={styles.quardView}>
              <Image source={outerimg} style={styles.outerImgStyle} />
              <Text style={styles.personName}>Amanda Hornberger </Text>
              <Image source={edit} style={styles.editImgStyle} />
              <Image source={reset} style={styles.resetImgStyle} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
  renderLast() {
    return (
      <View
        style={{
          alignItems: 'flex-end',
          flex: 1,
          marginRight: Metrics.baseMargin,
        }}>
        <View style={{flex: 1, bottom: 20, position: 'absolute'}}>
          <TouchableOpacity style={styles.Whiteview}   onPress={this.plusnavigate}>
            <Image
              source={plus}
              style={styles.plusStyle}
            
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  plusnavigate = () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: 'AddContactAICUser',
        //routes: [{ name: 'Login' }],
      }),
    );
  };

  render() {
    return (
      <View style={{backgroundColor: COLORS.white, flex: 1}}>
        {this.renderHeader()}

        {this.renderMiddle()}

        {this.renderLast()}
      </View>
    );
  }
}
