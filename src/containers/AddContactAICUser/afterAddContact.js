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
import info from '../../assets/icons/info.svg';
import logo from '../../assets/images/logo.png';
import rigthLogo from '../../assets/icons/contact.png'
import sideBar from '../../assets/images/sideBAR.png';
import styles from './afterAddContactStyle.js';

var {width, height} = Dimensions.get('window');

export default class Share extends Component {
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
              <Text style={styles.centerText}>Add Contacts AIC User(s)</Text>
            </View>
            <View style={styles.sidebarViewRight}>
              <Image source={rigthLogo} style={styles.sidebarStyle} />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.middleText}>Enter Contact's Username</Text>
        </View>
      </View>
    );
  }
  renderMiddle() {
    return (
     
      <View style={{alignItems: 'center'}}>
     
        <View style={{marginTop: Metrics.baseMargin}}>
          <View>
            <View>
              <Text style={styles.downText}>Username #1</Text>
            </View>

            <View style={styles.userView}>
              <TextInput
                placeholderTextColor={COLORS.main_text_color}
                style={styles.textInputViewSignup}
              />
            </View>
          </View>
        </View>
        <View style={{marginTop: Metrics.baseMargin}}>
          <View>
            <View>
              <Text style={styles.downText}>Username #2</Text>
            </View>

            <View style={styles.userView}>
              <TextInput
                placeholderTextColor={COLORS.main_text_color}
                style={styles.textInputViewSignup}
              />
            </View>
          </View>
        </View>
        <View style={{marginTop: Metrics.baseMargin}}>
          <View>
            <View>
              <Text style={styles.downText}>Username #3</Text>
            </View>

            <View style={styles.userView}>
              <TextInput
                placeholderTextColor={COLORS.main_text_color}
                style={styles.textInputViewSignup}
              />
            </View>
          </View>
        </View>
        <View style={{marginTop: Metrics.baseMargin}}>
          <View style={{marginBottom:Metrics.doubleBaseMargin}}>
            <View>
              <Text style={styles.downText}>Username #4</Text>
            </View>

            <View style={styles.userView}>
              <TextInput
                placeholderTextColor={COLORS.main_text_color}
                style={styles.textInputViewSignup}
              />
            </View>
          </View>
        </View>
      
      </View>
     
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
          <TouchableOpacity style={styles.Whiteview} onPress={this.forAddContactNavigate}>
            <Text style={{color: COLORS.main_text_color, fontFamily:'Roboto-Bold',
     fontSize: width * 0.045,
}}>Back</Text>
          </TouchableOpacity>
          <View style={styles.WhiteviewTwo}>
            <Text style={{color: COLORS.main_text_color, fontFamily:'Roboto-Bold',
     fontSize: width * 0.045,
}}>Next</Text>
          </View>
        </View>
      </View>
    );
  }
  forAddContactNavigate = () => {
    this.props.navigation.dispatch(
        CommonActions.navigate({
          name: 'AddContact',
          //routes: [{ name: 'Login' }],
        })
    );
}
  render() {
    return (
      <View style={styles.container}>
      
        {this.renderHeader()}
      
        {this.renderMiddle()}
   
        {this.renderLast()}
      
      </View>
    );
  }
}
