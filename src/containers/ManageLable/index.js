import { ActionSheet, Root } from "native-base";
import {
  Dimensions,
  FlatList,
  Image,
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

import Add from "../AddContact/index";
import AsyncStorage from "@react-native-community/async-storage";
import { COLORS } from "../theme/Colors.js";
import CheckBox from "@react-native-community/checkbox";
import Constants from "../../action/Constants";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Icon from "react-native-vector-icons/Entypo";
import ImagePicker from "react-native-image-crop-picker";
import IntlPhoneInput from "react-native-intl-phone-input";
import Metrics from "../theme/Metrics";
import Toast from "react-native-easy-toast";
import checked from '../../assets/icons/checked.png'
import { connect } from "react-redux";
import downArrow from "../../assets/icons/dropIcon.png";
import { manageLabelToFirebase } from "../../services/FirebaseDatabase/managelabelToFirebase";
import moment from "moment";
import styles from "./style.js";

var { width, height } = Dimensions.get("window");
var momentTime = require('moment-timezone');
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
var BUTTONS = ["Take Photo", "Choose Photo From Gallery", "Cancel"];
class ManageLable extends Component {
  constructor() {
    super();
    this.state = {
      selectItem:"",
      status: false,
      selectAll: false,
      selectedName: "",
      first_name: "",
      last_name: "",
      middle_name: "",
      nick_name: "",
      phone_1: "",
      phone_2: "",
      phone_3: "",
      email_1: {
        email: "",
        label: "",
      },
      email_2: {
        email: "",
        label: "",
      },
      address: {
        address: "",
        label: "",
      },
      address2: {
        address: "",
        label: "",
      },
      messanger_1: {
        messanger: "",
        label: "",
      },
      messanger_2: {
        messanger: "",
        label: "",
      },
      social_media_1: {
        socialMedia: "",
        label: "",
      },
      social_media_2: {
        socialMedia: "",
        label: "",
      },
      website_1: {
        website: "",
        label: "",
      },
      website_2: {
        website: "",
        label: "",
      },
      date: {
        date: "",
        label: "",
      },
      note: {
        note: "",
        label: "",
      },
      company: "",
      job_title: "",
      work_hour:  {
        monday : { first :"", to:"" },
        tuesday : { first :"", to:"" },
        wednesday : { first :"", to:"" },
        thursday : { first :"", to:"" },
        friday : { first :"", to:"" },
        saturday : { first :"", to:"" },
        sunday : { first :"", to:"" },
      },
      //checbox
      checked_first_name: false,
      checked_middle_name: false,
      checked_last_name: false,
      checked_nick_name: false,
      checked_phone_1: false,
      checked_phone_2: false,
      checked_email_1: false,
      checked_email_2: false,
      checked_address: false,
      checked_messagner_1: false,
      checked_messagner_2: false,
      checked_social_media_1: false,
      checked_social_media_2: false,
      checked_website_1: false,
      checked_website_2: false,
      checked_date: false,
      checked_note: false,
      checked_company: false,
      checked_job_title: false,
      checked_work_hours: false,

      //mobile modal
      phone_1: {
        phone_1: "",
        label: "",
      },
      isMobileModelOpen: false,
      mobileLabelList: [
        { label: "Personal" },
        { label: "Work" },
        { label: "Home" },
        { label: "Main" },
        { label: "Other" },
      ],
      mobileLabel: "",
      isAddMobileLabel: false,
      phone_2: {
        phone_2: "",
        label: "",
      },
      isMobileModelOpen2: false,
      mobileLabelList2: [
        { label: "Personal" },
        { label: "Work" },
        { label: "Other" },
      ],
      mobileLabel2: "",
      isAddMobileLabel2: false,
      // email modal
      isEmailModelOpen: false,
      emailLabelList: [
        { label: "Personal" },
        { label: "Work" },
        { label: "Main" },
        { label: "Other" },
      ],
      emailLabel: "",
      isAddEmailLabel: false,
      isEmailArrrayModelOpen: false,
      isAddEmailArrayLabel: false,
      //
      isEmailModelOpen_2: false,
      emailLabelList_2: [
        { label: "Personal" },
        { label: "Work" },
        { label: "Main" },
        { label: "Other" },
      ],
      emailLabel_2: "",
      isAddEmailLabel_2: false,
      isEmailArrrayModelOpen_2: false,
      isAddEmailArrayLabel_2: false,
      //address modal
      isAddressModelOpen: false,
      addressLabelList: [
        { label: "Home" },
        { label: "Work" },
        { label: "Other" },
      ],
      addressLabel: "",
      isAddAddressLabel: false,
      isAddressArrayModelOpen: false,
      isAddAddressArrayLabel: false,
      //messnger model
      isMessangerModelOpen: false,
      mesangerLabelList: [{ label: "Work" }, { label: "Personal" }],
      messengerLabel: "",
      isAddMessangerLabel: false,
      isMessangerArrayModelOpen: false,
      isAddMessangerArrayLabel: false,
      //messnger model 2
      isMessangerModelOpen2: false,
      mesangerLabelList2: [{ label: "Work" }, { label: "Personal" }],
      messengerLabel2: "",
      isAddMessangerLabel2: false,
      isMessangerArrayModelOpen2: false,
      isAddMessangerArrayLabel2: false,
      //social Media
      isSocialMediaModelOpen: false,
      socialMediaLabelList: [
        { label: "Instagram Personal " },
        { label: "Periscop Professional" },
      ],
      socialMediaLabel: "",
      isAddSocialMediaLabel: false,
      isSocialMediaArrayModelOpen: false,
      isSocialMediaModelOpen: false,
      isAddSocialMediaArrayLabel: false,
      //social Media 2
      isSocialMediaModelOpen2: false,
      socialMediaLabelList2: [
        { label: "Instagram Personal " },
        { label: "Periscop Professional" },
      ],
      socialMediaLabel2: "",
      isAddSocialMediaLabel2: false,
      isSocialMediaArrayModelOpen2: false,
      isSocialMediaModelOpen2: false,
      isAddSocialMediaArrayLabel2: false,
      //website
      isWebsiteModelOpen: false,
      websiteLableList: [
        { label: " Sport gambling podcast" },
        { label: " Universal Studio" },
      ],
      websiteLabel: "",
      isAddWebsiteLabel: false,
      isWebsiteArrayModelOpen: false,
      isWebsiteModelOpen: false,
      isAddWebsiteArrayLabel: false,
      //website 2
      isWebsiteModelOpen2: false,
      websiteLableList2: [
        { label: " Sport gambling podcast" },
        { label: " Universal Studio" },
      ],
      websiteLabel2: "",
      isAddWebsiteLabel2: false,
      isWebsiteArrayModelOpen2: false,
      isWebsiteModelOpen2: false,
      isAddWebsiteArrayLabel2: false,
      //date
      isDateModelOpen: false,
      dateLableList: [{ label: " Birthday" }, { label: "Wedding Anniversary" }],
      dateLabel: "",
      isAddDateLabel: false,
      isDateArrayModelOpen: false,
      isDateModelOpen: false,
      isAddDateArrayLabel: false,
      isVisible: false,
      //note
      isNoteModelOpen: false,
      noteLabelList: [{ label: "Note" }],
      noteLabel: "",
      isAddNoteLabel: false,
      isNoteArrayModelOpen: false,
      isNoteModelOpen: false,
      isAddNoteArrayLabel: false,
      dataManage: [],
      flatViewOpen: false,
      
      image: null,
      images: null,
      image2: null,
      image3: null,
      profile_image:"",
      profile_image2:"",
      profile_image3:"",
      // work hour 
      monday_1:"",
      monday_2:"",
      tue_1:"",
      tue_2:"",
      wed_1:"",
      wed_2:"",
      thru_1:"",
      thru_2:"",
      fri_1:"",
      fri_2:"",
      sat_1:"",
      sat_2:"",
      sun_1:"",
      sun_2:"",
      tz:[],
      tzs:"",
      workViewOpen:false,
    };
  }

  async componentDidMount() {
    const { navigation } = this.props;
    this.setState({
      selectedName: await AsyncStorage.getItem("@selectedName"),
    });
  
    this.focusListener = navigation.addListener("didFocus", async () => {
      this.labelList();
    });
    
 
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


      this.setState({tzs :  this.state.tz});
      //  let date = new Date;
      //  this.state.tzs.forEach((timeZone) => {

      // });
  }
  labelList = () => {
    this.setState({ isLoading: true }, async () => {
      const baseurl = Constants.baseurl;
      fetch(baseurl + "get_label")
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          if (responseJson.data.relation == "") {
            this.setState({ dataManage: [] });
          } else {
            var labelData = responseJson.data.relation
              .split(/,/)
              .map((item) => {
                return { relation: item, value: item };
              });
            this.setState({ dataManage: labelData });

            console.log("label data--->", this.state.dataManage);
          }
        })
        .catch((error) => {
          console.error(error);
          this.setState({ isLoading: false });
        });
    });
  };

  renderHeader() {
    return (
      <Header
        title="Manage Label"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }
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

              <TouchableOpacity style={styles.first} onPress={this.state.status ? this.selectPhoto : null}>
                <Text style={styles.firstText}>Select Photo</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.firstMiddle}>
              <View style={styles.squareBorder}>
                {this.renderImage2(this.state.image2)}
              </View>
              <TouchableOpacity
                style={styles.first}
                onPress={this.state.status ? this.selectPhoto2 :null}
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

  first_name_submit = () => {
    const { checked_first_name } = this.state;
    if (checked_first_name == true) {
      this.setState({ checked_first_name: false });
      this.setState({ first_name: "" });
    } else {
      this.setState({ checked_first_name: true });
    }
  };
  middle_name_submit = () => {
    const { checked_middle_name } = this.state;
    if (checked_middle_name == true) {
      this.setState({ checked_middle_name: false });
      this.setState({ middle_name: "" });
    } else {
      this.setState({ checked_middle_name: true });
    }
  };
  last_name_submit = () => {
    const { checked_last_name } = this.state;
    if (checked_last_name == true) {
      this.setState({ checked_last_name: false });
      this.setState({ last_name: "" });
    } else {
      this.setState({ checked_last_name: true });
    }
  };
  nick_name_submit = () => {
    const { checked_nick_name } = this.state;
    if (checked_nick_name == true) {
      this.setState({ checked_nick_name: false });
      this.setState({ nick_name: "" });
    } else {
      this.setState({ checked_nick_name: true });
    }
  };

  renderName() {
    return (
      <View
        style={{
          marginLeft: Metrics.baseMargin,
        }}
      >
        {this.state.status ? (
          <TouchableOpacity style={styles.mainView} onPress={() =>{alert("Please Select Checkbox")}}>
            <CheckBox
              value={this.state.checked_first_name}
              onValueChange={this.first_name_submit}
              tintColors={{ true: "#1374A3", false: "#1374A3" }}
            />
            <View style={styles.filedView}>
              <TextInput
                placeholder="First Name"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                keyboardType={"default"}
                value={this.state.first_name}
                onChangeText={(first_name) => this.setState({ first_name })}
                editable={this.state.checked_first_name == false ? false : true}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>First Name</Text>
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.filedView}>
              <TextInput
                placeholder="First Name"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                keyboardType={"default"}
                value={this.state.first_name}
                onChangeText={(first_name) => this.setState({ first_name })}
                editable={this.state.status == true ? true : false}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>First Name</Text>
              </View>
            </View>
          </View>
        )}

        {this.state.status ? (
          <View style={styles.mainView}>
            <CheckBox
              value={this.state.checked_middle_name}
              onValueChange={this.middle_name_submit}
              tintColors={{ true: "#1374A3", false: "#1374A3" }}
            />
            <View style={styles.filedView}>
              <TextInput
                placeholder="Middle Name"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                ref={(input) => {
                  this.middle_name = input;
                }}
                value={this.state.middle_name}
                onChangeText={(middle_name) => this.setState({ middle_name })}
                onSubmitEditing={() => {
                  this.last_name.focus();
                }}
                editable={
                  this.state.checked_middle_name == false ? false : true
                }
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Middle Name</Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.filedView}>
              <TextInput
                placeholder="Middle Name"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                ref={(input) => {
                  this.middle_name = input;
                }}
                value={this.state.middle_name}
                onChangeText={(middle_name) => this.setState({ middle_name })}
                onSubmitEditing={() => {
                  this.last_name.focus();
                }}
                editable={this.state.status == true ? true : false}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Middle Name</Text>
              </View>
            </View>
          </View>
        )}

        {this.state.status ? (
          <View style={styles.mainView}>
            <CheckBox
              value={this.state.checked_last_name}
              onValueChange={this.last_name_submit}
              tintColors={{ true: "#1374A3", false: "#1374A3" }}
            />
            <View style={styles.filedView}>
              <TextInput
                placeholder="Last Name"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                ref={(input) => {
                  this.last_name = input;
                }}
                value={this.state.last_name}
                onChangeText={(last_name) => this.setState({ last_name })}
                onSubmitEditing={() => {
                  this.nick_name.focus();
                }}
                editable={this.state.checked_last_name == false ? false : true}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Last Name</Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.filedView}>
              <TextInput
                placeholder="Last Name"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                ref={(input) => {
                  this.last_name = input;
                }}
                value={this.state.last_name}
                onChangeText={(last_name) => this.setState({ last_name })}
                onSubmitEditing={() => {
                  this.nick_name.focus();
                }}
                editable={this.state.status == true ? true : false}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Last Name</Text>
              </View>
            </View>
          </View>
        )}
        {this.state.status ? (
          <View style={styles.mainView}>
            <CheckBox
              value={this.state.checked_nick_name}
              onValueChange={this.nick_name_submit}
              tintColors={{ true: "#1374A3", false: "#1374A3" }}
            />
            <View style={styles.filedView}>
              <TextInput
                placeholder="NickName"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                value={this.state.nick_name}
                ref={(input) => {
                  this.nick_name = input;
                }}
                onChangeText={(nick_name) => this.setState({ nick_name })}
                onSubmitEditing={() => {
                  this.phone_1.focus();
                }}
                editable={this.state.checked_nick_name == false ? false : true}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Nick Name</Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.filedView}>
              <TextInput
                placeholder="NickName"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                value={this.state.nick_name}
                ref={(input) => {
                  this.nick_name = input;
                }}
                onChangeText={(nick_name) => this.setState({ nick_name })}
                onSubmitEditing={() => {
                  this.phone_1.focus();
                }}
                editable={this.state.status == true ? true : false}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Nick Name</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }

  phone_1_submit = () => {
    const { checked_phone_1 } = this.state;
    if (checked_phone_1 == true) {
      this.setState({ checked_phone_1: false });
      this.setState({ phone_1: "" });
    } else {
      this.setState({ checked_phone_1: true });
    }
  };
  onChangeNumber_1 = ({
    dialCode,
    unmaskedPhoneNumber,
    phoneNumber,
    isVerified,
  }) => {
    if (isVerified == true) {
      this.setState({ phone_1: unmaskedPhoneNumber });
    } else {
      this.setState({ phone_1: unmaskedPhoneNumber });
    }
  };

  phone_2_submit = () => {
    const { checked_phone_2 } = this.state;
    if (checked_phone_2 == true) {
      this.setState({ checked_phone_2: false });
      this.setState({ phone_2: "" });
    } else {
      this.setState({ checked_phone_2: true });
    }
  };
  onChangeNumber_2 = ({
    dialCode,
    unmaskedPhoneNumber,
    phoneNumber,
    isVerified,
  }) => {
    if (isVerified == true) {
      this.setState({ phone_2: unmaskedPhoneNumber });
    } else {
      this.setState({ phone_2: unmaskedPhoneNumber });
    }
  };

  renderMobileLabel = ({ item, index }) => {
    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() =>
          this.setState({ mobileLabel: item.label, isMobileModelOpen: false })
        }
      >
        <Text style={styles.labelName}> {item.label} </Text>
      </TouchableHighlight>
    );
  };
  renderMobileLabel_2 = ({ item, index }) => {
    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() =>
          this.setState({ mobileLabel2: item.label, isMobileModelOpen2: false })
        }
      >
        <Text style={styles.labelName}> {item.label} </Text>
      </TouchableHighlight>
    );
  };

  renderMobile() {
    return (
      //
      <View
        style={{
          marginLeft: Metrics.baseMargin,
          marginTop: Metrics.doubleBaseMargin,
        }}
      >
        {this.state.status ? (
          <View style={styles.mainView}>
            <CheckBox
              value={this.state.checked_phone_1}
              onValueChange={this.phone_1_submit}
              tintColors={{ true: "#1374A3", false: "#1374A3" }}
            />
            <View style={styles.filedViewForMobile}>
              <View style={{width:width*0.8,height:width*0.030,flexDirection: "row" }}>
                      <Text style={[styles.rightTextMobile,{marginLeft:5}]}>Phone Number</Text>
                    <View style={styles.rightViewMobile}>
                      <Text style={styles.rightTextMobile}>Personal(Mobile)</Text>
                    </View>
              </View>
            
              <View style={{ }}>
                <IntlPhoneInput
                  containerStyle={{
                    width: width * 0.52,
                    height: height * 0.05,
                    marginBottom: Metrics.doubleBaseMargin,
                    }}
                  phoneInputStyle={styles.mobileInputText}
                  dialCodeTextStyle={styles.dialcodeText}
                  dialCode={this.state.dialCode}
                  // placeholder='3265'
                  value={this.state.phone_1}
                  ref={(input) => {
                    this.phone_1 = input;
                  }}
                  keyboardType={"numeric"}
                  onChangeText={this.onChangeNumber_1}
                  isShowLabelManually={false}
                />
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.filedView}>
              <Text style={styles.stylefiledText}>Phone Number -1</Text>
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Personal(Mobile)</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
  email_1_submit = () => {
    const { checked_email_1 } = this.state;
    if (checked_email_1 == true) {
      this.setState({ checked_email_1: false });
      this.setState({ email_1: "" });
    } else {
      this.setState({ checked_email_1: true });
    }
  };

  
  onChangeEmail = (value) => {
    this.state.email_1.email = value;
    this.setState({ email_1: this.state.email_1 });
  };
  
  changeEmailLabel = (label) => {
    this.setState({ isEmailModelOpen: false });
    this.state.email_1.label = label;
    this.setState({ email_1: this.state.email_1 });
  };


  renderEmail() {
    return (
      <View
        style={{
          marginLeft: Metrics.baseMargin,
          marginTop: Metrics.doubleBaseMargin,
        }}
      >
        {this.state.status ? (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CheckBox
              value={this.state.checked_email_1}
              onValueChange={this.email_1_submit}
              tintColors={{ true: "#1374A3", false: "#1374A3" }}
            />
            <View style={styles.filedViewForMobile}>
            <View style={{width:width*0.8,height:width*0.030,flexDirection: "row" }}>
                      <Text style={[styles.rightTextMobile,{marginLeft:5}]}>E-mail</Text>
                    <View style={styles.rightViewMobile}>
                      <Text style={styles.rightTextMobile}>Personal</Text>
                    </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  placeholder="E-mail Address"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  // value={this.state.email_1}
                  onChangeText={(value) => this.onChangeEmail(value)}
                  onSubmitEditing={() => {
                    this.email_2.focus();
                  }}
                  keyboardType={"email-address"}
                  ref={(input) => {
                    this.email_1 = input;
                  }}
                  editable={this.state.checked_email_1 == false ? false : true}
                />
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.filedView}>
              <TextInput
                placeholder="E-mail Address -1"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                // value={this.state.email_1}
                onChangeText={(value) => this.onChangeEmail(value)}
                onSubmitEditing={() => {
                  this.email_2.focus();
                }}
                keyboardType={"email-address"}
                ref={(input) => {
                  this.email_1 = input;
                }}
                editable={this.state.status == true ? true : false}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Personal</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }

  address_submit = () => {
    const { checked_address } = this.state;
    if (checked_address == true) {
      this.setState({ checked_address: false });
      this.setState({ address: "" });
    } else {
      this.setState({ checked_address: true });
    }
  };

  onChangeAddress = (value) => {
    this.state.address.address = value;
    this.setState({ address: this.state.address });
  };

  onChangeAddress2 = (value) => {
    this.state.address2.address = value;
    this.setState({ address2 : this.state.address2 });
  };

  changeAddressLabel = (label) => {
    this.setState({ isAddressModelOpen: false });
    this.state.address.label = label;
    this.setState({ address2 : this.state.address });
  };
 

  renderAddress() {
    return (
      <View
        style={{
          marginLeft: Metrics.baseMargin,
          marginTop: Metrics.doubleBaseMargin,
        }}
      >
        {this.state.status ? (
          <View style={{ flexDirection: "row" }}>
            <CheckBox
              value={this.state.checked_address}
              onValueChange={this.address_submit}
              tintColors={{ true: "#1374A3", false: "#1374A3" }}
            />
            <View style={styles.addressFieldContainerAddress}>
            <View style={{width:width*0.8,height:width*0.030,flexDirection: "row" }}>
                      <Text style={[styles.rightTextMobile,{marginLeft:5}]}>Address</Text>
                    <View style={styles.rightViewMobile}>
                      <Text style={styles.rightTextMobile}>Personal</Text>
                    </View>
              </View>
              <TextInput
                placeholder="Address "
                style={styles.addressField}
                placeholderTextColor={COLORS.main_text_color}
                // value={this.state.address}
                onChangeText={(value) => this.onChangeAddress(value)}
                onSubmitEditing={() => {
                  this.messanger_1.focus();
                }}
                keyboardType={"default"}
                ref={(input) => {
                  this.address = input;
                }}
                multiline={true}
                editable={this.state.checked_address == false ? false : true}
              />
             
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.addressFieldContainer}>
              <TextInput
                placeholder="Address "
                style={styles.addressField}
                placeholderTextColor={COLORS.main_text_color}
                // value={this.state.address}
                onChangeText={(value) => this.onChangeAddress(value)}
                onSubmitEditing={() => {
                  this.messanger_1.focus();
                }}
                keyboardType={"default"}
                ref={(input) => {
                  this.address = input;
                }}
                multiline={true}
                editable={this.state.status == true ? true : false}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Address</Text>
              </View>
            </View>
          </View>
        )}
        {this.state.status ? (
          <View style={{ flexDirection: "row" }}>
            <CheckBox
              value={this.state.checked_address}
              onValueChange={this.address_submit}
              tintColors={{ true: "#1374A3", false: "#1374A3" }}
            />
          <View style={styles.addressFieldContainerAddress}>
            <View style={{width:width*0.8,height:width*0.030,flexDirection: "row" }}>
                      <Text style={[styles.rightTextMobile,{marginLeft:5}]}>Address</Text>
                    <View style={styles.rightViewMobile}>
                      <Text style={styles.rightTextMobile}>Work</Text>
                    </View>
              </View>
              <TextInput
                placeholder="Address "
                style={styles.addressField}
                placeholderTextColor={COLORS.main_text_color}
                // value={this.state.address}
                onChangeText={(value) => this.onChangeAddress2(value)}
                onSubmitEditing={() => {
                  this.messanger_1.focus();
                }}
                keyboardType={"default"}
                ref={(input) => {
                  this.address2 = input;
                }}
                multiline={true}
                editable={this.state.checked_address == false ? false : true}
              />
             
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.addressFieldContainer}>
              <Text
                style={[
                  styles.addressField,
                  { marginTop: Metrics.smallMargin },
                ]}
              >
                Address
              </Text>

              <View style={styles.rightView}>
                <Text style={styles.righttext}>Work</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
  messagner_1_submit = () => {
    const { checked_messagner_1 } = this.state;
    if (checked_messagner_1 == true) {
      this.setState({ checked_messagner_1: false });
      this.setState({ messanger_1: "" });
    } else {
      this.setState({ checked_messagner_1: true });
    }
  };

  onChangeMessenger = (value) => {
    this.state.messanger_1.messanger = value;
    this.setState({ messanger_1: this.state.messanger_1 });
  };
  changeMessangerLabel = (label) => {
    this.setState({ isMessangerModelOpen: false });
    this.state.messanger_1.label = label;
    this.setState({ messanger_1: this.state.messanger_1 });
  };

  renderMessage() {
    return (
      <View
        style={{
          marginLeft: Metrics.baseMargin,
          marginTop: Metrics.doubleBaseMargin,
        }}
      >
        {this.state.status ? (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CheckBox
              value={this.state.checked_messagner_1}
              onValueChange={this.messagner_1_submit}
              tintColors={{ true: "#1374A3", false: "#1374A3" }}
            />
            <View style={styles.filedViewForMobile}>
              <View style={{width:width*0.8,height:width*0.030,flexDirection: "row" }}>
                      <Text style={[styles.rightTextMobile,{marginLeft:5}]}>Messenger</Text>
                    <View style={styles.rightViewMobile}>
                      <Text style={styles.rightTextMobile}>Facebook Messenger</Text>
                    </View>
              </View>
            
              <TextInput
                placeholder="Messanger Account "
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                //value={this.state.messanger_1}
                onChangeText={(value) => this.onChangeMessenger(value)}
                onSubmitEditing={() => {
                  this.messanger_2.focus();
                }}
                keyboardType={"default"}
                ref={(input) => {
                  this.messanger_1 = input;
                }}
                editable={
                  this.state.checked_messagner_1 == false ? false : true
                }
              />
          
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.filedView}>
              <TextInput
                placeholder="Messanger Account "
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                //value={this.state.messanger_1}
                onChangeText={(value) => this.onChangeMessenger(value)}
                onSubmitEditing={() => {
                  this.messanger_2.focus();
                }}
                keyboardType={"default"}
                ref={(input) => {
                  this.messanger_1 = input;
                }}
                editable={this.state.status == true ? true : false}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Facebook Messenger</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
  socil_media_1_submit = () => {
    const { checked_social_media_1 } = this.state;
    if (checked_social_media_1 == true) {
      this.setState({ checked_social_media_1: false });
      this.setState({ social_media_1: "" });
    } else {
      this.setState({ checked_social_media_1: true });
    }
  };
  socil_media_2_submit = () => {
    const { checked_social_media_2 } = this.state;
    if (checked_social_media_2 == true) {
      this.setState({ checked_social_media_2: false });
      this.setState({ social_media_2: "" });
    } else {
      this.setState({ checked_social_media_2: true });
    }
  };

  onChangeSocialMedia = (value) => {
    this.state.social_media_1.socialMedia = value;
    this.setState({ social_media_1: this.state.social_media_1 });
  };

  changeSocialMediaLabel = (label) => {
    this.setState({ isSocialMediaModelOpen: false });
    this.state.social_media_1.label = label;
    this.setState({ social_media_1: this.state.social_media_1 });
  };
  onChangeSocialMedia2 = (value) => {
    this.state.social_media_2.socialMedia = value;
    this.setState({ social_media_2: this.state.social_media_2 });
  };

  changeSocialMediaLabel2 = (label) => {
    this.setState({ isSocialMediaModelOpen2: false });
    this.state.social_media_2.label = label;
    this.setState({ social_media_2: this.state.social_media_2 });
  };

  renderSocialmedia() {
    return (
      <View
        style={{
          marginLeft: Metrics.baseMargin,
          marginTop: Metrics.doubleBaseMargin,
        }}
      >
        {this.state.status ? (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CheckBox
              value={this.state.checked_social_media_1}
              onValueChange={this.socil_media_1_submit}
              tintColors={{ true: "#1374A3", false: "#1374A3" }}
            />
           <View style={styles.filedViewForMobile}>
              <View style={{width:width*0.8,height:width*0.030,flexDirection: "row" }}>
                      <Text style={[styles.rightTextMobile,{marginLeft:5}]}>Social Media</Text>
                    <View style={styles.rightViewMobile}>
                      <Text style={styles.rightTextMobile}>Twitter</Text>
                    </View>
              </View>
              <TextInput
                placeholder=" Social Media Account  -1"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                //value={this.state.social_media_1}
                onChangeText={(value) => this.onChangeSocialMedia(value)}
                onSubmitEditing={() => {
                  this.social_media_2.focus();
                }}
                keyboardType={"default"}
                ref={(input) => {
                  this.social_media_1 = input;
                }}
                editable={
                  this.state.checked_social_media_1 == false ? false : true
                }
              />
              
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.filedView}>
              <TextInput
                placeholder=" Social Media Account  -1"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                //value={this.state.social_media_1}
                onChangeText={(value) => this.onChangeSocialMedia(value)}
                onSubmitEditing={() => {
                  this.social_media_2.focus();
                }}
                keyboardType={"default"}
                ref={(input) => {
                  this.social_media_1 = input;
                }}
                editable={
                  this.state.checked_social_media_1 == false ? false : true
                }
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Twitter</Text>
              </View>
            </View>
          </View>
        )}
        {this.state.status ? (
          <View style={styles.mainView}>
            <CheckBox
              value={this.state.checked_social_media_2}
              onValueChange={this.socil_media_2_submit}
              tintColors={{ true: "#1374A3", false: "#1374A3" }}
            />
              <View style={styles.filedViewForMobile}>
              <View style={{width:width*0.8,height:width*0.030,flexDirection: "row" }}>
                      <Text style={[styles.rightTextMobile,{marginLeft:5}]}>Social Media</Text>
                    <View style={styles.rightViewMobile}>
                      <Text style={styles.rightTextMobile}>Instagram</Text>
                    </View>
              </View>
              <TextInput
                placeholder=" Social Media Account  -2"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                value={this.state.social_media_2}
                onChangeText={(value) => this.onChangeSocialMedia2(value)}
                onSubmitEditing={() => {
                  this.website_1.focus();
                }}
                keyboardType={"default"}
                ref={(input) => {
                  this.social_media_2 = input;
                }}
                editable={
                  this.state.checked_social_media_2 == false ? false : true
                }
              />
              
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.filedView}>
              <TextInput
                placeholder=" Social Media Account  -2"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                value={this.state.social_media_2}
                onChangeText={(value) => this.onChangeSocialMedia2(value)}
                onSubmitEditing={() => {
                  this.website_1.focus();
                }}
                keyboardType={"default"}
                ref={(input) => {
                  this.social_media_2 = input;
                }}
                editable={
                  this.state.checked_social_media_2 == false ? false : true
                }
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Instagram</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
  website_1_submit = () => {
    const { checked_website_1 } = this.state;
    if (checked_website_1 == true) {
      this.setState({ checked_website_1: false });
      this.setState({ website_1: "" });
    } else {
      this.setState({ checked_website_1: true });
    }
  };

  onChangeWebsite = (value, index) => {
    this.state.website_1.website = value;
    this.setState({ website_1: this.state.website_1 });
  };
  changeWebsiteLabel = (label) => {
    this.setState({ isWebsiteModelOpen: false });
    this.state.website_1.label = label;
    this.setState({ website_1: this.state.website_1 });
  };

  renderWebsite() {
    return (
      <View
        style={{
          marginLeft: Metrics.baseMargin,
          marginTop: Metrics.doubleBaseMargin,
        }}
      >
        {this.state.status ? (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CheckBox
              value={this.state.checked_website_1}
              onValueChange={this.website_1_submit}
              tintColors={{ true: "#1374A3", false: "#1374A3" }}
            />
           <View style={styles.filedViewForMobile}>
              <View style={{width:width*0.8,height:width*0.030,flexDirection: "row" }}>
                      <Text style={[styles.rightTextMobile,{marginLeft:5}]}>Website</Text>
                    <View style={styles.rightViewMobile}>
                      <Text style={styles.rightTextMobile}>SGP</Text>
                    </View>
              </View>
              <TextInput
                placeholder="Website -1"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                // value={this.state.website}
                onChangeText={(value) => this.onChangeWebsite(value)}
                onSubmitEditing={() => {
                  this.website_2.focus();
                }}
                keyboardType={"default"}
                ref={(input) => {
                  this.website_1 = input;
                }}
                editable={this.state.checked_website_1 == false ? false : true}
              />
             
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.filedView}>
              <TextInput
                placeholder="Website -1"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                // value={this.state.website}
                onChangeText={(value) => this.onChangeWebsite(value)}
                onSubmitEditing={() => {
                  this.website_2.focus();
                }}
                keyboardType={"default"}
                ref={(input) => {
                  this.website_1 = input;
                }}
                editable={this.state.checked_website_1 == false ? false : true}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>SGP</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
  date_submit = () => {
    const { checked_date } = this.state;
    if (checked_date == true) {
      this.setState({ checked_date: false });
      this.setState({ date: "" });
    } else {
      this.setState({ checked_date: true });
    }
  };
  showDateTimePicker = () => {
    {
      this.setState({ isVisible: true });
    }
  };
  onChangeDate = (date) => {
    var date = moment(date).format("MMMM, Do YYYY");
    this.state.date.date = date;
    this.setState({ date: this.state.date });
    console.log("datae-----///>", this.state.date);
  };
  hidePicker = () => {
    this.setState({ isVisible: false });
  };

  changeDateLabel = (label) => {
    this.setState({ isDateModelOpen: false });
    this.state.date.label = label;
    this.setState({ date: this.state.date });
  };
  renderDate() {
    return (
      <View
        style={{
          marginLeft: Metrics.baseMargin,
          marginTop: Metrics.doubleBaseMargin,
        }}
      >
        {this.state.status ? (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CheckBox
              value={this.state.checked_date}
              onValueChange={this.date_submit}
              tintColors={{ true: "#1374A3", false: "#1374A3" }}
            />
            <View style={styles.filedViewForMobile}>
              <View style={{width:width*0.8,height:width*0.030,flexDirection: "row" }}>
                      <Text style={[styles.rightTextMobile,{marginLeft:5}]}>Date</Text>
                    <View style={styles.rightViewMobile}>
                      <Text style={styles.rightTextMobile}>Birthday</Text>
                    </View>
              </View>
            
              <TouchableOpacity onPress={this.showDateTimePicker}>
                {this.state.isVisible == false && this.state.date.date == "" ? (
                  <View style={styles.dateView}>
                    <Text style={styles.dateText}>Date</Text>
                  </View>
                ) : null}
                <Text style={styles.dateText}>{this.state.date.date}</Text>

                <DateTimePickerModal
                  isVisible={this.state.isVisible}
                  onConfirm={this.onChangeDate}
                  onCancel={this.hidePicker}
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.filedView}>
              <Text style={styles.stylefiledText}>Date</Text>
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Birthday</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
  note_submit = () => {
    const { checked_note } = this.state;
    if (checked_note == true) {
      this.setState({ checked_note: false });
      this.setState({ note: "" });
    } else {
      this.setState({ checked_note: true });
    }
  };

  onChangeNote = (value) => {
    this.state.note.note = value;
    this.setState({ note: this.state.note });
  };

  changeNoteLabel = (label) => {
    this.setState({ isNoteModelOpen: false });
    this.state.note.label = label;
    this.setState({ Note: this.state.note });
  };

  renderNote() {
    return (
      <View
        style={{
          marginLeft: Metrics.baseMargin,
          marginTop: Metrics.doubleBaseMargin,
        }}
      >
        {this.state.status ? (
          <View style={{ flexDirection: "row" }}>
            <CheckBox
              value={this.state.checked_note}
              onValueChange={this.note_submit}
              tintColors={{ true: "#1374A3", false: "#1374A3" }}
            />
             <View style={styles.addressFieldContainerAddress}>
            <View style={{width:width*0.8,height:width*0.030,flexDirection: "row" }}>
                      <Text style={[styles.rightTextMobile,{marginLeft:5}]}>Note</Text>
                    <View style={styles.rightViewMobile}>
                      <Text style={styles.rightTextMobile}>Note 1</Text>
                    </View>
              </View>
              <TextInput
                placeholder="Note"
                style={styles.addressField}
                placeholderTextColor={COLORS.main_text_color}
                // value={this.state.note}
                onChangeText={(value) => this.onChangeNote(value)}
                onSubmitEditing={() => {
                  this.company.focus();
                }}
                keyboardType={"default"}
                ref={(input) => {
                  this.note = input;
                }}
                multiline={true}
                editable={this.state.checked_note == false ? false : true}
              />
            
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.addressFieldContainer}>
              <TextInput
                placeholder="Note"
                style={styles.addressField}
                placeholderTextColor={COLORS.main_text_color}
                // value={this.state.note}
                onChangeText={(value) => this.onChangeNote(value)}
                onSubmitEditing={() => {
                  this.company.focus();
                }}
                keyboardType={"default"}
                ref={(input) => {
                  this.note = input;
                }}
                multiline={true}
                editable={this.state.status == true ? true : false}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Note 1</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
  company_submit = () => {
    const { checked_company } = this.state;
    if (checked_company == true) {
      this.setState({ checked_company: false });
      this.setState({ company: "" });
    } else {
      this.setState({ checked_company: true });
    }
  };
  job_title_submit = () => {
    const { checked_job_title } = this.state;
    if (checked_job_title == true) {
      this.setState({ checked_job_title: false });
      this.setState({ job_title: "" });
    } else {
      this.setState({ checked_job_title: true });
    }
  };
  work_hour_submit = () => {
    const { checked_work_hours } = this.state;
    if (checked_work_hours == true) {
      this.setState({ checked_work_hours: false });
      this.setState({ work_hour: "" });
    } else {
      this.setState({ checked_work_hours: true });
    }
  };
  onChangeMonday = (value) => {
      this.state.work_hour.monday.first = value ;
      this.setState({work_hour : this.state.work_hour })
  }
  onChangeMondayTo = (value) => {
    this.state.work_hour.monday.to = value ;
    this.setState({work_hour : this.state.work_hour })
  }
 onChangeTuesday = (value) => {
      this.state.work_hour.tuesday.first = value ;
      this.setState({work_hour : this.state.work_hour })
  }
  onChangeTuesdayTo = (value) => {
    this.state.work_hour.tuesday.to  = value ;
    this.setState({work_hour : this.state.work_hour })
  }
  onChangeWednesday = (value) => {
    this.state.work_hour.wednesday.first = value ;
    this.setState({work_hour : this.state.work_hour })
  }
  onChangeWednesdayTo = (value) => {
    this.state.work_hour.wednesday.to = value ;
    this.setState({work_hour : this.state.work_hour })
  }
  onChangeThursday = (value) => {
    this.state.work_hour.thursday.first = value ;
    this.setState({work_hour : this.state.work_hour })
  }
  onChangeThursdayTo = (value) => {
    this.state.work_hour.thursday.to = value ;
    this.setState({work_hour : this.state.work_hour })
  }
  onChangeFriday = (value) => {
    this.state.work_hour.friday.first = value ;
    this.setState({work_hour : this.state.work_hour })
  }
  onChangeFridayTo = (value) => {
    this.state.work_hour.friday.to = value ;
    this.setState({work_hour : this.state.work_hour })
  }
  onChangeSaturday = (value) => {
    this.state.work_hour.saturday.first = value ;
    this.setState({work_hour : this.state.work_hour })
  }
  onChangeSaturdayTo = (value) => {
    this.state.work_hour.saturday.to = value ;
    this.setState({work_hour : this.state.work_hour })
  }
  onChangeSunday = (value) => {
    this.state.work_hour.sunday.first = value ;
    this.setState({work_hour : this.state.work_hour })
  }
   onChangeSundayTo = (value) => {
    this.state.work_hour.sunday.to = value ;
    this.setState({work_hour : this.state.work_hour })
  }

  renderCompany() {
    return (
      <View
        style={{
          marginLeft: Metrics.baseMargin,
          marginTop: Metrics.doubleBaseMargin,
          marginBottom: Metrics.baseMargin,
        }}
      >
        {this.state.status ? (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CheckBox
              value={this.state.checked_company}
              onValueChange={this.company_submit}
              tintColors={{ true: "#1374A3", false: "#1374A3" }}
            />
            <View style={styles.filedViewForMobile}>
              <View
                style={{
                  width: width * 0.8,
                  height: width * 0.03,
                  flexDirection: "row",
                }}
              >
                <Text style={[styles.rightTextMobile, { marginLeft: 10 }]}>
                  Company
                </Text>
                <View style={styles.rightViewMobile}>
                  <Text style={styles.rightTextMobile}>Company</Text>
                </View>
              </View>
              <TextInput
                placeholder="Company"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                value={this.state.company}
                onChangeText={(company) => this.setState({ company })}
                onSubmitEditing={() => {
                  this.job_title.focus();
                }}
                keyboardType={"default"}
                ref={(input) => {
                  this.company = input;
                }}
                editable={this.state.checked_company == false ? false : true}
              />
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.filedViewForMobile}>
              <TextInput
                placeholder="Company"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                value={this.state.company}
                onChangeText={(company) => this.setState({ company })}
                onSubmitEditing={() => {
                  this.job_title.focus();
                }}
                keyboardType={"default"}
                ref={(input) => {
                  this.company = input;
                }}
                editable={this.state.status == true ? true : false}
              />
            </View>
          </View>
        )}
        {this.state.status ? (
          <View style={styles.mainView}>
            <CheckBox
              value={this.state.checked_job_title}
              onValueChange={this.job_title_submit}
              tintColors={{ true: "#1374A3", false: "#1374A3" }}
            />
            <View style={styles.filedViewForMobile}>
              <View
                style={{
                  width: width * 0.8,
                  height: width * 0.03,
                  flexDirection: "row",
                }}
              >
                <Text style={[styles.rightTextMobile, { marginLeft: 5 }]}>
                  Job Title
                </Text>
                <View style={styles.rightViewMobile}>
                  <Text style={styles.rightTextMobile}>Job Title</Text>
                </View>
              </View>
              <TextInput
                placeholder="Job Title"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                value={this.state.job_title}
                onChangeText={(job_title) => this.setState({ job_title })}
                onSubmitEditing={() => {
                  this.monday_1.focus();
                }}
                keyboardType={"default"}
                ref={(input) => {
                  this.job_title = input;
                }}
                editable={this.state.checked_job_title == false ? false : true}
              />
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.filedView}>
              <TextInput
                placeholder="Job Title"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                value={this.state.job_title}
                onChangeText={(job_title) => this.setState({ job_title })}
                onSubmitEditing={() => {
                  this.monday.first.focus();
                }}
                keyboardType={"default"}
                ref={(input) => {
                  this.job_title = input;
                }}
                editable={this.state.status == true ? true : false}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Job Title</Text>
              </View>
            </View>
          </View>
        )}
        {this.state.status ? (
          <View style={{ flexDirection: "row", marginTop: Metrics.baseMargin }}>
            <CheckBox
              value={this.state.checked_work_hours}
              onValueChange={this.work_hour_submit}
              tintColors={{ true: "#1374A3", false: "#1374A3" }}
            />
            <View style={styles.workView}>
              <View style={styles.LeftView}>
                <Image source={checked} style={styles.checkedIcon} />
                <View style={{ flexDirection: "row", alignItems: "center" }}>
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
                      placeholder="7:00AM"
                      placeholderTextColor={COLORS.main_text_color}
                      style={styles.timeText}
                      value={this.state.work_hour.monday.first}
                      onChangeText={(value) => this.onChangeMonday(value)}
                     
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
                      value={this.state.work_hour.monday.to}
                      onChangeText={(value) => this.onChangeMondayTo(value)}
                     
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
                      placeholder="7:00AM"
                      placeholderTextColor={COLORS.main_text_color}
                      style={styles.timeText}
                      value={this.state.work_hour.tuesday.first}
                      onChangeText={(value) => this.onChangeTuesday(value)}
                   
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
                      value={this.state.work_hour.tuesday.to}
                      onChangeText={(value) => this.onChangeTuesdayTo(value)}
                     
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
                      placeholder="7:00AM"
                      placeholderTextColor={COLORS.main_text_color}
                      style={styles.timeText}
                      value={this.state.work_hour.wednesday.first}
                      onChangeText={(value) => this.onChangeWednesday(value)}
                     
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
                      value={this.state.work_hour.wednesday.to}
                      onChangeText={(value) => this.onChangeWednesdayTo(value)}
                     
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
                      placeholder="7:00AM"
                      placeholderTextColor={COLORS.main_text_color}
                      style={styles.timeText}
                      value={this.state.work_hour.thursday.first}
                      onChangeText={(value) => this.onChangeThursday(value)}
                     
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
                      value={this.state.work_hour.thursday.to}
                      onChangeText={(value) => this.onChangeThursdayTo(value)}
                      
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
                      placeholder="7:00AM"
                      placeholderTextColor={COLORS.main_text_color}
                      style={styles.timeText}
                      value={this.state.work_hour.friday.first}
                      onChangeText={(value) => this.onChangeFriday(value)}
                      
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
                      value={this.state.work_hour.friday.to}
                      onChangeText={(value) => this.onChangeFridayTo(value)}
                    
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
                      placeholder="OFF"
                      placeholderTextColor={COLORS.main_text_color}
                      style={styles.timeText}
                      value={this.state.work_hour.saturday.first}
                      onChangeText={(value) => this.onChangeSaturday(value)}
                     
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
                      value={this.state.work_hour.saturday.to}
                      onChangeText={(value) => this.onChangeSaturdayTo(value)}
                    
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
                      placeholder="OFF"
                      placeholderTextColor={COLORS.main_text_color}
                      style={styles.timeText}
                      value={this.state.work_hour.sunday.first}
                      onChangeText={(value) => this.onChangeSunday(value)}
                      
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
                      value={this.state.work_hour.sunday.to}
                      onChangeText={(value) => this.onChangeSundayTo(value)}
                     
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
                    onPress={() => this.setState({ workViewOpen: true })}
                    style={styles.selectTimezone}
                  >
                    {this.state.selectItem == "" ? (
                      <Text
                        style={[styles.workText, { fontSize: width * 0.018 }]}
                      >
                        Select Time Zone
                      </Text>
                    ) : (
                      <Text
                        style={[styles.workText, { fontSize: width * 0.018 ,textAlign:'center'}]}
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
                        this.setState({ workViewOpen : false })
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
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.workView}>
              <View style={styles.LeftView}>
                <View style={styles.dayView}>
                  <Text style={[styles.workText, { fontSize: width * 0.03 }]}>
                    Monday
                  </Text>
                  <View style={styles.timeView}></View>
                  <Text
                    style={[
                      styles.workText,
                      { fontSize: width * 0.035, marginLeft: 5 },
                    ]}
                  >
                    to
                  </Text>
                  <View style={styles.timeView}></View>
                </View>
                <View style={styles.dayView}>
                  <Text style={[styles.workText, { fontSize: width * 0.03 }]}>
                    Monday
                  </Text>
                  <View style={styles.timeView}></View>
                  <Text
                    style={[
                      styles.workText,
                      { fontSize: width * 0.035, marginLeft: 5 },
                    ]}
                  >
                    to
                  </Text>
                  <View style={styles.timeView}></View>
                </View>
                <View style={styles.dayView}>
                  <Text style={[styles.workText, { fontSize: width * 0.03 }]}>
                    Monday
                  </Text>
                  <View style={styles.timeView}></View>
                  <Text
                    style={[
                      styles.workText,
                      { fontSize: width * 0.035, marginLeft: 5 },
                    ]}
                  >
                    to
                  </Text>
                  <View style={styles.timeView}></View>
                </View>
                <View style={styles.dayView}>
                  <Text style={[styles.workText, { fontSize: width * 0.03 }]}>
                    Monday
                  </Text>
                  <View style={styles.timeView}></View>
                  <Text
                    style={[
                      styles.workText,
                      { fontSize: width * 0.035, marginLeft: 5 },
                    ]}
                  >
                    to
                  </Text>
                  <View style={styles.timeView}></View>
                </View>
                <View style={styles.dayView}>
                  <Text style={[styles.workText, { fontSize: width * 0.03 }]}>
                    Monday
                  </Text>
                  <View style={styles.timeView}></View>
                  <Text
                    style={[
                      styles.workText,
                      { fontSize: width * 0.035, marginLeft: 5 },
                    ]}
                  >
                    to
                  </Text>
                  <View style={styles.timeView}></View>
                </View>
                <View style={styles.dayView}>
                  <Text style={[styles.workText, { fontSize: width * 0.03 }]}>
                    Monday
                  </Text>
                  <View style={styles.timeView}></View>
                  <Text
                    style={[
                      styles.workText,
                      { fontSize: width * 0.035, marginLeft: 5 },
                    ]}
                  >
                    to
                  </Text>
                  <View style={styles.timeView}></View>
                </View>
                <View style={styles.dayView}>
                  <Text style={[styles.workText, { fontSize: width * 0.03 }]}>
                    Monday
                  </Text>
                  <View style={styles.timeView}>
                    {/* <TextInput
                         placeholder="time"
                         style={[styles.workText, { fontSize: width * 0.020 }]}
                         /> */}
                  </View>
                  <Text
                    style={[
                      styles.workText,
                      { fontSize: width * 0.035, marginLeft: 5 },
                    ]}
                  >
                    to
                  </Text>
                  <View style={styles.timeView}></View>
                </View>
              </View>

              <View style={styles.rightView}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={[styles.workText, { fontSize: width * 0.026 }]}>
                    Work Hours
                  </Text>
                  <Text style={[styles.workText, { fontSize: width * 0.02 }]}>
                    GMT -05:00(Eastern Time)
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
  renderDropDown() {
    return (
      <View
        style={{
          alignItems: "flex-end",
          width: width,
        }}
      >
        <TouchableOpacity
          style={styles.flatSmallView}
          // onPress={this.openFlatView}
        >
          <TouchableOpacity>
            <View style={{ flexDirection: "row", width: width * 0.55 }}>
              <Text style={styles.flatSmallText}>
                {this.state.selectedName}
              </Text>
              <TouchableOpacity
                style={{
                  justifyContent: "flex-end",
                  flex: 1,
                  flexDirection: "row",
                  marginRight: 15,
                }}
                onPress={this.openFlatView}
              >
                <Image source={downArrow} style={styles.downArrowStyle} />
              </TouchableOpacity>
            </View>

            {this.state.flatViewOpen == true ? (
              <Modal
                style={styles.footerFlat}
                visible={this.state.flatViewOpen}
                transparent={true}
                animationType="fade"
                onRequestClose={() => this.setState({ flatViewOpen: false })}
              >
                <View
                  style={{
                    alignItems: "flex-end",
                    width: width,
                    marginTop: Metrics.labelMargin,
                  }}
                >
                  <View style={styles.contentFlat}>
                    <View style={styles.flatView}>
                      <View
                        style={{
                          flexDirection: "row",
                          width: width * 0.55,
                        }}
                      >
                        <Text style={styles.flatSmallText}>
                          {this.state.selectedName}
                        </Text>
                        <TouchableOpacity
                          style={{
                            justifyContent: "flex-end",
                            flex: 1,
                            flexDirection: "row",
                            marginRight: 15,
                          }}
                          onPress={this.openFlatView}
                        >
                          <Image source={downArrow} style={styles.downArrowStyle} />
                        </TouchableOpacity>
                      </View>
                      <FlatList
                        refreshing={true}
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.dataManage}
                        extraData={this.state}
                        numColumns={1}
                        renderItem={this.contactsList.bind(this)}
                        scrollEnabled={true}
                        showsVerticalScrollIndicator={false}
                      />
                    </View>
                  </View>
                </View>
              </Modal>
            ) : null}
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  }
  selectAllChek = () => {
    if (this.state.selectAll == false) {
      this.setState({ selectAll: true });
      this.setState({
        checked_first_name: true,
        checked_middle_name: true,
        checked_last_name: true,
        checked_nick_name: true,
        checked_phone_1: true,
        checked_phone_2: true,
        checked_email_1: true,
        checked_email_2: true,
        checked_address: true,
        checked_messagner_1: true,
        checked_messagner_2: true,
        checked_social_media_1: true,
        checked_social_media_2: true,
        checked_website_1: true,
        checked_website_2: true,
        checked_date: true,
        checked_note: true,
        checked_company: true,
        checked_job_title: true,
        checked_work_hours: true,
      });
    } else {
      this.setState({ selectAll: false });
      this.setState({
        checked_first_name: false,
        checked_middle_name: false,
        checked_last_name: false,
        checked_nick_name: false,
        checked_phone_1: false,
        checked_phone_2: false,
        checked_email_1: false,
        checked_email_2: false,
        checked_address: false,
        checked_messagner_1: false,
        checked_messagner_2: false,
        checked_social_media_1: false,
        checked_social_media_2: false,
        checked_website_1: false,
        checked_website_2: false,
        checked_date: false,
        checked_note: false,
        checked_company: false,
        checked_job_title: false,
        checked_work_hours: false,
      });
    }
  };
  renderSelectAll() {
    return (
      <View style={{ width: width }}>
        {this.state.status ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: Metrics.baseMargin,
            }}
          >
            <CheckBox
              value={this.state.selectAll}
              onValueChange={this.selectAllChek}
              tintColors={{ true: "#1374A3", false: "#1374A3" }}
            />
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: Font.regular,
                fontSize: width * 0.05,
                marginLeft: Metrics.smallMargin,
              }}
            >
              {" "}
              Select (De-select) All
            </Text>
          </View>
        ) : null}
      </View>
    );
  }
  forSelectNavigate = () => {
    if (this.state.status == false) {
      this.setState({ status: true });
    } else {
      this.setState({ status: false });
    }
    const {
          selectedName,
          first_name,
          last_name,
          middle_name,
          nick_name,
          phone_1,
          email_1,
          address,
          address2,
          messanger_1,
          social_media_1,
          social_media_2,
          website_1,
          date,
          note,
          company,
          job_title,
          work_hour,
          profile_image,
          profile_image2,
          profile_image3

    } = this.state;
    const { user_id } = this.props;
    if (this.state.status == true) {
      if (first_name == "") {
        alert("Please enter to save data");
      } else {
        manageLabelToFirebase(
          user_id,
          selectedName,
          profile_image,
          profile_image2,
          profile_image3,
          first_name,
          middle_name,
          last_name,
          nick_name,
          phone_1,
          email_1,
          address,
          address2,
          messanger_1,
          social_media_1,
          social_media_2,
          website_1,
          date,
          note,
          company,
          job_title,
          work_hour
        );
        this.props.navigation.navigate("forSelectContact");
        alert("Successfully save data");
      }
    } else {
      this.setState({ status: true });
    }
  };
  onManage = (item) => {
    this.setState({ selectedName: item });
    this.setState({ flatViewOpen: false });
  };
  contactsList({ item, index }) {
    return (
      <TouchableOpacity
        onPress={() => {
          this.onManage(item.relation);
        }}
      >
        <Text style={styles.flatSmallText}>{item.relation}</Text>
      </TouchableOpacity>
    );
  }
  openFlatView = () => {
    if (this.state.flatViewOpen == true) {
      this.setState({ flatViewOpen: false });
    } else {
      this.setState({ flatViewOpen: true });
    }
  };
  itemSelect = (item) =>{
   this.setState({ selectItem : item , workViewOpen: false })
  }
  renderItem({ item, index }) {
     return (
        <TouchableOpacity style={{marginTop:10,marginLeft:5}} onPress={() => {this.itemSelect(item)}}>
          <Text style={[styles.workText, { fontSize: width * 0.026 }]}>{item}</Text>
        </TouchableOpacity>
    )}
  render() {
    const { navigation } = this.props;
    const Param = navigation.getParam("otherParam");
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
          {this.renderHeader()}
          {this.renderDropDown()}

          <ScrollView>
            {this.renderMiddle()}
            {this.renderSelectAll()}
            {this.renderName()}
            {this.renderMobile()}
            {this.renderEmail()}
            {this.renderAddress()}
            {this.renderMessage()}
            {this.renderSocialmedia()}
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
            }}
          >
            <TouchableOpacity
              style={styles.saveView}
              onPress={this.forSelectNavigate}
            >
              <Text
                style={{
                  color: COLORS.main_text_color,
                  fontFamily: "Roboto-Bold",
                  fontSize: width * 0.035,
                }}
              >
                {this.state.status == true ? "Save" : "Edit"}
              </Text>
            </TouchableOpacity>
          </View>
        </Container>
      </ThemeProvider>
    );
  }
}
const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme, 
  user_id:state.login.shouldLoadData.user_id,
  username:state.login.shouldLoadData.username || state.reg.shouldLoadData.username,
});

export default connect(mapStateToProps)(ManageLable);

const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${(props) => props.theme.backColor};
`;
const ScrollView = styled.ScrollView`
  color: ${(props) => props.theme.textColor};
  flex: 1;
`;
const LineText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 17px;
  color: ${(props) => props.theme.textColor};
  margin-top: 25px;
  text-align: center;
`;
