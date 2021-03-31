import {
  Animated,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import React, { Component } from "react";

import COLORS from "../../containers/theme/Colors";
import Font from "../../containers/theme/font";
import Icon from "react-native-vector-icons/FontAwesome";
// import icons
// import Feather from 'react-native-vector-icons/Feather';
// import styles
import { InputContainer } from "./Input.styles";
import Metrics from '../../containers/theme/Metrics'
import { TextInputMask } from "react-native-masked-text";

var { width, height } = Dimensions.get("window");
// import fonts from "../../containers/theme/font";

interface InputProps {
  label?: string;
  email?: string;
  number?: number;
  phone?: number;
  text?: string;
  inputStyle?: object;
  error?: boolean;
  inputType?: "string" | "email" | "number";
  editable?: boolean;
  secure?: boolean;
  validEntry?: boolean;
  placeholder?: string;
  value?: any;
  type?:
    | "credit-card"
    | "cpf"
    | "cnpj"
    | "zip-code"
    | "only-numbers"
    | "money"
    | "cel-phone"
    | "datetime"
    | "custom";
}

interface InputState {
  focussed: boolean;
  secureToggle: boolean;
}

// Android Specific changes
let platform = Platform.OS;
let isAndroid = false;
if (platform === "android") {
  isAndroid = true;
}

class Input extends Component<InputProps, InputState> {
  state = {
    inputType: "default",
    disabled: true,
    refresh: false,
    focussed: false,
    secureToggle: false,
    isFocused: false,
  };

  componentDidMount = () => {
    const { inputType } = this.props;
    const { secure } = this.props;
    if (secure) {
      this.setState({ secureToggle: secure });
    }
    if (inputType === "email") {
      this.setState({ inputType: "email-address" });
    } else if (inputType === "number") {
      this.setState({ inputType: "numeric" });
    } else {
      this.setState({ inputType: "default" });
    }
  };

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(0);
  }

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = (value) => {
    console.log("blurrrr----->",value)
    if (!value) {
      this.setState({ isFocused: false });
    }
  };

  componentDidUpdate = (prevProps: InputProps) => {
    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocused ? 1 : 0,
      duration: 200,
    }).start();

    if (prevProps.value !== this.props.value) {
      this.setState({
        refresh: true,
      });
      this.setState({
        refresh: false,
      });
    }
  };
  rightComponent = () => {
    const { secure, validEntry, isProfile, error } = this.props;
    const { secureToggle } = this.state;
    if (secure) {
        return (
            <TouchableOpacity style={[{ justifyContent: 'flex-end', marginBottom: 8, alignItems: 'center', flex: 0.1 }, isAndroid && { height: 40 }]} onPress={() => this.setState({ secureToggle: !secureToggle })}>
                {secureToggle ? (
                    <Icon name='eye' color={'#FFFF'} size={18} />

                ) : (
                        <Icon name="eye-slash" color={'#FFFF'} size={18} />
                    )}
            </TouchableOpacity>
        )
    } else if (validEntry) {
        return (
            <View style={[{ justifyContent: 'flex-end', alignItems: 'center', flex: 0.1, marginTop: 4, marginBottom: 7 }, isAndroid && { height: 40 }]}>
                <Ionicons name="ios-checkmark" color={error ? COLORS.error : COLORS.white} size={20} />
            </View>
        )
    }

}

  render() {
    const {
      email,
      text,
      phone,
      number,
      label,
      editable,
      secure,
      type,
      placeholder,
      inputStyle,
      error,
      value,
      isProfile,
      labelColor,
      borderColor,
    //   color,
      ...props
    } = this.props;
    const { inputType, focussed, secureToggle } = this.state;

    const labelStyle = {
      position: "absolute",
      fontFamily: Font.medium,
      left: 0,
      top: this._animatedIsFocused.interpolate({
          inputRange: [0, 1],
          outputRange: [10, 0],
      }),
      left: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 10],
    }),
      fontSize: this._animatedIsFocused.interpolate({
          inputRange: [0, 1],
          outputRange: [18, 12],
      }),
      color: this._animatedIsFocused.interpolate({
          inputRange: [0, 1],
          outputRange: ['#000', '#000']
      }),
    };

    return (
      // <InputContaine>
       <View>
          
                        <View style={{ flexDirection: 'row', }}>
                            <Animated.Text style={[labelStyle, {
                              color:"#1374A3",
                            },
                            error && { color: '#fc8686' }]}>
                                {label} 
                            </Animated.Text>
                            <TextInput
                                style={[styles.textInputStyle]}
                                secureTextEntry={secureToggle}
                                placeholder={placeholder}
                                placeholderTextColor={"#c3c7da"}
                                autoComplete="off"
                                autoCapitalize="none"
                                editable={editable}
                                keyboardType={inputType}
                                onFocus={this.handleFocus}
                                onBlur={()=>this.handleBlur(value)}
                                blurOnSubmit
                                value={value}
                                //  onSubmitEditing={()=>this.handleFocus()}
                                {...props}
                            />
                            {this.rightComponent()}
                        </View>
                    
       </View>
          // <View style={{ flexDirection: "row" }}>
          //   <Animated.Text>{label}</Animated.Text>
          //   <TextInput
          //      style={[styles.textInputStyle, {}, error && { color: '#fc8686' }]}
          //     secureTextEntry={secureToggle}
          //     placeholder={placeholder}
          //     placeholderTextColor={"#c3c7da"}
          //     autoComplete="off"
          //     autoCapitalize="none"
          //     editable={editable}
          //     keyboardType={inputType}
          //     onFocus={this.handleFocus}
          //     onBlur={() => this.handleBlur(value)}
          //     blurOnSubmit
          //     value={value}
          //     {...props}
          //   />
          //   {/* {this.rightComponent()} */}
          // </View>
       
      // </InputContainer>
    );
  }
}

const styles = StyleSheet.create({
  textInputStyle: {
    fontSize: width*0.036, 
    fontFamily: Font.medium,
    marginLeft: Metrics.baseMargin,
     width: width * 0.62,
     color:"#1374A3",

   // marginBottom :Metrics.smallMargin,
   
    // position: "relative",
    // height: 50,
    // fontFamily: fonts.regular,
    // marginTop: isAndroid ? 2 : 0,
    // fontSize: 18,
    // letterSpacing: 0.3,
    // paddingTop: 10,
    // paddingBottom: 0,
    // paddingLeft: 20,
  },
});

export default Input;
