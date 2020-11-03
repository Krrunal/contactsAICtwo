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
} from "react-native";
import React, { Component } from "react";
import { Root, Toast } from "native-base";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font.js";
import GeneralStatusBar from "../../components/StatusBar/index";
import Icon from "react-native-vector-icons/FontAwesome";
import { InputCard } from "../../components/InputCard";
import { IntlInputCard } from "../../components/IntlInputCard";
import IntlPhoneInput from "react-native-intl-phone-input";
import Metrics from "../theme/Metrics";
import { Spinner } from "../../components/Spinner";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { bindActionCreators } from "redux";
import checked from "../../assets/icons/checked.png";
import { connect } from "react-redux";
import firebase from "react-native-firebase";
import helper from "../../util/helper";
import iSquareWhite from "../../assets/icons/iSquareWhite.png";
import iSqure from "../../assets/icons/iSquare.png";
import logo from "../../assets/images/logo.png";
import style from "../../components/StatusBar/style";
import styles from "./style.js";

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

    passwordInfo: [
      { info: "1) Eight characters." },
      { info: "2) Two lowercase letters." },
      { info: "3) Two uppercase letters." },
      { info: "4) Two special characters." },
      { info: "5) Two numbers." },
    ],
  };

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
  matchPassword = (password, confirmpassWord) => {
    return password === confirmpassWord;
  };
  signUp = () => {
    const { contact, uname, email, password, confirmpassWord } = this.props;
    console.log("contact-->", contact);
    contact == ""
      ? this.setState({ contactError: "Please enter phone number" })
      : contact.unmaskedPhoneNumber.length !== 10
      ? this.setState({ contactError: "Please enter valid phone number" })
      : this.setState({ contactError: "" });

    uname == ""
      ? this.setState({ unameError: "Please enter username" })
      : this.maxUname(uname)
      ? this.setState({ unameError: "Username contain maximum 20 character" })
      : this.minUname(uname)
      ? this.setState({ unameError: "Username contain minimun 6 character" })
      : this.setState({ unameError: "" });

    !this.validateEmail(email)
      ? this.setState({ emailError: "Please enter valid email" })
      : this.setState({ emailError: "" });

    password == ""
      ? this.setState({ passwordError: "Please enter password" })
      : !this.ValidPass(password)
      ? this.setState({ passwordError: "Please enter valid password" })
      : this.setState({ passwordError: "" });

    confirmpassWord == ""
      ? this.setState({ confirmPassError: "Please enter password again" })
      : password !== confirmpassWord
      ? this.setState({ confirmPassError: "Password not match" })
      : this.setState({ confirmPassError: "" });

    if (
      contact &&
      uname &&
      !this.maxUname(uname) &&
      !this.minUname(uname) &&
      email &&
      this.validateEmail(email) &&
      password &&
      this.ValidPass(password) &&
      confirmpassWord &&
      password == confirmpassWord
    ) {
      this.props.signUpUser();
    }
  };

  onSubmit(value) {
    switch (value) {
      case "uname":
        this.refs.unameCont.refs.uname.focus();
        break;
      case "email":
        this.refs.emailCont.refs.email.focus();
        break;
      case "contact":
        this.refs.contactCont.refs.contact.focus();
        break;
      case "password":
        this.refs.passwordCont.refs.password.focus();
        break;
      case "confirmpassWord":
        this.refs.confirmpasswordcont.refs.confirmpassWord.focus();
        break;
    }
  }
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

  render() {
    const {
      email,
      uname,
      password,
      contact,
      confirmpassWord,
      regEmailChange,
      regunameChange,
      regcontactChange,
      regPassChange,
      regconfirmpassWord,
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
                      <IntlInputCard
                        defaultCountry="IN"
                        value={contact}
                        onChangeText={regcontactChange}
                        ref={"contactCont"}
                        inputRef={"contact"}
                        onSubmitEditing={(contact) => this.onSubmit("contact")}
                        returnKey={"next"}
                      ></IntlInputCard>
                    </View>
                  </View>
                  {this.state.contactError == undefined ||
                  this.state.contactError == "" ? null : (
                    <Text style={styles.error}>{this.state.contactError}</Text>
                  )}

                  <View>
                    <View style={styles.userText}>
                      <BoldBlack>*Username :</BoldBlack>
                    </View>
                    <View style={styles.mobileView}>
                      <InputCard
                        onChangeText={regunameChange}
                        blurOnSubmit={false}
                        autoCapitalize={true}
                        ref={"unameCont"}
                        inputRef={"uname"}
                        onSubmitEditing={(uname) => this.onSubmit("uname")}
                        value={uname}
                        returnKey={"next"}
                        // onFocus={() => this.setState({ userNameError: '' })}
                        keyboardType={"default"}
                        secureEntry={false}
                        placeholder={""}
                      ></InputCard>
                    </View>
                    {this.state.unameError == undefined ||
                    this.state.unameError == "" ? null : (
                      <Text style={styles.error}>{this.state.unameError}</Text>
                    )}
                  </View>
                  <View>
                    <View style={styles.userText}>
                      <BoldBlack>E-mail :</BoldBlack>
                    </View>

                    <View style={styles.mobileView}>
                      <InputCard
                        onChangeText={regEmailChange}
                        blurOnSubmit={false}
                        autoCapitalize={true}
                        ref={"emailCont"}
                        inputRef={"email"}
                        onSubmitEditing={(email) => this.onSubmit("email")}
                        value={email}
                        onFocus={() => this.setState({ emailError: null })}
                        returnKey={"next"}
                        keyboardType={"email-address"}
                        secureEntry={false}
                        placeholder={""}
                      ></InputCard>
                    </View>
                    {this.state.emailError == undefined ||
                    this.state.emailError == "" ? null : (
                      <Text style={styles.error}>{this.state.emailError}</Text>
                    )}
                  </View>

                  <View>
                    <View style={styles.userText}>
                      <BoldBlack>*Password :</BoldBlack>
                      <View style={styles.RigthView}>
                        <TouchableWithoutFeedback
                          onPress={() =>
                            this.setState({ isPassModelOpen: true })
                          }
                          style={{ flexDirection: "row" }}
                        >
                          {this.props.theme.mode === "light" ? (
                            <Image
                              source={require("../../../src/assets/icons/iSquare.png")}
                              style={styles.infoIcon}
                            />
                          ) : (
                            <Image
                              source={require("../../../src/assets/icons/iSquareWhite.png")}
                              style={styles.infoIcon}
                            />
                          )}

                          <CountryText>Password Requirements</CountryText>
                        </TouchableWithoutFeedback>
                      </View>
                    </View>

                    <View style={styles.passView}>
                      <InputCard
                        onChangeText={regPassChange}
                        blurOnSubmit={true}
                        autoCapitalize={false}
                        ref={"passwordCont"}
                        inputRef={"password"}
                        onSubmitEditing={(password) =>
                          this.onSubmit("password")
                        }
                        value={password}
                        returnKey={"next"}
                        keyboardType={"default"}
                        secureEntry={this.state.show}
                        placeholder={""}
                      ></InputCard>

                      <View style={styles.eyeView}>
                        <TouchableHighlight
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
                    <NormalText>
                      Used for password / username recovery
                    </NormalText>
                    {this.state.passwordError == undefined ||
                    this.state.passwordError == "" ? null : (
                      <Text style={styles.error}>
                        {this.state.passwordError}
                      </Text>
                    )}
                  </View>
                  <View>
                    <View style={styles.userText}>
                      <BoldBlack>*Re-Enter Password :</BoldBlack>
                    </View>
                    <View style={styles.passView}>
                      <InputCard
                        onChangeText={regconfirmpassWord}
                        blurOnSubmit={false}
                        autoCapitalize={false}
                        ref={"confirmpasswordcont"}
                        inputRef={"confirmpassWord"}
                        onSubmitEditing={(confirmpassWord) =>
                          this.onSubmit("confirmpassWord")
                        }
                        value={confirmpassWord}
                        returnKey={"next"}
                        keyboardType={"default"}
                        secureEntry={this.state.showRender}
                        placeholder={""}
                      ></InputCard>

                      <View style={styles.eyeView}>
                        <TouchableHighlight
                          underlayColor="transparent"
                          onPress={this.showrenderPassword}
                        >
                          {this.state.showRender == false ? (
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
                    {this.state.confirmPassError == undefined ||
                    this.state.confirmPassError == "" ? null : (
                      <Text style={styles.error}>
                        {this.state.confirmPassError}
                      </Text>
                    )}
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.submitView}
                  onPress={this.signUp}
                >
                  <Text style={styles.submitText}>SUBMIT</Text>
                </TouchableOpacity>

                <Modal
                  visible={this.state.isPassModelOpen}
                  transparent={true}
                  style={styles.footerModal}
                  // onBackPress={() => this.setState({ isPassModelOpen: false })}
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

                    <FlatList
                      refreshing={true}
                      keyExtractor={(item, index) => index.toString()}
                      data={this.state.passwordInfo}
                      extraData={this.state}
                      numColumns={1}
                      renderItem={this.passwordInfo.bind(this)}
                      // scrollEnabled={true}
                      style={styles.flatlist}
                      // showsVerticalScrollIndicator={false}
                      keyboardShouldPersistTaps={"always"}
                    />
                  </View>
                </Modal>
              </View>
              {this.showLoader()}
            </Root>
          </ScrollView>
          {/* {this.showLoader()} */}
        </Container>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  // console.log("state===>", state);
  return {
    theme: state.themeReducer.theme,
    email: state.reg.email,
    contact: state.reg.contact,
    uname: state.reg.uname,
    password: state.reg.password,
    confirmpassWord: state.reg.confirmpassWord,
    loader: state.reg.loader,
    loading: state.reg.loading,
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
const RightImage = styled.Image`
  width: 10px;
  height: 10px;
  align-self: center;
`;
const BoldBlack = styled.Text`
  font-family: Roboto-Medium;
  font-size: 17px;
  color: ${(props) => props.theme.iconColor};
`;
