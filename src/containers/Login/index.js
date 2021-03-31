// import * as actions from "../../action";

// import {
//   Animated,
//   BackHandler,
//   Dimensions,
//   Image,
//   Keyboard,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import React, { Component } from "react";
// import styled, { ThemeProvider } from "styled-components/native";

// import AsyncStorage from "@react-native-community/async-storage";
// import { COLORS } from "../theme/Colors.js";
// import CheckBox from "@react-native-community/checkbox";
// // import {FloatingLabelInput} from 'react-native-floating-label-input';
// import Font from "../theme/font";
// import GeneralStatusBar from "../../components/StatusBar/index";
// import Icon from "react-native-vector-icons/FontAwesome";
// import Input from "../../components/Text/InputField";
// import { InputCard } from "../../components/InputCard";
// import IntlPhoneInput from "react-native-intl-phone-input";
// import Metrics from "../theme/Metrics";
// import NetInfo from "@react-native-community/netinfo";
// import { Root } from "native-base";
// import { Spinner } from "../../components/Spinner";
// import Toast from "react-native-easy-toast";
// import { TouchableHighlight } from "react-native-gesture-handler";
// import checked from "../../assets/icons/checked.png";
// import { connect } from "react-redux";
// import innerimg from "../../assets/images/innerimg.png";
// import logo from "../../assets/images/logo.png";
// import { showToastError } from "../../action/ToastAction";
// import styles from "./style.js";
// import unchecked from "../../assets/icons/unchecked.png";

// // afterLogout

// var { width, height } = Dimensions.get("window");
// class FloatingLabelInput extends Component {
//   state = {
//     isFocused: false,
//     email: "",
//   };

//   componentWillMount() {
//     this._animatedIsFocused = new Animated.Value(0);
//   }

//   handleFocus = () => this.setState({ isFocused: true });
//   handleBlur = (value) => {
//     console.log("handleBlur--->", value);
//     if (!value) {
//       this.setState({ isFocused: false });
//     }
//   };

//   componentDidUpdate() {
//     Animated.timing(this._animatedIsFocused, {
//       toValue: this.state.isFocused ? 1 : 0,
//       duration: 200,
//     }).start();
//   }

//   emailChange = (value) => {
//     console.log("value--->", value);
//   };
//   render() {
//     const { value, label, ...props } = this.props;
//     const { isFocused } = this.state;
//     const labelStyle = {
//       position: "absolute",
//       left: 0,
//       top: this._animatedIsFocused.interpolate({
//         inputRange: [0, 1],
//         outputRange: [18, 0],
//       }),
//       fontSize: this._animatedIsFocused.interpolate({
//         inputRange: [0, 1],
//         outputRange: [20, 14],
//       }),
//       color: this._animatedIsFocused.interpolate({
//         inputRange: [0, 1],
//         outputRange: ["#aaa", "#000"],
//       }),
//     };
//     return (
//       <View style={{ paddingTop: 18 }}>
//         <Animated.Text style={labelStyle}>{label}</Animated.Text>
//         <TextInput
//           {...props}
//           style={styles.uText1}
//           onFocus={this.handleFocus}
//           onBlur={this.handleBlur}
//           blurOnSubmit
//         />
//       </View>
//     );
//   }
// }

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       checked: false,
//       checkedRemeber: false,
//       isKeyboardVisible: false,
//       show: true,
//       phone_number: "",
//       password: "",
//       checkedOff: false,
//       email: "",
//       viewIntl: false,
//       emailLogin: "",
//       viewPhone: true,
//       loginUsername: "",
//       loginPassword: "",
//       emailSection: false,
//       passSection: false,
//       loginPass: "",
//       emailPassword: "",
//       loginNumber: "",
//       empty: "",
//       isFocused: false,
//       value: "",
//     };
//   }

//   backAction = () => {
//     BackHandler.exitApp();
//     return true;
//   };

//   componentDidMount = async () => {
//     this._animatedIsFocused = new Animated.Value(0);

//     BackHandler.addEventListener("hardwareBackPress", this.backAction);
//     this.setState({
//       loginUsername: await AsyncStorage.getItem("@loginUsername"),
//       loginPass: await AsyncStorage.getItem("@loginPass"),
//       loginNumber: await AsyncStorage.getItem("@loginNumber"),
//     });
//     console.log("Login USername------>", this.state.loginUsername);
//     console.log("Login password------>", this.state.loginPass);
//     console.log("Login loginNumber------>", this.state.loginNumber);
//     if (this.state.loginUsername == null && this.state.loginPass == null) {
//       this.setState({ checkedOff: false });
//       this.setState({ loginUsername: "", loginPass: "" });
//     } else {
//       this.setState({ checkedOff: true });
//     }
//   };
//   componentWillUnmount() {
//     BackHandler.removeEventListener("hardwareBackPress", this.backAction);
//   }
//   showPassword = () => {
//     this.state.show == true
//       ? this.setState({ show: false })
//       : this.setState({ show: true });
//   };
//   componentDidUpdate() {
//     Animated.timing(this._animatedIsFocused, {
//       toValue: this.state.isFocused ? 1 : 0,
//       duration: 200,
//     }).start();
//   }

//   check = async () => {
//     const { password } = this.props;
//     const { emailLogin, checkedOff, phone_number } = this.state;
//     console.log("username:=--->", emailLogin);
//     console.log("Password:=--->", password);
//     console.log("mobile=====>", this.state.phone_number);
//     if (checkedOff == false) {
//       if (password == "") {
//         showToastError("Please fill all required fileds");
//       } else {
//         this.setState({ checkedOff: true });
//         await AsyncStorage.setItem("@loginUsername", emailLogin);
//         await AsyncStorage.setItem("@loginPass", password);
//         await AsyncStorage.setItem("@loginNumber", phone_number);
//       }
//     } else {
//       this.setState({ checkedOff: false });
//       await AsyncStorage.setItem("@loginUsername", "");
//       await AsyncStorage.setItem("@loginPass", "");
//       this.setState({ loginUsername: "", loginPass: "", loginNumber: "" });
//     }
//   };

//   navigate = () => {
//     Keyboard.dismiss();
//     this.props.navigation.navigate("Signup");
//   };

//   checkInternet = async () => {
//     NetInfo.fetch().then((state) => {
//       if (state.isConnected) {
//         this.loginUser();
//       } else {
//         this.refs.toast.show("Please check Your Internet Connection", 1000);
//       }
//     });
//   };

//   loginUser = () => {
//     const {
//       loginUsername,
//       loginPass,
//       phone_number,
//       checkedOff,
//       loginNumber,
//     } = this.state;

//     if (checkedOff == true) {
//       if (loginUsername || (loginNumber && loginPass == "")) {
//         if (loginUsername !== null) {
//           this.props.loginEmailChange(loginUsername);
//           this.props.loginPassChange(loginPass);
//           this.props.loginUser();
//           console.log(" USername------>", this.state.loginUsername);
//         }
//         if (loginNumber == null) {
//           this.props.loginEmailChange(loginNumber);
//           this.props.loginPassChange(loginPass);
//           this.props.loginUser();
//           console.log(" loginNumber------>", this.state.loginNumber);
//         }
//       } else {
//         const { phone_number, emailLogin } = this.state;

//         if (emailLogin == "" && phone_number == "") {
//           showToastError("Please fill all required fileds");
//         }
//         if (emailLogin !== "" && phone_number !== "") {
//           showToastError("Only one filed required");
//         } else {
//           if (phone_number != "") {
//             this.props.loginEmailChange(phone_number);
//             this.props.loginUser();
//           }
//           if (emailLogin != "") {
//             this.props.loginEmailChange(emailLogin);
//             this.props.loginUser();
//           }
//         }
//       }
//     } else {
//       const { phone_number, emailLogin } = this.state;

//       if (emailLogin == "" && phone_number == "") {
//         showToastError("Please fill all required fileds");
//       }
//       if (emailLogin !== "" && phone_number !== "") {
//         showToastError("Only one filed required");
//       } else {
//         if (phone_number != "") {
//           this.props.loginEmailChange(phone_number);
//           this.props.loginUser();
//         }
//         if (emailLogin != "") {
//           this.props.loginEmailChange(emailLogin);
//           this.props.loginUser();
//         }
//       }
//     }
//   };

//   onSubmit(value) {
//     switch (value) {
//       case "emailLogin":
//         this.refs.emailCont.refs.emailLogin.focus();
//         break;
//       case "password":
//         this.refs.LoginpasswordCont.refs.password.focus();
//         break;
//       case "phone":
//         this.refs.phoneCont.refs.phone.focus();
//         break;
//     }
//     console.log(value);
//   }
//   onChangeNumber = ({
//     dialCode,
//     unmaskedPhoneNumber,
//     phoneNumber,
//     isVerified,
//   }) => {
//     this.setState({ emailLogin: "" });
//     console.log("Phone ----->", dialCode + "-" + unmaskedPhoneNumber);
//     if (isVerified == true) {
//       this.setState({ phone_number: dialCode + "-" + unmaskedPhoneNumber });
//     } else {
//       this.setState({ phone_number: unmaskedPhoneNumber });
//     }
//   };
//   changeEmailLogin = (emailLogin) => {
//     this.setState({ emailSection: true });
//     console.log("email change----->", emailLogin);
//     this.setState({ email_login: emailLogin });
//   };

//   showLoader() {
//     if (this.props.loader == true) {
//       return <Spinner />;
//     }
//   }
//   viewIntlToggle = () => {
//     this.setState({ viewIntl: false });
//     this.setState({ viewPhone: true });
//   };
//   viewPhoneToggle = () => {
//     if (this.state.loginPass == null) {
//       if (this.props.password == "") {
//         this.setState({ viewIntl: true });
//         this.setState({
//           viewPhone: false,
//           passSection: false,
//           emailSection: false,
//         });
//         console.log(" iffff  2- m --?", this.props.password);
//       } else {
//         this.setState({ viewIntl: true });
//         this.setState({ viewPhone: false, emailSection: false });
//         console.log("else 2 - m --?", this.props.password);
//       }
//     } else {
//       if (this.props.password == "") {
//         this.setState({ viewIntl: true });
//         this.setState({ viewPhone: false, passSection: false });
//         console.log(" iffff  2--  m  -?", this.props.password);
//       } else {
//         this.setState({ viewIntl: true });
//         this.setState({ viewPhone: false, emailSection: false });
//         console.log("else 2 --  m  -?", this.props.password);
//       }
//     }
//     if (this.state.loginUsername == null) {
//       if (this.state.emailLogin == "") {
//         this.setState({
//           viewIntl: true,
//           viewPhone: false,
//           emailSection: false,
//         });
//       } else {
//         this.setState({ viewIntl: true, viewPhone: false });
//       }
//     } else {
//       if (this.state.emailLogin == "") {
//         this.setState({
//           viewIntl: true,
//           viewPhone: false,
//           emailSection: false,
//         });
//       } else {
//         this.setState({ viewIntl: true, viewPhone: false });
//       }
//     }
//   };

//   passwordChange = (loginPassChange) => {
//     this.setState({ loginPass: "" });
//     this.setState({ emailPassword: loginPassChange });
//   };
//   viewEmailSection = () => {
//     if (this.state.loginPass == null) {
//       if (this.props.password == "") {
//         this.setState({ emailSection: true, passSection: false });
//         console.log(" iffff 1 ---?", this.props.password);
//       } else {
//         this.setState({ emailSection: true });
//         console.log("else 1 ---?", this.props.password);
//       }
//     } else {
//       if (this.props.password == "") {
//         this.setState({ emailSection: true, passSection: false });
//         console.log(" iffff  2---?", this.props.password);
//       } else {
//         this.setState({ emailSection: true });
//         console.log("else 2 ---?", this.props.password);
//       }
//     }
//     if (this.state.viewIntl == true) {
//       this.setState({ viewIntl: false });
//       this.setState({ viewPhone: true });
//     }
//     this.setState({ emailSection: true });
//     if (this.state.emailSection == true) {
//       this.nameFocus.focus();
//     }
//   };
//   viewPassSection = () => {
//     this.props.loginPassChange(this.state.loginPass);

//     if (this.state.loginNumber == null) {
//       if (this.state.phone_number == "") {
//         this.setState({ passSection: true, viewIntl: false, viewPhone: true });
//         console.log(" iffff 1 ---?", this.state.phone_number);
//       } else {
//         this.setState({ passSection: true });
//         console.log("else 1 ---?", this.state.phone_number);
//       }
//     } else {
//       if (this.state.phone_number == "") {
//         this.setState({ passSection: true, viewIntl: false, viewPhone: true });
//         console.log(" iffff  2---?", this.state.phone_number);
//       } else {
//         this.setState({ passSection: true });
//         console.log("else 2 ---?", this.state.phone_number);
//       }
//     }

//     if (this.state.loginUsername == null) {
//       if (this.state.emailLogin == "") {
//         this.setState({ passSection: true, emailSection: false });
//       } else {
//         this.setState({ passSection: true });
//       }
//     } else {
//       if (this.state.emailLogin == "") {
//         this.setState({ passSection: true, emailSection: false });
//       } else {
//         this.setState({ passSection: true });
//       }
//     }

//     if (this.state.passSection == true) {
//       this.passwordfocus.focus();
//     }
//   };
//   emailChange = (value) => {
//     this.setState({ loginUsername: "", phone_number: "" });
//     this.setState({ emailLogin: value });
//   };
//   afterSubmitUname = () => {
//     this.setState({ passSection: true });
//     if (this.state.passSection == true) {
//       this.passwordfocus.focus();
//     }
//   };
//   handleFocus = () => this.setState({ isFocused: false });
//   handleTextChange = (newText) => {
//     this.setState({ value: newText });
//     console.log("onEmailFocus ---?", this.state.value);
//   };
//   handleBlur = (value) => {
//     this.setState({ isFocused: false });
//   };
//   render() {
//     const {
//       loginPassChange,
//       phone,
//       emailLogin,

//       throwError,
//       validEmail,
//       editInput,
//     } = this.props;
//     const { email, pass } = this.state;
//     return (
//       <ThemeProvider theme={this.props.theme}>
//         <GeneralStatusBar
//           backgroundColor={
//             this.props.theme.mode === "light" ? "white" : "black"
//           }
//           barStyle={
//             this.props.theme.mode === "dark" ? "light-content" : "dark-content"
//           }
//         />

//         <Container>
//           <ScrollView keyboardShouldPersistTaps={true}>
//             <Root>
//               <View style={styles.container}>
//                 <View style={styles.headerView}>
//                   <Image source={logo} style={styles.logoImg} />
//                   <Text style={styles.logoText}>CONTACTS AIC</Text>
//                 </View>

//                 {this.state.viewIntl ? (
//                   <IntlPhoneInput
//                     containerStyle={{
//                       width: width * 0.85,
//                       height: height * 0.07,
//                       backgroundColor: COLORS.main_sky_blue,
//                       marginTop: Metrics.doubleBaseMargin,
//                     }}
//                     phoneInputStyle={styles.mobileInputText}
//                     dialCodeTextStyle={styles.mobileInputText}
//                     dialCode={this.state.dialCode}
//                     value={
//                       this.state.loginNumber !== ""
//                         ? this.state.loginNumber
//                         : phone
//                     }
//                     // inputRef={"phone"}
//                     keyboardType={"numeric"}
//                     onChangeText={this.onChangeNumber}
//                     defaultCountry="CA"
//                     isLogin={false}
//                     inputRef={(ref) => (this.phoneInput = ref)}
//                     autoFocus={true}
//                   />
//                 ) : null}

//                 {this.state.viewPhone ? (
//                   <TouchableHighlight
//                     style={styles.viewEmail}
//                     onPress={this.viewPhoneToggle}
//                     underlayColor="#DDDDDD"
//                   >
//                     {this.state.loginNumber == null ||
//                     this.state.loginNumber == "" ? (
//                       <Text style={styles.phnText}>Phone Number</Text>
//                     ) : (
//                       <Text style={styles.phnText}>
//                         {this.state.loginNumber}
//                       </Text>
//                     )}
//                   </TouchableHighlight>
//                 ) : null}

//                 {this.state.contactError == undefined ||
//                 this.state.contactError == "" ? null : (
//                   <Text style={styles.error}>{this.state.contactError}</Text>
//                 )}

//                 <View style={styles.orView}>
//                   <Text style={styles.orText}>OR</Text>
//                 </View>
//                 {/* {this.state.emailSection == false ? (
//                   <TouchableHighlight
//                     style={[styles.viewEmail, { marginTop: height * 0.01 }]}
//                     underlayColor="#DDDDDD"
//                     onPress={this.viewEmailSection}
//                   >
//                     {this.state.loginUsername == null ||
//                     this.state.loginUsername == "" ? (
//                       <Text style={styles.phnText}>Username</Text>
//                     ) : (
//                       <Text style={styles.phnText}>
//                         {this.state.loginUsername}
//                       </Text>
//                     )}
//                   </TouchableHighlight>
//                 ) : null} */}
//                 {/* {this.state.emailSection == true ? ( */}
//                   <TouchableOpacity
//                     style={[styles.viewEmail, { marginTop: height * 0.01 }]}
//                   >
//                     {/* <View>
//                       <Text style={styles.emailText}>Username</Text>
//                     </View> */}
//                     <Input
//                     inputType="email"
//                     label={"Email"}
//                     // validEntry={this.state.valid}
//                     value={email}
//                     onChangeText={(email) => {
//                        this.emailChange(email);
//                       this.setState({ email });
//                     }}
//                     autoCapitalize={true}
//                     value={
//                       this.state.loginUsername !== ""
//                         ? this.state.loginUsername
//                         : emailLogin
//                     }
//                     returnKey={"next"}
//                     keyboardType={"email-address"}
//                     secureEntry={false}
//                     placeholder={""}
//                     style={
//                       this.state.emailSection == true
//                         ? styles.uText1
//                         : styles.uText
//                     }
//                   // onSubmitEditing={() => this.afterSubmitUname()}

//                   />
//                     {/* <InputCard
//                       onChangeText={(value) => this.emailChange(value)}
//                       // blurOnSubmit={false}
//                       autoCapitalize={true}
//                       // ref={"emailCont"}
//                       ref={(ref) => {
//                         this.nameFocus = ref;
//                       }}
//                       autoFocus={true}
//                       onFocus={this.handleFocus}
//                       value={
//                         this.state.loginUsername !== ""
//                           ? this.state.loginUsername
//                           : emailLogin
//                       }
//                       returnKey={"next"}
//                       keyboardType={"email-address"}
//                       secureEntry={false}
//                       placeholder={""}
//                       style={
//                         this.state.emailSection == true
//                           ? styles.uText1
//                           : styles.uText
//                       }
//                       onSubmitEditing={() => this.afterSubmitUname()}
//                     ></InputCard> */}
//                   </TouchableOpacity>
//                 {/* ) : null} */}
//                 {this.state.unameError == undefined ||
//                 this.state.unameError == "" ? null : (
//                   <Text style={styles.error}>{this.state.unameError}</Text>
//                 )}
// {/*
//                 {this.state.passSection == false ? (
//                   <TouchableHighlight
//                     style={[styles.viewEmail, { marginTop: height * 0.01 }]}
//                     underlayColor="#DDDDDD"
//                     onPress={this.viewPassSection}
//                   >
//                     {this.state.loginPass == null ||
//                     this.state.loginPass == "" ? (
//                       <View
//                         style={{
//                           flexDirection: "row",
//                           alignItems: "center",
//                           height: height * 0.065,
//                         }}
//                       >
//                         <View style={styles.passswordView}>
//                           <Text style={styles.phnText}>Password</Text>
//                         </View>
//                         <View
//                           style={
//                             ([styles.eyeView],
//                             {
//                               marginTop: Metrics.xsmallMargin,
//                               marginLeft: Metrics.xbaseMargin,
//                             })
//                           }
//                         >
//                           <TouchableHighlight
//                             style={styles.eyeContain}
//                             underlayColor="transparent"
//                             onPress={this.showPassword}
//                           >
//                             {this.state.show == false ? (
//                               <Icon
//                                 name="eye-slash"
//                                 size={18}
//                                 color={COLORS.main_text_color}
//                               />
//                             ) : (
//                               <Icon
//                                 name="eye"
//                                 size={18}
//                                 color={COLORS.main_text_color}
//                               />
//                             )}
//                           </TouchableHighlight>
//                         </View>
//                       </View>
//                     ) : (
//                       <View
//                         style={{
//                           flexDirection: "row",
//                           alignItems: "center",
//                           height: height * 0.065,
//                         }}
//                       >
//                         {this.state.show == false ? (
//                           <Text style={styles.phnText}>
//                             {this.state.loginPass}
//                           </Text>
//                         ) : (
//                           <Text style={styles.hideBlackText}>........</Text>
//                         )}

//                         <View
//                           style={
//                             ([styles.eyeView],
//                             {
//                               marginTop: Metrics.xsmallMargin,
//                               marginLeft: Metrics.xbaseMargin,
//                             })
//                           }
//                         >
//                           <TouchableHighlight
//                             style={styles.eyeContain}
//                             underlayColor="transparent"
//                             onPress={this.showPassword}
//                           >
//                             {this.state.show == false ? (
//                               <Icon
//                                 name="eye-slash"
//                                 size={18}
//                                 color={COLORS.main_text_color}
//                               />
//                             ) : (
//                               <Icon
//                                 name="eye"
//                                 size={18}
//                                 color={COLORS.main_text_color}
//                               />
//                             )}
//                           </TouchableHighlight>
//                         </View>
//                       </View>
//                     )}
//                   </TouchableHighlight>
//                 ) : null} */}
//                 {/* {this.state.passSection == true ? ( */}
//                   <View
//                     style={[styles.viewPassword, { marginTop: height * 0.03 }]}
//                   >
//                     {/* <View>
//                       <Text style={styles.emailText}>Password</Text>
//                     </View> */}

//                     <View style={{ flexDirection: "row" }}>
//                     <Input
//                     inputType="email"
//                     label={ this.state.loginPass == ""  ? "Password" : this.state.loginPass}
//                     validEntry={this.state.valid}
//                     value={email}
//                     secure
//                     secureTextEntry={this.state.show}
//                     onChangeText={loginPassChange}
//                     autoCapitalize={true}
//                     value={
//                       this.state.loginPass !== null
//                         ? this.props.password
//                         : this.state.loginPass
//                     }
//                     returnKey={"next"}
//                     keyboardType={"email-address"}
//                     secureEntry={false}
//                     placeholder={""}
//                     style={
//                       this.state.emailSection == true
//                         ? styles.uText1
//                         : styles.uText
//                     }
//                     onSubmitEditing={() => Keyboard.dismiss()}

//                   />
//                       {/* <InputCard
//                         onChangeText={loginPassChange}
//                         //onChangeText={(value) => this.emailChange(value)}
//                         blurOnSubmit={false}
//                         autoCapitalize={false}
//                         ref={(ref) => {
//                           this.passwordfocus = ref;
//                         }}
//                         autoFocus={true}
//                         value={
//                           this.state.loginPass !== null
//                             ? this.props.password
//                             : this.state.loginPass
//                         }
//                         returnKey={"done"}
//                         keyboardType={"default"}
//                         secureTextEntry={this.state.show}
//                         placeholder={""}
//                         style={
//                           this.state.passSection == true
//                             ? styles.uText1
//                             : styles.uText
//                         }
//                         onSubmitEditing={() => Keyboard.dismiss()}
//                       ></InputCard> */}

//                       <View style={styles.eyeView}>
//                         <TouchableHighlight
//                           style={styles.eyeContain}
//                           underlayColor="transparent"
//                           onPress={this.showPassword}
//                         >
//                           {this.state.show == false ? (
//                             <Icon
//                               name="eye-slash"
//                               size={18}
//                               color={COLORS.main_text_color}
//                             />
//                           ) : (
//                             <Icon
//                               name="eye"
//                               size={18}
//                               color={COLORS.main_text_color}
//                             />
//                           )}
//                         </TouchableHighlight>
//                       </View>
//                     </View>
//                   </View>
//                 {/* ) : null} */}
//                 {this.state.passwordError == undefined ||
//                 this.state.passwordError == "" ? null : (
//                   <Text style={styles.error}>{this.state.passwordError}</Text>
//                 )}

//                 {/* <View style={styles.uText1}>
//                   <Input
//                     inputType="email"
//                     label={"Email"}
//                     validEntry={this.state.valid}
//                     value={email}
//                     onChangeText={(email) => {
//                       // this.ValidateEmail(email);
//                       this.setState({ email });
//                     }}
//                   />
//                 </View>

//                 <View style={{ backgroundColor: "red", width: "100%" }}>
//                   <Input
//                     inputType="email"
//                     label={"Password"}
//                     secure
//                     value={pass}
//                     onChangeText={(pass) => {
//                       this.setState({ pass });
//                     }}
//                   />
//                 </View> */}

//                 <TouchableOpacity
//                   style={styles.viewLogin}
//                   onPress={this.checkInternet}
//                 >
//                   <Text style={styles.loginText}>Log In</Text>
//                 </TouchableOpacity>

//                 <TouchableHighlight
//                   underlayColor="transparent"
//                   onPress={this.check}
//                 >
//                   <View style={styles.rememberView}>
//                     {this.state.checkedOff == true ? (
//                       <View style={styles.checkView}>
//                         <Image source={checked} style={styles.checkedStyle} />
//                       </View>
//                     ) : (
//                       <View style={styles.checkView}></View>
//                     )}

//                     <Text style={styles.rememberText}>Remember Me</Text>
//                   </View>
//                 </TouchableHighlight>

//                 <View style={styles.lineStyle}>
//                   <View style={styles.lineView}></View>
//                   <Text style={styles.orText}>OR </Text>
//                   <View style={styles.lineViewTwo}></View>
//                 </View>
//                 <TouchableOpacity
//                   style={styles.signupInlogin}
//                   onPress={this.navigate}
//                 >
//                   <Text style={styles.loginText}>SIGN UP</Text>
//                 </TouchableOpacity>
//                 {this.showLoader()}
//               </View>
//               <Toast
//                 ref="toast"
//                 style={{
//                   backgroundColor:
//                     this.props.theme.mode === "light" ? "black" : "white",
//                   width: width * 0.9,
//                   alignItems: "center",
//                 }}
//                 position="bottom"
//                 positionValue={200}
//                 fadeInDuration={1000}
//                 fadeOutDuration={1000}
//                 opacity={1}
//                 textStyle={{
//                   color: this.props.theme.mode === "light" ? "white" : "black",
//                   fontFamily: Font.medium,
//                   fontSize: width * 0.04,
//                   padding: 7,
//                 }}
//               />
//             </Root>
//           </ScrollView>
//         </Container>
//       </ThemeProvider>
//     );
//   }
// }

// function mapStateToProps(state) {
//   //  console.log("State From Log -- in------->", state.login);

//   return {
//     response: state.login.response,
//     theme: state.themeReducer.theme,
//     email: state.login.email,
//     password: state.login.password,
//     loader: state.login.loader,
//     shouldLoadData: state.login.shouldLoadData,
//   };
// }

// export default connect(mapStateToProps, actions)(Login);

// const Container = styled.View`
//   flex: 1;
//   width: 100%;
//   align-items: center;
//   background-color: ${(props) => props.theme.backColor};
// `;
// const ScrollView = styled.ScrollView`
//   color: ${(props) => props.theme.textColor};
//   flex: 1;
// `;

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
// import {FloatingLabelInput} from 'react-native-floating-label-input';
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Icon from "react-native-vector-icons/FontAwesome";
import Input from "../../components/Text/InputField";
import { InputCard } from "../../components/InputCard";
import IntlPhoneInput from "react-native-intl-phone-input";
import Metrics from "../theme/Metrics";
import NetInfo from "@react-native-community/netinfo";
import { Root } from "native-base";
import { Spinner } from "../../components/Spinner";
import Toast from "react-native-easy-toast";
import { TouchableHighlight } from "react-native-gesture-handler";
import checked from "../../assets/icons/checked.png";
import { connect } from "react-redux";
import innerimg from "../../assets/images/innerimg.png";
import logo from "../../assets/images/logo.png";
import { showToastError } from "../../action/ToastAction";
import styles from "./style.js";
import unchecked from "../../assets/icons/unchecked.png";

// afterLogout

var { width, height } = Dimensions.get("window");

class Login extends Component {
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

  // componentDidUpdate() {
  //   this.timer = setInterval(() => this.checkEmpty(), 1000);
  // }

  componentDidMount = async () => {
    BackHandler.addEventListener("hardwareBackPress", this.backAction);
    // this.checkEmpty();
    // this.timer = setInterval(() => this.checkEmpty(), 1000);
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
    Keyboard.dismiss()
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
    console.log("Phone ----->", dialCode + "-" + unmaskedPhoneNumber);
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
        this.setState({
          viewPhone: false,
          passSection: false,
          emailSection: false,
        });
        console.log(" iffff  2- m --?", this.props.password);
      } else {
        this.setState({ viewIntl: true });
        this.setState({ viewPhone: false, emailSection: false });
        console.log("else 2 - m --?", this.props.password);
      }
    } else {
      if (this.props.password == "") {
        this.setState({ viewIntl: true });
        this.setState({ viewPhone: false, passSection: false });
        console.log(" iffff  2--  m  -?", this.props.password);
      } else {
        this.setState({ viewIntl: true });
        this.setState({ viewPhone: false, emailSection: false });
        console.log("else 2 --  m  -?", this.props.password);
      }
    }
    if (this.state.loginUsername == null) {
      if (this.state.emailLogin == "") {
        this.setState({
          viewIntl: true,
          viewPhone: false,
          emailSection: false,
        });
      } else {
        this.setState({ viewIntl: true, viewPhone: false });
      }
    } else {
      if (this.state.emailLogin == "") {
        this.setState({
          viewIntl: true,
          viewPhone: false,
          emailSection: false,
        });
      } else {
        this.setState({ viewIntl: true, viewPhone: false });
      }
    }
  };

  passwordChange = (loginPassChange) => {
    this.setState({ loginPass: "" });
    this.setState({ emailPassword: loginPassChange });
  };
  viewEmailSection = () => {
    if (this.state.loginPass == null) {
      if (this.props.password == "") {
        this.setState({ emailSection: true, passSection: false });
        console.log(" iffff 1 ---?", this.props.password);
      } else {
        this.setState({ emailSection: true });
        console.log("else 1 ---?", this.props.password);
      }
    } else {
      if (this.props.password == "") {
        this.setState({ emailSection: true, passSection: false });
        console.log(" iffff  2---?", this.props.password);
      } else {
        this.setState({ emailSection: true });
        console.log("else 2 ---?", this.props.password);
      }
    }

    if (this.state.viewIntl == true) {
      this.setState({ viewIntl: false });
      this.setState({ viewPhone: true });
    }
    if (this.state.emailSection == true) {
      this.nameFocus.focus();
    }
  };
  checkEmpty = () => {
    this.setState({ passSection: false });
    if(this.state.emailLogin !== "" ){
      console.log(" checkEmpty---      ", this.state.phone_number);
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
    this.setState({ loginUsername: "", phone_number: "" });
    this.setState({ emailLogin: value });
  };
  afterSubmitUname = () => {
    this.setState({ passSection: true });
    if (this.state.passSection == true) {
      this.passwordfocus.focus();
    }
  };
  handleFocus = () =>{
    if(this.props.password == ""){
      console.log("foucs ---->",this.props.password)
      this.setState({passSection : false})
     }
  }
  handleFocusEmail =() =>{
   // console.log("foucs  Eamil   ---->",this.state.emailLogin)
    if(this.state.emailLogin == ""){ 
      console.log("foucs  Eamil   ---->",this.state.emailLogin)
      this.setState({emailSection : false})
    }
    
  }
  onSubmitMobile = () => {
    console.log("inale--.")
  };
  onBlurMobile =() =>{
  // if(this.state.phone_number == ""){ 
  //     console.log("  mobile   ---->",this.state.emailLogin)
  //     this.setState({viewIntl  : true , viewPhone : false})
  //   }
    console.log("   ====   mobile   ---->",this.state.emailLogin)
  }
  render() {
    const {
      loginPassChange,
      phone,
      emailLogin,
      email,
      throwError,
      validEmail,
      editInput,
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
          <ScrollView keyboardShouldPersistTaps="always"
>
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
                    // inputRef={"phone"}
                    keyboardType={"numeric"}
                    onChangeText={this.onChangeNumber}
                    defaultCountry="CA"
                    isLogin={false}
                    inputRef={(ref) => (this.phoneInput = ref)}
                    autoFocus={true}
                    onSubmitEditing={this.onSubmitMobile}
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
                       onBlur = {this.handleFocusEmail}
                       onFocus ={this.onBlurMobile}
                      style={
                        this.state.emailSection == true
                          ? styles.uText1
                          : styles.uText
                      }
                      onSubmitEditing={() => this.afterSubmitUname()}
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
                        inputRef ={(ref) => {
                          this.passwordfocus = ref;
                        }}
                        autoFocus={true}
                        onBlur = {this.handleFocus}
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
                        onSubmitEditing={() => Keyboard.dismiss()}
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
