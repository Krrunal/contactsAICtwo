import * as Keychain from "react-native-keychain";
import * as actions from "../../action";

import {
  BackHandler,
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
import GeneralStatusBar from "../../components/StatusBar/index";
import Icon from "react-native-vector-icons/FontAwesome";
import { InputCard } from "../../components/InputCard";
import IntlPhoneInput from "react-native-intl-phone-input";
import Metrics from "../theme/Metrics";
import NetInfo from "@react-native-community/netinfo";
import { Root } from "native-base";
import { Spinner } from "../../components/Spinner";
import Toast from "react-native-easy-toast";
import { TouchableHighlight } from "react-native-gesture-handler";
import { bindActionCreators } from "redux";
import checked from "../../assets/icons/checked.png";
import { connect } from "react-redux";
import innerimg from "../../assets/images/innerimg.png";
import logo from "../../assets/images/logo.png";
import { showToastError } from "../../action/ToastAction";
import styles from "./style.js";
import unchecked from "../../assets/icons/unchecked.png";

// afterLogout

var { width, height } = Dimensions.get("window");

class afterLogout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      checkedRemeber: false,
      isKeyboardVisible: false,
      show: true,
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
      loginPass: "",
      emailPassword: "",
      loginNumber: "",
      empty: "",
    };
  }

  backAction = () => {
    BackHandler.exitApp();
    return true;
  };

  componentDidMount = async () => {
    BackHandler.addEventListener("hardwareBackPress", this.backAction);

    this.setState({
      loginUsername: await AsyncStorage.getItem("@loginUsername"),
      loginPass: await AsyncStorage.getItem("@loginPass"),
      loginNumber: await AsyncStorage.getItem("@loginNumber"),
    });
    console.log("Login USername------>", this.state.loginUsername);
    console.log("Login password------>", this.state.loginPass);
    console.log("Login loginNumber------>", this.state.loginNumber);
    if (this.state.loginUsername == null && this.state.loginPass == null) {
      this.setState({ checkedOff: false });
      this.setState({ loginUsername: "", loginPass: "" });
    } else {
      this.setState({ checkedOff: true });
    }
  };
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backAction);
  }
  showPassword = () => {
    this.state.show == true
      ? this.setState({ show: false })
      : this.setState({ show: true });
  };

  check = async () => {
    const { password } = this.props;
    const { emailLogin, checkedOff, phone_number } = this.state;
    console.log("username:=--->", emailLogin);
    console.log("Password:=--->", password);
    console.log("mobile=====>", this.state.phone_number);
    if (checkedOff == false) {
      if (password == "") {
        showToastError("Please fill all required fileds");
      } else {
        this.setState({ checkedOff: true });
        await AsyncStorage.setItem("@loginUsername", emailLogin);
        await AsyncStorage.setItem("@loginPass", password);
        await AsyncStorage.setItem("@loginNumber", phone_number);
      }
    } else {
      this.setState({ checkedOff: false });
      await AsyncStorage.setItem("@loginUsername", "");
      await AsyncStorage.setItem("@loginPass", "");
      this.setState({ loginUsername: "", loginPass: "", loginNumber: "" });
    }
  };

  navigate = () => {
    this.props.navigation.navigate("Signup");
  };

  checkInternet = async () => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        this.loginUser();
      } else {
        this.refs.toast.show("Please check Your Internet Connection", 1000);
      }
    });
  };

  loginUser = () => {
    const {
      loginUsername,
      loginPass,
      phone_number,
      checkedOff,
      loginNumber,
    } = this.state;

    if (checkedOff == true) {
      if (loginUsername || (loginNumber && loginPass == "")) {
        if (loginUsername !== null) {
          this.props.loginEmailChange(loginUsername);
          this.props.loginPassChange(loginPass);
          this.props.loginUser();
          console.log(" USername------>", this.state.loginUsername);
        }
        if (loginNumber == null) {
          this.props.loginEmailChange(loginNumber);
          this.props.loginPassChange(loginPass);
          this.props.loginUser();
          console.log(" loginNumber------>", this.state.loginNumber);
        }
      } else {
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
      }
    } else {
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
    }
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
    this.setState({ emailLogin: "" });
    console.log("Phone ----->", dialCode + "-" + unmaskedPhoneNumber );
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

    if (this.state.loginPass == null) {
      if (this.props.password == "") {
        this.setState({ viewIntl: true });
        this.setState({ viewPhone: false  , passSection: false , emailSection : false});
       //  this.setState({ emailSection : true, passSection: false });
        console.log(" iffff  1 m---?", this.props.password);
      } else {
        this.setState({ viewIntl: true });
        this.setState({ viewPhone: false  , emailSection : false});
        console.log("else 1  m---?",this.props.password);
      }
    } else {
      if (this.props.password == "") {
        this.setState({ viewIntl: true });
        this.setState({ viewPhone: false  , passSection: false });
       //  this.setState({ emailSection : true, passSection: false });
        console.log(" iffff  2m ---?", this.props.password);
      } else {
        this.setState({ viewIntl: true });
        this.setState({ viewPhone: false, emailSection : false });
        console.log("else 2 - m --?",this.props.password);
      }
    }
  // this.setState({ viewIntl: true });
    // this.setState({ viewPhone: false });
    // if (this.state.passSection == true) {
    //   this.setState({ passSection: false });
    //   this.setState({ viewIntl: true });
    //   this.setState({ viewPhone: false });
    // } else {
    //   this.setState({ viewIntl: true });
    //   this.setState({ viewPhone: false });
    // }
    // if (this.state.emailSection == true) {
    //   this.setState({ emailSection: false });
    //   this.setState({ viewIntl: true });
    //   this.setState({ viewPhone: false });
    // } else {
    //   this.setState({ viewIntl: true });
    //   this.setState({ viewPhone: false });
    // }
  };

  passwordChange = (loginPassChange) => {
    this.setState({ loginPass: "" });
    this.setState({ emailPassword: loginPassChange });
  };
  viewEmailSection = () => {
   
    if (this.state.loginPass == null) {
      if (this.props.password == "") {
        this.setState({ emailSection : true, passSection: false });
        console.log(" iffff 1 ---?", this.props.password);
      } else {
        this.setState({ emailSection: true });
        console.log("else 1 ---?",this.props.password);
      }
    } else {
      if (this.props.password == "") {
         this.setState({ emailSection : true, passSection: false });
        console.log(" iffff  2---?", this.props.password);
      } else {
        this.setState({ emailSection: true });
        console.log("else 2 ---?",this.props.password);
      }
    }
    
    // if (this.state.passSection == true) {
    //   this.setState({ emailSection: true });
    //   this.setState({ passSection: false });
    // } else {
    //   this.setState({ emailSection: true });
    // }
    if (this.state.viewIntl == true) {
      this.setState({ viewIntl: false });
      this.setState({ viewPhone: true });
    }
    if (this.state.emailSection == true) {
      this.nameFocus.focus();
    }
  };
  viewPassSection = () => {
    this.props.loginPassChange(this.state.loginPass);

    if (this.state.loginNumber == null) {
      if (this.state.phone_number == "") {
        this.setState({ passSection: true, viewIntl: false, viewPhone: true });
        console.log(" iffff 1 ---?", this.state.phone_number);
      } else {
        this.setState({ passSection: true });
        console.log("else 1 ---?", this.state.phone_number);
      }
    } else {
      if (this.state.phone_number == "") {
        this.setState({ passSection: true, viewIntl: false, viewPhone: true });
        console.log(" iffff  2---?", this.state.phone_number);
      } else {
        this.setState({ passSection: true });
        console.log("else 2 ---?", this.state.phone_number);
      }
    }

    if (this.state.loginUsername == null) {
      if (this.state.emailLogin == "") {
        this.setState({ passSection: true, emailSection: false });
      } else {
        this.setState({ passSection: true });
      }
    } else {
      if (this.state.emailLogin == "") {
        this.setState({ passSection: true, emailSection: false });
      } else {
        this.setState({ passSection: true });
      }
    }

    if (this.state.passSection == true) {
      this.passwordfocus.focus();
    }
  };
  emailChange = (value) => {
    this.setState({ loginUsername: ""  ,phone_number :"" });
    this.setState({ emailLogin: value });
  };

  render() {
    const { loginPassChange, phone, emailLogin } = this.props;

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
                    value={
                      this.state.loginNumber !== ""
                        ? this.state.loginNumber
                        : phone
                    }
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
                    {this.state.loginNumber == null ||
                    this.state.loginNumber == "" ? (
                      <Text style={styles.phnText}>Phone Number</Text>
                    ) : (
                      <Text style={styles.phnText}>
                        {this.state.loginNumber}
                      </Text>
                    )}
                    {/* this.state.loginNumber */}
                    {/* <Text style={styles.phnText}>Phone Number</Text> */}
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
                    {this.state.loginUsername == null ||
                    this.state.loginUsername == "" ? (
                      <Text style={styles.phnText}>Username</Text>
                    ) : (
                      <Text style={styles.phnText}>
                        {this.state.loginUsername}
                      </Text>
                    )}
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
                      onChangeText={(value) => this.emailChange(value)}
                      blurOnSubmit={false}
                      autoCapitalize={true}
                      // ref={"emailCont"}
                      ref={(ref) => {
                        this.nameFocus = ref;
                      }}
                      autoFocus={true}
                      value={
                        this.state.loginUsername !== ""
                          ? this.state.loginUsername
                          : emailLogin
                      }
                      returnKey={"next"}
                      keyboardType={"email-address"}
                      secureEntry={false}
                      placeholder={""}
                      style={
                        this.state.emailSection == true
                          ? styles.uText1
                          : styles.uText
                      }
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
                    {this.state.loginPass == null ||
                    this.state.loginPass == "" ? (
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          height: height * 0.065,
                        }}
                      >
                        <View style={styles.passswordView}>
                          <Text style={styles.phnText}>Password</Text>
                        </View>
                        <View
                          style={
                            ([styles.eyeView],
                            {
                              marginTop: Metrics.xsmallMargin,
                              marginLeft: Metrics.xbaseMargin,
                            })
                          }
                        >
                          <TouchableHighlight
                            style={styles.eyeContain}
                            underlayColor="transparent"
                            onPress={this.showPassword}
                          >
                            {this.state.show == false ? (
                              <Icon
                                name="eye-slash"
                                size={18}
                                color={COLORS.main_text_color}
                              />
                            ) : (
                              <Icon
                                name="eye"
                                size={18}
                                color={COLORS.main_text_color}
                              />
                            )}
                          </TouchableHighlight>
                        </View>
                      </View>
                    ) : (
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          height: height * 0.065,
                        }}
                      >
                        {this.state.show == false ? (
                          <Text style={styles.phnText}>
                            {this.state.loginPass}
                          </Text>
                        ) : (
                          <Text style={styles.hideBlackText}>........</Text>
                        )}

                        <View
                          style={
                            ([styles.eyeView],
                            {
                              marginTop: Metrics.xsmallMargin,
                              marginLeft: Metrics.xbaseMargin,
                            })
                          }
                        >
                          <TouchableHighlight
                            style={styles.eyeContain}
                            underlayColor="transparent"
                            onPress={this.showPassword}
                          >
                            {this.state.show == false ? (
                              <Icon
                                name="eye-slash"
                                size={18}
                                color={COLORS.main_text_color}
                              />
                            ) : (
                              <Icon
                                name="eye"
                                size={18}
                                color={COLORS.main_text_color}
                              />
                            )}
                          </TouchableHighlight>
                        </View>
                      </View>
                    )}
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
                        //onChangeText={(value) => this.emailChange(value)}
                        blurOnSubmit={false}
                        autoCapitalize={false}
                        ref={(ref) => {
                          this.passwordfocus = ref;
                        }}
                        autoFocus={true}
                        value={
                          this.state.loginPass !== null
                            ? this.props.password
                            : this.state.loginPass
                        }
                        returnKey={"done"}
                        keyboardType={"default"}
                        secureTextEntry={this.state.show}
                        placeholder={""}
                        style={
                          this.state.passSection == true
                            ? styles.uText1
                            : styles.uText
                        }
                      ></InputCard>

                      <View style={styles.eyeView}>
                        <TouchableHighlight
                          style={styles.eyeContain}
                          underlayColor="transparent"
                          onPress={this.showPassword}
                        >
                          {this.state.show == false ? (
                            <Icon
                              name="eye-slash"
                              size={18}
                              color={COLORS.main_text_color}
                            />
                          ) : (
                            <Icon
                              name="eye"
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
                  onPress={this.checkInternet}
                >
                  <Text style={styles.loginText}>Log In</Text>
                </TouchableOpacity>

                <TouchableHighlight
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
              <Toast
                ref="toast"
                style={{
                  backgroundColor:
                    this.props.theme.mode === "light" ? "black" : "white",
                  width: width * 0.9,
                  alignItems: "center",
                }}
                position="bottom"
                positionValue={200}
                fadeInDuration={1000}
                fadeOutDuration={1000}
                opacity={1}
                textStyle={{
                  color: this.props.theme.mode === "light" ? "white" : "black",
                  fontFamily: Font.medium,
                  fontSize: width * 0.04,
                  padding: 7,
                }}
              />
            </Root>
          </ScrollView>
        </Container>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  //  console.log("State From Log -- in------->", state.login);

  return {
    response: state.login.response,
    theme: state.themeReducer.theme,
    email: state.login.email,
    password: state.login.password,
    loader: state.login.loader,
    shouldLoadData: state.login.shouldLoadData,
  };
}

export default connect(mapStateToProps, actions)(afterLogout);

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
