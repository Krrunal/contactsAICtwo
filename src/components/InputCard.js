import React, { Component }  from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';
var { width, height } = Dimensions.get("window");
import Font from '../containers/theme/font'
import Metrics from '../containers/theme/Metrics';
import {COLORS} from '../containers/theme/Colors';

class InputCard extends Component {
    render() {
      const {onChangeText,blurOnSubmit,maxLength, label,value,returnKey,placeholder,
        keyboardType,children,multiline, secureEntry,inputRef,onSubmitEditing, autoCapitalize,onfocus} = this.props;
        return( 
            <TextInput
              underlineColorAndroid="transparent"
              onChangeText={onChangeText}
              value={value}
              autoCapitalize={autoCapitalize == true ? "words" : "none"}
              autoCorrect={false}
              ref={inputRef}
              maxLength={maxLength}
              multiline={multiline}
              blurOnSubmit={blurOnSubmit}
              onSubmitEditing={onSubmitEditing}
              returnKeyType={returnKey}
              secureTextEntry={secureEntry}
              keyboardType={keyboardType}
              placeholder={placeholder}
              textAlignVertical={"top"}
              onFocus={onfocus}
              placeholderTextColor={COLORS.main_text_color}
              style={inputCardStyle.textInputViewSignup}
               />
         )
    }
  }
  const inputCardStyle = StyleSheet.create({
    textInputViewSignup:{
        fontSize: width*0.04, 
        fontFamily: Font.medium,
        justifyContent:'center',
        alignItems:'center',
        color:COLORS.main_text_color,
        marginLeft:Metrics.baseMargin,
        width: width * 0.7,
        paddingBottom: 2,
        // borderWidth: 1
    },
  })
  export {InputCard};