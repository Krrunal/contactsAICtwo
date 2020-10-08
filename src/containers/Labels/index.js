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
import {useDispatch, useSelector} from 'react-redux';

import {COLORS} from '../theme/Colors.js';
import {CommonActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Metrics from '../theme/Metrics';
import logo from '../../assets/images/logo.png';
import rigthLogo from '../../assets/icons/contact.png';
import sideBar from '../../assets/images/sideBAR.png';
import styles from './style.js';
import {useTheme} from '@react-navigation/native';

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

var {width, height} = Dimensions.get('window');
export default function labels({navigation}) {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const textcolor = colors.textColor;
  const ColorIcon = colors.iconColor;
  const currentTheme = useSelector((state) => {
    return state.myDarMode;
  });

  const manageLabelnavigate = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'ManageLable',
        //routes: [{ name: 'Login' }],
      }),
    );
  };

  return (
    <View style={[{flex: 1, backgroundColor: COLORS.white},{backgroundColor: colors.backColor}]}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.blueView}>
          <View style={{width: width * 0.9, flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.sideBarView}
              onPress={() => navigation.openDrawer()}>
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
      <ScrollView>
        <View style={{flex: 1, marginBottom: Metrics.smallMargin}}>
          <View style={styles.tripleView}>
            <Icon name={'arrows-alt-v'} size={15} color={ColorIcon} />
            <TouchableOpacity
              style={styles.manageView}
              onPress={manageLabelnavigate}>
              <Text style={styles.manageText}>Manage</Text>
            </TouchableOpacity>
            <Text style={[styles.tripleText, {color: colors.textColor}]}>Family</Text>
          </View>
          <View style={styles.tripleView}>
            <Icon name={'arrows-alt-v'} size={15} color={ColorIcon}/>
            <View style={styles.manageView}>
              <Text style={styles.manageText}>Manage</Text>
            </View>
            <Text style={[styles.tripleText, {color: colors.textColor}]}>Friend</Text>
          </View>
          <View style={styles.tripleView}>
            <Icon name={'arrows-alt-v'} size={15} color={ColorIcon} />
            <View style={styles.manageView}>
              <Text style={styles.manageText}>Manage</Text>
            </View>
            <Text style={[styles.tripleText, {color: colors.textColor}]}>Relative</Text>
          </View>
          <View style={styles.tripleView}>
            <Icon name={'arrows-alt-v'} size={15} color={ColorIcon}/>
            <View style={styles.manageView}>
              <Text style={styles.manageText}>Manage</Text>
            </View>
            <Text style={[styles.tripleText, {color: colors.textColor}]}>Universal Studio</Text>
          </View>
          <View style={styles.tripleView}>
            <Icon name={'arrows-alt-v'} size={15} color={ColorIcon}/>
            <View style={styles.manageView}>
              <Text style={styles.manageText}>Manage</Text>
            </View>
            <Text style={[styles.tripleText, {color: colors.textColor}]}>Sports Gambling Podcast</Text>
          </View>
          <View style={styles.tripleView}>
            <Icon name={'arrows-alt-v'} size={15} color={ColorIcon} />
            <View style={styles.manageView}>
              <Text style={styles.manageText}>Manage</Text>
            </View>
            <Text style={[styles.tripleText, {color: colors.textColor}]}>Green Inc.</Text>
          </View>
          <View style={styles.tripleView}>
            <Icon name={'arrows-alt-v'} size={15} color={ColorIcon} />
            <View style={styles.manageView}>
              <Text style={styles.manageText}>Manage</Text>
            </View>
            <Text style={[styles.tripleText, {color: colors.textColor}]}>No Label</Text>
          </View>
        </View>
      </ScrollView>
      <View style={{alignItems: 'center', flex: 1}}>
        <View
          style={{
            flex: 1,
            bottom: 20,
            position: 'absolute',
            flexDirection: 'row',
          }}>
          <View style={styles.Whiteview}>
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: 'Roboto-Bold',
                fontSize: width * 0.045,
              }}>
              Add
            </Text>
          </View>
          <View style={styles.WhiteviewTwo}>
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: 'Roboto-Bold',
                fontSize: width * 0.045,
              }}>
              Delete
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
