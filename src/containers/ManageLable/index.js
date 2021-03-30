import { ActionSheet, Root } from "native-base";
import {
  BackHandler,
  Dimensions,
  FlatList,
  Image,
  Keyboard,
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
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
import Header from "../../components/header/backHeader";
import Icon from "react-native-vector-icons/Entypo";
import ImagePicker from "react-native-image-crop-picker";
import IntlPhoneInput from "react-native-intl-phone-input";
import Metrics from "../theme/Metrics";
import { Spinner } from "../../components/Spinner";
import Toast from "react-native-easy-toast";
import checked from "../../assets/icons/checked.png";
import { connect } from "react-redux";
import downArrow from "../../assets/icons/dropIcon.png";
import firebase from "../../services/FirebaseDatabase/db";
import { manageLabelToFirebase } from "../../services/FirebaseDatabase/managelabelToFirebase";
import moment from "moment";
import styles from "./style.js";
var { width, height } = Dimensions.get("window");
var momentTime = require("moment-timezone");
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
var BUTTONS = ["Take Photo", "Choose Photo From Gallery", "Cancel"];
class ManageLable extends Component {
  constructor() {
    super();
    this.state = {
      selectItem: "",
      status: true,
      selectAll: false,
      selectedName: "",
      first_name: "",
      last_name: "",
      middle_name: "",
      nick_name: "",
      phone_1: "",
      phone_2: "",
      phone_3: "",

      address: "",
      isLoading: false,
      date: "",
      note: "",
      company: "",
      job_title: "",
      work_hour: {
        monday: { first: "", to: "" },
        tuesday: { first: "", to: "" },
        wednesday: { first: "", to: "" },
        thursday: { first: "", to: "" },
        friday: { first: "", to: "" },
        saturday: { first: "", to: "" },
        sunday: { first: "", to: "" },
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
      checked_address2: false,
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

      profile_image: "",
      profile_image2: "",
      profile_image3: "",
      // work hour

      tz: [],
      tzs: "",
      workViewOpen: false,

      boolean_first_name: "0",
      boolean_last_name: "0",
      boolean_middle_name: "0",
      boolean_nick_name: "0",
      boolean_profile_image: "0",
      boolean_profile_image2: "0",
      boolean_profile_image3: "0",
      boolean_number: "0",
      boolean_number2: "0",
      boolean_email: "0",
      boolean_messenger: "0",
      boolean_socialMedia: "0",
      boolean_socialMedia2: "0",
      boolean_address: "0",
      boolean_address2: "0",
      boolean_note: "0",
      boolean_website: "0",
      boolean_date: "0",
      boolean_company: "0",
      boolean_jobTitle: "0",
      // boolean_profile_image:"0",
      // boolean_profile_image2:"0",
      // boolean_profile_image3:"0",
      boolean_work_hours: "0",
      // new data
      iSec: false,
      labelID : "",
    };
  }
backAction = () => {
  this.setState({ flatViewOpen: false });
  this.props.navigation.navigate("Label");
  return true;
};
  async componentDidMount() {
    const { navigation } = this.props;
    this.checkImageUploaded();
    this.setState({
      selectedName: await AsyncStorage.getItem("@selectedName"),
    });
    this.setState({ isLoading: true });
    this.focusListener = navigation.addListener("didFocus", async () => {
      this.labelList();
    });
    // BackHandler.addEventListener("hardwareBackPress", this.backAction);
  };

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backAction);
    
  }


  checkListCall = () => {
    const { selectedName, labelID } = this.state;

    const baseurl = Constants.baseurl;
    var _body = new FormData();
    _body.append("relation_id", labelID);
    _body.append("user_id", this.props.user_id);
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
        if (responseJson.status == false) {
          console.log("labellee  -------->", responseJson.status);
        } else {
          console.log("false   -------->", responseJson.status);
          console.log("false   -------->", item);
          if(item.image_1 == 1){
            this.setState({ iSec : true})
          }
          if(item.image_2 == 1){
            this.setState({ iSec2 : true})
          }
          if(item.image_3 == 1){
            this.setState({ iSec3 : true})
          }
          if(item.first_name == 1){
            this.setState({ checked_first_name : true})
          }
          if(item.last_name == 1){
            this.setState({ checked_last_name : true})
          }
          if(item.middle_name == 1){
            this.setState({ checked_middle_name : true})
          }
          if(item.nick_name == 1){
            this.setState({ checked_nick_name : true})
          }
          if(item.phone_number == 1){
            this.setState({ checked_phone_1 : true})
          }
          if(item.email == 1){
            this.setState({ checked_email_1 : true})
          }
          if(item.address == 1){
            this.setState({ checked_address : true})
          }
          if(item.address_2 == 1){
            this.setState({ checked_address2 : true})
          }
          if(item.messenger == 1){
            this.setState({ checked_messagner_1 : true})
          }
          if(item.Social_media == 1){
            this.setState({ checked_social_media_1 : true})
          }
          if(item.sociale_media_2 == 1){
            this.setState({ checked_social_media_2 : true})
          }
          if(item.website == 1){
           this.setState({ checked_website_1 : true})
          }
          if(item.date == 1){
            this.setState({ checked_date : true})
          }
          if(item.note == 1){
            this.setState({ checked_note : true})
          }
          if(item.company == 1){
            this.setState({ checked_company : true})
          }
          if(item.job_title == 1){
            this.setState({ checked_job_title : true})
          }
          if(item.work_hours == 1){
            this.setState({ checked_work_hours : true})
          }
        }
        this.firebaseDataCAll();
      });
  };
  checkImageUploaded = () => {
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
        console.log("profile --->", responseJson.data);
        responseJson.data.map((item) => {
          // console.log("profile --->", item);
          if (item.position == 1) {
            this.setState({ profile_image: item.profile });
            console.log("profile image profile 111 --->", item.profile);
          }
          if (item.position == 2) {
            this.setState({ profile_image2: item.profile });
            console.log("profile image profile 22 --->", item.profile);
          }
          if (item.position == 3) {
            this.setState({ profile_image3: item.profile });
            console.log("profile image profile 333 --->", item.profile);
          }
        });
        //  this.setState({ isLoading: false });
      })
      .catch((error) => {
        console.log("name error---->", error);
        this.setState({ isLoading: false });
      });
  };
  firebaseDataCAll = () => {
    const { username } = this.props;
    this.setState({ isLoading: true }, () => {
      firebase
        .firestore()
        .collection("user")
        .doc(username)
        .get()
        .then((snap) => {
          var item = snap._data;
          this.setState({ contact: item });
          //   console.log("social media ---->", item);
          // this.setState({ profile_image: item.profile_image });
          // this.setState({ profile_image2: item.profile_image2 });
          // this.setState({ profile_image3: item.profile_image3});
          this.setState({ first_name: item.first_name });
          this.setState({ last_name: item.last_name });
          this.setState({ middle_name: item.middle_name });
          this.setState({ nick_name: item.nick_name });
          {
            item.number !== ""
              ? this.setState({ number: item.number[0].phone })
              : null;
          }
          {
            item.email !== ""
              ? this.setState({ email: item.email[0].email })
              : null;
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
              ? this.setState({ company: item.company[0].company })
              : null;
          }
          {
            item.jobTitle !== ""
              ? this.setState({ jobTitle: item.jobTitle[0].jobTitle })
              : null;
          }
          {
            item.date !== ""
              ? this.setState({ date: item.date[0].date })
              : null;
          }

          {
            item.monday !== ""
              ? this.setState({ monday: item.monday[0].monday })
              : null;
          }
          {
            item.mondayTo !== ""
              ? this.setState({ mondayTo: item.mondayTo[0].mondayTo })
              : null;
          }
          {
            item.tuesday !== ""
              ? this.setState({ tuesday: item.tuesday[0].tuesday })
              : null;
          }
          {
            item.tuesdayTo !== ""
              ? this.setState({ tuesdayTo: item.tuesdayTo[0].tuesdayTo })
              : null;
          }
          {
            item.wednesday !== ""
              ? this.setState({ wednesday: item.wednesday[0].wednesday })
              : null;
          }
          {
            item.wednesdayTo !== ""
              ? this.setState({ wednesdayTo: item.wednesdayTo[0].wednesdayTo })
              : null;
          }
          {
            item.thursday !== ""
              ? this.setState({ thursday: item.thursday[0].thursday })
              : null;
          }
          {
            item.thursdayTo !== ""
              ? this.setState({ thursdayTo: item.thursdayTo[0].thursdayTo })
              : null;
          }
          {
            item.friday !== ""
              ? this.setState({ friday: item.friday[0].friday })
              : null;
          }
          {
            item.fridayTo !== ""
              ? this.setState({ fridayTo: item.fridayTo[0].fridayTo })
              : null;
          }
          {
            item.saturday !== ""
              ? this.setState({ saturday: item.saturday[0].saturday })
              : null;
          }
          {
            item.saturdayTo !== ""
              ? this.setState({ saturdayTo: item.saturdayTo[0].saturdayTo })
              : null;
          }
          {
            item.sunday !== ""
              ? this.setState({ sunday: item.sunday[0].sunday })
              : null;
          }
          {
            item.sundayTo !== ""
              ? this.setState({ sundayTo: item.sundayTo[0].sundayTo })
              : null;
          }
          this.setState({ isLoading: false });
        });
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
          console.log("  responseJson  --->",responseJson.data);
          if (responseJson.data.relation == "") {
            this.setState({ dataManage: [], isLoading: false });
          } else {
            var labelData2 = responseJson.data.map((item, index) => {
              if (item.relation == this.state.selectedName) {
                this.setState({ labelID: item.id });
                console.log("   --->", this.state.labelID);
              }
            });
            var labelData = responseJson.data.map((item, index) => {
              return {
                relation: item.relation,
                isSelect: false,
                labelID: item.id,
              };
            });
            this.setState({ dataManage: labelData });
          //  this.setState({ isLoading: false });
          }
          this.checkListCall();
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
        onPress={() =>  this.props.navigation.navigate("Label")}
      />
    );
  }
  selectPhoto = () => {
    if (this.state.status == true) {
      if (this.state.iSec == true) {
        this.setState({ iSec: false, boolean_profile_image: 0 });
      } else {
        this.setState({ iSec: true, boolean_profile_image: 1 });
      }
    }
  };
  selectPhoto2 = () => {
    if (this.state.status == true) {
      if (this.state.iSec2 == true) {
        this.setState({ iSec2: false, boolean_profile_image2: 0 });
      } else {
        this.setState({ iSec2: true, boolean_profile_image2: 1 });
      }
    }
  };
  selectPhoto3 = () => {
    if (this.state.status == true) {
      if (this.state.iSec3 == true) {
        this.setState({ iSec3: false, boolean_profile_image3: 0 });
      } else {
        this.setState({ iSec3: true, boolean_profile_image3: 1 });
      }
    }
  };
  renderMiddle() {
    return (
      <Root>
        <View style={{ alignItems: "center" }}>
          <View style={styles.middleView}>
            <View style={styles.firstMiddle}>
              <View style={styles.squareBorder}>
                <Image
                  source={{ uri: this.state.profile_image }}
                  style={styles.SqureImage}
                />
              </View>
              
              <TouchableOpacity
              style={[
                styles.first,
                {
                  backgroundColor: this.state.iSec
                    ? COLORS.main_text_color
                    : COLORS.white,
                },
              ]}
              onPress={this.selectPhoto}
            ></TouchableOpacity> 
         
              
            </View>
            <View style={styles.firstMiddle}>
              <View style={styles.squareBorder}>
                <Image
                  source={{ uri: this.state.profile_image2 }}
                  style={styles.SqureImage}
                />
              </View>
              <TouchableOpacity
                style={[
                  styles.first,
                  {
                    backgroundColor: this.state.iSec2
                      ? COLORS.main_text_color
                      : COLORS.white,
                  },
                ]}
                onPress={this.selectPhoto2}
              ></TouchableOpacity>
            </View>
            <View style={styles.firstMiddle}>
              <View style={styles.squareBorder}>
                <Image
                  source={{ uri: this.state.profile_image3 }}
                  style={styles.SqureImage}
                />
              </View>
              <TouchableOpacity
                style={[
                  styles.first,
                  {
                    backgroundColor: this.state.iSec3
                      ? COLORS.main_text_color
                      : COLORS.white,
                  },
                ]}
                onPress={this.selectPhoto3}
              ></TouchableOpacity>
            </View>
          </View>
        </View>
      </Root>
    );
  }

  first_name_submit = () => {
    const { checked_first_name } = this.state;
    if (checked_first_name == true) {
      this.setState({ checked_first_name: false, boolean_first_name: 0 });
    } else {
      this.setState({ checked_first_name: true, boolean_first_name: 1 });
    }
  };
  middle_name_submit = () => {
    const { checked_middle_name } = this.state;
    if (checked_middle_name == true) {
      this.setState({ checked_middle_name: false, boolean_middle_name: 0 });
    } else {
      this.setState({ checked_middle_name: true, boolean_middle_name: 1 });
    }
  };
  last_name_submit = () => {
    const { checked_last_name } = this.state;
    if (checked_last_name == true) {
      this.setState({ checked_last_name: false, boolean_last_name: 0 });
    } else {
      this.setState({ checked_last_name: true, boolean_last_name: 1 });
    }
  };
  nick_name_submit = () => {
    const { checked_nick_name } = this.state;
    if (checked_nick_name == true) {
      this.setState({ checked_nick_name: false, boolean_nick_name: 0 });
    } else {
      this.setState({ checked_nick_name: true, boolean_nick_name: 1 });
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
          <TouchableOpacity style={styles.mainView}>
            <CheckBox
              value={this.state.checked_first_name}
              onValueChange={this.first_name_submit}
              tintColors={{ true: "#1374A3", false: "#1374A3" }}
            />
            <View style={styles.filedView}>
              <Text style={styles.stylefiledText}>{this.state.first_name}</Text>

              <View style={styles.rightView}>
                <Text style={styles.righttext}>First Name</Text>
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.mainView}>
            <CheckBox
              value={this.state.checked_first_name}
              onValueChange={this.first_name_submit}
              tintColors={{ true: "#1374A3", false: "#1374A3" }}
            />
            <View style={styles.filedView}>
              <Text style={styles.stylefiledText}>{this.state.first_name}</Text>
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
              <Text style={styles.stylefiledText}>
                {this.state.middle_name}
              </Text>
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Middle Name</Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked_middle_name}
            onValueChange={this.middle_name_submit}
            tintColors={{ true: "#1374A3", false: "#1374A3" }}
          />
            <View style={styles.filedView}>
              <Text style={styles.stylefiledText}>
                {this.state.middle_name}
              </Text>
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
              <Text style={styles.stylefiledText}>{this.state.last_name}</Text>
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Last Name</Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.filedView}>
              <Text style={styles.stylefiledText}>{this.state.last_name}</Text>
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
              <Text style={styles.stylefiledText}>{this.state.nick_name}</Text>
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Nick Name</Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.filedView}>
              <Text style={styles.stylefiledText}>{this.state.nick_name}</Text>
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
      this.setState({ checked_phone_1: false, boolean_number: 0 });
    } else {
      this.setState({ checked_phone_1: true, boolean_number: 1 });
    }
  };
  onChangeNumber_1 = (value) => {
    this.setState({ phone_1: value });
  };

  phone_2_submit = () => {
    const { checked_phone_2 } = this.state;
    if (checked_phone_2 == true) {
      this.setState({ checked_phone_2: false, boolean_number2: 0 });
    } else {
      this.setState({ checked_phone_2: true, boolean_number2: 1 });
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
              <View
                style={{
                  width: width * 0.8,
                  height: width * 0.03,
                  flexDirection: "row",
                }}
              >
                <Text style={[styles.rightTextMobile, { marginLeft: 5 }]}>
                  Phone Number
                </Text>
                <View style={styles.rightViewMobile}>
                  <Text style={styles.rightTextMobile}>Personal(Mobile)</Text>
                </View>
              </View>

              <View style={{}}>
                <Text style={styles.stylefiledText}>{this.state.number}</Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.filedView}>
              <Text style={styles.stylefiledText}>{this.state.number}</Text>
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
      this.setState({ checked_email_1: false, boolean_email: 0 });
    } else {
      this.setState({ checked_email_1: true, boolean_email: 1 });
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
              <View
                style={{
                  width: width * 0.8,
                  height: width * 0.03,
                  flexDirection: "row",
                }}
              >
                <Text style={[styles.rightTextMobile, { marginLeft: 5 }]}>
                  E-mail
                </Text>
                <View style={styles.rightViewMobile}>
                  <Text style={styles.rightTextMobile}>Personal</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.stylefiledText}>{this.state.email}</Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.filedView}>
              <Text style={styles.stylefiledText}>{this.state.email}</Text>
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
      this.setState({ checked_address: false, boolean_address: 0 });
    } else {
      this.setState({ checked_address: true, boolean_address: 1 });
    }
  };
  address_submit2 = () => {
    const { checked_address2 } = this.state;
    if (checked_address2 == true) {
      this.setState({ checked_address2: false, boolean_address2: 0 });
    } else {
      this.setState({ checked_address2: true, boolean_address2: 1 });
    }
  };
  onChangeAddress = (value) => {
    this.state.address.address = value;
    this.setState({ address: this.state.address });
  };

  onChangeAddress2 = (value) => {
    this.state.address2.address = value;
    this.setState({ address2: this.state.address2 });
  };

  changeAddressLabel = (label) => {
    this.setState({ isAddressModelOpen: false });
    this.state.address.label = label;
    this.setState({ address2: this.state.address });
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
              <View
                style={{
                  width: width * 0.8,
                  height: width * 0.03,
                  flexDirection: "row",
                }}
              >
                <Text style={[styles.rightTextMobile, { marginLeft: 5 }]}>
                  Personal
                </Text>
                <View style={styles.rightViewMobile}>
                  <Text style={styles.rightTextMobile}>Personal</Text>
                </View>
              </View>
              <Text style={styles.stylefiledText}>{this.state.address}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.addressFieldContainer}>
              <Text style={styles.stylefiledText}>{this.state.address}</Text>
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Address</Text>
              </View>
            </View>
          </View>
        )}
        {this.state.status ? (
          <View style={{ flexDirection: "row" }}>
            <CheckBox
              value={this.state.checked_address2}
              onValueChange={this.address_submit2}
              tintColors={{ true: "#1374A3", false: "#1374A3" }}
            />
            <View style={styles.addressFieldContainerAddress}>
              <View
                style={{
                  width: width * 0.8,
                  height: width * 0.03,
                  flexDirection: "row",
                }}
              >
                <Text style={[styles.rightTextMobile, { marginLeft: 5 }]}>
                  Address
                </Text>
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
                editable={this.state.checked_address2 == false ? false : true}
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
                {this.state.address2}
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
      this.setState({ checked_messagner_1: false, boolean_messenger: 0 });
    } else {
      this.setState({ checked_messagner_1: true, boolean_messenger: 1 });
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
              <View
                style={{
                  width: width * 0.8,
                  height: width * 0.03,
                  flexDirection: "row",
                }}
              >
                <Text style={[styles.rightTextMobile, { marginLeft: 5 }]}>
                  Messenger
                </Text>
                <View style={styles.rightViewMobile}>
                  <Text style={styles.rightTextMobile}>Facebook Messenger</Text>
                </View>
              </View>

              <Text style={styles.stylefiledText}>{this.state.messenger}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.filedView}>
              <Text style={styles.stylefiledText}>{this.state.messenger}</Text>
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
      this.setState({ checked_social_media_1: false, boolean_socialMedia: 0 });
    } else {
      this.setState({ checked_social_media_1: true, boolean_socialMedia: 1 });
    }
  };
  socil_media_2_submit = () => {
    const { checked_social_media_2 } = this.state;
    if (checked_social_media_2 == true) {
      this.setState({ checked_social_media_2: false, boolean_socialMedia2: 0 });
    } else {
      this.setState({ checked_social_media_2: true, boolean_socialMedia2: 1 });
    }
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
              <View
                style={{
                  width: width * 0.8,
                  height: width * 0.03,
                  flexDirection: "row",
                }}
              >
                <Text style={[styles.rightTextMobile, { marginLeft: 5 }]}>
                  Social Media
                </Text>
                <View style={styles.rightViewMobile}>
                  <Text style={styles.rightTextMobile}>Twitter</Text>
                </View>
              </View>
              <Text style={styles.stylefiledText}>
                {this.state.socialMedia}
              </Text>
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.filedView}>
              <Text style={styles.stylefiledText}>
                {this.state.socialMedia}
              </Text>

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
              <View
                style={{
                  width: width * 0.8,
                  height: width * 0.03,
                  flexDirection: "row",
                }}
              >
                <Text style={[styles.rightTextMobile, { marginLeft: 5 }]}>
                  Social Media
                </Text>
                <View style={styles.rightViewMobile}>
                  <Text style={styles.rightTextMobile}>Instagram</Text>
                </View>
              </View>
              <Text style={styles.stylefiledText}>
                {this.state.socialMedia2}
              </Text>
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.filedView}>
              <Text style={styles.stylefiledText}>
                {this.state.socialMedia2}
              </Text>
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
      this.setState({ checked_website_1: false, boolean_website: 0 });
    } else {
      this.setState({ checked_website_1: true, boolean_website: 1 });
    }
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
              <View
                style={{
                  width: width * 0.8,
                  height: width * 0.03,
                  flexDirection: "row",
                }}
              >
                <Text style={[styles.rightTextMobile, { marginLeft: 5 }]}>
                  Website
                </Text>
                <View style={styles.rightViewMobile}>
                  <Text style={styles.rightTextMobile}>SGP</Text>
                </View>
              </View>
              <Text style={styles.stylefiledText}>{this.state.website}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.filedView}>
              <Text style={styles.stylefiledText}>{this.state.website}</Text>
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
      this.setState({ checked_date: false, boolean_date: 0 });
    } else {
      this.setState({ checked_date: true, boolean_date: 1 });
    }
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
              <View
                style={{
                  width: width * 0.8,
                  height: width * 0.03,
                  flexDirection: "row",
                }}
              >
                <Text style={[styles.rightTextMobile, { marginLeft: 5 }]}>
                  Date
                </Text>
                <View style={styles.rightViewMobile}>
                  <Text style={styles.rightTextMobile}>Birthday</Text>
                </View>
              </View>

              <Text style={styles.stylefiledText}>{this.state.date}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.filedView}>
              <Text style={styles.stylefiledText}>{this.state.date}</Text>
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
      this.setState({ checked_note: false, boolean_note: 0 });
    } else {
      this.setState({ checked_note: true, boolean_note: 1 });
    }
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
              <View
                style={{
                  width: width * 0.8,
                  height: width * 0.03,
                  flexDirection: "row",
                }}
              >
                <Text style={[styles.rightTextMobile, { marginLeft: 5 }]}>
                  Note
                </Text>
                <View style={styles.rightViewMobile}>
                  <Text style={styles.rightTextMobile}>Note 1</Text>
                </View>
              </View>
              <Text style={styles.stylefiledText}>{this.state.note}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.addressFieldContainer}>
              <Text style={styles.stylefiledText}>{this.state.note}</Text>
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
      this.setState({ checked_company: false, boolean_company: 0 });
    } else {
      this.setState({ checked_company: true, boolean_company: 1 });
    }
  };
  job_title_submit = () => {
    const { checked_job_title } = this.state;
    if (checked_job_title == true) {
      this.setState({ checked_job_title: false, boolean_jobTitle: 0 });
    } else {
      this.setState({ checked_job_title: true, boolean_jobTitle: 1 });
    }
  };
  work_hour_submit = () => {
    const { checked_work_hours } = this.state;
    if (checked_work_hours == true) {
      this.setState({ checked_work_hours: false, boolean_work_hours: 0 });
    } else {
      this.setState({ checked_work_hours: true, boolean_work_hours: 1 });
    }
  };
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
                <View style={styles.rightViewMobile}>
                  <Text style={styles.rightTextMobile}>Company</Text>
                </View>
              </View>
              <Text style={styles.stylefiledText}>{this.state.company}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.filedView}>
              <Text style={styles.stylefiledText}>{this.state.company}</Text>
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Company</Text>
              </View>
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
                {/* <Text style={[styles.rightTextMobile, { marginLeft: 5 }]}>
                  Job Title
                </Text> */}
                <View style={styles.rightViewMobile}>
                  <Text style={styles.rightTextMobile}>Job Title</Text>
                </View>
              </View>
              <Text style={styles.stylefiledText}>{this.state.jobTitle}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View style={styles.filedView}>
              <Text style={styles.stylefiledText}>{this.state.jobTitle}</Text>
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
                {/* <Image source={checked} style={styles.checkedIcon} /> */}
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
                    <Text style={styles.timeText}>{this.state.monday}</Text>
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
                    <Text style={styles.timeText}>{this.state.mondayTo}</Text>
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
                    <Text style={styles.timeText}>{this.state.tuesday}</Text>
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
                    <Text style={styles.timeText}>{this.state.tuesdayTo}</Text>
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
                    <Text style={styles.timeText}>{this.state.wednesday}</Text>
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
                      {this.state.wednesdayTo}
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
                    <Text style={styles.timeText}>{this.state.thursday}</Text>
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
                    <Text style={styles.timeText}>{this.state.thursdayTo}</Text>
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
                    <Text style={styles.timeText}>{this.state.friday}</Text>
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
                    <Text style={styles.timeText}>{this.state.fridayTo}</Text>
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
                    <Text style={styles.timeText}>{this.state.saturday}</Text>
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
                    <Text style={styles.timeText}>{this.state.saturdayTo}</Text>
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
                    <Text style={styles.timeText}>{this.state.sunday}</Text>
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
                    <Text style={styles.timeText}>{this.state.sundayTo}</Text>
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
                  {/* <TouchableOpacity
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
             {this.state.checked_work_hours ==  true ? 
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
            </Modal>: 
            null } 
                
               </TouchableOpacity> */}
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.smallView}>
            <View
              style={{ flexDirection: "row", marginTop: Metrics.baseMargin }}
            >
              {/* <CheckBox
         value={this.state.checked_work_hours}
         onValueChange={this.work_hour_submit}
         tintColors={{ true: "#1374A3", false: "#1374A3" }}
       /> */}
              <View style={styles.workView}>
                <View style={styles.LeftView}>
                  {/* <Image source={checked} style={styles.checkedIcon} /> */}
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
                      <Text style={styles.timeText}>{this.state.monday}</Text>
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
                      <Text style={styles.timeText}>{this.state.mondayTo}</Text>
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
                      <Text style={styles.timeText}>{this.state.tuesday}</Text>
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
                        {this.state.tuesdayTo}
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
                        {this.state.wednesday}
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
                        {this.state.wednesdayTo}
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
                      <Text style={styles.timeText}>{this.state.thursday}</Text>
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
                        {this.state.thursdayTo}
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
                      <Text style={styles.timeText}>{this.state.friday}</Text>
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
                      <Text style={styles.timeText}>{this.state.fridayTo}</Text>
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
                      <Text style={styles.timeText}>{this.state.saturday}</Text>
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
                        {this.state.saturdayTo}
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
                      <Text style={styles.timeText}>{this.state.sunday}</Text>
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
                      <Text style={styles.timeText}>{this.state.sundayTo}</Text>
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
                 
                  </View>
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
            <View
              style={{
                flexDirection: "row",
                width: width * 0.55,
                alignItems: "center",
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
                          <Image
                            source={downArrow}
                            style={styles.downArrowStyle}
                          />
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
        checked_address2: true,
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
        boolean_profile_image: 1,
        boolean_profile_image2: 1,
        boolean_profile_image3: 1,
        boolean_first_name: 1,
        boolean_middle_name: 1,
        boolean_last_name: 1,
        boolean_nick_name: 1,
        boolean_number: 1,
        boolean_email: 1,
        boolean_address: 1,
        boolean_address2: 1,
        boolean_messenger: 1,
        boolean_socialMedia: 1,
        boolean_socialMedia2: 1,
        boolean_website: 1,
        boolean_date: 1,
        boolean_note: 1,
        boolean_company: 1,
        boolean_jobTitle: 1,
        boolean_work_hours: 1,
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
        checked_address2: false,
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
        boolean_profile_image: 0,
        boolean_profile_image2: 0,
        boolean_profile_image3: 0,
        boolean_first_name: 0,
        boolean_middle_name: 0,
        boolean_last_name: 0,
        boolean_nick_name: 0,
        boolean_number: 0,
        boolean_email: 0,
        boolean_address: 0,
        boolean_address2: 0,
        boolean_messenger: 0,
        boolean_socialMedia: 0,
        boolean_socialMedia2: 0,
        boolean_website: 0,
        boolean_date: 0,
        boolean_note: 0,
        boolean_company: 0,
        boolean_jobTitle: 0,
        boolean_work_hours: 0,
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
  updateSettingApiCall = () => {
    const { user_id, username } = this.props;
    console.log("label listt--->", this.state.labelID);
    const baseurl = Constants.baseurl;
    var _body = new FormData();
    _body.append("user_id", user_id);
    _body.append("relation_id", this.state.labelID);
    _body.append("first_name", this.state.boolean_first_name);
    _body.append("middle_name", this.state.boolean_middle_name);
    _body.append("last_name", this.state.boolean_last_name);
    _body.append("nick_name", this.state.boolean_nick_name);
    _body.append("phone_number", this.state.boolean_number);
    _body.append("email", this.state.boolean_email);
    _body.append("address", this.state.boolean_address);
    _body.append("address_2", this.state.boolean_address2);
    _body.append("messenger", this.state.boolean_messenger);
    _body.append("social_media", this.state.boolean_socialMedia);
    _body.append("sociale_media_2", this.state.boolean_socialMedia2);
    _body.append("website", this.state.boolean_website);
    _body.append("note", this.state.boolean_note);
    _body.append("company", this.state.boolean_company);
    _body.append("job_title", this.state.boolean_jobTitle);
    _body.append("work_hours", this.state.boolean_work_hours);
    _body.append("image_1", this.state.boolean_profile_image);
    _body.append("image_2", this.state.boolean_profile_image2);
    _body.append("image_3", this.state.boolean_profile_image3);
    _body.append("date", this.state.boolean_date);
    fetch(baseurl + "check", {
      method: "POST",
      body: _body,
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log("check response--->", responseJson);
      })
      .catch((error) => {
        console.log("name error---->", error);
      });
  };
  forSelectNavigate = () => {
    // if (this.state.status == false) {
    //   this.setState({ status: true });
    // } else {
    //   this.setState({ status: false });
    
    // }
    this.updateSettingApiCall();
    this.props.navigation.navigate("forSelectContact");
  };
  labelList2= () => {
    console.log("selected item---->",this.state.labelID)
  
  };
  onManage = (name, labelID) => {
     this.updateSettingApiCall();
    console.log("  labelID  --->",labelID);
    console.log("  item  --->",name);
   this.setState({ isLoading: true }, async () => {
      const baseurl = Constants.baseurl;
      fetch(baseurl + "getlabel")
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          console.log(" 22222  --->", responseJson);
          if (responseJson.data.relation == "") {
            this.setState({ dataManage: [], isLoading: false });
          } else {
            var labelData2 = responseJson.data.map((item, index) => {
              if (item.relation == name) {
                this.setState({ labelID : item.id });
                console.log(" 222 label    --->", item.id);
              }
            });
            var labelData = responseJson.data.map((item, index) => {
              return {
                relation: item.relation,
                isSelect: false,
                labelID: item.id,
              };
            });
            this.setState({ dataManage: labelData });

            //  this.setState({ isLoading: false });
          }
         this.checkListCall();
        })
        .catch((error) => {
          console.error(error);
          this.setState({ isLoading: false });
        });
    });
    
    this.setState({ selectedName: name, labelID: labelID });
    
    this.setState({ flatViewOpen: false });
   
  };
  contactsList({ item, index }) {
    return (
      <TouchableOpacity
        onPress={() => {
          this.onManage(item.relation, item.labelID);
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
 
  itemSelect = (item) => {
    this.setState({ selectItem: item, workViewOpen: false });
   // this.labelList2();
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
  showLoader() {
    if (this.state.isLoading == true) {
      return <Spinner />;
    }
  }

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
                Save
                {/* {this.state.status == true ? "Save" : "Edit"} */}
              </Text>
            </TouchableOpacity>
          </View>
        </Container>
        {this.showLoader()}
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
