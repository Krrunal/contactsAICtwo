import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import React, { Component }  from 'react';

import {COLORS} from '../containers/theme/Colors';
import Font from '../containers/theme/font'
import Metrics from '../containers/theme/Metrics';

var { width, height } = Dimensions.get("window");

class InputCard extends Component {
    render() {
      const {onChangeText,blurOnSubmit,maxLength, label,value,returnKey,placeholder,
        keyboardType,children,multiline, secureEntry,inputRef,onSubmitEditing, autoCapitalize,onfocus,style} = this.props;
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
             style={style}
           
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
       // color:COLORS.main_text_color,
        marginLeft:Metrics.baseMargin,
        width: width * 0.7,
    
        // borderWidth: 1
    },
  })
  export {InputCard};