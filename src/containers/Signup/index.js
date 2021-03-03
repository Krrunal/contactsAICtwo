import * as actions from "../../action";

import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  Modal,
  Platform,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  BackHandler
} from "react-native";
import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import AsyncStorage from "@react-native-community/async-storage";
import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font.js";
import GeneralStatusBar from "../../components/StatusBar/index";
import Icon from "react-native-vector-icons/FontAwesome";
import { InputCard } from "../../components/InputCard";
// import { IntlInputCard } from "../../components/IntlInputCard";
import IntlPhoneInput from "react-native-intl-phone-input";
import Metrics from "../theme/Metrics";
import NetInfo from "@react-native-community/netinfo";
import { Root } from "native-base";
import { Spinner } from "../../components/Spinner";
import Toast from "react-native-easy-toast";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { bindActionCreators } from "redux";
import checked from "../../assets/icons/greenCheck.png";
import { connect } from "react-redux";
import firebase from "react-native-firebase";
import helper from "../../util/helper";
import iSquareWhite from "../../assets/icons/iSquareWhite.png";
import iSqure from "../../assets/icons/iSquare.png";
import logo from "../../assets/images/logo.png";
import { regEmailChange } from "../../action/Authactions";
import style from "../../components/StatusBar/style";
import styles from "./style.js";
import { truncate } from "lodash";
import wrong from "../../assets/icons/redWrong.png";

var { width, height } = Dimensions.get("window");

class Signup extends Component {
  state = {
    checked: false,
    isKeyboardVisible: false,
    show: false,
    isPassModelOpen: false,
    email: "",
    username: "",
    password: "",
    contact: "",
    confirmpassWord: "",
    show: true,
    showRender: true,
    SignProp: false,
    passSign: "",
    viewIntl: false,
    viewPhone: true,
    nameSection: false,
    emailSection: false,
    passwordSection: false,
    rePasswordSection: false,
    mobilePlatform: "",
    empty:""
  };
  backAction = () => {
   
    BackHandler.exitApp();
    return true;
  };  

  componentDidMount = async () => {
    this.props.regcontactChange("");
    this.props.regunameChange("");
    this.props.regEmailChange("");
    this.props.regPassChange("");
    this.props.regconfirmpassWord("");
    BackHandler.addEventListener("hardwareBackPress", this.backAction);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backAction);
  }


  maxUname = (uname) => {
    return uname.length > 20;
  };
  minUname = (uname) => {
    return uname.length < 6;
  };
  validateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
  };
  ValidPass(password: string) {
    const re = /^(?=(.*?[A-Z]){2})(?=(.*?[a-z]){2})(?=(.*?[0-9]){2})(?=(.*?[#?!@$%^&*-]){2}).{8,}$/;
    return re.test(password);
  }
  ValidLower(password: string) {
    const re = /(?=(.*?[a-z]){2})/;
    return re.test(password);
  }
  ValidUper(password: string) {
    const re = /(?=(.*?[A-Z]){2})/;
    return re.test(password);
  }
  ValidEightChar = (password) => {
    return password.length > 7;
  };
  ValidSpecialChar(password: string) {
    const re = /(?=(.*?[#?!@$%^&*-]){2})/;
    return re.test(password);
  }
  ValidTwoNumber(password: string) {
    const re = /(?=(.*?[0-9]){2})/;
    return re.test(password);
  }
  matchPassword = (password, confirmpassWord) => {
    return password === confirmpassWord;
  };

  checkInternet = async () => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        this.signUp();
      } else {
        //alert("Please check Your Internet Connection ");
        this.refs.toast.show("Please check Your Internet Connection", 1000);
      }
    });
  };

  signUp = async () => {
    const { uname, contact, email, password, confirmpassWord } = this.props;
    console.log("plarform--->", this.state.mobilePlatform);
    if (
      contact &&
      (this.state.contactError == undefined || this.state.contactError == "") &&
      this.props.contactMsg == true &&
      uname &&
      (this.state.unameError == undefined || this.state.unameError == "") &&
      this.props.usernameMsg == true &&
      email &&
      (this.state.emailError == undefined || this.state.emailError == "") &&
      this.props.emailMsg == true &&
      password &&
      (this.state.passwordError == undefined ||
        this.state.passwordError == "") &&
      confirmpassWord &&
      (this.state.confirmPassError == undefined ||
        this.state.confirmPassError == "") &&
      password == confirmpassWord
    ) {
      console.log("Sucess");
      await AsyncStorage.setItem("@sidemenuName", uname);
      this.props.signUpUser();
    } else {
      this.refs.toast.show("Please fill all required fileds", 1000);
    }
  };

  showLoader() {
    if (this.props.loader == true) {
      return <Spinner />;
    }
  }

  passwordInfo({ item, index }) {
    return (
      <View>
        <Text> {item.info} </Text>
      </View>
    );
  }

  showPassword = () => {
    this.state.show == true
      ? this.setState({ show: false })
      : this.setState({ show: true });
  };

  showrenderPassword = () => {
    this.state.showRender == false
      ? this.setState({ showRender: true })
      : this.setState({ showRender: false });
  };

  onChangeNumber = ({
    dialCode,
    unmaskedPhoneNumber,
    phoneNumber,
    isVerified,
  }) => {
    if (isVerified == true) {
      this.props.regcontactChange(dialCode + "-" + unmaskedPhoneNumber);
      this.setState({ contactError: "" });
      this.setState({ contactError1: "" });
      this.setState({ contactError2: "" });
      this.props.checkContact();
    } else {
      this.props.regcontactChange(unmaskedPhoneNumber);
      this.setState({ contactError: "Phone number" });
      this.setState({ contactError1: "is not" });
      this.setState({ contactError2: "available" });
    }
  };

  changeUname = (uname) => {
    this.props.regunameChange(uname);

    if (uname == "") {
      this.setState({ unameError: "Please enter username" });
    }
    if (this.maxUname(uname)) {
      this.setState({
        unameError: "Username contain maximum 20 character",
      });
    }
    if (this.minUname(uname)) {
      this.setState({ unameError: "Username" });
      this.setState({ unameError1: "is not" });
      this.setState({ unameError2: "available" });
    }
    if (uname && !this.maxUname(uname) && !this.minUname(uname)) {
      this.setState({ unameError: "" });
      this.setState({ unameError1: "" });
      this.setState({ unameError2: "" });
      this.props.checkUsername();
    }
  };

  changeEmail = (email) => {
    this.setState({ emailSection: true });
    this.props.regEmailChange(email);
    if (!this.validateEmail(email)) {
      this.setState({ emailError: "Email" });
      this.setState({ emailError1: "is not" });
      this.setState({ emailError2: "available" });
    }
    if (email && this.validateEmail(email)) {
      this.setState({ emailError: "" });
      this.setState({ emailError1: "" });
      this.setState({ emailError2: "" });
      this.props.checkEmail();
    }
  };

  changePassword = (password) => {
    this.setState({ passwordSection: true, isPassModelOpen: true });
    this.setState({ passSign: password });
    this.props.regPassChange(password);
    if (password == "") {
      this.setState({ passwordError: "Please enter password" });
    }
    if (!this.ValidPass(password)) {
      this.setState({ passwordError: "Please enter valid password" });
    }
    if (password && this.ValidPass(password)) {
      this.setState({ passwordError: "" });
    }
  };
  submitEdit = () => {
    this.setState({ isPassModelOpen: false });
  };
  showModelData = () => {
    const { passSign } = this.state;
    if (this.ValidUper(passSign)) {
      return <Image source={checked} style={styles.modelIcon} />;
    }
    if (!this.ValidUper(passSign)) {
      return <Image source={wrong} style={styles.modelIcon} />;
    }
  };
  showModelLower = () => {
    const { passSign } = this.state;
    if (this.ValidLower(passSign)) {
      return <Image source={checked} style={styles.modelIcon} />;
    }
    if (!this.ValidLower(passSign)) {
      return <Image source={wrong} style={styles.modelIcon} />;
    }
  };
  showModelEightChar = () => {
    const { passSign } = this.state;
    if (this.ValidEightChar(passSign)) {
      return <Image source={checked} style={styles.modelIcon} />;
    }
    if (!this.ValidEightChar(passSign)) {
      return <Image source={wrong} style={styles.modelIcon} />;
    }
  };
  showModelSpecialChar = () => {
    const { passSign } = this.state;
    if (this.ValidSpecialChar(passSign)) {
      return <Image source={checked} style={styles.modelIcon} />;
    }
    if (!this.ValidSpecialChar(passSign)) {
      return <Image source={wrong} style={styles.modelIcon} />;
    }
  };
  showModelTwoNnumber = () => {
    const { passSign } = this.state;
    if (this.ValidTwoNumber(passSign)) {
      return <Image source={checked} style={styles.modelIcon} />;
    }
    if (!this.ValidTwoNumber(passSign)) {
      return <Image source={wrong} style={styles.modelIcon} />;
    }
  };
  changeConfirmPassword = (confirmpassWord) => {
    this.setState({ rePasswordSection: true, isPassModelOpen: false });
    this.props.regconfirmpassWord(confirmpassWord);
    if (confirmpassWord == "") {
      this.setState({ confirmPassError: "Please enter password again" });
      this.setState({ confirmPassError1: "" });
      this.setState({ confirmPassError2: "" });
    }
    if (confirmpassWord !== "" && this.props.password !== confirmpassWord) {
      this.setState({ confirmPassError: "Password" });
      this.setState({ confirmPassError1: "do not" });
      this.setState({ confirmPassError2: " match" });
    }
    if (confirmpassWord !== "" && this.props.password == confirmpassWord) {
      this.setState({ confirmPassError: "" });
      this.setState({ confirmPassError1: "" });
      this.setState({ confirmPassError2: "" });
      this.setState({ confirmError: "Passwords" });
      this.setState({ confirmError1: "match" });
    }
  };

  showContactError() {
    const { contact, number } = this.props;
    if (
      contact !== "" &&
      this.props.contactMsg == true &&
      contact.indexOf("+") == 0
    ) {
      return <Image source={checked} style={styles.contactIcon} />;
    }
    if (
      number !== ("" || undefined) &&
      this.props.contactMsg == true &&
      contact.indexOf("+") == -1
    ) {
      return <Image source={wrong} style={styles.contactIcon} />;
    }
    if (contact !== "" && this.props.contactMsg == false) {
      return <Image source={wrong} style={styles.contactIcon} />;
    }
    if (contact !== "" && this.state.contactError !== ("" || undefined)) {
      return <Image source={wrong} style={styles.contactIcon} />;
    }
  }
  viewPhoneToggle = () => {
    this.setState({ viewIntl: true });
    this.setState({ viewPhone: false });
    if (this.state.viewIntl == true) {
      this.phoneInput.focus();
    }
  };
  unameFocus = () => {
    this.setState({ nameSection: true });
    if (this.state.nameSection == true) {
      this.nameFocus.focus();
    }
  };
  emailFocus = () => {
    this.setState({ emailSection: true });
    if (this.state.emailSection == true) {
      this.emailFocusInput.focus();
    }
  };
  passwordFocus = () => {
    this.setState({ passwordSection: true });
    if (this.state.passwordSection == true) {
      this.passwordFocusInput.focus();
    }
  };
  repasswordFocus = () => {
    this.setState({ rePasswordSection: true });
    if (this.state.rePasswordSection == true) {
      this.repasswordFocusInput.focus();
    }
  };
  render() {
    const {
      email,
      uname,
      password,
      contact,
      dialCode,
      number,
      confirmpassWord,
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
              <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ paddingBottom: Metrics.ratio(10) }}>
                  <View style={styles.headerView}>
                    <Image source={logo} style={styles.logoStyle} />
                    <Text style={styles.logoText}>SIGN UP</Text>
                  </View>
                </View>
                <View>
                  <View>
                    <View style={styles.mobileInputView}>
                      {this.state.viewIntl ? (
                        <IntlPhoneInput
                          containerStyle={{
                            height: height * 0.065,
                            backgroundColor: COLORS.main_sky_blue,
                          }}
                          phoneInputStyle={[styles.mobileInputText, {}]}
                          dialCodeTextStyle={[
                            styles.mobileInputText,
                            { marginLeft: Metrics.xsmallMargin },
                          ]}
                          value={number}
                          inputRef={(ref) => (this.phoneInput = ref)}
                          keyboardType={"numeric"}
                          onChangeText={this.onChangeNumber}
                          defaultCountry="CA2"
                          isShowLabel={false}
                          autoFocus={true}
                        />
                      ) : null}
                      {this.state.viewPhone ? (
                        <TouchableHighlight
                          style={styles.mobileInputView2}
                          onPress={this.viewPhoneToggle}
                        >
                          <Text style={styles.mobileText}>Phone Number</Text>
                        </TouchableHighlight>
                      ) : null}
                      {/* <Text>hi</Text> */}
                      <View style={styles.contactEyeView}>
                        {this.showContactError()}
                      </View>
                    </View>
                    <View style={styles.errorView}>
                      {(this.state.contactError == undefined ||
                        this.state.contactError == "") &&
                      this.props.contactMsg == true &&
                      contact.indexOf("+") !== -1 ? (
                        <View style={{ flexDirection: "row" }}>
                          <Text
                            style={[
                              styles.error,
                              {
                                color:
                                  this.props.theme.mode === "light"
                                    ? "black"
                                    : "white",
                               
                              },
                            ]}
                          >
                            Phone number
                          </Text>
                          <Text style={[styles.errorSuccess,{  paddingLeft: width * 0.01,}]}>is</Text>
                          <Text
                            style={[
                              styles.error,
                              {
                                color:
                                  this.props.theme.mode === "light"
                                    ? "black"
                                    : "white",
                               paddingLeft: width * 0.01,
                              },
                            ]}
                          >
                            available
                          </Text>
                        </View>
                      ) : null}
                      {(this.state.contactError == undefined ||
                        this.state.contactError == "") &&
                      this.props.contactMsg == false ? (
                        <Text
                          style={[
                            styles.error,
                            {
                              color:
                                this.props.theme.mode === "light"
                                  ? COLORS.black
                                  : COLORS.white,
                            
                            },
                          ]}
                        >
                          Phone number{" "}
                          <Text style={styles.errorFail}>is not</Text> available
                        </Text>
                      ) : null}
                      {this.state.contactError == undefined ||
                      this.state.contactError == "" ? null : (
                        <View style={{ flexDirection: "row" }}>
                          <Text
                            style={[
                              styles.error,
                              {
                                color:
                                  this.props.theme.mode === "light"
                                    ? COLORS.black
                                    : COLORS.white,
                              },
                            ]}
                          >
                            {this.state.contactError}
                          </Text>
                          <Text style={[styles.error2, { color: COLORS.red }]}>
                            {this.state.contactError1}
                          </Text>
                          <Text
                            style={[
                              styles.error2,
                              {
                                color:
                                  this.props.theme.mode === "light"
                                    ? COLORS.black
                                    : COLORS.white,
                              },
                            ]}
                          >
                            {this.state.contactError2}
                          </Text>
                        </View>
                      )}
                    </View>
                  </View>

                  <View>
                    <View style={styles.mobileView}>
                      {this.state.nameSection == true ? (
                        <View style={{ flexDirection: "column" }}>
                          <View>
                            <Text
                              style={[
                                styles.emailText,
                                { marginTop: height * 0.02 },
                              ]}
                            >
                              User Name
                            </Text>
                          </View>
                          <View style={{ flexDirection: "row" }}>
                            <InputCard
                              onChangeText={(uname) => this.changeUname(uname)}
                              blurOnSubmit={false}
                              autoCapitalize={true}
                              // ref={"unameCont"}
                              inputRef={"uname"}
                              value={uname}
                              returnKey={"next"}
                              style={
                                this.state.nameSection == true
                                  ? styles.uText1
                                  : styles.uText
                              }
                              keyboardType={"default"}
                              secureEntry={false}
                              placeholder={""}
                              ref={(ref) => {
                                this.nameFocus = ref;
                              }}
                              autoFocus={true}
                            ></InputCard>
                            <View style={styles.eyeView}>
                              {uname !== "" &&
                              this.props.usernameMsg == true &&
                              !this.minUname(uname) ? (
                                <Image
                                  source={checked}
                                  style={styles.checkIcon}
                                />
                              ) : uname !== "" &&
                                (this.state.unameError !== "" ||
                                  this.props.usernameMsg == false) ? (
                                <Image
                                  source={wrong}
                                  style={styles.checkIcon}
                                />
                              ) : null}
                            </View>
                          </View>
                        </View>
                      ) : (
                        <TouchableOpacity
                          style={{ marginLeft: Metrics.baseMargin }}
                          onPress={this.unameFocus}
                        >
                          <Text style={styles.uText}>Username</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                    <View style={styles.errorView}>
                      {uname !== "" &&
                      (this.state.unameError == undefined ||
                        this.state.unameError == "") &&
                      this.props.usernameMsg == true ? (
                        <Text
                          style={[
                            styles.error,
                            {
                              color:
                                this.props.theme.mode === "light"
                                  ? COLORS.black
                                  : COLORS.white,
                            },
                          ]}
                        >
                          Username <Text style={styles.errorSuccess}>is</Text>{" "}
                          available
                        </Text>
                      ) : null}
                      {uname !== "" &&
                      (this.state.unameError == undefined ||
                        this.state.unameError == "") &&
                      this.props.usernameMsg == false ? (
                        <Text
                          style={[
                            styles.error,
                            {
                              color:
                                this.props.theme.mode === "light"
                                  ? COLORS.black
                                  : COLORS.white,
                            },
                          ]}
                        >
                          Username <Text style={styles.errorFail}>is not</Text>{" "}
                          available
                        </Text>
                      ) : null}
                      {this.state.unameError == undefined ||
                      this.state.unameError == "" ? null : (
                        <View style={{ flexDirection: "row" }}>
                          <Text
                            style={[
                              styles.error,
                              {
                                color:
                                  this.props.theme.mode === "light"
                                    ? COLORS.black
                                    : COLORS.white,
                              },
                            ]}
                          >
                            {this.state.unameError}
                          </Text>
                          <Text style={[styles.error2, { color: COLORS.red }]}>
                            {this.state.unameError1}
                          </Text>
                          <Text
                            style={[
                              styles.error2,
                              {
                                color:
                                  this.props.theme.mode === "light"
                                    ? COLORS.black
                                    : COLORS.white,
                              },
                            ]}
                          >
                            {this.state.unameError2}
                          </Text>
                        </View>
                        // <Text style={[styles.error, { color: COLORS.red }]}>
                        //   {this.state.unameError}
                        // </Text>
                      )}
                    </View>
                  </View>

                  <View>
                    <View style={styles.mobileView}>
                      {this.state.emailSection == true ? (
                        <View>
                          <View style={{ flexDirection: "column" }}>
                            <View>
                              <Text
                                style={[
                                  styles.emailText,
                                  { marginTop: height * 0.02 },
                                ]}
                              >
                                Email
                              </Text>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                              <InputCard
                                // onChangeText={regEmailChange}
                                onChangeText={(email) =>
                                  this.changeEmail(email)
                                }
                                blurOnSubmit={false}
                                autoCapitalize={false}
                                ref={"emailCont"}
                                inputRef={"email"}
                                value={email}
                                style={
                                  this.state.emailSection == true
                                    ? styles.uText1
                                    : styles.uText
                                }
                                returnKey={"next"}
                                keyboardType={"email-address"}
                                secureEntry={false}
                                placeholder={""}
                                ref={(ref) => {
                                  this.emailFocusInput = ref;
                                }}
                                autoFocus={true}
                              ></InputCard>
                              <View style={styles.eyeView}>
                                {email !== "" && this.props.emailMsg == true ? (
                                  <Image
                                    source={checked}
                                    style={styles.checkIcon}
                                  />
                                ) : email !== "" &&
                                  (this.state.emailError !== "" ||
                                    this.props.emailMsg == false) ? (
                                  <Image
                                    source={wrong}
                                    style={styles.checkIcon}
                                  />
                                ) : null}
                              </View>
                            </View>
                          </View>
                        </View>
                      ) : (
                        <TouchableOpacity
                          style={{ marginLeft: Metrics.baseMargin }}
                          onPress={this.emailFocus}
                        >
                          <Text style={styles.uText}>E-mail</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                    <View style={styles.errorView}>
                    {email !== ""  ?  (this.state.emailError == undefined ||
                        this.state.emailError == "") &&
                      this.props.emailMsg == true ? (
                        <Text
                          style={[
                            styles.error,
                            {
                              color:
                                this.props.theme.mode === "light"
                                  ? COLORS.black
                                  : COLORS.white,
                            },
                          ]}
                        >
                          Email <Text style={styles.errorSuccess}>is</Text>{" "}
                          available
                        </Text>
                      ) : null  : null}

                     
                      {(this.state.emailError == undefined ||
                        this.state.emailError == "") &&
                      this.props.emailMsg == false ? (
                        <Text
                          style={[
                            styles.error,
                            {
                              color:
                                this.props.theme.mode === "light"
                                  ? COLORS.black
                                  : COLORS.white,
                            },
                          ]}
                        >
                          Email <Text style={styles.errorFail}>is not</Text>{" "}
                          available
                        </Text>
                      ) : null}
                      {this.state.emailError == undefined ||
                      this.state.emailError == "" ? null : (
                        <View style={{ flexDirection: "row" }}>
                          <Text
                            style={[
                              styles.error,
                              {
                                color:
                                  this.props.theme.mode === "light"
                                    ? COLORS.black
                                    : COLORS.white,
                              },
                            ]}
                          >
                            {this.state.emailError}
                          </Text>
                          <Text style={[styles.error2, { color: COLORS.red }]}>
                            {this.state.emailError1}
                          </Text>
                          <Text
                            style={[
                              styles.error2,
                              {
                                color:
                                  this.props.theme.mode === "light"
                                    ? COLORS.black
                                    : COLORS.white,
                              },
                            ]}
                          >
                            {this.state.emailError2}
                          </Text>
                        </View>
                        // <Text style={[styles.error, { color: COLORS.red }]}>
                        //   {this.state.emailError}
                        // </Text>
                      )}
                    </View>
                  </View>

                  {this.state.isPassModelOpen == true ? (
                    <View
                      style={{
                        position: "absolute",
                        top: width * 0.19,
                        left: width * 0.045,
                      }}
                    >
                      <View style={{ zIndex: 0, position: "absolute" }}>
                        <View
                          style={{
                            backgroundColor: COLORS.white,
                            width: width * 0.8,
                            height: height * 0.27,
                            paddingVertical: height * 0.02,
                            paddingHorizontal: width * 0.05,
                            alignSelf: "center",
                            justifyContent: "center",
                            borderRadius: 10,
                          }}
                        >
                          <View style={styles.popupHeader}>
                            <TouchableHighlight
                              onPress={() =>
                                this.setState({ isPassModelOpen: false })
                              }
                            >
                              <Icon name="times" size={30} />
                            </TouchableHighlight>
                          </View>

                          <Text style={styles.submitText}>Password must contain:</Text>
                        

                          <View style={styles.modalView}>
                            <View>{this.showModelData()}</View>
                            <Text style={styles.modelText}>
                              Two Uppercase letters.
                            </Text>
                          </View>
                          <View style={styles.modalView}>
                            <View>{this.showModelLower()}</View>
                            <View>
                              <Text style={styles.modelText}>
                                Two lowercase letters.
                              </Text>
                            </View>
                          </View>
                          <View style={styles.modalView}>
                            <View>{this.showModelEightChar()}</View>
                            <View>
                              <Text style={styles.modelText}>
                                Eight characters.
                              </Text>
                            </View>
                          </View>
                          <View style={styles.modalView}>
                            <View>{this.showModelSpecialChar()}</View>
                            <View>
                              <Text style={styles.modelText}>
                                {" "}
                                Two special characters.
                              </Text>
                            </View>
                          </View>
                          <View
                            style={[
                              styles.modalView,
                              { marginBottom: Metrics.baseMargin },
                            ]}
                          >
                            <View>{this.showModelTwoNnumber()}</View>
                            <View>
                              <Text style={styles.modelText}>Two numbers.</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  ) : null}

                  <View>
                    <View
                      style={[
                        styles.passView,
                        {
                          marginTop: Metrics.doubleBaseMargin,
                          flexDirection: "row",
                        },
                      ]}
                    >
                      {this.state.passwordSection == true ? (
                        <View
                          style={{
                            width: width * 0.65,
                            flexDirection: "column",
                          }}
                        >
                          <Text style={styles.emailText}>Password</Text>
                          <InputCard
                            onChangeText={(password) =>
                              this.changePassword(password)
                            }
                            blurOnSubmit={true}
                            autoCapitalize={false}
                            ref={"passwordCont"}
                            inputRef={"password"}
                            onSubmitEditing={this.submitEdit}
                            style={
                              this.state.passwordSection == true
                                ? styles.uText1
                                : styles.uText
                            }
                            // style={styles.uTextPass}
                            value={password}
                            returnKey={"next"}
                            keyboardType={"default"}
                            secureTextEntry={this.state.show}
                            placeholder={""}
                            ref={(ref) => {
                              this.passwordFocusInput = ref;
                            }}
                            autoFocus={true}
                          ></InputCard>
                        </View>
                      ) : (
                        <TouchableOpacity
                          style={styles.bigText}
                          onPress={this.passwordFocus}
                        >
                          <Text style={styles.uText}>Password</Text>
                        </TouchableOpacity>
                      )}
                      <View style={{ width: width * 0.25 }}>
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
                  </View>
                  <View>
                    <View
                      style={[
                        styles.passView,
                        {
                          marginTop: Metrics.doubleBaseMargin,
                          flexDirection: "row",
                        },
                      ]}
                    >
                      {this.state.rePasswordSection == true ? (
                        <View
                          style={{
                            width: width * 0.65,
                            flexDirection: "column",
                          }}
                        >
                          <Text style={styles.emailText}>
                            Re-Enter Password
                          </Text>
                          <InputCard
                            onChangeText={(confirmpassWord) =>
                              this.changeConfirmPassword(confirmpassWord)
                            }
                            blurOnSubmit={false}
                            autoCapitalize={false}
                            ref={"confirmpasswordcont"}
                            inputRef={"confirmpassWord"}
                            style={
                              this.state.rePasswordSection == true
                                ? styles.uText1
                                : styles.uText
                            }
                            value={confirmpassWord}
                            returnKey={"next"}
                            keyboardType={"default"}
                            secureTextEntry={this.state.showRender}
                            placeholder={""}
                            ref={(ref) => {
                              this.repasswordFocusInput = ref;
                            }}
                            autoFocus={true}
                          ></InputCard>
                        </View>
                      ) : (
                        <TouchableOpacity
                          style={styles.bigText}
                          onPress={this.repasswordFocus}
                        >
                          <Text style={styles.uText}>Re-Enter Password</Text>
                        </TouchableOpacity>
                      )}
                      <View style={{ width: width * 0.25 }}>
                        <View style={styles.eyeView}>
                          <TouchableHighlight
                            style={styles.eyeContain}
                            underlayColor="transparent"
                            onPress={this.showrenderPassword}
                          >
                            {this.state.showRender == false ? (
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
                  </View>

                  <View>
                    {this.state.confirmPassError == undefined ||
                    (this.state.confirmPassError == "" &&
                      this.state.confirmPassError1 == "" &&
                      this.state.confirmPassError2 == "") ? null : (
                      <View style={{ flexDirection: "row" }}>
                        <Text
                          style={[
                            styles.error,
                            {
                              color:
                                this.props.theme.mode === "light"
                                  ? COLORS.black
                                  : COLORS.white,
                            },
                          ]}
                        >
                          {this.state.confirmPassError}
                        </Text>
                        <Text style={[styles.error2, { color: COLORS.red }]}>
                          {this.state.confirmPassError1}
                        </Text>
                        <Text
                          style={[
                            styles.error2,
                            {
                              color:
                                this.props.theme.mode === "light"
                                  ? COLORS.black
                                  : COLORS.white,
                            },
                          ]}
                        >
                          {this.state.confirmPassError2}
                        </Text>
                      </View>
                    )}
                    {this.state.confirmPassError == "" &&
                    this.state.confirmPassError1 == "" &&
                    this.state.confirmPassError2 == "" ? (
                      this.state.confirmError == "" &&
                      this.state.confirmError1 == "" ? null : (
                        <View style={{ flexDirection: "row" }}>
                          <Text
                            style={[
                              styles.error,
                              {
                                color:
                                  this.props.theme.mode === "light"
                                    ? COLORS.black
                                    : COLORS.white,
                                width: width * 0.24,
                              },
                            ]}
                          >
                            {this.state.confirmError}
                          </Text>
                          <Text
                            style={[styles.error2, { color: COLORS.green }]}
                          >
                            {this.state.confirmError1}
                          </Text>
                        </View>
                      )
                    ) : null}
                  </View>
                </View>
                <TouchableHighlight
                  underlayColor="transparant"
                  style={styles.submitView}
                  onPress={() => this.checkInternet()}
                >
                  <Text style={styles.submitText}>SUBMIT</Text>
                </TouchableHighlight>

                {/* <Modal
                  visible={this.state.isPassModelOpen}
                  transparent={true}
                  style={styles.footerModal}
                >
                  <View style={styles.contactContent}>
                    <View style={styles.popupHeader}>
                      <TouchableHighlight
                        onPress={() =>
                          this.setState({ isPassModelOpen: false })
                        }
                      >
                        <Icon name="times" size={25} />
                      </TouchableHighlight>
                    </View>
                    <BoldBlack> Password must contain: </BoldBlack>

                    <View style={styles.modalView}>
                      <View>{this.showModelData()}</View>
                      <Text style={styles.modelText}>
                        Two Uppercase letters.
                      </Text>
                    </View>
                    <View style={styles.modalView}>
                      <View>{this.showModelLower()}</View>
                      <View>
                        <Text style={styles.modelText}>
                          Two lowercase letters.
                        </Text>
                      </View>
                    </View>
                    <View style={styles.modalView}>
                      <View>{this.showModelEightChar()}</View>
                      <View>
                        <Text style={styles.modelText}>Eight characters.</Text>
                      </View>
                    </View>
                    <View style={styles.modalView}>
                      <View>{this.showModelSpecialChar()}</View>
                      <View>
                        <Text style={styles.modelText}>
                          {" "}
                          Two special characters.
                        </Text>
                      </View>
                    </View>
                    <View style={styles.modalView}>
                      <View>{this.showModelTwoNnumber()}</View>
                      <View>
                        <Text style={styles.modelText}>Two numbers.</Text>
                      </View>
                    </View>
                   
                  </View>
                </Modal> */}
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
                    color:
                      this.props.theme.mode === "light" ? "white" : "black",
                    fontFamily: Font.medium,
                    fontSize: width * 0.04,
                    padding: 7,
                  }}
                />
              </View>
            </Root>
          </ScrollView>
          {this.showLoader()}
        </Container>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  // console.log("State From Sign in------->",state );

  return {
    theme: state.themeReducer.theme,
    email: state.reg.email,
    contact: state.reg.contact,
    dialCode:
      state.reg.contact.indexOf("-") !== -1 && state.reg.contact.split("-")[0],
    number: state.reg.contact.split("-")[1],
    uname: state.reg.uname,
    password: state.reg.password,
    confirmpassWord: state.reg.confirmpassWord,
    loader: state.reg.loader,
    loading: state.reg.loading,
    usernameMsg: state.reg.usernameMsg.status,
    emailMsg: state.reg.emailMsg.status,
    contactMsg: state.reg.contactMsg.status,
    state: state,
    username: state.login.shouldLoadData.username,
  };
}
export default connect(mapStateToProps, actions)(Signup);

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
  justify-content: center;
`;
const NormalText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 10px;
  color: ${(props) => props.theme.iconColor};
  margin-left: 20px;
  margin-top: 2px;
`;

const ScrollView = styled.ScrollView`
  color: ${(props) => props.theme.textColor};
  flex: 1;
`;
const CountryText = styled.Text`
  margin-left: 5px;
  font-family: Roboto-light;
  font-size: 8px;
  color: ${(props) => props.theme.iconColor};
`;

const BoldBlack = styled.Text`
  font-family: Roboto-Medium;
  font-size: 17px;
  color: ${(props) => props.theme.iconColor};
`;
