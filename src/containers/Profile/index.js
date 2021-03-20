import {
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
import Icon from "react-native-vector-icons/FontAwesome5";
import IconEntypo from "react-native-vector-icons/Entypo";
import IntlPhoneInput from "react-native-intl-phone-input";
import Metrics from "../theme/Metrics";
import { Spinner } from "../../components/Spinner";
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
import leftArrow from "../../assets/images/leftArrow.png";
import logo from "../../assets/images/logo.png";
import message from "../../assets/images/message.png";
import moment from "moment";
import note from "../../assets/images/note.png";
import reset from "../../assets/images/resetBlack.png";
import rightArrow from "../../assets/images/rightArrow.png";
import rigthLogo from "../../assets/icons/contact.png";
import sideBar from "../../assets/images/sideBAR.png";
import styles from "./style.js";
import website from "../../assets/images/website.png";
import websiteImg from "../../assets/images/website.png";

const person = require("../../assets/images/person.png");
var { width, height } = Dimensions.get("window");
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tz: [],
      tzs: "",
      status: false,
      isCompanySec: false,
      workViewOpen: false,
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
      isMobileSection: false,
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
      timeZone: "",
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
      isLoading: false,
      profile_image: "",
      profile_image2: "",
      profile_image3: "",
      first_name: "",
      last_name: "",
      number: "",
      address: "",
      email: "",
      messenger: "",
      socialMedia: "",
      website: "",
      date: "",
      note: "",
      company: "",
      jobTitle: "",
      JobTitle: "",
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
      u_name: "",
      doc_id: "",
      leftSec: false,
      imgSec1: true,
      imgSec2: false,
      imgSec3: false,
      rightSec: false,
      selectedData: "",
      numbs: [],
      notificationTime: [],
      s_label_name: "",
      eachUserData: "",
      mobileContactSection: false,
      importedData: this.props.navigation.state.params.contactData,
    };
  }
  checkSettings = () => {
    const baseurl = Constants.baseurl;
    var _body = new FormData();
    _body.append("relation_id", this.state.s_label_id);
    _body.append("user_id", this.state.u_id);
    fetch(baseurl + "getsettings", {
      method: "POST",
      headers: {
        "Content-Type":
          Platform.OS == "ios" ? "application/json" : "multipart/form-data",
      },
      body: _body,
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        let item = responseJson.data;
        let fields = this.state.eachUserData;

        if (responseJson.status == true) {
          firebase
            .firestore()
            .collection("user")
            .doc(this.props.username)
            .collection("contacts")
            .doc(this.state.doc_id)
            .update({
              first_name: item.first_name == 1 ? fields.first_name : null,
              last_name: item.last_name == 1 ? fields.last_name : null,
              first_name_small: fields.first_name.toLowerCase(),
              last_name_small: fields.last_name.toLowerCase(),
              number:
                (item.phone_number == 1) !== "" ? fields.number[0].phone : "",
              address:
                item.address == 1
                  ? fields.address !== ""
                    ? fields.address[0].address
                    : ""
                  : "",
              email:
                item.email == 1
                  ? fields.email !== ""
                    ? fields.email[0].email
                    : ""
                  : "",
              messenger:
                item.messenger == 1
                  ? fields.messenger !== ""
                    ? fields.messenger[0].messenger
                    : ""
                  : "",
              website:
                item.website == 1
                  ? fields.website !== ""
                    ? fields.website[0].website
                    : ""
                  : "",
              date:
                item.date == 1
                  ? fields.date !== ""
                    ? fields.date[0].date
                    : ""
                  : "",
              note:
                item.note == 1
                  ? fields.note !== ""
                    ? fields.note[0].note
                    : ""
                  : "",
              company:
                item.company == 1
                  ? fields.company !== ""
                    ? fields.company[0].company
                    : ""
                  : "",
              jobTitle:
                item.jobTitle == 1
                  ? fields.jobTitle !== ""
                    ? fields.jobTitle[0].jobTitle
                    : ""
                  : "",
              monday:
                item.monday == 1
                  ? fields.monday !== ""
                    ? fields.monday[0].monday
                    : ""
                  : "",
              mondayTo:
                item.mondayTo == 1
                  ? fields.mondayTo !== ""
                    ? fields.mondayTo[0].mondayTo
                    : ""
                  : "",
              tuesday:
                item.tuesday == 1
                  ? fields.tuesday !== ""
                    ? fields.tuesday[0].tuesday
                    : ""
                  : "",
              tuesdayTo:
                item.tuesdayTo == 1
                  ? fields.tuesdayTo !== ""
                    ? fields.tuesdayTo[0].tuesdayTo
                    : ""
                  : "",
              wednesday:
                item.wednesday == 1
                  ? fields.wednesday !== ""
                    ? fields.wednesday[0].wednesday
                    : ""
                  : "",
              wednesdayTo:
                item.wednesdayTo == 1
                  ? fields.wednesdayTo !== ""
                    ? fields.wednesdayTo[0].wednesdayTo
                    : ""
                  : "",
              thursday:
                item.thursday == 1
                  ? fields.thursday !== ""
                    ? fields.thursday[0].thursday
                    : ""
                  : "",
              thursdayTo:
                item.thursdayTo == 1
                  ? fields.thursdayTo !== ""
                    ? fields.thursdayTo[0].thursdayTo
                    : ""
                  : "",
              friday:
                item.friday == 1
                  ? fields.friday !== ""
                    ? fields.friday[0].friday
                    : ""
                  : "",
              fridayTo:
                item.fridayTo == 1
                  ? fields.fridayTo !== ""
                    ? fields.fridayTo[0].fridayTo
                    : ""
                  : "",
              saturday:
                item.saturday == 1
                  ? fields.saturday !== ""
                    ? fields.saturday[0].saturday
                    : ""
                  : "",
              saturdayTo:
                item.saturdayTo == 1
                  ? fields.saturdayTo !== ""
                    ? fields.saturdayTo[0].saturdayTo
                    : ""
                  : "",
              sunday:
                item.sunday == 1
                  ? fields.sunday !== ""
                    ? fields.sunday[0].sunday
                    : ""
                  : "",
              sundayTo:
                item.sundayTo == 1
                  ? fields.sundayTo !== ""
                    ? fields.sundayTo[0].sundayTo
                    : ""
                  : "",
            });
          this.showDateAfterUpdate();
        }
        if (responseJson.status == false) {
          this.getAllData();
        }
      })
      .catch((error) => {
        console.log("Update errrorr---->", error);
        this.setState({ isLoading: false });
      });
  };
  getAllData = () => {
    let fields = this.state.eachUserData;

    firebase
      .firestore()
      .collection("user")
      .doc(this.props.username)
      .collection("contacts")
      .doc(this.state.doc_id)
      .update({
        isGetAllData: true,
        first_name: fields.first_name,
        last_name: fields.last_name,
        profile_image: fields.profile_image,
        profile_image2: fields.profile_image2,
        profile_image3: fields.profile_image3,
        first_name_small: fields.first_name.toLowerCase(),
        last_name_small: fields.last_name.toLowerCase(),
        number1: fields.number !== "" ? fields.number[0].phone : "",
        address1: fields.address !== "" ? fields.address[0].address : "",
        email: fields.email !== "" ? fields.email[0].email : "",
        messenger1:
          fields.messenger !== "" ? fields.messenger[0].messenger : "",
        socialMedia:
          fields.socialMedia !== "" ? fields.socialMedia[0].social : "",
        website: fields.website !== "" ? fields.website : "",
        date: fields.date !== "" ? fields.date : "",
        note: fields.note !== "" ? fields.note : "",
        company: fields.company !== "" ? fields.company : "",
        jobTitle: fields.jobTitle !== "" ? fields.jobTitle : "",
        monday: fields.monday !== "" ? fields.monday : "",
        mondayTo: fields.mondayTo !== "" ? fields.mondayTo : "",
        tuesday: fields.tuesday !== "" ? fields.tuesday : "",
        tuesdayTo: fields.tuesdayTo !== "" ? fields.tuesdayTo : "",
        wednesday: fields.wednesday !== "" ? fields.wednesday : "",
        wednesdayTo: fields.wednesdayTo !== "" ? fields.wednesdayTo : "",
        thursday: fields.thursday !== "" ? fields.thursday : "",
        thursdayTo: fields.thursdayTo !== "" ? fields.thursdayTo : "",
        friday: fields.friday !== "" ? fields.friday : "",
        fridayTo: fields.fridayTo !== "" ? fields.fridayTo : "",
        saturday: fields.saturday !== "" ? fields.saturday : "",
        saturdayTo: fields.saturdayTo !== "" ? fields.saturdayTo : "",
        sunday: fields.sunday !== "" ? fields.sunday : "",
        sundayTo: fields.sundayTo !== "" ? fields.sundayTo : "",
        // website: fields.website !== "" ? fields.website[0].website : "",
        // date: fields.date !== "" ? fields.date[0].date : "",
        // note: fields.note !== "" ? fields.note[0].note : "",
        // company: fields.company !== "" ? fields.company[0].company : "",
        // jobTitle: fields.jobTitle !== "" ? fields.jobTitle[0].jobTitle : "",
        // monday: fields.monday !== "" ? fields.monday[0].monday : "",
        // mondayTo: fields.mondayTo !== "" ? fields.mondayTo[0].mondayTo : "",
        // tuesday: fields.tuesday !== "" ? fields.tuesday[0].tuesday : "",
        // tuesdayTo: fields.tuesdayTo !== "" ? fields.tuesdayTo[0].tuesdayTo : "",
        // wednesday: fields.wednesday !== "" ? fields.wednesday[0].wednesday : "",
        // wednesdayTo:  fields.wednesdayTo !== "" ? fields.wednesdayTo[0].wednesdayTo : "",
        // thursday: fields.thursday !== "" ? fields.thursday[0].thursday : "",
        // thursdayTo:  fields.thursdayTo !== "" ? fields.thursdayTo[0].thursdayTo : "",
        // friday: fields.friday !== "" ? fields.friday[0].friday : "",
        // fridayTo: fields.fridayTo !== "" ? fields.fridayTo[0].fridayTo : "",
        // saturday: fields.saturday !== "" ? fields.saturday[0].saturday : "",
        // saturdayTo: fields.saturdayTo !== "" ? fields.saturdayTo[0].saturdayTo : "",
        // sunday: fields.sunday !== "" ? fields.sunday[0].sunday : "",
        // sundayTo: fields.sundayTo !== "" ? fields.sundayTo[0].sundayTo : "",
      });

    this.showDateAfterUpdate();
  };
  showDateAfterUpdate = () => {
    console.log("hello from show me afer----?>");
    firebase
      .firestore()
      .collection("user")
      .doc(this.props.username)
      .collection("contacts")
      .doc(this.state.doc_id)
      .get()
      .then((snap) => {
        let FN = snap._data;
        this.setState({ selectedData: snap._data });
        this.setState({ eachUserData: snap._data });
        this.setState({ profile_image: FN.profile_image });
        this.setState({ profile_image2: FN.profile_image2 });
        if (FN.profile_image2 !== "") {
          this.setState({ rightSec: true });
        }
        this.setState({ profile_image3: FN.profile_image3 });
        this.setState({ u_name: FN.u_name });
        this.setState({ first_name: FN.first_name });
        this.setState({ last_name: FN.last_name });
        this.setState({ number1: FN.number1 });
        this.setState({ number2: FN.number2 });
        this.setState({ email: FN.email1 });
        this.setState({ email2: FN.email2 });
        this.setState({ address: FN.address1 });
        this.setState({ address2: FN.address2 });
        this.setState({ messenger: FN.messenger1 });
        this.setState({ socialMedia: FN.socialMedia });
        {
          FN.website == ""
            ? null
            : this.setState({ website: FN.website[0].website });
        }
        {
          FN.date == "" ? null : this.setState({ date: FN.date[0].date });
        }
        {
          FN.note == "" ? null : this.setState({ note: FN.note[0].note });
        }
        {
          FN.company == ""
            ? null
            : this.setState({ company: FN.company[0].company });
        }
        {
          FN.jobTitle == ""
            ? null
            : this.setState({ jobTitle: FN.jobTitle[0].jobTitle });
        }
        {
          FN.monday == ""
            ? null
            : this.setState({ Monday: FN.monday[0].monday });
        }
        {
          FN.mondayTo == ""
            ? null
            : this.setState({ MondayTo: FN.mondayTo[0].mondayTo });
        }
        {
          FN.tuesday == ""
            ? null
            : this.setState({ Tuesday: FN.tuesday[0].tuesday });
        }
        {
          FN.tuesdayTo == ""
            ? null
            : this.setState({ TuesdayTo: FN.tuesdayTo[0].tuesdayTo });
        }
        {
          FN.wednesday == ""
            ? null
            : this.setState({ Wednesday: FN.wednesday[0].wednesday });
        }
        {
          FN.wednesdayTo == ""
            ? null
            : this.setState({ WednesdayTo: FN.wednesdayTo[0].wednesdayTo });
        }
        {
          FN.thursday == ""
            ? null
            : this.setState({ Thursday: FN.thursday[0].thursday });
        }
        {
          FN.thursdayTo == ""
            ? null
            : this.setState({ ThursdayTo: FN.thursdayTo[0].thursdayTo });
        }
        {
          FN.friday == ""
            ? null
            : this.setState({ Friday: FN.friday[0].friday });
        }
        {
          FN.fridayTo == ""
            ? null
            : this.setState({ FridayTo: FN.fridayTo[0].fridayTo });
        }
        {
          FN.saturday == ""
            ? null
            : this.setState({ Saturday: FN.saturday[0].saturday });
        }
        {
          FN.saturdayTo == ""
            ? null
            : this.setState({ SaturdayTo: FN.saturdayTo[0].saturdayTo });
        }
        {
          FN.sunday == ""
            ? null
            : this.setState({ Sunday: FN.sunday[0].sunday });
        }
        {
          FN.sundayTo == ""
            ? null
            : this.setState({ SundayTo: FN.sundayTo[0].sundayTo });
        }
        this.setState({ isLoading: false });
      });
  };
  labelList = () => {
    this.setState({ isLoading: true }, async () => {
      const baseurl = Constants.baseurl;
      fetch(baseurl + "getlabel")
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          this.setState({ isLoading: false });
          console.log("responseJson--->", responseJson);
          var arr = responseJson.data.map((item, index) => {
            if (item.relation == this.state.s_label_name) {
              this.setState({ s_label_id: item.id });
              this.checkSettings();
            } else {
              //   console.log("else--->", this.state.s_label_id);
            }
          });
        })
        .catch((error) => {
          console.error(error);
          this.setState({ isLoading: false });
        });
    });
  };
  componentDidMount() {
    this.timeZoneField();
    // this.firebaseDataCAll();
    let fields = this.props.navigation.state.params.contactData;

    this.setState({
      importedData: this.props.navigation.state.params.contactData,
      u_name: fields.u_name,
    });
    // console.log('happyy--->',fields)
    if (fields.isImport == false) {
      firebase
        .firestore()
        .collection("user")
        .doc(fields.u_name)
        .get()
        .then((snap) => {
          // console.log(" sjprtconatc ----->", snap._data);
          this.setState({ u_id: snap._data.user_id, eachUserData: snap._data });
        });
      firebase
        .firestore()
        .collection("user")
        .doc(this.props.username)
        .collection("contacts")
        .get()
        .then((snap) => {
          snap.forEach((doc) => {
            if (fields.u_name == doc._data.u_name) {
              this.setState({ s_label_name: fields.s_label_name });
              console.log("----->  ", fields.u_name);
              this.labelList();
            }
          });
        });
    } else {
      this.setState({ isLoading: false, mobileContactSection: true });
      this.setState({ first_name: fields.first_name });
      this.setState({ last_name: fields.last_name });
      this.setState({ u_name: fields.u_name });
      this.setState({ profile_image: fields.profile_image });
      this.setState({ profile_image2: fields.profile_image2 });
      if (fields.profile_image2 !== "") {
        this.setState({ rightSec: true });
      }
      this.setState({ profile_image3: fields.profile_image3 });
      this.setState({ number1: fields.number1 });
      this.setState({ address: fields.address1 });
      this.setState({ address2: fields.address2 });
      this.setState({ email: fields.email1 });
      this.setState({ number2: fields.number2 });
      this.setState({ email2: fields.email2 });
      this.setState({ messenger: fields.messenger1 });
      this.setState({ socialMedia: fields.social_media1 });
      {
        fields.website !== ""
          ? fields.isManually == true
            ? fields.isWebsiteUpdate == true
              ? this.setState({ website: fields.website[0].website })
              : this.setState({ website: fields.website })
            : this.setState({ website: fields.website[0].website })
          : null;
      }
      {
        fields.date !== ""
          ? fields.isManually == true
            ? fields.isdateUpdate == true
              ? this.setState({ date: fields.date[0].date })
              : this.setState({ date: fields.date })
            : this.setState({ date: fields.date[0].date })
          : null;
      }
      this.setState({ note: fields.note });
      this.setState({ company: fields.company });
      this.setState({ jobTitle: fields.jobTitle });
      {
        fields.monday !== ""
          ? this.setState({ Monday: fields.monday[0].monday })
          : null;
      }
      {
        fields.mondayTo !== ""
          ? this.setState({ MondayTo: fields.mondayTo[0].mondayTo })
          : null;
      }
      {
        fields.tuesday !== ""
          ? this.setState({ Tuesday: fields.tuesday[0].tuesday })
          : null;
      }
      {
        fields.tuesdayTo !== ""
          ? this.setState({ TuesdayTo: fields.tuesdayTo[0].tuesdayTo })
          : null;
      }
      {
        fields.wednesday !== ""
          ? this.setState({ Wednesday: fields.wednesday[0].wednesday })
          : null;
      }
      {
        fields.thursday !== ""
          ? this.setState({ Thursday: fields.thursday[0].thursday })
          : null;
      }
      {
        fields.thursdayTo !== ""
          ? this.setState({ ThursdayTo: fields.thursdayTo[0].thursdayTo })
          : null;
      }
      {
        fields.friday !== ""
          ? this.setState({ Friday: fields.friday[0].friday })
          : null;
      }
      {
        fields.saturday !== ""
          ? this.setState({ Saturday: fields.saturday[0].saturday })
          : null;
      }
      {
        fields.saturdayTo !== ""
          ? this.setState({ SaturdayTo: fields.saturdayTo[0].saturdayTo })
          : null;
      }
      {
        fields.sunday !== ""
          ? this.setState({ Sunday: fields.sunday[0].sunday })
          : null;
      }
      {
        fields.sundayTo !== ""
          ? this.setState({ SundayTo: fields.sundayTo[0].sundayTo })
          : null;
      }
    }
    this.getDocID();
  }
  fromServer = () => {
    console.log("from pofile ----->", this.state.selectedData);
  };
  getDocID = () => {
    firebase
      .firestore()
      .collection("user")
      .doc(this.props.username)
      .collection("contacts")
      .get()
      .then((snap) => {
        snap.docs.forEach((doc_id) => {
          if (this.state.u_name == doc_id._data.u_name) {
            this.setState({ doc_id: doc_id.id });
            console.log("true ----->", doc_id.id);
          }
        });
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

  renderHeader() {
    return (
      <View>
        <View
          style={{
            width: width,
            alignItems: "center",
            marginTop: Metrics.baseMargin,
          }}
        >
          <Text>{this.state.u_name}</Text>
        </View>
      </View>
    );
  }
  rightPress = () => {
    if (this.state.imgSec1 == true) {
      this.setState({ imgSec1: false, imgSec2: true, leftSec: true });
    }
    if (this.state.imgSec2 == true) {
      this.setState({
        imgSec2: false,
        imgSec3: true,
        leftSec: true,
        rightSec: false,
      });
    }
  };
  leftPress = () => {
    if (this.state.imgSec2 == true) {
      this.setState({ imgSec1: true, imgSec2: false, leftSec: false });
    }
    if (this.state.imgSec3 == true) {
      this.setState({
        imgSec2: true,
        imgSec3: false,
        leftSec: true,
        rightSec: true,
      });
    }
  };
  renderPhoto() {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            width: width,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {this.state.leftSec == true ? (
            <TouchableOpacity style={styles.arrowView} onPress={this.leftPress}>
              <Image
                source={rightArrow}
                style={[
                  styles.arrowStyle,
                  { transform: [{ rotate: "180deg" }] },
                ]}
              />
            </TouchableOpacity>
          ) : null}
          {this.state.profile_image == "" ||
          this.state.profile_image2 == "" ||
          this.state.profile_image3 == "" ? (
            <Image source={person} style={[styles.personImageStyle]} />
          ) : this.state.imgSec1 == true ? (
            <View>
              <Image
                source={{ uri: this.state.profile_image }}
                style={[
                  styles.personImageStyle,
                  {
                    marginLeft:
                      this.state.leftSec == true ? null : Metrics.labelMargin,
                  },
                ]}
              />
            </View>
          ) : null}

          {this.state.imgSec2 == true ? (
            <View>
              <Image
                source={{ uri: this.state.profile_image2 }}
                style={styles.personImageStyle}
              />
            </View>
          ) : null}
          {this.state.imgSec3 == true ? (
            <View style={{}}>
              <Image
                source={{ uri: this.state.profile_image3 }}
                style={[
                  styles.personImageStyle,
                  {
                    marginRight:
                      this.state.rightSec == true ? null : Metrics.labelMargin,
                  },
                ]}
              />
            </View>
          ) : null}
          {this.state.rightSec == true ? (
            <TouchableOpacity
              style={styles.arrowView}
              onPress={this.rightPress}
            >
              <Image source={leftArrow} style={[styles.arrowStyle]} />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }
  renderName() {
    return (
      <View style={{ marginTop: Metrics.baseMargin, position: "relative" }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              source={innerimg}
              style={[styles.innerStyle, { marginTop: Metrics.xsmallMargin }]}
            />
          </View>

          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.searchSection}>
                {this.state.status ? (
                  <TextInput
                    placeholder=""
                    style={styles.stylefiledText}
                    placeholderTextColor={COLORS.main_text_color}
                    // maxLength={10}
                    editable={this.state.status ? true : false}
                    value={this.state.first_name}
                    onChangeText={(value) =>
                      this.setState({ first_name: value, fnSection: true })
                    }
                    ref={(input) => {
                      this.first_name = input;
                    }}
                  />
                ) : (
                  <Text style={styles.stylefiledText}>
                    {this.state.first_name}
                  </Text>
                )}

                <View style={styles.rightView}>
                  <Text style={styles.righttext}>First Name</Text>
                </View>
              </View>
              {/* {this.state.mobileContactSection == false ?  */}

              <View style={styles.doubleImaageView}>
                {/* for server data */}
                {this.state.selectedData.isImport == false ? (
                  this.state.first_name !== "" ? (
                    <Image source={reset} style={styles.smallIcon} />
                  ) : null
                ) : this.state.first_name !== "" ? (
                  <Image source={edit} style={styles.smallIcon} />
                ) : null}

                {this.state.selectedData.serverFNUpdate == true ? (
                  <Image source={edit} style={styles.smallIcon} />
                ) : null}
                {/* for server data */}
              </View>
              {/* : null } */}
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.searchSection}>
                {this.state.status ? (
                  <TextInput
                    placeholder=""
                    style={styles.stylefiledText}
                    placeholderTextColor={COLORS.main_text_color}
                    // maxLength={10}
                    editable={this.state.status ? true : false}
                    value={this.state.last_name}
                    onChangeText={(value) =>
                      this.setState({ last_name: value, lnSection: true })
                    }
                    ref={(input) => {
                      this.last_name = input;
                    }}
                  />
                ) : (
                  <Text style={styles.stylefiledText}>
                    {this.state.last_name}
                  </Text>
                )}

                <View style={styles.rightView}>
                  <Text style={styles.righttext}>Last Name</Text>
                </View>
              </View>
              <View style={styles.doubleImaageView}>
                {this.state.selectedData.isImport == false ? (
                  this.state.last_name !== "" ? (
                    <Image source={reset} style={styles.smallIcon} />
                  ) : null
                ) : this.state.last_name !== "" ? (
                  <Image source={edit} style={styles.smallIcon} />
                ) : null}

                {this.state.selectedData.serverLNUpdate == true ? (
                  <Image source={edit} style={styles.smallIcon} />
                ) : null}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  renderMobile1() {
    return (
      <View>
        {this.state.numbs.map((item) => {
          return (
            <View style={styles.searchSection}>
              <Text>{item.number}</Text>
            </View>
          );
        })}
      </View>
    );
  }
  onPressKey = () => {
    this.setState({ isMobileSection: true });
    if (this.state.isMobileSection == true) {
      this.textInputRef.focus();
    }
  };
  show = (index) => {
    var data = this.state.textInput;
    data.map((item, i) => {
      data[i].show = false;
    });
    data[index].show = true;
    this.setState({ textInput: data });
  };
  selectLabel = (index, label) => {
    var data = this.state.textInput;
    data[index].label = label;
    data[index].show = false;
    this.setState({ textInput: data });
  };
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
  addValues = (number, index) => {
    this.setState({ number1: number });
    //  this.state.number[key].number = phone;
    this.setState({ number: this.state.number });
    let dataArray = this.state.inputData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.number = number;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        inputData: dataArray,
      });
    } else {
      dataArray.push({ number, index });
      this.setState({
        inputData: dataArray,
      });
    }
  };
  renderMobile() {
    const { mobileLabelList } = this.state;
    return (
      <View style={{ marginTop: Metrics.baseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              source={call}
              style={[styles.innerStyle, { marginTop: Metrics.xsmallMargin }]}
            />
          </View>
          <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "column" }}>
              {this.state.textInput.map((item, index) => {
                return (
                  <View>
                    {this.state.status ? (
                      <View style={{ flexDirection: "row" }}>
                        <View style={styles.searchSection}>
                          {this.state.isMobileSection ? (
                            <TouchableOpacity
                              style={{ flexDirection: "column" }}
                            >
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
                                value={this.state.number1}
                              />
                            </TouchableOpacity>
                          ) : (
                            <TouchableOpacity onPress={this.onPressKey}>
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
                        <View style={styles.doubleImaageView}>
                          {this.state.selectedData.isImport == false ? (
                            this.state.number1 !== "" ? (
                              <Image source={reset} style={styles.smallIcon} />
                            ) : null
                          ) : this.state.number1 !== "" ? (
                            <Image source={edit} style={styles.smallIcon} />
                          ) : null}

                          {this.state.selectedData.serverNumberUpdate ==
                          true ? (
                            <Image source={edit} style={styles.smallIcon} />
                          ) : null}
                        </View>
                      </View>
                    ) : (
                      <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={styles.searchSection}>
                          <Text style={styles.stylefiledText}>
                            {this.state.number1}
                          </Text>
                          <View style={styles.rightView}>
                            <Text style={styles.righttext}>
                              Personal(Landline)
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <View style={styles.doubleImaageView}>
                          {this.state.selectedData.isImport == false ? (
                            this.state.number1 !== "" ? (
                              <Image source={reset} style={styles.smallIcon} />
                            ) : null
                          ) : this.state.number1 !== "" ? (
                            <Image source={edit} style={styles.smallIcon} />
                          ) : null}

                          {this.state.selectedData.serverNumberUpdate ==
                          true ? (
                            <Image source={edit} style={styles.smallIcon} />
                          ) : null}
                        </View>
                      </View>
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
  showLoader() {
    if (this.state.isLoading == true) {
      return <Spinner />;
    }
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
      <View style={{ marginTop: Metrics.baseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={email} style={styles.innerStyle} />
          </View>
          <View style={{ flexDirection: "column" }}>
            {this.state.emailInput.map((item, index) => {
              return (
                <View>
                  {this.state.status ? (
                    <View style={{ flexDirection: "row" }}>
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
                            />
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity onPress={this.onPressEmail}>
                            <Text style={styles.stylefiledText}>
                              E-mail Address
                            </Text>
                          </TouchableOpacity>
                        )}
                        <TouchableOpacity
                          style={styles.modalBtn}
                          onPress={() => this.showEmail(index)}
                        >
                          <Text style={styles.selectTypeText}>
                            {item.label}
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.doubleImaageView}>
                        {this.state.selectedData.isImport == false ? (
                          this.state.email !== "" ? (
                            <Image source={reset} style={styles.smallIcon} />
                          ) : null
                        ) : this.state.email !== "" ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}

                        {this.state.selectedData.serverEmailUpdate == true ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}
                      </View>
                    </View>
                  ) : (
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity style={styles.searchSection}>
                        <Text style={styles.stylefiledText}>
                          {this.state.email}
                        </Text>
                        <View style={styles.rightView}>
                          <Text style={styles.righttext}>Work</Text>
                        </View>
                      </TouchableOpacity>
                      <View style={styles.doubleImaageView}>
                        {this.state.selectedData.isImport == false ? (
                          this.state.email !== "" ? (
                            <Image source={reset} style={styles.smallIcon} />
                          ) : null
                        ) : this.state.email !== "" ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}

                        {this.state.selectedData.serverEmailUpdate == true ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}
                      </View>
                    </View>
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
                    <View style={{ flexDirection: "row" }}>
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
                            />
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity onPress={this.onPressAddress}>
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
                      <View style={styles.doubleImaageView}>
                        {this.state.selectedData.isImport == false ? (
                          this.state.address !== "" ? (
                            <Image source={reset} style={styles.smallIcon} />
                          ) : null
                        ) : this.state.address !== "" ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}

                        {this.state.selectedData.serverAddressUpdate == true ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}
                      </View>
                    </View>
                  ) : (
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity style={styles.searchSection}>
                        <Text style={styles.stylefiledText}>
                          {this.state.address}
                        </Text>
                        <View style={styles.rightView}>
                          <Text style={styles.righttext}>Work</Text>
                        </View>
                      </TouchableOpacity>
                      <View style={styles.doubleImaageView}>
                        {this.state.selectedData.isImport == false ? (
                          this.state.address !== "" ? (
                            <Image source={reset} style={styles.smallIcon} />
                          ) : null
                        ) : this.state.address !== "" ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}

                        {this.state.selectedData.serverAddressUpdate == true ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}
                      </View>
                    </View>
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
                    <View style={{ flexDirection: "row" }}>
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
                            />
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity onPress={this.onPressMessenger}>
                            <Text style={styles.stylefiledText}>
                              Messenger Account
                            </Text>
                          </TouchableOpacity>
                        )}
                        <TouchableOpacity
                          style={styles.modalBtn}
                          onPress={() => this.showMessenger(index)}
                        >
                          <Text style={styles.selectTypeText}>
                            {item.label}
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.doubleImaageView}>
                        {this.state.selectedData.isImport == false ? (
                          this.state.messenger !== "" ? (
                            <Image source={reset} style={styles.smallIcon} />
                          ) : null
                        ) : this.state.messenger !== "" ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}

                        {this.state.selectedData.serverMessengerUpdate ==
                        true ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}
                      </View>
                    </View>
                  ) : (
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity style={styles.searchSection}>
                        <Text style={styles.stylefiledText}>
                          {this.state.messenger}
                        </Text>
                        <View style={styles.rightView}>
                          <Text style={styles.righttext}>Messenger</Text>
                        </View>
                      </TouchableOpacity>
                      <View style={styles.doubleImaageView}>
                        {this.state.selectedData.isImport == false ? (
                          this.state.messenger !== "" ? (
                            <Image source={reset} style={styles.smallIcon} />
                          ) : null
                        ) : this.state.messenger !== "" ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}

                        {this.state.selectedData.serverMessengerUpdate ==
                        true ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}
                      </View>
                    </View>
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
                    <View style={{ flexDirection: "row" }}>
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
                            />
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity onPress={this.onPressSocialMedia}>
                            <Text style={styles.stylefiledText}>
                              Social Media Account
                            </Text>
                          </TouchableOpacity>
                        )}
                        <TouchableOpacity
                          style={styles.modalBtn}
                          onPress={() => this.showSocialMedia(index)}
                        >
                          <Text style={styles.selectTypeText}>
                            {item.label}
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.doubleImaageView}>
                        {this.state.selectedData.isImport == false ? (
                          this.state.socialMedia !== "" ? (
                            <Image source={reset} style={styles.smallIcon} />
                          ) : null
                        ) : this.state.socialMedia !== "" ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}

                        {this.state.selectedData.serverSocialUpdate == true ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}
                      </View>
                    </View>
                  ) : (
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity style={styles.searchSection}>
                        <Text style={styles.stylefiledText}>
                          {this.state.socialMedia}
                        </Text>
                        <View style={styles.rightView}>
                          <Text style={styles.righttext}>Social Media</Text>
                        </View>
                      </TouchableOpacity>
                      <View style={styles.doubleImaageView}>
                        {this.state.selectedData.isImport == false ? (
                          this.state.socialMedia !== "" ? (
                            <Image source={reset} style={styles.smallIcon} />
                          ) : null
                        ) : this.state.socialMedia !== "" ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}

                        {this.state.selectedData.serverSocialUpdate == true ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}
                      </View>
                    </View>
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
                    <View style={{ flexDirection: "row" }}>
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
                            />
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity onPress={this.onPressWebsite}>
                            <Text style={styles.stylefiledText}>Website</Text>
                          </TouchableOpacity>
                        )}
                        <TouchableOpacity
                          style={styles.modalBtn}
                          onPress={() => this.showWebsite(index)}
                        >
                          <Text style={styles.selectTypeText}>
                            {item.label}
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.doubleImaageView}>
                        {this.state.selectedData.isImport == false ? (
                          this.state.website !== "" ? (
                            <Image source={reset} style={styles.smallIcon} />
                          ) : null
                        ) : this.state.website !== "" ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}

                        {this.state.selectedData.serverWebsiteUpdate == true ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}
                      </View>
                    </View>
                  ) : (
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity style={styles.searchSection}>
                        <Text style={styles.stylefiledText}>
                          {" "}
                          {this.state.website}
                        </Text>
                        <View style={styles.rightView}>
                          <Text style={styles.righttext}>Website</Text>
                        </View>
                      </TouchableOpacity>
                      <View style={styles.doubleImaageView}>
                        {this.state.selectedData.isImport == false ? (
                          this.state.website !== "" ? (
                            <Image source={reset} style={styles.smallIcon} />
                          ) : null
                        ) : this.state.website !== "" ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}

                        {this.state.selectedData.serverWebsiteUpdate == true ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}
                      </View>
                    </View>
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
    var fomateDate = moment(date).format("MMMM, Do YYYY");
    var data = this.state.dateInput2;
    data[index].date = fomateDate;
    data[index].show = false;
    this.setState({ dateInput2: data, dateSection: true });
    console.log("datteee----------->", this.state.dateInput2);
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
                  <View style={{ flexDirection: "row" }}>
                    <View style={styles.searchSection}>
                      {this.state.status ? (
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          {this.state.dateInput2.map((item, index) => {
                            return (
                              <View>
                                <TouchableOpacity
                                  style={{ width: width * 0.45 }}
                                  onPress={() => this.showDatePicker(index)}
                                >
                                  {this.state.date == "" ? (
                                    <Text
                                      style={[
                                        styles.stylefiledText,
                                        { width: width * 0.45 },
                                      ]}
                                    >
                                      Date
                                    </Text>
                                  ) : (
                                    <Text
                                      style={[
                                        styles.stylefiledText,
                                        { width: width * 0.45 },
                                      ]}
                                    >
                                      {this.state.date}
                                    </Text>
                                  )}
                                </TouchableOpacity>

                                {item.showDate && (
                                  <View>
                                    <DateTimePickerModal
                                      isVisible={this.state.isVisible}
                                      onConfirm={(date) =>
                                        this.onChangeDate(
                                          date,
                                          index,
                                          item.date
                                        )
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
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                          <Text
                            style={[
                              styles.stylefiledText,
                              { width: width * 0.45 },
                            ]}
                          >
                            {this.state.date}
                          </Text>
                          <View style={styles.rightView}>
                            <Text style={styles.righttext}>Date</Text>
                          </View>
                        </TouchableOpacity>
                      )}
                      <View
                        style={[
                          styles.doubleImaageView,
                          { marginLeft: Metrics.SmallMargin },
                        ]}
                      >
                        {this.state.selectedData.isImport == false ? (
                          this.state.date !== "" ? (
                            <Image source={reset} style={styles.smallIcon} />
                          ) : null
                        ) : this.state.date !== "" ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}

                        {this.state.selectedData.serverdateUpdate == true ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}
                      </View>
                    </View>
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
                    <View style={{ flexDirection: "row" }}>
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
                                this.messengerFocus = ref;
                              }}
                              autoFocus={true}
                              multiline={true}
                              value={this.state.note}
                            />
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity onPress={this.onPressNote}>
                            <Text style={styles.stylefiledText}>Note</Text>
                          </TouchableOpacity>
                        )}
                        <View style={[styles.rightView, {}]}>
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
                      <View style={styles.doubleImaageView}>
                        {this.state.selectedData.isImport == false ? (
                          this.state.note !== "" ? (
                            <Image source={reset} style={styles.smallIcon} />
                          ) : null
                        ) : this.state.note !== "" ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}

                        {this.state.selectedData.serverNoteUpdate == true ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}
                      </View>
                    </View>
                  ) : (
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity style={styles.searchSection}>
                        <Text style={styles.stylefiledText}>
                          {this.state.note}
                        </Text>
                        <View style={styles.rightView}>
                          <Text style={styles.righttext}>Note</Text>
                        </View>
                      </TouchableOpacity>
                      <View style={styles.doubleImaageView}>
                        {this.state.selectedData.isImport == false ? (
                          this.state.note !== "" ? (
                            <Image source={reset} style={styles.smallIcon} />
                          ) : null
                        ) : this.state.note !== "" ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}

                        {this.state.selectedData.serverNoteUpdate == true ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}
                      </View>
                    </View>
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
    this.setState({ company: company });
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
    this.setState({ jobTitle: jobTitle });
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
    this.setState({ sunday: sunday });
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

  renderCompany() {
    return (
      <View style={{ marginTop: Metrics.baseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={handshake} style={styles.innerStyle} />
          </View>
          <View style={{ flexDirection: "column" }}>
            {this.state.companyInput.map((item, index) => {
              return (
                <View>
                  <View style={{ flexDirection: "row" }}>
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
                              value={this.state.company}
                            />
                          ) : (
                            <Text style={styles.stylefiledText}>
                              {this.state.company}
                            </Text>
                          )}
                        </View>
                        <View style={styles.addressRightView}>
                          <Text style={styles.compnyRightText}>Company</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.doubleImaageView}>
                      {this.state.selectedData.isImport == false ? (
                        this.state.company !== "" ? (
                          <Image source={reset} style={styles.smallIcon} />
                        ) : null
                      ) : this.state.company !== "" ? (
                        <Image source={edit} style={styles.smallIcon} />
                      ) : null}

                      {this.state.selectedData.serverCompanyUpdate == true ? (
                        <Image source={edit} style={styles.smallIcon} />
                      ) : null}
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={styles.searchSection}>
                      <TouchableOpacity style={{ flexDirection: "row" }}>
                        <View>
                          {this.state.status == true ? (
                            <TextInput
                              placeholder=""
                              style={styles.stylefiledText}
                              placeholderTextColor={COLORS.main_text_color}
                              value={this.state.jobTitle}
                              editable={this.state.status ? true : false}
                              onChangeText={(jobTitle) =>
                                this.onChangeJobTitle(jobTitle, index)
                              }
                            />
                          ) : (
                            <Text style={styles.stylefiledText}>
                              {this.state.jobTitle}
                            </Text>
                          )}
                        </View>
                        <View style={styles.addressRightView}>
                          <Text style={styles.compnyRightText}>Job Title</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.doubleImaageView}>
                      {this.state.selectedData.isImport == false ? (
                        this.state.jobTitle !== "" ? (
                          <Image source={reset} style={styles.smallIcon} />
                        ) : null
                      ) : this.state.jobTitle !== "" ? (
                        <Image source={edit} style={styles.smallIcon} />
                      ) : null}

                      {this.state.selectedData.serverJobTitleUpdate == true ? (
                        <Image source={edit} style={styles.smallIcon} />
                      ) : null}
                    </View>
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
                                value={this.state.MondayTo}
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
                                value={this.state.sunday}
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
                      <View
                        style={[
                          styles.doubleImaageView,
                          { marginLeft: Metrics.SmallMargin },
                        ]}
                      >
                        {this.state.selectedData.isImport == false ? (
                          this.state.Monday !== "" ? (
                            <Image source={reset} style={styles.smallIcon} />
                          ) : null
                        ) : this.state.Monday !== "" ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}

                        {this.state.selectedData.serverWorkHoursUpdate ==
                        true ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}
                      </View>
                    </View>
                  )}
                  {this.state.isCompanySec == true ? null : this.state
                      .status ? (
                    <View style={{ flexDirection: "row" }}>
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
                      <View
                        style={[
                          styles.doubleImaageView,
                          { marginLeft: Metrics.SmallMargin },
                        ]}
                      >
                        {this.state.selectedData.isImport == false ? (
                          this.state.Monday !== "" ? (
                            <Image source={reset} style={styles.smallIcon} />
                          ) : null
                        ) : this.state.Monday !== "" ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}

                        {this.state.selectedData.serverWorkHoursUpdate ==
                        true ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}
                      </View>
                    </View>
                  ) : (
                    <View style={{ flexDirection: "row" }}>
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
                                  width: width * 0.13,
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
                                  width: width * 0.13,
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
                                  width: width * 0.13,
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
                                  width: width * 0.13,
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
                                  width: width * 0.13,
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
                                  width: width * 0.13,
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
                                  width: width * 0.13,
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

                      <View
                        style={[
                          styles.doubleImaageView,
                          { marginLeft: Metrics.SmallMargin },
                        ]}
                      >
                        {this.state.selectedData.isImport == false ? (
                          this.state.Monday !== "" ? (
                            <Image source={reset} style={styles.smallIcon} />
                          ) : null
                        ) : this.state.Monday !== "" ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}

                        {this.state.selectedData.serverWorkHoursUpdate ==
                        true ? (
                          <Image source={edit} style={styles.smallIcon} />
                        ) : null}
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
  ShowHideTextComponentView = () => {
    const {
      inputData,
      doc_id,
      emailData,
      addressData,
      messengerData,
      socialMediaData,
      websiteData,
      dateInput2,
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
      last_name,
      first_name,
      selectedData,
    } = this.state;
    const { username } = this.props;
    if (last_name == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({
          last_name: last_name,
          isLNUpdate: true,
        });
    }
    if (first_name == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({
          first_name: first_name,
          isFNUpdate: true,
        });
    }
    if (inputData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({
          number: inputData,
          number1: inputData[0].number,
          isNumberUpdate: true,
        });
    }
    if (emailData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({
          email: emailData,
          email1: emailData[0].email,
          isEmailUpdate: true,
        });
    }
    if (addressData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({
          address: addressData,
          address1: addressData[0].address,
          isAddressUpdate: true,
        });
    }
    if (emailData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({
          address: addressData,
          address1: addressData[0].address,
          isAddressUpdate: true,
        });
    }
    if (messengerData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({
          messenger: messengerData,
          messenger1: messengerData[0].messenger,
          isMessengerUpdate: true,
        });
    }
    if (socialMediaData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({
          social_media: socialMediaData,
          social_media1: socialMediaData[0].social,
          isMessengerUpdate: true,
        });
    }

    if (websiteData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ website: websiteData, isWebsiteUpdate: true });
    }

    if (dateInput2 == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ date: dateInput2, isdateUpdate: true });
    }

    if (noteData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({
          note1: noteData,
          note: noteData[0].note,
          isNoteUpdate: true,
        });
    }

    if (companyData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({
          company: companyData[0].company,
          company1: companyData,
          isCompanyUpdate: true,
        });
    }
    if (jobTitleData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({
          jobTitle: jobTitleData[0].jobTitle,
          jobTitle1: jobTitleData,
          isJobTitleUpdate: true,
        });
    }
    if (mondayData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ monday: mondayData, isWorkHoursUpdate: true });
    }
    if (mondayTOData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ mondayTo: mondayTOData, isWorkHoursUpdate: true });
    }
    if (tuesdayData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ tuesday: tuesdayData, isWorkHoursUpdate: true });
    }
    if (tuesdayTOData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ tuesdayTo: tuesdayTOData, isWorkHoursUpdate: true });
    }
    if (wednesdayData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ wednesday: wednesdayData, isWorkHoursUpdate: true });
    }
    if (wednesdayTOData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ wednesdayTo: wednesdayTOData, isWorkHoursUpdate: true });
    }
    if (thursdayData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ thursday: thursdayData, isWorkHoursUpdate: true });
    }
    if (thursdayTOData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ thursdayTo: thursdayTOData, isWorkHoursUpdate: true });
    }
    if (fridayData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ friday: fridayData, isWorkHoursUpdate: true });
    }
    if (fridayTOData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ fridayTo: fridayTOData, isWorkHoursUpdate: true });
    }
    if (saturdayData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ saturday: saturdayData, isWorkHoursUpdate: true });
    }
    if (saturdayTOData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ saturdayTo: saturdayTOData, isWorkHoursUpdate: true });
    }
    if (sundayData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ sunday: sundayData, isWorkHoursUpdate: true });
    }
    if (sundayTOData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ sundayTo: sundayTOData, isWorkHoursUpdate: true });
    }
  };
  severDataUpdate = () => {
    const {
      inputData,
      doc_id,
      emailData,
      addressData,
      messengerData,
      socialMediaData,
      websiteData,
      dateInput2,
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
      last_name,
      first_name,
      selectedData,
      fnSection,
      lnSection,
      dateSection,
    } = this.state;
    const { username } = this.props;
    this.setState({ isLoading: true });
    console.log("fnnnn---->", fnSection);
    firebase
      .firestore()
      .collection("user")
      .doc(username)
      .collection("contacts")
      .doc(doc_id)
      .update({ serverDatapdate: true });
    if (lnSection == true) {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({
          last_name: last_name,
          serverLNUpdate: true,
        });
    }

    if (fnSection == true) {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({
          first_name: first_name,
          serverFNUpdate: true,
        });
    }
    if (inputData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({
          number: inputData,
          number1: inputData[0].number,
          serverNumberUpdate: true,
        });
    }
    if (emailData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({
          email: emailData,
          email1: emailData[0].email,
          serverEmailUpdate: true,
        });
    }
    if (addressData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({
          address: addressData,
          address1: addressData[0].address,
          serverAddressUpdate: true,
        });
    }
    // if (emailData == "") {
    // } else {
    //   firebase
    //     .firestore()
    //     .collection("user")
    //     .doc(username)
    //     .collection("contacts")
    //     .doc(doc_id)
    //     .update({
    //       address: addressData,
    //       address1: addressData[0].address,
    //       serverAddressUpdate: true,
    //     });
    // }
    if (messengerData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({
          messenger: messengerData,
          messenger1: messengerData[0].messenger,
          serverMessengerUpdate: true,
        });
    }
    if (socialMediaData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({
          social_media: socialMediaData,
          social_media1: socialMediaData[0].social,
          serverSocialUpdate: true,
        });
    }

    if (websiteData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ website: websiteData, serverWebsiteUpdate: true });
    }

    if (dateSection == "") {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ date: dateInput2, serverdateUpdate: true });
    }

    if (noteData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({
          note1: noteData,
          note: noteData[0].note,
          serverNoteUpdate: true,
        });
    }

    if (companyData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({
          company: companyData[0].company,
          company1: companyData,
          serverCompanyUpdate: true,
        });
    }
    if (jobTitleData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({
          jobTitle: jobTitleData[0].jobTitle,
          jobTitle1: jobTitleData,
          serverJobTitleUpdate: true,
        });
    }
    if (mondayData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ monday: mondayData, serverWorkHoursUpdate: true });
    }
    if (mondayTOData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ mondayTo: mondayTOData, serverWorkHoursUpdate: true });
    }
    if (tuesdayData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ tuesday: tuesdayData, serverWorkHoursUpdate: true });
    }
    if (tuesdayTOData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ tuesdayTo: tuesdayTOData, serverWorkHoursUpdate: true });
    }
    if (wednesdayData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ wednesday: wednesdayData, serverWorkHoursUpdate: true });
    }
    if (wednesdayTOData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ wednesdayTo: wednesdayTOData, serverWorkHoursUpdate: true });
    }
    if (thursdayData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ thursday: thursdayData, serverWorkHoursUpdate: true });
    }
    if (thursdayTOData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ thursdayTo: thursdayTOData, serverWorkHoursUpdate: true });
    }
    if (fridayData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ friday: fridayData, serverWorkHoursUpdate: true });
    }
    if (fridayTOData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ fridayTo: fridayTOData, serverWorkHoursUpdate: true });
    }
    if (saturdayData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ saturday: saturdayData, serverWorkHoursUpdate: true });
    }
    if (saturdayTOData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ saturdayTo: saturdayTOData, serverWorkHoursUpdate: true });
    }
    if (sundayData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ sunday: sundayData, serverWorkHoursUpdate: true });
    }
    if (sundayTOData == "") {
    } else {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .collection("contacts")
        .doc(doc_id)
        .update({ sundayTo: sundayTOData, serverWorkHoursUpdate: true });
    }
    this.showDateAfterUpdate();
  };
  finalSubmit = async () => {
    if (this.state.status == false) {
      this.setState({ status: true });
    } else {
      this.setState({ status: false });

      if (this.state.selectedData.isImport == false) {
        this.severDataUpdate();
      } else {
        this.ShowHideTextComponentView();
      }
    }
  };
  renderContactLast() {
    return (
      <View
        style={{
          width: width * 0.9,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          height: height * 0.06,
        }}
      >
        <TouchableHighlight
          underlayColor="transparent"
          style={styles.saveView}
          onPress={this.finalSubmit}
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
            <View style={{ height: height }}>
              {this.renderHeader()}
              <ScrollView nestedScrollEnabled={true}>
                <View>
                  <View style={{ width: width, alignItems: "center" }}>
                    {this.renderPhoto()}
                  </View>
                  <View
                    style={{
                      alignItems: "flex-start",
                      marginLeft: Metrics.baseMargin,
                      marginTop: Metrics.baseMargin,
                    }}
                  >
                    <Text>{this.state.u_name}</Text>
                  </View>

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
              {this.renderContactLast()}
            </View>
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

  background-color: ${(props) => props.theme.backColor};
`;
