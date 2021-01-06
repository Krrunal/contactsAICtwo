import * as actions from "../../action";

import {
  Dimensions,
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components/native";
import AsyncStorage from "@react-native-community/async-storage";
import { COLORS } from "../theme/Colors.js";
import CheckBox from "@react-native-community/checkbox";
import Font from "../theme/font";
import * as Keychain from "react-native-keychain";
import GeneralStatusBar from "../../components/StatusBar/index";
import Icon from "react-native-vector-icons/FontAwesome";
import { InputCard } from "../../components/InputCard";
import IntlPhoneInput from "react-native-intl-phone-input";
import Metrics from "../theme/Metrics";
import NetInfo from "@react-native-community/netinfo";
import { Root } from "native-base";
import { Spinner } from "../../components/Spinner";
import { TouchableHighlight } from "react-native-gesture-handler";
import { bindActionCreators } from "redux";
import checked from "../../assets/icons/checked.png";
import { connect } from "react-redux";
import innerimg from "../../assets/images/innerimg.png";
import logo from "../../assets/images/logo.png";
import { showToastError } from "../../action/ToastAction";
import styles from "./style.js";
import unchecked from "../../assets/icons/unchecked.png";

var { width, height } = Dimensions.get("window");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      checkedRemeber: false,
      isKeyboardVisible: false,
      show: false,
      phone_number: "",
      password: "",
      checkedOff: false,
      email: "",
      viewIntl: false,
      emailLogin: "",
      viewPhone: true,
      loginUsername: "",
      loginPassword: "",
      emailSection: false,
      passSection: false,
    };
  }

  componentDidMount = async () => {
    this.setState({
      loginUsername: await AsyncStorage.getItem("@loginUsername"),
    });
    // console.log("Login USername------>", this.state.loginUsername);
    // console.log("Login USername------>", this.props.password);
    const credentials = await Keychain.getGenericPassword();
    console.log("credentinall---->",credentials.username)
  };

  showPassword = () => {
    this.state.show == true
      ? this.setState({ show: false })
      : this.setState({ show: true });
  };

  check = async () => {
    const { password } = this.props;
    const { emailLogin } = this.state;
    console.log("username:=--->", emailLogin);
    console.log("Password:=--->", password);
    if (emailLogin == "") {
      showToastError("Please fill all required fileds");
    } else {
      this.setState({ checkedOff: true });
     
      await Keychain.setGenericPassword(emailLogin, password);
  
      try {
        // Retrieve the credentials
        const credentials = await Keychain.getGenericPassword();
        if (credentials) {
          console.log(
            "Credentials successfully loaded for user " + credentials.username
          );
        } else {
          console.log("No credentials stored");
        }
      } catch (error) {
        console.log("Keychain couldn't be accessed!", error);
      }
      await Keychain.resetGenericPassword();
    }
  
  };

  navigate = () => {
    this.props.navigation.navigate("Signup");
  };

  loginUser = () => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        const { phone_number, emailLogin } = this.state;
        if (emailLogin == "" && phone_number == "") {
          showToastError("Please fill all required fileds");
        }
        if (emailLogin !== "" && phone_number !== "") {
          showToastError("Only one filed required");
        } else {
          if (phone_number != "") {
            this.props.loginEmailChange(phone_number);
            this.props.loginUser();
          }
          if (emailLogin != "") {
            this.props.loginEmailChange(emailLogin);
            this.props.loginUser();
          }
        }
      } else {
        alert("Net is not connected");
      }
    });
  };

  onSubmit(value) {
    switch (value) {
      case "emailLogin":
        this.refs.emailCont.refs.emailLogin.focus();
        break;
      case "password":
        this.refs.LoginpasswordCont.refs.password.focus();
        break;
      case "phone":
        this.refs.phoneCont.refs.phone.focus();
        break;
    }
    console.log(value);
  }
  onChangeNumber = ({
    dialCode,
    unmaskedPhoneNumber,
    phoneNumber,
    isVerified,
  }) => {
    if (isVerified == true) {
      this.setState({ phone_number: dialCode + "-" + unmaskedPhoneNumber });
    } else {
      this.setState({ phone_number: unmaskedPhoneNumber });
    }
  };
  changeEmailLogin = (emailLogin) => {
    this.setState({ emailSection: true });
    console.log("email change----->", emailLogin);
    this.setState({ email_login: emailLogin });
  };

  showLoader() {
    if (this.props.loader == true) {
      return <Spinner />;
    }
  }
  viewIntlToggle = () => {
    this.setState({ viewIntl: false });
    this.setState({ viewPhone: true });
  };
  viewPhoneToggle = () => {
    this.setState({ viewIntl: true });
    this.setState({ viewPhone: false });
  };
  passwordChange = (loginPassChange) => {
    this.setState({ passSection: true });
    this.props.loginPassChange(loginPassChange);
    console.log(this.props.loginPassChange);
  };
  viewEmailSection = () => {
    this.setState({ emailSection: true });
  };
  viewPassSection = () => {
    this.setState({ passSection: true });
  };
  render() {
    const {
      email,
      password,
      loginEmailChange,
      loginPassChange,
      loginNumberChange,
      phone,
      emailLogin,
    } = this.props;

    return (
      <ThemeProvider theme={this.props.theme}>
        <GeneralStatusBar
          backgroundColor={
            this.props.theme.mode === "light" ? "white" : "black"
          }
          barStyle={
            this.props.theme.mode === "dark" ? "light-content" : "dark-content"
          }
        />

        <Container>
          <ScrollView>
            <Root>
              <View style={styles.container}>
                <View style={styles.headerView}>
                  <Image source={logo} style={styles.logoImg} />
                  <Text style={styles.logoText}>CONTACTS AIC</Text>
                </View>

                {this.state.viewIntl ? (
                  <IntlPhoneInput
                    containerStyle={{
                      width: width * 0.85,
                      height: height * 0.07,
                      backgroundColor: COLORS.main_sky_blue,
                      marginTop: Metrics.doubleBaseMargin,
                    }}
                    phoneInputStyle={styles.mobileInputText}
                    dialCodeTextStyle={styles.mobileInputText}
                    dialCode={this.state.dialCode}
                    value={phone}
                    inputRef={"phone"}
                    keyboardType={"numeric"}
                    onChangeText={this.onChangeNumber}
                    defaultCountry="CA"
                    isLogin={false}
                  />
                ) : null}

                {this.state.viewPhone ? (
                  <TouchableHighlight
                    style={styles.viewEmail}
                    onPress={this.viewPhoneToggle}
                    underlayColor="#DDDDDD"
                  >
                    <Text style={styles.phnText}>Phone Number</Text>
                  </TouchableHighlight>
                ) : null}

                {this.state.contactError == undefined ||
                this.state.contactError == "" ? null : (
                  <Text style={styles.error}>{this.state.contactError}</Text>
                )}

                <View style={styles.orView}>
                  <Text style={styles.orText}>OR</Text>
                </View>
                {this.state.emailSection == false ? (
                  <TouchableHighlight
                    style={[styles.viewEmail, { marginTop: height * 0.01 }]}
                    underlayColor="#DDDDDD"
                    onPress={this.viewEmailSection}
                  >
                    <Text style={styles.phnText}>Username</Text>
                  </TouchableHighlight>
                ) : null}
                {this.state.emailSection == true ? (
                  <TouchableOpacity
                    style={[styles.viewEmail, { marginTop: height * 0.01 }]}
                  >
                    <View>
                      <Text style={styles.emailText}>Username</Text>
                    </View>

                    <InputCard
                      onChangeText={(emailLogin) =>
                        this.setState({ emailLogin })
                      }
                      blurOnSubmit={false}
                      autoCapitalize={true}
                      ref={"emailCont"}
                      inputRef={"emailLogin"}
                      onSubmitEditing={(emailLogin) =>
                        this.onSubmit("emailLogin")
                      }
                      value={
                        this.state.loginUsername !== ""
                          ? this.state.loginUsername
                          : emailLogin
                      }
                      // value={emailLogin}
                      returnKey={"next"}
                      keyboardType={"email-address"}
                      secureEntry={false}
                      placeholder={"Username"}
                      style={styles.uText}
                    ></InputCard>
                  </TouchableOpacity>
                ) : null}
                {this.state.unameError == undefined ||
                this.state.unameError == "" ? null : (
                  <Text style={styles.error}>{this.state.unameError}</Text>
                )}

                {this.state.passSection == false ? (
                  <TouchableHighlight
                    style={[styles.viewEmail, { marginTop: height * 0.01 }]}
                    underlayColor="#DDDDDD"
                    onPress={this.viewPassSection}
                  >
                    <Text style={styles.phnText}>Password</Text>
                  </TouchableHighlight>
                ) : null}
                {this.state.passSection == true ? (
                  <View
                    style={[styles.viewPassword, { marginTop: height * 0.03 }]}
                  >
                    <View>
                      <Text style={styles.emailText}>Password</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <InputCard
                        onChangeText={loginPassChange}
                        blurOnSubmit={false}
                        autoCapitalize={false}
                        ref={"LoginpasswordCont"}
                        inputRef={"password"}
                        onSubmitEditing={(password) =>
                          this.onSubmit("password")
                        }
                        value={
                          this.state.loginUsername !== ""
                            ? this.props.password
                            : this.state.loginPassword
                        }
                        returnKey={"done"}
                        keyboardType={"default"}
                        secureEntry={this.state.show}
                        placeholder={"Password"}
                        style={styles.uText}
                      ></InputCard>

                      <View style={styles.eyeView}>
                        <TouchableHighlight
                          style={styles.eyeContain}
                          underlayColor="transparent"
                          onPress={this.showPassword}
                        >
                          {this.state.show == false ? (
                            <Icon
                              name="eye"
                              size={18}
                              color={COLORS.main_text_color}
                            />
                          ) : (
                            <Icon
                              name="eye-slash"
                              size={18}
                              color={COLORS.main_text_color}
                            />
                          )}
                        </TouchableHighlight>
                      </View>
                    </View>
                  </View>
                ) : null}
                {this.state.passwordError == undefined ||
                this.state.passwordError == "" ? null : (
                  <Text style={styles.error}>{this.state.passwordError}</Text>
                )}

                <TouchableOpacity
                  style={styles.viewLogin}
                  onPress={this.loginUser}
                >
                  <Text style={styles.loginText}>Log In</Text>
                </TouchableOpacity>

                <TouchableHighlight
                  //style={styles.rememberContain}
                  underlayColor="transparent"
                  onPress={this.check}
                >
                  <View style={styles.rememberView}>
                    {this.state.checkedOff == true ? (
                      <View style={styles.checkView}>
                        <Image source={checked} style={styles.checkedStyle} />
                      </View>
                    ) : (
                      <View style={styles.checkView}></View>
                    )}

                    <Text style={styles.rememberText}>Remember Me</Text>
                  </View>
                </TouchableHighlight>

                <View style={styles.lineStyle}>
                  <View style={styles.lineView}></View>
                  <Text style={styles.orText}>OR </Text>
                  <View style={styles.lineViewTwo}></View>
                </View>
                <TouchableOpacity
                  style={styles.signupInlogin}
                  onPress={this.navigate}
                >
                  <Text style={styles.loginText}>SIGN UP</Text>
                </TouchableOpacity>
                {this.showLoader()}
              </View>
            </Root>
          </ScrollView>
        </Container>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  // console.log("State From Log -- in------->", state.login.password);

  return {
    response: state.login.response,
    theme: state.themeReducer.theme,
    email: state.login.email,
    password: state.login.password,
    loader: state.login.loader,
  };
}

export default connect(mapStateToProps, actions)(Login);

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
