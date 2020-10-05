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
}from 'react-native';
import React, {Component, useState} from 'react';

import {COLORS} from '../theme/Colors.js';
import Metrics from '../theme/Metrics';
import logo from '../../assets/images/logo.png';
import rigthLogo from '../../assets/icons/contact.png'
import sideBar from '../../assets/images/sideBAR.png';
import styles from './style.js';

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

var {width, height} = Dimensions.get('window');
export default class pendingRequest extends Component {
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
              <Text style={styles.centerText}>Pending Requests</Text>
            </View>
            <View style={styles.sidebarViewRight}>
              <Image source={rigthLogo} style={styles.sidebarStyle} />
            </View>
          </View>
        </View>
        <Text style={styles.textMiddle}>
          The following users are requesting to be added to your contacts list
        </Text>
      </View>
    );
  }
  renderMiddle() {
    return (
      <View style={{alignItems: 'center'}}>
        <View style={styles.whiteBigView}>
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
                  <Text style={styles.showText}>Username_1</Text>
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
                  <Text style={styles.showText}>Phone Number_1</Text>
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
                  <Text style={styles.showText}>First Name Last Name</Text>
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
    );
  }
  renderLast(){
    return(
      <View style={{alignItems:'center',flex:1}}>
      <View style={{flex:1,bottom:20,position:"absolute",}}>
      <View style={styles.Whiteview}>
      <Text style={{color: COLORS.main_text_color, fontFamily:'Roboto-Bold',
  fontSize: width * 0.045,}}>Add Contacts</Text>
      </View>
      </View>
    </View>
    )
  }
  render() {
    return (
      <View style={{flex:1,backgroundColor: COLORS.white}}>
        {this.renderHeader()}
        {this.renderMiddle()}
        {/* {this.renderLast()} */}
      </View>
    );
  }
}
