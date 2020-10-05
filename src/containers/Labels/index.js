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
import Icon from 'react-native-vector-icons/FontAwesome5';
import Metrics from '../theme/Metrics';
import logo from '../../assets/images/logo.png';
import rigthLogo from '../../assets/icons/contact.png'
import sideBar from '../../assets/images/sideBAR.png';
import styles from './style.js';

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

var {width, height} = Dimensions.get('window');
export default class labels extends Component {
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
              <Image source={rigthLogo} style={styles.sidebarStyle} />
            </View>
          </View>
        </View>
      </View>
    );
  }
  renderMiddle() {
    return (
      <ScrollView>
        <View style={{flex: 1, marginBottom: Metrics.smallMargin}}>
          <View style={styles.tripleView}>
            <Icon name={'arrows-alt-v'} size={15} color={COLORS.transparent} />
            <TouchableOpacity style={styles.manageView} onPress={this.manageLabelnavigate}>
              <Text style={styles.manageText}>Manage</Text>
            </TouchableOpacity>
            <Text style={styles.tripleText}>Family</Text>
          </View>
          <View style={styles.tripleView}>
            <Icon name={'arrows-alt-v'} size={15} color={COLORS.transparent} />
            <View style={styles.manageView}>
              <Text style={styles.manageText}>Manage</Text>
            </View>
            <Text style={styles.tripleText}>Friend</Text>
          </View>
          <View style={styles.tripleView}>
            <Icon name={'arrows-alt-v'} size={15} color={COLORS.transparent} />
            <View style={styles.manageView}>
              <Text style={styles.manageText}>Manage</Text>
            </View>
            <Text style={styles.tripleText}>Relative</Text>
          </View>
          <View style={styles.tripleView}>
            <Icon name={'arrows-alt-v'} size={15} color={COLORS.transparent} />
            <View style={styles.manageView}>
              <Text style={styles.manageText}>Manage</Text>
            </View>
            <Text style={styles.tripleText}>Universal Studio</Text>
          </View>
          <View style={styles.tripleView}>
            <Icon name={'arrows-alt-v'} size={15} color={COLORS.transparent} />
            <View style={styles.manageView}>
              <Text style={styles.manageText}>Manage</Text>
            </View>
            <Text style={styles.tripleText}>Sports Gambling Podcast</Text>
          </View>
          <View style={styles.tripleView}>
            <Icon name={'arrows-alt-v'} size={15} color={COLORS.transparent} />
            <View style={styles.manageView}>
              <Text style={styles.manageText}>Manage</Text>
            </View>
            <Text style={styles.tripleText}>Green Inc.</Text>
          </View>
          <View style={styles.tripleView}>
            <Icon name={'arrows-alt-v'} size={15} color={COLORS.transparent} />
            <View style={styles.manageView}>
              <Text style={styles.manageText}>Manage</Text>
            </View>
            <Text style={styles.tripleText}>No Label</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
  manageLabelnavigate = () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: 'ManageLable',
        //routes: [{ name: 'Login' }],
      }),
    );
  };

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
          <View style={styles.Whiteview}>
            <Text style={{color: COLORS.main_text_color, fontFamily:'Roboto-Bold',
     fontSize: width * 0.045,
}}>Add</Text>
          </View>
          <View style={styles.WhiteviewTwo}>
            <Text style={{color: COLORS.main_text_color, fontFamily:'Roboto-Bold',
     fontSize: width * 0.045,
}}>Delete</Text>
          </View>
        </View>
      </View>
    );
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
