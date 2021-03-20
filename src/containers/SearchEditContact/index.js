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
import CheckBox from "@react-native-community/checkbox";
import Constants from "../../action/Constants";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DeleteImg from "../../assets/images/delete.png";
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
import checkedModified from "../../assets/icons/checkedModified.png";
import checkedWhite from "../../assets/icons/checkedWhite.png";
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
      deletePortion: false,
      isVisible: false,
      counter: 0,
      //data
      first_name: "",
      middle_name: "",
      last_name: "",
      nick_name: "",
      notificationTime: [],
      status: false,
      tz: [],
      tzs: "",
      checkedOff: false,
      //
      contact: [],
      firstName: [],
      contacts: "",
      isLoading: false,
      shortcontacts: "",
      shortcontact: "",
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
      Friday: "",
      FridayTo: "",
      Saturday: "",
      SaturdayTo: "",
      Sunday: "",
      SundayTo: "",
      contactInfoSection: false,
      u_id: "",
      s_label_name: "",
      selectedData: "",
      eachUserData: "",
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
      firstImage: "",
      userData: "",
      shortableContacts: [],
      doc_ID: [],
      doc_IDS: "",
      isSelect: [],
      deleteID: [],
    };
  }

  backAction = () => {
    alert(this.state.contactInfoSection);
    if (this.state.contactInfoSection == true) {
      this.setState({ contactInfoSection: false });
    }
  };
  getImage = () => {
    const { username } = this.props;

    firebase
      .firestore()
      .collection("user")
      .doc(username)
      .collection("contacts")
      .get()
      .then((snap) => {
        snap.docs.forEach((doc_id) => {
          console.log("doc---->", doc_id._data.user_id);
          if (doc_id._data.user_id == undefined) {
          } else {
            const baseurl = Constants.baseurl;
            var _body = new FormData();
            _body.append("user_id", doc_id._data.user_id);

            fetch(baseurl + "get_uplopimages_user", {
              method: "POST",
              body: _body,
            })
              .then((response) => {
                return response.json();
              })
              .then((responseJson) => {
                if (responseJson.status == false) {
                  // this.showContact()
                  console.log("data---->", responseJson.status);
                } else {
                  responseJson.data.map((img) => {
                    console.log("data---->", img);
                    if (img.position == 1) {
                      firebase
                        .firestore()
                        .collection("user")
                        .doc(username)
                        .collection("contacts")
                        .doc(doc_id.id)
                        .update({ profile_image: img.profile });
                      console.log("getImage 111 --->", img.profile);
                    }
                    if (img.position == 2) {
                      firebase
                        .firestore()
                        .collection("user")
                        .doc(username)
                        .collection("contacts")
                        .doc(doc_id.id)
                        .update({ profile_image2: img.profile });
                      console.log("getImage   22 --->", img.profile);
                    }
                    if (img.position == 3) {
                      firebase
                        .firestore()
                        .collection("user")
                        .doc(username)
                        .collection("contacts")
                        .doc(doc_id.id)
                        .update({ profile_image3: img.profile });
                      console.log("getImage  3 --->", img.profile);
                    }
                  });
                  //  this.showContact()
                  this.setState({ isLoading: false });
                }
              })
              .catch((error) => {
                console.log("name error---->", error);
              });
          }
        });
        // this.getImageFromDoc()
      });
  };
  getImageFromDoc = () => {
    const { username } = this.props;
    firebase
      .firestore()
      .collection("user")
      .doc(username)
      .collection("contacts")
      .get()
      .then((snap) => {
        snap.docs.forEach((doc_id) => {
          console.log("----->", doc_id._data.isManually);
          if (doc_id._data.isManually == undefined) {
          } else {
            if (doc_id._data.isManually == true) {
              const baseurl = Constants.baseurl;
              var _body = new FormData();
              _body.append("docid", doc_id.id);

              fetch(baseurl + "get_uplopimages_doc", {
                method: "POST",
                body: _body,
              })
                .then((response) => {
                  return response.json();
                })
                .then((responseJson) => {
                  if (responseJson.status == false) {
                    console.log("data---->", responseJson.status);
                    //  this.showContact()
                  } else {
                    responseJson.data.map((img) => {
                      console.log("profile --->", img);
                      if (img.position == 1) {
                        firebase
                          .firestore()
                          .collection("user")
                          .doc(username)
                          .collection("contacts")
                          .doc(doc_id.id)
                          .update({ profile_image: img.profile });
                        console.log("getImageFromDoc 11 --->", img.profile);
                      }
                      if (img.position == 2) {
                        firebase
                          .firestore()
                          .collection("user")
                          .doc(username)
                          .collection("contacts")
                          .doc(doc_id.id)
                          .update({ profile_image2: img.profile });
                        console.log("getImageFromDoc 22 --->", img.profile);
                      }
                      if (img.position == 3) {
                        firebase
                          .firestore()
                          .collection("user")
                          .doc(username)
                          .collection("contacts")
                          .doc(doc_id.id)
                          .update({ profile_image3: img.profile });
                        console.log("getImageFromDoc 3 --->", img.profile);
                      }
                      //  this.showContact()
                      this.setState({ isLoading: false });
                    });
                  }
                })
                .catch((error) => {
                  console.log("name error---->", error);
                });
            }
          }
        });
        //   this.getImageForImportContact()
      });
  };
  getImageForImportContact = () => {
    const { username } = this.props;
    firebase
      .firestore()
      .collection("user")
      .doc(username)
      .collection("contacts")
      .get()
      .then((snap) => {
        snap.docs.forEach((doc_id) => {
          console.log("----->", doc_id._data.isImport);
          if (doc_id._data.isImport == true) {
            const baseurl = Constants.baseurl;
            var _body = new FormData();
            _body.append("docid", doc_id.id);

            fetch(baseurl + "get_uplopimages_doc", {
              method: "POST",
              body: _body,
            })
              .then((response) => {
                return response.json();
              })
              .then((responseJson) => {
                if (responseJson.status == false) {
                  // this.showContact()
                } else {
                  responseJson.data.map((img) => {
                    console.log(" isImport  profile --->", img);
                    if (img.position == 1) {
                      firebase
                        .firestore()
                        .collection("user")
                        .doc(username)
                        .collection("contacts")
                        .doc(doc_id.id)
                        .update({ profile_image: img.profile });
                      console.log(
                        "getImageForImportContact 111 --->",
                        img.profile
                      );
                    }
                    if (img.position == 2) {
                      firebase
                        .firestore()
                        .collection("user")
                        .doc(username)
                        .collection("contacts")
                        .doc(doc_id.id)
                        .update({ profile_image2: img.profile });
                      console.log(
                        "getImageForImportContact e 22 --->",
                        img.profile
                      );
                    }
                    if (img.position == 3) {
                      firebase
                        .firestore()
                        .collection("user")
                        .doc(username)
                        .collection("contacts")
                        .doc(doc_id.id)
                        .update({ profile_image3: img.profile });
                      console.log(
                        "getImageForImportContact 3 --->",
                        img.profile
                      );
                    }
                    // this.showContact()
                    this.setState({ isLoading: false });
                  });
                }
                this.showContact();
              })
              .catch((error) => {
                console.log("name error---->", error);
              });
          }
        });
      });
  };

  componentDidMount() {
    const { navigation } = this.props;

    // console.log("last_name----->", this.props.navigation.state.params.user);
    this.setState({ shortcontacts: this.props.navigation.state.params.user });
    this.focusListener = navigation.addListener("didFocus", async () => {
      this.setState({ contact: [] });
      this.setState({ contacts: "", shortcontacts: "" });
      // ,doc_IDS:[],doc_IDS:""
      if (this.props.contactChange.mode === "first") {
        this.contactList();
        console.log("first");
      } else {
        this.contactListFirst();
        console.log("Last");
      }
    });
    // firebase
    // .firestore()
    // .collection("user")
    // .doc(this.props.username)
    // .collection("contacts")
    // .get()
    // .then((snap) => {
    //   this.setState({ doc_IDS : []})
    //   snap.docs.forEach((doc_id) => {
    //     this.state.doc_IDS.push(doc_id.id);
    //   });
    //   var docData = this.state.doc_IDS.map((item) => {
    //     return { docID: item, isSelect: false };
    //   });
    //   this.setState({ doc_IDS: docData });
    //   console.log("docData----?", this.state.doc_IDS);
    // });
  }

  async contactList() {
    const { username } = this.props;
    this.setState({ contact: [] });
    this.setState({ contacts: "", shortcontacts: "" });
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
          // console.log("last_name----->",item);
        });
        this.setState({ contacts: this.state.contact });
        const sort = this.state.contacts.sort(function (a, b) {
          if (a.first_name.toLowerCase() < b.first_name.toLowerCase())
            return -1;
          if (a.first_name.toLowerCase() > b.first_name.toLowerCase()) return 1;
          return 0;
        });
        this.setState({ shortcontact: sort, data: sort, isLoading: false });
        var data = this.state.shortcontact.map((Data) => {
          return { item: Data, isSelect: false };
        });
        this.setState({ shortcontacts: data, isLoading: false });
        console.log("last_name----->", this.state.shortcontacts);
      });
  }
  async contactListFirst() {
    const { username } = this.props;
    this.setState({ contact: [] });
    this.setState({ contacts: "", shortcontacts: "" });
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
          if (a.first_name.toLowerCase() < b.first_name.toLowerCase())
            return -1;
          if (a.first_name.toLowerCase() > b.first_name.toLowerCase()) return 1;
          return 0;
        });
        this.setState({ shortcontact: sort, data: sort, isLoading: false });
        var data = this.state.shortcontact.map((Data) => {
          return { item: Data, isSelect: false };
        });
        this.setState({ shortcontacts: data, isLoading: false });
        console.log("last_name----->", this.state.shortcontacts);
      });
  }

  handleSearch = (text) => {
    const { data, shortcontacts, itemCompany } = this.state;

    const shortData = data.filter(
      (obj) =>
        obj[text?.toLowerCase() ?? "en"]?.indexOf(text) > -1 ||
        obj.first_name_small.indexOf(text) > -1 ||
        obj.nick_name_small.indexOf(text) > -1 ||
        obj.last_name_small.indexOf(text) > -1 ||
        obj.middle_name_small.indexOf(text) > -1 ||
        obj.company.indexOf(text) > -1 ||
        obj.website.indexOf(text) > -1 ||
        obj.address1.indexOf(text) > -1 ||
        obj.selectedName.indexOf(text) > -1 ||
        obj.jobTitle.indexOf(text) > -1 ||
        obj.social_media1.indexOf(text) > -1 ||
        obj.note.indexOf(text) > -1 ||
        obj.messenger1.indexOf(text) > -1 ||
        obj.first_name.indexOf(text) > -1 ||
        obj.nick_name.indexOf(text) > -1 ||
        obj.last_name.indexOf(text) > -1 ||
        obj.middle_name.indexOf(text) > -1
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
          console.log("responseJson--->", responseJson);
          var arr = responseJson.data.map((item, index) => {
            // console.log("responseJson--->", item.relation);
            // console.log(" slabel  ----->", this.state.s_label_name);
            if (item.relation == this.state.s_label_name) {
              this.setState({ s_label_id: item.id });
              // console.log("responseJson label--->", this.state.s_label_id);
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

        console.log("item---->", item);
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
              number:(item.phone_number == 1) !== "" ? fields.number[0].phone : "",
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

          console.log("settings---->", fields);

          const baseurl = Constants.baseurl;
          var _body = new FormData();
          _body.append("user_id", fields.user_id);

          fetch(baseurl + "get_uplopimages_user", {
            method: "POST",
            body: _body,
          })
            .then((response) => {
              return response.json();
            })
            .then((responseJson2) => {
              responseJson2.data.map((img) => {
                console.log("profile --->", img);
                if (img.position == 1) {
                  if (item.image_1 == 1) {
                    this.setState({ profile_image: img.profile });
                    firebase
                      .firestore()
                      .collection("user")
                      .doc(this.props.username)
                      .collection("contacts")
                      .doc(this.state.doc_id)
                      .update({
                        profile_image: img.profile,
                      });
                  } else {
                    this.setState({ profile_image: "" });
                  }
                  console.log("profile image profile 111 --->", img.profile);
                }
                if (img.position == 2) {
                  if (item.image_2 == 1) {
                    this.setState({ profile_image2: img.profile });
                    firebase
                      .firestore()
                      .collection("user")
                      .doc(this.props.username)
                      .collection("contacts")
                      .doc(this.state.doc_id)
                      .update({
                        profile_image2: img.profile,
                      });
                    if (img.profile !== "") {
                      this.setState({ rightSec: true });
                    }
                  } else {
                    this.setState({ profile_image2: "" });
                  }

                  console.log("profile image 22 --->", img.profile);
                }
                if (img.position == 3) {
                  if (item.image_3 == 1) {
                    this.setState({ profile_image3: img.profile });
                    firebase
                      .firestore()
                      .collection("user")
                      .doc(this.props.username)
                      .collection("contacts")
                      .doc(this.state.doc_id)
                      .update({
                        profile_image3: img.profile,
                      });
                  } else {
                    this.setState({ profile_image3: "" });
                  }
                  console.log("profile image 3 --->", img.profile);
                }
              });

              // this.setState({ isLoading: false });
            })
            .catch((error) => {
              console.log("name error---->", error);
            });
          this.showDateAfterUpdate();
          // this.setState({ contactInfoSection: true });
          // this.setState({ isLoading: false });
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
    let fromContact = this.state.userData;
    console.log("get all userData    ---->", this.state.userData);
    console.log("get all fields      ---->", this.state.eachUserData);
    const baseurl = Constants.baseurl;
    var _body = new FormData();
    _body.append("user_id", fields.user_id);

    fetch(baseurl + "get_uplopimages_user", {
      method: "POST",
      body: _body,
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log("profile --->", responseJson);
        responseJson.data.map((img) => {
          console.log("profile --->", img);
          if (img.position == 1) {
            this.setState({ profile_image: img.profile });
            firebase
              .firestore()
              .collection("user")
              .doc(this.props.username)
              .collection("contacts")
              .doc(this.state.doc_id)
              .update({
                profile_image: img.profile,
              });
          }
          if (img.position == 2) {
            this.setState({ profile_image2: img.profile });
            if (img.profile !== "") {
              this.setState({ rightSec: true });
            }
            firebase
              .firestore()
              .collection("user")
              .doc(this.props.username)
              .collection("contacts")
              .doc(this.state.doc_id)
              .update({
                profile_image2: img.profile,
              });
          }
          if (img.position == 3) {
            firebase
              .firestore()
              .collection("user")
              .doc(this.props.username)
              .collection("contacts")
              .doc(this.state.doc_id)
              .update({
                profile_image3: img.profile,
              });
            this.setState({ profile_image3: img.profile });
          }
        });
        //  this.setState({ isLoading: false });
      })
      .catch((error) => {
        console.log("name error---->", error);
      });
    firebase
      .firestore()
      .collection("user")
      .doc(this.props.username)
      .collection("contacts")
      .doc(this.state.doc_id)
      .update({
        first_name: fields.first_name,
        last_name: fields.last_name,
        first_name_small: fields.first_name.toLowerCase(),
        last_name_small: fields.last_name.toLowerCase(),
        number: fields.number !== "" ? fields.number[0].phone : "",
        address: fields.address !== "" ? fields.address[0].address : "",
        email: fields.email !== "" ? fields.email[0].email : "",
        messenger: fields.messenger !== "" ? fields.messenger[0].messenger : "",
        website: fields.website !== "" ? fields.website[0].website : "",
        date: fields.date !== "" ? fields.date[0].date : "",
        note: fields.note !== "" ? fields.note[0].note : "",
        company: fields.company !== "" ? fields.company[0].company : "",
        jobTitle: fields.jobTitle !== "" ? fields.jobTitle[0].jobTitle : "",
        monday: fields.monday !== "" ? fields.monday[0].monday : "",
        mondayTo: fields.mondayTo !== "" ? fields.mondayTo[0].mondayTo : "",
        tuesday: fields.tuesday !== "" ? fields.tuesday[0].tuesday : "",
        tuesdayTo: fields.tuesdayTo !== "" ? fields.tuesdayTo[0].tuesdayTo : "",
        wednesday: fields.wednesday !== "" ? fields.wednesday[0].wednesday : "",
        wednesdayTo:
          fields.wednesdayTo !== "" ? fields.wednesdayTo[0].wednesdayTo : "",
        thursday: fields.thursday !== "" ? fields.thursday[0].thursday : "",
        thursdayTo:
          fields.thursdayTo !== "" ? fields.thursdayTo[0].thursdayTo : "",
        friday: fields.friday !== "" ? fields.friday[0].friday : "",
        fridayTo: fields.fridayTo !== "" ? fields.fridayTo[0].fridayTo : "",
        saturday: fields.saturday !== "" ? fields.saturday[0].saturday : "",
        saturdayTo:
          fields.saturdayTo !== "" ? fields.saturdayTo[0].saturdayTo : "",
        sunday: fields.sunday !== "" ? fields.sunday[0].sunday : "",
        sundayTo: fields.sundayTo !== "" ? fields.sundayTo[0].sundayTo : "",
      });

    this.showDateAfterUpdate();
  };
  showDateAfterUpdate = () => {
    let fields = this.state.userData;
    this.setState({ isLoading: true });
    firebase
      .firestore()
      .collection("user")
      .doc(this.props.username)
      .collection("contacts")
      .doc(this.state.doc_id)
      .get()
      .then((snap) => {
        let FN = snap._data;
        console.log(" sjprtconatc ----->", snap);
        console.log(" sjprtconatc ----->", this.state.doc_id);

        this.setState({ u_name: FN.u_name });
        this.setState({ first_name: FN.first_name });
        this.setState({ last_name: FN.last_name });
        this.setState({ number: FN.number1 });
        this.setState({ number2: FN.number2 });
        this.setState({ email: FN.email1 });
        this.setState({ email2: FN.email2 });
        this.setState({ address: FN.address1.toLowerCase() });
        this.setState({ address2: FN.address2 });
        this.setState({ messenger: FN.messenger1 });
        this.setState({ socialMedia: FN.social_media1 });
        this.setState({ website: FN.website });
        this.setState({ date: FN.date });
        this.setState({ note: FN.note });
        this.setState({ company: FN.company });
        this.setState({ jobTitle: FN.jobTitle });
        this.setState({ monday: FN.monday });
        this.setState({ mondayTo: FN.mondayTo });
        this.setState({ tuesday: FN.tuesday });
        this.setState({ tuesdayTo: FN.tuesdayTo });
        this.setState({ wednesday: FN.wednesday });
        this.setState({ wednesdayTo: FN.wednesdayTo });
        this.setState({ thursday: FN.thursday });
        this.setState({ thursdayTo: FN.thursdayTo });
        this.setState({ friday: FN.friday });
        this.setState({ fridayTo: FN.fridayTo });
        this.setState({ saturday: FN.saturday });
        this.setState({ saturdayTo: FN.saturdayTo });
        this.setState({ sunday: FN.sunday });
        this.setState({ sundayTo: FN.sundayTo });
        this.setState({ contactInfoSection: true });
        this.setState({ isLoading: false });
      });
  };
  apiCallForGetSettings = (key) => {
    const { shortcontacts, firstName } = this.state;
    const { username } = this.props;

    let selecte_name = shortcontacts[key].u_name;
    // console.log(" sjprtconatc ----->", shortcontacts);
    firebase
      .firestore()
      .collection("user")
      .doc(selecte_name)
      .get()
      .then((snap) => {
        console.log(" sjprtconatc ----->", snap._data);
        this.setState({ eachUserData: snap._data });
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

  onFlatlist = async (key) => {
    const { shortcontacts, firstName, selectedData } = this.state;
    const { username } = this.props;
    console.log("onFlatlist ----->", shortcontacts[key].item);
    let FN = shortcontacts[key];
    this.props.navigation.navigate("Profile", {
      contactData: shortcontacts[key].item,
    });
  };

  onFlatlist1 = async (key, first_name, last_name, user_name) => {
   
    this.setState({ isLoading: true, forKey: key });
    const { shortcontacts, firstName } = this.state;
    const { username } = this.props;
    let FN = shortcontacts[key];
    firstName.push(FN);
    this.setState({ selectedData: shortcontacts[key] });
    this.setState({ userData: shortcontacts[key] });
    let selecte_name = shortcontacts[key].u_name;

    firebase
      .firestore()
      .collection("user")
      .doc(username)
      .collection("contacts")
      .get()
      .then((snap) => {
        snap.docs.forEach((doc_id) => {
          if (selecte_name == doc_id._data.u_name) {
            this.setState({ doc_id: doc_id.id });
            console.log("true ----->", doc_id.id);
          }
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
              this.apiCallForGetSettings(key);
            }
          }
          if (FN.isManually == true) {
            // const baseurl = Constants.baseurl;
            // var _body = new FormData();
            // _body.append("docid", this.state.doc_id);

            // fetch(baseurl + "get_uplopimages_doc", {
            //   method: "POST",
            //   body: _body,
            // })
            //   .then((response) => {
            //     return response.json();
            //   })
            //   .then((responseJson) => {
            //     if (responseJson.status == false) {
            //       this.isManuallyContactFuction();
            //     } else {
            //       responseJson.data.map((img) => {
            //         console.log("profile --->", img);
            //         if (img.position == 1) {
            //           firebase
            //             .firestore()
            //             .collection("user")
            //             .doc(username)
            //             .collection("contacts")
            //             .doc(doc_id)
            //             .update({ profile_image: img.profile });
            //           this.setState({ profile_image: img.profile });
            //           console.log(
            //             "profile image profile 111 --->",
            //             img.profile
            //           );
            //         }
            //         if (img.position == 2) {
            //           this.setState({ profile_image2: img.profile });
            //           firebase
            //             .firestore()
            //             .collection("user")
            //             .doc(username)
            //             .collection("contacts")
            //             .doc(doc_id)
            //             .update({ profile_image2: img.profile });
            //           if (img.profile !== "") {
            //             this.setState({ rightSec: true });
            //           }
            //           console.log(
            //             "profile image 22 --->",
            //             this.state.profile_image2
            //           );
            //         }
            //         if (img.position == 3) {
            //           console.log("profile image 3 --->", img.profile);
            //           firebase
            //             .firestore()
            //             .collection("user")
            //             .doc(username)
            //             .collection("contacts")
            //             .doc(doc_id)
            //             .update({ profile_image3: img.profile });
            //           this.setState({ profile_image3: img.profile });
            //         }
            this.isManuallyContactFuction();
            //     });
            //   }
            // })
            // .catch((error) => {
            //   console.log("name error---->", error);
            // });
          }
          if (doc._data.isImport == true) {
            // const baseurl = Constants.baseurl;
            // var _body = new FormData();
            // _body.append("docid", this.state.doc_id);

            // fetch(baseurl + "get_uplopimages_doc", {
            //   method: "POST",
            //   body: _body,
            // })
            //   .then((response) => {
            //     return response.json();
            //   })
            //   .then((responseJson) => {
            //     // console.log("name error---->", responseJson);
            //     if (responseJson.status == false) {
            //     } else {
            //       responseJson.data.map((img) => {
            //         console.log("profile --->", img);
            //         if (img.position == 1) {
            //           this.setState({ profile_image: img.profile });
            //           firebase
            //             .firestore()
            //             .collection("user")
            //             .doc(username)
            //             .collection("contacts")
            //             .doc(doc_id)
            //             .update({ profile_image: img.profile });
            //           console.log(
            //             "profile image profile 111 --->",
            //             this.state.profile_image
            //           );
            //         }
            //         if (img.position == 2) {
            //           firebase
            //             .firestore()
            //             .collection("user")
            //             .doc(username)
            //             .collection("contacts")
            //             .doc(doc_id)
            //             .update({ profile_image2: img.profile });
            //           this.setState({ profile_image2: img.profile });
            //           if (img.profile !== "") {
            //             this.setState({ rightSec: true });
            //           }
            //           console.log(
            //             "profile image 22 --->",
            //             this.state.profile_image2
            //           );
            //         }
            //         if (img.position == 3) {
            //           console.log("profile image 3 --->", img.profile);
            //           firebase
            //             .firestore()
            //             .collection("user")
            //             .doc(username)
            //             .collection("contacts")
            //             .doc(doc_id)
            //             .update({ profile_image3: img.profile });
            //           this.setState({ profile_image3: img.profile });
            //         }
            //       });
            //     }
            //   })
            //   .catch((error) => {
            //     console.log("name error---->", error);
            //   });
            this.isImportContacFuction(doc._data);
          }
        });
      });
  };

  isManuallyContactFuction = () => {
    this.setState({ isLoading: true });
    firebase
      .firestore()
      .collection("user")
      .doc(this.props.username)
      .collection("contacts")
      .doc(this.state.doc_id)
      .get()
      .then((doc) => {
        let FN = doc._data;

        this.setState({ selectedData: FN });
        this.setState({ profile_image: FN.profile_image });
        this.setState({ profile_image2: FN.profile_image2 });
        if (FN.profile_image2 !== "") {
          this.setState({ rightSec: true });
        }
        this.setState({ u_name: FN.u_name });
        this.setState({ profile_image3: FN.profile_image3 });
        this.setState({ first_name: FN.first_name });
        this.setState({ last_name: FN.last_name });

        this.setState({ number: FN.number1 });
        this.setState({ number2: FN.number2 });
        this.setState({ email: FN.email1 });
        this.setState({ email2: FN.email2 });
        this.setState({ address: FN.address1 });
        this.setState({ address2: FN.address2 });
        this.setState({ messenger: FN.messenger1 });
        this.setState({ socialMedia: FN.social_media1 });
        this.setState({ website: FN.website });
        this.setState({ date: FN.date });
        this.setState({ note: FN.note });
        this.setState({ company: FN.company });
        this.setState({ jobTitle: FN.jobTitle });
        this.setState({ monday: FN.monday });
        this.setState({ mondayTo: FN.mondayTo });
        this.setState({ tuesday: FN.tuesday });
        this.setState({ tuesdayTo: FN.tuesdayTo });
        this.setState({ wednesday: FN.wednesday });
        this.setState({ wednesdayTo: FN.wednesdayTo });
        this.setState({ thursday: FN.thursday });
        this.setState({ thursdayTo: FN.thursdayTo });
        this.setState({ friday: FN.friday });
        this.setState({ fridayTo: FN.fridayTo });
        this.setState({ saturday: FN.saturday });
        this.setState({ saturdayTo: FN.saturdayTo });
        this.setState({ sunday: FN.sunday });
        this.setState({ sundayTo: FN.sundayTo });
        this.setState({ contactInfoSection: true });
        this.setState({ isLoading: false });
      });
  };
  isImportContacFuction = () => {
    this.setState({ contactInfoSection: true });
    this.setState({ isLoading: true });
    firebase
      .firestore()
      .collection("user")
      .doc(this.props.username)
      .collection("contacts")
      .doc(this.state.doc_id)
      .get()
      .then((doc) => {
        let fields = doc._data;

        this.setState({ selectedData: fields });
        this.setState({ first_name: fields.first_name });
        this.setState({ last_name: fields.last_name });
        this.setState({ u_name: fields.u_name });
        this.setState({ isLoading: false });
        this.setState({ profile_image: fields.profile_image });
        this.setState({ profile_image2: fields.profile_image2 });
        if (fields.profile_image2 !== "") {
          this.setState({ rightSec: true });
        }

        this.setState({ profile_image3: fields.profile_image3 });
        this.setState({ number: fields.number1 });
        this.setState({ address: fields.address1 });
        this.setState({ address2: fields.address2 });
        this.setState({ email: fields.email1 });
        this.setState({ number2: fields.number2 });
        this.setState({ email2: fields.email2 });
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
      });
  };
  handlerLongClick = () => {
    this.setState({ deletePortion: true });
    // {
    //   this.state.doc_IDS == "" ? null :
    // }
  };
  onchecked = (keyInd, selected) => {
    let arr = this.state.shortcontacts.map((item, key) => {
      if (keyInd == key) {
        item.isSelect = !item.isSelect;
      }
      return { ...item };
    });
    this.setState({ shortcontacts: arr });
  };
  renderItem({ item, index }) {
    //  console.log("  press----->", item);
    const character = (item.item.last_name || item.item.first_name).charAt(0);
    //  const character =   "A"
    return (
      <TouchableOpacity
        style={styles.quardView}
        onPress={() => {
          this.onFlatlist(index);
        }}
        onLongPress={this.handlerLongClick}
      >
        {this.state.deletePortion == true ? (
          <CheckBox
            value={item.isSelect}
            onChange={() => {
              this.onchecked(index, item.isSelect);
            }}
            tintColors={{ true: "#1374A3", false: "#1374A3" }}
          />
        ) : null}

        <View style={styles.imgView}>
          {item.item.profile_image == "" ? (
            item.item.profile_image2 == "" ? (
              item.item.profile_image3 == "" ? (
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
                  source={{ uri: item.item.profile_image3 }}
                  style={styles.profileImage}
                />
              )
            ) : (
              <Image
                source={{ uri: item.item.profile_image2 }}
                style={styles.profileImage}
              />
            )
          ) : (
            <Image
              source={{ uri: item.item.profile_image }}
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
            {item.item.last_name} {item.item.user_name || item.item.first_name}{" "}
            {item.item.middle_name}
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
            {item.item.last_name} {item.item.middle_name}{" "}
            {item.item.user_name || item.item.first_name}
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
            {item.item.user_name || item.item.first_name}{" "}
            {item.item.middle_name} {item.item.last_name}
          </Text>
        )}

        {/* {item.isImport == false ? ( */}
          {item.item.isManually  == true ? 
          <Image source={edit} style={styles.editImgStyle} />
          : null}
         {item.item.isImport  == true ? 
         <Image source={edit} style={styles.editImgStyle} />
        : null}
        
        {item.item.isImport  == false ?
        <Image source={reset} style={styles.resetImgStyle} />
         :null
         }
        {item.item.serverDatapdate  == true ? 
        <Image source={edit} style={styles.editImgStyle} />
        : null}
        {/* // ) : (
        
        //   <Image source={reset} style={styles.resetImgStyle} />
        // )} */}
      </TouchableOpacity>
    );
  }
  selectAll = () => {
    const { shortcontacts } = this.state;
    let contactArr = shortcontacts.map((item, key) => {
      this.state.checkedOff == true
        ? (item.isSelect = true)
        : (item.isSelect = false);
      item.isSelect = !item.isSelect;
      this.setState({ checkedOff: !this.state.checkedOff });
      return { ...item };
    });
    this.setState({ shortcontacts : contactArr });
  };
  renderMiddle() {
    return (
      <View>
          {this.state.deletePortion == true ?  
        <TouchableOpacity
          style={styles.checkboxView}
          onPress={() => {
            this.selectAll();
          }}
        >
          {this.state.checkedOff == true ? (
            <View style={styles.checkViewForLight}>
              {this.props.theme.mode === "light" ? (
                <Image source={checkedWhite} style={styles.checkedStyle} />
              ) : (
                <Image source={checkedModified} style={styles.checkedStyle} />
              )}
            </View>
          ) : (
            <View style={styles.checkView}></View>
          )}
          <Text
            style={[
              styles.deSelectText,
              {
                color: this.props.theme.mode === "light" ? "#1374A3" : "white",
                marginLeft: Metrics.smallMargin,
              },
            ]}
          >
            Select (De-select) All
          </Text>
        </TouchableOpacity>
        : null}
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

  renderLast() {
    return (
      <View
        style={{
          alignItems: "flex-end",
          marginRight: Metrics.baseMargin,
        }}
      >
        <View style={{ bottom: 30, position: "absolute" }}>
          {this.state.deletePortion == true ? (
            <TouchableOpacity
              style={styles.Whiteview}
              onPress={this.delete_Contacts}
            >
              <Image source={DeleteImg} style={styles.deleteStyle} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.Whiteview}
              onPress={this.plusnavigate}
            >
              <Image source={plus} style={styles.plusStyle} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
  delete_Contacts = () => {
    this.setState({ isLoading: true });
    firebase
      .firestore()
      .collection("user")
      .doc(this.props.username)
      .collection("contacts")
      .get()
      .then((snap) => {
        this.setState({ doc_IDS: [] });
        snap.docs.forEach((doc_id) => {
          // this.state.doc_IDS.push(doc_id.id);
          this.state.shortcontacts.map((item, index) => {
            if (item.isSelect == true) {
              let u_name = item.item.u_name;
              // this.state.doc_ID.push(u_name)
              if (u_name == doc_id._data.u_name) {
                console.log("long press----->", doc_id.id);
                this.state.deleteID.push(doc_id.id);
              }
            }
          });
        });
        this.Data_delete();
      });
  };
  Data_delete = () => {
    this.state.deleteID.map((item, index) => {
      firebase
        .firestore()
        .collection("user")
        .doc(this.props.username)
        .collection("contacts")
        .doc(item)
        .delete();
    });
    this.setState({ deletePortion: false });
    this.setState({ isLoading: false });
    console.log("long press----->", this.state.deleteID);
    if (this.props.contactChange.mode === "first") {
      this.contactList();
      console.log("first");
    } else {
      this.contactListFirst();
      console.log("Last");
    }
  };
  plusnavigate = () => {
    this.setState({ contact: [] });
    this.props.navigation.navigate("ManuallyAddContact");
    // firebase
    //   .firestore()
    //   .collection("user")
    //   .doc(this.props.username)
    //   .collection("contacts")
    //   .doc("xX2NvRkykEJpBhZhvM9p")
    //   .delete();
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
        MondayTo,
        Tuesday,
        TuesdayTo,
        Wednesday,
        WednesdayTo,
        Thursday,
        ThursdayTo,
        Friday,
        FridayTo,
        Saturday,
        SaturdayTo,
        Sunday,
        SundayTo,
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
          .update({ address1: Address.toLowerCase(), isAddressUpdate: true });
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
      if (MondayTo == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ mondayTo: MondayTo, isWorkHoursUpdate: true });
      }
      if (Tuesday == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ tuesday: Tuesday, isWorkHoursUpdate: true });
      }
      if (TuesdayTo == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ tuesdayTo: TuesdayTo, isWorkHoursUpdate: true });
      }
      if (Wednesday == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ wednesday: Wednesday, isWorkHoursUpdate: true });
      }
      if (WednesdayTo == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ wednesdayTo: WednesdayTo, isWorkHoursUpdate: true });
      }
      if (Thursday == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ thursday: Thursday, isWorkHoursUpdate: true });
      }
      if (ThursdayTo == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ thursdayTo: ThursdayTo, isWorkHoursUpdate: true });
      }
      if (Friday == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ friday: Friday, isWorkHoursUpdate: true });
      }
      if (FridayTo == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ fridayTo: FridayTo, isWorkHoursUpdate: true });
      }
      if (Saturday == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ saturday: Saturday, isWorkHoursUpdate: true });
      }
      if (SaturdayTo == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ saturdayTo: SaturdayTo, isWorkHoursUpdate: true });
      }
      if (Sunday == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ sunday: Sunday, isWorkHoursUpdate: true });
      }
      if (SundayTo == "") {
      } else {
        firebase
          .firestore()
          .collection("user")
          .doc(username)
          .collection("contacts")
          .doc(doc_id)
          .update({ sundayTo: SundayTo, isWorkHoursUpdate: true });
      }
      // this.setState({ contactInfoSection: false });
      if (this.state.selectedData.isImport == true) {
        console.log("isImport   true----->");
        this.isImportContacFuction();
      }
      if (this.state.selectedData.isManually == true) {
        console.log("isManually--  true  --->");
        this.isManuallyContactFuction();
      }
      if (this.state.selectedData.isImport == false) {
        console.log("isImport-    false ---->");
        this.showDateAfterUpdate();
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
    this.setState({ isAddressSection: true });
    if (this.state.isAddressSection == true) {
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
                        multiline={true}
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
                      {
                        marginTop: Metrics.baseMargin,
                        textTransform: "capitalize",
                      },
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
                        multiline={true}
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
  onChangeDate = (date) => {
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
                  this.state.fomateDate == "" ? (
                    <View>
                      <TouchableOpacity
                        style={{ width: width * 0.5 }}
                        onPress={() => this.showDatePicker()}
                      >
                        <Text style={styles.stylefiledText}>Date</Text>
                      </TouchableOpacity>
                      <DateTimePickerModal
                        isVisible={this.state.isVisible}
                        onConfirm={(date) => this.onChangeDate(date)}
                        onCancel={this.hidePicker}
                        mode="date"
                        is24Hour={false}
                        titleIOS="Pick your Notification time"
                      />
                    </View>
                  ) : (
                    <Text style={styles.stylefiledText}>
                      {this.state.fomateDate}
                    </Text>
                  )
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
                        multiline={true}
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
                          value={this.state.Monday}
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
                          value={this.state.MondayTo}
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
                          value={this.state.Tuesday}
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
                          value={this.state.TuesdayTo}
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
                          value={this.state.Wednesday}
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
                          value={this.state.WednesdayTo}
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
                          value={this.state.Thursday}
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
                          value={this.state.ThursdayTo}
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
                          value={this.state.Friday}
                          onChangeText={(value) => {
                            this.setState({ Friday: value });
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
                          value={this.state.FridayTo}
                          onChangeText={(value) => {
                            this.setState({ FridayTo: value });
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
                          value={this.state.Saturday}
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
                          value={this.state.SaturdayTo}
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
                          value={this.state.Sunday}
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
                          value={this.state.SundayTo}
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
                        <Text style={styles.timeText2}>
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
                        <Text style={styles.timeText2}>
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
                        <Text style={styles.timeText2}>
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
                        <Text style={styles.timeText2}>
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
                        <Text style={styles.timeText2}>
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
                        <Text style={styles.timeText2}>
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
                        <Text style={styles.timeText2}>
                          {this.state.thursday}
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
                        <Text style={styles.timeText2}>
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
                        <Text style={styles.timeText2}>
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
                        <Text style={styles.timeText2}>
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
                        <Text style={styles.timeText2}>
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
                        <Text style={styles.timeText2}>
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
                        <Text style={styles.timeText2}>
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
                        <Text style={styles.timeText2}>
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
                    {this.state.shortcontacts == "" ? (
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
