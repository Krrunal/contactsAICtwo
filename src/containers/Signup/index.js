import {
  CheckBox,
  Image,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {COLORS} from '../theme/Colors.js';
import {CommonActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Metrics from '../theme/Metrics';
import info from '../../assets/icons/info.svg';
import logo from '../../assets/images/logo.png';
import styles from './style.js';
import {useTheme} from '@react-navigation/native';

export default function Signup({navigation}) {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const textcolor = colors.textColor;
  const currentTheme = useSelector((state) => {
    return state.myDarMode;
  });
  const [checked, setChecked, show, setShow, showRender] = useState(false);

  state = {
    checked: false,
    isKeyboardVisible: false,
    show: false,
    showRender: false,
  };

  const showPassword = () => {
    this.state.show == false
      ? this.setState({show: true})
      : this.setState({show: false});
  };
  const showrenderPassword = () => {
    this.state.showRender == false
      ? this.setState({showRender: true})
      : this.setState({showRender: false});
  };

  const navigate = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'AddContact',
        //routes: [{ name: 'Login' }],
      }),
    );
  };

  return (
    <ScrollView style={[{backgroundColor: COLORS.white, flex: 1}, {backgroundColor: colors.backColor}]}>
      <View style={[styles.container, {backgroundColor: colors.backColor}]}>
        <View style={{paddingBottom: Metrics.ratio(10)}}>
          <View style={styles.headerView}>
            <Image source={logo} style={styles.logoStyle} />

            <Text style={styles.logoText}>SIGN UP</Text>
          </View>
        </View>
        <View>
          <View style={styles.userText}>
            <Text style={[styles.normalText, {color: colors.textColor}]}>
              *Phone number :
            </Text>
            <View style={styles.RigthView}>
              <Icon name={'info-circle'} size={10} color={textcolor} />
              <Text
                style={[
                  {
                    fontSize: 8,
                    marginLeft: 5,
                    fontFamily: 'Roboto-Light',
                  },
                  {color: colors.textColor},
                ]}>
                Lookup Country Code
              </Text>
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
        <View>
          <View style={styles.userText}>
            <Text style={[styles.normalText, {color: colors.textColor}]}>
              *Username :
            </Text>
            {/* <Icon name={'rocket'} size={30} color="#900" /> */}
          </View>
          
          <View style={styles.mobileView}>
            <TextInput
              placeholderTextColor={COLORS.main_text_color}
              style={styles.textInputViewSignup}
            />
          </View>
          <Text style={[styles.downText, {color: colors.textColor}]}>
            Username <Text style={{color: COLORS.green, fontSize: 10}}>IS</Text>{' '}
            available
          </Text>
          <Text style={[styles.downText, {color: colors.textColor}]}>
            Username{' '}
            <Text style={{color: COLORS.red, fontSize: 10}}>IS NOT</Text>{' '}
            available
          </Text>
        </View>
        <View>
          <View style={styles.userText}>
            <Text style={[styles.normalText, {color: colors.textColor}]}>
              E-mail :
            </Text>
          </View>
         
          <View style={styles.mobileView}>
            <TextInput
              placeholderTextColor={COLORS.main_text_color}
              style={styles.textInputViewSignup}
            />
          </View>
        </View>
        <View>
          <View style={styles.userText}>
            <Text style={[styles.normalText, {color: colors.textColor}]}>
              *Password :
            </Text>
            <View style={styles.RigthView}>
              <Icon name={'info-circle'} size={10} color={textcolor} />
              <Text
                style={[
                  {
                    fontSize: 8,
                    marginLeft: 5,
                    fontFamily: 'Roboto-Light',
                  },
                  {color: colors.textColor},
                ]}>
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
              // secureTextEntry={this.state.show == false ? true : false}
              // value={this.state.email}
            />
            <View style={styles.eyeView}>
              <TouchableHighlight
                underlayColor="transparent"
                onPress={showPassword}>
                {show == false ? (
                  <Icon
                    name="eye-slash"
                    size={18}
                    color={COLORS.main_text_color}
                  />
                ) : (
                  <Icon name="eye" size={18} color={COLORS.main_text_color} />
                )}
              </TouchableHighlight>
            </View>
          </View>
          <Text style={[styles.downText, {color: colors.textColor}]}>
            Used for password / username recovery
          </Text>
        </View>
        <View>
          <View style={styles.userText}>
            <Text style={[styles.normalText, {color: colors.textColor}]}>
              *Re-Enter Password :
            </Text>
            {/* <Icon name={'rocket'} size={30} color="#900" /> */}
          </View>
          <View style={styles.passView}>
            <TextInput
              placeholderTextColor={COLORS.main_text_color}
              style={styles.textInputViewSignup}
              secureTextEntry={showRender == false ? true : false}
            />
            <View style={styles.eyeView}>
              <TouchableHighlight
                underlayColor="transparent"
                onPress={showrenderPassword}>
                {showRender == false ? (
                  <Icon
                    name="eye-slash"
                    size={18}
                    color={COLORS.main_text_color}
                  />
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
        <TouchableOpacity style={styles.submitView} onPress={navigate}>
          <Text style={styles.submitText}>SUBMIT</Text>
        </TouchableOpacity>
      
      </View>
    </ScrollView>
  );
}
