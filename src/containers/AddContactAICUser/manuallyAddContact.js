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
import styles from './style.js';

var {width, height} = Dimensions.get('window');
  
  export default class manuallyAddContact extends Component {
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
                <Text style={styles.centerText}>Add Contact AIC User(s)</Text>
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
        <View>
          <View style={{alignItems: 'center',marginTop:Metrics.baseMargin}}>
            <View style={styles.Whiteview}>
              <Text style={styles.blueText}>Scan QR Code</Text>
            </View>
            <TouchableOpacity style={styles.Whiteview} onPress={this.manuallyAddNavigate}>
              <Text style={styles.blueText}>Enter Contact Username</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    manuallyAddNavigate = () => {
      this.props.navigation.dispatch(
          CommonActions.navigate({
            name: 'forAdd2',
            //routes: [{ name: 'Login' }],
          })
      );
  }
  
    render() {
      return (
        <View style={styles.container}>
          {this.renderHeader()}
          {this.renderMiddle()}
        </View>
      );
    }
  }
  