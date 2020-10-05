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
import Icon from 'react-native-vector-icons/FontAwesome5';
import Metrics from '../theme/Metrics';
import logo from '../../assets/images/logo.png';
import rigthLogo from '../../assets/icons/contact.png';
import sideBar from '../../assets/images/sideBAR.png';
import styles from './forAdd2Style.js';

var {width, height} = Dimensions.get('window');
  
  export default class forAdd2 extends Component {
    renderHeader() {
      return (
        <View>
          <View style={styles.blueView}>
            <View style={{width: width * 0.9, flexDirection: 'row'}}>
              <TouchableOpacity
                style={styles.sideBarView}
                onPress={() => this.props.navigation.openDrawer()}
                >
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
              <Text style={styles.sizeText}>Contacts(s) to Add </Text>
            </View>
            <View style={styles.toptwo}>
              <Text style={styles.sizeText}>Label (s)</Text>
            </View>
          </View>
        </View>
      );
    }
    renderMiddle() {
      return (
        <View>
        <View style={styles.WhiteBigview} >
          <TouchableOpacity style={styles.textLeft} >
            <Text style={styles.sizeText}>[ USER NAME ]</Text>
          </TouchableOpacity>
          <View style={styles.textRigh}>
            <Text style={styles.sizeTextSmall}>
              Sport Gambling Podcast {' \n'}
              Green Inc.
            </Text>
          </View>
          
        </View>
        <View style={styles.WhiteBigview} >
          <TouchableOpacity style={styles.textLeft} >
            <Text style={styles.sizeText}>[ USER NAME 2 ]</Text>
          </TouchableOpacity>
          <View style={styles.textRigh}>
            <Text style={styles.sizeTextSmall}>
              Sport Gambling Podcast {' \n'}
              Green Inc.
            </Text>
          </View>
          
        </View>
        </View>
      );
    }
    // onPress={this.afterContactNavigate}
    afterContactNavigate = () => {
      this.props.navigation.dispatch(
          CommonActions.navigate({
            name: 'manuallyAddContact',
            //routes: [{ name: 'Login' }],
          })
      );
  }
    renderView() {
      return (
        <View>
          <TouchableOpacity style={styles.SmallMiddle} onPress={this.forAddContactNavigate}>
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
      );
    }
    forAddContactNavigate = () => {
      this.props.navigation.dispatch(
          CommonActions.navigate({
            name: 'SerachEditContact',
            //routes: [{ name: 'Login' }],
          })
      );
  }
    renderLast() {
      return (
        <View style={{alignItems: 'center', flex: 1}}>
          <View
            style={{
              flex: 1,
              bottom: 20,
              position: 'absolute',
              flexDirection: 'row',
            }}>
            <TouchableOpacity style={styles.Whiteview} onPress={this.backtNavigate}>
              <Text
                style={{
                  color: COLORS.main_text_color,
                  fontFamily: 'Roboto-Bold',
                  fontSize: width * 0.045,
                }}>
                Back
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.WhiteviewTwo} onPress={this.finishtNavigate}>
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
      );
    }
    backtNavigate = () => {
      this.props.navigation.dispatch(
          CommonActions.navigate({
            name: 'manuallyAddContact',
            //routes: [{ name: 'Login' }],
          })
      );
  }
  finishtNavigate = () => {
    this.props.navigation.dispatch(
        CommonActions.navigate({
          name: 'SerachEditContact',
          //routes: [{ name: 'Login' }],
        })
    );
  }
    render() {
      return (
        <View style={styles.container}>
          {this.renderHeader()}
          {this.renderMiddle()}
          {this.renderView()}
          {this.renderLast()}
        </View>
      );
    }
  }
  