import {
  CheckBox,
  Image,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';
import React, {Component} from 'react';

import {COLORS} from '../theme/Colors.js';
import { CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Metrics from '../theme/Metrics';
import info from '../../assets/icons/info.svg';
import logo from '../../assets/images/logo.png';
import styles from './style.js';

export default class Signup extends Component {
  state = {
    checked: false,
    isKeyboardVisible: false,
    show: false,
    showRender:false
  };
  renderHeader() {
    const {isKeyboardVisible} = this.state;
    if (!isKeyboardVisible) {
      return (
        <View style={{paddingBottom: Metrics.ratio(10)}}>
          <View style={styles.headerView}>
            <Image source={logo} style={styles.logoStyle} />

            <Text style={styles.logoText}>SIGN UP</Text>
          </View>
        </View>
      );
    }
    return null;
    // return(
    //   <View>
    //     <Image source={logo} style={styles.logoStyle}/>
    //     <Text>SIGN UP</Text>
    //   </View>
    // );
  }
  renderMobileNumber() {
    return (
      <View>
        <View style={styles.userText}>
          <Text style={styles.normalText}>*Phone number :</Text>
          <View style={styles.RigthView}>
            <Icon name={'info-circle'} size={10} />
            <Text style={{fontSize: 8, marginLeft: 5, fontFamily:'Roboto-Light',}}>Lookup Country Code</Text>
          </View>
        </View>
        <View style={styles.mobileView}>
          <TextInput
            placeholderTextColor={COLORS.main_text_color}
            style={styles.textInputViewSignup}
            keyboardType={'numeric'}
          />
        </View>
        
      </View>
    );
  }
  renderuserName() {
    return (
      <View>
        <View style={styles.userText}>
          <Text style={styles.normalText}>*Username :</Text>
          {/* <Icon name={'rocket'} size={30} color="#900" /> */}
        </View>
        {/* <View style={styles.userView}>
          <TextInput
          placeholder='hi'
            placeholderTextColor={COLORS.main_text_color}
            style={styles.textInputViewSignup}
          />
        </View> */}
         <View style={styles.mobileView}>
          <TextInput
            placeholderTextColor={COLORS.main_text_color}
            style={styles.textInputViewSignup}
           
          />
        </View>
        <Text style={styles.downText}>Username <Text style={{color: COLORS.green, fontSize: 10}}>IS</Text> available</Text>
        <Text style={styles.downText}>
          Username <Text style={{color: COLORS.red, fontSize: 10}}>IS NOT</Text>{' '}
          available
        </Text>
      </View>
    );
  }
  renderEmail() {
    return (
      <View>
        <View style={styles.userText}>
          <Text style={styles.normalText}>E-mail :</Text>
        </View>
        {/* <View style={styles.userView}>
          <TextInput
            placeholderTextColor={COLORS.main_text_color}
            style={styles.textInputViewSignup}
          />
        </View> */}
         <View style={styles.mobileView}>
          <TextInput
            placeholderTextColor={COLORS.main_text_color}
            style={styles.textInputViewSignup}
          />
        </View>
      </View>
    );
  }
  renderPassword() {
    return (
      <View>
        <View style={styles.userText}>
          <Text style={styles.normalText}>*Password :</Text>
          <View style={styles.RigthView}>
            <Icon name={'info-circle'} size={10} />
            <Text style={{fontSize: 8, marginLeft: 5, fontFamily:'Roboto-Light',}}>
              Password Requirements{' '}
            </Text>
          </View>
        </View>
       
        <View style={styles.passView}>
        <TextInput
          placeholderTextColor={COLORS.main_text_color}
          style={styles.textInputViewSignup}
          autoCapitalize="none"
          placeholder=" "
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
        <Text style={styles.downText}>
          Used for password / username recovery
        </Text>
      </View>
    );
  }
  showPassword = () => {
    this.state.show == false
      ? this.setState({show: true})
      : this.setState({show: false});
  };
  showrenderPassword = () => {
    this.state.showRender == false
      ? this.setState({showRender: true})
      : this.setState({showRender: false});
  };

  renderReEnterPassword() {
    return (
      <View>
        <View style={styles.userText}>
          <Text style={styles.normalText}>*Re-Enter Password :</Text>
          {/* <Icon name={'rocket'} size={30} color="#900" /> */}
        </View>
        <View style={styles.passView}>
          <TextInput
            placeholderTextColor={COLORS.main_text_color}
            style={styles.textInputViewSignup}
            secureTextEntry={this.state.showRender == false ? true : false}

          />
           <View style={styles.eyeView}>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={this.showrenderPassword}>
            {this.state.showRender == false ? (
              <Icon name="eye-slash" size={18} color={COLORS.main_text_color} />
            ) : (
              <Icon name="eye" size={18} color={COLORS.main_text_color} />
            )}
          </TouchableHighlight>
        </View>
        </View>
        {/* <View style={styles.checkboxView}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() => this.setState({checked: !this.state.checked})}
            tintColors={{true: '#000', false: '#000'}}
          />
          <Text style={styles.showText}>Show password</Text>
        </View> */}
      </View>
    );
  }
  renderSubmitView() {
    return (
      <TouchableOpacity style={styles.submitView}  onPress={this.navigate}>
        <Text style={styles.submitText}>SUBMIT</Text>
      </TouchableOpacity>
    );
  }
  navigate = () => {
    this.props.navigation.dispatch(
        CommonActions.navigate({
          name: 'AddContact',
          //routes: [{ name: 'Login' }],
        })
    );
}
  render() {
    return (
      <ScrollView style={{ backgroundColor:COLORS.white,flex:1}}>
        <View style={styles.container}>
          {this.renderHeader()}
          {this.renderMobileNumber()}
          {this.renderuserName()}
          {this.renderEmail()}
          {this.renderPassword()}
          {this.renderReEnterPassword()}
          {this.renderSubmitView()}
        </View>
      </ScrollView>
    );
  }
}
