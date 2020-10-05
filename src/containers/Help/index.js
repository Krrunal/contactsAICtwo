import {CheckBox, Dimensions, Image, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';

import {COLORS} from '../theme/Colors.js';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Metrics from '../theme/Metrics';
import info from '../../assets/icons/info.svg'
import logo from '../../assets/images/logo.png';
import rigthLogo from '../../assets/icons/contact.png'
import sideBar from '../../assets/images/sideBAR.png'
import styles from './style.js';

var {width,height} =  Dimensions.get('window');

export default class Help extends Component {
    renderHeader(){
        return(
        <View style={styles.blueView}>
             <View style={{width:width*0.9,flexDirection:'row'}}>
             <TouchableOpacity style={styles.sideBarView} onPress={() => this.props.navigation.openDrawer()}><Image source={sideBar} style={styles.sidebarStyle}/></TouchableOpacity> 
             <View style={styles.sidebarViewCenter}><Text style={styles.centerText}>Help</Text></View>
             <View style={styles.sidebarViewRight}><Image source={rigthLogo} style={styles.sidebarStyle}/></View>

            </View>
          </View>
        )
    }
    render(){
        return(
            <View style={styles.container}>
                {this.renderHeader()}
            </View>
        )
    }
}