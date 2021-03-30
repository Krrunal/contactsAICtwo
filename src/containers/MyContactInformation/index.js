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
import Constants from "../../action/Constants";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/backHeader";
import Icon from "react-native-vector-icons/FontAwesome5";
import IconEntypo from "react-native-vector-icons/Entypo";
import ImagePicker from "react-native-image-crop-picker";
import IntlPhoneInput from "react-native-intl-phone-input";
import Metrics from "../theme/Metrics";
import RNFetchBlob from "rn-fetch-blob";
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
import innerimg from "../../assets/images/innerimg.png";
import instagram from "../../assets/images/instagram.png";
import message from "../../assets/images/message.png";
import moment from "moment";
import note from "../../assets/images/note.png";
import reset from "../../assets/images/reset.png";
import styles from "./style.js";
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
      isVisible: false,
      //data
      first_name: "",
      middle_name: "",
      last_name: "",
      nick_name: "",
      notificationTime: [],

      //models
      workViewOpen: false,
      status: false,
      textInput: [{ label: "Select Type...", show: false }],
      inputData: [],
      mobileLabelList: [
        { label: "Personal(Mobile)" },
        { label: "Personal(Lanline)" },
        { label: "Work(Mobile)" },
        { label: "Work(Landline)" },
        { label: "Personal Fax" },
        { label: "Work Fax" },
      ],
      //email
      emailInput: [{ label: "Select Type...", show: false }],
      emailData: [],
      emailLabelList: [{ label: "Personal" }, { label: "Work" }],
      //address
      addressInput: [{ label: "Select Type...", show: false }],
      addressData: [],
      addressLabelList: [{ label: "Personal" }, { label: "Work" }],
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
      websiteLabelList: [{ label: "Personal" }, { label: "Work" }],
      //date
      dateInput: [{ label: "Select Type...", show: false, showDate: false }],
      dateInput2: [{ date: "Date", showDate: false }],
      dateData: [],
      dateLabelList: [{ label: "Birthday" }, { label: "Wedding Anniversary" }],
      //note
      noteInput: [{ label: "Select Type...", show: false }],
      noteData: [],
      noteLabelList: [{ label: "" }],
      // companyy

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

      companyInput: [{ label: "Select Type...", show: false }],
      companyData: [],
      jobTitleData: [],
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
      profile_image: "",
      profile_image2: "",
      profile_image3: "",
      //
      mobileData: [],
      emailArray: [],
      addressArray: [],
      messengerAray: [],
      socialArray: [],
      websiteArray: [],
      dateArray: [],
      noteArray: [],

      //
      number: "",
      email: "",
      address: "",
      addressLabel: "",
      emailLabel: "",
      messenger: "",
      messengerLabel: "",
      instagram: "",
      instagram2: "",
      instagramLabel: "",
      instagramLabel2: "",
      note: "",
      noteLabel: "",
      website: "",
      websiteLabel: "",
      company: "",
      date: "",
      weddingDate: "",
      jobTitle: "",
      datelabel: "",
      wedding: { date: "" },
      wedding_anniversary: {},
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
      Monday: "",
      MondayTo: "",
      Tuesday: "",
      TuesdayTo: "",
      Wednesday: "",
      WednesdayTo: "",
      Thursday: "",
      ThursdayTo: "",
      Friday: "",
      FridayTo: "",
      Saturday: "",
      SaturdayTo: "",
      Sunday: "",
      SundayTo: "",
      profile_base: "",
      profile_base2: "",
      profile_base3: "",

      image_section1: false,
      image_section2: false,
      image_section3: false,

      First_name: "",
      Middle_name: "",
      Last_name: "",
      Nick_name: "",
      JobTitle: "",
      Company: "",
      selectItem: "",
      timeZone: "",
      data: [
        {
          current_stock: 111,
          product_image:
            "file:///storage/emulated/0/Android/data/com.stockapp/files/Pictures/b0e807e8-fa78-42d1-ab0b-2b9fa0060cb5.jpg",
          product_name: "Tree",
          user_id: 1,
        },
        {
          current_stock: 25,
          product_image:
            "file:///storage/emulated/0/Android/data/com.stockapp/files/Pictures/48e3436f-8902-4c08-8431-f062e9ef585c.jpg",
          product_name: "Leaf",
          user_id: 2,
        },
      ],
    };
  }

  componentDidMount = async () => {
    // this.checkImageUploaded();
    this.timeZoneField();
    this.firebaseDataCAll();
  };
  checkImageUploaded = () => {
    this.setState({ isLoading: true });
    const { username } = this.props;
    const baseurl = Constants.baseurl;
    var _body = new FormData();
    _body.append("user_id", this.props.user_id);

    fetch(baseurl + "get_uplopimages_user", {
      method: "POST",
      body: _body,
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.status == false) {
          console.log("profile --->", responseJson.status);
        } else {
          responseJson.data.map((item) => {
            if (item.position == 1) {
              this.setState({ image_section1: true });
              this.setState({ profile_image: item.profile });
              firebase
                .firestore()
                .collection("user")
                .doc(`${username}`)
                .update({ profile_image: item.profile });
              console.log("profile image profile 111 --->", item.profile);
            }
            if (item.position == 2) {
              this.setState({ image_section2: true });
              this.setState({ profile_image2: item.profile });
              firebase
                .firestore()
                .collection("user")
                .doc(`${username}`)
                .update({ profile_image2: item.profile });
              console.log("profile image profile 22 --->", item.profile);
            }
            if (item.position == 3) {
              this.setState({ image_section3: true });
              this.setState({ profile_image3: item.profile });
              firebase
                .firestore()
                .collection("user")
                .doc(`${username}`)
                .update({ profile_image3: item.profile });
              console.log("profile image profile 333 --->", item.profile);
            }
          });
        }

        // this.firebaseDataCAll();
      })
      .catch((error) => {
        console.log("name error---->", error);
        this.setState({ isLoading: false });
      });
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
  firebaseDataCAll = () => {
    this.checkImageUploaded();
    const { username } = this.props;

    firebase
      .firestore()
      .collection("user")
      .doc(username)
      .get()
      .then((snap) => {
        var item = snap._data;
        // this.setState({ contact: item });
        this.setState({ isLoading: false });
        if (item.isDataUpdated == undefined) {
          console.log("social media ---->", item);
          this.setState({ First_name: item.first_name });
          this.setState({ number: item.number, email: item.email });
        } else {
          this.setState({
            profile_image: item.profile_image,
            image: item.profile_image,
          });
          this.setState({ profile_image2: item.profile_image2 });
          this.setState({ profile_image3: item.profile_image3 });
          this.setState({ First_name: item.first_name });
          this.setState({ Last_name: item.last_name });
          this.setState({ Middle_name: item.middle_name });
          this.setState({ Nick_name: item.nick_name });
          this.setState({ timeZone: item.timeZone });
          if (item.isNumberUpdated == true) {
            {
              item.number !== ""
                ? this.setState({ number: item.number[0].phone })
                : null;
            }
          } else {
            this.setState({ number: item.number });
          }

          if (item.isEmailUpdated == true) {
            {
              item.email !== ""
                ? this.setState({ email: item.email[0].email })
                : null;
            }
          } else {
            this.setState({ email: item.email });
          }

          {
            item.messenger !== ""
              ? this.setState({ messenger: item.messenger[0].messenger })
              : null;
          }
          {
            item.socialMedia !== ""
              ? this.setState({ socialMedia: item.socialMedia[0].social })
              : null;
          }
          {
            item.socialMedia1 !== ""
              ? this.setState({ socialMedia2: item.socialMedia1[0].social })
              : null;
          }
          {
            item.address !== ""
              ? this.setState({ address: item.address[0].address })
              : null;
          }

          //  {item.address.length > 1  == "" ? this.setState({ address2: item.address[1].address }) : null}
          {
            item.note !== ""
              ? this.setState({ note: item.note[0].note })
              : null;
          }
          {
            item.website !== ""
              ? this.setState({ website: item.website[0].website })
              : null;
          }
          {
            item.company !== ""
              ? this.setState({ Company: item.company[0].company })
              : null;
          }
          {
            item.jobTitle !== ""
              ? this.setState({ JobTitle: item.jobTitle[0].jobTitle })
              : null;
          }
          {
            item.date !== ""
              ? this.setState({ date: item.date[0].date })
              : null;
          }

          {
            item.monday !== ""
              ? this.setState({ Monday: item.monday[0].monday })
              : null;
          }
          {
            item.mondayTo !== ""
              ? this.setState({ MondayTo: item.mondayTo[0].mondayTo })
              : null;
          }
          {
            item.tuesday !== ""
              ? this.setState({ Tuesday: item.tuesday[0].tuesday })
              : null;
          }
          {
            item.tuesdayTo !== ""
              ? this.setState({ TuesdayTo: item.tuesdayTo[0].tuesdayTo })
              : null;
          }
          {
            item.wednesday !== ""
              ? this.setState({ Wednesday: item.wednesday[0].wednesday })
              : null;
          }
          {
            item.wednesdayTo !== ""
              ? this.setState({
                  WednesdayTo: item.wednesdayTo[0].wednesdayTo,
                })
              : null;
          }
          {
            item.thursday !== ""
              ? this.setState({ Thursday: item.thursday[0].thursday })
              : null;
          }
          {
            item.thursdayTo !== ""
              ? this.setState({ ThursdayTo: item.thursdayTo[0].thursdayTo })
              : null;
          }
          {
            item.friday !== ""
              ? this.setState({ Friday: item.friday[0].friday })
              : null;
          }
          {
            item.fridayTo !== ""
              ? this.setState({ FridayTo: item.fridayTo[0].fridayTo })
              : null;
          }
          {
            item.saturday !== ""
              ? this.setState({ Saturday: item.saturday[0].saturday })
              : null;
          }
          {
            item.saturdayTo !== ""
              ? this.setState({ SaturdayTo: item.saturdayTo[0].saturdayTo })
              : null;
          }
          {
            item.sunday !== ""
              ? this.setState({ Sunday: item.sunday[0].sunday })
              : null;
          }
          {
            item.sundayTo !== ""
              ? this.setState({ SundayTo: item.sundayTo[0].sundayTo })
              : null;
          }
        }
      });
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
  convertBase64(PATH_TO_THE_FILE) {
    let data = "";
    RNFetchBlob.fs
      .readStream(PATH_TO_THE_FILE, "base64", 4095)
      .then((ifstream) => {
        ifstream.open();
        ifstream.onData((chunk) => {
          data += chunk;
        });
        ifstream.onError((err) => {
          console.log("oops", err);
        });
        ifstream.onEnd(() => {
          var bs = data;
          this.setState({ profile_base: bs });
          this._uploadImageBase64(bs);
        });
      });
  }

  convertBase642(PATH_TO_THE_FILE) {
    let data = "";
    RNFetchBlob.fs
      .readStream(PATH_TO_THE_FILE, "base64", 4095)
      .then((ifstream) => {
        ifstream.open();
        ifstream.onData((chunk) => {
          data += chunk;
        });
        ifstream.onError((err) => {
          console.log("oops", err);
        });
        ifstream.onEnd(() => {
          var bs = data;
          this.setState({ profile_base2: bs });
          this._uploadImageBase64(bs);
        });
      });
  }
  convertBase643(PATH_TO_THE_FILE) {
    let data = "";
    RNFetchBlob.fs
      .readStream(PATH_TO_THE_FILE, "base64", 4095)
      .then((ifstream) => {
        ifstream.open();
        ifstream.onData((chunk) => {
          data += chunk;
        });
        ifstream.onError((err) => {
          console.log("oops", err);
        });
        ifstream.onEnd(() => {
          var bs = data;
          this.setState({ profile_base3: bs });
          this._uploadImageBase64(bs);
        });
      });
  }
  _uploadImageBase64 = (profile) => {};
  fromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      this.setState({ profile_image: image.path });
      this.convertBase64(image.path);
      console.log("img 111---->", image.path);
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
      this.convertBase64(image.path);
      console.log("img 111---->", image.path);
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
      this.convertBase642(image2.path);
      console.log("img 2222---->", image2.path);
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
      this.convertBase642(image2.path);
      console.log("img 2222---->", image2.path);
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
      this.convertBase643(image3.path);
      console.log("img 33---->", image3.path);
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
      this.convertBase643(image3.path);
      console.log("img 33---->", image3.path);
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
    if (textInput.length === 1) {
    } else {
      let inputData = this.state.inputData;
      textInput.pop();
      inputData.pop();
      this.setState({ textInput, inputData });
    }
  };

  //function to add text from TextInputs into single array
  addValues = (phone, index) => {
    this.setState({ number: phone });
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
        onPress={() => this.props.navigation.navigate("SerachEditContact")}
      />
    );
  }

  showLoader() {
    if (this.state.isLoading == true) {
      return <Spinner />;
    }
  }
  renderMiddle() {
    return (
      <Root>
        <View style={{ alignItems: "center" }}>
          {/* <Text style={styles.lableText}>Friend</Text> */}
          <View style={styles.middleView}>
            <View style={styles.firstMiddle}>
              <View style={styles.squareBorder}>
                <Image
                  source={{ uri: this.state.profile_image }}
                  style={styles.SqureImage}
                />
              </View>
              {this.state.status ? 
                <TouchableOpacity
                style={styles.first}
                onPress={this.state.status ? this.selectPhoto : null}
              >
                <Text style={styles.firstText}>Select Photo</Text>
              </TouchableOpacity> :  null}
             
            </View>
            <View style={styles.firstMiddle}>
              <View style={styles.squareBorder}>
                <Image
                  source={{ uri: this.state.profile_image2 }}
                  style={styles.SqureImage}
                />
              </View>
              {this.state.status ? 
               <TouchableOpacity
               style={styles.first}
               onPress={this.state.status ? this.selectPhoto2 : null}
             >
               <Text style={styles.firstText}>Select Photo</Text>
             </TouchableOpacity>
              : null } 
             
            </View>
            <View style={styles.firstMiddle}>
              <View style={styles.squareBorder}>
                <Image
                  source={{ uri: this.state.profile_image3 }}
                  style={styles.SqureImage}
                />
              </View>
              {this.state.status ?  
               <TouchableOpacity
               style={styles.first}
               onPress={this.state.status ? this.selectPhoto3 : null}
             >
               <Text style={styles.firstText}>Select Photo</Text>
             </TouchableOpacity>
             : null }
             
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
              {this.state.status ? (
                <TextInput
                  placeholder=""
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  // maxLength={10}
                  editable={this.state.status ? true : false}
                  value={this.state.First_name}
                  onChangeText={(value) => this.setState({ First_name: value })}
                  ref={(input) => {
                    this.First_name = input;
                  }}
                  onSubmitEditing= {() => { this.Middle_name.focus()}}
                />
              ) : (
                <Text style={styles.stylefiledText}>
                  {this.state.First_name}
                </Text>
              )}

              <View style={styles.rightView}>
                <Text style={styles.righttext}>First Name</Text>
              </View>
            </View>

            <View style={styles.searchSection}>
              {this.state.status ? (
                <TextInput
                  placeholder=""
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  // maxLength={10}
                  editable={this.state.status ? true : false}
                  value={this.state.Middle_name}
                  onChangeText={(value) =>
                    this.setState({ Middle_name: value })
                  }
                  ref={(input) => {
                    this.Middle_name = input;
                  }}
                  onSubmitEditing= {() => { this.Last_name.focus()}}
                />
              ) : (
                <Text style={styles.stylefiledText}>
                  {this.state.Middle_name}
                </Text>
              )}

              <View style={styles.rightView}>
                <Text style={styles.righttext}>Middle Name</Text>
              </View>
            </View>

            <View style={styles.searchSection}>
              {this.state.status ? (
                <TextInput
                  placeholder=""
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  // maxLength={10}
                  editable={this.state.status ? true : false}
                  value={this.state.Last_name}
                  onChangeText={(value) => this.setState({ Last_name: value })}
                  ref={(input) => {
                    this.Last_name = input;
                  }}
                  onSubmitEditing= {() => { this.Nick_name.focus()}}
                />
              ) : (
                <Text style={styles.stylefiledText}>
                  {this.state.Last_name}
                </Text>
              )}
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Last Name</Text>
              </View>
            </View>

            <View style={styles.searchSection}>
              {this.state.status ? (
                <TextInput
                  placeholder=""
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  editable={this.state.status ? true : false}
                  value={this.state.Nick_name}
                  onChangeText={(value) => this.setState({ Nick_name: value })}
                  ref={(input) => {
                    this.Nick_name = input;
                  }}
                  onSubmitEditing= {() => { this.onPressKey()}}
                />
              ) : (
                <Text style={styles.stylefiledText}>
                  {this.state.Nick_name}
                </Text>
              )}
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Nickname</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  onPressKey = () => {
    this.setState({ isMobileSection: true });
    if (this.state.isMobileSection == true) {
      this.textInputRef.focus();
    }
  };
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
                              placeholder=""
                              style={[
                                styles.stylefiledText,
                                { marginBottom: width * 0.025 },
                              ]}
                              returnKeyType="next"
                              placeholderTextColor={COLORS.main_text_color}
                              editable={this.state.status ? true : false}
                              onChangeText={(number1) =>
                                this.addValues(number1, index)
                              }
                              keyboardType={"numeric"}
                              ref={(ref) => {
                                this.textInputRef = ref;
                              }}
                              autoFocus={true}
                              value={this.state.number}
                              onSubmitEditing= {() => { this.onPressEmail()}}
                            />
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity onPress={this.onPressKey}>
                           
                            {this.state.number == "" ? 
                             <Text style={styles.stylefiledText}>   Phone Number  </Text> : <Text style={styles.stylefiledText}> {this.state.number}  </Text> } 
                           
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
                        <Text style={styles.stylefiledText}>
                          {this.state.number}
                        </Text>
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
                  <Text style={[styles.removeNew]}>- Remove Phone Number</Text>
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
  onChangeEmail = (email, index) => {
    this.setState({ email: email });
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
  onPressEmail = () => {
    this.setState({ isEmailSection: true });
    if (this.state.isEmailSection == true) {
      this.emailInput.focus();
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
                            placeholder=""
                            style={[
                              styles.Text_1,
                              { fontSize: width * 0.03, width: width * 0.5 },
                            ]}
                            placeholderTextColor={COLORS.main_text_color}
                            editable={this.state.status ? true : false}
                            onChangeText={(email) =>
                              this.onChangeEmail(email, index)
                            }
                            ref={(ref) => {
                              this.emailInput = ref;
                            }}
                            autoFocus={true}
                            value={this.state.email}
                            onSubmitEditing={this.onPressAddress}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity onPress={this.onPressEmail}>
                          {this.state.email == "" ? 
                             <Text style={styles.stylefiledText}>E-mail Address</Text>
                              : <Text style={styles.stylefiledText}> {this.state.email}  </Text> } 
                         
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
                      <Text style={styles.stylefiledText}>
                        {this.state.email}
                      </Text>
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
    this.setState({ addressInput: data, checkAddressSection: false });
  };

  showAddress = (index) => {
    var data = this.state.addressInput;
    data.map((item, i) => {
      data[i].show = false;
    });
    data[index].show = true;
    this.setState({ addressInput: data });
  };

  onChangAddress = (address, index) => {
    this.setState({ address: address });
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

  addAddressInput = (index, showPop) => {
    this.setState({ removeAddressSection: true });
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

  onPressAddress = () => {
    this.setState({ isAddressSection: true });
    if (this.state.isAddressSection == true) {
      this.addressFocus.focus();
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
                            placeholder=""
                            style={styles.addressField}
                            placeholderTextColor={COLORS.main_text_color}
                            editable={this.state.status ? true : false}
                            onChangeText={(address) =>
                              this.onChangAddress(address, index)
                            }
                            ref={(ref) => {
                              this.addressFocus = ref;
                            }}
                            autoFocus={true}
                            multiline={true}
                            value={this.state.address}
                            onSubmitEditing= {() => { this.onPressMessenger()}}
                            numberOfLines={6}
                         />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity onPress={this.onPressAddress}>
                           {this.state.address == "" ? 
                             <Text style={styles.stylefiledText}>Address</Text>
                              : <Text style={styles.stylefiledText}> {this.state.address}  </Text> } 
                         
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
                      <Text style={styles.stylefiledText}>
                        {this.state.address}
                      </Text>
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
                            onChangeText={(customAddressLabel) =>
                              this.setState({ customAddressLabel })
                            }
                            onSubmitEditing={() =>
                              this.selectAddressLabel(
                                index,
                                this.state.customAddressLabel
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
                this.addAddressInput(this.state.textInput.length, false)
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
                  + Add Address
                </Text>
              ) : null}
            </TouchableOpacity>
          </View>

          {this.state.removeAddressSection ? (
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
  onChangeMessenger = (messenger, index) => {
    this.setState({ messenger: messenger });
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
  onPressMessenger = () => {
    this.setState({ isMessengerSection: true });
    if (this.state.isMessengerSection == true) {
      this.messengerFocus.focus();
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
                            placeholder=""
                            style={styles.stylefiledText}
                            placeholderTextColor={COLORS.main_text_color}
                            editable={this.state.status ? true : false}
                            onChangeText={(messenger) =>
                              this.onChangeMessenger(messenger, index)
                            }
                            ref={(ref) => {
                              this.messengerFocus = ref;
                            }}
                            autoFocus={true}
                            value={this.state.messenger}
                            onSubmitEditing= {() => { this.onPressSocialMedia()}}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity onPress={this.onPressMessenger}>
                           {this.state.messenger == "" ? 
                             <Text style={styles.stylefiledText}>Messenger Account</Text>
                              : <Text style={styles.stylefiledText}> {this.state.messenger}  </Text> } 
                         
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
                        {this.state.messenger}
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
  onChangeSocialMedia = (social, index) => {
    this.setState({ socialMedia: social });
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
  onPressSocialMedia = () => {
    this.setState({ isSocialSection: true });
    if (this.state.isSocialSection == true) {
      this.sociaMediaFocus.focus();
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
                            placeholder=""
                            style={styles.stylefiledText}
                            placeholderTextColor={COLORS.main_text_color}
                            editable={this.state.status ? true : false}
                            onChangeText={(social) =>
                              this.onChangeSocialMedia(social, index)
                            }
                            ref={(ref) => {
                              this.sociaMediaFocus = ref;
                            }}
                            autoFocus={true}
                            value={this.state.socialMedia}
                            onSubmitEditing= {() => { this.onPressWebsite()}}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity onPress={this.onPressSocialMedia}>
                         {this.state.socialMedia == "" ? 
                             <Text style={styles.stylefiledText}>Social Media Account</Text>
                              : <Text style={styles.stylefiledText}> {this.state.socialMedia}  </Text> } 
                         
                          
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
                        {this.state.socialMedia}
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

    console.log("dattet--->", this.state.websiteInput);
  };
  showWebsite = (index) => {
    var data = this.state.websiteInput;
    data.map((item, i) => {
      data[i].show = false;
    });
    data[index].show = true;
    this.setState({ websiteInput: data });
  };
  onChangeWebsite = (website, index) => {
    this.setState({ website: website });
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
  onPressWebsite = () => {
    this.setState({ isWebsiteSection: true });
    if (this.state.isWebsiteSection == true) {
      this.websiteFocus.focus();
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
                            placeholder=""
                            style={styles.stylefiledText}
                            placeholderTextColor={COLORS.main_text_color}
                            editable={this.state.status ? true : false}
                            onChangeText={(website) =>
                              this.onChangeWebsite(website, index)
                            }
                            ref={(ref) => {
                              this.websiteFocus = ref;
                            }}
                            autoFocus={true}
                            value={this.state.website}
                            onSubmitEditing= {() => this.showDatePicker(index)}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity onPress={this.onPressWebsite}>
                         {this.state.website == "" ? 
                             <Text style={styles.stylefiledText}>Website</Text>
                              : <Text style={styles.stylefiledText}> {this.state.website}  </Text> } 
                         
                         
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
                      <Text style={styles.stylefiledText}>
                        {" "}
                        {this.state.website}
                      </Text>
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

  showDateTimePicker = () => {
    {
      this.state.status ? this.setState({ isVisible: true }) : null;
    }
  };
  hidePicker = () => {
    this.setState({ isVisible: false });
  };
  showDatePicker = (index) => {
    this.setState({ isVisible: true });
    var data = this.state.dateInput2;
    data.map((item, i) => {
      data[i].showDate = false;
    });
    data[index].showDate = true;
    this.setState({ dateInput2: data });
    console.log("dattet--->", this.state.dateInput2);
  };

  onChangeDate = (date, index, item) => {
    this.state.notificationTime.push(date);
    // this.setState({
    //   notificationTime : date
    // })
    var fomateDate = moment(date).format("MMMM, Do YYYY");
    var data = this.state.dateInput2;
    data[index].date = fomateDate;
    data[index].show = false;
    this.setState({ dateInput2: data });
    console.log("datteee----------->", this.state.dateInput2[0].date);
     this.onPressNote()
  };
  showDateText = () => {
    return <Text>{this.state.formateDate}</Text>;
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
                    {this.state.status ? (
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        {this.state.dateInput2.map((item, index) => {
                          return (
                            <View>
                              <TouchableOpacity
                                style={{ width: width * 0.5 }}
                                onPress={() => this.showDatePicker(index)}
                              >
                                {this.state.date == "" ? (
                                  <Text style={styles.stylefiledText}>
                                    {item.date}
                                  </Text>
                                ) : (
                                  <Text style={styles.stylefiledText}>
                                    {this.state.date}
                                  </Text>
                                )}
                              </TouchableOpacity>

                              {item.showDate && (
                                <View>
                                  <DateTimePickerModal
                                    isVisible={this.state.isVisible}
                                    onConfirm={(date) =>
                                      this.onChangeDate(date, index, item.date)
                                    }
                                    onCancel={this.hidePicker}
                                    mode="datetime"
                                    is24Hour={false}
                                    titleIOS="Pick your Notification time"
                                  />
                                </View>
                              )}
                            </View>
                          );
                        })}

                        <TouchableOpacity
                          style={styles.modalBtn}
                          onPress={() => this.showDate(index)}
                        >
                          <Text style={styles.selectTypeText}>
                            {item.label}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    ) : (
                      <TouchableOpacity>
                        <Text style={styles.stylefiledText}>
                          {this.state.date}
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                  {item.show && (
                    <ScrollView
                      style={[styles.modal]}
                      nestedScrollEnabled={true}
                    >
                      {this.state.dateLabelList.map((i) => {
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

  onChangNote = (note, index) => {
    this.setState({ note: note });
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

  onPressNote = () => {
    this.setState({ isNoteSection: true });
    if (this.state.isNoteSection == true) {
      this.noteFocus.focus();
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
                            placeholder=""
                            style={styles.addressField}
                            placeholderTextColor={COLORS.main_text_color}
                            editable={this.state.status ? true : false}
                            onChangeText={(note) =>
                              this.onChangNote(note, index)
                            }
                            ref={(ref) => {
                              this.noteFocus = ref;
                            }}
                            autoFocus={true}
                            multiline={true}
                            value={this.state.note}
                            numberOfLines={6}
                            onSubmitEditing= {() => { this.companyFocus.focus()}}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity onPress={this.onPressNote}>
                            {this.state.note == "" ? 
                             <Text style={styles.stylefiledText}>Note</Text>
                              : <Text style={styles.stylefiledText}> {this.state.note}  </Text> } 
                         
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
                      <Text style={styles.stylefiledText}>
                        {this.state.note}
                      </Text>
                    </TouchableOpacity>
                  )}
                  {item.show && (
                    <ScrollView
                      style={[styles.modal]}
                      nestedScrollEnabled={true}
                    >
                   

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
                  + Add Note
                </Text>
              ) : null}
            </TouchableOpacity>
          </View>

          {this.state.removeNoteSection ? (
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <TouchableOpacity style={{}} onPress={() => this.removeNote()}>
                {this.state.status ? (
                  <Text style={[styles.removeNew]}>- Remove Note</Text>
                ) : null}
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    );
  }

  onChangeCompany = (company, index) => {
    this.setState({ Company: company });
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
    this.setState({ JobTitle: jobTitle });
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
    console.log("item=----->", item);
    this.setState({ selectItem: item, workViewOpen: false });
  };

  showWorkHour = (index) => {
    this.setState({ isCompanySec: true });

    if (this.state.isCompanySec == true) {
      this.mondayFocus.focus();
    }
    var data = this.state.companyInput;
    data.map((item, i) => {
      data[i].show = false;
    });
    data[index].show = true;
    this.setState({ companyInput: data });
  };

  renderItem2({ item, index }) {
    console.log("itemmm---date-->", item);
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

  onChangeMonday = (monday, index) => {
    this.setState({ Monday: monday });
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
    this.setState({ MondayTo: mondayTo });
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
    this.setState({ Tuesday: tuesday });
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
    this.setState({ TuesdayTo: tuesdayTo });
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
    this.setState({ Wednesday: wednesday });
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
    this.setState({ WednesdayTo: wednesdayTo });
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
    this.setState({ Thursday: thursday });
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
    this.setState({ ThursdayTo: thursdayTo });
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
    this.setState({ Friday: friday });
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
    this.setState({ FridayTo: fridayTo });
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
    this.setState({ Saturday: saturday });
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
    this.setState({ SaturdayTo: saturdayTo });
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
    this.setState({ Sunday: sunday });
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
    this.setState({ SundayTo: sundayTo });
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
  onPressMessenger = () => {
    this.setState({ isMessengerSection: true });
    if (this.state.isMessengerSection == true) {
      this.messengerFocus.focus();
    }
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
                        {this.state.status == true ? (
                          <TextInput
                            placeholder=""
                            style={styles.stylefiledText}
                            placeholderTextColor={COLORS.main_text_color}
                            editable={this.state.status ? true : false}
                            onChangeText={(Company) =>
                              this.onChangeCompany(Company, index)
                            }
                            value={this.state.Company}
                            ref={(ref) => {
                              this.companyFocus = ref;
                            }}
                            onSubmitEditing= {() => { this.jobTtitleFocus.focus()}}
                          />
                        ) : (
                          <Text style={styles.stylefiledText}>
                            {this.state.Company}
                          </Text>
                        )}
                      </View>
                      <View style={styles.addressRightView}>
                        <Text style={styles.compnyRightText}>Company</Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.searchSection}>
                    <TouchableOpacity style={{ flexDirection: "row" }}>
                      <View>
                        {this.state.status == true ? (
                          <TextInput
                            placeholder=""
                            style={styles.stylefiledText}
                            placeholderTextColor={COLORS.main_text_color}
                            value={this.state.JobTitle}
                            editable={this.state.status ? true : false}
                            onChangeText={(JobTitle) =>
                              this.onChangeJobTitle(JobTitle, index)
                            }
                            ref={(ref) => {
                              this.jobTtitleFocus = ref;
                            }}
                            onSubmitEditing= {() => this.showWorkHour(index)}

                          />
                        ) : (
                          <Text style={styles.stylefiledText}>
                            {this.state.JobTitle}
                          </Text>
                        )}
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
                                placeholder=""
                                placeholderTextColor={COLORS.main_text_color}
                                style={styles.timeText}
                                editable={this.state.status ? true : false}
                                onChangeText={(monday) =>
                                  this.onChangeMonday(monday, index)
                                }
                                value={this.state.Monday}
                                ref={(ref) => {
                                  this.mondayFocus = ref;
                                }}
                                autoFocus={true}
                                onSubmitEditing= {() => this.mondayToFocus.focus()}
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
                                editable={this.state.status ? true : false}
                                onChangeText={(mondayTo) =>
                                  this.onChangeMondayTo(mondayTo, index)
                                }
                                ref={(ref) => {
                                  this.mondayToFocus = ref;
                                }}
                                value={this.state.MondayTo}
                                onSubmitEditing= {() => this.tuesdayFocus.focus()}

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
                                placeholder=""
                                placeholderTextColor={COLORS.main_text_color}
                                style={styles.timeText}
                                editable={this.state.status ? true : false}
                                onChangeText={(tuesday) =>
                                  this.onChangeTuesday(tuesday, index)
                                }
                                ref={(ref) => {
                                  this.tuesdayFocus = ref;
                                }}
                                onSubmitEditing= {() => this.tuesdayToFocus.focus()}
                                value={this.state.Tuesday}
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
                                editable={this.state.status ? true : false}
                                onChangeText={(tuesdayTo) =>
                                  this.onChangeTuesdayTo(tuesdayTo, index)
                                }
                                value={this.state.TuesdayTo}
                                ref={(ref) => {
                                  this.tuesdayToFocus = ref;
                                }}
                                onSubmitEditing= {() => this.wednesday.focus()}
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
                                placeholder=""
                                placeholderTextColor={COLORS.main_text_color}
                                style={styles.timeText}
                                editable={this.state.status ? true : false}
                                onChangeText={(wednesday) =>
                                  this.onChangeWednesday(wednesday, index)
                                }
                                value={this.state.Wednesday}
                                ref={(ref) => {
                                  this.wednesday = ref;
                                }}
                                onSubmitEditing= {() => this.wednesdayTo.focus()}
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
                                editable={this.state.status ? true : false}
                                onChangeText={(wednesdayTo) =>
                                  this.onChangeWednesdayTo(wednesdayTo, index)
                                }
                                value={this.state.WednesdayTo}
                                 ref={(ref) => {
                                  this.wednesdayTo = ref;
                                }}
                                onSubmitEditing= {() => this.thursday.focus()}
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
                                placeholder=""
                                placeholderTextColor={COLORS.main_text_color}
                                style={styles.timeText}
                                editable={this.state.status ? true : false}
                                onChangeText={(thursday) =>
                                  this.onChangeThursday(thursday, index)
                                }
                                value={this.state.Thursday}
                                ref={(ref) => {
                                  this.thursday = ref;
                                }}
                                onSubmitEditing= {() => this.thursdayTo.focus()}
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
                                editable={this.state.status ? true : false}
                                onChangeText={(thursdayTo) =>
                                  this.onChangeThursdayTo(thursdayTo, index)
                                }
                                value={this.state.ThursdayTo}
                                ref={(ref) => {
                                  this.thursdayTo = ref;
                                }}
                                onSubmitEditing= {() => this.friday.focus()}
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
                                placeholder=""
                                placeholderTextColor={COLORS.main_text_color}
                                style={styles.timeText}
                                editable={this.state.status ? true : false}
                                onChangeText={(friday) =>
                                  this.onChangeFriday(friday, index)
                                }
                                value={this.state.Friday}
                                ref={(ref) => {
                                  this.friday = ref;
                                }}
                                onSubmitEditing= {() => this.fridayTo.focus()}
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
                                editable={this.state.status ? true : false}
                                onChangeText={(fridayTo) =>
                                  this.onChangeFridayTo(fridayTo, index)
                                }
                                value={this.state.FridayTo}
                                ref={(ref) => {
                                  this.fridayTo = ref;
                                }}
                                onSubmitEditing= {() => this.saturday.focus()}
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
                                placeholder=""
                                placeholderTextColor={COLORS.main_text_color}
                                style={styles.timeText}
                                editable={this.state.status ? true : false}
                                onChangeText={(saturday) =>
                                  this.onChangeSaturday(saturday, index)
                                }
                                value={this.state.Saturday}
                                ref={(ref) => {
                                  this.saturday = ref;
                                }}
                                onSubmitEditing= {() => this.saturdayTo.focus()}
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
                                editable={this.state.status ? true : false}
                                onChangeText={(saturdayTo) =>
                                  this.onChangeSaturdayTo(saturdayTo, index)
                                }
                                value={this.state.SaturdayTo}
                                ref={(ref) => {
                                  this.saturdayTo = ref;
                                }}
                                onSubmitEditing= {() => this.sunday.focus()}
                              />
                            </View>
                          </View>
                          <View style={[styles.dayView, {}]}>
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
                                placeholder=""
                                placeholderTextColor={COLORS.main_text_color}
                                style={styles.timeText}
                                editable={this.state.status ? true : false}
                                onChangeText={(sunday) =>
                                  this.onChangeSunday(sunday, index)
                                }
                                value={this.state.Sunday}
                                ref={(ref) => {
                                  this.sunday = ref;
                                }}
                                onSubmitEditing= {() => this.sundayTo.focus()}
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
                                editable={this.state.status ? true : false}
                                onChangeText={(sundayTo) =>
                                  this.onChangeSundayTo(sundayTo, index)
                                }
                                value={this.state.SundayTo}
                                ref={(ref) => {
                                  this.sundayTo = ref;
                                }}
                                onSubmitEditing= {Keyboard.dismiss()}
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
                              {/* when  status true */}
                              {this.state.selectItem == "" ? (
                                this.state.timeZone == "" ? (
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
                                      { fontSize: width * 0.018 },
                                    ]}
                                  >
                                    {this.state.timeZone}
                                  </Text>
                                )
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
                  {this.state.isCompanySec == true ? null : this.state
                      .status ? (
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
                  ) : (
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
                            <Text
                              style={[
                                styles.timeText,
                                { marginTop: Metrics.baseMargin },
                              ]}
                            >
                              {this.state.Monday}
                            </Text>
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
                            <Text
                              style={[
                                styles.timeText,
                                { marginTop: Metrics.baseMargin },
                              ]}
                            >
                              {this.state.MondayTo}
                            </Text>
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
                            <Text
                              style={[
                                styles.timeText,
                                { marginTop: Metrics.baseMargin },
                              ]}
                            >
                              {this.state.Tuesday}
                            </Text>
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
                            <Text
                              style={[
                                styles.timeText,
                                { marginTop: Metrics.baseMargin },
                              ]}
                            >
                              {this.state.TuesdayTo}
                            </Text>
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
                            <Text
                              style={[
                                styles.timeText,
                                { marginTop: Metrics.baseMargin },
                              ]}
                            >
                              {this.state.Wednesday}
                            </Text>
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
                            <Text
                              style={[
                                styles.timeText,
                                { marginTop: Metrics.baseMargin },
                              ]}
                            >
                              {this.state.WednesdayTo}
                            </Text>
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
                            <Text
                              style={[
                                styles.timeText,
                                { marginTop: Metrics.baseMargin },
                              ]}
                            >
                              {this.state.Thursday}
                            </Text>
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
                            <Text
                              style={[
                                styles.timeText,
                                { marginTop: Metrics.baseMargin },
                              ]}
                            >
                              {this.state.ThursdayTo}
                            </Text>
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
                            <Text
                              style={[
                                styles.timeText,
                                { marginTop: Metrics.baseMargin },
                              ]}
                            >
                              {this.state.Friday}
                            </Text>
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
                            <Text
                              style={[
                                styles.timeText,
                                { marginTop: Metrics.baseMargin },
                              ]}
                            >
                              {this.state.FridayTo}
                            </Text>
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
                            <Text
                              style={[
                                styles.timeText,
                                { marginTop: Metrics.baseMargin },
                              ]}
                            >
                              {this.state.Saturday}
                            </Text>
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
                            <Text
                              style={[
                                styles.timeText,
                                { marginTop: Metrics.baseMargin },
                              ]}
                            >
                              {this.state.SaturdayTo}
                            </Text>
                          </View>
                        </View>
                        <View style={[styles.dayView, {}]}>
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
                            <Text
                              style={[
                                styles.timeText,
                                { marginTop: Metrics.baseMargin },
                              ]}
                            >
                              {this.state.Sunday}
                            </Text>
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
                            <Text
                              style={[
                                styles.timeText,
                                { marginTop: Metrics.baseMargin },
                              ]}
                            >
                              {this.state.SundayTo}
                            </Text>
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
                              this.state.timeZone == "" ? (
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
                                    { fontSize: width * 0.018 },
                                  ]}
                                >
                                  {this.state.timeZone}
                                </Text>
                              )
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

          {this.state.removeCompanySection ? (
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <TouchableOpacity style={{}} onPress={() => this.removeCompany()}>
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
  clearData = () => {
    this.setState({
      image: "",
      image2: "",
      image3: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      nick_name: "",
      companyData: "",
      jobTitleData: [],
      company: "",
      jobTitle: "",
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
    });
  };
  finalSubmit = async () => {
    if (this.state.status == false) {
      this.setState({ status: true });
    } else {
      this.setState({ status: false });
      this.ShowHideTextComponentView();
      // this.firebaseDataCAll();
      // this.clearData();
    }
  };
  ShowHideTextComponentView = async () => {
    const {
      profile_image,
      profile_image2,
      profile_image3,
      First_name,
      Middle_name,
      Last_name,
      Nick_name,
      inputData,
      textInput,
      emailData,
      addressData,
      emailInput,
      addressInput,
      messengerData,
      messengerInput,
      socialMediaData,
      socialMediaInput,
      websiteInput,
      websiteData,
      dateInput,
      dateData,
      noteInput,
      noteData,
      companyData,
      jobTitleData,
      mondayData,
      tuesdayData,
      wednesdayData,
      thursdayData,
      fridayData,
      saturdayData,
      sundayData,
      mondayTOData,
      tuesdayTOData,
      wednesdayTOData,
      thursdayTOData,
      fridayTOData,
      saturdayTOData,
      sundayTOData,
      dateInput2,
      profile_base,
      profile_base2,
      profile_base3,
      image_section1,
      image_section2,
      image_section3,
    } = this.state;
    const { username, user_id } = this.props;

    if (profile_base == "") {
    } else {
      if (image_section1 == true) {
        this.setState({ isLoading: true });
        const baseurl = Constants.baseurl;
        var _body = new FormData();
        _body.append("user_id", user_id);
        _body.append("userfile", profile_base);
        _body.append("position", 1);
        fetch(baseurl + "checkuserimage", {
          method: "POST",
          body: _body,
        })
          .then((response) => {
            return response.json();
          })
          .then((responseJson) => {
            console.log(" update  profile image 11 --->", responseJson);
            this.setState({ isLoading: false });
          })
          .catch((error) => {
            this.setState({ isLoading: false });
            alert("Something went wrong in image Update");
            console.log("name error---->", error);
          });
      } else {
        this.setState({ isLoading: true });
        const baseurl = Constants.baseurl;
        var _body = new FormData();
        _body.append("user_id", user_id);
        _body.append("userfile", profile_base);
        _body.append("position", 1);
        fetch(baseurl + "uploadfilesuser", {
          method: "POST",
          body: _body,
        })
          .then((response) => {
            return response.json();
          })
          .then((responseJson) => {
            console.log(" profile image 111 --->", responseJson);
            this.setState({ isLoading: false });
          })
          .catch((error) => {
            this.setState({ isLoading: false });
            alert("Something went wrong in image upload");
            console.log("name error---->", error);
          });
      }

      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ profile_image: profile_image });
    }

    if (profile_base2 == "") {
    } else {
      if (image_section2 == true) {
        this.setState({ isLoading: true });
        const baseurl = Constants.baseurl;
        var _body = new FormData();
        _body.append("user_id", user_id);
        _body.append("userfile", profile_base2);
        _body.append("position", 2);
        fetch(baseurl + "checkuserimage", {
          method: "POST",
          body: _body,
        })
          .then((response) => {
            return response.json();
          })
          .then((responseJson) => {
            console.log(" update  profile image 222 --->", responseJson);
            this.setState({ isLoading: false });
          })
          .catch((error) => {
            this.setState({ isLoading: false });
            alert("Something went wrong in image Update");
            console.log("name error---->", error);
          });
      } else {
        this.setState({ isLoading: true });
        const { username, user_id } = this.props;
        const baseurl = Constants.baseurl;
        var _body = new FormData();
        _body.append("user_id", user_id);
        _body.append("userfile", profile_base2);
        _body.append("position", 2);
        fetch(baseurl + "uploadfilesuser", {
          method: "POST",
          body: _body,
        })
          .then((response) => {
            return response.json();
          })
          .then((responseJson) => {
            console.log("profile image 2222--->", responseJson);
            this.setState({ isLoading: false });
          })
          .catch((error) => {
            console.log("name error---->", error);
            alert("Something went wrong in image upload");
          });
      }

      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ profile_image2: profile_image2 });
    }

    if (profile_base3 == "") {
    } else {
      if (image_section3 == true) {
        this.setState({ isLoading: true });
        const baseurl = Constants.baseurl;
        var _body = new FormData();
        _body.append("user_id", user_id);
        _body.append("userfile", profile_base3);
        _body.append("position", 3);
        fetch(baseurl + "checkuserimage", {
          method: "POST",
          body: _body,
        })
          .then((response) => {
            return response.json();
          })
          .then((responseJson) => {
            console.log(" update  profile image 33 --->", responseJson);
            this.setState({ isLoading: false });
          })
          .catch((error) => {
            this.setState({ isLoading: false });
            alert("Something went wrong in image Update");
            console.log("name error---->", error);
          });
      } else {
        this.setState({ isLoading: true });
        const { username, user_id } = this.props;
        const baseurl = Constants.baseurl;
        var _body = new FormData();
        _body.append("user_id", user_id);
        _body.append("userfile", profile_base3);
        _body.append("position", 3);
        fetch(baseurl + "uploadfilesuser", {
          method: "POST",
          body: _body,
        })
          .then((response) => {
            return response.json();
          })
          .then((responseJson) => {
            console.log("profile image 3333 --->", responseJson);
            this.setState({ isLoading: false });
          })
          .catch((error) => {
            alert("Something went wrong in image upload");
            console.log("name error---->", error);
          });
      }

      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ profile_image3: profile_image3 });
    }

    firebase.firestore().collection("user").doc(`${username}`).update({
      isDataUpdated: true,
    });

    if (First_name == "") {
    } else {
      firebase.firestore().collection("user").doc(`${username}`).update({
        first_name: First_name,
        first_name_small: First_name.toLowerCase(),
      });
    }

    if (Middle_name == "") {
    } else {
      firebase.firestore().collection("user").doc(`${username}`).update({
        middle_name: Middle_name,
        middle_name_small: Middle_name.toLowerCase(),
      });
    }
    if (Nick_name == "") {
    } else {
      firebase.firestore().collection("user").doc(`${username}`).update({
        nick_name: Nick_name,
        nick_name_small: Nick_name.toLowerCase(),
      });
    }
    if (Last_name == "") {
    } else {
      firebase.firestore().collection("user").doc(`${username}`).update({
        last_name: Last_name,
        last_name_small: Last_name.toLowerCase(),
      });
    }

    //mobile
    if (inputData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ number: inputData, isNumberUpdated: true });
    }

    const mobileabel = textInput.find(({ label }) => label == label);
    if (mobileabel.label === "Select Type...") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ mobileabel: textInput });
    }
    //email

    if (emailData == "") {
      console.log("Empty");
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ email: emailData, isEmailUpdated: true });
    }
    const emailabel = emailInput.find(({ label }) => label == label);
    if (emailabel.label === "Select Type...") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ emailabel: emailInput });
    }
    //address
    if (addressData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ address: addressData });
    }
    const addresslabel = addressInput.find(({ label }) => label == label);
    if (addresslabel.label === "Select Type...") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ addresslabel: addressInput });
    }
    //messenger
    if (messengerData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ messenger: messengerData });
    }
    const messengerlabel = messengerInput.find(({ label }) => label == label);
    if (messengerlabel.label === "Select Type...") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ messengerlabel: messengerInput });
    }
    //social media
    if (socialMediaData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ socialMedia: socialMediaData });
    }
    const sociallabel = socialMediaInput.find(({ label }) => label == label);
    if (sociallabel.label === "Select Type...") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ sociallabel: socialMediaInput });
    }
    //Website
    if (websiteData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ website: websiteData });
    }
    const websitelabel = websiteInput.find(({ label }) => label == label);
    if (websitelabel.label === "Select Type...") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ websitelabel: websiteInput });
    }

    //date
    if (this.state.dateInput2[0].date == "Date") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ date: dateInput2 });
    }
    // if (dateInput2 == []) {
    // } else {
    //   firebase
    //     .firestore()
    //     .collection("user")
    //     .doc(`${username}`)
    //     .update({ date: dateInput2 });
    // }
    const datelabel = dateInput.find(({ label }) => label == label);
    if (datelabel.label === "Select Type...") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ datelabel: dateInput });
    }
    //note
    if (noteData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ note: noteData });
    }
    const notelabel = noteInput.find(({ label }) => label == label);
    if (notelabel.label === "Select Type...") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ notelabel: noteInput });
    }
    //company
    if (companyData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ company: companyData });
    }

    //job title
    if (jobTitleData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ jobTitle: jobTitleData });
    }
    if (mondayData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ monday: mondayData });
    }
    if (mondayTOData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ mondayTo: mondayTOData });
    }
    if (tuesdayData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ tuesday: tuesdayData });
    }
    if (tuesdayTOData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ tuesdayTo: tuesdayTOData });
    }
    if (wednesdayData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ wednesday: wednesdayData });
    }

    if (wednesdayTOData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ wednesdayTo: wednesdayTOData });
    }

    if (thursdayData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ thursday: thursdayData });
    }

    if (thursdayTOData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ thursdayTo: thursdayTOData });
    }

    if (fridayData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ friday: fridayData });
    }

    if (fridayTOData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ fridayTo: fridayTOData });
    }

    if (saturdayData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ saturday: saturdayData });
    }

    if (saturdayTOData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ saturdayTo: saturdayTOData });
    }

    if (sundayData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ sunday: sundayData });
    }
    if (sundayTOData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ sundayTo: sundayTOData });
    }
    console.log(" em=----->", this.state.selectItem);

    if (this.state.selectItem == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ timeZone: this.state.selectItem });
    }

    if (this.state.notificationTime == "") {
    } else {
      let dateNotify = this.state.notificationTime[0].toString();

      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ notificationTime: dateNotify });
    }
    this.firebaseDataCAll();
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
        <TouchableOpacity
          // underlayColor="transparent"
          style={styles.saveView}
          onPress={this.finalSubmit}
        >
          <Text
            style={{
              color: COLORS.main_text_color,
              fontFamily: Font.medium,
              fontSize: width * 0.045,
            }}
          >
            {this.state.status == true ? "Save" : "Edit"}
          </Text>
        </TouchableOpacity>
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
            <ScrollView nestedScrollEnabled={true} keyboardShouldPersistTaps={true}>
              <View
                style={{
                  width: width,
                  alignItems: "center",
                  marginBottom: Metrics.baseMargin,
                }}
              >
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
          {this.showLoader()}
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
  contactChange: state.sortContactsReducer.contactChange,
  nameChange: state.switchNameReducer.nameChange,
  user_id:
    state.login.shouldLoadData.user_id || state.reg.shouldLoadData.user_id,
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
