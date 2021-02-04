import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Keyboard,
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component, useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import AsyncStorage from "@react-native-community/async-storage";
import { COLORS } from "../theme/Colors.js";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Icon from "react-native-vector-icons/FontAwesome5";
import IconEntypo from "react-native-vector-icons/Entypo";
import IntlPhoneInput from "react-native-intl-phone-input";
import Metrics from "../theme/Metrics";
import { Spinner } from "../../components/Spinner";
import { Title } from "react-native-paper";
import calender from "../../assets/images/calender.png";
import call from "../../assets/images/call.png";
import { connect } from "react-redux";
import edit from "../../assets/images/edit.png";
import email from "../../assets/images/email.png";
import firebase from "../../services/FirebaseDatabase/db";
import friendImg from "../../assets/images/friendImg.jpg";
import handshake from "../../assets/images/handshake.png";
import home from "../../assets/images/home.png";
import iconEmail from "../../assets/icons/iconEmail.png";
import iconMap from "../../assets/icons/iconMap.png";
import iconMessage from "../../assets/icons/iconMessage.png";
import iconPay from "../../assets/icons/iconPay.png";
import iconVideo from "../../assets/icons/iconVideo.png";
import iconcall from "../../assets/icons/iconCall.png";
import innerimg from "../../assets/images/innerimg.png";
import instagram from "../../assets/images/instagram.png";
import logo from "../../assets/images/logo.png";
import message from "../../assets/images/message.png";
import moment from "moment";
import note from "../../assets/images/note.png";
import reset from "../../assets/images/reset.png";
import styles from "./style.js";
import { updateMyInfo } from "../../services/FirebaseDatabase/updateMyInfo";
import website from "../../assets/images/website.png";
import websiteImg from "../../assets/images/website.png";

const person = require("../../assets/images/person.png");
var { width, height } = Dimensions.get("window");
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: "",
      contacts: "",
      isLoading: false,
      
      isVisible: false,
      isVisible2: false,
      status: false,
      notificationTime: moment(),
      workViewOpen: false,
      tz: [],
      tzs: "",
      selectItem: "",
      ///
      profile_image: "",
      profile_image2: "",
      profile_image3: "",
      number: "",
      number1: "",
      number2: "",
      number1Lablel: "",
      number2: "",
      number3: "",
      friends: "",
      email: "",
      address: "",
      addressLabel: "",
      emailLabel: "",
      messanger: "",
      messengerLabel: "",
      instagram: "",
      instagram2:"",
      instagramLabel: "",
      instagramLabel2: "",
      note: "",
      noteLabel: "",
      website: "",
      websiteLabel: "",
      company: "",
      date:"",
      weddingDate:"",
      jobTitle: "",
      datelabel: "",
      wedding:{date:""},
      wedding_anniversary:{},
      monday: "",
      mondayTo: "",
      tuesday: "",
      tuesdayTo: "",
      wednesday: "",
      wednesdayTo: "",
      thursday: "",
      thursdayTo: "",
      friday: "",
      fridayTo: "",
      saturday: "",
      saturdayTo: "",
      sunday: "",
      sundayTo: "",

      textInput: [{ label: "Select Type...", show: false }],
      inputData: [],

      textInput1: [{ label: "Select Type...", show: false }],
      inputData1: [],

      textInput2: [{ label: "Select Type...", show: false }],
      inputData2: [],
      emailInput: [{ label: "Select Type...", show: false }],
      emailData: [],
      addressInput: [{ label: "Select Type...", show: false }],
      addressData: [],
      messengerInput: [{ label: "Select Type...", show: false }],
      messengerData: [],
      socialMediaInput: [{ label: "Select Type...", show: false }],
      socialMediaData: [],
      socialMediaInput1: [{ label: "Select Type...", show: false }],
      socialMediaData1: [],
      websiteInput: [{ label: "Select Type...", show: false }],
      websiteData: [],
      dateInput: [{ label: "Select Type...", show: false }],
      dateData: [],
      weddingData:[],
      noteInput: [{ label: "Select Type...", show: false }],
      noteData: [],
      companyInput: [{ label: "Select Type...", show: false }],
      companyData: [],
      jobTitleData: [],
      mondayData: [],
      tuesdayData: [],
      wednesdayData: [],
      thursdayData: [],
      fridayData: [],
      saturdayData: [],
      sundayData: [],

      mondayTOData: [],
      tuesdayTOData: [],
      wednesdayTOData: [],
      thursdayTOData: [],
      fridayTOData: [],
      saturdayTOData: [],
      sundayTOData: [],
      weddingForNotify:"",
    };
  }

  componentDidMount() {
    this.timeZoneField();
    this.firebaseDataCAll();
  }
  firebaseDataCAll = () =>{
    const { username } = this.props;
    this.setState({ isLoading: true }, () => {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .get()
        .then((snap) => {
          this.setState({ isLoading: false });
          var item = snap._data;
          this.setState({ contact: item });
          console.log("social media ---->", item.date[0].date);
          this.setState({ friends: item.friend });
          this.setState({ profile_image: item.profile_image });
          this.setState({ profile_image2: item.profile_image2 });
          this.setState({ profile_image3: item.profile_image3});
          {item.number !== ""  ? this.setState({ number: item.number[0].phone })  : null }
          // {item.number1 !== "" ? : null}
         // {item.number1 !== "" ?this.setState({ number1: item.number1[0].phone }) : null}
          
         // this.setState({ number2: item.number2[0].phone });
         {item.email !== "" ?  this.setState({ email: item.email[0].email }): null}
         {item.messenger !== "" ?  this.setState({ messanger: item.messenger[0].messenger }) : null}
         {item.socialMedia !== "" ? this.setState({ instagram: item.socialMedia[0].social }) : null}
         {item.socialMedia1 !== "" ?  this.setState({ instagram2: item.socialMedia1[0].social }) : null}
         {item.address !== "" ? this.setState({ address: item.address[0].address }) : null}
         {item.note !== "" ?  this.setState({ note: item.note[0].note }) : null}
         {item.website !== "" ?  this.setState({ website: item.website[0].website }): null}
         {item.company !== "" ? this.setState({ company: item.company[0].company }): null}
         {item.jobTitle !== "" ?  this.setState({ jobTitle: item.jobTitle[0].jobTitle }): null}
         {item.date !== "" ? this.setState({ date: item.date[0].date })  : null}
         {item.weddingDate !== "" ?this.setState({ weddingDate: item.weddingDate[0].date }) : null}
         {item.mobileLabel !== "" ?   this.setState({ number1Lablel: item.mobileLabel[0].label }): null}
         {item.emailabel !== "" ?  this.setState({ emailLabel: item.emailabel[0].label }): null}
         {item.messengerlabel !== "" ? this.setState({ messengerLabel: item.messengerlabel[0].label }) : null}
         {item.addresslabel !== "" ?  this.setState({ addressLabel: item.addresslabel[0].label }) : null}
         {item.sociallabel !== "" ?  this.setState({ instagramLabel: item.sociallabel[0].label }) : null}
         {item.sociallabel !== "" ?this.setState({ instagramLabel2: item.sociallabel[1].label }) : null}
         {item.notelabel !== "" ?  this.setState({ noteLabel: item.notelabel[0].label }) : null}
         {item.websitelabel !== "" ?this.setState({ websiteLabel: item.websitelabel[0].label }) : null}
         {item.monday !== "" ? this.setState({ monday: item.monday[0].monday }) : null} 
         {item.mondayTo !== "" ? this.setState({ mondayTo: item.mondayTo[0].mondayTo }): null}
         {item.tuesday !== "" ?  this.setState({ tuesday: item.tuesday[0].tuesday }) : null}
         {item.tuesdayTo !== "" ? this.setState({ tuesdayTo: item.tuesdayTo[0].tuesdayTo }): null}
         {item.wednesday !== "" ?  this.setState({ wednesday: item.wednesday[0].wednesday }): null}
         {item.thursday !== "" ?   this.setState({ thursday: item.thursday[0].thursday }): null}
         {item.thursdayTo !== "" ?  this.setState({ thursdayTo: item.thursdayTo[0].thursdayTo }): null}
         {item.friday !== "" ?  this.setState({ friday: item.friday[0].friday }): null}
         {item.saturday !== "" ? this.setState({ saturday: item.saturday[0].saturday }) : null}
         {item.saturdayTo !== "" ? this.setState({ saturdayTo: item.saturdayTo[0].saturdayTo }): null}
         {item.sunday !== "" ?  this.setState({ sunday: item.sunday[0].sunday }): null}
         {item.sundayTo !== "" ? this.setState({ sundayTo: item.sundayTo[0].sundayTo }): null}
          //  this.setState({ datelabel:item.datelabel[0].label});
          });
    });
  }
  timeZoneField = async () => {
    this.state.tz.push("GMT (Greenwhich)");
    this.state.tz.push("GMT (Universal)");
    this.state.tz.push("GMT+1:00(European Central)");
    this.state.tz.push("GMT+2:00(Eastern European)");
    this.state.tz.push("GMT+2:00(Arabic Egypt Standard)");
    this.state.tz.push("GMT+3:00(Eastern African)");
    this.state.tz.push("GMT+3:30(Middle East Time)");
    this.state.tz.push("GMT+4:00(Near East)");
    this.state.tz.push("GMT+5:00(Pakistan Lahore)");
    this.state.tz.push("GMT+5:30(India Standard)");
    this.state.tz.push("GMT+6:00(Bangladesh)");
    this.state.tz.push("GMT+7:00(Vietnam)");
    this.state.tz.push("GMT+8:00(China Taiwan)");
    this.state.tz.push("GMT+9:00(Japan)");
    this.state.tz.push("GMT+9:30(Australia Central) ");
    this.state.tz.push("GMT+10:00(Australia Eastern) ");
    this.state.tz.push("GMT+11:00(Solomon Standard)");
    this.state.tz.push("GMT+12:00(New Zealand)");
    this.state.tz.push("GMT-11:00(Midway Islands )");
    this.state.tz.push("GMT-10:00(Hawaii)");
    this.state.tz.push("GMT-9:00(Alaska)");
    this.state.tz.push("GMT-8:00(Pacific)");
    this.state.tz.push("GMT-7:00(Phoenix)");
    this.state.tz.push("GMT-7:00(Mountain)");
    this.state.tz.push("GMT-6:00(Central)");
    this.state.tz.push("GMT-5:00(Eastern)");
    this.state.tz.push("GMT-5:00(Indiana Eastern)");
    this.state.tz.push("GMT-5:00(Puerto Rico)");
    this.state.tz.push("GMT-5:00(US Virgin Islands Time)");
    this.state.tz.push("GMT-4:00(Canada Newfoundland Time)");
    this.state.tz.push("GMT-3:00(Argentina)");
    this.state.tz.push("GMT-3:00(Brazil Eastern)");
    this.state.tz.push("GMT-1:00(Central African )");
    this.setState({ tzs: this.state.tz });
  };
  renderImg() {
    return (
      <View
        style={{
          alignItems: "center",
          width: width,
          marginTop: Metrics.baseMargin,
        }}
      >
        <View style={styles.ImgBigView}>
          <View style={styles.imgView}>
            {this.state.profile_image == "" ? (
              <ImageBackground
                source={require("../../assets/images/person.png")}
                style={styles.imgStyle}
              >
                <View style={styles.OverImageText}>
                  <TouchableOpacity
                    style={{ alignItems: "center", flexDirection: "row" }}
                    onPress={this.Profilenavigate}
                  >
                    <Icon
                      name={"angle-left"}
                      size={27}
                      color={COLORS.main_text_color}
                    />
                    <Text style={styles.backText}>Back</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            ) : (
              <ImageBackground
                source={{ uri: this.state.profile_image }}
                style={styles.imgStyle}
              >
                <View style={styles.OverImageText}>
                  <TouchableOpacity
                    style={{ alignItems: "center", flexDirection: "row" }}
                    onPress={this.Profilenavigate}
                  >
                    <Icon
                      name={"angle-left"}
                      size={27}
                      color={COLORS.main_text_color}
                    />
                    <Text style={styles.backText}>Back</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            )}
          </View>

          <Text style={styles.profileText}>Sean Green</Text>
        </View>
      </View>
    );
  }

  Profilenavigate = () => {
    this.props.navigation.navigate("AddContact");
  };

  renderMiddle() {
    return (
      <View style={{ width: width, alignItems: "center" }}>
        <View style={styles.middleView}>
          <View style={styles.mainView}>
            <View style={styles.IconView}>
              <View style={styles.iconContainer}>
                <Image source={iconcall} style={styles.callImg} />
              </View>
              <Text style={styles.textIcon}>Call</Text>
            </View>
            <View style={styles.IconView}>
              <View style={styles.iconContainer}>
                <Image source={iconMessage} style={styles.callImg} />
              </View>
              <Text style={styles.textIcon}>Text</Text>
            </View>
            <View style={styles.IconView}>
              <View style={styles.iconContainer}>
                <Image source={iconVideo} style={styles.callImg} />
              </View>
              <Text style={styles.textIcon}>Video</Text>
            </View>
            <View style={styles.IconView}>
              <View style={styles.iconContainer}>
                <Image source={iconEmail} style={styles.callImg} />
              </View>
              <Text style={styles.textIcon}>E-mail</Text>
            </View>
            <View style={styles.IconView}>
              <View style={styles.iconContainer}>
                <Image source={iconMap} style={styles.callImg} />
              </View>
              <Text style={styles.textIcon}>Direction</Text>
            </View>
            <View style={styles.IconView}>
              <View style={styles.iconContainer}>
                <Image source={iconPay} style={styles.callImg} />
              </View>
              <Text style={styles.textIcon}>Pay</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  renderFriend() {
    return (
      <View
        style={{
          marginLeft: Metrics.smallMargin,
          marginTop: Metrics.smallMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={friendImg} style={styles.innerStyle} />

          <View style={styles.filedView}>
            {this.state.status == true ? (
              <TextInput
                placeholder="Friends, Universal Studio"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                value={this.state.friends}
                onChangeText={(friends) => this.setState({ friends })}
              />
            ) : (
              <Text style={styles.stylefiledText}>{this.state.friends}</Text>
            )}
          </View>
        </View>
      </View>
    );
  }

  onChangeText = (number, index) => {
    if (number.isVerified) {
      this.addValues(number.dialCode + "-" + number.unmaskedPhoneNumber, index);
    }
  };
  onChangeText1 = (number, index) => {
    if (number.isVerified) {
      this.addValues1(
        number.dialCode + "-" + number.unmaskedPhoneNumber,
        index
      );
    }
  };
  onChangeText2 = (number, index) => {
    if (number.isVerified) {
      this.addValues2(
        number.dialCode + "-" + number.unmaskedPhoneNumber,
        index
      );
    }
  };
  addValues = (phone, index) => {
    let dataArray = this.state.inputData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.phone = phone;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        inputData: dataArray,
      });
    } else {
      dataArray.push({ phone, index });
      this.setState({
        inputData: dataArray,
      });
    }
  };

  addValues1 = (phone, index) => {
    let dataArray = this.state.inputData1;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.phone = phone;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        inputData1: dataArray,
      });
    } else {
      dataArray.push({ phone, index });
      this.setState({
        inputData1: dataArray,
      });
    }
  };
  addValues2 = (phone, index) => {
    let dataArray = this.state.inputData2;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.phone = phone;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        inputData2: dataArray,
      });
    } else {
      dataArray.push({ phone, index });
      this.setState({
        inputData2: dataArray,
      });
    }
  };
  renderMobile() {
    return (
      <View
        style={{
          marginLeft: Metrics.smallMargin,
          marginTop: Metrics.smallMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={call} style={styles.innerStyle} />

          {this.state.textInput.map((item, index) => {
            return (
              <View>
                <View style={styles.filedView}>
                  {this.state.status == true ? (
                    <IntlPhoneInput
                      containerStyle={{
                        width: width * 0.55,
                        height: height * 0.05,
                        marginBottom: Metrics.smallMargin,
                      }}
                      phoneInputStyle={styles.mobileInputText}
                      dialCodeTextStyle={styles.mobileInputText}
                      dialCode={this.state.dialCode}
                      //value={this.state.phonenumber_1}
                      inputRef={"phone"}
                      keyboardType={"numeric"}
                      onChangeText={(number) =>
                        this.onChangeText(number, index)
                      }
                      defaultCountry="CA"
                      isProfile={false}
                    />
                  ) : (
                    <Text style={styles.stylefiledText}>
                      {this.state.number}
                    </Text>
                  )}
                  <View style={styles.rightView}>
                    <View>
                      <View
                        style={{
                          flex: 1,
                          alignItems: "flex-end",
                          width: width * 0.3,
                        }}
                      >
                        {this.state.status == true ? null : (
                          <View>
                            <View style={styles.rightTwoImg}>
                              <View>
                                <Image source={edit} style={styles.editImg} />
                              </View>
                              <View style={styles.resetImg}>
                                <Image source={reset} style={styles.editImg} />
                              </View>
                            </View>

                            <Text style={styles.righttext}>
                              {this.state.number1Lablel}
                            </Text>
                          </View>
                        )}
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>

        <View style={styles.fieldMain}>
          {this.state.textInput1.map((item, index) => {
            return (
              <View style={styles.filedViewRightTwo}>
                {this.state.status == true ? (
                  <IntlPhoneInput
                    containerStyle={{
                      width: width * 0.55,
                      height: height * 0.05,
                      marginBottom: Metrics.smallMargin,
                    }}
                    phoneInputStyle={styles.mobileInputText}
                    dialCodeTextStyle={styles.mobileInputText}
                    dialCode={this.state.dialCode}
                    inputRef={"phone"}
                    keyboardType={"numeric"}
                    onChangeText={(number) => this.onChangeText1(number, index)}
                    defaultCountry="CA"
                    isProfile={false}
                  />
                ) : (
                  <Text style={styles.stylefiledText}>
                    {this.state.number1}
                  </Text>
                )}

                <View style={styles.rightView}>
                  <View>
                    <View
                      style={{
                        flex: 1,
                        alignItems: "flex-end",
                        width: width * 0.3,
                      }}
                    >
                      {this.state.status == true ? null : (
                        <View>
                          <View style={styles.rightTwoImg}>
                            <View>
                              <Image source={edit} style={styles.editImg} />
                            </View>
                            <View style={styles.resetImg}>
                              <Image source={reset} style={styles.editImg} />
                            </View>
                          </View>
                          {this.state.number2.label == "" ? (
                            <Text style={styles.righttext}>Home</Text>
                          ) : (
                            <Text style={styles.righttext}>
                              {this.state.number2.label}
                            </Text>
                          )}
                        </View>
                      )}
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
          {this.state.textInput2.map((item, index) => {
            return (
              <View style={styles.filedViewRightTwo}>
                {this.state.status == true ? (
                  <IntlPhoneInput
                    containerStyle={{
                      width: width * 0.55,
                      height: height * 0.05,
                      marginBottom: Metrics.smallMargin,
                    }}
                    phoneInputStyle={styles.mobileInputText}
                    dialCodeTextStyle={styles.mobileInputText}
                    dialCode={this.state.dialCode}
                    // value={this.state.phonenumber_3}
                    inputRef={"phone"}
                    keyboardType={"numeric"}
                    onChangeText={(number) => this.onChangeText2(number, index)}
                    defaultCountry="CA"
                    isProfile={false}
                  />
                ) : (
                  <Text style={styles.stylefiledText}>
                    {this.state.number2}
                  </Text>
                )}
                <View style={styles.rightView}>
                  <View>
                    {this.state.status == true ? null : (
                      <View>
                        <View style={styles.rightTwoImg}>
                          <View>
                            <Image source={edit} style={styles.editImg} />
                          </View>
                          <View style={styles.resetImg}>
                            <Image source={reset} style={styles.editImg} />
                          </View>
                        </View>
                        {this.state.number3.label == "" ? (
                          <Text style={styles.righttext}>Home</Text>
                        ) : (
                          <Text style={styles.righttext}>
                            {this.state.number3.label}
                          </Text>
                        )}
                      </View>
                    )}
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
  onChangeEmail = (email, index) => {
    let dataArray = this.state.emailData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.email = email;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        emailData: dataArray,
      });
    } else {
      dataArray.push({ email, index });
      this.setState({
        emailData: dataArray,
      });
    }
  };
  changeEmailLabel = (label) => {
    this.setState({ isEmailModelOpen: false });
    this.state.email_profile.label = label;
    this.setState({ email_profile: this.state.email_profile });
  };

  renderEmail() {
    return (
      <View
        style={{
          marginLeft: Metrics.smallMargin,
          marginTop: Metrics.smallMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={email} style={styles.innerStyle} />
          {this.state.emailInput.map((item, index) => {
            return (
              <View style={styles.filedView}>
                {this.state.status == true ? (
                  <TextInput
                    placeholder="Sean@gmail.com"
                    style={styles.stylefiledText}
                    placeholderTextColor={COLORS.main_text_color}
                    keyboardType={"email-address"}
                    value={this.state.email_profile}
                    onChangeText={(email) => this.onChangeEmail(email, index)}
                  />
                ) : (
                  <Text style={styles.stylefiledText}>{this.state.email}</Text>
                )}

                <View style={styles.rightView}>
                  <View>
                    {this.state.status == true ? null : (
                      <View>
                        <View style={styles.rightTwoImg}>
                          <View>
                            <Image source={edit} style={styles.editImg} />
                          </View>
                          <View style={styles.resetImg}>
                            <Image source={reset} style={styles.editImg} />
                          </View>
                        </View>
                        {/* {this.state.email.label == "" ? (
                      <Text style={styles.righttext}>Home</Text>
                    ) : ( */}
                        <Text style={styles.righttext}>
                          {this.state.emailLabel}
                        </Text>
                        {/* )} */}
                      </View>
                    )}
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
  }

  onChangeAddress = (address, index) => {
    let dataArray = this.state.addressData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.address = address;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        addressData: dataArray,
      });
    } else {
      dataArray.push({ address, index });
      this.setState({
        addressData: dataArray,
      });
    }
  };
  changeAddressLabel = (label) => {
    this.setState({ isAddressModelOpen: false });
    this.state.address_profile.label = label;
    this.setState({ address_profile: this.state.address_profile });
  };

  renderAddress() {
    return (
      <View
        style={{
          marginLeft: Metrics.xsmallMargin,
          marginTop: Metrics.smallMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={home} style={styles.innerStyle} />
          {this.state.addressInput.map((item, index) => {
            return (
              <View style={styles.filedViewAddress}>
                <View
                  style={{
                    width: width * 0.42,
                    height: width * 0.17,
                    flexDirection: "row",
                  }}
                >
                  {this.state.status == true ? (
                    <View
                      style={{
                        width: width * 0.6,
                        height: width * 0.17,
                        flexDirection: "row",
                      }}
                    >
                      <TextInput
                        placeholder=" 4546 willows St. Los Angeles,CA 90016 United states "
                        style={styles.stylefiledText}
                        placeholderTextColor={COLORS.main_text_color}
                        multiline={true}
                        keyboardType={"default"}
                        value={this.state.address_profile}
                        onChangeText={(address) =>
                          this.onChangeAddress(address, index)
                        }
                      />
                    </View>
                  ) : (
                    <View
                      style={{
                        width: width * 0.6,
                        height: width * 0.17,
                        flexDirection: "row",
                      }}
                    >
                      <Text style={styles.stylefiledText}>
                        {this.state.address}
                      </Text>
                    </View>
                  )}

                  <View style={styles.rightView}>
                    <View>
                      <View
                        style={{
                          flex: 1,
                          alignItems: "flex-end",
                          width: width * 0.2,
                        }}
                      >
                        {this.state.status == true ? null : (
                          <View>
                            <View style={styles.rightTwoImg}>
                              <View>
                                <Image source={edit} style={styles.editImg} />
                              </View>
                              <View style={styles.resetImg}>
                                <Image source={reset} style={styles.editImg} />
                              </View>
                            </View>

                            <Text style={styles.righttext}>
                              {this.state.addressLabel}
                            </Text>
                          </View>
                        )}
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
  }

  onChangeMessenger = (messenger, index) => {
    let dataArray = this.state.messengerData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.messenger = messenger;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        messengerData: dataArray,
      });
    } else {
      dataArray.push({ messenger, index });
      this.setState({
        messengerData: dataArray,
      });
    }
  };
  changeMessangerLabel = (label) => {
    this.setState({ isMessangerModelOpen: false });
    this.state.messenger_profile.label = label;
    this.setState({ messenger_profile: this.state.messenger_profile });
  };
  renderMesssanger() {
    return (
      <View
        style={{
          marginLeft: Metrics.smallMargin,
          marginTop: Metrics.smallMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={message} style={styles.innerStyle} />
          {this.state.messengerInput.map((item, index) => {
            return (
              <View style={styles.filedView}>
                {this.state.status == true ? (
                  <TextInput
                    placeholder="Sean@gmail.com"
                    style={styles.stylefiledText}
                    placeholderTextColor={COLORS.main_text_color}
                    keyboardType={"default"}
                    value={this.state.messenger_profile}
                    onChangeText={(value) => this.onChangeMessenger(value)}
                  />
                ) : (
                  <Text style={styles.stylefiledText}>
                    {this.state.messanger}
                  </Text>
                )}

                <View style={styles.rightView}>
                  <View>
                    <View
                      style={{
                        flex: 1,
                        alignItems: "flex-end",
                        width: width * 0.15,
                      }}
                    >
                      {this.state.status == true ? null : (
                        <View>
                          <View style={styles.rightTwoImg}>
                            <View>
                              <Image source={edit} style={styles.editImg} />
                            </View>
                            <View style={styles.resetImg}>
                              <Image source={reset} style={styles.editImg} />
                            </View>
                          </View>
                          {/* {this.state.messanger.label == "" ? (
                        <Text style={styles.righttext}>Facebook Messanger</Text>
                      ) : ( */}
                          <Text style={styles.righttext}>
                            {this.state.messengerLabel}
                          </Text>
                          {/* )} */}
                        </View>
                      )}
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
  }

  onChangeSocialMedia = (social, index) => {
    let dataArray = this.state.socialMediaData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.social = social;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        socialMediaData: dataArray,
      });
    } else {
      dataArray.push({ social, index });
      this.setState({
        socialMediaData: dataArray,
      });
    }
  };
  onChangeSocialMedia1 = (social, index) => {
    let dataArray = this.state.socialMediaData1;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.social = social;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        socialMediaData1: dataArray,
      });
    } else {
      dataArray.push({ social, index });
      this.setState({
        socialMediaData1: dataArray,
      });
    }
  };
  changeSocialMediaLabel = (label) => {
    this.setState({ isSocialMediaModelOpen: false });
    this.state.facebook_profile.label = label;
    this.setState({ facebook_profile: this.state.facebook_profile });
  };
  changeSocialMediaLabel2 = (label) => {
    this.setState({ isSocialMediaModelOpen2: false });
    this.state.instagram_profile.label = label;
    this.setState({ instagram_profile: this.state.instagram_profile });
  };
  renderSocialMedia() {
    return (
      <View
        style={{
          marginLeft: Metrics.smallMargin,
          marginTop: Metrics.smallMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={instagram} style={styles.innerStyle} />
          {this.state.socialMediaInput.map((item, index) => {
            return (
              <View style={styles.filedView}>
                {this.state.status == true ? (
                  <TextInput
                    placeholder="@usernamesean"
                    style={styles.stylefiledText}
                    placeholderTextColor={COLORS.main_text_color}
                    keyboardType={"numeric"}
                    keyboardType={"default"}
                    value={this.state.facebook_profile}
                    onChangeText={(social) =>
                      this.onChangeSocialMedia(social, index)
                    }
                  />
                ) : (
                  <Text style={styles.stylefiledText}>
                    {this.state.instagram}
                  </Text>
                )}

                <View style={styles.rightView}>
                  <View>
                    <View
                      style={{
                        flex: 1,
                        alignItems: "flex-end",
                        width: width * 0.3,
                      }}
                    >
                      {this.state.status == true ? null : (
                        <View>
                          <View style={styles.rightTwoImg}>
                            <View>
                              <Image source={edit} style={styles.editImg} />
                            </View>
                            <View style={styles.resetImg}>
                              <Image source={reset} style={styles.editImg} />
                            </View>
                          </View>
                          {/* {this.state.facebook.label == "" ? (
                        <Text style={styles.righttext}>Facebook</Text>
                      ) : ( */}
                          <Text style={styles.righttext}>
                            {this.state.instagramLabel}
                          </Text>
                          {/* )} */}
                        </View>
                      )}
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
        {this.state.socialMediaInput1.map((item, index) => {
          return (
            <View style={styles.fieldMain}>
              <View style={styles.filedViewRightTwo}>
                {this.state.status == true ? (
                  <TextInput
                    placeholder="Seanusername"
                    style={styles.stylefiledText}
                    placeholderTextColor={COLORS.main_text_color}
                    keyboardType={"default"}
                   // value={this.state.instagram_profile}
                    onChangeText={(social) =>
                      this.onChangeSocialMedia1(social, index)
                    }
                  />
                ) : (
                  <Text style={styles.stylefiledText}>
                    {this.state.instagram2}
                  </Text>
                )}

                <View style={styles.rightView}>
                  <View>
                    <View
                      style={{
                        flex: 1,
                        alignItems: "flex-end",
                        width: width * 0.3,
                      }}
                    >
                      {this.state.status == true ? null : (
                        <View>
                          <View style={styles.rightTwoImg}>
                            <View>
                              <Image source={edit} style={styles.editImg} />
                            </View>
                            <View style={styles.resetImg}>
                              <Image source={reset} style={styles.editImg} />
                            </View>
                          </View>
                          {/* {this.state.instagram.label == "" ? (
                        <Text style={styles.righttext}>Instagram</Text>
                      ) : ( */}
                          <Text style={styles.righttext}>
                            {this.state.instagramLabel2}
                          </Text>
                          {/* )} */}
                        </View>
                      )}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
  onChangeWebsite = (website, index) => {
    let dataArray = this.state.websiteData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.website = website;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        websiteData: dataArray,
      });
    } else {
      dataArray.push({ website, index });
      this.setState({
        websiteData: dataArray,
      });
    }
  };
  changeWebsiteLabel = (label) => {
    this.setState({ isWebsiteModelOpen: false });
    this.state.website_profile.label = label;
    this.setState({ website_profile: this.state.website_profile });
  };
  renderWebsite() {
    return (
      <View
        style={{
          marginLeft: Metrics.smallMargin,
          marginTop: Metrics.smallMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={website} style={styles.innerStyle} />
          {this.state.websiteInput.map((item, index) => {
            return (
              <View style={styles.filedView}>
                {this.state.status == true ? (
                  <TextInput
                    placeholder="www.seamuser.com"
                    style={styles.stylefiledText}
                    placeholderTextColor={COLORS.main_text_color}
                    keyboardType={"default"}
                    value={this.state.website_profile}
                    onChangeText={(website) =>
                      this.onChangeWebsite(website, index)
                    }
                  />
                ) : (
                  <Text style={styles.stylefiledText}>
                    {this.state.website}
                  </Text>
                )}

                <View style={styles.rightView}>
                  <View>
                    <View
                      style={{
                        flex: 1,
                        alignItems: "flex-end",
                        width: width * 0.4,
                      }}
                    >
                      {this.state.status == true ? null : (
                        <View>
                          <View style={styles.rightTwoImg}>
                            <View>
                              <Image source={edit} style={styles.editImg} />
                            </View>
                            <View style={styles.resetImg}>
                              <Image source={reset} style={styles.editImg} />
                            </View>
                          </View>
                          {/* {this.state.website.label == "" ? (
                        <Text style={styles.righttext}>Personal</Text>
                      ) : ( */}
                          <Text style={styles.righttext}>
                            {this.state.websiteLabel}
                          </Text>
                          {/* )} */}
                        </View>
                      )}
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
  showDateTimePicker = () => {
    this.setState({ isVisible: true });
  };
  onChangeDate = (date,index) => {
    this.setState({isVisible: false });
    var date = moment(date).format("MMMM, Do YYYY");
   this.setState({date:date })
    let dataArray = this.state.dateData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.date = date;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        dateData  : dataArray,
      });
    } else {
      dataArray.push({ date , index });
      this.setState({
        dateData : dataArray,
      });
    }
   
  };
  hidePicker = () => {
    this.setState({ isVisible: false });
  };
  showDateTimePicker2 = () => {
    this.setState({ isVisible2: true });
  };
  onChangeDate2 = (date,index) => {
    this.setState({isVisible2: false, notificationTime: moment(date), weddingForNotify : date });
    var date = moment(date).format("MMMM, Do YYYY");
    let dataArray = this.state.weddingData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.date = date;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        weddingData  : dataArray,
      });
    } else {
      dataArray.push({ date , index });
      this.setState({
        weddingData : dataArray,
      });
    }
    console.log("date--->",dataArray)
  };
  hidePicker2 = () => {
    this.setState({ isVisible2: false });
  };

 
  renderDate() {
    return (
      <View>
          {this.state.textInput.map((item, index) => {
                return (
             
      <View
        style={{
          marginLeft: Metrics.smallMargin,
          marginTop: Metrics.smallMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={calender} style={styles.innerStyle} />
          {this.state.status == true ? (
            <TouchableOpacity
              style={styles.filedView}
              onPress={this.showDateTimePicker}
            >
         {this.state.isVisible == false && this.state.date == "" ? ( 
               <View style={styles.dateView}>
              <Text style={styles.dateText}>Date</Text>
            </View>
           ) : null}
          <Text style={styles.dateText}>{this.state.date}</Text> 

              <DateTimePickerModal
                isVisible={this.state.isVisible}
                onConfirm={(date) => this.onChangeDate(date,index)}
                onCancel={this.hidePicker}
              />

              <View style={styles.rightView}>
                <View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "flex-end",
                      width: width * 0.3,
                    }}
                  >
                    {this.state.status == true ? null : (
                      <View>
                        <View style={styles.rightTwoImg}>
                          <View>
                            <Image source={edit} style={styles.editImg} />
                          </View>
                          <View style={styles.resetImg}>
                            <Image source={reset} style={styles.editImg} />
                          </View>
                        </View>
                        {this.state.date.label == "" ? (
                          <Text style={styles.righttext}>Birthday</Text>
                        ) : (
                          <Text style={styles.righttext}>
                            {this.state.date.label}
                          </Text>
                        )}
                      </View>
                    )}
                   
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.filedView}>
              <Text style={styles.stylefiledText}>{this.state.date}</Text>
              <View style={styles.rightView}>
                <View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "flex-end",
                      width: width * 0.3,
                    }}
                  >
                    <View style={styles.rightTwoImg}>
                      <View>
                        <Image source={edit} style={styles.editImg} />
                      </View>
                      <View style={styles.resetImg}>
                        <Image source={reset} style={styles.editImg} />
                      </View>
                    </View>
                    <Text style={styles.righttext}> Birthday </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>
        <View style={styles.fieldMain}>
          {this.state.status == true ? (
            <TouchableOpacity
              style={styles.filedViewRightTwo}
              onPress={this.showDateTimePicker2}
            >
              {this.state.isVisible2 == false &&
              this.state.weddingDate == "" ? (
                <Text style={styles.dateText}>3rd Febrauary,1999</Text>
              ) : null}
              <Text style={styles.dateText}>
                {this.state.weddingDate}
              </Text>
              <DateTimePickerModal
                isVisible={this.state.isVisible2}
                onConfirm={(date) =>this.onChangeDate2(date,index)}
                onCancel={this.hidePicker2}
                mode="datetime"
                is24Hour={false}
                date={new Date(this.state.notificationTime)}
                titleIOS="Pick your Notification time"
              />

              <View style={styles.rightView}>
                <View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "flex-end",
                      width: width * 0.4,
                    }}
                  >
                    {this.state.status == true ? null : (
                      <View>
                        <View style={styles.rightTwoImg}>
                          <View>
                            <Image source={edit} style={styles.editImg} />
                          </View>
                          <View style={styles.resetImg}>
                            <Image source={reset} style={styles.editImg} />
                          </View>
                        </View>
                        {this.state.wedding.label == "" ? (
                          <Text style={styles.righttext}>
                            wedding anniversary
                          </Text>
                        ) : (
                          <Text style={styles.righttext}>
                            {this.state.wedding.label}
                          </Text>
                        )}
                      </View>
                    )}
                   
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.filedViewRightTwo}>
              <Text style={styles.stylefiledText}>
                {this.state.weddingDate}
              </Text>
              <View style={styles.rightView}>
                <View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "flex-end",
                      width: width * 0.3,
                    }}
                  >
                    <View style={styles.rightTwoImg}>
                      <View>
                        <Image source={edit} style={styles.editImg} />
                      </View>
                      <View style={styles.resetImg}>
                        <Image source={reset} style={styles.editImg} />
                      </View>
                    </View>
                    <Text style={styles.righttext}>wedding anniversary</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>
      </View>
           
           )})}
           </View>
     
    );
  }

  onChangNote = (note, index) => {
    let dataArray = this.state.noteData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.note = note;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        noteData: dataArray,
      });
    } else {
      dataArray.push({ note, index });
      this.setState({
        noteData: dataArray,
      });
    }
  };
  // changeNoteLabel = (label) => {
  //   this.setState({ isNoteModelOpen: false });
  //   this.state.note_profile.label = label;
  //   this.setState({ note_profile: this.state.note_profile });
  // };
  renderNote() {
    return (
      <View
        style={{
          marginLeft: Metrics.xsmallMargin,
          marginTop: Metrics.smallMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={note} style={styles.innerStyle} />
          {this.state.noteInput.map((item, index) => {
            return (
              <View style={styles.filedViewAddress}>
                <View
                  style={{
                    width: width * 0.5,
                    height: width * 0.17,
                    flexDirection: "row",
                  }}
                >
                  {this.state.status ? (
                    <TextInput
                      placeholder="To book me Comedian E-mail me at workmail@company.com"
                      style={styles.stylefiledText}
                      placeholderTextColor={COLORS.main_text_color}
                      multiline={true}
                      keyboardType={"default"}
                      //value={this.state.note_profile}
                      onChangeText={(note) => this.onChangNote(note, index)}
                    />
                  ) : (
                    <Text style={styles.stylefiledText}>{this.state.note}</Text>
                  )}

                  <View style={styles.rightView}>
                    <View>
                      <View
                        style={{
                          flex: 1,
                          alignItems: "flex-end",
                          width: width * 0.2,
                        }}
                      >
                        {this.state.status == true ? null : (
                          <View>
                            <View style={styles.rightTwoImg}>
                              <View>
                                <Image source={edit} style={styles.editImg} />
                              </View>
                              <View style={styles.resetImg}>
                                <Image source={reset} style={styles.editImg} />
                              </View>
                            </View>
                            {/* {this.state.note.label == "" ? (
                          <Text style={styles.righttext}>Note</Text>
                        ) : ( */}
                            <Text style={styles.righttext}>
                              {this.state.noteLabel}
                            </Text>
                            {/* )} */}
                          </View>
                        )}
                        
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
  }

  onChangeCompany = (company, index) => {
    let dataArray = this.state.companyData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.company = company;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        companyData: dataArray,
      });
    } else {
      dataArray.push({ company, index });
      this.setState({
        companyData: dataArray,
      });
    }
  };
  onChangeJobTitle = (jobTitle, index) => {
    this.setState({jobTitle:jobTitle})
    let dataArray = this.state.jobTitleData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.jobTitle = jobTitle;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        jobTitleData: dataArray,
      });
    } else {
      dataArray.push({ jobTitle, index });
      this.setState({
        jobTitleData: dataArray,
      });
    }
  };

  onChangeMonday = (monday, index) => {
    this.setState({monday:monday})
    let dataArray = this.state.mondayData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.monday = monday;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        mondayData: dataArray,
      });
    } else {
      dataArray.push({ monday, index });
      this.setState({
        mondayData: dataArray,
      });
    }
  };
  onChangeMondayTo = (mondayTo, index) => {
    this.setState({mondayTo:mondayTo})
    let dataArray = this.state.mondayTOData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.mondayTo = mondayTo;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        mondayTOData: dataArray,
      });
    } else {
      dataArray.push({ mondayTo, index });
      this.setState({
        mondayTOData: dataArray,
      });
    }
  };

  onChangeTuesday = (tuesday, index) => {
    this.setState({tuesday:tuesday})
    let dataArray = this.state.tuesdayData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.tuesday = tuesday;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        tuesdayData: dataArray,
      });
    } else {
      dataArray.push({ tuesday, index });
      this.setState({
        tuesdayData: dataArray,
      });
    }
  };
  onChangeTuesdayTo = (tuesdayTo, index) => {
    this.setState({tuesdayTo:tuesdayTo})
    let dataArray = this.state.tuesdayTOData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.tuesdayTo = tuesdayTo;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        tuesdayTOData: dataArray,
      });
    } else {
      dataArray.push({ tuesdayTo, index });
      this.setState({
        tuesdayTOData: dataArray,
      });
    }
  };
  onChangeWednesday = (wednesday, index) => {
    this.setState({wednesday:wednesday})
    let dataArray = this.state.wednesdayData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.wednesday = wednesday;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        wednesdayData: dataArray,
      });
    } else {
      dataArray.push({ wednesday, index });
      this.setState({
        wednesdayData: dataArray,
      });
    }
  };
  onChangeWednesdayTo = (wednesdayTo, index) => {
    this.setState({wednesdayTo:wednesdayTo})
    let dataArray = this.state.wednesdayTOData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.wednesdayTo = wednesdayTo;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        wednesdayTOData: dataArray,
      });
    } else {
      dataArray.push({ wednesdayTo, index });
      this.setState({
        wednesdayTOData: dataArray,
      });
    }
  };
  onChangeThursday = (thursday, index) => {
    this.setState({thursday:thursday})
    let dataArray = this.state.thursdayData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.thursday = thursday;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        thursdayData: dataArray,
      });
    } else {
      dataArray.push({ thursday, index });
      this.setState({
        thursdayData: dataArray,
      });
    }
  };
  onChangeThursdayTo = (thursdayTo, index) => {
    this.setState({thursdayTo:thursdayTo})
    let dataArray = this.state.thursdayTOData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.thursdayTo = thursdayTo;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        thursdayTOData: dataArray,
      });
    } else {
      dataArray.push({ thursdayTo, index });
      this.setState({
        thursdayTOData: dataArray,
      });
    }
  };
  onChangeFriday = (friday, index) => {
    this.setState({friday:friday})
    let dataArray = this.state.fridayData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.friday = friday;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        fridayData: dataArray,
      });
    } else {
      dataArray.push({ friday, index });
      this.setState({
        fridayData: dataArray,
      });
    }
  };
  onChangeFridayTo = (fridayTo, index) => {
    this.setState({fridayTo:fridayTo})
    let dataArray = this.state.fridayTOData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.fridayTo = fridayTo;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        fridayTOData: dataArray,
      });
    } else {
      dataArray.push({ fridayTo, index });
      this.setState({
        fridayTOData: dataArray,
      });
    }
  };
  onChangeSaturday = (saturday, index) => {
    this.setState({saturday:saturday})
    let dataArray = this.state.saturdayData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.saturday = saturday;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        saturdayData: dataArray,
      });
    } else {
      dataArray.push({ saturday, index });
      this.setState({
        saturdayData: dataArray,
      });
    }
  };
  onChangeSaturdayTo = (saturdayTo, index) => {
    this.setState({saturdayTo:saturdayTo})
    let dataArray = this.state.saturdayTOData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.saturdayTo = saturdayTo;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        saturdayTOData: dataArray,
      });
    } else {
      dataArray.push({ saturdayTo, index });
      this.setState({
        saturdayTOData: dataArray,
      });
    }
  };
  onChangeSunday = (sunday, index) => {
    this.setState({sunday:sunday})
    let dataArray = this.state.sundayData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.sunday = sunday;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        sundayData: dataArray,
      });
    } else {
      dataArray.push({ sunday, index });
      this.setState({
        sundayData: dataArray,
      });
    }
  };
  onChangeSundayTo = (sundayTo, index) => {
    this.setState({sundayTo:sundayTo})
    let dataArray = this.state.sundayTOData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.sundayTo = sundayTo;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        sundayTOData: dataArray,
      });
    } else {
      dataArray.push({ sundayTo, index });
      this.setState({
        sundayTOData: dataArray,
      });
    }
  };

  renderItem({ item, index }) {
    return (
      <TouchableOpacity
        style={{ marginTop: 10, marginLeft: 5 }}
        onPress={() => {
          this.itemSelect(item);
        }}
      >
        <Text style={[styles.workText, { fontSize: width * 0.026 }]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  }

  itemSelect = (item) => {
    this.setState({ selectItem: item, workViewOpen: false });
  };
  renderItem2({ item, index }) {
    return (
      <TouchableOpacity
        style={{ marginTop: 10, marginLeft: 5 }}
        onPress={() => {
          this.itemSelect(item);
        }}
      >
        <Text style={[styles.workText, { fontSize: width * 0.026 }]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  }
  renderCompany() {
    return (
      <View>
        {this.state.companyInput.map((item, index) => {
          return (
            <View
              style={{
                marginLeft: Metrics.smallMargin,
                marginTop: Metrics.smallMargin,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={handshake} style={styles.innerStyle} />

                <View style={styles.filedView}>
                  {this.state.status == true ? (
                    <TextInput
                      placeholder="IBM"
                      style={styles.stylefiledText}
                      placeholderTextColor={COLORS.main_text_color}
                      keyboardType={"default"}
                     // value={this.state.company_profile}
                      onChangeText={(company) => this.onChangeCompany(company,index)}
                    />
                  ) : (
                    <Text style={styles.stylefiledText}>
                      {this.state.company}
                    </Text>
                  )}

                  <View style={styles.rightView}>
                    <View>
                      <View
                        style={{
                          flex: 1,
                          alignItems: "flex-end",
                          width: width * 0.3,
                        }}
                      >
                        <View style={styles.rightTwoImg}>
                          {/* <View>
                    <Image source={edit} style={styles.editImg} />
                  </View> */}
                          <View style={styles.resetImg}>
                            <Image source={reset} style={styles.editImg} />
                          </View>
                        </View>
                        <Text style={styles.righttext}> Company </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.fieldMain}>
                <View style={styles.filedViewRightTwo}>
                  {this.state.status == true ? (
                    <TextInput
                      placeholder="Software Engineer"
                      style={styles.stylefiledText}
                      placeholderTextColor={COLORS.main_text_color}
                      keyboardType={"numeric"}
                      keyboardType={"default"}
                     // value={this.state.jobTitle}
                      onChangeText={(value) => this.onChangeJobTitle(value , index)}
                    />
                  ) : (
                    <Text style={styles.stylefiledText}>
                      {this.state.jobTitle}
                    </Text>
                )}

                  <View style={styles.rightView}>
                    <View>
                      <View
                        style={{
                          flex: 1,
                          alignItems: "flex-end",
                          width: width * 0.3,
                        }}
                      >
                        <View style={styles.rightTwoImg}>
                          {/* <View>
                    <Image source={edit} style={styles.editImg} />
                  </View> */}
                          <View style={styles.resetImg}>
                            <Image source={reset} style={styles.editImg} />
                          </View>
                        </View>
                        <Text style={styles.righttext}> Job Title </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginTop: Metrics.baseMargin,
                  marginLeft: Metrics.cdoubleBaseMargin,
                }}
              >
                <View style={styles.workView}>
                  <View style={styles.LeftView}>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text
                        style={[
                          styles.workText,
                          { fontSize: width * 0.025, width: width * 0.16 },
                        ]}
                      >
                        Monday
                      </Text>
                      <View style={styles.timeView}>
                        <TextInput
                          placeholder=""
                          placeholderTextColor={COLORS.main_text_color}
                          style={styles.timeText}
                          value={this.state.monday}
                          onChangeText={(monday) =>
                            this.onChangeMonday(monday , index)
                          }
                          editable={this.state.status ? true : false}
                        />
                      </View>
                      <Text
                        style={[
                          styles.workText,
                          { fontSize: width * 0.035, marginLeft: 5 },
                        ]}
                      >
                        to
                      </Text>
                      <View style={styles.timeView}>
                        <TextInput
                          placeholder=""
                          placeholderTextColor={COLORS.main_text_color}
                          style={styles.timeText}
                          value={this.state.mondayTo}
                          onChangeText={(mondayTo) =>
                            this.onChangeMondayTo(mondayTo,index)
                          }
                          editable={this.state.status ? true : false}
                        />
                      </View>
                    </View>
                    <View style={styles.dayView}>
                      <Text
                        style={[
                          styles.workText,
                          { fontSize: width * 0.025, width: width * 0.16 },
                        ]}
                      >
                        Tuesday
                      </Text>
                      <View style={styles.timeView}>
                        <TextInput
                          placeholder=""
                          placeholderTextColor={COLORS.main_text_color}
                          style={styles.timeText}
                          value={this.state.tuesday}
                          onChangeText={(tuesday) =>
                            this.onChangeTuesday(tuesday,index)
                          }
                          editable={this.state.status ? true : false}
                        />
                      </View>
                      <Text
                        style={[
                          styles.workText,
                          { fontSize: width * 0.035, marginLeft: 5 },
                        ]}
                      >
                        to
                      </Text>
                      <View style={styles.timeView}>
                        <TextInput
                          placeholder=""
                          placeholderTextColor={COLORS.main_text_color}
                          style={styles.timeText}
                          value={this.state.tuesdayTo}
                          onChangeText={(tuesdayTo) =>
                            this.onChangeTuesdayTo(tuesdayTo,index)
                          }
                          editable={this.state.status ? true : false}
                        />
                      </View>
                    </View>
                    <View style={styles.dayView}>
                      <Text
                        style={[
                          styles.workText,
                          { fontSize: width * 0.025, width: width * 0.16 },
                        ]}
                      >
                        Wednesday
                      </Text>
                      <View style={styles.timeView}>
                        <TextInput
                          placeholder=""
                          placeholderTextColor={COLORS.main_text_color}
                          style={styles.timeText}
                          value={this.state.wednesday}
                          onChangeText={(wednesday) =>
                            this.onChangeWednesday(wednesday,index)
                          }
                          editable={this.state.status ? true : false}
                        />
                      </View>
                      <Text
                        style={[
                          styles.workText,
                          { fontSize: width * 0.035, marginLeft: 5 },
                        ]}
                      >
                        to
                      </Text>
                      <View style={styles.timeView}>
                        <TextInput
                          placeholder=""
                          placeholderTextColor={COLORS.main_text_color}
                          style={styles.timeText}
                          value={this.state.wednesdayTo}
                          onChangeText={(wednesdayTo) =>
                            this.onChangeWednesdayTo(wednesdayTo,index)
                          }
                          editable={this.state.status ? true : false}
                        />
                      </View>
                    </View>
                    <View style={styles.dayView}>
                      <Text
                        style={[
                          styles.workText,
                          { fontSize: width * 0.025, width: width * 0.16 },
                        ]}
                      >
                        Thursday
                      </Text>
                      <View style={styles.timeView}>
                        <TextInput
                          placeholder=""
                          placeholderTextColor={COLORS.main_text_color}
                          style={styles.timeText}
                          value={this.state.thursday}
                          onChangeText={(thursday) =>
                            this.onChangeThursday(thursday,index)
                          }
                          editable={this.state.status ? true : false}
                        />
                      </View>
                      <Text
                        style={[
                          styles.workText,
                          { fontSize: width * 0.035, marginLeft: 5 },
                        ]}
                      >
                        to
                      </Text>
                      <View style={styles.timeView}>
                        <TextInput
                          placeholder=""
                          placeholderTextColor={COLORS.main_text_color}
                          style={styles.timeText}
                          value={this.state.thursdayTo}
                          onChangeText={(thursdayTo) =>
                            this.onChangeThursdayTo(thursdayTo,index)
                          }
                          editable={this.state.status ? true : false}
                        />
                      </View>
                    </View>
                    <View style={styles.dayView}>
                      <Text
                        style={[
                          styles.workText,
                          { fontSize: width * 0.025, width: width * 0.16 },
                        ]}
                      >
                        Friday
                      </Text>
                      <View style={styles.timeView}>
                        <TextInput
                          placeholder=""
                          placeholderTextColor={COLORS.main_text_color}
                          style={styles.timeText}
                          value={this.state.friday}
                          onChangeText={(friday) =>
                            this.onChangeFriday(friday,index)
                          }
                          editable={this.state.status ? true : false}
                        />
                      </View>
                      <Text
                        style={[
                          styles.workText,
                          { fontSize: width * 0.035, marginLeft: 5 },
                        ]}
                      >
                        to
                      </Text>
                      <View style={styles.timeView}>
                        <TextInput
                          placeholder=""
                          placeholderTextColor={COLORS.main_text_color}
                          style={styles.timeText}
                          value={this.state.fridayTo}
                          onChangeText={(fridayTo) =>
                            this.onChangeFridayTo(fridayTo,index)
                          }
                          editable={this.state.status ? true : false}
                        />
                      </View>
                    </View>
                    <View style={styles.dayView}>
                      <Text
                        style={[
                          styles.workText,
                          { fontSize: width * 0.025, width: width * 0.16 },
                        ]}
                      >
                        Saturday
                      </Text>
                      <View style={styles.timeView}>
                        <TextInput
                          placeholder=""
                          placeholderTextColor={COLORS.main_text_color}
                          style={styles.timeText}
                          value={this.state.saturday}
                          onChangeText={(saturday) =>
                            this.onChangeSaturday(saturday,index)
                          }
                          editable={this.state.status ? true : false}
                        />
                      </View>
                      <Text
                        style={[
                          styles.workText,
                          { fontSize: width * 0.035, marginLeft: 5 },
                        ]}
                      >
                        to
                      </Text>
                      <View style={styles.timeView}>
                        <TextInput
                          placeholder=""
                          placeholderTextColor={COLORS.main_text_color}
                          style={styles.timeText}
                          value={this.state.saturdayTo}
                          onChangeText={(saturdayTo) =>
                            this.onChangeSaturdayTo(saturdayTo,index)
                          }
                          editable={this.state.status ? true : false}
                        />
                      </View>
                    </View>
                    <View style={styles.dayView}>
                      <Text
                        style={[
                          styles.workText,
                          { fontSize: width * 0.025, width: width * 0.16 },
                        ]}
                      >
                        Sunday
                      </Text>
                      <View style={styles.timeView}>
                        <TextInput
                          placeholder=""
                          placeholderTextColor={COLORS.main_text_color}
                          style={styles.timeText}
                          value={this.state.sunday}
                          onChangeText={(sunday) =>
                            this.onChangeSunday(sunday,index)
                          }
                          editable={this.state.status ? true : false}
                        />
                      </View>
                      <Text
                        style={[
                          styles.workText,
                          { fontSize: width * 0.035, marginLeft: 5 },
                        ]}
                      >
                        to
                      </Text>
                      <View style={styles.timeView}>
                        <TextInput
                          placeholder=""
                          placeholderTextColor={COLORS.main_text_color}
                          style={styles.timeText}
                          value={this.state.sundayTo}
                          onChangeText={(sundayTo) =>
                            this.onChangeSundayTo(sundayTo,index)
                          }
                          editable={this.state.status ? true : false}
                        />
                      </View>
                    </View>
                  </View>

                  <View
                    style={[
                      {
                        alignItems: "flex-end",
                        flex: 1,
                        marginRight: Metrics.xsmallMargin,
                        height: width * 0.8,
                      },
                    ]}
                  >
                    <View style={styles.resetImg}>
                      <Image source={reset} style={styles.editImg} />
                    </View>
                    <View style={{ flexDirection: "column" }}>
                      <TouchableOpacity
                        onPress={() => this.setState({ workViewOpen: true })}
                        style={styles.selectTimezone}
                      >
                        {this.state.selectItem == "" ? (
                          <Text
                            style={[
                              styles.workText,
                              { fontSize: width * 0.018 },
                            ]}
                          >
                            Select Time Zone
                          </Text>
                        ) : (
                          <Text
                            style={[
                              styles.workText,
                              { fontSize: width * 0.018, textAlign: "center" },
                            ]}
                          >
                            {this.state.selectItem}
                          </Text>
                        )}

                        <Modal
                          style={styles.workModal}
                          visible={this.state.workViewOpen}
                          transparent={true}
                          animationType="fade"
                          onRequestClose={() =>
                            this.setState({ workViewOpen: false })
                          }
                        >
                          <View style={styles.workModalView}>
                            <View style={styles.content}>
                              <FlatList
                                refreshing={true}
                                keyExtractor={(item, index) => index.toString()}
                                data={this.state.tzs}
                                extraData={this.state}
                                numColumns={1}
                                renderItem={this.renderItem.bind(this)}
                              />
                            </View>
                          </View>
                        </Modal>
                      </TouchableOpacity>
                      <Text
                        style={[
                          styles.workText,
                          {
                            fontSize: width * 0.026,
                            marginRight: 5,
                            textAlign: "right",
                          },
                        ]}
                      >
                        (Work Hours)
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  ShowHideTextComponentView = async () => {
    if (this.state.status == false) {
      this.setState({ status: true });
    } else {
      this.firebaseDataCAll();
      this.setState({ status: false });
    }
    const { username } = this.props;
    const { inputData, inputData1,weddingForNotify, socialMediaData1,inputData2 ,weddingData,noteData,emailData,addressData,messengerData,socialMediaData,websiteData,dateData,companyData,jobTitleData,mondayData,tuesdayData,wednesdayData,thursdayData,fridayData,saturdayData,sundayData,mondayTOData,tuesdayTOData,wednesdayTOData,thursdayTOData,fridayTOData,saturdayTOData,sundayTOData} = this.state;
    console.log("input dat---->", weddingForNotify);
     let  weddingForNotify1  = weddingForNotify.toString()
     
    if (weddingForNotify == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ weddingForNotify: weddingForNotify1 });
    }
    
    if (inputData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ number: inputData });
    }

    if (inputData1 == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ number1: inputData1 });
    }

    if (inputData2 == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ number2: inputData2 });
    }
    if(emailData == ""){
      console.log('Empty')
     
   }else{
    
     firebase
       .firestore()
       .collection("user")
       .doc(`${username}`)
       .update({ email : emailData });
    
   }
   if(addressData == ""){
  }else{
    
    firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ address : addressData });
      
  }
  if(messengerData == ""){
  }else{
   
    firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ messenger : messengerData });
      
  }
  if(dateData == ""){
  }else{
   
    firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ date : dateData });
      
  }
  if(weddingData == ""){
  }else{
   
    firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ weddingDate : weddingData });
      
  }
if(socialMediaData == ""){
}else{
 
firebase
      .firestore()
      .collection("user")
      .doc(`${username}`)
      .update({ socialMedia : socialMediaData });
  
}
if(socialMediaData1 == ""){
}else{
 
firebase
      .firestore()
      .collection("user")
      .doc(`${username}`)
      .update({ socialMedia1 : socialMediaData1 });
  
}

if(websiteData == ""){
}else{
 
  firebase
      .firestore()
      .collection("user")
      .doc(`${username}`)
      .update({ website : websiteData });
   
}

if(dateData == ""){
}else{
  firebase
      .firestore()
      .collection("user")
      .doc(`${username}`)
      .update({ date : dateData });
  
}
if(noteData == ""){
}else{
firebase
      .firestore()
      .collection("user")
      .doc(`${username}`)
      .update({ note : noteData });
    
}
//company
if(companyData == ""){
}else{
firebase
      .firestore()
      .collection("user")
      .doc(`${username}`)
      .update({ company : companyData });
    
}

//job title
if(jobTitleData == ""){
}else{
firebase
      .firestore()
      .collection("user")
      .doc(`${username}`)
      .update({ jobTitle : jobTitleData });
}
if(mondayData == ""){
}else{
firebase
      .firestore()
      .collection("user")
      .doc(`${username}`)
      .update({ monday : mondayData });
}
if(mondayTOData == ""){
}else{
firebase
      .firestore()
      .collection("user")
      .doc(`${username}`)
      .update({ mondayTo : mondayTOData });
}
if(tuesdayData == ""){
}else{
firebase
      .firestore()
      .collection("user")
      .doc(`${username}`)
      .update({ tuesday : tuesdayData });
}
if(tuesdayTOData == ""){
}else{
firebase
      .firestore()
      .collection("user")
      .doc(`${username}`)
      .update({ tuesdayTo : tuesdayTOData });
}
if(wednesdayData == ""){
}else{
firebase
      .firestore()
      .collection("user")
      .doc(`${username}`)
      .update({ wednesday : wednesdayData });
}

if(wednesdayTOData == ""){
}else{
firebase
      .firestore()
      .collection("user")
      .doc(`${username}`)
      .update({ wednesdayTo : wednesdayTOData });
}


if(thursdayData == ""){
}else{
firebase
      .firestore()
      .collection("user")
      .doc(`${username}`)
      .update({ thursday : thursdayData });
}

if(thursdayTOData == ""){
}else{
firebase
      .firestore()
      .collection("user")
      .doc(`${username}`)
      .update({ thursdayTo : thursdayTOData });
}


if(fridayData == ""){
}else{
firebase
      .firestore()
      .collection("user")
      .doc(`${username}`)
      .update({ friday : fridayData });
}

if(fridayTOData == ""){
}else{
firebase
      .firestore()
      .collection("user")
      .doc(`${username}`)
      .update({ fridayTo : fridayTOData });
}

if(saturdayData == ""){
}else{
firebase
      .firestore()
      .collection("user")
      .doc(`${username}`)
      .update({ saturday : saturdayData });
}


if(saturdayTOData == ""){
}else{
firebase
      .firestore()
      .collection("user")
      .doc(`${username}`)
      .update({ saturdayTo : saturdayTOData });
}


if(sundayData == ""){
}else{
firebase
      .firestore()
      .collection("user")
      .doc(`${username}`)
      .update({ sunday : sundayData });
}
if(sundayTOData == ""){
}else{
firebase
      .firestore()
      .collection("user")
      .doc(`${username}`)
      .update({ sundayTo : sundayTOData });
}

  };

  showLoader() {
    if (this.state.isLoading == true) {
      return <Spinner />;
    }
  }

  render() {
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
        <View style={{ flex: 1 }}>
          <Container>
            <ScrollView style={{ flex: 1 }}>
              {this.renderImg()}
              {this.renderMiddle()}
              {this.renderFriend()}
              {this.renderMobile()}
              {this.renderEmail()}
              {this.renderAddress()}
              {this.renderMesssanger()}
              {this.renderSocialMedia()}
              {this.renderWebsite()}
              {this.renderDate()}
              {this.renderNote()}
              {this.renderCompany()}
            </ScrollView>

            <View
              style={{
                width: width * 0.9,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                flexDirection: "row",
              }}
            >
              <TouchableHighlight
                style={styles.saveView}
                onPress={this.ShowHideTextComponentView}
              >
                <Text
                  style={{
                    color: COLORS.main_text_color,
                    fontFamily: "Roboto-Bold",
                    fontSize: width * 0.04,
                  }}
                >
                  {this.state.status == true ? "Save" : "Edit"}
                </Text>
              </TouchableHighlight>
            </View>
          </Container>
          {this.showLoader()}
        </View>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
  user_id:
    state.login.shouldLoadData.user_id || state.reg.shouldLoadData.user_id,
  username:
    state.login.shouldLoadData.username || state.reg.shouldLoadData.username,
});

const mapDispatchToProps = (dispatch) => ({
  switchTheme: bindActionCreators(switchTheme, dispatch),
});

export default connect(mapStateToProps)(Profile);

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
