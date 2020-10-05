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
import logo from '../../assets/images/logo.png';
import rigthLogo from '../../assets/icons/contact.png';
import sideBar from '../../assets/images/sideBAR.png';
import styles from './style.js';

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

var {width, height} = Dimensions.get('window');
export default class importContact extends Component {
  state = {
    checked: false,
    checked1: false,
    checked2: false,
    checked3: false,
  };
  selectAll() {
    const {checked, checked1, checked2, checked3} = this.state;
    if (this.state.checked == true) {
      this.state.checked1 = true;
      this.state.checked2 = true;
      this.state.checked3 = true;
    } else if (this.state.checked == false) {
      this.state.checked1 = false;
      this.state.checked2 = false;
      this.state.checked3 = false;
    }
  }
  selectOne() {
    const {checked, checked1, checked2, checked3} = this.state;
    if (this.state.checked1 == true) {
      this.state.checked1 = false;
    } else if ((this.state.checked1 = false)) {
      this.state.checked1 = true;
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
              <Text style={styles.centerText}>Import Contacts</Text>
            </View>
            <View style={styles.sidebarViewRight}>
              <Image source={rigthLogo} style={styles.sidebarStyle} />
            </View>
          </View>
        </View>
        <Text style={styles.textMiddle}>Import Contacts(s) from Device</Text>
      </View>
    );
  }
  renderMiddle() {
    return (
      <View style={{alignItems: 'center', height:height*0.550,}}>
  <ScrollView style={{ marginTop:Metrics.smallMargin,}}>

        <View style={styles.whiteBigView}>
          <View style={{}}>
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

            <View style={{flex: 1}}>
              <View style={styles.checkboxViewTwo}>
                <CheckBox
                  value={this.state.checked1}
                  // onPress={this.selectOne()}
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
                <Text style={styles.showText}>Arnold Brosser</Text>
              </View>
              <View style={styles.checkboxViewTwo}>
                <CheckBox
                  value={this.state.checked1}
                  // onPress={this.selectOne()}
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
                <Text style={styles.showText}>Arnold Brosser</Text>
              </View>
              <View style={styles.checkboxViewTwo}>
                <CheckBox
                  value={this.state.checked1}
                  // onPress={this.selectOne()}
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
                <Text style={styles.showText}>Arnold Brosser</Text>
              </View>
              <View style={styles.checkboxViewTwo}>
                <CheckBox
                  value={this.state.checked1}
                  // onPress={this.selectOne()}
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
                <Text style={styles.showText}>Arnold Brosser</Text>
              </View>
            </View>
          </View>
        </View>
        </ScrollView>
      </View>
    );
  }
  renderLast() {
    return (
      <View style={{alignItems: 'center', flex: 1}}>
        <View style={{flex: 1, bottom: 10, position: 'absolute'}}>
          <TouchableOpacity style={styles.Whiteview}  onPress={this.importnavigate}
>
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
    );
  }
  importnavigate = () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: 'SerachEditContact',
        //routes: [{ name: 'Login' }],
      }),
    );
  };
  // SerachEditContact
  render() {
    return (
      <View style={{flex: 1, backgroundColor: COLORS.white}}>
        {this.renderHeader()}
        {this.renderMiddle()}
        {this.renderLast()}
      </View>
    );
  }
}
