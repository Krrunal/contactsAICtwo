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
import { CommonActions } from '@react-navigation/native';
import Metrics from '../theme/Metrics';
import { TouchableHighlight } from 'react-native-gesture-handler';
import logo from '../../assets/images/logo.png';
import rigthLogo from '../../assets/icons/contact.png';
import sideBar from '../../assets/images/sideBAR.png';
import styles from './style.js';

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

var {width, height} = Dimensions.get('window');
export default class InviteContact extends Component {
  state = {
    checked: false,
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
    checked8: false,
    checked9: false,
    checked10: false,
  };
  selectAll() {
    const {checked, checked1, checked2, checked3} = this.state;
    if (this.state.checked == true) {
      this.state.checked1 = true;
      this.state.checked2 = true;
      this.state.checked3 = true;
      this.state.checked4 = true;
      this.state.checked5 = true;
      this.state.checked6 = true;
      this.state.checked7 = true;
      this.state.checked8 = true;
    } else {
      this.state.checked1 = false;
      this.state.checked2 = false;
      this.state.checked3 = false;
      this.state.checked4 = false;
      this.state.checked5 = false;
      this.state.checked6 = false;
      this.state.checked7 = false;
      this.state.checked8 = false;
    }
  }
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
    );
  }
  renderMiddle() {
    const {checked, checked1, checked2, checked3} = this.state;
    return (
      <View style={{alignItems: 'center'}}>
        <View style={styles.whiteBigView}>
          <View style={{marginTop: Metrics.doubleBaseMargin}}>
            <View style={styles.checkboxView}>
              <CheckBox
                value={this.state.checked}
                onPress={this.selectAll()}
                onValueChange={() =>
                  this.setState({checked: !this.state.checked})
                }
                tintColors={{true: '#1374A3', false: '#000'}}
              />
              <Text style={styles.showText}>Select (De-select) All</Text>
            </View>
            <View></View>

            <ScrollView style={{height: height * 0.5}}>
              <View style={{flex: 1}}>
                <View style={styles.checkboxViewTwo}>
                  <CheckBox
                    value={this.state.checked1}
                    onValueChange={() =>
                      this.setState({checked1: !this.state.checked1})
                    }
                    tintColors={{true: '#1374A3', false: '#000'}}
                  />
                  <Text style={styles.showText}>Ron Aron</Text>
                </View>
                <View style={styles.checkboxView}>
                  <CheckBox
                    value={this.state.checked2}
                    onValueChange={() =>
                      this.setState({checked2: !this.state.checked2})
                    }
                    tintColors={{true: COLORS.main_text_color, false: '#000'}}
                  />
                  <Text style={styles.showText}>Shelly Blimton</Text>
                </View>
                <View style={styles.checkboxView}>
                  <CheckBox
                    value={this.state.checked3}
                    onValueChange={() =>
                      this.setState({checked3: !this.state.checked3})
                    }
                    tintColors={{true: '#1374A3', false: '#000'}}
                  />
                  <Text style={styles.showText}>Arnoid Broser</Text>
                </View>
                <View style={styles.checkboxView}>
                  <CheckBox
                    value={this.state.checked4}
                    onValueChange={() =>
                      this.setState({checked4: !this.state.checked4})
                    }
                    tintColors={{true: '#1374A3', false: '#000'}}
                  />
                  <Text style={styles.showText}>catherine</Text>
                </View>
                <View style={styles.checkboxView}>
                  <CheckBox
                    value={this.state.checked5}
                    onValueChange={() =>
                      this.setState({checked5: !this.state.checked5})
                    }
                    tintColors={{true: '#1374A3', false: '#000'}}
                  />
                  <Text style={styles.showText}>Debra Evans</Text>
                </View>
                <View style={styles.checkboxView}>
                  <CheckBox
                    value={this.state.checked6}
                    onValueChange={() =>
                      this.setState({checked6: !this.state.checked6})
                    }
                    tintColors={{true: '#1374A3', false: '#000'}}
                  />
                  <Text style={styles.showText}>Lizzatte Frankin</Text>
                </View>
                <View style={styles.checkboxView}>
                  <CheckBox
                    value={this.state.checked7}
                    onValueChange={() =>
                      this.setState({checked7: !this.state.checked7})
                    }
                    tintColors={{true: '#1374A3', false: '#000'}}
                  />
                  <Text style={styles.showText}>Louis Gossett</Text>
                </View>
                <View style={styles.checkboxView}>
                  <CheckBox
                    value={this.state.checked8}
                    onValueChange={() =>
                      this.setState({checked8: !this.state.checked8})
                    }
                    tintColors={{true: '#1374A3', false: '#000'}}
                  />
                  <Text style={styles.showText}>Amaanda Hornberger</Text>
                </View>
                <View style={styles.checkboxView}>
                  <CheckBox
                    value={this.state.checked8}
                    onValueChange={() =>
                      this.setState({checked8: !this.state.checked8})
                    }
                    tintColors={{true: '#1374A3', false: '#000'}}
                  />
                  <Text style={styles.showText}>Amaanda Hornberger</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
  renderLast() {
    return (
      <View style={{alignItems: 'center', flex: 1}}>
        <View style={{flex: 1, marginBottom: Metrics.doubleBaseMargin}}>
          <TouchableOpacity style={styles.Whiteview} onPress={this.invitenavigate}>
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
    );
  }
  invitenavigate = () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: 'afterSentInvite',
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
