/* eslint-disable no-undef */
// eslint-disable-next-line prettier/prettier
import {
  CheckBox,
  Image,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {COLORS} from '../theme/Colors.js';
import {CommonActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Metrics from '../theme/Metrics';
import {TouchableHighlight} from 'react-native-gesture-handler';
import checked from '../../assets/icons/checked.png'
import innerimg from '../../assets/images/innerimg.png';
import logo from '../../assets/images/logo.png';
import outerimg from '../../assets/images/outerimg.png';
import styles from './style.js';
import unchecked from '../../assets/icons/unchecked.png'

export default class Login extends Component {
  state = {
    checked: false,
    isKeyboardVisible: false,
    show: false,
  };
  renderHeader() {
    return (
      <View style={styles.headerView}>
        <Image source={logo} style={styles.logoImg} />
        <Text style={styles.logoText}>CONTACTS AIC</Text>
      </View>
    );
  }

  renderEmail() {
    return (
      <View style={styles.viewEmail}>
        <TextInput
          placeholderTextColor={COLORS.main_text_color}
          style={styles.textInputView}
          autoCapitalize="none"
          placeholder="Phone Number or Username"
          keyboardType="default"
          value={this.state.email}
          // onChangeText={(value) => this.setState({ email: value })}
          // ref={input => { this.email = input }}
          // onFocus={()=>this.setState({ emailError: null })}
        />
      </View>
    );
  }
  renderPassword() {
    return (
      <View style={styles.viewPassword}>
        <TextInput
          placeholderTextColor={COLORS.main_text_color}
          style={styles.passwordInputView}
          autoCapitalize="none"
          placeholder="Password"
          keyboardType="default"
          secureTextEntry={this.state.show == false ? true : false}
          value={this.state.email}
        />
        <View style={styles.eyeView}>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={this.showPassword}>
            {this.state.show == false ? (
              <Icon name="eye-slash" size={18} color={COLORS.main_text_color} />
            ) : (
              <Icon name="eye" size={18} color={COLORS.main_text_color} />
            )}
          </TouchableHighlight>
        </View>
      </View>
    );
  }
  showPassword = () => {
    this.state.show == false
      ? this.setState({show: true})
      : this.setState({show: false});
  };

  renderLogin() {
    return (
      <TouchableOpacity style={styles.viewLogin}>
        <Text style={styles.loginText}>LOG IN</Text>
      </TouchableOpacity>
    );
  }
  renderRemeberMe() {
    return (
//       <View style={styles.rememberView}>
//       <TouchableHighlight underlayColor="transparent" onPress={this.check}>
//           {this.state.checked == false 
//               ? <Image source={checked} style={styles.checkIcon}/>  
//               : <Image source={unchecked} style={styles.checkIcon}/>  
              
//           }
//       </TouchableHighlight>
//       <Text style={styles.rememberText}>   Remember Me</Text>
// </View>
      <View style={styles.rememberView}>
        <CheckBox
          value={this.state.checked}
          onValueChange={() => this.setState({checked: !this.state.checked})}
          tintColors={{true: '#1374A3', false: '#000'}}
        />
        <Text style={styles.rememberText}>Remember Me</Text>
      </View>
    );
  }

  check = () => {
    this.state.checked == false 
    ? this.setState({ checked: true })
    : this.setState({ checked: false })
}

  renderSignupInLogin() {
    return (
      <TouchableOpacity style={styles.signupInlogin} onPress={this.navigate}>
        <Text style={styles.loginText}>SIGN UP</Text>
      </TouchableOpacity>
    );
  }
  navigate = () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: 'Signup',
        //routes: [{ name: 'Login' }],
      }),
    );
  };
  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: COLORS.white}}>
        <View style={styles.container}>
          {this.renderHeader()}
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
