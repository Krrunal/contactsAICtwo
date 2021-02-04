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

var { width, height } = Dimensions.get("window");

class afterLogout extends Component {
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
      loginPass: "",
      emailPassword: "",
      empty: "",
    };
  }

  backAction = () => {
    BackHandler.exitApp();
    return true;
  };

 
  componentDidMount = async () => {
    BackHandler.addEventListener("hardwareBackPress", this.backAction);

  const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", async () => {
       this.setState({ emailLogin : "" ,loginUsername :"",loginPassword:""});
   })
    this.setState({
      loginUsername: await AsyncStorage.getItem("@loginUsername"),
      loginPass: await AsyncStorage.getItem("@loginPass"),
    });
    console.log("Login USername------>", this.state.loginUsername);
    console.log("Login USername------>", this.state.loginPassword);
    if (this.state.loginUsername == null && this.state.loginPass == null) {
      this.setState({ checkedOff: false });
      this.setState({loginUsername: "Username" , loginPassword :""})
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
    const { emailLogin, checkedOff } = this.state;
    console.log("username:=--->", emailLogin);
    console.log("Password:=--->", password);
    if (checkedOff == false) {
      if (emailLogin == "") {
        showToastError("Please fill all required fileds");
      } else {
        this.setState({ checkedOff: true });
        await AsyncStorage.setItem("@loginUsername", emailLogin);
        await AsyncStorage.setItem("@loginPass", password);
        this.setState({ checkedOff: true });
      }
    } else {
      this.setState({ checkedOff: false });
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
        //alert("Please check Your Internet Connection ");
        this.refs.toast.show("Please check Your Internet Connection", 1000);
      }
    });
  };

  loginUser = () => {
    const { loginUsername, loginPass ,empty} = this.state;

    console.log("pas chnage prips---->", this.props.password);
    if (loginUsername !== null && loginPass !== null) {
      this.props.loginEmailChange(loginUsername);
      this.props.loginPassChange(loginPass);
      this.props.loginUser();
    //  this.setState({ loginUsername :"" , loginPass:""})
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
        //   this.props.loginPassChangeRemove(empty)
        //   this.setState({ emailLogin : ""})
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
    // alert(loginPassChange)
    this.setState({ loginPass: "" });
    // this.props.loginPassChange(loginPassChange);
    this.setState({ emailPassword: loginPassChange });
    // this.props.loginPassChange(loginPassChange);
    //this.props.password(loginPassChange)
  };
  viewEmailSection = () => {
    this.setState({ emailSection: true });
  };
  viewPassSection = () => {
    this.props.loginPassChange(this.state.loginPass);
    this.setState({ passSection: true });
  };
  emailChange = (value) => {
    this.setState({ loginUsername: "" });
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
                    {/* {this.state.loginUsername == null ? (
                      <Text style={styles.phnText}>Username</Text>
                    ) : ( */}
                      <Text style={styles.phnText}>
                           Username
                      </Text>
                    {/* )} */}
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
                      // onSubmitEditing={(emailLogin) =>
                      //   this.onSubmit("emailLogin")
                      // }
                      value={emailLogin}
                      returnKey={"next"}
                      keyboardType={"email-address"}
                      secureEntry={false}
                      placeholder={"Username"}
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
                      <Text style={styles.phnText}>Password</Text>
                    ) : (
                      <Text style={styles.phnText}>{this.state.loginPass}</Text>
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
                        ref={"LoginpasswordCont"}
                        ref={(ref) => {
                          this.repasswordFocusInput = ref;
                        }}
                        autoFocus={true}
                        // onSubmitEditing={(password) =>
                        //   this.onSubmit("password")
                        // }
                        value={
                          this.state.loginPass !== null
                            ? this.props.password
                            : this.state.loginPass
                        }
                        returnKey={"done"}
                        keyboardType={"default"}
                        secureEntry={this.state.show}
                        placeholder={"Password"}
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
                  onPress={this.checkInternet}
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