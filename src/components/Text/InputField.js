import {
  Animated,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";

// import icons
// import Feather from 'react-native-vector-icons/Feather';
// import styles
import { InputContainer } from "./Input.styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInputMask } from "react-native-masked-text";
import colors from "../../containers/theme/Colors";
import fonts from "../../containers/theme/font";

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
      fontFamily: fonts.bold,
      left: 0,
      // top: this._animatedIsFocused.interpolate({
      //     inputRange: [0, 1],
      //     outputRange: value ? [0, 0] : isAndroid ? [15, 0] : [18, 0],
      // }),
      // fontSize: this._animatedIsFocused.interpolate({
      //     inputRange: [0, 1],
      //     outputRange: value ? [14, 14] : [20, 14],
      // }),
      // color: this._animatedIsFocused.interpolate({
      //     inputRange: [0, 1],
      //     outputRange: isProfile ? [colors.main_text_color, colors.main_text_color] : labelColor ? [labelColor, labelColor] : [colors.white, colors.white]
      // }),
    };

    return (
      // <InputContaine>
       <View>
          {type ? (
                    <View style={{ flexDirection: 'row' }}>
                        <TextInputMask
                            type={type}
                            style={[styles.textInputStyle, error && { color: '#fc8686' }]}
                            onFocus={() => this.setState({ focussed: true })}
                            secureTextEntry={secureToggle}
                            placeholderTextColor="#c3c7da"
                            placeholder={placeholder}
                            autoComplete="off"
                            autoCapitalize="none"
                            editable={editable}
                            keyboardType={inputType}
                            {...props}
                        />
                        {/* {this.rightComponent()} */}
                    </View>
                ) : (
                        <View style={{ flexDirection: 'row' }}>
                            <Animated.Text style={[labelStyle, 
                            error && { color: '#fc8686' }]}>
                                {label} 
                            </Animated.Text>
                            <TextInput
                                style={[styles.textInputStyle, {
                                  
                                }, error && { color: '#fc8686' }]}
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
                                {...props}
                            />
                            {/* {this.rightComponent()} */}
                        </View>
                    )}
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
    position: "relative",
    height: 50,
    fontFamily: fonts.regular,
    marginTop: isAndroid ? 2 : 0,
    fontSize: 18,
    letterSpacing: 0.3,
    paddingTop: 10,
    paddingBottom: 0,
    paddingLeft: 20,
  },
});

export default Input;
