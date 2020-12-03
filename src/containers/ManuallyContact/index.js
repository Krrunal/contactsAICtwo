import { ActionSheet, Root } from "native-base";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Keyboard,
  LayoutAnimation,
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { Component } from "react";
import { darkTheme, lightTheme } from "../theme/themeProps";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import { Colors } from "react-native-paper";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Icon from "react-native-vector-icons/Entypo";
import ImagePicker from "react-native-image-crop-picker";
import IntlPhoneInput from "react-native-intl-phone-input";
import Metrics from "../theme/Metrics";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { ThemeContext } from "react-navigation";
import Toast from "react-native-easy-toast";
import { addManualContact } from "../../services/FirebaseDatabase/manualContactToFirebase";
import { bindActionCreators } from "redux";
import calender from "../../assets/images/calender.png";
import call from "../../assets/images/call.png";
import { color } from "react-native-reanimated";
import { connect } from "react-redux";
import data from "../../../node_modules/react-native-intl-phone-input/src/Countries";
import email from "../../assets/images/email.png";
import firebase from "../../services/FirebaseDatabase/db";
import handshake from "../../assets/images/handshake.png";
import home from "../../assets/images/home.png";
import innerimg from "../../assets/images/innerimg.png";
import instagram from "../../assets/images/instagram.png";
import message from "../../assets/images/message.png";
import moment from "moment";
import note from "../../assets/images/note.png";
import rigthLogo from "../../assets/icons/contact.png";
import sideBar from "../../assets/images/sideBAR.png";
import { storage } from "react-native-firebase";
import styles from "./style.js";
import { switchTheme } from "../../action/themeAction";
import website from "../../assets/images/website.png";

var { width, height } = Dimensions.get("window");

var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
var BUTTONS = ["Take Photo", "Choose Photo From Gallery", "Cancel"];
class addmanuallyContact extends Component {
  static contextType = ThemeContext;

  constructor() {
    super();

    this.state = {
      counter: 0,
      isVisible: false,
      isVisibleArray: false,
      choosenDate: "",
      choosenDateArray: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      nick_name: "",
      number1: "",
      number2: "",
      number3: "",
      value: "",
      email: {
        email: "",
        label: "",
      },
      address: {
        address: "",
        label: "",
      },
      messanger: {
        messanger: "",
        label: "",
      },
      socialMedia: {
        socialMedia: "",
        label: "",
      },
      website: {
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
      company: {
        company: "",
        label: "",
        time: "",
      },
      jobTitle: {
        jobTitle: "",
        label: "",
      },
      workHours: {
        workHours: "",
        label: "",
      },

      messenger1: "",
      messenger2: "",
      social_media1: "",
      social_media2: "",

      website1: "",
      website2: "",
      dob: "",
      note1: "",
      company1: "",
      job_title: "",
      work_hour: "",
      image: null,
      images: null,
      image2: null,
      image3: null,
      profile_image: "",

      numberArray: [],
      emailArray: [],
      addressArray: [],
      messangerArray: [],
      socialMediaArray: [],
      websiteArray: [],
      dateArray: [],
      noteArray: [],
      companyArray: [],
      jobTitleArray: [],
      workHoursArray: [],

      disabledNumber: false,
      disabledEmail: false,
      disabledAddress: false,
      disabledMessanger: false,
      disabledSocialMedia: false,
      disableWebsite: false,
      disabledDate: false,
      disabledNote: false,
      disabledCompany: false,
      status: false,
      //inputText
      TextInputDisable: false,
      //mobile modal
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
      //date
      isDateModelOpen: false,
      dateLableList: [
        { label: " Sport gambling podcast" },
        { label: " Universal Studio" },
      ],
      dateLabel: "",
      isAddDateLabel: false,
      isDateArrayModelOpen: false,
      isDateModelOpen: false,
      isAddDateArrayLabel: false,
      //note
      isNoteModelOpen: false,
      noteLabelList: [{ label: "Note" }],
      noteLabel: "",
      isAddNoteLabel: false,
      isNoteArrayModelOpen: false,
      isNoteModelOpen: false,
      isAddNoteArrayLabel: false,
      //company

      isCompanyModelOpen: false,
      companyLableList: [{ label: "Job Ttile" }, { label: "Work Hours" }],
      companyLabel: "",
      isAddCompanyLabel: false,
      isCompanyArrayModelOpen: false,
      isCompanyModelOpen: false,
      isAddCompanyArrayLabel: false,

      //job Title
      isJobTitleModelOpen: false,
      jobTitleLableList: [{ label: "Job" }, { label: "Work" }],
      jobTitleLabel: "",
      isAddjobTitleLabel: false,
      isjobTitleArrayModelOpen: false,
      isJobTitleModelOpen: false,
      isAddJobTitleArrayLabel: false,

      //work Hours
      isWorkHourseModelOpen: false,
      workHoursLableList: [{ label: "Job" }, { label: "Work" }],
      workHoursLabel: "",
      isAddworkHoursLabel: false,
      isWorkHoursArrayModelOpen: false,
      isWorkHoursModelOpen: false,
      isAddWorkHoursArrayLabel: false,

      isVisibleWork: false,
      choosenWork: "",
      isVisibleWorkTo: false,
      choosenWorkTo: "",
      isVisibleWorkArray: false,
      choosenWorkArray: [],
      isVisibleWorkToArray: false,
      choosenWorkToArray: "",
      countryData: data,
      modalVisible: false,
      index: "",

      //address section
      addressModelKey: "",
      labelIndex: "",
      addressNameOnly: "",
      addressSection: false,
      addressIndexOnly: "",

      //email section
      emailSection: false,
      emailIndexOnly: "",
      emailNameOnly: "",
      emailCounter: 0,

      //mobile Section
      numberSection: false,
      numberIndexOnly: "",
      numberNameOnly: "",
      numberCounter: 0,
      //messanger Section
      messangerSection: false,
      messangerIndexOnly: "",
      messangerNameOnly: "",
      messangerCounter: 0,
      //social section
      socialSection: false,
      socialIndexOnly: "",
      socialNameOnly: "",
      socialCounter: 0,
      //Website section
      websiteSection: false,
      websiteIndexOnly: "",
      websiteNameOnly: "",
      websiteCounter: 0,
      //date section
      dateSection: false,
      dateIndexOnly: "",
      dateNameOnly: "",
      dateCounter: 0,
      //note section
      noteSection: false,
      noteIndexOnly: "",
      noteNameOnly: "",
      noteCounter: 0,
      //company section
      companySection: false,
      companyIndexOnly: "",
      companyNameOnly: "",
      companyCounter: 0,
    };
  }

  ShowHideTextComponentView = () => {
    if (this.state.status == false) {
      this.setState({ status: true });
    } else {
      this.setState({ status: false });
      console.log("email--->", this.state.email);
      console.log("array--->", this.state.emailArray);
    }
    const {
      profile_image,
      first_name,
      middle_name,
      last_name,
      nick_name,
      number1,
      number2,
      number3,
      numberArray,
      email,
      email2,
      emailArray,
      address,
      addressArray,
      messenger1,
      messenger2,
      messangerArray,
      social_media1,
      social_media2,
      socialMediaArray,
      website1,
      website2,
      websiteArray,
      dob,
      dateArray,
      note,
      noteArray,
      company,
      companyArray,
      job_title,
      work_hour,
    } = this.state;
    const { user_id, username } = this.props;
    if (this.state.status == true) {
      if (
        first_name !== "" ||
        middle_name !== "" ||
        last_name !== "" ||
        nick_name !== "" ||
        number1 !== "" ||
        number2 !== "" ||
        number3 !== "" ||
        email !== "" ||
        email2 !== "" ||
        address !== "" ||
        messenger1 !== "" ||
        messenger2 !== "" ||
        social_media1 !== "" ||
        social_media2 !== "" ||
        website1 !== "" ||
        website2 !== "" ||
        dob !== "" ||
        note !== "" ||
        company !== "" ||
        job_title !== "" ||
        work_hour !== ""
      ) {
        addManualContact(
          // user_id,
          username,
          profile_image,
          first_name,
          middle_name,
          last_name,
          nick_name,
          number1,
          number2,
          number3,
          numberArray,
          email,
          email2,
          emailArray,
          address,
          addressArray,
          messenger1,
          messenger2,
          messangerArray,
          social_media1,
          social_media2,
          socialMediaArray,
          website1,
          website2,
          websiteArray,
          dob,
          dateArray,
          note,
          noteArray,
          company,
          companyArray,
          job_title,
          work_hour
        );
        this.setState({
          status: false,
          image: "",
          image2: "",
          image3: "",

          first_name: "",
          middle_name: "",
          last_name: "",
          nick_name: "",
          number1: "",
          number2: "",
          number3: "",
          numberArray: [],
          email: "",
          email2: "",
          emailArray: [],
          address: "",
          addressArray: [],
          messenger1: "",
          messenger2: "",
          messangerArray: [],
          social_media1: "",
          social_media2: "",
          socialMediaArray: [],
          website1: "",
          website2: "",
          websiteArray: [],
          dob: "",
          dateArray: [],
          note: "",
          noteArray: [],
          company: "",
          companyArray: [],
          job_title: "",
          work_hour: "",
        });
        alert("Add contact successfully");
      } else {
        this.refs.toast.show("Please enter data to save contact");
      }
    } else {
      this.setState({ status: true });
    }
  };

  renderHeader() {
    return (
      <Header
        title="Add Contact Manually"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }
  // Add Contact Manually
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

  takePhtotFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
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

  fromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      const profile_image = image.path.substring(
        image.path.lastIndexOf("/") + 1
      );
      this.setState({ profile_image: profile_image });
      console.log("profile", this.state.profile_image);
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

  uploadImage = () => {
    const { image } = this.state;
    const profile_image = image.uri.substring(image.uri.lastIndexOf("/") + 1);
    const uploadUri =
      Platform.OS === "ios" ? image.uri.replace("file://", "") : image.uri;

    console.log("File name----->", profile_image);
    let upload = firebase.firestore().ref(profile_image).putFile(uploadUri);

    upload.on("state_changed", (snapshot) => {
      console.log("Snapshopt=====>", snapshot);
    });
  };

  takePhotoFromCamera2 = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image2) => {
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
          <Text style={styles.lableText}>Friend</Text>
          <View style={styles.middleView}>
            <View style={styles.firstMiddle}>
              <View style={styles.squareBorder}>
                {this.renderImage(this.state.image)}
              </View>

              <TouchableOpacity style={styles.first} onPress={this.selectPhoto}>
                <Text style={styles.firstText}>Select Photo</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.firstMiddle}>
              <View style={styles.squareBorder}>
                {this.renderImage2(this.state.image2)}
              </View>
              <TouchableOpacity
                style={styles.first}
                onPress={this.selectPhoto2}
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
                onPress={this.selectPhoto3}
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
      <View style={{ marginTop: Metrics.baseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={innerimg} style={styles.innerStyle} />
          </View>

          <View>
            <View style={styles.filedView}>
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

            <View style={styles.filedView}>
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

            <View style={styles.filedView}>
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

            <View style={styles.filedView}>
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

  addNumber = () => {
    if (this.state.number1 == "") {
      alert("Please Fill the Field");
    }
    if (this.state.number1 !== "") {
      if (this.state.numberCounter == 0) {
        this.setState({
          numberCounter: this.state.numberCounter + 1,
          numberSection: true,
          numberArray: [...this.state.numberArray, { number: "value" }],
        });
      }
    }
    if (this.state.numberSection == true) {
      if (this.state.numberIndexOnly == this.state.numberCounter - 1) {
        if (this.state.numberNameOnly !== "") {
          this.setState({
            numberCounter: this.state.numberCounter + 1,
            numberSection: true,
            numberArray: [...this.state.numberArray, { number: "value" }],
          });
        } else {
          alert("Please Fill the Field");
        }
      } else {
        alert("Please Fill the Field");
      }
    }
  };

  onChangeNumberArray = (value, index) => {
    if (value.isVerified == true) {
      this.setState({ numberIndexOnly: index });
      this.setState({ numberNameOnly: value });
      this.state.numberArray[index].number = value.unmaskedPhoneNumber;
      this.setState({ numberArray: this.state.numberArray });
    } else {
      this.setState({ numberIndexOnly: index });
      this.setState({ numberNameOnly: value });
      this.state.numberArray[index].number = value.unmaskedPhoneNumber;
      this.setState({ numberArray: this.state.numberArray });
    }
    console.log(value.isVerified);
  };
  removeItem = (key) => {
    const { numberArray } = this.state;
    numberArray.splice(key, 1);
    this.setState({
      deleteArray: numberArray,
    });
  };

  leftAction = (key) => {
    return (
      <TouchableOpacity onPress={this.removeItem}>
        <View style={styles.deleteBox}>
          <Text style={styles.deleteText}>Delete</Text>
        </View>
      </TouchableOpacity>
    );
  };
  onChangeNumber = ({
    dialCode,
    unmaskedPhoneNumber,
    phoneNumber,
    isVerified,
  }) => {
    if (isVerified == true) {
      this.setState({ number1: unmaskedPhoneNumber });
    } else {
      this.setState({ number1: unmaskedPhoneNumber });
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

  renderMobile() {
    return (
      <View style={{ marginTop: Metrics.doubleBaseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginTop: Metrics.xsmallMargin }}>
            <Image source={call} style={styles.innerStyle} />
          </View>
          <View>
            <View style={styles.filedView}>
              {this.state.status ? (
                <IntlPhoneInput
                  containerStyle={{
                    width: width * 0.55,
                    height: height * 0.056,
                    marginBottom: Metrics.smallMargin,
                  }}
                  phoneInputStyle={styles.mobileInputText}
                  dialCodeTextStyle={styles.dialcodeText}
                  dialCode={this.state.dialCode}
                  // placeholder='3265'
                  value={this.state.number1}
                  inputRef={(ref) => (this.phoneInput = ref)}
                  keyboardType={"numeric"}
                  onChangeText={this.onChangeNumber}
                  isShowLabelManually={false}
                />
              ) : (
                <Text
                  style={{
                    fontSize: width * 0.032,
                    fontFamily: Font.regular,
                    color: COLORS.main_text_color,
                    marginLeft: Metrics.baseMargin,
                  }}
                > +90  </Text>
              )}

              {this.state.status ? (
                <TouchableHighlight
                  underlayColor="transparent"
                  style={[styles.rightView]}
                  onPress={() => this.setState({ isMobileModelOpen: true })}
                >
                  <Icon
                    style={styles.iconSize}
                    size={width * 0.06}
                    name="chevron-small-down"
                  />
                </TouchableHighlight>
              ) : null}
              {this.state.status && this.state.mobileLabel !== "" ? (
                <View style={[styles.rightView]}>
                  <Text style={styles.righttext}>{this.state.mobileLabel}</Text>
                </View>
              ) : null}
            </View>

            {this.state.numberSection == true &&
              this.state.numberArray.map((input, key) => {
                return (
                  <Swipeable renderLeftActions={this.leftAction}>
                    <View style={styles.filedView} key={key}>
                      <IntlPhoneInput
                        containerStyle={{
                          width: width * 0.55,
                          height: height * 0.056,
                          marginBottom: Metrics.smallMargin,
                        }}
                        phoneInputStyle={styles.mobileInputText}
                        dialCodeTextStyle={styles.dialcodeText}
                        dialCode={this.state.dialCode}
                        inputRef={(ref) => (this.phoneInput = ref)}
                        keyboardType={"numeric"}
                        onChangeText={(number) =>
                          this.onChangeNumberArray(number, key)
                        }
                        isShowLabelManually={false}
                      />
                    </View>
                  </Swipeable>
                );
              })}

            <TouchableOpacity
              onPress={() => this.addNumber()}
              disable={this.state.disabledNumber}
            >
              {this.state.status ? (
                <NormalText> + Add Phone Number </NormalText>
              ) : null}
            </TouchableOpacity>

            <Modal
              style={styles.footerModal}
              visible={this.state.isMobileModelOpen}
              transparent={true}
              animationType="fade"
              onRequestClose={() => this.setState({ isMobileModelOpen: false })}
            >
              <View style={styles.contactContent}>
                <View style={styles.content}>
                  <Text style={styles.modalHeader}>Phone</Text>
                  <View style={{ flexDirection: "column" }}>
                    <FlatList
                      refreshing={true}
                      keyExtractor={(item, index) => index.toString()}
                      data={this.state.mobileLabelList}
                      extraData={this.state}
                      numColumns={1}
                      renderItem={this.renderMobileLabel.bind(this)}
                      style={styles.flatlist}
                      keyboardShouldPersistTaps={"always"}
                    />
                    <TouchableHighlight
                      underlayColor="transparent"
                      onPress={() =>
                        this.setState({
                          isAddMobileLabel: true,
                          mobileLabel: "",
                        })
                      }
                    >
                      <Text style={styles.labelName}> Custom </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
            <Modal
              style={styles.footerModal}
              visible={this.state.isAddMobileLabel}
              transparent={true}
              animationType="fade"
            >
              <View style={styles.contactContent}>
                <View style={styles.content}>
                  <Text style={styles.modalHeader}>Custom label name</Text>
                  <View style={{ flexDirection: "column" }}>
                    <TextInput
                      placeholder="Custom label name"
                      style={styles.addLabelField}
                      placeholderTextColor={COLORS.main_text_color}
                      editable={this.state.status ? true : false}
                      keyboardType={"default"}
                      value={this.state.mobileLabel}
                      onChangeText={(value) =>
                        this.setState({ mobileLabel: value })
                      }
                      ref={(input) => {
                        this.mobileLabel = input;
                      }}
                    />
                    <TouchableHighlight
                      underlayColor="transparent"
                      style={styles.saveView}
                      onPress={() =>
                        this.state.mobileLabel !== ""
                          ? this.setState({
                              isAddMobileLabel: false,
                              isMobileModelOpen: false,
                            })
                          : this.setState({ isAddMobileLabel: false })
                      }
                    >
                      <Text
                        style={{
                          color: COLORS.main_text_color,
                          fontFamily: Font.medium,
                          fontSize: width * 0.04,
                        }}
                      >
                        {" "}
                        Ok{" "}
                      </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
    );
  }

  addEmail = () => {
    if (this.state.email.email == "") {
      alert("Please Fill the Field");
    }
    if (this.state.email.email !== "") {
      if (this.state.emailCounter == 0) {
        this.setState({
          emailCounter: this.state.emailCounter + 1,
          emailSection: true,
          emailArray: [...this.state.emailArray, { email: "", label: "" }],
        });
      }
    }
    if (this.state.emailSection == true) {
      if (this.state.emailIndexOnly == this.state.emailCounter - 1) {
        if (this.state.emailNameOnly !== "") {
          this.setState({
            emailCounter: this.state.emailCounter + 1,
            emailSection: true,
            emailArray: [...this.state.emailArray, { email: "", label: "" }],
          });
        } else {
          alert("Please Fill the Field");
        }
      } else {
        alert("Please Fill the Field");
      }
    }
  };
  onChangeEmail = (value) => {
    this.state.email.email = value;
    this.setState({ email: this.state.email });
  };
  onChangeEmailArray = (value, index) => {
    this.setState({ emailIndexOnly: index });
    this.setState({ emailNameOnly: value });
    this.state.emailArray[index].email = value;
    this.setState({ emailArray: this.state.emailArray });
  };

  changeEmailLabelArray = (label, index) => {
    this.setState({ isEmailArrrayModelOpen: false });
    this.state.emailArray[index].label = label;
    this.setState({ emailArray: this.state.emailArray });
  };

  changeEmailLabel = (label) => {
    this.setState({ isEmailModelOpen: false });
    this.state.email.label = label;
    this.setState({ email: this.state.email });
  };
  removeEmail = (key) => {
    const { emailArray } = this.state;
    emailArray.splice(key, 1);
    this.setState({
      deleteEmailArray: emailArray,
    });
  };

  EmailleftAction = (key) => {
    return (
      <TouchableOpacity onPress={this.removeEmail}>
        <View style={styles.deleteBox}>
          <Text style={styles.deleteText}>Delete</Text>
        </View>
      </TouchableOpacity>
    );
  };
  renderEmail() {
    return (
      <View style={{ marginTop: Metrics.doubleBaseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={email} style={styles.innerStyle} />
          </View>

          <View>
            <View style={styles.filedView}>
              <TextInput
                placeholder="E-mail Address"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                editable={this.state.status ? true : false}
                onChangeText={(value) => this.onChangeEmail(value)}
              />
              {this.state.status ? (
                <TouchableHighlight
                  underlayColor="transparent"
                  style={styles.rightView}
                  onPress={() => this.setState({ isEmailModelOpen: true })}
                >
                  <Icon
                    style={styles.iconSize}
                    size={width * 0.06}
                    name="chevron-small-down"
                  />
                </TouchableHighlight>
              ) : null}

              {this.state.status && this.state.email.label !== "" ? (
                <View style={styles.rightView}>
                  <Text style={styles.righttext}>{this.state.email.label}</Text>
                </View>
              ) : null}
            </View>
            {this.state.emailSection == true &&
              this.state.emailArray.map((input, key) => {
                return (
                  <Swipeable renderLeftActions={this.EmailleftAction}>
                    <View style={styles.filedView} key={key}>
                      <TextInput
                        placeholder="E-mail Address"
                        style={styles.stylefiledText}
                        placeholderTextColor={COLORS.main_text_color}
                        // key={key}
                        keyboardType={"email-address"}
                        onChangeText={(email) => {
                          this.onChangeEmailArray(email, key);
                        }}
                      />
                      <TouchableHighlight
                        underlayColor="transparent"
                        style={styles.rightView}
                        // key={key}
                        onPress={() =>
                          this.setState({ isEmailArrrayModelOpen: true })
                        }
                      >
                        <Icon
                          style={styles.iconSize}
                          size={width * 0.06}
                          name="chevron-small-down"
                        />
                      </TouchableHighlight>

                      {this.state.emailArray[key].label !== "" ? (
                        <View style={styles.rightView}>
                          <Text style={styles.righttext}>
                            {this.state.emailArray[key].label}
                          </Text>
                        </View>
                      ) : null}
                      <Modal
                        style={styles.footerModal}
                        visible={this.state.isEmailArrrayModelOpen}
                        transparent={true}
                        animationType="fade"
                        // key={key}
                        onRequestClose={() =>
                          this.setState({ isEmailArrrayModelOpen: false })
                        }
                      >
                        <View style={styles.contactContent}>
                          <View style={styles.content}>
                            <Text style={styles.modalHeader}>Email</Text>
                            <View style={{ flexDirection: "column" }}>
                              {this.state.emailLabelList.map((item, index) => {
                                return (
                                  <TouchableHighlight
                                    underlayColor="transparent"
                                    onPress={() => {
                                      this.changeEmailLabelArray(
                                        item.label,
                                        key
                                      );
                                    }}
                                  >
                                    <Text style={styles.labelName}>
                                      {" "}
                                      {item.label}{" "}
                                    </Text>
                                  </TouchableHighlight>
                                );
                              })}
                              <TouchableHighlight
                                underlayColor="transparent"
                                onPress={() =>
                                  this.setState({
                                    isAddEmailArrayLabel: true,
                                    emailLabel: "",
                                  })
                                }
                              >
                                <Text style={styles.labelName}> Custom </Text>
                              </TouchableHighlight>
                            </View>
                          </View>
                        </View>
                      </Modal>
                      <Modal
                        style={styles.footerModal}
                        visible={this.state.isAddEmailArrayLabel}
                        transparent={true}
                        // key={key}
                        animationType="fade"
                      >
                        <View style={styles.contactContent}>
                          <View style={styles.content}>
                            <Text style={styles.modalHeader}>
                              Custom label name
                            </Text>
                            <View style={{ flexDirection: "column" }}>
                              <TextInput
                                placeholder="Custom label name"
                                style={styles.addLabelField}
                                placeholderTextColor={COLORS.main_text_color}
                                editable={this.state.status ? true : false}
                                keyboardType={"default"}
                                onChangeText={(label) => {
                                  this.changeEmailLabelArray(label, key);
                                }}
                              />
                              <TouchableHighlight
                                underlayColor="transparent"
                                style={styles.saveView}
                                onPress={() =>
                                  this.state.emailLabel !== ""
                                    ? this.setState({
                                        isAddEmailArrayLabel: false,
                                        isEmailArrrayModelOpen: false,
                                      })
                                    : this.setState({
                                        isAddEmailArrayLabel: false,
                                      })
                                }
                              >
                                <Text
                                  style={{
                                    color: COLORS.main_text_color,
                                    fontFamily: Font.medium,
                                    fontSize: width * 0.04,
                                  }}
                                >
                                  {" "}
                                  Ok{" "}
                                </Text>
                              </TouchableHighlight>
                            </View>
                          </View>
                        </View>
                      </Modal>
                    </View>
                  </Swipeable>
                );
              })}
            <TouchableOpacity
              onPress={() => this.addEmail()}
              disable={this.state.disabledEmail}
            >
              {this.state.status ? (
                <NormalText> + Add E-mail Address </NormalText>
              ) : null}
            </TouchableOpacity>
            <Modal
              style={styles.footerModal}
              visible={this.state.isEmailModelOpen}
              transparent={true}
              animationType="fade"
              onRequestClose={() => this.setState({ isEmailModelOpen: false })}
            >
              <View style={styles.contactContent}>
                <View style={styles.content}>
                  <Text style={styles.modalHeader}>Email</Text>
                  <View style={{ flexDirection: "column" }}>
                    {this.state.emailLabelList.map((item, index) => {
                      return (
                        <TouchableHighlight
                          underlayColor="transparent"
                          onPress={() => {
                            this.changeEmailLabel(item.label);
                          }}
                        >
                          <Text style={styles.labelName}> {item.label} </Text>
                        </TouchableHighlight>
                      );
                    })}
                    <TouchableHighlight
                      underlayColor="transparent"
                      onPress={() =>
                        this.setState({ isAddEmailLabel: true, emailLabel: "" })
                      }
                    >
                      <Text style={styles.labelName}> Custom </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
            <Modal
              style={styles.footerModal}
              visible={this.state.isAddEmailLabel}
              transparent={true}
              animationType="fade"
            >
              <View style={styles.contactContent}>
                <View style={styles.content}>
                  <Text style={styles.modalHeader}>Custom label name</Text>
                  <View style={{ flexDirection: "column" }}>
                    <TextInput
                      placeholder="Custom label name"
                      style={styles.addLabelField}
                      placeholderTextColor={COLORS.main_text_color}
                      editable={this.state.status ? true : false}
                      keyboardType={"default"}
                      // value={this.state.emailLabel}
                      onChangeText={(label) => {
                        this.changeEmailLabel(label);
                      }}
                    />
                    <TouchableHighlight
                      underlayColor="transparent"
                      style={styles.saveView}
                      onPress={() =>
                        this.state.emailLabel !== ""
                          ? this.setState({
                              isAddEmailLabel: false,
                              isEmailModelOpen: false,
                            })
                          : this.setState({ isAddEmailLabel: false })
                      }
                    >
                      <Text
                        style={{
                          color: COLORS.main_text_color,
                          fontFamily: Font.medium,
                          fontSize: width * 0.04,
                        }}
                      >
                        {" "}
                        Ok{" "}
                      </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
    );
  }

  addAddress = () => {
    if (this.state.address.address == "") {
      alert("Please Fill the Field");
    }
    if (this.state.address.address !== "") {
      if (this.state.counter == 0) {
        this.setState({
          counter: this.state.counter + 1,
          addressSection: true,
          addressArray: [
            ...this.state.addressArray,
            { address: "", label: "" },
          ],
        });
      }
    }
    if (this.state.addressSection == true) {
      if (this.state.addressIndexOnly == this.state.counter - 1) {
        if (this.state.addressNameOnly !== "") {
          this.setState({
            counter: this.state.counter + 1,
            addressSection: true,
            addressArray: [
              ...this.state.addressArray,
              { address: "", label: "" },
            ],
          });
        } else {
          alert("Please Fill the Field");
        }
      } else {
        alert("Please Fill the Field");
      }
    }
  };

  addressMessage = () => {
    if (this.state.addressNameOnly == "") {
      alert("Yes");
    }
  };

  onChangeAddress = (value) => {
    this.state.address.address = value;
    this.setState({ address: this.state.address });
  };

  onChangeAddressArray = (value, index) => {
    this.setState({ addressIndexOnly: index });
    this.setState({ addressNameOnly: value });
    this.state.addressArray[index].address = value;
    this.setState({ addressArray: this.state.addressArray });
  };

  changeAddressLabelArray = (label, index) => {
    this.setState({ isAddressArrayModelOpen: false });
    this.state.addressArray[index].label = label;
    this.setState({ AddressArray: this.state.addressArray });
  };

  changeAddressLabel = (label) => {
    this.setState({ isAddressModelOpen: false });
    this.state.address.label = label;
    this.setState({ Address: this.state.address });
  };

  removeAddress = (key) => {
    const { addressArray } = this.state;
    addressArray.splice(key, 1);
    this.setState({
      deleteAddressArray: addressArray,
    });
  };

  AddressLeftAction = (key) => {
    return (
      <TouchableOpacity
        onPress={this.removeAddress}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <View style={styles.deleteBox}>
          <Text style={styles.deleteText}>Delete</Text>
        </View>
      </TouchableOpacity>
    );
  };
  ModelOpen = (key) => {
    this.setState({ addressModelKey: key });
    this.setState({ isAddressArrayModelOpen: true });
  };
  renderAddress() {
    return (
      <View style={{ marginTop: Metrics.doubleBaseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={home} style={styles.innerStyle} />
          </View>

          <View>
            <View style={styles.addressFieldContainer}>
              <TextInput
                placeholder="Address"
                style={styles.addressField}
                placeholderTextColor={COLORS.main_text_color}
                multiline={true}
                numberOfLines={5}
                editable={this.state.status ? true : false}
                onChangeText={(value) => this.onChangeAddress(value)}
              />
              {this.state.status ? (
                <TouchableHighlight
                  underlayColor="transparent"
                  style={styles.addressRightView}
                  onPress={() => this.setState({ isAddressModelOpen: true })}
                >
                  <Icon
                    style={styles.iconSize}
                    size={width * 0.06}
                    name="chevron-small-down"
                  />
                </TouchableHighlight>
              ) : null}

              {this.state.status && this.state.address.label !== "" ? (
                <View style={styles.addressRightView}>
                  <Text style={styles.addressRighttext}>
                    {this.state.address.label}
                  </Text>
                </View>
              ) : null}
            </View>

            {
              this.state.addressSection == true &&
                this.state.addressArray.map((input, key) => {
                  return (
                    <Swipeable renderLeftActions={this.AddressLeftAction}>
                      <View style={styles.addressFieldContainer} key={key}>
                        <TextInput
                          placeholder="Address"
                          style={styles.addressField}
                          placeholderTextColor={COLORS.main_text_color}
                          multiline={true}
                          numberOfLines={5}
                          onChangeText={(address) => {
                            this.onChangeAddressArray(address, key);
                          }}
                        />
                        <TouchableHighlight
                          underlayColor="transparent"
                          style={styles.addressRightView}
                          // key={key}
                          onPress={() =>
                            this.setState({ isAddressArrayModelOpen: true })
                          }
                        >
                          <Icon
                            style={styles.iconSize}
                            size={width * 0.06}
                            name="chevron-small-down"
                          />
                        </TouchableHighlight>

                        {this.state.addressArray[key].label !== "" ? (
                          <View style={styles.addressRightView}>
                            <Text style={styles.addressRighttext}>
                              {this.state.addressArray[key].label}
                            </Text>
                          </View>
                        ) : null}
                        <Modal
                          style={styles.footerModal}
                          visible={this.state.isAddressArrayModelOpen}
                          transparent={true}
                          animationType="fade"
                          onRequestClose={() =>
                            this.setState({ isAddressArrayModelOpen: false })
                          }
                        >
                          <View style={styles.contactContent}>
                            <View style={styles.content}>
                              <Text style={styles.modalHeader}>Address</Text>
                              <View style={{ flexDirection: "column" }}>
                                {this.state.addressLabelList.map(
                                  (item, index) => {
                                    return (
                                      <TouchableHighlight
                                        underlayColor="transparent"
                                        onPress={() => {
                                          this.changeAddressLabelArray(
                                            item.label,
                                            key
                                          );
                                        }}
                                      >
                                        <Text style={styles.labelName}>
                                          {item.label}
                                        </Text>
                                      </TouchableHighlight>
                                    );
                                  }
                                )}
                                <TouchableHighlight
                                  underlayColor="transparent"
                                  onPress={() =>
                                    this.setState({
                                      isAddAddressArrayLabel: true,
                                      addressLabel: "",
                                    })
                                  }
                                >
                                  <Text style={styles.labelName}> Custom </Text>
                                </TouchableHighlight>
                              </View>
                            </View>
                          </View>
                        </Modal>
                        <Modal
                          style={styles.footerModal}
                          visible={this.state.isAddAddressArrayLabel}
                          transparent={true}
                          // key={key}
                          animationType="fade"
                        >
                          <View style={styles.contactContent}>
                            <View style={styles.content}>
                              <Text style={styles.modalHeader}>
                                Custom label name
                              </Text>
                              <View style={{ flexDirection: "column" }}>
                                <TextInput
                                  placeholder="Custom label name"
                                  style={styles.addLabelField}
                                  placeholderTextColor={COLORS.main_text_color}
                                  editable={this.state.status ? true : false}
                                  keyboardType={"default"}
                                  onChangeText={(label) => {
                                    this.changeAddressLabelArray(label, key);
                                  }}
                                />
                                <TouchableHighlight
                                  underlayColor="transparent"
                                  style={styles.saveView}
                                  onPress={() =>
                                    this.state.addressLabel !== ""
                                      ? this.setState({
                                          isAddAddressArrayLabel: false,
                                          isAddressArrayModelOpen: false,
                                        })
                                      : this.setState({
                                          isAddAddressArrayLabel: false,
                                        })
                                  }
                                >
                                  <Text
                                    style={{
                                      color: COLORS.main_text_color,
                                      fontFamily: Font.medium,
                                      fontSize: width * 0.04,
                                    }}
                                  >
                                    {" "}
                                    Ok{" "}
                                  </Text>
                                </TouchableHighlight>
                              </View>
                            </View>
                          </View>
                        </Modal>
                      </View>
                    </Swipeable>
                  );
                })
              // }
            }
            {/* section */}
            {/* {this.state.addressArray.map((index) => ( */}
            <TouchableOpacity
              // onPress={
              //   this.state.addressSection == false
              //     ? this.addAddress
              //     : this.addressMessage
              // }
              onPress={() => {
                this.addAddress();
              }}
              //disable={this.state.disabledAddress}
            >
              {this.state.status ? (
                <NormalText> + Add Address </NormalText>
              ) : null}
            </TouchableOpacity>
            {/* ))} */}

            <Modal
              style={styles.footerModal}
              visible={this.state.isAddressModelOpen}
              transparent={true}
              animationType="fade"
              onRequestClose={() =>
                this.setState({ isAddressModelOpen: false })
              }
            >
              <View style={styles.contactContent}>
                <View style={styles.content}>
                  <Text style={styles.modalHeader}>Address</Text>
                  <View style={{ flexDirection: "column" }}>
                    {this.state.addressLabelList.map((item, index) => {
                      return (
                        <TouchableHighlight
                          underlayColor="transparent"
                          onPress={() => {
                            this.changeAddressLabel(item.label);
                          }}
                        >
                          <Text style={styles.labelName}> {item.label} </Text>
                        </TouchableHighlight>
                      );
                    })}
                    <TouchableHighlight
                      underlayColor="transparent"
                      onPress={() =>
                        this.setState({
                          isAddAddressLabel: true,
                          addressLabel: "",
                        })
                      }
                    >
                      <Text style={styles.labelName}> Custom </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
            <Modal
              style={styles.footerModal}
              visible={this.state.isAddAddressLabel}
              transparent={true}
              animationType="fade"
            >
              <View style={styles.contactContent}>
                <View style={styles.content}>
                  <Text style={styles.modalHeader}>Custom label name</Text>
                  <View style={{ flexDirection: "column" }}>
                    <TextInput
                      placeholder="Custom label name"
                      style={styles.addLabelField}
                      placeholderTextColor={COLORS.main_text_color}
                      editable={this.state.status ? true : false}
                      keyboardType={"default"}
                      onChangeText={(label) => {
                        this.changeAddressLabel(label);
                      }}
                    />
                    <TouchableHighlight
                      underlayColor="transparent"
                      style={styles.saveView}
                      onPress={() =>
                        this.state.addressLabel !== ""
                          ? this.setState({
                              isAddAddressLabel: false,
                              isAddressModelOpen: false,
                            })
                          : this.setState({ isAddAddressLabel: false })
                      }
                    >
                      <Text
                        style={{
                          color: COLORS.main_text_color,
                          fontFamily: Font.medium,
                          fontSize: width * 0.04,
                        }}
                      >
                        {" "}
                        Ok{" "}
                      </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
    );
  }

  addMessanger = () => {
    if (this.state.messanger.messanger == "") {
      alert("Please Fill the Field");
    }
    if (this.state.messanger.messanger !== "") {
      if (this.state.messangerCounter == 0) {
        this.setState({
          messangerCounter: this.state.messangerCounter + 1,
          messangerSection: true,
          messangerArray: [
            ...this.state.messangerArray,
            { messenger: "", label: "" },
          ],
        });
      }
    }
    if (this.state.messangerSection == true) {
      if (this.state.messangerIndexOnly == this.state.messangerCounter - 1) {
        if (this.state.messangerNameOnly !== "") {
          this.setState({
            messangerCounter: this.state.messangerCounter + 1,
            messangerSection: true,
            messangerArray: [
              ...this.state.messangerArray,
              { messenger: "", label: "" },
            ],
          });
        } else {
          alert("Please Fill the Field");
        }
      } else {
        alert("Please Fill the Field");
      }
    }
  };

  onChangeMessenger = (value) => {
    this.state.messanger.messanger = value;
    this.setState({ messanger: this.state.messanger });
  };

  onChangeMessengerArray = (value, index) => {
    this.setState({ messangerIndexOnly: index });
    this.setState({ messangerNameOnly: value });
    this.state.messangerArray[index].messanger = value;
    this.setState({ messangerArray: this.state.messangerArray });
  };

  changeMessengerLabelArray = (label, index) => {
    this.setState({ isMessangerArrayModelOpen: false });
    this.state.messangerArray[index].label = label;
    this.setState({ messangerArray: this.state.messangerArray });
  };
  changeMessangerLabel = (label) => {
    this.setState({ isMessangerModelOpen: false });
    this.state.messanger.label = label;
    this.setState({ Messanger: this.state.messanger });
  };

  removeMessanger = (key) => {
    const { messangerArray } = this.state;
    messangerArray.splice(key, 1);
    this.setState({
      deleteMessangerArray: messangerArray,
    });
  };

  MessangerLeftAction = (key) => {
    return (
      <TouchableOpacity onPress={this.removeMessanger}>
        <View style={styles.deleteBox}>
          <Text style={styles.deleteText}>Delete</Text>
        </View>
      </TouchableOpacity>
    );
  };
  renderMessage() {
    return (
      <View style={{ marginTop: Metrics.doubleBaseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={message} style={styles.innerStyle} />
          </View>

          <View>
            <View style={styles.filedView}>
              <TextInput
                placeholder="Messenger Account"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                editable={this.state.status ? true : false}
                onChangeText={(value) => this.onChangeMessenger(value)}
              />
              {this.state.status ? (
                <TouchableHighlight
                  underlayColor="transparent"
                  style={styles.addressRightView}
                  onPress={() => this.setState({ isMessangerModelOpen: true })}
                >
                  <Icon
                    style={styles.iconSize}
                    size={width * 0.06}
                    name="chevron-small-down"
                  />
                </TouchableHighlight>
              ) : null}

              {this.state.status && this.state.messanger.label !== "" ? (
                <View style={styles.addressRightView}>
                  <Text style={styles.addressRighttext}>
                    {this.state.messanger.label}
                  </Text>
                </View>
              ) : null}
            </View>

            {this.state.messangerSection == true &&
              this.state.messangerArray.map((input, key) => {
                return (
                  <Swipeable renderLeftActions={this.MessangerLeftAction}>
                    <View style={styles.filedView} key={key}>
                      <TextInput
                        placeholder="Messenger Account"
                        style={styles.stylefiledText}
                        placeholderTextColor={COLORS.main_text_color}
                        key={key}
                        keyboardType={"default"}
                        onChangeText={(messenger) => {
                          this.onChangeMessengerArray(messenger, key);
                        }}
                      />
                      <TouchableHighlight
                        underlayColor="transparent"
                        style={styles.addressRightView}
                        onPress={() =>
                          this.setState({ isMessangerArrayModelOpen: true })
                        }
                      >
                        <Icon
                          style={styles.iconSize}
                          size={width * 0.06}
                          name="chevron-small-down"
                        />
                      </TouchableHighlight>
                      {this.state.messangerArray[key].label !== "" ? (
                        <View style={styles.addressRightView}>
                          <Text style={styles.addressRighttext}>
                            {this.state.messangerArray[key].label}
                          </Text>
                        </View>
                      ) : null}
                      <Modal
                        style={styles.footerModal}
                        visible={this.state.isMessangerArrayModelOpen}
                        transparent={true}
                        animationType="fade"
                        onRequestClose={() =>
                          this.setState({ isMessangerArrayModelOpen: false })
                        }
                      >
                        <View style={styles.contactContent}>
                          <View style={styles.content}>
                            <Text style={styles.modalHeader}>
                              Messanger Account
                            </Text>
                            <View style={{ flexDirection: "column" }}>
                              {this.state.mesangerLabelList.map(
                                (item, index) => {
                                  return (
                                    <TouchableHighlight
                                      underlayColor="transparent"
                                      onPress={() => {
                                        this.changeMessengerLabelArray(
                                          item.label,
                                          key
                                        );
                                      }}
                                    >
                                      <Text style={styles.labelName}>
                                        {" "}
                                        {item.label}{" "}
                                      </Text>
                                    </TouchableHighlight>
                                  );
                                }
                              )}
                              <TouchableHighlight
                                underlayColor="transparent"
                                onPress={() =>
                                  this.setState({
                                    isAddMessangerArrayLabel: true,
                                    messangerLabel: "",
                                  })
                                }
                              >
                                <Text style={styles.labelName}> Custom </Text>
                              </TouchableHighlight>
                            </View>
                          </View>
                        </View>
                      </Modal>
                      <Modal
                        style={styles.footerModal}
                        visible={this.state.isAddMessangerArrayLabel}
                        transparent={true}
                        animationType="fade"
                      >
                        <View style={styles.contactContent}>
                          <View style={styles.content}>
                            <Text style={styles.modalHeader}>
                              Custom label name
                            </Text>
                            <View style={{ flexDirection: "column" }}>
                              <TextInput
                                placeholder="Custom label name"
                                style={styles.addLabelField}
                                placeholderTextColor={COLORS.main_text_color}
                                editable={this.state.status ? true : false}
                                keyboardType={"default"}
                                onChangeText={(label) => {
                                  this.changeMessengerLabelArray(label, key);
                                }}
                              />
                              <TouchableHighlight
                                underlayColor="transparent"
                                style={styles.saveView}
                                onPress={() =>
                                  this.state.addressLabel !== ""
                                    ? this.setState({
                                        isAddMessangerArrayLabel: false,
                                        isMessangerArrayModelOpen: false,
                                      })
                                    : this.setState({
                                        isAddMessangerArrayLabel: false,
                                      })
                                }
                              >
                                <Text
                                  style={{
                                    color: COLORS.main_text_color,
                                    fontFamily: Font.medium,
                                    fontSize: width * 0.04,
                                  }}
                                >
                                  {" "}
                                  Ok{" "}
                                </Text>
                              </TouchableHighlight>
                            </View>
                          </View>
                        </View>
                      </Modal>
                    </View>
                  </Swipeable>
                );
              })}

            <TouchableOpacity
              onPress={() => this.addMessanger()}
              disable={this.state.disabledMessanger}
            >
              {this.state.status ? (
                <NormalText> + Add Messenger Account </NormalText>
              ) : null}
            </TouchableOpacity>
            <Modal
              style={styles.footerModal}
              visible={this.state.isMessangerModelOpen}
              transparent={true}
              animationType="fade"
              onRequestClose={() =>
                this.setState({ isMessangerModelOpen: false })
              }
            >
              <View style={styles.contactContent}>
                <View style={styles.content}>
                  <Text style={styles.modalHeader}>Messanger Account</Text>
                  <View style={{ flexDirection: "column" }}>
                    {this.state.mesangerLabelList.map((item, index) => {
                      return (
                        <TouchableHighlight
                          underlayColor="transparent"
                          onPress={() => {
                            this.changeMessangerLabel(item.label);
                          }}
                        >
                          <Text style={styles.labelName}> {item.label} </Text>
                        </TouchableHighlight>
                      );
                    })}
                    <TouchableHighlight
                      underlayColor="transparent"
                      onPress={() =>
                        this.setState({
                          isAddMessangerLabel: true,
                          messangerLabel: "",
                        })
                      }
                    >
                      <Text style={styles.labelName}> Custom </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
            <Modal
              style={styles.footerModal}
              visible={this.state.isAddMessangerLabel}
              transparent={true}
              animationType="fade"
            >
              <View style={styles.contactContent}>
                <View style={styles.content}>
                  <Text style={styles.modalHeader}>Custom label name</Text>
                  <View style={{ flexDirection: "column" }}>
                    <TextInput
                      placeholder="Custom label name"
                      style={styles.addLabelField}
                      placeholderTextColor={COLORS.main_text_color}
                      editable={this.state.status ? true : false}
                      keyboardType={"default"}
                      onChangeText={(label) => {
                        this.changeMessangerLabel(label);
                      }}
                    />
                    <TouchableHighlight
                      underlayColor="transparent"
                      style={styles.saveView}
                      onPress={() =>
                        this.state.messangerLabel !== ""
                          ? this.setState({
                              isAddMessangerLabel: false,
                              isMessangerModelOpen: false,
                            })
                          : this.setState({ isAddMessangerLabel: false })
                      }
                    >
                      <Text
                        style={{
                          color: COLORS.main_text_color,
                          fontFamily: Font.medium,
                          fontSize: width * 0.04,
                        }}
                      >
                        {" "}
                        Ok{" "}
                      </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
    );
  }

  addSocialMedia = () => {
    if (this.state.socialMedia.socialMedia == "") {
      alert("Please Fill the Field");
    }
    if (this.state.socialMedia.socialMedia !== "") {
      if (this.state.socialCounter == 0) {
        this.setState({
          socialCounter: this.state.socialCounter + 1,
          socialSection: true,
          socialMediaArray: [
            ...this.state.socialMediaArray,
            { socialMedia: "", label: "" },
          ],
        });
      }
    }
    if (this.state.socialSection == true) {
      if (this.state.socialIndexOnly == this.state.socialCounter - 1) {
        if (this.state.socialNameOnly !== "") {
          this.setState({
            socialCounter: this.state.socialCounter + 1,
            socialSection: true,
            socialMediaArray: [
              ...this.state.socialMediaArray,
              { socialMedia: "", label: "" },
            ],
          });
        } else {
          alert("Please Fill the Field");
        }
      } else {
        alert("Please Fill the Field");
      }
    }
  };

  onChangeSocialMedia = (value) => {
    this.state.socialMedia.socialMedia = value;
    this.setState({ socialMedia: this.state.socialMedia });
  };

  onChangeSocialMediaArray = (value, index) => {
    this.setState({ socialIndexOnly: index });
    this.setState({ socialNameOnly: value });
    this.state.socialMediaArray[index].socialMedia = value;
    this.setState({ socialMediaArray: this.state.socialMediaArray });
  };

  changeSocialMediaLabelArray = (label, index) => {
    this.setState({ isSocialMediaArrayModelOpen: false });
    this.state.socialMediaArray[index].label = label;
    this.setState({ SocialMediaArray: this.state.socialMediaArray });
  };

  changeSocialMediaLabel = (label) => {
    this.setState({ isSocialMediaModelOpen: false });
    this.state.socialMedia.label = label;
    this.setState({ SocialMedia: this.state.socialMedia });
  };
  removesocialMedia = (key) => {
    const { socialMediaArray } = this.state;
    socialMediaArray.splice(key, 1);
    this.setState({
      deleteSocialMediaArray: socialMediaArray,
    });
  };

  socialMedialeftAction = (key) => {
    return (
      <TouchableOpacity onPress={this.removesocialMedia}>
        <View style={styles.deleteBox}>
          <Text style={styles.deleteText}>Delete</Text>
        </View>
      </TouchableOpacity>
    );
  };
  renderSocialmedia() {
    return (
      <View style={{ marginTop: Metrics.doubleBaseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={instagram} style={styles.innerStyle} />
          </View>

          <View>
            <View style={styles.filedView}>
              <TextInput
                placeholder="Social Media Account"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                //value={this.state.social_media1}
                editable={this.state.status ? true : false}
                onChangeText={(value) => this.onChangeSocialMedia(value)}
              />
              {this.state.status ? (
                <TouchableHighlight
                  underlayColor="transparent"
                  style={styles.addressRightView}
                  onPress={() =>
                    this.setState({ isSocialMediaModelOpen: true })
                  }
                >
                  <Icon
                    style={styles.iconSize}
                    size={width * 0.06}
                    name="chevron-small-down"
                  />
                </TouchableHighlight>
              ) : null}

              {this.state.status && this.state.socialMedia.label !== "" ? (
                <View style={styles.addressRightView}>
                  <Text style={styles.addressRighttext}>
                    {this.state.socialMedia.label}
                  </Text>
                </View>
              ) : null}
            </View>

            {this.state.socialSection == true &&
              this.state.socialMediaArray.map((input, key) => {
                return (
                  <Swipeable renderLeftActions={this.socialMedialeftAction}>
                    <View style={styles.filedView} key={key}>
                      <TextInput
                        placeholder="Social Media Account"
                        style={styles.stylefiledText}
                        placeholderTextColor={COLORS.main_text_color}
                        key={key}
                        keyboardType={"default"}
                        onChangeText={(socialMedia) => {
                          this.onChangeSocialMediaArray(socialMedia, key);
                        }}
                      />
                      <TouchableHighlight
                        underlayColor="transparent"
                        style={styles.addressRightView}
                        // key={key}
                        onPress={() =>
                          this.setState({ isSocialMediaArrayModelOpen: true })
                        }
                      >
                        <Icon
                          style={styles.iconSize}
                          size={width * 0.06}
                          name="chevron-small-down"
                        />
                      </TouchableHighlight>
                      {this.state.socialMediaArray[key].label !== "" ? (
                        <View style={styles.addressRightView}>
                          <Text style={styles.addressRighttext}>
                            {this.state.socialMediaArray[key].label}
                          </Text>
                        </View>
                      ) : null}

                      <Modal
                        style={styles.footerModal}
                        visible={this.state.isSocialMediaArrayModelOpen}
                        transparent={true}
                        animationType="fade"
                        onRequestClose={() =>
                          this.setState({ isSocialMediaArrayModelOpen: false })
                        }
                      >
                        <View style={styles.contactContent}>
                          <View style={styles.content}>
                            <Text style={styles.modalHeader}>Social Media</Text>
                            <View style={{ flexDirection: "column" }}>
                              {this.state.socialMediaLabelList.map(
                                (item, index) => {
                                  return (
                                    <TouchableHighlight
                                      underlayColor="transparent"
                                      onPress={() => {
                                        this.changeSocialMediaLabelArray(
                                          item.label,
                                          key
                                        );
                                      }}
                                    >
                                      <Text style={styles.labelName}>
                                        {" "}
                                        {item.label}{" "}
                                      </Text>
                                    </TouchableHighlight>
                                  );
                                }
                              )}
                              <TouchableHighlight
                                underlayColor="transparent"
                                onPress={() =>
                                  this.setState({
                                    isAddSocialMediaArrayLabel: true,
                                    socialMedia: "",
                                  })
                                }
                              >
                                <Text style={styles.labelName}> Custom </Text>
                              </TouchableHighlight>
                            </View>
                          </View>
                        </View>
                      </Modal>
                      <Modal
                        style={styles.footerModal}
                        visible={this.state.isAddSocialMediaArrayLabel}
                        transparent={true}
                        // key={key}
                        animationType="fade"
                      >
                        <View style={styles.contactContent}>
                          <View style={styles.content}>
                            <Text style={styles.modalHeader}>
                              Custom label name
                            </Text>
                            <View style={{ flexDirection: "column" }}>
                              <TextInput
                                placeholder="Custom label name"
                                style={styles.addLabelField}
                                placeholderTextColor={COLORS.main_text_color}
                                editable={this.state.status ? true : false}
                                keyboardType={"default"}
                                onChangeText={(label) => {
                                  this.changeSocialMediaLabelArray(label, key);
                                }}
                              />
                              <TouchableHighlight
                                underlayColor="transparent"
                                style={styles.saveView}
                                onPress={() =>
                                  this.state.socialMediaLabel !== ""
                                    ? this.setState({
                                        isAddSocialMediaArrayLabel: false,
                                        isSocialMediaArrayModelOpen: false,
                                      })
                                    : this.setState({
                                        isAddSocialMediaArrayLabel: false,
                                      })
                                }
                              >
                                <Text
                                  style={{
                                    color: COLORS.main_text_color,
                                    fontFamily: Font.medium,
                                    fontSize: width * 0.04,
                                  }}
                                >
                                  {" "}
                                  Ok{" "}
                                </Text>
                              </TouchableHighlight>
                            </View>
                          </View>
                        </View>
                      </Modal>
                    </View>
                  </Swipeable>
                );
              })}

            <TouchableOpacity
              onPress={() => this.addSocialMedia()}
              disable={this.state.disabledSocialMedia}
            >
              {this.state.status ? (
                <NormalText> + Add Social Media Account </NormalText>
              ) : null}
            </TouchableOpacity>

            <Modal
              style={styles.footerModal}
              visible={this.state.isSocialMediaModelOpen}
              transparent={true}
              animationType="fade"
              onRequestClose={() =>
                this.setState({ isSocialMediaModelOpen: false })
              }
            >
              <View style={styles.contactContent}>
                <View style={styles.content}>
                  <Text style={styles.modalHeader}>Social Media</Text>
                  <View style={{ flexDirection: "column" }}>
                    {this.state.socialMediaLabelList.map((item, index) => {
                      return (
                        <TouchableHighlight
                          underlayColor="transparent"
                          onPress={() => {
                            this.changeSocialMediaLabel(item.label);
                          }}
                        >
                          <Text style={styles.labelName}> {item.label} </Text>
                        </TouchableHighlight>
                      );
                    })}
                    <TouchableHighlight
                      underlayColor="transparent"
                      onPress={() =>
                        this.setState({
                          isAddSocialMediaLabel: true,
                          socialMedia: "",
                        })
                      }
                    >
                      <Text style={styles.labelName}> Custom </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
            <Modal
              style={styles.footerModal}
              visible={this.state.isAddSocialMediaLabel}
              transparent={true}
              // key={key}
              animationType="fade"
            >
              <View style={styles.contactContent}>
                <View style={styles.content}>
                  <Text style={styles.modalHeader}>Custom label name</Text>
                  <View style={{ flexDirection: "column" }}>
                    <TextInput
                      placeholder="Custom label name"
                      style={styles.addLabelField}
                      placeholderTextColor={COLORS.main_text_color}
                      editable={this.state.status ? true : false}
                      keyboardType={"default"}
                      onChangeText={(label) => {
                        this.changeSocialMediaLabel(label);
                      }}
                    />
                    <TouchableHighlight
                      underlayColor="transparent"
                      style={styles.saveView}
                      onPress={() =>
                        this.state.socialMediaLabel !== ""
                          ? this.setState({
                              isAddSocialMediaLabel: false,
                              isSocialMediaModelOpen: false,
                            })
                          : this.setState({
                              isAddSocialMediaLabel: false,
                            })
                      }
                    >
                      <Text
                        style={{
                          color: COLORS.main_text_color,
                          fontFamily: Font.medium,
                          fontSize: width * 0.04,
                        }}
                      >
                        {" "}
                        Ok{" "}
                      </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
    );
  }

  addWebsite = () => {
    if (this.state.website.website == "") {
      alert("Please Fill the Field");
    }
    if (this.state.website.website !== "") {
      if (this.state.websiteCounter == 0) {
        this.setState({
          websiteCounter: this.state.websiteCounter + 1,
          websiteSection: true,
          websiteArray: [
            ...this.state.websiteArray,
            { website: "", label: "" },
          ],
        });
      }
    }
    if (this.state.websiteSection == true) {
      if (this.state.websiteIndexOnly == this.state.websiteCounter - 1) {
        if (this.state.websiteNameOnly !== "") {
          this.setState({
            websiteCounter: this.state.websiteCounter + 1,
            websiteSection: true,
            websiteArray: [
              ...this.state.websiteArray,
              { website: "", label: "" },
            ],
          });
        } else {
          alert("Please Fill the Field");
        }
      } else {
        alert("Please Fill the Field");
      }
    }
  };

  onChangeWebsite = (value, index) => {
    this.state.website.website = value;
    this.setState({ website: this.state.website });
  };

  onChangeWebsiteArray = (value, index) => {
    this.setState({ websiteIndexOnly: index });
    this.setState({ websiteNameOnly: value });
    this.state.websiteArray[index].website = value;
    this.setState({ websiteArray: this.state.websiteArray });
  };

  changeWebsiteLabelArray = (label, index) => {
    this.setState({ isWebsiteArrayModelOpen: false });
    this.state.websiteArray[index].label = label;
    this.setState({ WebsiteArray: this.state.websiteArray });
  };
  changeWebsiteLabel = (label) => {
    this.setState({ isWebsiteModelOpen: false });
    this.state.website.label = label;
    this.setState({ Website: this.state.website });
  };

  removeWebsite = (key) => {
    const { websiteArray } = this.state;
    websiteArray.splice(key, 1);
    this.setState({
      deleteWebsiteArray: websiteArray,
    });
  };

  WebsiteLeftAction = (key) => {
    return (
      <TouchableOpacity onPress={this.removeWebsite}>
        <View style={styles.deleteBox}>
          <Text style={styles.deleteText}>Delete</Text>
        </View>
      </TouchableOpacity>
    );
  };
  renderWebsite() {
    return (
      <View style={{ marginTop: Metrics.doubleBaseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={website} style={styles.innerStyle} />
          </View>

          <View>
            <View style={styles.filedView}>
              <TextInput
                placeholder="Website"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                //value={this.state.website1}
                editable={this.state.status ? true : false}
                onChangeText={(value) => this.onChangeWebsite(value)}
              />
              {this.state.status ? (
                <TouchableHighlight
                  underlayColor="transparent"
                  style={styles.addressRightView}
                  onPress={() => this.setState({ isWebsiteModelOpen: true })}
                >
                  <Icon
                    style={styles.iconSize}
                    size={width * 0.06}
                    name="chevron-small-down"
                  />
                </TouchableHighlight>
              ) : null}

              {this.state.status && this.state.website.label !== "" ? (
                <View style={styles.addressRightView}>
                  <Text style={styles.addressRighttext}>
                    {this.state.website.label}
                  </Text>
                </View>
              ) : null}
            </View>
            {this.state.websiteSection == true &&
              this.state.websiteArray.map((input, key) => {
                return (
                  <Swipeable renderLeftActions={this.WebsiteLeftAction}>
                    <View style={styles.filedView} key={key}>
                      <TextInput
                        placeholder="Website"
                        style={styles.stylefiledText}
                        placeholderTextColor={COLORS.main_text_color}
                        key={key}
                        keyboardType={"default"}
                        onChangeText={(website) => {
                          this.onChangeWebsiteArray(website, key);
                        }}
                      />
                      <TouchableHighlight
                        underlayColor="transparent"
                        style={styles.addressRightView}
                        onPress={() =>
                          this.setState({ isWebsiteArrayModelOpen: true })
                        }
                      >
                        <Icon
                          style={styles.iconSize}
                          size={width * 0.06}
                          name="chevron-small-down"
                        />
                      </TouchableHighlight>
                      {this.state.websiteArray[key].label !== "" ? (
                        <View style={styles.addressRightView}>
                          <Text style={styles.addressRighttext}>
                            {this.state.websiteArray[key].label}
                          </Text>
                        </View>
                      ) : null}
                      <Modal
                        style={styles.footerModal}
                        visible={this.state.isWebsiteArrayModelOpen}
                        transparent={true}
                        animationType="fade"
                        onRequestClose={() =>
                          this.setState({ isWebsiteArrayModelOpen: false })
                        }
                      >
                        <View style={styles.contactContent}>
                          <View style={styles.content}>
                            <Text style={styles.modalHeader}>Website</Text>
                            <View style={{ flexDirection: "column" }}>
                              {this.state.websiteLableList.map(
                                (item, index) => {
                                  return (
                                    <TouchableHighlight
                                      underlayColor="transparent"
                                      onPress={() => {
                                        this.changeWebsiteLabelArray(
                                          item.label,
                                          key
                                        );
                                      }}
                                    >
                                      <Text style={styles.labelName}>
                                        {" "}
                                        {item.label}{" "}
                                      </Text>
                                    </TouchableHighlight>
                                  );
                                }
                              )}
                              <TouchableHighlight
                                underlayColor="transparent"
                                onPress={() =>
                                  this.setState({
                                    isAddWebsiteArrayLabel: true,
                                    websiteLabel: "",
                                  })
                                }
                              >
                                <Text style={styles.labelName}> Custom </Text>
                              </TouchableHighlight>
                            </View>
                          </View>
                        </View>
                      </Modal>
                      <Modal
                        style={styles.footerModal}
                        visible={this.state.isAddWebsiteArrayLabel}
                        transparent={true}
                        animationType="fade"
                      >
                        <View style={styles.contactContent}>
                          <View style={styles.content}>
                            <Text style={styles.modalHeader}>
                              Custom label name
                            </Text>
                            <View style={{ flexDirection: "column" }}>
                              <TextInput
                                placeholder="Custom label name"
                                style={styles.addLabelField}
                                placeholderTextColor={COLORS.main_text_color}
                                editable={this.state.status ? true : false}
                                keyboardType={"default"}
                                onChangeText={(label) => {
                                  this.changeWebsiteLabelArray(label, key);
                                }}
                              />
                              <TouchableHighlight
                                underlayColor="transparent"
                                style={styles.saveView}
                                onPress={() =>
                                  this.state.addressLabel !== ""
                                    ? this.setState({
                                        isAddWebsiteArrayLabel: false,
                                        isWebsiteArrayModelOpen: false,
                                      })
                                    : this.setState({
                                        isAddWebsiteArrayLabel: false,
                                      })
                                }
                              >
                                <Text
                                  style={{
                                    color: COLORS.main_text_color,
                                    fontFamily: Font.medium,
                                    fontSize: width * 0.04,
                                  }}
                                >
                                  {" "}
                                  Ok{" "}
                                </Text>
                              </TouchableHighlight>
                            </View>
                          </View>
                        </View>
                      </Modal>
                    </View>
                  </Swipeable>
                );
              })}

            <TouchableOpacity
              onPress={() => this.addWebsite()}
              disable={this.state.disableWebsite}
            >
              {this.state.status ? (
                <NormalText> + Add Website </NormalText>
              ) : null}
            </TouchableOpacity>
            <Modal
              style={styles.footerModal}
              visible={this.state.isWebsiteModelOpen}
              transparent={true}
              animationType="fade"
              onRequestClose={() =>
                this.setState({ isWebsiteModelOpen: false })
              }
            >
              <View style={styles.contactContent}>
                <View style={styles.content}>
                  <Text style={styles.modalHeader}>Website</Text>
                  <View style={{ flexDirection: "column" }}>
                    {this.state.websiteLableList.map((item, index) => {
                      return (
                        <TouchableHighlight
                          underlayColor="transparent"
                          onPress={() => {
                            this.changeWebsiteLabel(item.label);
                          }}
                        >
                          <Text style={styles.labelName}> {item.label} </Text>
                        </TouchableHighlight>
                      );
                    })}
                    <TouchableHighlight
                      underlayColor="transparent"
                      onPress={() =>
                        this.setState({
                          isAddWebsiteLabel: true,
                          WebsiteLabel: "",
                        })
                      }
                    >
                      <Text style={styles.labelName}> Custom </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
            <Modal
              style={styles.footerModal}
              visible={this.state.isAddWebsiteLabel}
              transparent={true}
              animationType="fade"
            >
              <View style={styles.contactContent}>
                <View style={styles.content}>
                  <Text style={styles.modalHeader}>Custom label name</Text>
                  <View style={{ flexDirection: "column" }}>
                    <TextInput
                      placeholder="Custom label name"
                      style={styles.addLabelField}
                      placeholderTextColor={COLORS.main_text_color}
                      editable={this.state.status ? true : false}
                      keyboardType={"default"}
                      onChangeText={(label) => {
                        this.changeWebsiteLabel(label);
                      }}
                    />
                    <TouchableHighlight
                      underlayColor="transparent"
                      style={styles.saveView}
                      onPress={() =>
                        this.state.WebsiteLabel !== ""
                          ? this.setState({
                              isAddWebsiteLabel: false,
                              isWebsiteModelOpen: false,
                            })
                          : this.setState({ isAddWebsiteLabel: false })
                      }
                    >
                      <Text
                        style={{
                          color: COLORS.main_text_color,
                          fontFamily: Font.medium,
                          fontSize: width * 0.04,
                        }}
                      >
                        {" "}
                        Ok{" "}
                      </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
    );
  }

  addDate = () => {
    if (this.state.choosenDate == "") {
      alert("Please Fill the Field");
    }
    if (this.state.choosenDate !== "") {
      if (this.state.dateCounter == 0) {
        this.setState({
          dateCounter: this.state.dateCounter + 1,
          dateSection: true,
          dateArray: [...this.state.dateArray, { date: "", label: "" }],
        });
      }
    }
    if (this.state.dateSection == true) {
      if (this.state.dateIndexOnly == this.state.dateCounter - 1) {
        if (this.state.dateNameOnly !== "") {
          this.setState({
            dateCounter: this.state.dateCounter + 1,
            dateSection: true,
            dateArray: [...this.state.dateArray, { date: "", label: "" }],
          });
        } else {
          alert("Please Fill the Field");
        }
      } else {
        alert("Please Fill the Field");
      }
    }
  };

  onChangeDate = (date) => {
    console.log("A date has been picked: ", date);
    // var fomate = moment(date).format("MMMM, Do YYYY")
    // this.state.date.date = moment(date).format("MMMM, Do YYYY");

    this.setState({
      isVisible: false,
      choosenDate: moment(date).format("MMMM, Do YYYY"),
    });
    // this.state.date.date = value;
    // this.setState({ date: this.state.date });
  };

  onChangeDateArray = (formateDate, index) => {
    console.log("Log-------->", this.state.dateArray);
    var datemoment = moment(formateDate).format("MMMM, Do YYYY");
    this.setState({ dateIndexOnly: index });
    this.setState({ dateNameOnly: formateDate });
    this.state.dateArray[index].date = datemoment;
    this.setState({
      isVisibleArray: false,
      dateArray: this.state.dateArray,
    });
    console.log("after-------->", this.state.dateArray);
  };

  changeDateLabelArray = (label, index) => {
    this.setState({ isDateArrayModelOpen: false });
    this.state.dateArray[index].label = label;
    this.setState({ dateArray: this.state.dateArray });
  };

  changeDateLabel = (label) => {
    this.setState({ isDateModelOpen: false });
    this.state.date.label = label;
    this.setState({ date: this.state.date });
  };
  handlePicker = (date) => {
    this.setState({ isVisible: false });
    console.log("A date has been picked: ", date);
  };
  hidePicker = () => {
    this.setState({ isVisible: false });
  };
  showDateTimePicker = () => {
    {
      this.state.status ? this.setState({ isVisible: true }) : null;
    }
  };
  showDateTimePickerArray = () => {
    {
      this.state.status ? this.setState({ isVisibleArray: true }) : null;
    }
  };
  removeDate = (key) => {
    const { dateArray } = this.state;
    dateArray.splice(key, 1);
    this.setState({
      deleteDateArray: dateArray,
    });
  };

  dateLeftAction = (key) => {
    return (
      <TouchableOpacity onPress={this.removeDate}>
        <View style={styles.deleteBox}>
          <Text style={styles.deleteText}>Delete</Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderDate() {
    return (
      <View style={{ marginTop: Metrics.doubleBaseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={calender} style={styles.innerStyle} />
          </View>

          <View>
            <TouchableOpacity
              style={[styles.filedView, { alignItems: "center" }]}
              onPress={this.showDateTimePicker}
            >
              {this.state.isVisible == false && this.state.choosenDate == "" ? (
                <Text style={styles.dateText}>Date</Text>
              ) : null}

              <Text style={styles.dateText}>{this.state.choosenDate}</Text>

              <DateTimePickerModal
                isVisible={this.state.isVisible}
                onConfirm={this.onChangeDate}
                onCancel={this.hidePicker}
              />
              {/* <TextInput
                placeholder="Date"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                value={this.state.dob}
                editable={this.state.status ? true : false}
                onChangeText={(value) => this.onChangeDate(value)}
              /> */}
              {this.state.status ? (
                <TouchableHighlight
                  underlayColor="transparent"
                  style={[
                    styles.addressRightView,
                    { marginTop: Metrics.smallMargin },
                  ]}
                  onPress={() => this.setState({ isDateModelOpen: true })}
                >
                  <Icon
                    style={styles.iconSize}
                    size={width * 0.06}
                    name="chevron-small-down"
                  />
                </TouchableHighlight>
              ) : null}

              {this.state.status && this.state.date.label !== "" ? (
                <View style={styles.addressRightView}>
                  <Text style={styles.addressRighttext}>
                    {this.state.date.label}
                  </Text>
                </View>
              ) : null}
            </TouchableOpacity>

            {this.state.dateSection == true &&
              this.state.dateArray.map((input, key) => {
                return (
                  <Swipeable renderLeftActions={this.dateLeftAction}>
                    <View style={styles.filedView} key={key}>
                      <TouchableOpacity
                        onPress={this.showDateTimePickerArray}
                        style={{
                          justifyContent: "center",
                          width: width * 0.45,
                        }}
                      >
                        {this.state.isVisibleArray == false &&
                        this.state.dateArray[key].date == "" ? (
                          <View
                            style={{
                              justifyContent: "center",
                              height: height * 0.045,
                              marginTop: Metrics.doubleBaseMargin,
                              //borderWidth:2
                            }}
                          >
                            <Text style={styles.dateText}>Date</Text>
                          </View>
                        ) : null}

                        <Text style={styles.dateText}>
                          {this.state.dateArray[key].date}
                        </Text>
                      </TouchableOpacity>
                      <DateTimePickerModal
                        isVisible={this.state.isVisibleArray}
                        onConfirm={(date) => this.onChangeDateArray(date, key)}
                        onCancel={this.hidePicker}
                        //   key={key}
                      />

                      <TouchableHighlight
                        underlayColor="transparent"
                        style={styles.addressRightView}
                        // key={key}
                        onPress={() =>
                          this.setState({ isDateArrayModelOpen: true })
                        }
                      >
                        <Icon
                          style={styles.iconSize}
                          size={width * 0.06}
                          name="chevron-small-down"
                        />
                      </TouchableHighlight>

                      {this.state.dateArray[key].label !== "" ? (
                        <View style={styles.addressRightView}>
                          <Text style={styles.addressRighttext}>
                            {this.state.dateArray[key].label}
                          </Text>
                        </View>
                      ) : null}
                      <Modal
                        style={styles.footerModal}
                        visible={this.state.isDateArrayModelOpen}
                        transparent={true}
                        animationType="fade"
                        onRequestClose={() =>
                          this.setState({ isDateArrayModelOpen: false })
                        }
                      >
                        <View style={styles.contactContent}>
                          <View style={styles.content}>
                            <Text style={styles.modalHeader}>Date</Text>
                            <View style={{ flexDirection: "column" }}>
                              {this.state.dateLableList.map((item, index) => {
                                return (
                                  <TouchableHighlight
                                    underlayColor="transparent"
                                    onPress={() => {
                                      this.changeDateLabelArray(
                                        item.label,
                                        key
                                      );
                                    }}
                                  >
                                    <Text style={styles.labelName}>
                                      {" "}
                                      {item.label}{" "}
                                    </Text>
                                  </TouchableHighlight>
                                );
                              })}
                              <TouchableHighlight
                                underlayColor="transparent"
                                onPress={() =>
                                  this.setState({
                                    isAddDateArrayLabel: true,
                                    dateLabel: "",
                                  })
                                }
                              >
                                <Text style={styles.labelName}> Custom </Text>
                              </TouchableHighlight>
                            </View>
                          </View>
                        </View>
                      </Modal>
                      <Modal
                        style={styles.footerModal}
                        visible={this.state.isAddDateArrayLabel}
                        transparent={true}
                        // key={key}
                        animationType="fade"
                      >
                        <View style={styles.contactContent}>
                          <View style={styles.content}>
                            <Text style={styles.modalHeader}>
                              Custom label name
                            </Text>
                            <View style={{ flexDirection: "column" }}>
                              <TextInput
                                placeholder="Custom label name"
                                style={styles.addLabelField}
                                placeholderTextColor={COLORS.main_text_color}
                                editable={this.state.status ? true : false}
                                keyboardType={"default"}
                                onChangeText={(label) => {
                                  this.changeDateLabelArray(label, key);
                                }}
                              />
                              <TouchableHighlight
                                underlayColor="transparent"
                                style={styles.saveView}
                                onPress={() =>
                                  this.state.addressLabel !== ""
                                    ? this.setState({
                                        isAddDateArrayLabel: false,
                                        isDateArrayModelOpen: false,
                                      })
                                    : this.setState({
                                        isAddDateArrayLabel: false,
                                      })
                                }
                              >
                                <Text
                                  style={{
                                    color: COLORS.main_text_color,
                                    fontFamily: Font.medium,
                                    fontSize: width * 0.04,
                                  }}
                                >
                                  {" "}
                                  Ok{" "}
                                </Text>
                              </TouchableHighlight>
                            </View>
                          </View>
                        </View>
                      </Modal>
                    </View>
                  </Swipeable>
                );
              })}

            <TouchableOpacity
              onPress={() => this.addDate()}
              disable={this.state.disabledDate}
            >
              {this.state.status ? <NormalText> + Add Date </NormalText> : null}
            </TouchableOpacity>
            <Modal
              style={styles.footerModal}
              visible={this.state.isDateModelOpen}
              transparent={true}
              animationType="fade"
              onRequestClose={() => this.setState({ isDateModelOpen: false })}
            >
              <View style={styles.contactContent}>
                <View style={styles.content}>
                  <Text style={styles.modalHeader}>Date</Text>
                  <View style={{ flexDirection: "column" }}>
                    {this.state.dateLableList.map((item, index) => {
                      return (
                        <TouchableHighlight
                          underlayColor="transparent"
                          onPress={() => {
                            this.changeDateLabel(item.label);
                          }}
                        >
                          <Text style={styles.labelName}> {item.label} </Text>
                        </TouchableHighlight>
                      );
                    })}
                    <TouchableHighlight
                      underlayColor="transparent"
                      onPress={() =>
                        this.setState({ isAddDateLabel: true, dateLabel: "" })
                      }
                    >
                      <Text style={styles.labelName}> Custom </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
            <Modal
              style={styles.footerModal}
              visible={this.state.isAddDateLabel}
              transparent={true}
              animationType="fade"
            >
              <View style={styles.contactContent}>
                <View style={styles.content}>
                  <Text style={styles.modalHeader}>Custom label name</Text>
                  <View style={{ flexDirection: "column" }}>
                    <TextInput
                      placeholder="Custom label name"
                      style={styles.addLabelField}
                      placeholderTextColor={COLORS.main_text_color}
                      editable={this.state.status ? true : false}
                      keyboardType={"default"}
                      // value={this.state.emailLabel}
                      onChangeText={(label) => {
                        this.changeDateLabel(label);
                      }}
                    />
                    <TouchableHighlight
                      underlayColor="transparent"
                      style={styles.saveView}
                      onPress={() =>
                        this.state.dateLabel !== ""
                          ? this.setState({
                              isAddDateLabel: false,
                              isDateModelOpen: false,
                            })
                          : this.setState({ isAddDateLabel: false })
                      }
                    >
                      <Text
                        style={{
                          color: COLORS.main_text_color,
                          fontFamily: Font.medium,
                          fontSize: width * 0.04,
                        }}
                      >
                        {" "}
                        Ok{" "}
                      </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
    );
  }

  addNote = () => {
    if (this.state.note.note == "") {
      alert("Please Fill the Field");
    }
    if (this.state.note.note !== "") {
      if (this.state.noteCounter == 0) {
        this.setState({
          noteCounter: this.state.noteCounter + 1,
          noteSection: true,
          noteArray: [...this.state.noteArray, { note: "", label: "" }],
        });
      }
    }
    if (this.state.noteSection == true) {
      if (this.state.noteIndexOnly == this.state.noteCounter - 1) {
        if (this.state.noteNameOnly !== "") {
          this.setState({
            noteCounter: this.state.noteCounter + 1,
            noteSection: true,
            noteArray: [...this.state.noteArray, { note: "", label: "" }],
          });
        } else {
          alert("Please Fill the Field");
        }
      } else {
        alert("Please Fill the Field");
      }
    }
    // this.setState({
    //   noteArray: [...this.state.noteArray, { note: "", label: "" }],
    // });
  };

  onChangeNote = (value) => {
    this.state.note.note = value;
    this.setState({ note: this.state.note });
  };

  onChangeNoteArray = (value, index) => {
    this.setState({ noteIndexOnly: index });
    this.setState({ noteNameOnly: value });
    this.state.noteArray[index].note = value;
    this.setState({ noteArray: this.state.noteArray });
  };

  changeNoteLabelArray = (label, index) => {
    this.setState({ isNoteArrayModelOpen: false });
    this.state.noteArray[index].label = label;
    this.setState({ NoteArray: this.state.noteArray });
  };

  changeNoteLabel = (label) => {
    this.setState({ isNoteModelOpen: false });
    this.state.note.label = label;
    this.setState({ Note: this.state.note });
  };

  removeNote = (key) => {
    const { noteArray } = this.state;
    noteArray.splice(key, 1);
    this.setState({
      deleteNoteArray: noteArray,
    });
  };

  noteLeftAction = (key) => {
    return (
      <TouchableOpacity
        onPress={this.removeNote}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <View style={styles.deleteBox}>
          <Text style={styles.deleteText}>Delete</Text>
        </View>
      </TouchableOpacity>
    );
  };
  renderNote() {
    return (
      <View style={{ marginTop: Metrics.doubleBaseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={note} style={styles.innerStyle} />
          </View>

          <View>
            <View style={styles.addressFieldContainer}>
              <TextInput
                placeholder="Note"
                style={styles.addressField}
                placeholderTextColor={COLORS.main_text_color}
                multiline={true}
                numberOfLines={5}
                //value={this.state.note1}
                editable={this.state.status ? true : false}
                onChangeText={(value) => this.onChangeNote(value)}
              />
              {this.state.status ? (
                <TouchableHighlight
                  underlayColor="transparent"
                  style={styles.addressRightView}
                  onPress={() => this.setState({ isNoteModelOpen: true })}
                >
                  <Icon
                    style={styles.iconSize}
                    size={width * 0.06}
                    name="chevron-small-down"
                  />
                </TouchableHighlight>
              ) : null}

              {this.state.status && this.state.note.label !== "" ? (
                <View style={styles.addressRightView}>
                  <Text style={styles.addressRighttext}>
                    {this.state.note.label}
                  </Text>
                </View>
              ) : null}
            </View>

            {this.state.noteSection == true &&
              this.state.noteArray.map((input, key) => {
                return (
                  <Swipeable renderLeftActions={this.noteLeftAction}>
                    <View style={styles.addressFieldContainer} key={key}>
                      <TextInput
                        placeholder="Note"
                        style={styles.addressField}
                        placeholderTextColor={COLORS.main_text_color}
                        multiline={true}
                        numberOfLines={5}
                        key={key}
                        keyboardType={"default"}
                        onChangeText={(note) => {
                          this.onChangeNoteArray(note, key);
                        }}
                      />
                      <TouchableHighlight
                        underlayColor="transparent"
                        style={styles.rightView}
                        // key={key}
                        onPress={() =>
                          this.setState({ isNoteArrayModelOpen: true })
                        }
                      >
                        <Icon
                          style={styles.iconSize}
                          size={width * 0.06}
                          name="chevron-small-down"
                        />
                      </TouchableHighlight>
                      {this.state.noteArray[key].label !== "" ? (
                        <View style={styles.rightView}>
                          <Text style={styles.righttext}>
                            {this.state.noteArray[key].label}
                          </Text>
                        </View>
                      ) : null}

                      <Modal
                        style={styles.footerModal}
                        visible={this.state.isNoteArrayModelOpen}
                        transparent={true}
                        animationType="fade"
                        // key={key}
                        onRequestClose={() =>
                          this.setState({ isNoteArrayModelOpen: false })
                        }
                      >
                        <View style={styles.contactContent}>
                          <View style={styles.content}>
                            <Text style={styles.modalHeader}>Note</Text>
                            <View style={{ flexDirection: "column" }}>
                              {this.state.noteLabelList.map((item, index) => {
                                return (
                                  <TouchableHighlight
                                    underlayColor="transparent"
                                    onPress={() => {
                                      this.changeNoteLabelArray(
                                        item.label,
                                        key
                                      );
                                    }}
                                  >
                                    <Text style={styles.labelName}>
                                      {" "}
                                      {item.label}{" "}
                                    </Text>
                                  </TouchableHighlight>
                                );
                              })}
                              <TouchableHighlight
                                underlayColor="transparent"
                                onPress={() =>
                                  this.setState({
                                    isAddNoteArrayLabel: true,
                                    noteLabel: "",
                                  })
                                }
                              >
                                <Text style={styles.labelName}> Custom </Text>
                              </TouchableHighlight>
                            </View>
                          </View>
                        </View>
                      </Modal>

                      <Modal
                        style={styles.footerModal}
                        visible={this.state.isAddNoteArrayLabel}
                        transparent={true}
                        // key={key}
                        animationType="fade"
                      >
                        <View style={styles.contactContent}>
                          <View style={styles.content}>
                            <Text style={styles.modalHeader}>
                              Custom label name
                            </Text>
                            <View style={{ flexDirection: "column" }}>
                              <TextInput
                                placeholder="Custom label name"
                                style={styles.addLabelField}
                                placeholderTextColor={COLORS.main_text_color}
                                editable={this.state.status ? true : false}
                                keyboardType={"default"}
                                onChangeText={(label) => {
                                  this.changeNoteLabelArray(label, key);
                                }}
                              />
                              <TouchableHighlight
                                underlayColor="transparent"
                                style={styles.saveView}
                                onPress={() =>
                                  this.state.noteLabel !== ""
                                    ? this.setState({
                                        isAddNoteArrayLabel: false,
                                        isNoteArrayModelOpen: false,
                                      })
                                    : this.setState({
                                        isAddNoteArrayLabel: false,
                                      })
                                }
                              >
                                <Text
                                  style={{
                                    color: COLORS.main_text_color,
                                    fontFamily: Font.medium,
                                    fontSize: width * 0.04,
                                  }}
                                >
                                  {" "}
                                  Ok{" "}
                                </Text>
                              </TouchableHighlight>
                            </View>
                          </View>
                        </View>
                      </Modal>
                    </View>
                  </Swipeable>
                );
              })}

            <TouchableOpacity
              onPress={() => this.addNote()}
              disable={this.state.disabledNote}
            >
              {this.state.status ? <NormalText> + Add Note </NormalText> : null}
            </TouchableOpacity>
            <Modal
              style={styles.footerModal}
              visible={this.state.isNoteModelOpen}
              transparent={true}
              animationType="fade"
              onRequestClose={() => this.setState({ isNoteModelOpen: false })}
            >
              <View style={styles.contactContent}>
                <View style={styles.content}>
                  <Text style={styles.modalHeader}>Note</Text>
                  <View style={{ flexDirection: "column" }}>
                    {this.state.noteLabelList.map((item, index) => {
                      return (
                        <TouchableHighlight
                          underlayColor="transparent"
                          onPress={() => {
                            this.changeNoteLabel(item.label);
                          }}
                        >
                          <Text style={styles.labelName}> {item.label} </Text>
                        </TouchableHighlight>
                      );
                    })}
                    <TouchableHighlight
                      underlayColor="transparent"
                      onPress={() =>
                        this.setState({ isAddNoteLabel: true, noteLabel: "" })
                      }
                    >
                      <Text style={styles.labelName}> Custom </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
            <Modal
              style={styles.footerModal}
              visible={this.state.isAddNoteLabel}
              transparent={true}
              animationType="fade"
            >
              <View style={styles.contactContent}>
                <View style={styles.content}>
                  <Text style={styles.modalHeader}>Custom label name</Text>
                  <View style={{ flexDirection: "column" }}>
                    <TextInput
                      placeholder="Custom label name"
                      style={styles.addLabelField}
                      placeholderTextColor={COLORS.main_text_color}
                      editable={this.state.status ? true : false}
                      keyboardType={"default"}
                      // value={this.state.emailLabel}
                      onChangeText={(label) => {
                        this.changeNoteLabel(label);
                      }}
                    />
                    <TouchableHighlight
                      underlayColor="transparent"
                      style={styles.saveView}
                      onPress={() =>
                        this.state.noteLabel !== ""
                          ? this.setState({
                              isAddNoteLabel: false,
                              isNoteModelOpen: false,
                            })
                          : this.setState({ isAddNoteLabel: false })
                      }
                    >
                      <Text
                        style={{
                          color: COLORS.main_text_color,
                          fontFamily: Font.medium,
                          fontSize: width * 0.04,
                        }}
                      >
                        Ok
                      </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
    );
  }

  addCompany = () => {
    if (this.state.company.company == "") {
      alert("Please Fill the Field");
    }
    if (this.state.company.company !== "") {
      if (this.state.companyCounter == 0) {
        this.setState({
          companyCounter: this.state.companyCounter + 1,
          companySection: true,
          companyArray: [
            ...this.state.companyArray,
            { company: "", label: "", time: "", timeto: "" },
          ],
        });
      }
    }
    if (this.state.companySection == true) {
      if (this.state.companyIndexOnly == this.state.companyCounter - 1) {
        if (this.state.companyNameOnly !== "") {
          this.setState({
            companyCounter: this.state.companyCounter + 1,
            companySection: true,
            companyArray: [
              ...this.state.companyArray,
              { company: "", label: "", time: "", timeto: "" },
            ],
          });
        } else {
          alert("Please Fill the Field");
        }
      } else {
        alert("Please Fill the Field");
      }
    }
    // this.setState({

    //   companyArray: [
    //     ...this.state.companyArray,
    //     { company: "", label: "", time: "", timeto: "" },
    //   ],
    // });
  };

  onChangeCompany = (value) => {
    console.log("Comapny-------->", value);
    this.state.company.company = value;
    this.setState({ company: this.state.company });
  };

  onChangeCompanyArray = (value, index) => {
    this.setState({ companyIndexOnly: index });
    this.setState({ companyNameOnly: value });
    this.state.companyArray[index].company = value;
    this.setState({ companyArray: this.state.companyArray });
  };

  changeCompanyLabelArray = (label, index) => {
    this.setState({ isCompanyArrayModelOpen: false });
    this.state.companyArray[index].label = label;
    this.setState({ CompanyArray: this.state.companyArray });
  };

  changeCompanyLabel = (label) => {
    this.setState({ isCompanyModelOpen: false });
    this.state.company.label = label;
    this.setState({ company: this.state.company });
  };

  //Job Title
  onChangeJobTitle = (value) => {
    this.state.jobTitle.jobTitle = value;
    this.setState({ job_title: this.state.jobTitle });
  };
  changeJobTitleLabel = (label) => {
    this.setState({ isJobTitleModelOpen: false });
    this.state.jobTitle.label = label;
    this.setState({ Job_title: this.state.jobTitle });
  };

  changeJobTitleLabelArray = (label, index) => {
    this.setState({ isjobTitleArrayModelOpen: false });
    this.state.jobTitleArray[index].label = label;
    this.setState({ JobTitleArray: this.state.jobTitleArray });
  };

  //work hours

  onChangeWorkHours = (value) => {
    this.setState({
      isVisibleWork: false,
      choosenWork: moment(value).format("LTS"),
    });
  };

  changeWorkHoursLabel = (label) => {
    this.setState({ isWorkHourseModelOpen: false });
    this.state.workHours.label = label;
    this.setState({ workHours: this.state.workHours });
  };

  changeJobTitleLabelArray = (label, index) => {
    this.setState({ isjobTitleArrayModelOpen: false });
    this.state.jobTitleArray[index].label = label;
    this.setState({ JobTitleArray: this.state.jobTitleArray });
  };

  removeCompany = (key) => {
    const { companyArray } = this.state;
    companyArray.splice(key, 1);
    this.setState({
      deleteCompanyArray: companyArray,
    });
  };
  hidePicker = () => {
    this.setState({ isVisibleWork: false });
  };

  showTimePicker = () => {
    {
      this.state.status ? this.setState({ isVisibleWork: true }) : null;
    }
  };
  showTimeToPicker = () => {
    {
      this.state.status ? this.setState({ isVisibleWorkTo: true }) : null;
    }
  };
  hidePickerTo = () => {
    this.setState({ isVisibleWorkTo: false });
  };
  onChangeWorkHoursTo = (value) => {
    this.setState({
      isVisibleWorkTo: false,
      choosenWorkTo: moment(value).format("LTS"),
    });
  };

  //for array
  showTimePickerArray = () => {
    {
      this.state.status ? this.setState({ isVisibleWorkArray: true }) : null;
    }
  };

  onChangeWorkHoursArray = (arrayValue, index) => {
    var formateTime = moment(arrayValue).format("LTS");
    this.state.companyArray[index].time = formateTime;
    this.setState({
      isVisibleWorkArray: false,
      companyArray: this.state.companyArray,
    });
  };
  showTimeToPickerArray = () => {
    {
      this.state.status ? this.setState({ isVisibleWorkToArray: true }) : null;
    }
  };
  onChangeWorkHoursToArray = (value, index) => {
    var formateTime = moment(value).format("LTS");
    this.state.companyArray[index].timeto = formateTime;
    this.setState({
      isVisibleWorkToArray: false,
      companyArray: this.state.companyArray,
    });
    console.log("chossee------->", this.state.companyArray);
  };
  arrayPickerHide = () => {
    this.setState({ isVisibleWorkArray: false });
  };
  arrayPickerHideTwo = () => {
    this.setState({ isVisibleWorkToArray: false });
  };
  CompanyLeftAction = (key) => {
    return (
      <TouchableOpacity onPress={this.removeCompany}>
        <View style={styles.deleteBox}>
          <Text style={styles.deleteText}>Delete</Text>
        </View>
      </TouchableOpacity>
    );
  };
  renderCompany() {
    return (
      <View
        style={{
          marginTop: Metrics.baseMargin,
          marginBottom: Metrics.baseMargin,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={handshake} style={styles.innerStyle} />
          </View>

          <View>
            <View style={styles.filedView}>
              <TextInput
                placeholder="Company"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                //value={this.state.company1}
                editable={this.state.status ? true : false}
                onChangeText={(value) => this.onChangeCompany(value)}
              />
              {this.state.status ? (
                <TouchableHighlight
                  underlayColor="transparent"
                  style={styles.addressRightView}
                  onPress={() => this.setState({ isCompanyModelOpen: true })}
                >
                  <Icon
                    style={styles.iconSize}
                    size={width * 0.06}
                    name="chevron-small-down"
                  />
                </TouchableHighlight>
              ) : null}
              {this.state.status && this.state.company.label !== "" ? (
                <View style={styles.addressRightView}>
                  <Text style={styles.addressRighttext}>
                    {this.state.company.label}
                  </Text>
                </View>
              ) : null}
            </View>
            <View style={styles.filedView}>
              <TextInput
                placeholder="Job Title"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                value={this.state.job_title}
                editable={this.state.status ? true : false}
                onChangeText={(value) => this.onChangeJobTitle(value)}
              />
            </View>
            <TouchableOpacity
              style={[styles.filedView, { alignItems: "center" }]}
              onPress={this.showTimePicker}
            >
              {this.state.isVisibleWork == false &&
              this.state.choosenWork == "" ? (
                <Text style={styles.dateText}>Work Hours</Text>
              ) : null}

              <Text style={styles.dateText}>{this.state.choosenWork}</Text>

              {this.state.choosenWork !== "" ? (
                <Text style={styles.dateBlack}>To</Text>
              ) : null}

              {this.state.choosenWork !== "" ? (
                <TouchableOpacity
                  style={styles.dateView}
                  onPress={this.showTimeToPicker}
                >
                  {this.state.choosenWorkTo == "" ? (
                    <View
                      style={{
                        justifyContent: "center",
                        height: height * 0.05,
                        marginTop: Metrics.baseMargin,
                      }}
                    >
                      <Text style={styles.dateText}> 00:00:00 AM/PM </Text>
                    </View>
                  ) : null}

                  <Text style={styles.dateText}>
                    {this.state.choosenWorkTo}
                  </Text>
                </TouchableOpacity>
              ) : null}

              <DateTimePickerModal
                isVisible={this.state.isVisibleWorkTo}
                onConfirm={this.onChangeWorkHoursTo}
                onCancel={this.hidePickerTo}
                mode="time"
              />
              <DateTimePickerModal
                isVisible={this.state.isVisibleWork}
                onConfirm={this.onChangeWorkHours}
                onCancel={this.hidePicker}
                mode="time"
              />
            </TouchableOpacity>
            {this.state.companySection == true &&
              this.state.companyArray.map((input, key) => {
                return (
                  <Swipeable renderLeftActions={this.CompanyLeftAction}>
                    <View key={key}>
                      <View style={styles.filedView}>
                        <TextInput
                          placeholder="Company"
                          style={styles.addressField}
                          placeholderTextColor={COLORS.main_text_color}
                          key={key}
                          keyboardType={"default"}
                          onChangeText={(company) => {
                            this.onChangeCompanyArray(company, key);
                          }}
                        />
                        <TouchableHighlight
                          underlayColor="transparent"
                          style={styles.addressRightView}
                          // key={key}
                          onPress={() =>
                            this.setState({ isCompanyArrayModelOpen: true })
                          }
                        >
                          <Icon
                            style={styles.iconSize}
                            size={width * 0.06}
                            name="chevron-small-down"
                          />
                        </TouchableHighlight>
                        {this.state.companyArray[key].label !== "" ? (
                          <View style={styles.addressRightView}>
                            <Text style={styles.addressRighttext}>
                              {this.state.companyArray[key].label}
                            </Text>
                          </View>
                        ) : null}

                        <Modal
                          style={styles.footerModal}
                          visible={this.state.isCompanyArrayModelOpen}
                          transparent={true}
                          animationType="fade"
                          onRequestClose={() =>
                            this.setState({ isCompanyArrayModelOpen: false })
                          }
                        >
                          <View style={styles.contactContent}>
                            <View style={styles.content}>
                              <Text style={styles.modalHeader}>Company</Text>
                              <View style={{ flexDirection: "column" }}>
                                {this.state.companyLableList.map(
                                  (item, index) => {
                                    return (
                                      <TouchableHighlight
                                        underlayColor="transparent"
                                        onPress={() => {
                                          this.changeCompanyLabelArray(
                                            item.label,
                                            key
                                          );
                                        }}
                                      >
                                        <Text style={styles.labelName}>
                                          {" "}
                                          {item.label}{" "}
                                        </Text>
                                      </TouchableHighlight>
                                    );
                                  }
                                )}
                                <TouchableHighlight
                                  underlayColor="transparent"
                                  onPress={() =>
                                    this.setState({
                                      isAddCompanyArrayLabel: true,
                                      company: "",
                                    })
                                  }
                                >
                                  <Text style={styles.labelName}> Custom </Text>
                                </TouchableHighlight>
                              </View>
                            </View>
                          </View>
                        </Modal>
                        <Modal
                          style={styles.footerModal}
                          visible={this.state.isAddCompanyArrayLabel}
                          transparent={true}
                          // key={key}
                          animationType="fade"
                        >
                          <View style={styles.contactContent}>
                            <View style={styles.content}>
                              <Text style={styles.modalHeader}>
                                Custom label name
                              </Text>
                              <View style={{ flexDirection: "column" }}>
                                <TextInput
                                  placeholder="Custom label name"
                                  style={styles.addLabelField}
                                  placeholderTextColor={COLORS.main_text_color}
                                  editable={this.state.status ? true : false}
                                  keyboardType={"default"}
                                  onChangeText={(label) => {
                                    this.changeCompanyLabelArray(label, key);
                                  }}
                                />
                                <TouchableHighlight
                                  underlayColor="transparent"
                                  style={styles.saveView}
                                  onPress={() =>
                                    this.state.companyLabel !== ""
                                      ? this.setState({
                                          isAddCompanyArrayLabel: false,
                                          isCompanyArrayModelOpen: false,
                                        })
                                      : this.setState({
                                          isAddCompanyArrayLabel: false,
                                        })
                                  }
                                >
                                  <Text
                                    style={{
                                      color: COLORS.main_text_color,
                                      fontFamily: Font.medium,
                                      fontSize: width * 0.04,
                                    }}
                                  >
                                    {" "}
                                    Ok{" "}
                                  </Text>
                                </TouchableHighlight>
                              </View>
                            </View>
                          </View>
                        </Modal>
                      </View>
                      {/* Job Title" */}
                      <View style={styles.filedView}>
                        <TextInput
                          placeholder="Job Title"
                          style={styles.stylefiledText}
                          placeholderTextColor={COLORS.main_text_color}
                          value={this.state.job_title}
                          editable={this.state.status ? true : false}
                          onChangeText={(value) => this.onChangeJobTitle(value)}
                        />
                      </View>
                      {/* Job Title finish */}
                      <TouchableOpacity
                        style={styles.filedView}
                        onPress={this.showTimePickerArray}
                      >
                        {this.state.isVisibleWorkArray == false &&
                        this.state.companyArray[key].time == "" ? (
                          <View style={{ flexDirection: "row" }}>
                            <Text style={styles.dateText}>Work Hour</Text>
                          </View>
                        ) : null}

                        <Text style={styles.dateText}>
                          {this.state.companyArray[key].time}
                        </Text>
                        {/* <Text style={styles.dateBlack}>To</Text> */}
                        {this.state.companyArray[key].time !== "" ? (
                          <Text style={styles.dateBlack}>To</Text>
                        ) : null}

                        {/* <TouchableOpacity
                                  style={styles.dateView}
                                  onPress={this.showTimeToPickerArray}
                                >  
                                 <Text style={styles.dateText}>
                                        00:00:00 AM/PM
                                      </Text>
                             </TouchableOpacity> */}
                        {this.state.companyArray[key].time !== "" ? (
                          <TouchableOpacity
                            style={styles.dateView}
                            onPress={this.showTimeToPickerArray}
                          >
                            {this.state.companyArray[key].timeto == "" ? (
                              <View
                                style={{
                                  justifyContent: "center",
                                  height: height * 0.05,
                                  marginTop: Metrics.baseMargin,
                                }}
                              >
                                <Text style={styles.dateText}>
                                  00:00:00 AM/PM
                                </Text>
                              </View>
                            ) : null}
                            <Text style={styles.dateText}>
                              {this.state.companyArray[key].timeto}
                            </Text>
                          </TouchableOpacity>
                        ) : null}
                      </TouchableOpacity>
                      <DateTimePickerModal
                        isVisible={this.state.isVisibleWorkArray}
                        onConfirm={(time) =>
                          this.onChangeWorkHoursArray(time, key)
                        }
                        onCancel={this.arrayPickerHide}
                        mode="time"
                      />

                      <DateTimePickerModal
                        isVisible={this.state.isVisibleWorkToArray}
                        onConfirm={(timeto) =>
                          this.onChangeWorkHoursToArray(timeto, key)
                        }
                        onCancel={this.arrayPickerHideTwo}
                        mode="time"
                      />
                    </View>
                  </Swipeable>
                );
              })}

            <TouchableOpacity
              onPress={() => this.addCompany()}
              disable={this.state.disabledCompany}
            >
              {this.state.status ? <NormalText> + Company </NormalText> : null}
            </TouchableOpacity>

            <Modal
              style={styles.footerModal}
              visible={this.state.isCompanyModelOpen}
              transparent={true}
              animationType="fade"
              onRequestClose={() =>
                this.setState({ isCompanyModelOpen: false })
              }
            >
              <View style={styles.contactContent}>
                <View style={styles.content}>
                  <Text style={styles.modalHeader}>Company</Text>
                  <View style={{ flexDirection: "column" }}>
                    {this.state.companyLableList.map((item, index) => {
                      return (
                        <TouchableHighlight
                          underlayColor="transparent"
                          onPress={() => {
                            this.changeCompanyLabel(item.label);
                          }}
                        >
                          <Text style={styles.labelName}> {item.label} </Text>
                        </TouchableHighlight>
                      );
                    })}
                    <TouchableHighlight
                      underlayColor="transparent"
                      onPress={() =>
                        this.setState({
                          isAddCompanyLabel: true,
                          company: "",
                        })
                      }
                    >
                      <Text style={styles.labelName}> Custom </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
            <Modal
              style={styles.footerModal}
              visible={this.state.isAddCompanyLabel}
              transparent={true}
              // key={key}
              animationType="fade"
            >
              <View style={styles.contactContent}>
                <View style={styles.content}>
                  <Text style={styles.modalHeader}>Custom label name</Text>
                  <View style={{ flexDirection: "column" }}>
                    <TextInput
                      placeholder="Custom label name"
                      style={styles.addLabelField}
                      placeholderTextColor={COLORS.main_text_color}
                      editable={this.state.status ? true : false}
                      keyboardType={"default"}
                      onChangeText={(label) => {
                        this.changeCompanyLabel(label);
                      }}
                    />
                    <TouchableHighlight
                      underlayColor="transparent"
                      style={styles.saveView}
                      onPress={() =>
                        this.state.companyLabel !== ""
                          ? this.setState({
                              isAddCompanyLabel: false,
                              isCompanyModelOpen: false,
                            })
                          : this.setState({
                              isAddCompanyLabel: false,
                            })
                      }
                    >
                      <Text
                        style={{
                          color: COLORS.main_text_color,
                          fontFamily: Font.medium,
                          fontSize: width * 0.04,
                        }}
                      >
                        {" "}
                        Ok{" "}
                      </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
            {/* Job Title Model*/}
            <Modal
              style={styles.footerModal}
              visible={this.state.isJobTitleModelOpen}
              transparent={true}
              animationType="fade"
              onRequestClose={() =>
                this.setState({ isJobTitleModelOpen: false })
              }
            >
              <View style={styles.contactContent}>
                <View style={styles.content}>
                  <Text style={styles.modalHeader}>Job Title</Text>
                  <View style={{ flexDirection: "column" }}>
                    {this.state.jobTitleLableList.map((item, index) => {
                      return (
                        <TouchableHighlight
                          underlayColor="transparent"
                          onPress={() => {
                            this.changeJobTitleLabel(item.label);
                          }}
                        >
                          <Text style={styles.labelName}> {item.label} </Text>
                        </TouchableHighlight>
                      );
                    })}
                    <TouchableHighlight
                      underlayColor="transparent"
                      onPress={() =>
                        this.setState({
                          isAddjobTitleLabel: true,
                          jobTitle: "",
                        })
                      }
                    >
                      <Text style={styles.labelName}> Custom </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
            <Modal
              style={styles.footerModal}
              visible={this.state.isAddjobTitleLabel}
              transparent={true}
              // key={key}
              animationType="fade"
            >
              <View style={styles.contactContent}>
                <View style={styles.content}>
                  <Text style={styles.modalHeader}>Custom label name</Text>
                  <View style={{ flexDirection: "column" }}>
                    <TextInput
                      placeholder="Custom label name"
                      style={styles.addLabelField}
                      placeholderTextColor={COLORS.main_text_color}
                      editable={this.state.status ? true : false}
                      keyboardType={"default"}
                      onChangeText={(label) => {
                        this.changeJobTitleLabel(label);
                      }}
                    />
                    <TouchableHighlight
                      underlayColor="transparent"
                      style={styles.saveView}
                      onPress={() =>
                        this.state.jobTitleLabel !== ""
                          ? this.setState({
                              isAddjobTitleLabel: false,
                              isJobTitleModelOpen: false,
                            })
                          : this.setState({
                              isAddjobTitleLabel: false,
                            })
                      }
                    >
                      <Text
                        style={{
                          color: COLORS.main_text_color,
                          fontFamily: Font.medium,
                          fontSize: width * 0.04,
                        }}
                      >
                        {" "}
                        Ok{" "}
                      </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
            {/* Job Title Finish */}
            {/* Work Hours Model*/}
            <Modal
              style={styles.footerModal}
              visible={this.state.isWorkHourseModelOpen}
              transparent={true}
              animationType="fade"
              onRequestClose={() =>
                this.setState({ isWorkHourseModelOpen: false })
              }
            >
              <View style={styles.contactContent}>
                <View style={styles.content}>
                  <Text style={styles.modalHeader}>Job Title</Text>
                  <View style={{ flexDirection: "column" }}>
                    {this.state.workHoursLableList.map((item, index) => {
                      return (
                        <TouchableHighlight
                          underlayColor="transparent"
                          onPress={() => {
                            this.changeWorkHoursLabel(item.label);
                          }}
                        >
                          <Text style={styles.labelName}> {item.label} </Text>
                        </TouchableHighlight>
                      );
                    })}
                    <TouchableHighlight
                      underlayColor="transparent"
                      onPress={() =>
                        this.setState({
                          isAddworkHoursLabel: true,
                          workHours: "",
                        })
                      }
                    >
                      <Text style={styles.labelName}> Custom </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
            <Modal
              style={styles.footerModal}
              visible={this.state.isAddworkHoursLabel}
              transparent={true}
              // key={key}
              animationType="fade"
            >
              <View style={styles.contactContent}>
                <View style={styles.content}>
                  <Text style={styles.modalHeader}>Custom label name</Text>
                  <View style={{ flexDirection: "column" }}>
                    <TextInput
                      placeholder="Custom label name"
                      style={styles.addLabelField}
                      placeholderTextColor={COLORS.main_text_color}
                      editable={this.state.status ? true : false}
                      keyboardType={"default"}
                      onChangeText={(label) => {
                        this.changeWorkHoursLabel(label);
                      }}
                    />
                    <TouchableHighlight
                      underlayColor="transparent"
                      style={styles.saveView}
                      onPress={() =>
                        this.state.workHoursLabel !== ""
                          ? this.setState({
                              isAddworkHoursLabel: false,
                              isWorkHourseModelOpen: false,
                            })
                          : this.setState({
                              isAddworkHoursLabel: false,
                            })
                      }
                    >
                      <Text
                        style={{
                          color: COLORS.main_text_color,
                          fontFamily: Font.medium,
                          fontSize: width * 0.04,
                        }}
                      >
                        {" "}
                        Ok{" "}
                      </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
            {/* Work Hours Finish */}
          </View>
        </View>
      </View>
    );
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
        <View style={styles.container}>
          <Container>
            {this.renderHeader()}
            <ScrollView>
              {this.renderMiddle()}
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
              <Toast
                ref="toast"
                style={{
                  backgroundColor:
                    this.props.theme.mode === "light" ? "black" : "white",
                  width: width * 0.8,
                  alignItems: "center",
                }}
                position="bottom"
                positionValue={250}
                fadeInDuration={100}
                fadeOutDuration={2000}
                opacity={1}
                textStyle={{
                  color: this.props.theme.mode === "light" ? "white" : "black",
                  fontFamily: Font.medium,
                  fontSize: width * 0.04,
                }}
              />
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
            <Toast
              ref="toast"
              style={{
                backgroundColor:
                  this.props.theme.mode === "light" ? "black" : "white",
                width: width * 0.8,
                alignItems: "center",
              }}
              position="bottom"
              positionValue={100}
              fadeInDuration={1000}
              fadeOutDuration={1000}
              opacity={1}
              textStyle={{
                color: this.props.theme.mode === "light" ? "white" : "black",
                fontFamily: Font.medium,
                fontSize: width * 0.04,
              }}
            />
          </Container>
        </View>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  console.log("State From Add contact------->",state.login)

  return {
    theme: state.themeReducer.theme,
    user_id: state.login.shouldLoadData.user_id,
    username: state.login.shouldLoadData.username,
  };
}

export default connect(mapStateToProps)(addmanuallyContact);

const Container = styled.SafeAreaView`
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
const ScrollView = styled.ScrollView`
  color: ${(props) => props.theme.textColor};
  flex: 1;
  width: 90%;
`;
