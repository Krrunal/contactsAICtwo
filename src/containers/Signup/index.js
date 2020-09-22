import {CheckBox, Image, Keyboard, ScrollView, Text, TextInput, View} from 'react-native';
import React, {Component} from 'react';

import {COLORS} from '../theme/Colors.js';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Metrics from '../theme/Metrics';
import info from '../../assets/icons/info.svg'
import logo from '../../assets/images/logo.png';
import styles from './style.js';

export default class Signup extends Component {
  state={
    checked:false,
    isKeyboardVisible: false,

}
renderHeader(){
  const { isKeyboardVisible } = this.state;
  if (!isKeyboardVisible) {
    return (
      <View style={{ paddingBottom: Metrics.ratio(10) }}>
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
  renderMobileNumber(){
    return(
     <View>
       <View style={styles.userText}><Text style={styles.normalText}>*Phone number :</Text>
       <View style={styles.RigthView}>
       <Icon name={'info-circle'} size={10} /><Text style={{fontSize:8,marginLeft:5}}>LookupCountryCode</Text></View>
     </View>
      <View style={styles.mobileView}>
        <TextInput
                    placeholderTextColor={COLORS.main_text_color}
                    style={styles.textInputViewSignup}
                    keyboardType={'numeric'}
                />
      </View>
      <Text style={styles.downText}>Username IS availble</Text>
      <Text style={styles.downText}>Username <Text style={{color:COLORS.red,fontSize:10}}>IS NOT</Text> availble</Text>
      </View> 
    )
  }
  renderuserName(){
    return(
     <View>
       <View style={styles.userText}><Text style={styles.normalText}>*Username :</Text>
       {/* <Icon name={'rocket'} size={30} color="#900" /> */}
     </View>
      <View style={styles.userView}>
        <TextInput
                    placeholderTextColor={COLORS.main_text_color}
                    style={styles.textInputViewSignup}
                />
      </View>
      </View> 
    )
  }
  renderEmail(){
    return(
     <View>
       <View style={styles.userText}><Text style={styles.normalText}>E-mail :</Text>
     </View>
      <View style={styles.userView}>
        <TextInput
                    placeholderTextColor={COLORS.main_text_color}
                    style={styles.textInputViewSignup}
                />
      </View>
      </View> 
    )
  }
  renderPassword(){
    return(
     <View>
       <View style={styles.userText}><Text style={styles.normalText}>*Password :</Text>
       <View style={styles.RigthView}>
       <Icon name={'info-circle'} size={10} /><Text style={{fontSize:8,marginLeft:5}}>Password Requirements </Text></View>
     </View>
      <View style={styles.userView}>
        <TextInput
                    placeholderTextColor={COLORS.main_text_color}
                    style={styles.textInputViewSignup}
                />
      </View>
      <Text style={styles.downText}>Used for password / username recovery</Text>
      </View> 
    )
  }
  renderReEnterPassword(){
    return(
     <View>
       <View style={styles.userText}><Text style={styles.normalText}>*Re-Enter Password :</Text>
       {/* <Icon name={'rocket'} size={30} color="#900" /> */}
     </View>
      <View style={styles.userView}>
        <TextInput
                    placeholderTextColor={COLORS.main_text_color}
                    style={styles.textInputViewSignup}
                />
      </View>
      <View style={styles.checkboxView}>
      <CheckBox
                        value={this.state.checked}
                        onValueChange={() => this.setState({ checked: !this.state.checked })}
                        />
                        <Text style={styles.showText}>Show password</Text>
      </View>
      </View> 
    )
  }
  renderSubmitView(){
    return(
      <View style={styles.submitView}><Text style={styles.submitText}>SUBMIT</Text></View>
    )
  }
  render() {
    return (
     <ScrollView>
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
