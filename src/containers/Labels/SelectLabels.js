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
import Icon from 'react-native-vector-icons/FontAwesome5';
import Metrics from '../theme/Metrics';
import logo from '../../assets/images/logo.png';
import sideBar from '../../assets/images/sideBAR.png';
import styles from './style.js';

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

var {width, height} = Dimensions.get('window');
export default class Selectlabels extends Component {
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
              <Text style={styles.centerText}>Labels</Text>
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
      <ScrollView>
        <View style={{flex: 1,marginBottom:Metrics.smallMargin}}>
          <View style={styles.tripleView}>
          <CheckBox
                value={this.state.checked}
               
                onValueChange={() =>
                  this.setState({checked: !this.state.checked})
                }
                tintColors={{true: '#1374A3', false: '#000'}}
              />    
            <View style={styles.manageView}>
              <Text>Manage</Text>
            </View>
            <Text style={styles.tripleText}>Family</Text>
          </View>
          <View style={styles.tripleView}>
          <CheckBox
                value={this.state.checked}
               
                onValueChange={() =>
                  this.setState({checked: !this.state.checked})
                }
                tintColors={{true: '#1374A3', false: '#000'}}
              />           
               <View style={styles.manageView}>
              <Text>Manage</Text>
            </View>
            <Text style={styles.tripleText}>Friend</Text>
          </View>
          <View style={styles.tripleView}>
          <CheckBox
                value={this.state.checked}
               
                onValueChange={() =>
                  this.setState({checked: !this.state.checked})
                }
                tintColors={{true: '#1374A3', false: '#000'}}
              />                
              <View style={styles.manageView}>
              <Text>Manage</Text>
            </View>
            <Text style={styles.tripleText}>Relative</Text>
          </View>
          <View style={styles.tripleView}>
          <CheckBox
                value={this.state.checked}
               
                onValueChange={() =>
                  this.setState({checked: !this.state.checked})
                }
                tintColors={{true: '#1374A3', false: '#000'}}
              />    
            <View style={styles.manageView}>
              <Text>Manage</Text>
            </View>
            <Text style={styles.tripleText}>Universal Studio</Text>
          </View>
          <View style={styles.tripleView}>
            <CheckBox
                value={this.state.checked}
               
                onValueChange={() =>
                  this.setState({checked: !this.state.checked})
                }
                tintColors={{true: '#1374A3', false: '#000'}}
              />    
            <View style={styles.manageView}>
              <Text>Manage</Text>
            </View>
            <Text style={styles.tripleText}>Sports Gambling prodcast</Text>
          </View>
          <View style={styles.tripleView}>
          <CheckBox
                value={this.state.checked}
               
                onValueChange={() =>
                  this.setState({checked: !this.state.checked})
                }
                tintColors={{true: '#1374A3', false: '#000'}}
              />    
            <View style={styles.manageView}>
              <Text>Manage</Text>
            </View>
            <Text style={styles.tripleText}>Green Inc.</Text>
          </View>
          <View style={styles.tripleView}>
          <CheckBox
                value={this.state.checked}
               
                onValueChange={() =>
                  this.setState({checked: !this.state.checked})
                }
                tintColors={{true: '#1374A3', false: '#000'}}
              />    
            <View style={styles.manageView}>
              <Text>Manage</Text>
            </View>
            <Text style={styles.tripleText}>No Label</Text>
          </View>
        </View>
        
      </ScrollView>
    );
  }
  renderLast(){
    return(
      <View style={{alignItems:'center',flex:1}}>
      <View style={{flex:1,bottom:20,position:"absolute",flexDirection:'row'}}>
      <View style={styles.Whiteview}>
      <Text style={{color: COLORS.main_text_color}}>Add</Text>
      </View>
      <View style={styles.WhiteviewTwo}>
      <Text style={{color: COLORS.main_text_color}}>Delete</Text>
      </View>
      </View>
    </View>
    )
  }
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
