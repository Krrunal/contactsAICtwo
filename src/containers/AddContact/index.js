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

import {COLORS} from '../theme/Colors.js';
import { CommonActions } from '@react-navigation/native';
import Metrics from '../theme/Metrics';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import logo from '../../assets/images/logo.png';
import rigthLogo from '../../assets/icons/contact.png'
import sideBar from '../../assets/images/sideBAR.png';
import styles from './style';

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
//screen.js

const Drawer = createDrawerNavigator();

var {width, height} = Dimensions.get('window');

export default class Add extends Component {
  renderHeader() {
    return (
      <View style={{alignItems: 'center'}}>
        <View style={styles.blueView}>
          <View style={{width: width * 0.9, flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.sideBarView}
              onPress={() => this.props.navigation.openDrawer()}
              >
              <Image source={sideBar} style={styles.sidebarStyle} />
            </TouchableOpacity>
            <View style={styles.sidebarViewCenter}>
              <Text style={styles.centerText}>Add Contact(s)</Text>
            </View>
            <View style={styles.sidebarViewRight}>
              <Image source={rigthLogo} style={styles.sidebarStyleRight} />
            </View>
            {/* <Text style={{textAlign:'center',fontSize:17,color:COLORS.white}}>Add Contact(s)</Text> */}
            {/* <View style={styles.left}><Image source={logo} style={styles.sidebarStyleRight}/></View> */}
          </View>
        </View>
      </View>
    );
  }
  renderFirst() {
    return (
      <TouchableOpacity style={styles.firstView} onPress={this.addContactNavigate}>
        <Text style={styles.firstText}>Add Contacts AIC User(s)</Text>
      </TouchableOpacity>
    );
  }
  addContactNavigate = () => {
    this.props.navigation.dispatch(
        CommonActions.navigate({
          name: 'chooseContactFromLabel',
          //routes: [{ name: 'Login' }],
        })
    );
}

  renderSecond() {
    return (
      <TouchableOpacity style={styles.SecondView} onPress={this.importmanuallyNavigate}>
        <Text style={styles.firstText}>Add Contact Manually</Text>
      </TouchableOpacity>
    );
  }
  // manuallyAddContact
  importmanuallyNavigate = () => {
    this.props.navigation.dispatch(
        CommonActions.navigate({
          name: 'addmanuallyContact',
          //routes: [{ name: 'Login' }],
        })
    );
}
  renderThird() {
    return (
      <TouchableOpacity style={styles.SecondView}>
        <Text style={styles.firstText} onPress={this.importNavigate} >
          Import Contact(s) From My Device</Text>
      </TouchableOpacity>
    );
  }
  importNavigate = () => {
    this.props.navigation.dispatch(
        CommonActions.navigate({
          name: 'ImportContacts',
          //routes: [{ name: 'Login' }],
        })
    );
}
  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <View style={{justifyContent: 'center', flex: 1}}>
          {this.renderFirst()}
          {this.renderSecond()}
          {this.renderThird()}
        </View>
      </View>
    );
  }
}
