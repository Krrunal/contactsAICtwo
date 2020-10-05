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
import Metrics from '../theme/Metrics';
import edit from '../../assets/images/edit.png';
import logo from '../../assets/images/logo.png';
import outerimg from '../../assets/images/outerimg.png';
import plus from '../../assets/images/plus.png';
import reset from '../../assets/images/reset.png';
import sideBar from '../../assets/images/sideBAR.png';
import styles from './style.js';

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

var {width, height} = Dimensions.get('window');
export default class searchContact extends Component {
  state = {
    checked: false,
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
              <Text style={styles.centerText}>Manage Label</Text>
            </View>
            <View style={styles.sidebarViewRight}>
              <Image source={logo} style={styles.sidebarStyle} />
            </View>
          </View>
        </View>
      </View>
    );
  }
  renderMiddle() {
    return (
      <View style={{alignItems: 'center'}}>
        <View style={{paddingRight:Metrics.baseMargin,paddingLeft:Metrics.baseMargin,width:width*0.7}}>
        <Text style={{padding:Metrics.baseMargin,textAlign:'center'}}>Select which contacts you'd like to associate with the label:
        </Text>
        <Text style={{textAlign:'center'}}>Friend
        </Text>
        </View>

        <ScrollView>
          <View style={styles.mainView}>
            <View style={styles.quardView}>
            <CheckBox
                value={this.state.checked}
               
                onValueChange={() =>
                  this.setState({checked: !this.state.checked})
                }
                tintColors={{true: '#1374A3', false: '#000'}}
              />  
              <Text style={styles.personName}>Ron Aron</Text>
             
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
  renderLast(){
    return(
      <View style={{alignItems:'center',flex:1}}>
      <View style={{flex:1,bottom:20,position:"absolute",}}>
      <View style={styles.Whiteview}>
      <Text style={{color: COLORS.main_text_color}}> Save </Text>
      </View>
      </View>
    </View>
    )
  }
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
