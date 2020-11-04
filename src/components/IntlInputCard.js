import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { Component } from "react";

import { COLORS } from "../containers/theme/Colors";
import Font from "../containers/theme/font";
import IntlPhoneInput from "react-native-intl-phone-input";
import Metrics from "../containers/theme/Metrics";

var { width, height } = Dimensions.get("window");

class IntlInputCard extends Component {
  render() {
    const {
      onChangeText,
      blurOnSubmit,
      maxLength,
      label,
      value,
      returnKey,
      placeholder,
      keyboardType,
      children,
      multiline,
      secureEntry,
      inputRef,
      onSubmitEditing,
      autoCapitalize,
    } = this.props;
    return (
      <IntlPhoneInput
        containerStyle={{ height: height * 0.065, backgroundColor: COLORS.main_sky_blue, justifyContent: 'center'}}
        phoneInputStyle={[
          inputCardStyle.mobileInputText,
          {
            backgroundColor: COLORS.main_sky_blue,
            // height: height * 0.052,
       
          },
        ]}
        dialCodeTextStyle={inputCardStyle.mobileInputText}
        defaultCountry="IN"
        value={value}
        onChangeText={onChangeText}
        ref={inputRef}
        keyboardType={keyboardType}
        onSubmitEditing={onSubmitEditing}
        blurOnSubmit={blurOnSubmit}
        autoCapitalize={autoCapitalize}
        returnKeyType={returnKey}
        secureEntry={secureEntry}
      />
    );
  }
}
const inputCardStyle = StyleSheet.create({
  textInputViewSignup: {
    fontSize: width * 0.04,
    fontFamily: Font.medium,
    justifyContent: "center",
    alignItems: "center",
    color: COLORS.main_text_color,
    marginLeft: Metrics.baseMargin,
    width: width * 0.65,
    
  },
  mobileInputText: {
    fontSize: width * 0.04,
    fontFamily: Font.medium,
    color: COLORS.main_text_color,
    // alignItems:'center',
  
  },
});
export { IntlInputCard };
