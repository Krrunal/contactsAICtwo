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
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font.js";
import GeneralStatusBar from "../../components/StatusBar/index";
import Icon from "react-native-vector-icons/FontAwesome";
import { InputCard } from "../../components/InputCard";
// import { IntlInputCard } from "../../components/IntlInputCard";
import IntlPhoneInput from "react-native-intl-phone-input";
import Metrics from "../theme/Metrics";
import { Root } from "native-base";
import { Spinner } from "../../components/Spinner";
import Toast from "react-native-easy-toast";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { bindActionCreators } from "redux";
import checked from "../../assets/icons/checked.png";
import { connect } from "react-redux";
import firebase from "react-native-firebase";
import helper from "../../util/helper";
import iSquareWhite from "../../assets/icons/iSquareWhite.png";
import iSqure from "../../assets/icons/iSquare.png";
import logo from "../../assets/images/logo.png";
import { regEmailChange } from "../../action/Authactions";
import style from "../../components/StatusBar/style";
import styles from "./style.js";
import wrong from "../../assets/icons/close.png";

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
    const { uname, contact, email, password, confirmpassWord } = this.props;

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
      this.props.signUpUser();
    } else {
      this.refs.toast.show("Please fill all required filed");
    }
    // if(uname && this.state.unameError==(""|| undefined) && this.props.usernameMsg == true &&
    // contact && this.state.contactError == (""|| undefined) && this.props.contactMsg == true &&
    // email && this.state.emailError == (""|| undefined) && this.props.emailMsg == true &&
    // password && this.state.passwordError == (""|| undefined) &&
    // confirmpassWord && this.state.confirmPassError == (""|| undefined) &&
    // (password == confirmpassWord)) {
    // this.props.signUpUser()
    // } else {
    // this.refs.toast.show('Please fill all required filed')
    // }
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
      this.props.checkContact();
    } else {
      this.props.regcontactChange(unmaskedPhoneNumber);
      this.setState({ contactError: "Please enter valid number" });
    }
  };

  changeUname = (uname) => {
    // const uname= this.props;
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
      this.setState({
        unameError: "Username contain minimun 6 character",
      });
    }
    if (uname && !this.maxUname(uname) && !this.minUname(uname)) {
      this.setState({ unameError: "" });
      this.props.checkUsername();
    }
  };

  changeEmail = (email) => {
    this.props.regEmailChange(email);
    if (!this.validateEmail(email)) {
      this.setState({ emailError: "Please enter valid email" });
    }
    if (email && this.validateEmail(email)) {
      this.setState({ emailError: "" });
      this.props.checkEmail();
    }
  };

  changePassword = (password) => {
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

  changeConfirmPassword = (confirmpassWord) => {
    this.props.regconfirmpassWord(confirmpassWord);
    if (confirmpassWord == "") {
      this.setState({ confirmPassError: "Please enter password again" });
    }
    if (confirmpassWord !== "" && this.props.password !== confirmpassWord) {
      this.setState({ confirmPassError: "Password not match" });
    }
    if (confirmpassWord !== "" && this.props.password == confirmpassWord) {
      this.setState({ confirmPassError: "" });
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
                      <View
                        style={{  width: width * 0.4,  position: "absolute",  top: 0,   left: 10, }}
                      >
                        <BoldBlack>*Phone number : </BoldBlack>
                      </View>
                      <IntlPhoneInput
                        containerStyle={{
                          height: height * 0.065,
                          backgroundColor: COLORS.main_sky_blue,
                        }}
                        phoneInputStyle={styles.mobileInputText}
                        dialCodeTextStyle={styles.mobileInputText}
                        dialCode={dialCode}
                        // placeholder='3265'
                        value={number}
                        inputRef={(ref) => (this.phoneInput = ref)}
                        keyboardType={"numeric"}
                        onChangeText={this.onChangeNumber}
                      />
                      {/* <Text>hi</Text> */}
                      <View style={styles.contactEyeView}>
                        {this.showContactError()}
                      </View>
                    </View>
                    {(this.state.contactError == undefined ||
                      this.state.contactError == "") &&
                    this.props.contactMsg == true &&
                    contact.indexOf("+") !== -1 ? (
                      <Text style={styles.error}>
                        Contact <Text style={styles.errorSuccess}>is</Text>{" "}
                        available
                      </Text>
                    ) : null}
                    {(this.state.contactError == undefined ||
                      this.state.contactError == "") &&
                    this.props.contactMsg == false ? (
                      <Text style={styles.error}>
                        Contact <Text style={styles.errorFail}>is not</Text>{" "}
                        available
                      </Text>
                    ) : null}
                    {this.state.contactError == undefined ||
                    this.state.contactError == "" ? null : (
                      <Text style={[styles.error, { color: COLORS.red }]}>
                        {this.state.contactError}
                      </Text>
                    )}
                  </View>

                  <View>
                    <View style={styles.userText}>
                      <BoldBlack>*Username :</BoldBlack>
                    </View>
                    <View style={styles.mobileView}>
                      <InputCard
                        onChangeText={(uname) => this.changeUname(uname)}
                        blurOnSubmit={false}
                        autoCapitalize={true}
                        ref={"unameCont"}
                        inputRef={"uname"}
                        // onSubmitEditing={(uname) => this.onSubmit("uname")}
                        value={uname}
                        returnKey={"next"}
                        style={styles.uText}
                        // onFocus={() => this.setState({ userNameError: '' })}
                        keyboardType={"default"}
                        secureEntry={false}
                        placeholder={""}
                      ></InputCard>
                      <View style={styles.eyeView}>
                        {uname !== "" &&
                        this.props.usernameMsg == true &&
                        !this.minUname(uname) ? (
                          <Image source={checked} style={styles.checkIcon} />
                        ) : uname !== "" &&
                          (this.state.unameError !== "" ||
                            this.props.usernameMsg == false) ? (
                          <Image source={wrong} style={styles.checkIcon} />
                        ) : null}
                      </View>
                    </View>
                    {uname !== "" &&
                    (this.state.unameError == undefined ||
                      this.state.unameError == "") &&
                    this.props.usernameMsg == true ? (
                      <Text style={styles.error}>
                        Username <Text style={styles.errorSuccess}>is</Text>{" "}
                        available
                      </Text>
                    ) : null}
                    {uname !== "" &&
                    (this.state.unameError == undefined ||
                      this.state.unameError == "") &&
                    this.props.usernameMsg == false ? (
                      <Text style={styles.error}>
                        Username <Text style={styles.errorFail}>is not</Text>{" "}
                        available
                      </Text>
                    ) : null}
                    {this.state.unameError == undefined ||
                    this.state.unameError == "" ? null : (
                      <Text style={[styles.error, { color: COLORS.red }]}>
                        {this.state.unameError}
                      </Text>
                    )}
                  </View>

                  <View>
                    <View style={styles.userText}>
                      <BoldBlack>E-mail :</BoldBlack>
                    </View>

                    <View style={styles.mobileView}>
                      <InputCard
                        // onChangeText={regEmailChange}
                        onChangeText={(email) => this.changeEmail(email)}
                        blurOnSubmit={false}
                        autoCapitalize={true}
                        ref={"emailCont"}
                        inputRef={"email"}
                        // onSubmitEditing={(email) => this.onSubmit("email")}
                        value={email}
                        // onFocus={() => this.setState({ emailError: null })}
                        style={styles.uText}
                        returnKey={"next"}
                        keyboardType={"email-address"}
                        secureEntry={false}
                        placeholder={""}
                      ></InputCard>
                      <View style={styles.eyeView}>
                        {email !== "" && this.props.emailMsg == true ? (
                          <Image source={checked} style={styles.checkIcon} />
                        ) : email !== "" &&
                          (this.state.emailError !== "" ||
                            this.props.emailMsg == false) ? (
                          <Image source={wrong} style={styles.checkIcon} />
                        ) : null}
                      </View>
                    </View>
                    {(this.state.emailError == undefined ||
                      this.state.emailError == "") &&
                    this.props.emailMsg == true ? (
                      <Text style={styles.error}>
                        Email <Text style={styles.errorSuccess}>is</Text>{" "}
                        available
                      </Text>
                    ) : null}
                    {(this.state.emailError == undefined ||
                      this.state.emailError == "") &&
                    this.props.emailMsg == false ? (
                      <Text style={styles.error}>
                        Email <Text style={styles.errorFail}>is not</Text>{" "}
                        available
                      </Text>
                    ) : null}
                    {this.state.emailError == undefined ||
                    this.state.emailError == "" ? null : (
                      <Text style={[styles.error, { color: COLORS.red }]}>
                        {this.state.emailError}
                      </Text>
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

                          {this.props.theme.mode === "light" ? (
                            <Text
                              style={[styles.reqtext, { color: COLORS.black }]}
                            >
                              Password Requirements
                            </Text>
                          ) : (
                            <Text
                              style={[styles.reqtext, { color: COLORS.white }]}
                            >
                              Password Requirements
                            </Text>
                          )}
                          {/* <CountryText>Password Requirements</CountryText> */}
                        </TouchableWithoutFeedback>
                      </View>
                    </View>

                    <View style={styles.passView}>
                      <InputCard
                        onChangeText={(password) =>
                          this.changePassword(password)
                        }
                        blurOnSubmit={true}
                        autoCapitalize={false}
                        ref={"passwordCont"}
                        inputRef={"password"}
                        // onSubmitEditing={(password) =>
                        // this.onSubmit("password")
                        // }

                        style={
                          this.props.password && this.ValidPass(password)
                            ? styles.uTextGreen
                            : styles.uText
                        }
                        value={password}
                        returnKey={"next"}
                        keyboardType={"default"}
                        secureEntry={this.state.show}
                        placeholder={""}
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
                    <NormalText>
                      Used for password / username recovery
                    </NormalText>
                    {this.state.passwordError == undefined ||
                    this.state.passwordError == "" ? null : (
                      <Text style={[styles.error, { color: COLORS.red }]}>
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
                        onChangeText={(confirmpassWord) =>
                          this.changeConfirmPassword(confirmpassWord)
                        }
                        blurOnSubmit={false}
                        autoCapitalize={false}
                        ref={"confirmpasswordcont"}
                        inputRef={"confirmpassWord"}
                        // onSubmitEditing={(confirmpassWord) =>
                        // this.onSubmit("confirmpassWord")
                        // }
                        style={
                          confirmpassWord !== "" &&
                          this.props.password == confirmpassWord
                            ? styles.uTextGreen
                            : styles.uText
                        }
                        value={confirmpassWord}
                        returnKey={"next"}
                        keyboardType={"default"}
                        secureEntry={this.state.showRender}
                        placeholder={""}
                      ></InputCard>

                      <View style={styles.eyeView}>
                        <TouchableHighlight
                          style={styles.eyeContain}
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
                      <Text style={[styles.error, { color: COLORS.red }]}>
                        {this.state.confirmPassError}
                      </Text>
                    )}
                  </View>
                </View>
                <TouchableHighlight
                  underlayColor="transparant"
                  style={styles.submitView}
                  onPress={() => this.signUp()}
                >
                  <Text style={styles.submitText}>SUBMIT</Text>
                </TouchableHighlight>

                <Modal
                  visible={this.state.isPassModelOpen}
                  transparent={true}
                  style={styles.footerModal}
                  onBackPress={() => this.setState({ isPassModelOpen: false })}
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
                <Toast
                  ref="toast"
                  style={{
                    backgroundColor:
                      this.props.theme.mode === "light" ? "black" : "white",
                    width: width * 0.8,
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
 
  return {
    theme: state.themeReducer.theme,
    email: state.reg.email,
    contact: state.reg.contact,
    dialCode: state.reg.contact.indexOf("-") !== -1 && state.reg.contact.split("-")[0],
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
