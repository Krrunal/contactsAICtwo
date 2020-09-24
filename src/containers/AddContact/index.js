import { CheckBox, Dimensions, Image, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, {Component} from 'react';

import {COLORS} from '../theme/Colors.js';
import Metrics from '../theme/Metrics';
import logo from '../../assets/images/logo.png';
import sideBar from '../../assets/images/sideBAR.png';
import styles from './style';

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
//screen.js



var {width,height} =  Dimensions.get('window');


export default class Add extends Component {
    renderHeader(){
        return(
            <View style={styles.blueView}>
                <View style={{width:width*0.8,flexDirection:'row'}}>
               <TouchableOpacity style={styles.sideBarView} onPress={() => this.props.navigation.openDrawer()}><Image source={sideBar} style={styles.sidebarStyle}/></TouchableOpacity> 
               <View style={styles.sidebarViewCenter}><Text style={styles.centerText}>Add Contact(s)</Text></View>
               <View style={styles.sidebarViewRight}><Image source={logo} style={styles.sidebarStyleRight}/></View>
                {/* <Text style={{textAlign:'center',fontSize:17,color:COLORS.white}}>Add Contact(s)</Text> */}
                {/* <View style={styles.left}><Image source={logo} style={styles.sidebarStyleRight}/></View> */}
                </View>
          </View>
        )
    }
    renderFirst(){
        return(
            <View style={styles.firstView}>
                <Text style={styles.firstText}>Add Contacts AIC User(s)</Text>
             </View> 
        )
    }
    renderSecond(){
        return(
            <View style={styles.SecondView}>
                <Text style={styles.firstText}>Add Contact Manually</Text>
             </View> 
        )
    }
    renderThird(){
        return(
            <View style={styles.SecondView}>
                <Text style={styles.firstText}>Import Contact(s) From My Device</Text>
             </View> 
        )
    }
    render(){
        return(
            <View style={styles.container}>
                {this.renderHeader()}
                {this.renderFirst()}
                {this.renderSecond()}
                {this.renderThird()}
            </View>
        )
    }
}