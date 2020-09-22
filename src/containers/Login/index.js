/* eslint-disable no-undef */
// eslint-disable-next-line prettier/prettier
import { CheckBox, Image, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {COLORS} from '../theme/Colors.js';
import Metrics from '../theme/Metrics';
import innerimg from '../../assets/images/innerimg.png';
import logo from '../../assets/images/logo.png';
import outerimg from '../../assets/images/outerimg.png';
import styles from './style.js';

export default class Login extends Component {
state={
    checked:false,
    isKeyboardVisible: false,
}
rendeHeader(){

const { isKeyboardVisible } = this.state;
    if (!isKeyboardVisible) {
      return (
        <View style={{ paddingBottom: Metrics.ratio(50) }}>
            <View style={styles.logoView}>
            <Image source={logo} style={styles.logoImg} />
              <Text style={styles.logoText}>CONTACTS AIC</Text>
            </View>
         
        </View>
      );
    }
    return null;
}
    renderEmail(){
        return (

            <View style={styles.viewEmail}>
                <TextInput
                    placeholder={'Phone Number or username'}
                    placeholderTextColor={COLORS.main_text_color}
                    style={styles.textInputView}
                />
            </View>

        );
    }
    renderPassword(){
        return (

            <View style={styles.viewPassword}>
                <TextInput
                    placeholder={'Password'}
                    placeholderTextColor={COLORS.main_text_color}
                    style={styles.textInputView}
                />
            </View>

        );
    }
    renderLogin(){
        return (
         <TouchableOpacity style={styles.viewLogin}>
                <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>

        );
    }
    renderRemeberMe(){
        return(
            <View style={styles.rememberView}>
                  <CheckBox
                        value={this.state.checked}
                        onValueChange={() => this.setState({ checked: !this.state.checked })}
                        />
                        <Text style={styles.rememberText}>Remember Me</Text>
          </View>
        );
    }
    renderSignupInLogin(){
        return (
         <TouchableOpacity style={styles.signupInlogin}>
                <Text style={styles.loginText}>SIGN UP</Text>
            </TouchableOpacity>

        );
    }
  render() {
    return (
        <ScrollView>
      <View style={styles.container}>
          {this.rendeHeader()}
          {this.renderEmail()}
          {this.renderPassword()}
          {this.renderLogin()}
          {this.renderRemeberMe()}
          
          <View style={styles.lineStyle}>
               <View style={styles.lineView}></View> 
               <Text style={styles.orText}>OR</Text>
               <View style={styles.lineViewTwo}></View> 
  
             </View>
         {this.renderSignupInLogin()}
      </View>
      </ScrollView>
    );
  }
}
