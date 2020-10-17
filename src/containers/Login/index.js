/* eslint-disable no-undef */
// eslint-disable-next-line prettier/prettier
import {
  CheckBox,
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import styled, { ThemeProvider } from "styled-components/native";

import {COLORS} from '../theme/Colors.js';
import {CommonActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableHighlight} from 'react-native-gesture-handler';
import { bindActionCreators } from 'redux';
import checked from '../../assets/icons/checked.png'
import {connect} from 'react-redux'
import innerimg from '../../assets/images/innerimg.png';
import { login } from '../../action/loginAction';
import logo from '../../assets/images/logo.png';
import styles from './style.js';
import unchecked from '../../assets/icons/unchecked.png'

class Login extends Component {
  state = {
    checked: false,
    isKeyboardVisible: false,
    show: false,
    phone_number: '',
    password: '',
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
          value={this.state.phone_number}
          onChangeText={(value)=>this.setState({ phone_number: value })}
          ref={input => { this.phone_number = input }}
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
          value={this.state.password}
          onChangeText={(value)=>this.setState({ password: value })}
          ref={input => { this.password = input }}
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
      <TouchableOpacity style={styles.viewLogin} onPress={() =>this.props.login(this.state.phone_number,this.state.password)}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
    );
  }

  renderRemeberMe() {
    return (
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
      <ThemeProvider theme={this.props.theme}>
      <Container>

      <ScrollView>
        <View style={styles.container}>
          {this.renderHeader()}
          {this.renderEmail()}
          {this.renderPassword()}
          {this.renderLogin()}
          {this.renderRemeberMe()}
          <View style={styles.lineStyle}>
            <View style={styles.lineView}></View>
              <Text style={styles.orText}>OR {this.props.phone_number}</Text>
            <View style={styles.lineViewTwo}></View>
          </View>
          {this.renderSignupInLogin()}
        </View>
      </ScrollView>
      </Container>
      </ThemeProvider>

    );
  }
}

function mapStateToProps(state) {
  // console.log(state.login);
    return {
        response: state.login.response,
        theme: state.themeReducer.theme,
        // phone_number: state.login.phone_number,
        // password: state.login.password
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    login,
  },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)

const Container = styled.View`
  flex: 1;

  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;
const ScrollView = styled.ScrollView`
  color: ${(props) => props.theme.textColor};
  flex: 1;
 
`;
