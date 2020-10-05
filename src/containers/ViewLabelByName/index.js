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
import Icon from 'react-native-vector-icons/FontAwesome5';
import Metrics from '../theme/Metrics';
import info from '../../assets/icons/info.svg';
import logo from '../../assets/images/logo.png';
import sideBar from '../../assets/images/sideBAR.png';
import styles from './style.js';

var {width, height} = Dimensions.get('window');

export default class ViewLabelByName extends Component {
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
              <Text style={styles.centerText}>View Labels </Text>
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
      <View style={styles.doubleView}>
        
        <View style={styles.smallWhiteView}>
          <Text style={styles.blueText}>Contact</Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <View style={styles.smallBlueView}>
            <Text style={styles.whiteText}>Label</Text>
          </View>
        </View>
      </View>
    );
  }
  renderBigView() {
    return (
      <View>
        <ScrollView>
          <View style={{alignItems: 'center'}}>
            <View style={styles.middleView}>
              <View style={styles.firstView}>
                <Text style={styles.secondText}> Shelly blimpoton</Text>
                <Text style={styles.secondText}> debrah</Text>
              </View>
              <View style={styles.secondView}>
                <Text style={styles.FirstText}>Friends </Text>
              </View>
            </View>
            <View style={styles.middleView}>
              <View style={styles.firstView}>
                <Text style={styles.secondText}> Shelly blimpoton</Text>
                <Text style={styles.secondText}> debrah</Text>
                <Text style={styles.secondText}> Shelly blimpoton</Text>
                <Text style={styles.secondText}> debrah</Text>
              </View>
              <View style={styles.secondView}>
                <Text style={styles.FirstText}>Universal Studio</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderMiddle()}
        {this.renderBigView()}
      </View>
    );
  }
}
