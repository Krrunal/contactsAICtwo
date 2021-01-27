import { ActionSheet, Root } from "native-base";
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Keyboard,
  Modal,
  ScrollView,
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
import Header from "../../components/header/index";
import Icon from "react-native-vector-icons/FontAwesome5";
import IconEntypo from "react-native-vector-icons/Entypo";
import IntlPhoneInput from "react-native-intl-phone-input";
import Metrics from "../theme/Metrics";
import { Spinner } from "../../components/Spinner";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Title } from "react-native-paper";
import calender from "../../assets/images/calender.png";
import call from "../../assets/images/call.png";
import checked from "../../assets/icons/checked.png";
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

var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
var BUTTONS = ["Take Photo", "Choose Photo From Gallery", "Cancel"];
class MyContactInfromation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workViewOpen: false,
      status: false,
      textInput: [{ label: "Select Type...", show: false }],
      inputData: [],
      mobileLabelList: [
        { label: "Personal(Mobie)" },
        { label: "Personal(Lanline)" },
        { label: "Work(Mobile)" },
        { label: "Work(Landline)" },
        { label: "Personal Fax" },
        { label: "Work Fax" },
      ],
      //email
      emailInput: [{ label: "Select Type...", show: false }],
      emailData: [],
      emailLabelList: [
        { label: "Personal(Mobie)" },
        { label: "Personal(Lanline)" },
        { label: "Work(Mobile)" },
        { label: "Work(Landline)" },
        { label: "Personal Fax" },
        { label: "Work Fax" },
      ],
      //address
      addressInput: [{ label: "Select Type...", show: false }],
      addressData: [],
      addressLabelList: [
        { label: "Personal(Mobie)" },
        { label: "Personal(Lanline)" },
        { label: "Work(Mobile)" },
        { label: "Work(Landline)" },
        { label: "Personal Fax" },
        { label: "Work Fax" },
      ],
      //messenger
      messengerInput: [{ label: "Select Type...", show: false }],
      messengerData: [],
      messengerLabelList: [
        { label: "Facebook Messenger" },
        { label: "Skype" },
        { label: "Snapchat" },
        { label: "WeChat" },
        { label: "Whatsapp" },
        // { label: "Work Fax" },
      ],
      //social media
      socialMediaInput: [{ label: "Select Type...", show: false }],
      socialMediaData: [],
      socialMediaLabelList: [
        { label: "Facebook" },
        { label: "Instagram" },
        { label: "LinkedIn" },
        { label: "Tiktok" },
        { label: "Twitter" },
        { label: "Youtube" },
      ],
      //website
      websiteInput: [{ label: "Select Type...", show: false }],
      websiteData: [],
      websiteLabelList: [
        { label: "Personal" },
        { label: "Work" },
       
      ],
      //date
      dateInput: [{ label: "Select Type...", show: false }],
      dateData: [],
      dateLabelList: [
        { label: "Birthday" },
        { label: "Wedding Anniversary" },
       
      ],
      //note
      noteInput: [{ label: "Select Type...", show: false }],
      noteData: [],
      noteLabelList: [
        { label: "" },
      
      ],
      // companyy
      work_hour: {
        monday: { first: "", to: "" },
        tuesday: { first: "", to: "" },
        wednesday: { first: "", to: "" },
        thursday: { first: "", to: "" },
        friday: { first: "", to: "" },
        saturday: { first: "", to: "" },
        sunday: { first: "", to: "" },
      },
      workHourInput: [{ label: "Select Type...", show: false }],
      companyInput: [{ label: "Select Type...", show: false }],
      companyData: [],
      companyLabelList: [
        { label: "Personal(Mobie)" },
        { label: "Personal(Lanline)" },
        { label: "Work(Mobile)" },
        { label: "Work(Landline)" },
        { label: "Personal Fax" },
        { label: "Work Fax" },
      ],
      tz: [],
      tzs: "",
      profile_image:"",
      profile_image2:"",
      profile_image3:"",
    };
  }
  componentDidMount = async () => {
    this.timeZoneField();
  };
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

  selectPhoto = () => {
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
        title: "Select Photo",
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            this.takePhtotFromCamera();
            break;

          case 1:
            this.fromGallery();
            break;
          default:
            break;
        }
      }
    );
  };
  selectPhoto2 = () => {
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
        title: "Select Photo",
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            this.takePhotoFromCamera2();
            break;

          case 1:
            this.fromGallery2();
            break;
          default:
            break;
        }
      }
    );
  };
  selectPhoto3 = () => {
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
        title: "Select Photo",
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            this.takePhtotFromCamera3();
            break;

          case 1:
            this.fromGallery3();
            break;
          default:
            break;
        }
      }
    );
  };
  fromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      this.setState({ profile_image: image.path });
      console.log("URI ......>", image.path);
      console.log(image);
      this.setState({
        image: {
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        },
        images: null,
      });
    });
  };

  takePhtotFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      this.setState({ profile_image: image.path });
      console.log("URI ......>", image.path);
      console.log(image);
      this.setState({
        image: {
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        },
        images: null,
      });
    });
  };

  takePhotoFromCamera2 = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image2) => {
      this.setState({ profile_image2: image2.path });
      console.log(image2);
      this.setState({
        image2: {
          uri: image2.path,
          width: image2.width,
          height: image2.height,
          mime: image2.mime,
        },
        images: null,
      });
    });
  };

  fromGallery2 = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image2) => {
      this.setState({ profile_image2: image2.path });
      console.log(image2);
      this.setState({
        image2: {
          uri: image2.path,
          width: image2.width,
          height: image2.height,
          mime: image2.mime,
        },
        images: null,
      });
    });
  };

  takePhtotFromCamera3 = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image3) => {
      this.setState({ profile_image3: image3.path });
      console.log(image3);
      this.setState({
        image3: {
          uri: image3.path,
          width: image3.width,
          height: image3.height,
          mime: image3.mime,
        },
        images: null,
      });
    });
  };

  fromGallery3 = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image3) => {
      this.setState({ profile_image3: image3.path });
      console.log(image3);
      this.setState({
        image3: {
          uri: image3.path,
          width: image3.width,
          height: image3.height,
          mime: image3.mime,
        },
        images: null,
      });
    });
  };
  renderImage = (image) => {
    return (
      <Image
        style={{
          width: width * 0.189,
          height: width * 0.188,
          borderRadius: 7,
          borderWidth: 3,
          resizeMode: "cover",
        }}
        source={image}
      />
    );
  };
  renderImage2 = (image2) => {
    return (
      <Image
        style={{
          width: width * 0.189,
          height: width * 0.188,
          borderRadius: 7,
          borderWidth: 3,
          resizeMode: "cover",
        }}
        source={image2}
      />
    );
  };
  renderImage3 = (image3) => {
    return (
      <Image
        style={{
          width: width * 0.189,
          height: width * 0.188,
          borderRadius: 7,
          borderWidth: 3,
          resizeMode: "cover",
        }}
        source={image3}
      />
    );
  };

  //function to add TextInput dynamically
  addTextInput = (index, showPop) => {
    this.setState({ removeNumberSection: true });
    let textInput = this.state.textInput;
    textInput.map((item, i) => {
      textInput[i].show = false;
    });
    if (textInput.length < 5) {
      textInput.push({ label: "Select Type...", show: false });
    }

    this.setState({ textInput });
  };

  show = (index) => {
    var data = this.state.textInput;
    data.map((item, i) => {
      data[i].show = false;
    });
    data[index].show = true;
    this.setState({ textInput: data });
  };
  //function to remove TextInput dynamically
  removeTextInput = () => {
    let textInput = this.state.textInput;
    let inputData = this.state.inputData;
    textInput.pop();
    inputData.pop();
    this.setState({ textInput, inputData });
  };

  //function to add text from TextInputs into single array
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

  //function to console the output
  getValues = () => {
    const newFile = this.state.inputData.map((item, index) => {
      return { ...item, label: this.state.textInput[index].label };
    });
    this.setState({ inputData: newFile }, () => {
      alert(JSON.stringify(this.state.inputData));
    });
  };

  selectLabel = (index, label) => {
    var data = this.state.textInput;
    data[index].label = label;
    data[index].show = false;
    this.setState({ textInput: data });
  };

  onChangeText = (number, index) => {
    if (number.isVerified) {
      this.addValues(number.dialCode + "-" + number.unmaskedPhoneNumber, index);
    }
  };
  renderHeader() {
    return (
      <Header
        title="My Contact Information"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }
  renderMiddle() {
    return (
      <Root>
        <View style={{ alignItems: "center" }}>
          {/* <Text style={styles.lableText}>Friend</Text> */}
          <View style={styles.middleView}>
            <View style={styles.firstMiddle}>
              <View style={styles.squareBorder}>
                {this.renderImage(this.state.image)}
              </View>

              <TouchableOpacity
                style={styles.first}
                onPress={this.state.status ? this.selectPhoto : null}
              >
                <Text style={styles.firstText}>Select Photo</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.firstMiddle}>
              <View style={styles.squareBorder}>
                {this.renderImage2(this.state.image2)}
              </View>
              <TouchableOpacity
                style={styles.first}
                onPress={this.state.status ? this.selectPhoto2 : null}
              >
                <Text style={styles.firstText}>Select Photo</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.firstMiddle}>
              <View style={styles.squareBorder}>
                {this.renderImage3(this.state.image3)}
              </View>
              <TouchableOpacity
                style={styles.first}
                onPress={this.state.status ? this.selectPhoto3 : null}
              >
                <Text style={styles.firstText}>Select Photo</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Root>
    );
  }
  renderName() {
    return (
      <View style={{ marginTop: Metrics.baseMargin, position: "relative" }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={innerimg} style={styles.innerStyle} />
          </View>

          <View>
            <View style={styles.searchSection}>
              <TextInput
                placeholder=""
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                // maxLength={10}
                editable={this.state.status ? true : false}
                value={this.state.first_name}
                onChangeText={(value) => this.setState({ first_name: value })}
                ref={(input) => {
                  this.first_name = input;
                }}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>First Name</Text>
              </View>
            </View>

            <View style={styles.searchSection}>
              <TextInput
                placeholder=""
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                // maxLength={10}
                editable={this.state.status ? true : false}
                value={this.state.middle_name}
                onChangeText={(value) => this.setState({ middle_name: value })}
                ref={(input) => {
                  this.middle_name = input;
                }}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Middle Name</Text>
              </View>
            </View>

            <View style={styles.searchSection}>
              <TextInput
                placeholder=""
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                // maxLength={10}
                editable={this.state.status ? true : false}
                value={this.state.last_name}
                onChangeText={(value) => this.setState({ last_name: value })}
                ref={(input) => {
                  this.last_name = input;
                }}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Last Name</Text>
              </View>
            </View>

            <View style={styles.searchSection}>
              <TextInput
                placeholder=""
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                editable={this.state.status ? true : false}
                value={this.state.nick_name}
                onChangeText={(value) => this.setState({ nick_name: value })}
                ref={(input) => {
                  this.nick_name = input;
                }}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Nickname</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  renderMobile() {
    const { mobileLabelList } = this.state;
    return (
      <View style={{ marginTop: Metrics.doubleBaseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={call} style={styles.innerStyle} />
          </View>
          <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "column" }}>
              {this.state.textInput.map((item, index) => {
                return (
                  <View>
                    {this.state.status ? (
                      <View style={styles.searchSection}>
                        {this.state.isMobileSection ? (
                          <TouchableOpacity style={{ flexDirection: "column" }}>
                            <Text
                              style={[
                                styles.Text_1,
                                {
                                  fontSize: width * 0.02,
                                  width: width * 0.5,
                                  marginTop: width * 0.02,
                                },
                              ]}
                            >
                              Phone Number
                            </Text>
                            <TextInput
                              placeholder="Phone Number"
                              style={[
                                styles.stylefiledText,
                                { marginBottom: width * 0.025 },
                              ]}
                              placeholderTextColor={COLORS.main_text_color}
                              editable={this.state.status ? true : false}
                              onChangeText={(number) =>
                                this.onChangeText(number, index)
                              }
                              keyboardType={"numeric"}
                            />
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity
                            onPress={() =>
                              this.setState({ isMobileSection: true })
                            }
                          >
                            <Text style={styles.stylefiledText}>
                              Phone Number
                            </Text>
                          </TouchableOpacity>
                        )}

                        <TouchableOpacity
                          style={styles.modalBtn}
                          onPress={() => this.show(index)}
                        >
                          <Text style={styles.selectTypeText}>
                            {item.label}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    ) : (
                      <TouchableOpacity style={styles.searchSection}>
                        <Text style={styles.stylefiledText}>Phone Number</Text>
                      </TouchableOpacity>
                    )}
                    {item.show && (
                      <ScrollView
                        style={[styles.modal]}
                        nestedScrollEnabled={true}
                      >
                        {mobileLabelList.map((i) => {
                          return (
                            <TouchableOpacity
                              activeOpacity={0.8}
                              onPress={() => this.selectLabel(index, i.label)}
                            >
                              <View style={styles.labelContainer}>
                                <Text style={styles.label}>{i.label}</Text>
                              </View>
                            </TouchableOpacity>
                          );
                        })}

                        <View style={styles.labelContainer}>
                          <TouchableOpacity
                            style={styles.customView}
                            onPress={() => {
                              this.setState({ checkNumberSection: true });
                            }}
                          >
                            <Text style={[styles.label]}>Custom</Text>
                            {this.state.checkNumberSection ? (
                              <View style={styles.customRight}>
                                <Image
                                  source={checked}
                                  style={styles.checkedIcon}
                                />
                              </View>
                            ) : null}
                          </TouchableOpacity>
                          {this.state.checkNumberSection ? (
                            <TextInput
                              style={styles.cutomTextInput}
                              placeholderTextColor={COLORS.main_text_color}
                              placeholder={"Label"}
                              onChangeText={(customLabel) =>
                                this.setState({ customLabel })
                              }
                              onSubmitEditing={() =>
                                this.selectLabel(index, this.state.customLabel)
                              }
                            />
                          ) : null}
                        </View>
                      </ScrollView>
                    )}
                  </View>
                );
              })}
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.addNewBox}
              onPress={() =>
                this.addTextInput(this.state.textInput.length, false)
              }
            >
              {this.state.status ? (
                <Text
                  style={[
                    styles.addNew,
                    {
                      color:
                        this.props.theme.mode === "light"
                          ? COLORS.main_text_color
                          : COLORS.white,
                    },
                  ]}
                >
                  + Add Phone Number
                </Text>
              ) : null}
            </TouchableOpacity>
          </View>

          {this.state.removeNumberSection ? (
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <TouchableOpacity
                style={{}}
                onPress={() => this.removeTextInput()}
              >
                {this.state.status ? (
                  <Text style={[styles.removeNew]}>- Remove Address</Text>
                ) : null}
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    );
  }

  selectEmailLabel = (index, label) => {
    var data = this.state.emailInput;
    data[index].label = label;
    data[index].show = false;
    this.setState({ emailInput: data });
  };
  showEmail = (index) => {
    var data = this.state.emailInput;
    data.map((item, i) => {
      data[i].show = false;
    });
    data[index].show = true;
    this.setState({ emailInput: data });
  };
  onChangeEmail = (value) => {
    this.state.email.email = value;
    this.setState({ email: this.state.email });
  };
  addEmailInput = (index, showPop) => {
    this.setState({ removeEmailSection: true });
    let emailInput = this.state.emailInput;
    emailInput.map((item, i) => {
      emailInput[i].show = false;
    });
    emailInput.push({ label: "Select Type..", show: false });
    this.setState({ emailInput });
  };

  removeEmail = (key) => {
    let emailInput = this.state.emailInput;
    if (emailInput.length === 1) {
      console.log("adress input --->", emailInput.length);
    } else {
      let emailData = this.state.emailData;
      emailInput.pop();
      emailData.pop();
      this.setState({ emailInput, emailData });
    }
  };
  renderEmail() {
    return (
      <View style={{ marginTop: Metrics.doubleBaseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={email} style={styles.innerStyle} />
          </View>
          <View style={{ flexDirection: "column" }}>
            {this.state.emailInput.map((item, index) => {
              return (
                <View>
                  {this.state.status ? (
                    <View style={styles.searchSection}>
                      {this.state.isEmailSection ? (
                        <TouchableOpacity style={{ flexDirection: "column" }}>
                          <Text
                            style={[
                              styles.Text_1,
                              {
                                fontSize: width * 0.02,
                                width: width * 0.5,
                                marginTop: width * 0.02,
                              },
                            ]}
                          >
                            E-mail Address
                          </Text>
                          <TextInput
                            placeholder="E-mail Address"
                            style={[
                              styles.Text_1,
                              { fontSize: width * 0.03, width: width * 0.5 },
                            ]}
                            placeholderTextColor={COLORS.main_text_color}
                            editable={this.state.status ? true : false}
                            onChangeText={(value) => this.onChangeEmail(value)}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() =>
                            this.setState({ isEmailSection: true })
                          }
                        >
                          <Text style={styles.stylefiledText}>
                            {" "}
                            E-mail Address
                          </Text>
                        </TouchableOpacity>
                      )}
                      <TouchableOpacity
                        style={styles.modalBtn}
                        onPress={() => this.showEmail(index)}
                      >
                        <Text style={styles.selectTypeText}>{item.label}</Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <TouchableOpacity style={styles.searchSection}>
                      <Text style={styles.stylefiledText}>E-mail Address</Text>
                    </TouchableOpacity>
                  )}
                  {item.show && (
                    <ScrollView
                      style={[styles.modal]}
                      nestedScrollEnabled={true}
                    >
                      {this.state.emailLabelList.map((i) => {
                        return (
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() =>
                              this.selectEmailLabel(index, i.label)
                            }
                          >
                            <View style={styles.labelContainer}>
                              <Text style={styles.label}>{i.label}</Text>
                            </View>
                          </TouchableOpacity>
                        );
                      })}

                      <View style={styles.labelContainer}>
                        <TouchableOpacity
                          style={styles.customView}
                          onPress={() => {
                            this.setState({ checkEmailSection: true });
                          }}
                        >
                          <Text style={[styles.label]}>Custom</Text>
                          {this.state.checkEmailSection ? (
                            <View style={styles.customRight}>
                              <Image
                                source={checked}
                                style={styles.checkedIcon}
                              />
                            </View>
                          ) : null}
                        </TouchableOpacity>
                        {this.state.checkEmailSection ? (
                          <TextInput
                            style={styles.cutomTextInput}
                            placeholder={"Label"}
                            placeholderTextColor={COLORS.main_text_color}
                            onChangeText={(customEmailLabel) =>
                              this.setState({ customEmailLabel })
                            }
                            onSubmitEditing={() =>
                              this.selectEmailLabel(
                                index,
                                this.state.customEmailLabel
                              )
                            }
                          />
                        ) : null}
                      </View>
                    </ScrollView>
                  )}
                </View>
              );
            })}
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.addNewBox}
              onPress={() =>
                this.addEmailInput(this.state.textInput.length, false)
              }
            >
              {this.state.status ? (
                <Text
                  style={[
                    styles.addNew,
                    {
                      color:
                        this.props.theme.mode === "light"
                          ? COLORS.main_text_color
                          : COLORS.white,
                    },
                  ]}
                >
                  + Add Email
                </Text>
              ) : null}
            </TouchableOpacity>
          </View>

          {this.state.removeEmailSection ? (
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <TouchableOpacity style={{}} onPress={() => this.removeEmail()}>
                {this.state.status ? (
                  <Text style={[styles.removeNew]}>- Remove Email</Text>
                ) : null}
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
  selectAddressLabel = (index, label) => {
    var data = this.state.addressInput;
    data[index].label = label;
    data[index].show = false;
    this.setState({ emailData: data, checkAddressSection: false });
  };
  showAddress = (index) => {
    var data = this.state.addressInput;
    data.map((item, i) => {
      data[i].show = false;
    });
    data[index].show = true;
    this.setState({ addressInput: data });
  };

  onChangeAddress = (value) => {
    this.state.address.address = value;
    this.setState({ address: this.state.address });
  };

  addAdressInput = (index, showPop) => {
    this.setState({ removeSection: true });
    let addressInput = this.state.addressInput;
    addressInput.map((item, i) => {
      addressInput[i].show = false;
    });
    // if (addressInput.length < 5) {
    addressInput.push({ label: "Select Type..", show: false });
    // }

    this.setState({ addressInput });
  };
  removeAddress = (key) => {
    let addressInput = this.state.addressInput;
    if (addressInput.length === 1) {
      console.log("adress input --->", addressInput.length);
    } else {
      let addressData = this.state.addressData;
      addressInput.pop();
      addressData.pop();
      this.setState({ addressInput, addressData });
    }
  };

  renderAddress() {
    return (
      <View style={{ marginTop: Metrics.doubleBaseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={home} style={styles.innerStyle} />
          </View>
          <View style={{ flexDirection: "column" }}>
            {this.state.addressInput.map((item, index) => {
              return (
                <View>
                  {this.state.status ? (
                    <View style={styles.searchSectionAddress}>
                      {this.state.isAddressSection ? (
                        <TouchableOpacity style={{ flexDirection: "column" }}>
                          <Text
                            style={[
                              styles.Text_1,
                              {
                                fontSize: width * 0.02,
                                width: width * 0.5,
                                marginTop: width * 0.02,
                              },
                            ]}
                          >
                            Address
                          </Text>
                          <TextInput
                            placeholder="Address"
                            style={styles.addressField}
                            placeholderTextColor={COLORS.main_text_color}
                            multiline={true}
                            // numberOfLines={5}
                            editable={this.state.status ? true : false}
                            onChangeText={(value) =>
                              this.onChangeAddress(value)
                            }
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() =>
                            this.setState({ isAddressSection: true })
                          }
                        >
                          <Text style={styles.stylefiledText}>Address</Text>
                        </TouchableOpacity>
                      )}
                      <View style={styles.rightView}>
                        <TouchableOpacity
                          style={styles.modalBtn}
                          onPress={() => this.showAddress(index)}
                        >
                          <Text style={styles.selectTypeText}>
                            {item.label}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : (
                    <TouchableOpacity style={styles.searchSection}>
                      <Text style={styles.stylefiledText}>Address</Text>
                    </TouchableOpacity>
                  )}
                  {item.show && (
                    <ScrollView
                      style={[styles.modal]}
                      nestedScrollEnabled={true}
                    >
                      {this.state.addressLabelList.map((i) => {
                        return (
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() =>
                              this.selectAddressLabel(index, i.label)
                            }
                          >
                            <View style={styles.labelContainer}>
                              <Text style={styles.label}>{i.label}</Text>
                            </View>
                          </TouchableOpacity>
                        );
                      })}

                      <View style={styles.labelContainer}>
                        <TouchableOpacity
                          style={styles.customView}
                          onPress={() => {
                            this.setState({ checkAddressSection: true });
                          }}
                        >
                          <Text style={[styles.label]}>Custom</Text>
                          {this.state.checkAddressSection ? (
                            <View style={styles.customRight}>
                              <Image
                                source={checked}
                                style={styles.checkedIcon}
                              />
                            </View>
                          ) : null}
                        </TouchableOpacity>
                        {this.state.checkAddressSection ? (
                          <TextInput
                            style={styles.cutomTextInput}
                            placeholder={"Label"}
                            placeholderTextColor={COLORS.main_text_color}
                            onChangeText={(customAddLabel) =>
                              this.setState({ customAddLabel })
                            }
                            onSubmitEditing={() =>
                              this.selectAddressLabel(
                                index,
                                this.state.customAddLabel
                              )
                            }
                          />
                        ) : null}
                      </View>
                    </ScrollView>
                  )}
                </View>
              );
            })}
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.addNewBox}
              onPress={() =>
                this.addAdressInput(this.state.textInput.length, false)
              }
            >
              {this.state.status ? (
                <Text
                  style={[
                    styles.addNew,
                    {
                      color:
                        this.props.theme.mode === "light"
                          ? COLORS.main_text_color
                          : COLORS.white,
                    },
                  ]}
                >
                  + Add Phone Number
                </Text>
              ) : null}
            </TouchableOpacity>
          </View>

          {this.state.removeSection ? (
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <TouchableOpacity style={{}} onPress={() => this.removeAddress()}>
                {this.state.status ? (
                  <Text style={[styles.removeNew]}>- Remove Address</Text>
                ) : null}
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
  selectMessengerLabel = (index, label) => {
    var data = this.state.messengerInput;
    data[index].label = label;
    data[index].show = false;
    this.setState({ messengerInput: data });
  };
  showMessenger = (index) => {
    var data = this.state.messengerInput;
    data.map((item, i) => {
      data[i].show = false;
    });
    data[index].show = true;
    this.setState({ messengerInput: data });
  };
  onChangeMessenger = (value) => {
    this.state.email.email = value;
    this.setState({ email: this.state.email });
  };
  addMessengerInput = (index, showPop) => {
    this.setState({ removeMessengerSection: true });
    let messengerInput = this.state.messengerInput;
    messengerInput.map((item, i) => {
      messengerInput[i].show = false;
    });
    messengerInput.push({ label: "Select Type...", show: false });
    this.setState({ messengerInput });
  };

  removeMessenger = (key) => {
    let messengerInput = this.state.messengerInput;
    if (messengerInput.length === 1) {
      console.log("adress input --->", messengerInput.length);
    } else {
      let messengerData = this.state.messengerData;
      messengerInput.pop();
      messengerData.pop();
      this.setState({ messengerInput, messengerData });
    }
  };
  renderMessenger() {
    return (
      <View style={{ marginTop: Metrics.doubleBaseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={message} style={styles.innerStyle} />
          </View>
          <View style={{ flexDirection: "column" }}>
            {this.state.messengerInput.map((item, index) => {
              return (
                <View>
                  {this.state.status ? (
                    <View style={styles.searchSection}>
                      {this.state.isMessengerSection ? (
                        <TouchableOpacity style={{ flexDirection: "column" }}>
                          <Text
                            style={[
                              styles.Text_1,
                              {
                                fontSize: width * 0.02,
                                width: width * 0.5,
                                marginTop: width * 0.02,
                              },
                            ]}
                          >
                            Messenger Account
                          </Text>
                          <TextInput
                            placeholder="Messenger Account"
                            style={styles.stylefiledText}
                            placeholderTextColor={COLORS.main_text_color}
                            editable={this.state.status ? true : false}
                            onChangeText={(value) =>
                              this.onChangeMessenger(value)
                            }
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() =>
                            this.setState({ isMessengerSection: true })
                          }
                        >
                          <Text style={styles.stylefiledText}>
                            Messenger Account
                          </Text>
                        </TouchableOpacity>
                      )}
                      <TouchableOpacity
                        style={styles.modalBtn}
                        onPress={() => this.showMessenger(index)}
                      >
                        <Text style={styles.selectTypeText}>{item.label}</Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <TouchableOpacity style={styles.searchSection}>
                      <Text style={styles.stylefiledText}>
                        Messenger Account
                      </Text>
                    </TouchableOpacity>
                  )}
                  {item.show && (
                    <ScrollView
                      style={[styles.modal]}
                      nestedScrollEnabled={true}
                    >
                      {this.state.messengerLabelList.map((i) => {
                        return (
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() =>
                              this.selectMessengerLabel(index, i.label)
                            }
                          >
                            <View style={styles.labelContainer}>
                              <Text style={styles.label}>{i.label}</Text>
                            </View>
                          </TouchableOpacity>
                        );
                      })}

                      <View style={styles.labelContainer}>
                        <TouchableOpacity
                          style={styles.customView}
                          onPress={() => {
                            this.setState({ checkMessSection: true });
                          }}
                        >
                          <Text style={[styles.label]}>Custom</Text>
                          {this.state.checkMessSection ? (
                            <View style={styles.customRight}>
                              <Image
                                source={checked}
                                style={styles.checkedIcon}
                              />
                            </View>
                          ) : null}
                        </TouchableOpacity>
                        {this.state.checkMessSection ? (
                          <TextInput
                            style={styles.cutomTextInput}
                            placeholder={"Label"}
                            placeholderTextColor={COLORS.main_text_color}
                            onChangeText={(customMessLabel) =>
                              this.setState({ customMessLabel })
                            }
                            onSubmitEditing={() =>
                              this.selectMessengerLabel(
                                index,
                                this.state.customMessLabel
                              )
                            }
                          />
                        ) : null}
                      </View>
                    </ScrollView>
                  )}
                </View>
              );
            })}
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.addNewBox}
              onPress={() =>
                this.addMessengerInput(this.state.textInput.length, false)
              }
            >
              {this.state.status ? (
                <Text
                  style={[
                    styles.addNew,
                    {
                      color:
                        this.props.theme.mode === "light"
                          ? COLORS.main_text_color
                          : COLORS.white,
                    },
                  ]}
                >
                  + Add Messenger
                </Text>
              ) : null}
            </TouchableOpacity>
          </View>

          {this.state.removeMessengerSection ? (
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <TouchableOpacity
                style={{}}
                onPress={() => this.removeMessenger()}
              >
                {this.state.status ? (
                  <Text style={[styles.removeNew]}>- Remove Messenger</Text>
                ) : null}
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
  selectSocialMediaLabel = (index, label) => {
    var data = this.state.socialMediaInput;
    data[index].label = label;
    data[index].show = false;
    this.setState({ socialMediaInput: data });
  };
  showSocialMedia = (index) => {
    var data = this.state.socialMediaInput;
    data.map((item, i) => {
      data[i].show = false;
    });
    data[index].show = true;
    this.setState({ socialMediaInput: data });
  };
  onChangeSocialMedia = (value) => {
    this.state.email.email = value;
    this.setState({ email: this.state.email });
  };
  addSocialInput = (index, showPop) => {
    this.setState({ removeSocialSection: true });
    let socialMediaInput = this.state.socialMediaInput;
    socialMediaInput.map((item, i) => {
      socialMediaInput[i].show = false;
    });
    socialMediaInput.push({ label: "Select Type...", show: false });
    this.setState({ socialMediaInput });
  };

  removeSocial = (key) => {
    let socialMediaInput = this.state.socialMediaInput;
    if (socialMediaInput.length === 1) {
      console.log("adress input --->", socialMediaInput.length);
    } else {
      let socialMediaData = this.state.socialMediaData;
      socialMediaInput.pop();
      socialMediaData.pop();
      this.setState({ socialMediaInput, socialMediaData });
    }
  };
  renderSocialMedia() {
    return (
      <View style={{ marginTop: Metrics.doubleBaseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={instagram} style={styles.innerStyle} />
          </View>
          <View style={{ flexDirection: "column" }}>
            {this.state.socialMediaInput.map((item, index) => {
              return (
                <View>
                  {this.state.status ? (
                    <View style={styles.searchSection}>
                      {this.state.isSocialSection ? (
                        <TouchableOpacity style={{ flexDirection: "column" }}>
                          <Text
                            style={[
                              styles.Text_1,
                              {
                                fontSize: width * 0.02,
                                width: width * 0.5,
                                marginTop: width * 0.02,
                              },
                            ]}
                          >
                            Social Media Account
                          </Text>
                          <TextInput
                            placeholder="Social Media Account"
                            style={styles.stylefiledText}
                            placeholderTextColor={COLORS.main_text_color}
                            editable={this.state.status ? true : false}
                            onChangeText={(value) =>
                              this.onChangeSocialMedia(value)
                            }
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() =>
                            this.setState({ isSocialSection: true })
                          }
                        >
                          <Text style={styles.stylefiledText}>
                            Social Media Account
                          </Text>
                        </TouchableOpacity>
                      )}
                      <TouchableOpacity
                        style={styles.modalBtn}
                        onPress={() => this.showSocialMedia(index)}
                      >
                        <Text style={styles.selectTypeText}>{item.label}</Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <TouchableOpacity style={styles.searchSection}>
                      <Text style={styles.stylefiledText}>
                        Social Media Account
                      </Text>
                    </TouchableOpacity>
                  )}
                  {item.show && (
                    <ScrollView
                      style={[styles.modal]}
                      nestedScrollEnabled={true}
                    >
                      {this.state.socialMediaLabelList.map((i) => {
                        return (
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() =>
                              this.selectSocialMediaLabel(index, i.label)
                            }
                          >
                            <View style={styles.labelContainer}>
                              <Text style={styles.label}>{i.label}</Text>
                            </View>
                          </TouchableOpacity>
                        );
                      })}

                      <View style={styles.labelContainer}>
                        <TouchableOpacity
                          style={styles.customView}
                          onPress={() => {
                            this.setState({ checkSocialSection: true });
                          }}
                        >
                          <Text style={[styles.label]}>Custom</Text>
                          {this.state.checkSocialSection ? (
                            <View style={styles.customRight}>
                              <Image
                                source={checked}
                                style={styles.checkedIcon}
                              />
                            </View>
                          ) : null}
                        </TouchableOpacity>
                        {this.state.checkSocialSection ? (
                          <TextInput
                            style={styles.cutomTextInput}
                            placeholder={"Label"}
                            placeholderTextColor={COLORS.main_text_color}
                            onChangeText={(customSocialLabel) =>
                              this.setState({ customSocialLabel })
                            }
                            onSubmitEditing={() =>
                              this.selectSocialMediaLabel(
                                index,
                                this.state.customSocialLabel
                              )
                            }
                          />
                        ) : null}
                      </View>
                    </ScrollView>
                  )}
                </View>
              );
            })}
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.addNewBox}
              onPress={() =>
                this.addSocialInput(this.state.textInput.length, false)
              }
            >
              {this.state.status ? (
                <Text
                  style={[
                    styles.addNew,
                    {
                      color:
                        this.props.theme.mode === "light"
                          ? COLORS.main_text_color
                          : COLORS.white,
                    },
                  ]}
                >
                  + Add Social Media
                </Text>
              ) : null}
            </TouchableOpacity>
          </View>

          {this.state.removeSocialSection ? (
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <TouchableOpacity style={{}} onPress={() => this.removeSocial()}>
                {this.state.status ? (
                  <Text style={[styles.removeNew]}>- Remove Social Media</Text>
                ) : null}
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    );
  }

  selectWebsiteLabel = (index, label) => {
    var data = this.state.websiteInput;
    data[index].label = label;
    data[index].show = false;
    this.setState({ websiteInput: data });
  };
  showWebsite = (index) => {
    var data = this.state.websiteInput;
    data.map((item, i) => {
      data[i].show = false;
    });
    data[index].show = true;
    this.setState({ websiteInput: data });
  };
  onChangeWebsite = (value) => {
    this.state.email.email = value;
    this.setState({ email: this.state.email });
  };
  addWebsiteInput = (index, showPop) => {
    this.setState({ removeWebsiteSection: true });
    let websiteInput = this.state.websiteInput;
    websiteInput.map((item, i) => {
      websiteInput[i].show = false;
    });
    websiteInput.push({ label: "Select Type..", show: false });
    this.setState({ websiteInput });
  };

  removeWebsite = (key) => {
    let websiteInput = this.state.websiteInput;
    if (websiteInput.length === 1) {
      console.log("adress input --->", websiteInput.length);
    } else {
      let websiteData = this.state.websiteData;
      websiteInput.pop();
      websiteData.pop();
      this.setState({ websiteInput, websiteData });
    }
  };
  renderWebsite() {
    return (
      <View style={{ marginTop: Metrics.doubleBaseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={website} style={styles.innerStyle} />
          </View>
          <View style={{ flexDirection: "column" }}>
            {this.state.websiteInput.map((item, index) => {
              return (
                <View>
                  {this.state.status ? (
                    <View style={styles.searchSection}>
                      {this.state.isWebsiteSection ? (
                        <TouchableOpacity style={{ flexDirection: "column" }}>
                          <Text
                            style={[
                              styles.Text_1,
                              {
                                fontSize: width * 0.02,
                                width: width * 0.5,
                                marginTop: width * 0.02,
                              },
                            ]}
                          >
                            Website
                          </Text>
                          <TextInput
                            placeholder="Website"
                            style={styles.stylefiledText}
                            placeholderTextColor={COLORS.main_text_color}
                            editable={this.state.status ? true : false}
                            onChangeText={(value) =>
                              this.onChangeWebsite(value)
                            }
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() =>
                            this.setState({ isWebsiteSection: true })
                          }
                        >
                          <Text style={styles.stylefiledText}>Website</Text>
                        </TouchableOpacity>
                      )}
                      <TouchableOpacity
                        style={styles.modalBtn}
                        onPress={() => this.showWebsite(index)}
                      >
                        <Text style={styles.selectTypeText}>{item.label}</Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <TouchableOpacity style={styles.searchSection}>
                      <Text style={styles.stylefiledText}>Website</Text>
                    </TouchableOpacity>
                  )}
                  {item.show && (
                    <ScrollView
                      style={[styles.modal]}
                      nestedScrollEnabled={true}
                    >
                      {this.state.websiteLabelList.map((i) => {
                        return (
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() =>
                              this.selectWebsiteLabel(index, i.label)
                            }
                          >
                            <View style={styles.labelContainer}>
                              <Text style={styles.label}>{i.label}</Text>
                            </View>
                          </TouchableOpacity>
                        );
                      })}

                      <View style={styles.labelContainer}>
                        <TouchableOpacity
                          style={styles.customView}
                          onPress={() => {
                            this.setState({ checkWebsiteSection: true });
                          }}
                        >
                          <Text style={[styles.label]}>Custom</Text>
                          {this.state.checkWebsiteSection ? (
                            <View style={styles.customRight}>
                              <Image
                                source={checked}
                                style={styles.checkedIcon}
                              />
                            </View>
                          ) : null}
                        </TouchableOpacity>
                        {this.state.checkWebsiteSection ? (
                          <TextInput
                            style={styles.cutomTextInput}
                            placeholder={"Label"}
                            placeholderTextColor={COLORS.main_text_color}
                            onChangeText={(customWebsiteLabel) =>
                              this.setState({ customWebsiteLabel })
                            }
                            onSubmitEditing={() =>
                              this.selectWebsiteLabel(
                                index,
                                this.state.customWebsiteLabel
                              )
                            }
                          />
                        ) : null}
                      </View>
                    </ScrollView>
                  )}
                </View>
              );
            })}
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.addNewBox}
              onPress={() =>
                this.addWebsiteInput(this.state.textInput.length, false)
              }
            >
              {this.state.status ? (
                <Text
                  style={[
                    styles.addNew,
                    {
                      color:
                        this.props.theme.mode === "light"
                          ? COLORS.main_text_color
                          : COLORS.white,
                    },
                  ]}
                >
                  + Add Website
                </Text>
              ) : null}
            </TouchableOpacity>
          </View>

          {this.state.removeWebsiteSection ? (
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <TouchableOpacity style={{}} onPress={() => this.removeWebsite()}>
                {this.state.status ? (
                  <Text style={[styles.removeNew]}>- Remove Website</Text>
                ) : null}
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
  selectDateLabel = (index, label) => {
    var data = this.state.dateInput;
    data[index].label = label;
    data[index].show = false;
    this.setState({ dateInput: data, checkAddressSection: false });
  };
  showDate = (index) => {
    var data = this.state.dateInput;
    data.map((item, i) => {
      data[i].show = false;
    });
    data[index].show = true;
    this.setState({ dateInput: data });
  };

  onChangeDate = (value) => {
    this.state.address.address = value;
    this.setState({ address: this.state.address });
  };

  addDateInput = (index, showPop) => {
    this.setState({ removeDateSection: true });
    let dateInput = this.state.dateInput;
    dateInput.map((item, i) => {
      dateInput[i].show = false;
    });
    // if (addressInput.length < 5) {
    dateInput.push({ label: "Select Type..", show: false });
    // }

    this.setState({ dateInput });
  };
  removeDate = (key) => {
    let dateInput = this.state.dateInput;
    if (dateInput.length === 1) {
      console.log("adress input --->", dateInput.length);
    } else {
      let dateData = this.state.dateData;
      dateInput.pop();
      dateData.pop();
      this.setState({ dateInput, dateData });
    }
  };

 
  renderDate() {
    return (
      <View style={{ marginTop: Metrics.doubleBaseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={calender} style={styles.innerStyle} />
          </View>
          <View style={{ flexDirection: "column" }}>
            {this.state.dateInput.map((item, index) => {
              return (
                <View>
                  <View style={styles.searchSection}>
                    <TextInput
                      placeholder="Date"
                      style={styles.stylefiledText}
                      placeholderTextColor={COLORS.main_text_color}
                      editable={this.state.status ? true : false}
                      onChangeText={(value) => this.onChangeDate(value)}
                    />
            {/* <DateTimePickerModal
                isVisible={this.state.isVisible}
                onConfirm={this.onChangeDate}
                onCancel={this.hidePicker}
                mode="datetime"
                is24Hour={false}
                date={new Date(notificationTime)}
                titleIOS="Pick your Notification time"
              /> */}
                    <TouchableOpacity
                      style={styles.modalBtn}
                      onPress={() => this.showDate(index)}
                    >
                      <Text style={styles.selectTypeText}>{item.label}</Text>
                    </TouchableOpacity>
                  </View>
                  {item.show && (
                    <ScrollView
                      style={[styles.modal]}
                      nestedScrollEnabled={true}
                    >
                      {this.state.websiteLabelList.map((i) => {
                        return (
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => this.selectDateLabel(index, i.label)}
                          >
                            <View style={styles.labelContainer}>
                              <Text style={styles.label}>{i.label}</Text>
                            </View>
                          </TouchableOpacity>
                        );
                      })}

                      <View style={styles.labelContainer}>
                        <TouchableOpacity
                          style={styles.customView}
                          onPress={() => {
                            this.setState({ checkDateSection: true });
                          }}
                        >
                          <Text style={[styles.label]}>Custom</Text>
                          {this.state.checkDateSection ? (
                            <View style={styles.customRight}>
                              <Image
                                source={checked}
                                style={styles.checkedIcon}
                              />
                            </View>
                          ) : null}
                        </TouchableOpacity>
                        {this.state.checkDateSection ? (
                          <TextInput
                            style={styles.cutomTextInput}
                            placeholder={"Label"}
                            placeholderTextColor={COLORS.main_text_color}
                            onChangeText={(customDateLabel) =>
                              this.setState({ customDateLabel })
                            }
                            onSubmitEditing={() =>
                              this.selectDateLabel(
                                index,
                                this.state.customDateLabel
                              )
                            }
                          />
                        ) : null}
                      </View>
                    </ScrollView>
                  )}
                </View>
              );
            })}
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.addNewBox}
              onPress={() =>
                this.addDateInput(this.state.textInput.length, false)
              }
            >
              {this.state.status ? (
                <Text
                  style={[
                    styles.addNew,
                    {
                      color:
                        this.props.theme.mode === "light"
                          ? COLORS.main_text_color
                          : COLORS.white,
                    },
                  ]}
                >
                  + Add Date
                </Text>
              ) : null}
            </TouchableOpacity>
          </View>

          {this.state.removeDateSection ? (
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <TouchableOpacity style={{}} onPress={() => this.removeDate()}>
                {this.state.status ? (
                  <Text style={[styles.removeNew]}>- Remove Date</Text>
                ) : null}
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
  selectNoteLabel = (index, label) => {
    var data = this.state.noteInput;
    data[index].label = label;
    data[index].show = false;
    this.setState({ noteInput: data, checkAddressSection: false });
  };

  showNote = (index) => {
    var data = this.state.noteInput;
    data.map((item, i) => {
      data[i].show = false;
    });
    data[index].show = true;
    this.setState({ noteInput: data });
  };

  onChangNote = (value) => {
    this.state.address.address = value;
    this.setState({ address: this.state.address });
  };

  addNoteInput = (index, showPop) => {
    this.setState({ removeNoteSection: true });
    let noteInput = this.state.noteInput;
    noteInput.map((item, i) => {
      noteInput[i].show = false;
    });
    // if (addressInput.length < 5) {
    noteInput.push({ label: "Select Type..", show: false });
    // }

    this.setState({ noteInput });
  };
  removeNote = (key) => {
    let noteInput = this.state.noteInput;
    if (noteInput.length === 1) {
      console.log("adress input --->", noteInput.length);
    } else {
      let noteData = this.state.noteData;
      noteInput.pop();
      noteData.pop();
      this.setState({ noteInput, noteData });
    }
  };
  renderNote() {
    return (
      <View style={{ marginTop: Metrics.doubleBaseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={note} style={styles.innerStyle} />
          </View>
          <View style={{ flexDirection: "column" }}>
            {this.state.noteInput.map((item, index) => {
              return (
                <View>
                  {this.state.status ? (
                    <View style={styles.searchSectionAddress}>
                      {this.state.isNoteSection ? (
                        <TouchableOpacity style={{ flexDirection: "column" }}>
                          <Text
                            style={[
                              styles.Text_1,
                              {
                                fontSize: width * 0.02,
                                width: width * 0.5,
                                marginTop: width * 0.02,
                              },
                            ]}
                          >
                            Note
                          </Text>
                          <TextInput
                            placeholder="Note"
                            style={styles.addressField}
                            placeholderTextColor={COLORS.main_text_color}
                            editable={this.state.status ? true : false}
                            onChangeText={(value) => this.onChangNote(value)}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() => this.setState({ isNoteSection: true })}
                        >
                          <Text style={styles.stylefiledText}>Note</Text>
                        </TouchableOpacity>
                      )}
                      <View style={styles.rightView}>
                        <TouchableOpacity
                          style={styles.modalBtn}
                          onPress={() => this.showNote(index)}
                        >
                          <Text style={styles.selectTypeText}>
                            {item.label}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : (
                    <TouchableOpacity style={styles.searchSection}>
                      <Text style={styles.stylefiledText}>Note</Text>
                    </TouchableOpacity>
                  )}
                  {item.show && (
                    <ScrollView
                      style={[styles.modal]}
                      nestedScrollEnabled={true}
                    >
                      {/* {this.state.noteLabelList.map((i) => {
                        return (
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => this.selectNoteLabel(index, i.label)}
                          >
                            <View style={styles.labelContainer}>
                              <Text style={styles.label}>{i.label}</Text>
                            </View>
                          </TouchableOpacity>
                        );
                      })} */}

                      <View style={styles.labelContainer}>
                        <TouchableOpacity
                          style={styles.customView}
                          onPress={() => {
                            this.setState({ checkNoteSection: true });
                          }}
                        >
                          <Text style={[styles.label]}>Custom</Text>
                          {this.state.checkNoteSection ? (
                            <View style={styles.customRight}>
                              <Image
                                source={checked}
                                style={styles.checkedIcon}
                              />
                            </View>
                          ) : null}
                        </TouchableOpacity>
                        {this.state.checkNoteSection ? (
                          <TextInput
                            style={styles.cutomTextInput}
                            placeholder={"Label"}
                            placeholderTextColor={COLORS.main_text_color}
                            onChangeText={(customNoteLabel) =>
                              this.setState({ customNoteLabel })
                            }
                            onSubmitEditing={() =>
                              this.selectNoteLabel(
                                index,
                                this.state.customNoteLabel
                              )
                            }
                          />
                        ) : null}
                      </View>
                    </ScrollView>
                  )}
                </View>
              );
            })}
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.addNewBox}
              onPress={() =>
                this.addNoteInput(this.state.textInput.length, false)
              }
            >
              {this.state.status ? (
                <Text
                  style={[
                    styles.addNew,
                    {
                      color:
                        this.props.theme.mode === "light"
                          ? COLORS.main_text_color
                          : COLORS.white,
                    },
                  ]}
                >
                  + Add Date
                </Text>
              ) : null}
            </TouchableOpacity>
          </View>

          {this.state.removeNoteSection ? (
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <TouchableOpacity style={{}} onPress={() => this.removeNote()}>
                {this.state.status ? (
                  <Text style={[styles.removeNew]}>- Remove Date</Text>
                ) : null}
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    );
  }

  onChangeCompany = (value) => {
    this.state.email.email = value;
    this.setState({ email: this.state.email });
  };
  addCompanyInput = (index, showPop) => {
    this.setState({ removeCompanySection: true, isCompanySec: false });
    let companyInput = this.state.companyInput;
    companyInput.map((item, i) => {
      companyInput[i].show = false;
    });
    companyInput.push({ label: "Select Type..", show: false });
    this.setState({ companyInput });
  };

  removeCompany = (key) => {
    let companyInput = this.state.companyInput;
    if (companyInput.length === 1) {
      console.log("adress input --->", companyInput.length);
    } else {
      let companyData = this.state.companyData;
      companyInput.pop();
      companyData.pop();
      this.setState({ companyInput, companyData });
    }
  };
  itemSelect = (item) => {
    this.setState({ selectItem: item, workViewOpen: false });
  };

  showWorkHour = (index) => {
    this.setState({ isCompanySec: true });
    var data = this.state.companyInput;
    data.map((item, i) => {
      data[i].show = false;
    });
    data[index].show = true;
    this.setState({ companyInput: data });
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
  onChangeMonday = (value) => {
    this.state.work_hour.monday.first = value;
    this.setState({ work_hour: this.state.work_hour });
    console.log(
      "this.state.work_hour.monday.first--->",
      this.state.work_hour.monday.first
    );
  };

  onChangeMondayTo = (value) => {
    this.state.work_hour.monday.to = value;
    this.setState({ work_hour: this.state.work_hour });
  };
  onChangeTuesday = (value) => {
    this.state.work_hour.tuesday.first = value;
    this.setState({ work_hour: this.state.work_hour });
  };
  onChangeTuesdayTo = (value) => {
    this.state.work_hour.tuesday.to = value;
    this.setState({ work_hour: this.state.work_hour });
  };
  onChangeWednesday = (value) => {
    this.state.work_hour.wednesday.first = value;
    this.setState({ work_hour: this.state.work_hour });
  };
  onChangeWednesdayTo = (value) => {
    this.state.work_hour.wednesday.to = value;
    this.setState({ work_hour: this.state.work_hour });
  };
  onChangeThursday = (value) => {
    this.state.work_hour.thursday.first = value;
    this.setState({ work_hour: this.state.work_hour });
  };
  onChangeThursdayTo = (value) => {
    this.state.work_hour.thursday.to = value;
    this.setState({ work_hour: this.state.work_hour });
  };
  onChangeFriday = (value) => {
    this.state.work_hour.friday.first = value;
    this.setState({ work_hour: this.state.work_hour });
  };
  onChangeFridayTo = (value) => {
    this.state.work_hour.friday.to = value;
    this.setState({ work_hour: this.state.work_hour });
  };
  onChangeSaturday = (value) => {
    this.state.work_hour.saturday.first = value;
    this.setState({ work_hour: this.state.work_hour });
  };
  onChangeSaturdayTo = (value) => {
    this.state.work_hour.saturday.to = value;
    this.setState({ work_hour: this.state.work_hour });
  };
  onChangeSunday = (value) => {
    this.state.work_hour.sunday.first = value;
    this.setState({ work_hour: this.state.work_hour });
  };
  onChangeSundayTo = (value) => {
    this.state.work_hour.sunday.to = value;
    this.setState({ work_hour: this.state.work_hour });
  };

  //arrayy
  onChangeMondayArray = (value, index) => {
    this.state.work_hourArray[index].monday.first = value;
    this.setState({ work_hourArray: this.state.work_hourArray });
    console.log("array---->", this.state.work_hourArray);
  };
  onChangeMondayToArray = (value) => {
    this.state.work_hourArray[index].monday.to = value;
    this.setState({ work_hourArray: this.state.work_hourArray });
  };
  onChangeTuesdayArray = (value) => {
    this.state.work_hourArray[index].tuesday.first = value;
    this.setState({ work_hourArray: this.state.work_hourArray });
  };
  onChangeTuesdayToArray = (value) => {
    this.state.work_hourArray[index].tuesday.to = value;
    this.setState({ work_hourArray: this.state.work_hourArray });
  };
  onChangeWednesdayArray = (value) => {
    this.state.work_hourArray[index].wednesday.first = value;
    this.setState({ work_hourArray: this.state.work_hourArray });
  };
  onChangeWednesdayToArray = (value) => {
    this.state.work_hourArray[index].wednesday.to = value;
    this.setState({ work_hourArray: this.state.work_hourArray });
  };
  onChangeThursdayArray = (value) => {
    this.state.work_hourArray[index].thursday.first = value;
    this.setState({ work_hourArray: this.state.work_hourArray });
  };
  onChangeThursdayToArray = (value) => {
    this.state.work_hourArray[index].thursday.to = value;
    this.setState({ work_hourArray: this.state.work_hourArray });
  };
  onChangeFridayArray = (value) => {
    this.state.work_hourArray[index].friday.first = value;
    this.setState({ work_hourArray: this.state.work_hourArray });
  };
  onChangeFridayToArray = (value) => {
    this.state.work_hourArray[index].friday.to = value;
    this.setState({ work_hourArray: this.state.work_hourArray });
  };
  onChangeSaturdayArray = (value) => {
    this.state.work_hourArray[index].saturday.first = value;
    this.setState({ work_hourArray: this.state.work_hourArray });
  };
  onChangeSaturdayToArray = (value) => {
    this.state.work_hourArray[index].saturday.to = value;
    this.setState({ work_hourArray: this.state.work_hourArray });
  };
  onChangeSundayArray = (value) => {
    this.state.work_hourArray[index].sunday.first = value;
    this.setState({ work_hourArray: this.state.work_hourArray });
  };
  onChangeSundayToArray = (value) => {
    this.state.work_hourArray[index].sunday.to = value;
    this.setState({ work_hourArray: this.state.work_hourArray });
  };

  renderCompany() {
    return (
      <View style={{ marginTop: Metrics.doubleBaseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={handshake} style={styles.innerStyle} />
          </View>
          <View style={{ flexDirection: "column" }}>
            {this.state.companyInput.map((item, index) => {
              return (
                <View>
                  <View style={styles.searchSection}>
                    <TouchableOpacity style={{ flexDirection: "row" }}>
                      <View>
                        <TextInput
                          placeholder=""
                          style={styles.stylefiledText}
                          placeholderTextColor={COLORS.main_text_color}
                          editable={this.state.status ? true : false}
                          onChangeText={(value) => this.onChangeCompany(value)}
                        />
                      </View>
                      <View style={styles.addressRightView}>
                        <Text style={styles.compnyRightText}>Company</Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.searchSection}>
                    <TouchableOpacity style={{ flexDirection: "row" }}>
                      <View>
                        <TextInput
                          placeholder=""
                          style={styles.stylefiledText}
                          placeholderTextColor={COLORS.main_text_color}
                          value={this.state.job_title}
                          editable={this.state.status ? true : false}
                          onChangeText={(value) => this.onChangeJobTitle(value)}
                        />
                      </View>
                      <View style={styles.addressRightView}>
                        <Text style={styles.compnyRightText}>Job Title</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  {/* {} */}
                  {item.show && (
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: Metrics.baseMargin,
                      }}
                    >
                      <View style={styles.workView}>
                        <View style={styles.LeftView}>
                          <Image source={checked} style={styles.checkedIcon} />
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <Text
                              style={[
                                styles.workText,
                                {
                                  fontSize: width * 0.025,
                                  width: width * 0.16,
                                },
                              ]}
                            >
                              Monday
                            </Text>
                            <View style={styles.timeView}>
                              <TextInput
                                placeholder="7:00AM"
                                placeholderTextColor={COLORS.main_text_color}
                                style={styles.timeText}
                                //value={this.state.work_hour.monday.first}
                                onChangeText={(value) =>
                                  this.onChangeMonday(value)
                                }
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
                                placeholder="3:30AM"
                                placeholderTextColor={COLORS.main_text_color}
                                style={styles.timeText}
                                //value={this.state.work_hour.monday.to}
                                onChangeText={(value) =>
                                  this.onChangeMondayTo(value)
                                }
                              />
                            </View>
                          </View>
                          <View style={styles.dayView}>
                            <Text
                              style={[
                                styles.workText,
                                {
                                  fontSize: width * 0.025,
                                  width: width * 0.16,
                                },
                              ]}
                            >
                              Tuesday
                            </Text>
                            <View style={styles.timeView}>
                              <TextInput
                                placeholder="7:00AM"
                                placeholderTextColor={COLORS.main_text_color}
                                style={styles.timeText}
                                //value={this.state.work_hour.tuesday.first}
                                onChangeText={(value) =>
                                  this.onChangeTuesday(value)
                                }
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
                                placeholder="3:30AM"
                                placeholderTextColor={COLORS.main_text_color}
                                style={styles.timeText}
                                //value={this.state.work_hour.tuesday.to}
                                onChangeText={(value) =>
                                  this.onChangeTuesdayTo(value)
                                }
                              />
                            </View>
                          </View>
                          <View style={styles.dayView}>
                            <Text
                              style={[
                                styles.workText,
                                {
                                  fontSize: width * 0.025,
                                  width: width * 0.16,
                                },
                              ]}
                            >
                              Wednesday
                            </Text>
                            <View style={styles.timeView}>
                              <TextInput
                                placeholder="7:00AM"
                                placeholderTextColor={COLORS.main_text_color}
                                style={styles.timeText}
                                //value={this.state.work_hour.wednesday.first}
                                onChangeText={(value) =>
                                  this.onChangeWednesday(value)
                                }
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
                                placeholder="3:30AM"
                                placeholderTextColor={COLORS.main_text_color}
                                style={styles.timeText}
                                //value={this.state.work_hour.wednesday.to}
                                onChangeText={(value) =>
                                  this.onChangeWednesdayTo(value)
                                }
                              />
                            </View>
                          </View>
                          <View style={styles.dayView}>
                            <Text
                              style={[
                                styles.workText,
                                {
                                  fontSize: width * 0.025,
                                  width: width * 0.16,
                                },
                              ]}
                            >
                              Thursday
                            </Text>
                            <View style={styles.timeView}>
                              <TextInput
                                placeholder="7:00AM"
                                placeholderTextColor={COLORS.main_text_color}
                                style={styles.timeText}
                                //value={this.state.work_hour.thursday.first}
                                onChangeText={(value) =>
                                  this.onChangeThursday(value)
                                }
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
                                placeholder="3:30AM"
                                placeholderTextColor={COLORS.main_text_color}
                                style={styles.timeText}
                                //value={this.state.work_hour.thursday.to}
                                onChangeText={(value) =>
                                  this.onChangeThursdayTo(value)
                                }
                              />
                            </View>
                          </View>
                          <View style={styles.dayView}>
                            <Text
                              style={[
                                styles.workText,
                                {
                                  fontSize: width * 0.025,
                                  width: width * 0.16,
                                },
                              ]}
                            >
                              Friday
                            </Text>
                            <View style={styles.timeView}>
                              <TextInput
                                placeholder="7:00AM"
                                placeholderTextColor={COLORS.main_text_color}
                                style={styles.timeText}
                                // value={this.state.work_hour.friday.first}
                                onChangeText={(value) =>
                                  this.onChangeFriday(value)
                                }
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
                                placeholder="3:30AM"
                                placeholderTextColor={COLORS.main_text_color}
                                style={styles.timeText}
                                // value={this.state.work_hour.friday.to}
                                onChangeText={(value) =>
                                  this.onChangeFridayTo(value)
                                }
                              />
                            </View>
                          </View>
                          <View style={styles.dayView}>
                            <Text
                              style={[
                                styles.workText,
                                {
                                  fontSize: width * 0.025,
                                  width: width * 0.16,
                                },
                              ]}
                            >
                              Saturday
                            </Text>
                            <View style={styles.timeView}>
                              <TextInput
                                placeholder="OFF"
                                placeholderTextColor={COLORS.main_text_color}
                                style={styles.timeText}
                                //value={this.state.work_hour.saturday.first}
                                onChangeText={(value) =>
                                  this.onChangeSaturday(value)
                                }
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
                                placeholder="OFF"
                                placeholderTextColor={COLORS.main_text_color}
                                style={styles.timeText}
                                //value={this.state.work_hour.saturday.to}
                                onChangeText={(value) =>
                                  this.onChangeSaturdayTo(value)
                                }
                              />
                            </View>
                          </View>
                          <View style={styles.dayView}>
                            <Text
                              style={[
                                styles.workText,
                                {
                                  fontSize: width * 0.025,
                                  width: width * 0.16,
                                },
                              ]}
                            >
                              Sunday
                            </Text>
                            <View style={styles.timeView}>
                              <TextInput
                                placeholder="OFF"
                                placeholderTextColor={COLORS.main_text_color}
                                style={styles.timeText}
                                //value={this.state.work_hour.sunday.first}
                                onChangeText={(value) =>
                                  this.onChangeSunday(value)
                                }
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
                                placeholder="OFF"
                                placeholderTextColor={COLORS.main_text_color}
                                style={styles.timeText}
                                // value={this.state.work_hour.sunday.to}
                                onChangeText={(value) =>
                                  this.onChangeSundayTo(value)
                                }
                              />
                            </View>
                          </View>
                        </View>

                        <View style={styles.rightView}>
                          <View style={{ flexDirection: "column" }}>
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
                              Work Hours
                            </Text>
                            <TouchableOpacity
                              onPress={() =>
                                this.setState({ workViewOpen: true })
                              }
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
                                    {
                                      fontSize: width * 0.018,
                                      textAlign: "center",
                                    },
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
                                      keyExtractor={(item, index) =>
                                        index.toString()
                                      }
                                      data={this.state.tzs}
                                      extraData={this.state}
                                      numColumns={1}
                                      renderItem={this.renderItem2.bind(this)}
                                    />
                                  </View>
                                </View>
                              </Modal>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  )}
                  {this.state.isCompanySec == true ? null : (
                    <TouchableOpacity
                      style={styles.searchSection}
                      onPress={() => {
                        this.setState({ isCompanySec: true });
                      }}
                    >
                      <View
                        style={{
                          marginLeft: Metrics.smallMargin,
                        }}
                      >
                        <TouchableHighlight
                          underlayColor="transparent"
                          style={[styles.rightViewBorder]}
                          onPress={() => this.showWorkHour(index)}
                        >
                          <View>
                            <Text
                              style={{
                                fontFamily: Font.regular,
                                fontSize: width * 0.03,
                                color: COLORS.main_text_color,
                              }}
                            >
                              Add Hours
                            </Text>
                          </View>
                        </TouchableHighlight>
                      </View>
                      <View style={styles.addressRightView}>
                        <Text style={styles.compnyRightText}>Work Hours</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
              );
            })}
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.addNewBox}
              onPress={() =>
                this.addCompanyInput(this.state.textInput.length, false)
              }
            >
              {this.state.status ? (
                <Text
                  style={[
                    styles.addNew,
                    {
                      color:
                        this.props.theme.mode === "light"
                          ? COLORS.main_text_color
                          : COLORS.white,
                    },
                  ]}
                >
                  + Add Comapny
                </Text>
              ) : null}
            </TouchableOpacity>
          </View>

          {this.state.removeNoteSection ? (
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <TouchableOpacity style={{}} onPress={() => this.removeNote()}>
                {this.state.status ? (
                  <Text style={[styles.removeNew]}>- Remove Comapny</Text>
                ) : null}
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
  ShowHideTextComponentView = async () => {
    if (this.state.status == false) {
      this.setState({ status: true });
    } else {
      this.setState({ status: false });
    }
  };
  renderLast() {
    return (
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
          underlayColor="transparent"
          style={styles.saveView}
          onPress={this.ShowHideTextComponentView}
        >
          <Text
            style={{
              color: COLORS.main_text_color,
              fontFamily: Font.medium,
              fontSize: width * 0.04,
            }}
          >
            {this.state.status == true ? "Save" : "Edit"}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
  render() {
    const { mobileLabelList } = this.state;
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
        {/* <View style={{width :width ,alignItems:'center'}}> */}

        <View style={styles.container}>
          <Container>
            <ScrollView nestedScrollEnabled={true}>
              <View style={{ width: width, alignItems: "center" }}>
                {this.renderHeader()}
                {this.renderMiddle()}

                {this.renderName()}
                {this.renderMobile()}
                {this.renderEmail()}
                {this.renderAddress()}
                {this.renderMessenger()}
                {this.renderSocialMedia()}
                {this.renderWebsite()}
                {this.renderDate()}
                {this.renderNote()}
                {this.renderCompany()}
              </View>
            </ScrollView>
            {this.renderLast()}
          </Container>
          {/* </View> */}
        </View>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
  username: state.login.shouldLoadData.username,
  dateChange: state.switchDateReducer.dateChange,
});

const mapDispatchToProps = (dispatch) => ({
  switchTheme: bindActionCreators(switchTheme, dispatch),
});

export default connect(mapStateToProps)(MyContactInfromation);

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;
const NormalText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 13px;
  color: ${(props) => props.theme.textColor};
`;
const BoldText = styled.Text`
  font-family: Roboto-Bold;
  font-size: 17px;
  color: ${(props) => props.theme.textColor};
`;
