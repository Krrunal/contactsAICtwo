import { ActionSheet, Root } from "native-base";
import {
  BackHandler,
  Dimensions,
  FlatList,
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component, useState } from "react";
import { Title, connectStyle } from "native-base";
import styled, { ThemeProvider } from "styled-components/native";

import AsyncStorage from "@react-native-community/async-storage";
import { COLORS } from "../theme/Colors";
import Constants from "../../action/Constants";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FA5Style } from "react-native-vector-icons/FontAwesome5";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Icon from "react-native-vector-icons/FontAwesome";
import Metrics from "../theme/Metrics";
import { Spinner } from "../../components/Spinner";
import _ from "lodash";
import calender from "../../assets/images/calender.png";
import call from "../../assets/images/call.png";
import { connect } from "react-redux";
import edit from "../../assets/images/edit.png";
import email from "../../assets/images/email.png";
import firebase from "../../services/FirebaseDatabase/db";
import handshake from "../../assets/images/handshake.png";
import home from "../../assets/images/home.png";
import innerimg from "../../assets/images/innerimg.png";
import instagram from "../../assets/images/instagram.png";
import leftArrow from "../../assets/images/leftArrow.png";
import message from "../../assets/images/message.png";
import moment from "moment";
import note from "../../assets/images/note.png";
import person from "../../assets/images/person.png";
import plus from "../../assets/images/plus.png";
import reset from "../../assets/images/resetBlack.png";
import rightArrow from "../../assets/images/rightArrow.png";
import rigthLogo from "../../assets/icons/contact.png";
import sideBar from "../../assets/images/sideBAR.png";
import style from "../../components/StatusBar/style.js";
import styles from "./style.js";
import website from "../../assets/images/website.png";

var { width, height } = Dimensions.get("screen");
class searchContact extends Component {
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
      status: false,
      tz: [],
      tzs: "",

      //
      contact: [],
      firstName: [],
      contacts: "",
      isLoading: false,
      shortcontacts: "",
      filteredShortcontacts: [],
      nameContacts: "",
      query: "",
      searchText: "",
      serachSection: false,
      result: "",
      workViewOpen: false,
      itemCompany: "",
      n1: [],
      n2: [],
      emailN1: [],
      emailN2: [],
      //data
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

      First_name: "",
      Last_name: "",
      Number: "",
      Email: "",
      Number2: "",
      Email2: "",
      Address: "",
      Address2: "",
      Messenger: "",
      SocialMedia: "",
      Website: "",
      fomateDate: "",
      Note: "",
      Company: "",
      Monday: "",
      MondayTo: "",
      Tuesday: "",
      TuesdayTo: "",
      Wednesday: "",
      WednesdayTo: "",
      Thursday: "",
      ThursdayTo: "",
      Firday: "",
      FirdayTo: "",
      Saturday: "",
      SaturdayTo: "",
      Sunday: "",
      SundayTo: "",
      contactInfoSection: false,
      u_id: "",
      s_label_name: "",
      selectedData: "",
      doc_id: "",

      isLNUpdate: false,
      isFnUpdate: false,
      isNumberUpdate: false,
      isNumber2Update: false,
      isEmailUpdate: false,
      isEmail2Update: false,
      isAddressUpdate: false,
      isAddress2Update: false,
      isMessengerUpdate: false,
      isSocialMediaUpdate: false,
      isWebsiteUpdate: false,
      isdateUpdate: false,
      isNoteUpdate: false,
      isCompanyUpdate: false,
      isJobTitleUpdate: false,
      isWorkHoursUpdate: false,
      forKey: "",
      //image section
      leftSec: false,
      imgSec1: true,
      imgSec2: false,
      imgSec3: false,
      rightSec: false,
      u_name: "",
    };
  }

  handleBackButton = () => {
    if (this.props.isLogedIn == false) {
    } else {
      BackHandler.exitApp();
      return true;
    }
  };
  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", async () => {
      this.setState({ isLoading: true });
      this.setState({ contact: [] });
      this.setState({ contacts: "" });
      if (this.props.contactChange.mode === "first") {
        this.contactList();
        console.log("first");
      } else {
        this.contactListFirst();
        console.log("Last");
      }
    });
  }

  async contactList() {
    const { username } = this.props;
    firebase
      .firestore()
      .collection("user")
      .doc(username)
      .collection("contacts")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          var item = doc._data;
          this.state.contact.push(item);
        });
        this.setState({ contacts: this.state.contact });
        const sort = this.state.contacts.sort(function (a, b) {
          if (a.last_name.toLowerCase() < b.last_name.toLowerCase()) return -1;
          if (a.last_name.toLowerCase() > b.last_name.toLowerCase()) return 1;
          return 0;
        });
        this.setState({ shortcontacts: sort, data: sort, isLoading: false });
      });
  }
  async contactListFirst() {
    const { username } = this.props;
    firebase
      .firestore()
      .collection("user")
      .doc(username)
      .collection("contacts")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          // console.log("first_name----->", doc);
          var item = doc._data;
          this.state.contact.push(item);
          // console.log("first_name----->", item);
        });
        this.setState({ contacts: this.state.contact });
        const sort = this.state.contacts.sort(function (a, b) {
          if (a.first_name.toLowerCase() < b.first_name.toLowerCase())
            return -1;
          if (a.first_name.toLowerCase() > b.first_name.toLowerCase()) return 1;
          return 0;
        });
        this.setState({ shortcontacts: sort, data: sort, isLoading: false });
      });
  }

  handleSearch = (text) => {
    const { data, shortcontacts, itemCompany } = this.state;

    const shortData = data.filter(
      (obj) =>
        obj[text?.toLowerCase() ?? "en"]?.indexOf(text) > -1 ||
        obj.first_name.indexOf(text) > -1 ||
        obj.nick_name.indexOf(text) > -1 ||
        obj.last_name.indexOf(text) > -1 ||
        obj.middle_name.indexOf(text) > -1 ||
        obj.company.indexOf(text) > -1 ||
        obj.website.indexOf(text) > -1 ||
        obj.address.indexOf(text) > -1 ||
        obj.r_label_name.indexOf(text) > -1 ||
        obj.s_label_name.indexOf(text) > -1 ||
        obj.jobTitle.indexOf(text) > -1 ||
        obj.social_media.indexOf(text) > -1 ||
        obj.note.indexOf(text) > -1
    );
    this.setState({ shortcontacts: shortData, searchText: text });
  };
  serachFocus = () => {
    this.setState({ serachSection: true });
    if (this.state.serachSection == true) {
      this.searchText.focus();
    }
  };
  renderHeader() {
    return (
      <View style={{ alignItems: "center" }}>
        <View style={styles.blueView}>
          <View style={{ width: width * 0.9, flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.sideBarView}
              onPress={() => this.props.navigation.toggleDrawer()}
            >
              <Image source={sideBar} style={styles.sidebarStyle} />
            </TouchableOpacity>
            <View style={{ justifyContent: "center" }}>
              <View style={styles.sidebarViewCenter}>
                {this.state.serachSection ? (
                  <View style={{ height: width * 0.17 }}>
                    <Text style={styles.searchTextInput}>Search Contacts</Text>
                    <TextInput
                      placeholder=""
                      placeholderTextColor={COLORS.main_sky_blue}
                      style={
                        this.state.serachSection == true
                          ? styles.placholderStyle
                          : styles.placholderStyle2
                      }
                      onChangeText={(text) => {
                        this.handleSearch(text);
                      }}
                      value={this.state.searchText}
                      ref={(ref) => {
                        this.searchText = ref;
                      }}
                      autoFocus={true}
                      autoCapitalize={"none"}
                    />
                  </View>
                ) : (
                  <TouchableOpacity onPress={this.serachFocus} style={{}}>
                    <Text style={styles.serachText}>Search Contacts</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>

            <View style={styles.sidebarViewRight}>
              <Image source={rigthLogo} style={styles.sidebarStyleRight} />
            </View>
          </View>
        </View>
      </View>
    );
  }
  labelList = () => {
    this.setState({ isLoading: true }, async () => {
      const baseurl = Constants.baseurl;
      fetch(baseurl + "getlabel")
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          var arr = responseJson.data.map((item, index) => {
            console.log("responseJson--->", item.relation);
            console.log(" slabel  ----->", this.state.s_label_name);
            if (item.relation == this.state.s_label_name) {
              this.setState({ s_label_id: item.id });
              console.log("responseJson label--->", this.state.s_label_id);
              this.checkSettings();
            } else {
              console.log("else--->", this.state.s_label_id);
              // this.setState({ isLoading: false });
            }
          });
        })
        .catch((error) => {
          console.error(error);
          this.setState({ isLoading: false });
        });
    });
  };
  checkSettings = () => {
    // console.log("labelList ----->",this.state.s_label_name);
    // console.log("labelList ----->",this.state.s_label_id);
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

        let fields = this.state.selectedData;
        console.log("item---->", item);
        if (responseJson.status == true) {
          console.log("settings---->", fields);
          this.setState({ u_name: fields.u_name });
          if (item.profile_image == 1) {
            this.setState({ profile_image: fields.profile_image });
          } else {
            this.setState({ profile_image: "" });
          }
          if (item.profile_image2 == 1) {
            this.setState({ profile_image2: fields.profile_image2 });
          } else {
            this.setState({ profile_image2: "" });
          }
          if (fields.profile_image2 !== "") {
            this.setState({ rightSec: true });
          }
          if (item.profile_image3 == 1) {
            this.setState({ profile_image3: fields.profile_image3 });
          } else {
            this.setState({ profile_image3: "" });
          }
          if (item.first_name == 1) {
            this.setState({ first_name: fields.first_name });
          } else {
            this.setState({ first_name: "" });
          }
          if (item.last_name == 1) {
            this.setState({ last_name: fields.last_name });
          } else {
            this.setState({ last_name: "" });
          }
          if (item.phone_number == 1) {
            this.setState({ number: fields.number1 });
          } else {
            this.setState({ number: "" });
          }
          if (item.address == 1) {
            this.setState({ address: fields.address1 });
          } else {
            this.setState({ address: "" });
          }
          if (item.email == 1) {
            this.setState({ email: fields.email1 });
          } else {
            this.setState({ email: "" });
          }
          if (item.messenger == 1) {
            this.setState({ messenger: fields.messenger1 });
          } else {
            this.setState({ messenger: "" });
          }
          if (item.Social_media == 1) {
            this.setState({ socialMedia: fields.social_media1 });
          } else {
            this.setState({ socialMedia: "" });
          }
          if (item.website == 1) {
            this.setState({ website: fields.website });
          } else {
            this.setState({ website: "" });
          }
          if (item.date == 1) {
            this.setState({ date: fields.date });
          } else {
            this.setState({ date: "" });
          }
          if (item.note == 1) {
            this.setState({ note: fields.note });
          } else {
            this.setState({ note: "" });
          }
          if (item.company == 1) {
            this.setState({ company: fields.company });
          } else {
            this.setState({ company: "" });
          }
          if (item.jobTitle == 1) {
            this.setState({ jobTitle: fields.jobTitle });
          } else {
            this.setState({ jobTitle: "" });
          }
          if (item.work_hours == 1) {
            this.setState({ jobTitle: fields.jobTitle });
            this.setState({ monday: fields.monday });
            this.setState({ mondayTo: fields.mondayTo });
            this.setState({ tuesday: fields.tuesday });
            this.setState({ tuesdayTo: fields.tuesdayTo });
            this.setState({ wednesday: fields.wednesday });
            this.setState({ wednesdayTo: fields.wednesdayTo });
            this.setState({ thursday: fields.thursday });
            this.setState({ thursdayTo: fields.thursdayTo });
            this.setState({ friday: fields.friday });
            this.setState({ fridayTo: fields.fridayTo });
            this.setState({ saturday: fields.saturday });
            this.setState({ saturdayTo: fields.saturdayTo });
            this.setState({ sunday: fields.sunday });
            this.setState({ sundayTo: fields.sundayTo });
          } else {
            this.setState({ jobTitle: "" });
            this.setState({ monday: "" });
            this.setState({ mondayTo: "" });
            this.setState({ tuesday: "" });
            this.setState({ tuesdayTo: "" });
            this.setState({ wednesday: "" });
            this.setState({ wednesdayTo: "" });
            this.setState({ thursday: "" });
            this.setState({ thursdayTo: "" });
            this.setState({ friday: "" });
            this.setState({ fridayTo: "" });
            this.setState({ saturday: "" });
            this.setState({ saturdayTo: "" });
            this.setState({ sunday: "" });
            this.setState({ sundayTo: "" });
          }
          this.setState({ contactInfoSection: true });
          this.setState({ isLoading: false });
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
    let fields = this.state.selectedData;
    this.setState({ profile_image: fields.profile_image });
    this.setState({ profile_image2: fields.profile_image2 });
    if (fields.profile_image2 !== "") {
      this.setState({ rightSec: true });
    }
    this.setState({ u_name: fields.u_name });
    this.setState({ profile_image3: fields.profile_image3 });
    this.setState({ first_name: fields.first_name });
    this.setState({ last_name: fields.last_name });
    this.setState({ number: fields.number1 });
    this.setState({ address: fields.address1 });
    this.setState({ email: fields.email1 });
    this.setState({ messenger: fields.messenger1 });
    this.setState({ socialMedia: fields.social_media1 });
    this.setState({ website: fields.website });
    this.setState({ date: fields.date });
    this.setState({ note: fields.note });
    this.setState({ company: fields.company });
    this.setState({ jobTitle: fields.jobTitle });
    this.setState({ monday: fields.monday });
    this.setState({ mondayTo: fields.mondayTo });
    this.setState({ tuesday: fields.tuesday });
    this.setState({ tuesdayTo: fields.tuesdayTo });
    this.setState({ wednesday: fields.wednesday });
    this.setState({ wednesdayTo: fields.wednesdayTo });
    this.setState({ thursday: fields.thursday });
    this.setState({ thursdayTo: fields.thursdayTo });
    this.setState({ friday: fields.friday });
    this.setState({ fridayTo: fields.fridayTo });
    this.setState({ saturday: fields.saturday });
    this.setState({ saturdayTo: fields.saturdayTo });
    this.setState({ sunday: fields.sunday });
    this.setState({ sundayTo: fields.sundayTo });

    this.setState({ contactInfoSection: true });
    this.setState({ isLoading: false });
  };
  apiCallForGetSettings = (key) => {
    const { shortcontacts, firstName } = this.state;
    const { username } = this.props;

    let selecte_name = shortcontacts[key].first_name;
    // console.log(" sjprtconatc ----->", shortcontacts);
    firebase
      .firestore()
      .collection("user")
      .doc(selecte_name)
      .get()
      .then((snap) => {
        this.setState({ u_id: snap._data.user_id });
      });
    firebase
      .firestore()
      .collection("user")
      .doc(username)
      .collection("contacts")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          let fields = doc._data;
          if (selecte_name == doc._data.u_name) {
            this.setState({ s_label_name: fields.s_label_name });
            console.log("doc._data.u_name ----->", this.state.s_label_name);
            this.labelList();
          }
        });
      });
  };
  mannuallyEntered = (key) => {
    let FN = this.state.selectedData;
    console.log("mannuallyEntered ----->", FN);
    this.setState({ profile_image: FN.profile_image });
    this.setState({ profile_image2: FN.profile_image2 });
    if (FN.profile_image2 !== "") {
      this.setState({ rightSec: true });
    }
    this.setState({ u_name: FN.u_name });
    this.setState({ profile_image3: FN.profile_image3 });
    this.setState({ first_name: FN.first_name });
    this.setState({ last_name: FN.last_name });
    this.setState({ contactInfoSection: true });
    this.setState({ number: FN.number1.number });
    this.setState({ number2: FN.number2 });
    this.setState({ email: FN.email1.email });
    this.setState({ email2: FN.email2 });
    this.setState({ address: FN.address1.address });
    this.setState({ address2: FN.address2 });
    this.setState({ messenger: FN.messenger1.messanger });
    this.setState({ socialMedia: FN.social_media1.socialMedia });
    this.setState({ website: FN.website.website });
    this.setState({ date: FN.date.date });
    this.setState({ note: FN.note.note });
    this.setState({ company: FN.company.company });
    this.setState({ jobTitle: FN.jobTitle.jobTitle });
    this.setState({ contactInfoSection: true });
    this.setState({ isLoading: false });
  };
  onFlatlist = async (key, first_name, last_name, user_name) => {
    console.log("onFlatlist ----->", key);
    this.setState({ isLoading: true, forKey: key });
    const { shortcontacts, firstName } = this.state;
    const { username } = this.props;
    let FN = shortcontacts[key];
    firstName.push(FN);
     this.setState({ selectedData : shortcontacts[key] })
    let selecte_name = shortcontacts[key].u_name;

    firebase
      .firestore()
      .collection("user")
      .doc(username)
      .collection("contacts")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          snap.docs.forEach((doc_id) => {
            if (selecte_name == doc._data.u_name) {
              snap.docs.forEach((doc_id) => {
                if (selecte_name == doc_id._data.u_name) {
                  this.setState({ doc_id: doc_id.id });
                  console.log("true ----->", doc_id.id);
                }
              });
            }
          });
        });
      });

    firebase
      .firestore()
      .collection("user")
      .doc(username)
      .collection("contacts")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          let fields = doc._data;
          if (doc._data.isImport == false) {
            if (selecte_name == doc._data.u_name) {
              snap.docs.forEach((doc_id) => {
                if (selecte_name == doc_id._data.u_name) {
                  this.setState({ doc_id: doc_id.id });
                }
              });
              this.setState({ selectedData: doc._data });
              // this.labelList();
              this.apiCallForGetSettings(key);
            }
          }
          if (FN.isManually == true) {
            console.log("mannuallyEntered ----->", FN);
            this.setState({ profile_image: FN.profile_image });
            this.setState({ profile_image2: FN.profile_image2 });
            if (FN.profile_image2 !== "") {
              this.setState({ rightSec: true });
            }
            this.setState({ u_name: FN.u_name });
            this.setState({ profile_image3: FN.profile_image3 });
            this.setState({ first_name: FN.first_name });
            this.setState({ last_name: FN.last_name });
            this.setState({ contactInfoSection: true });
            this.setState({ number: FN.number1.number });
            this.setState({ number2: FN.number2 });
            this.setState({ email: FN.email1.email });
            this.setState({ email2: FN.email2 });
            this.setState({ address: FN.address });
            this.setState({ address2: FN.address2 });
            this.setState({ messenger: FN.messenger });
            this.setState({ socialMedia: FN.social_media });
            this.setState({ website: FN.website });
            this.setState({ date: FN.date.date });
            this.setState({ note: FN.note });
            this.setState({ company: FN.company });
            this.setState({ jobTitle: FN.jobTitle });
            this.setState({ contactInfoSection: true });
            this.setState({ isLoading: false });
          }
          if (doc._data.isImport == true) {
            if (selecte_name == doc._data.u_name) {
              console.log("true ----->", fields);
              this.setState({ profile_image: fields.profile_image });
              this.setState({ profile_image2: fields.profile_image2 });
              this.setState({ profile_image3: fields.profile_image3 });
              this.setState({ first_name: fields.first_name });
              this.setState({ last_name: fields.last_name });
              this.setState({ u_name: fields.u_name });
              if (fields.number.length > 0) {
                this.setState({ number: fields.number[0].number });
              }
              this.setState({ address: fields.address });
              if (fields.email.length > 0) {
                this.setState({ email: fields.email[0].email });
              }
              this.setState({ messenger: fields.messenger1 });
              this.setState({ socialMedia: fields.social_media1 });
              this.setState({ website: fields.website });
              this.setState({ date: fields.date });
              this.setState({ note: fields.note });
              this.setState({ company: fields.company });
              this.setState({ jobTitle: fields.jobTitle });
              this.setState({ monday: fields.monday });
              this.setState({ mondayTo: fields.mondayTo });
              this.setState({ tuesday: fields.tuesday });
              this.setState({ tuesdayTo: fields.tuesdayTo });
              this.setState({ wednesday: fields.wednesday });
              this.setState({ wednesdayTo: fields.wednesdayTo });
              this.setState({ thursday: fields.thursday });
              this.setState({ thursdayTo: fields.thursdayTo });
              this.setState({ friday: fields.friday });
              this.setState({ fridayTo: fields.fridayTo });
              this.setState({ saturday: fields.saturday });
              this.setState({ saturdayTo: fields.saturdayTo });
              this.setState({ sunday: fields.sunday });
              this.setState({ sundayTo: fields.sundayTo });
              this.setState({ contactInfoSection: true });
              this.setState({ isLoading: false });
            }
          }
        });
      });
  };

  renderItem({ item, index }) {
    const lengthArray = this.state.contacts.length;

    const character = (item.user_name || item.first_name).charAt(0);
    return (
      <TouchableOpacity
        style={styles.quardView}
        onPress={() => {
          this.onFlatlist(index);
        }}
      >
        <View style={styles.imgView}>
          {item.profile_image == "" ? (
            item.profile_image2 == "" ? (
              item.profile_image3 == "" ? (
                <Text
                  style={[
                    styles.img_text,
                    {
                      color:
                        this.props.theme.mode === "light" ? "#1374A3" : "white",
                    },
                  ]}
                >
                  {character}
                </Text>
              ) : (
                <Image
                  source={{ uri: item.profile_image3 }}
                  style={styles.profileImage}
                />
              )
            ) : (
              <Image
                source={{ uri: item.profile_image2 }}
                style={styles.profileImage}
              />
            )
          ) : (
            <Image
              source={{ uri: item.profile_image }}
              style={styles.profileImage}
            />
          )}
        </View>
        {this.props.contactChange.mode === "first" ? (
          <Text
            style={[
              styles.personName,
              {
                color: this.props.theme.mode === "light" ? "#1374A3" : "white",
              },
            ]}
          >
            {item.last_name} {item.user_name || item.first_name}
          </Text>
        ) : this.props.nameChange.mode == "firstName" ? (
          <Text
            style={[
              styles.personName,
              {
                color: this.props.theme.mode === "light" ? "#1374A3" : "white",
              },
            ]}
          >
            {item.last_name} {item.user_name || item.first_name}
          </Text>
        ) : (
          <Text
            style={[
              styles.personName,
              {
                color: this.props.theme.mode === "light" ? "#1374A3" : "white",
              },
            ]}
          >
            {item.user_name || item.first_name} {item.last_name}
          </Text>
        )}

        {/* {item.isImport == false ? ( */}
        <Image source={edit} style={styles.editImgStyle} />
        {/* // ) : (
        //   <Image source={reset} style={styles.resetImgStyle} />
        // )} */}
      </TouchableOpacity>
    );
  }

  renderMiddle() {
    return (
      <View style={styles.scrollStyle}>
        <FlatList
          refreshing={true}
          keyExtractor={(item, index) => index.toString()}
          data={this.state.shortcontacts}
          extraData={this.state}
          numColumns={1}
          renderItem={this.renderItem.bind(this)}
        />
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
          this.state.profile_image3 == "" ||
          this.state.profile_image3 == "" ? (
            <Image
              source={person}
              style={[ styles.personImageStyle ]}
            />
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

  renderLast() {
    return (
      <View
        style={{
          alignItems: "flex-end",
          marginRight: Metrics.baseMargin,
        }}
      >
        <View style={{ bottom: 30, position: "absolute" }}>
          <TouchableOpacity
            style={styles.Whiteview}
            onPress={this.plusnavigate}
          >
            <Image source={plus} style={styles.plusStyle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  plusnavigate = () => {
    this.setState({ contact: [] });
    this.props.navigation.navigate("ManuallyAddContact");
  };

  showLoader() {
    if (this.state.isLoading == true) {
      return <Spinner />;
    }
  }

  onClose = () => {
    this.setState({ firstName: [] });
    this.setState({ workViewOpen: false });
  };

  ShowHideTextComponentView = async () => {
    if (this.state.status == false) {
      this.setState({ status: true });
    } else {
      this.setState({ status: false });

      const { username } = this.props;
      const {
        doc_id,
        First_name,
        Last_name,
        Number,
        Number2,
        Email,
        Email2,
        Address,
        Address2,
        Messenger,
        SocialMedia,
        Website,
        fomateDate,
        Note,
        Company,
        JobTitle,
        Monday,
      } = this.state;
      if (Last_name == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ last_name: Last_name, isLNUpdate: true });
      }
      if (First_name == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ first_name: First_name, isFnUpdate: true });
      }

      if (Number == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ number1: Number, isNumberUpdate: true });
      }

      if (Number2 == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ number2: Number2, isNumber2Update: true });
      }

      if (Email == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ email1: Email, isEmailUpdate: true });
      }
      if (Email2 == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ email2: Email2, isEmail2Update: true });
      }
      if (Address == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ address1: Address, isAddressUpdate: true });
      }
      if (Address2 == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ address2: Address2, isAddress2Update: true });
      }

      if (Messenger == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ messenger1: Messenger, isMessengerUpdate: true });
      }

      if (SocialMedia == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ social_media1: SocialMedia, isSocialMediaUpdate: true });
      }

      if (Website == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ website: Website, isWebsiteUpdate: true });
      }

      if (fomateDate == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ date: fomateDate, isdateUpdate: true });
      }

      if (Note == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ note: Note, isNoteUpdate: true });
      }

      if (Company == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ company: Company, isCompanyUpdate: true });
      }
      if (JobTitle == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ jobTitle: JobTitle, isJobTitleUpdate: true });
      }
      if (Monday == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ monday: Monday, isWorkHoursUpdate: true });
      }
      this.onFlatlist(this.state.forKey);
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
  renderName() {
    return (
      <View style={{ marginTop: Metrics.baseMargin, position: "relative" }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              source={innerimg}
              style={[styles.innerStyle, { marginTop: Metrics.baseMargin }]}
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
                    value={this.state.First_name}
                    onChangeText={(value) =>
                      this.setState({ First_name: value })
                    }
                    ref={(input) => {
                      this.First_name = input;
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
              <View style={styles.doubleImaageView}>
                <Image source={edit} style={styles.smallIcon} />
                {this.state.selectedData.isFnUpdate == true ? (
                  <Image source={reset} style={styles.smallIcon} />
                ) : null}
              </View>
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
                    value={this.state.Last_name}
                    onChangeText={(value) =>
                      this.setState({ Last_name: value })
                    }
                    ref={(input) => {
                      this.Last_name = input;
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
                <Image source={edit} style={styles.smallIcon} />
                {this.state.selectedData.isLNUpdate == true ? (
                  <Image source={reset} style={styles.smallIcon} />
                ) : null}
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
    return (
      <View style={{ marginTop: Metrics.baseMargin, position: "relative" }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              source={call}
              style={[styles.innerStyle, { marginTop: Metrics.baseMargin }]}
            />
          </View>

          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.searchSection}>
                {this.state.status ? (
                  this.state.isMobileSection ? (
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
                        style={styles.stylefiledText}
                        placeholderTextColor={COLORS.main_text_color}
                        // maxLength={10}
                        editable={this.state.status ? true : false}
                        value={this.state.Number}
                        onChangeText={(value) =>
                          this.setState({ Number: value })
                        }
                        ref={(input) => {
                          this.textInputRef = input;
                        }}
                        autoFocus={true}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={this.onPressKey}>
                      <Text style={styles.stylefiledText}>Phone Number</Text>
                    </TouchableOpacity>
                  )
                ) : (
                  <Text style={styles.stylefiledText}>{this.state.number}</Text>
                )}

                <View style={styles.rightView}>
                  <Text style={styles.righttext}>Personal(Landline)</Text>
                </View>
              </View>
              <View style={styles.doubleImaageView}>
                <Image source={edit} style={styles.smallIcon} />
                {this.state.selectedData.isNumberUpdate == true ? (
                  <Image source={reset} style={styles.smallIcon} />
                ) : null}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  onPressEmail = () => {
    this.setState({ isEmailSection: true });
    if (this.state.isEmailSection == true) {
      this.emailFocus.focus();
    }
  };
  renderEmail() {
    return (
      <View style={{ marginTop: Metrics.baseMargin, position: "relative" }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              source={email}
              style={[styles.innerStyle, { marginTop: Metrics.baseMargin }]}
            />
          </View>

          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.searchSection}>
                {this.state.status ? (
                  this.state.isEmailSection ? (
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
                        style={styles.stylefiledText}
                        placeholderTextColor={COLORS.main_text_color}
                        // maxLength={10}
                        editable={this.state.status ? true : false}
                        value={this.state.Email}
                        onChangeText={(value) =>
                          this.setState({ Email: value })
                        }
                        ref={(input) => {
                          this.emailFocus = input;
                        }}
                        autoFocus={true}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={this.onPressEmail}>
                      <Text style={styles.stylefiledText}>E-mail Address</Text>
                    </TouchableOpacity>
                  )
                ) : (
                  <Text style={styles.stylefiledText}>{this.state.email}</Text>
                )}

                <View style={styles.rightView}>
                  <Text style={styles.righttext}>Personal</Text>
                </View>
              </View>
              <View style={styles.doubleImaageView}>
                <Image source={edit} style={styles.smallIcon} />
                {this.state.selectedData.isEmailUpdate == true ? (
                  <Image source={reset} style={styles.smallIcon} />
                ) : null}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  onPressKey2 = () => {
    this.setState({ isMobileSection2: true });
    if (this.state.isMobileSection2 == true) {
      this.numberFocus2.focus();
    }
  };
  renderMobile2() {
    return (
      <View style={{ marginTop: Metrics.baseMargin, position: "relative" }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              source={call}
              style={[styles.innerStyle, { marginTop: Metrics.baseMargin }]}
            />
          </View>

          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.searchSection}>
                {this.state.status ? (
                  this.state.isMobileSection2 ? (
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
                        style={styles.stylefiledText}
                        placeholderTextColor={COLORS.main_text_color}
                        // maxLength={10}
                        editable={this.state.status ? true : false}
                        value={this.state.Number2}
                        onChangeText={(value) =>
                          this.setState({ Number2: value })
                        }
                        ref={(input) => {
                          this.numberFocus2 = input;
                        }}
                        autoFocus={true}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={this.onPressKey2}
                      // onPress={() =>
                      // this.setState({ isMobileSection: true })
                      // }
                    >
                      <Text style={styles.stylefiledText}>Phone Number</Text>
                    </TouchableOpacity>
                  )
                ) : (
                  <Text style={styles.stylefiledText}>
                    {this.state.number2}
                  </Text>
                )}

                <View style={styles.rightView}>
                  <Text style={styles.righttext}>Work(Landline)</Text>
                </View>
              </View>
              <View style={styles.doubleImaageView}>
                <Image source={edit} style={styles.smallIcon} />
                {this.state.selectedData.isNumber2Update == true ? (
                  <Image source={reset} style={styles.smallIcon} />
                ) : null}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  onPressEmail2 = () => {
    this.setState({ isEmailSection2: true });
    if (this.state.isEmailSection2 == true) {
      this.emailFocus2.focus();
    }
  };
  renderEmail2() {
    return (
      <View style={{ marginTop: Metrics.baseMargin, position: "relative" }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              source={email}
              style={[styles.innerStyle, { marginTop: Metrics.baseMargin }]}
            />
          </View>

          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.searchSection}>
                {this.state.status ? (
                  this.state.isEmailSection2 ? (
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
                        style={styles.stylefiledText}
                        placeholderTextColor={COLORS.main_text_color}
                        // maxLength={10}
                        editable={this.state.status ? true : false}
                        value={this.state.Email2}
                        onChangeText={(value) =>
                          this.setState({ Email2: value })
                        }
                        ref={(input) => {
                          this.emailFocus2 = input;
                        }}
                        autoFocus={true}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={this.onPressEmail2}>
                      <Text style={styles.stylefiledText}>E-mail Address</Text>
                    </TouchableOpacity>
                  )
                ) : (
                  <Text style={styles.stylefiledText}>{this.state.email2}</Text>
                )}

                <View style={styles.rightView}>
                  <Text style={styles.righttext}>Work</Text>
                </View>
              </View>
              <View style={styles.doubleImaageView}>
                <Image source={edit} style={styles.smallIcon} />
                {this.state.selectedData.isEmail2Update == true ? (
                  <Image source={reset} style={styles.smallIcon} />
                ) : null}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  onPressAddress = () => {
    this.setState({ isAddressSection2: true });
    if (this.state.isAddressSection2 == true) {
      this.AddressFocus.focus();
    }
  };
  renderAddress() {
    return (
      <View style={{ marginTop: Metrics.baseMargin, position: "relative" }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={home} style={[styles.innerStyle, {}]} />
          </View>

          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.searchSectionAddress}>
                {this.state.status ? (
                  this.state.isAddressSection ? (
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
                        style={[
                          styles.addressField,
                          { marginTop: Metrics.baseMargin },
                        ]}
                        placeholderTextColor={COLORS.main_text_color}
                        // maxLength={10}
                        editable={this.state.status ? true : false}
                        value={this.state.Address}
                        onChangeText={(value) =>
                          this.setState({ Address: value })
                        }
                        ref={(input) => {
                          this.AddressFocus = input;
                        }}
                        autoFocus={true}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={this.onPressAddress}>
                      <Text style={styles.stylefiledText}>Address</Text>
                    </TouchableOpacity>
                  )
                ) : (
                  <Text
                    style={[
                      styles.stylefiledText,
                      { marginTop: Metrics.baseMargin },
                    ]}
                  >
                    {this.state.address}
                  </Text>
                )}

                <View style={styles.addressRightView}>
                  <Text style={styles.righttext}>Personal</Text>
                </View>
              </View>
              <View style={styles.doubleImaageView}>
                <Image source={edit} style={styles.smallIcon} />
                {this.state.selectedData.isAddressUpdate == true ? (
                  <Image source={reset} style={styles.smallIcon} />
                ) : null}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  onPressAddress2 = () => {
    this.setState({ isAddressSection2: true });
    if (this.state.isAddressSection2 == true) {
      this.AddressFocus2.focus();
    }
  };

  renderAddress2() {
    return (
      <View style={{ marginTop: Metrics.baseMargin, position: "relative" }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={home} style={[styles.innerStyle, {}]} />
          </View>

          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.searchSectionAddress}>
                {this.state.status ? (
                  this.state.isAddressSection2 ? (
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
                        style={[
                          styles.addressField,
                          { marginTop: Metrics.baseMargin },
                        ]}
                        placeholderTextColor={COLORS.main_text_color}
                        // maxLength={10}
                        editable={this.state.status ? true : false}
                        value={this.state.Address2}
                        onChangeText={(value) =>
                          this.setState({ Address2: value })
                        }
                        ref={(input) => {
                          this.AddressFocus2 = input;
                        }}
                        autoFocus={true}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={this.onPressAddress2}>
                      <Text style={styles.stylefiledText}>Address</Text>
                    </TouchableOpacity>
                  )
                ) : (
                  <Text
                    style={[
                      styles.stylefiledText,
                      { marginTop: Metrics.baseMargin },
                    ]}
                  >
                    {this.state.address2}
                  </Text>
                )}

                <View style={styles.addressRightView}>
                  <Text style={styles.righttext}>Work</Text>
                </View>
              </View>
              <View style={styles.doubleImaageView}>
                <Image source={edit} style={styles.smallIcon} />
                {this.state.selectedData.isAddress2Update == true ? (
                  <Image source={reset} style={styles.smallIcon} />
                ) : null}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  onPressMessenger = () => {
    this.setState({ isMessengerSection: true });
    if (this.state.isMessengerSection == true) {
      this.MessengerFocus.focus();
    }
  };
  renderMessenger() {
    return (
      <View style={{ marginTop: Metrics.baseMargin, position: "relative" }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              source={message}
              style={[styles.innerStyle, { marginTop: Metrics.baseMargin }]}
            />
          </View>

          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.searchSection}>
                {this.state.status ? (
                  this.state.isMessengerSection ? (
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
                        // maxLength={10}
                        editable={this.state.status ? true : false}
                        value={this.state.Messenger}
                        onChangeText={(value) =>
                          this.setState({ Messenger: value })
                        }
                        ref={(input) => {
                          this.MessengerFocus = input;
                        }}
                        autoFocus={true}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={this.onPressMessenger}>
                      <Text style={styles.stylefiledText}>
                        Messenger Account
                      </Text>
                    </TouchableOpacity>
                  )
                ) : (
                  <Text style={styles.stylefiledText}>
                    {this.state.messenger}
                  </Text>
                )}

                <View style={styles.rightView}>
                  <Text style={styles.righttext}>Facebook Messenger</Text>
                </View>
              </View>
              <View style={styles.doubleImaageView}>
                <Image source={edit} style={styles.smallIcon} />
                {this.state.selectedData.isMessengerUpdate == true ? (
                  <Image source={reset} style={styles.smallIcon} />
                ) : null}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  onPressSocialMedia = () => {
    this.setState({ isSocialSection: true });
    if (this.state.isSocialSection == true) {
      this.SocialMediaFocus.focus();
    }
  };
  renderSocialMedia() {
    return (
      <View style={{ marginTop: Metrics.baseMargin, position: "relative" }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              source={instagram}
              style={[styles.innerStyle, { marginTop: Metrics.baseMargin }]}
            />
          </View>

          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.searchSection}>
                {this.state.status ? (
                  this.state.isSocialSection ? (
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
                        // maxLength={10}
                        editable={this.state.status ? true : false}
                        value={this.state.SocialMedia}
                        onChangeText={(value) =>
                          this.setState({ SocialMedia: value })
                        }
                        ref={(input) => {
                          this.SocialMediaFocus = input;
                        }}
                        autoFocus={true}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={this.onPressSocialMedia}>
                      <Text style={styles.stylefiledText}>
                        Social Media Account
                      </Text>
                    </TouchableOpacity>
                  )
                ) : (
                  <Text style={styles.stylefiledText}>
                    {this.state.socialMedia}
                  </Text>
                )}

                <View style={styles.rightView}>
                  <Text style={styles.righttext}>Social Media</Text>
                </View>
              </View>
              <View style={styles.doubleImaageView}>
                <Image source={edit} style={styles.smallIcon} />
                {this.state.selectedData.isSocialMediaUpdate == true ? (
                  <Image source={reset} style={styles.smallIcon} />
                ) : null}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  onPressWebsite = () => {
    this.setState({ isWebsiteSection: true });
    if (this.state.isWebsiteSection == true) {
      this.WebsiteFocus.focus();
    }
  };
  renderWebsite() {
    return (
      <View style={{ marginTop: Metrics.baseMargin, position: "relative" }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              source={website}
              style={[styles.innerStyle, { marginTop: Metrics.baseMargin }]}
            />
          </View>

          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.searchSection}>
                {this.state.status ? (
                  this.state.isWebsiteSection ? (
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
                        // maxLength={10}
                        editable={this.state.status ? true : false}
                        value={this.state.Website}
                        onChangeText={(value) =>
                          this.setState({ Website: value })
                        }
                        ref={(input) => {
                          this.WebsiteFocus = input;
                        }}
                        autoFocus={true}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={this.onPressWebsite}>
                      <Text style={styles.stylefiledText}>Website</Text>
                    </TouchableOpacity>
                  )
                ) : (
                  <Text style={styles.stylefiledText}>
                    {this.state.website}
                  </Text>
                )}

                <View style={styles.rightView}>
                  <Text style={styles.righttext}>Website</Text>
                </View>
              </View>
              <View style={styles.doubleImaageView}>
                <Image source={edit} style={styles.smallIcon} />
                {this.state.selectedData.isWebsiteUpdate == true ? (
                  <Image source={reset} style={styles.smallIcon} />
                ) : null}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  showDatePicker = (index) => {
    this.setState({ isVisible: true });
  };
  onChangeDate = (date, index, item) => {
    var fomateDate = moment(date).format("MMMM, Do YYYY");
    this.setState({ fomateDate: fomateDate });
  };
  renderDate() {
    return (
      <View style={{ marginTop: Metrics.baseMargin, position: "relative" }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              source={calender}
              style={[styles.innerStyle, { marginTop: Metrics.baseMargin }]}
            />
          </View>

          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.searchSection}>
                {this.state.status ? (
                  <View>
                    <TouchableOpacity
                      style={{ width: width * 0.5 }}
                      onPress={() => this.showDatePicker(index)}
                    >
                      <Text style={styles.stylefiledText}>Date</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                      isVisible={this.state.isVisible}
                      onConfirm={(date) =>
                        this.onChangeDate(date, index, item.date)
                      }
                      onCancel={this.hidePicker}
                      mode="date"
                      is24Hour={false}
                      titleIOS="Pick your Notification time"
                    />
                  </View>
                ) : (
                  <Text style={styles.stylefiledText}>{this.state.date}</Text>
                )}

                <View style={styles.rightView}>
                  <Text style={styles.righttext}>Personal</Text>
                </View>
              </View>
              <View style={styles.doubleImaageView}>
                <Image source={edit} style={styles.smallIcon} />
                {this.state.selectedData.isdateUpdate == true ? (
                  <Image source={reset} style={styles.smallIcon} />
                ) : null}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  onPressNote = () => {
    this.setState({ isNoteSection: true });
    if (this.state.isNoteSection == true) {
      this.NoteFocus.focus();
    }
  };
  renderNote() {
    return (
      <View style={{ marginTop: Metrics.baseMargin, position: "relative" }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={note} style={[styles.innerStyle, {}]} />
          </View>

          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.searchSectionAddress}>
                {this.state.status ? (
                  this.state.isNoteSection ? (
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
                        style={[
                          styles.addressField,
                          { marginTop: Metrics.smallMargin },
                        ]}
                        placeholderTextColor={COLORS.main_text_color}
                        editable={this.state.status ? true : false}
                        value={this.state.Note}
                        onChangeText={(value) => this.setState({ Note: value })}
                        ref={(input) => {
                          this.NoteFocus = input;
                        }}
                        autoFocus={true}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={this.onPressNote}>
                      <Text style={styles.stylefiledText}>Note</Text>
                    </TouchableOpacity>
                  )
                ) : (
                  <Text
                    style={[
                      styles.stylefiledText,
                      { marginTop: Metrics.baseMargin },
                    ]}
                  >
                    {this.state.note}
                  </Text>
                )}

                <View style={styles.addressRightView}>
                  <Text style={styles.righttext}>Note</Text>
                </View>
              </View>
              <View style={styles.doubleImaageView}>
                <Image source={edit} style={styles.smallIcon} />
                {this.state.selectedData.isNoteUpdate == true ? (
                  <Image source={reset} style={styles.smallIcon} />
                ) : null}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  renderCompany() {
    return (
      <View style={{ marginTop: Metrics.baseMargin, position: "relative" }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              source={handshake}
              style={[styles.innerStyle, { marginTop: Metrics.baseMargin }]}
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
                    value={this.state.Company}
                    onChangeText={(value) => this.setState({ Company: value })}
                  />
                ) : (
                  <Text style={styles.stylefiledText}>
                    {this.state.company}
                  </Text>
                )}
                <View style={styles.rightView}>
                  <Text style={styles.righttext}>Company</Text>
                </View>
              </View>

              <View style={styles.doubleImaageView}>
                <Image source={edit} style={styles.smallIcon} />
                {this.state.selectedData.isCompanyUpdate == true ? (
                  <Image source={reset} style={styles.smallIcon} />
                ) : null}
              </View>
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
                    value={this.state.JobTitle}
                    onChangeText={(value) => this.setState({ JobTitle: value })}
                  />
                ) : (
                  <Text style={styles.stylefiledText}>
                    {this.state.jobTitle}
                  </Text>
                )}

                <View style={styles.rightView}>
                  <Text style={styles.righttext}>Job Title</Text>
                </View>
              </View>

              <View style={styles.doubleImaageView}>
                <Image source={edit} style={styles.smallIcon} />
                {this.state.selectedData.isJobTitleUpdate == true ? (
                  <Image source={reset} style={styles.smallIcon} />
                ) : null}
              </View>
            </View>
            {this.state.status ? (
              <View
                style={{
                  flexDirection: "row",
                  marginTop: Metrics.baseMargin,
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
                      <View
                        style={[
                          styles.timeView,
                          { marginTop: Metrics.xsmallMargin },
                        ]}
                      >
                        <TextInput
                          placeholder=""
                          placeholderTextColor={COLORS.main_text_color}
                          style={styles.timeText}
                          value={this.state.monday}
                          onChangeText={(value) => {
                            this.setState({ Monday: value });
                          }}
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
                      <View
                        style={[
                          styles.timeView,
                          { marginTop: Metrics.xsmallMargin },
                        ]}
                      >
                        <TextInput
                          placeholder=""
                          placeholderTextColor={COLORS.main_text_color}
                          style={styles.timeText}
                          value={this.state.mondayTo}
                          onChangeText={(value) => {
                            this.setState({ MondayTo: value });
                          }}
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
                          onChangeText={(value) => {
                            this.setState({ Tuesday: value });
                          }}
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
                          onChangeText={(value) => {
                            this.setState({ TuesdayTo: value });
                          }}
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
                          onChangeText={(value) => {
                            this.setState({ Wednesday: value });
                          }}
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
                          onChangeText={(value) => {
                            this.setState({ WednesdayTo: value });
                          }}
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
                          onChangeText={(value) => {
                            this.setState({ Thursday: value });
                          }}
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
                          onChangeText={(value) => {
                            this.setState({ ThursdayTo: value });
                          }}
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
                          onChangeText={(value) => {
                            this.setState({ Firday: value });
                          }}
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
                          onChangeText={(value) => {
                            this.setState({ FirdayTo: value });
                          }}
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
                          onChangeText={(value) => {
                            this.setState({ Saturday: value });
                          }}
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
                          onChangeText={(value) => {
                            this.setState({ SaturdayTo: value });
                          }}
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
                          onChangeText={(value) => {
                            this.setState({ Sunday: value });
                          }}
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
                          onChangeText={(value) => {
                            this.setState({ SundayTo: value });
                          }}
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
                <View style={styles.doubleImaageView}>
                  <Image source={edit} style={styles.smallIcon} />
                  {this.state.selectedData.isWorkHoursUpdate == true ? (
                    <Image source={reset} style={styles.smallIcon} />
                  ) : null}
                </View>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  marginTop: Metrics.baseMargin,
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
                      <View
                        style={[
                          styles.timeView,
                          { marginTop: Metrics.xsmallMargin },
                        ]}
                      >
                        <Text style={styles.timeText}>
                          {this.state.monday}{" "}
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
                      <View
                        style={[
                          styles.timeView,
                          { marginTop: Metrics.xsmallMargin },
                        ]}
                      >
                        <Text style={styles.timeText}>
                          {this.state.mondayTo}{" "}
                        </Text>
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
                        <Text style={styles.timeText}>
                          {this.state.tuesday}{" "}
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
                        <Text style={styles.timeText}>
                          {this.state.tuesdayTo}{" "}
                        </Text>
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
                        <Text style={styles.timeText}>
                          {this.state.wednesday}{" "}
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
                        <Text style={styles.timeText}>
                          {this.state.wednesdayTo}{" "}
                        </Text>
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
                        <Text style={styles.timeText}>
                          {this.state.thursday}{" "}
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
                        <Text style={styles.timeText}>
                          {this.state.thursdayTo}{" "}
                        </Text>
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
                        <Text style={styles.timeText}>
                          {this.state.friday}{" "}
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
                        <Text style={styles.timeText}>
                          {this.state.fridayTo}{" "}
                        </Text>
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
                        <Text style={styles.timeText}>
                          {this.state.saturday}{" "}
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
                        <Text style={styles.timeText}>
                          {this.state.saturdayTo}{" "}
                        </Text>
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
                        <Text style={styles.timeText}>
                          {this.state.sunday}{" "}
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
                        <Text style={styles.timeText}>
                          {this.state.sundayTo}{" "}
                        </Text>
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
                <View style={styles.doubleImaageView}>
                  <Image source={edit} style={styles.smallIcon} />
                  {this.state.selectedData.isWorkHoursUpdate == true ? (
                    <Image source={reset} style={styles.smallIcon} />
                  ) : null}
                </View>
              </View>
            )}
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
        <View style={{ flex: 1 }}>
          <Container>
            {this.state.contactInfoSection == true ? (
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
            ) : (
              <View>{this.renderHeader()}</View>
            )}

            <ScrollView nestedScrollEnabled={true}>
              <View
                style={{
                  width: width,
                  alignItems: "center",
                }}
              >
                {this.state.contactInfoSection == true ? (
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
                      <Text>
                        {this.state.first_name} {this.state.last_name}
                      </Text>
                    </View>
                    <View
                      style={{
                        marginBottom: Metrics.baseMargin,
                        marginLeft: Metrics.smallMargin,
                      }}
                    >
                      {this.renderName()}
                      {this.renderMobile()}
                      {this.renderEmail()}
                      {this.renderMobile2()}
                      {this.renderEmail2()}
                      {this.renderAddress()}
                      {this.renderAddress2()}
                      {this.renderMessenger()}
                      {this.renderSocialMedia()}
                      {this.renderWebsite()}
                      {this.renderDate()}
                      {this.renderNote()}
                      {this.renderCompany()}
                    </View>
                  </View>
                ) : (
                  <View>
                    {this.state.contacts == "" ? (
                      <LineText> No contact imported to show </LineText>
                    ) : null}
                    {this.renderMiddle()}
                  </View>
                )}
              </View>
            </ScrollView>
            {this.state.contactInfoSection == true ? (
              <View>{this.renderContactLast()}</View>
            ) : (
              <View>{this.renderLast()}</View>
            )}
          </Container>
          {this.showLoader()}
        </View>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    theme: state.themeReducer.theme,
    user_id:
      state.login.shouldLoadData.user_id || state.reg.shouldLoadData.user_id,
    username:
      state.login.shouldLoadData.username || state.reg.shouldLoadData.username,
    contactChange: state.sortContactsReducer.contactChange,
    nameChange: state.switchNameReducer.nameChange,
    isLogedIn: state.login.shouldLoadData,
  };
}
export default connect(mapStateToProps)(searchContact);

const Container = styled.View`
  flex: 1;
  width: 100%;
  /* align-items: center; */
  background-color: ${(props) => props.theme.backColor};
`;

const LineText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 15px;
  color: ${(props) => props.theme.textColor};
  line-height: 30px;
  text-align: center;
  margin-top: 12px;
`;
