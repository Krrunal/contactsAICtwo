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
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import Add from "../AddContact/index";
import AsyncStorage from "@react-native-community/async-storage";
import { COLORS } from "../theme/Colors.js";
import CheckBox from "@react-native-community/checkbox";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Icon from "react-native-vector-icons/Entypo";
import IntlPhoneInput from "react-native-intl-phone-input";
import Metrics from "../theme/Metrics";
import Toast from "react-native-easy-toast";
import borderCorner from "../../assets/images/borderCorner.png";
import { connect } from "react-redux";
import firebase from "../../services/FirebaseDatabase/db";
import { manageLabelToFirebase } from "../../services/FirebaseDatabase/managelabelToFirebase";
import styles from "./style.js";

var { width, height } = Dimensions.get("window");

class ManageLable extends Component {
  constructor() {
    super();
    this.state = {
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
      work_hour: "",
      //checbox
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
    };
  }

  async componentDidMount() {
    this.setState({
      selectedName: await AsyncStorage.getItem("@selectedName"),
    });
    // console.log("User _ name ->", this.state.selectedName);
  }
  renderHeader() {
    return (
      <Header
        title="Manage Label"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  renderMiddle() {
    return (
      <View style={{ alignItems: "center" }}>
        <View style={styles.middleView}>
          <View style={styles.firstMiddle}>
            <Image source={borderCorner} style={styles.firstImg} />

            {this.props.theme.mode === "light" ? (
              <View style={styles.firstBlack}></View>
            ) : (
              <View style={styles.firstBlackWhite}></View>
            )}
          </View>
          <View style={styles.firstMiddle}>
            <Image source={borderCorner} style={styles.firstImg} />

            {this.props.theme.mode === "light" ? (
              <View style={styles.firstBlack}></View>
            ) : (
              <View style={styles.firstBlackWhite}></View>
            )}
          </View>
          <View style={styles.firstMiddle}>
            <Image source={borderCorner} style={styles.firstImg} />

            {this.props.theme.mode === "light" ? (
              <View style={styles.firstWhite}></View>
            ) : (
              <View style={styles.firstWhiteBlack}></View>
            )}
          </View>
        </View>
      </View>
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
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked_first_name}
            onValueChange={this.first_name_submit}
            // onValueChange={() => this.setState({ checked_first_name: !this.state.checked_first_name })}
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
          </View>
        </View>
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
              editable={this.state.checked_middle_name == false ? false : true}
            />
          </View>
        </View>
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
          </View>
        </View>
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
          </View>
        </View>
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
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked_phone_1}
            onValueChange={this.phone_1_submit}
            tintColors={{ true: "#1374A3", false: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <IntlPhoneInput
              containerStyle={{
                width: width * 0.52,
                height: height * 0.05,
                marginBottom: Metrics.smallMargin,
                // borderWidth:1
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
            {/* <TextInput
              placeholder="Phone Number-1"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              value={this.state.phone_1}
              onChangeText={(phone_1) => this.setState({ phone_1 })}
              onSubmitEditing={() => {
                this.phone_2.focus();
              }}
              keyboardType={"numeric"}
              ref={(input) => {
                this.phone_1 = input;
              }}
              editable={this.state.checked_phone_1 == false ? false : true}
            /> */}
            {this.state.checked_phone_1 == true ? (
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

            {this.state.mobileLabel !== "" ? (
              <View style={[styles.rightView]}>
                <Text style={styles.righttext}>{this.state.mobileLabel}</Text>
              </View>
            ) : null}
          </View>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked_phone_2}
            onValueChange={this.phone_2_submit}
            tintColors={{ true: "#1374A3", false: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <IntlPhoneInput
              containerStyle={{
                width: width * 0.52,
                height: height * 0.05,
                marginBottom: Metrics.smallMargin,
                // borderWidth:1
              }}
              phoneInputStyle={styles.mobileInputText}
              dialCodeTextStyle={styles.dialcodeText}
              dialCode={this.state.dialCode}
              // placeholder='3265'
              value={this.state.phone_2}
              ref={(input) => {
                this.phone_2 = input;
              }}
              keyboardType={"numeric"}
              onChangeText={this.onChangeNumber_2}
              isShowLabelManually={false}
            />
            {this.state.checked_phone_2 == true ? (
              <TouchableHighlight
                underlayColor="transparent"
                style={[styles.rightView]}
                onPress={() => this.setState({ isMobileModelOpen2: true })}
              >
                <Icon
                  style={styles.iconSize}
                  size={width * 0.06}
                  name="chevron-small-down"
                />
              </TouchableHighlight>
            ) : null}

            {this.state.mobileLabel2 !== "" ? (
              <View style={[styles.rightView]}>
                <Text style={styles.righttext}>{this.state.mobileLabel2}</Text>
              </View>
            ) : null}
            {/* <TextInput
              placeholder="Phone Number -2"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              value={this.state.phone_2}
              onChangeText={(phone_2) => this.setState({ phone_2 })}
              onSubmitEditing={() => {
                this.email_1.focus();
              }}
              keyboardType={"numeric"}
              ref={(input) => {
                this.phone_2 = input;
              }}
              editable={this.state.checked_phone_2 == false ? false : true}
            /> */}
          </View>
        </View>
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
        <Modal
          style={styles.footerModal}
          visible={this.state.isMobileModelOpen2}
          transparent={true}
          animationType="fade"
          onRequestClose={() => this.setState({ isMobileModelOpen2: false })}
        >
          <View style={styles.contactContent}>
            <View style={styles.content}>
              <Text style={styles.modalHeader}>Phone</Text>
              <View style={{ flexDirection: "column" }}>
                <FlatList
                  refreshing={true}
                  keyExtractor={(item, index) => index.toString()}
                  data={this.state.mobileLabelList2}
                  extraData={this.state}
                  numColumns={1}
                  renderItem={this.renderMobileLabel_2.bind(this)}
                  style={styles.flatlist}
                  keyboardShouldPersistTaps={"always"}
                />
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() =>
                    this.setState({
                      isAddMobileLabel2: true,
                      mobileLabel2: "",
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
          visible={this.state.isAddMobileLabel2}
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
                  keyboardType={"default"}
                  value={this.state.mobileLabel2}
                  onChangeText={(value) =>
                    this.setState({ mobileLabel2: value })
                  }
                  ref={(input) => {
                    this.mobileLabel2 = input;
                  }}
                />
                <TouchableHighlight
                  underlayColor="transparent"
                  style={styles.saveView}
                  onPress={() =>
                    this.state.mobileLabel2 !== ""
                      ? this.setState({
                          isAddMobileLabel2: false,
                          isMobileModelOpen2: false,
                        })
                      : this.setState({ isAddMobileLabel2: false })
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

  email_2_submit = () => {
    const { checked_email_2 } = this.state;
    if (checked_email_2 == true) {
      this.setState({ checked_email_2: false });
      this.setState({ email_2: "" });
    } else {
      this.setState({ checked_email_2: true });
    }
  };
  onChangeEmail = (value) => {
    this.state.email_1.email = value;
    this.setState({ email_1: this.state.email_1 });
  };
  onChangeEmail_2 = (value) => {
    this.state.email_2.email = value;
    this.setState({ email_2: this.state.email_2 });
  };

  changeEmailLabel = (label) => {
    this.setState({ isEmailModelOpen: false });
    this.state.email_1.label = label;
    this.setState({ email_1: this.state.email_1 });
  };

  changeEmailLabel_2 = (label) => {
    this.setState({ isEmailModelOpen_2: false });
    this.state.email_2.label = label;
    this.setState({ email_2: this.state.email_2 });
  };
  renderEmail() {
    return (
      <View
        style={{
          marginLeft: Metrics.baseMargin,
          marginTop: Metrics.doubleBaseMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CheckBox
            value={this.state.checked_email_1}
            onValueChange={this.email_1_submit}
            tintColors={{ true: "#1374A3", false: "#1374A3" }}
          />
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
              editable={this.state.checked_email_1 == false ? false : true}
            />
            {this.state.checked_email_1 ? (
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

            {this.state.email_1.label !== "" ? (
              <View style={styles.rightView}>
                <Text style={styles.righttext}>{this.state.email_1.label}</Text>
              </View>
            ) : null}
          </View>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked_email_2}
            onValueChange={this.email_2_submit}
            tintColors={{ true: "#1374A3", false: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <TextInput
              placeholder="E-mail Address -2"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              //value={this.state.email_2}
              onChangeText={(value) => this.onChangeEmail_2(value)}
              onSubmitEditing={() => {
                this.address.focus();
              }}
              keyboardType={"email-address"}
              ref={(input) => {
                this.email_2 = input;
              }}
              editable={this.state.checked_email_2 == false ? false : true}
            />
            {this.state.checked_email_2 ? (
              <TouchableHighlight
                underlayColor="transparent"
                style={styles.rightView}
                onPress={() => this.setState({ isEmailModelOpen_2: true })}
              >
                <Icon
                  style={styles.iconSize}
                  size={width * 0.06}
                  name="chevron-small-down"
                />
              </TouchableHighlight>
            ) : null}

            {this.state.email_2.label !== "" ? (
              <View style={styles.rightView}>
                <Text style={styles.righttext}>{this.state.email_2.label}</Text>
              </View>
            ) : null}
          </View>
        </View>
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
                  keyboardType={"default"}
                  value={this.state.emailLabel}
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
                    Ok
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          style={styles.footerModal}
          visible={this.state.isEmailModelOpen_2}
          transparent={true}
          animationType="fade"
          onRequestClose={() => this.setState({ isEmailModelOpen_2: false })}
        >
          <View style={styles.contactContent}>
            <View style={styles.content}>
              <Text style={styles.modalHeader}>Email</Text>
              <View style={{ flexDirection: "column" }}>
                {this.state.emailLabelList_2.map((item, index) => {
                  return (
                    <TouchableHighlight
                      underlayColor="transparent"
                      onPress={() => {
                        this.changeEmailLabel_2(item.label);
                      }}
                    >
                      <Text style={styles.labelName}> {item.label} </Text>
                    </TouchableHighlight>
                  );
                })}
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() =>
                    this.setState({ isAddEmailLabel_2: true, emailLabel_2: "" })
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
                  keyboardType={"default"}
                  // value={this.state.emailLabel}
                  onChangeText={(label) => {
                    this.changeEmailLabel_2(label);
                  }}
                />
                <TouchableHighlight
                  underlayColor="transparent"
                  style={styles.saveView}
                  onPress={() =>
                    this.state.emailLabel_2 !== ""
                      ? this.setState({
                          isAddEmailLabel_2: false,
                          isEmailModelOpen_2: false,
                        })
                      : this.setState({ isAddEmailLabel_2: false })
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

  changeAddressLabel = (label) => {
    this.setState({ isAddressModelOpen: false });
    this.state.address.label = label;
    this.setState({ Address: this.state.address });
  };

  renderAddress() {
    return (
      <View
        style={{
          marginLeft: Metrics.baseMargin,
          marginTop: Metrics.doubleBaseMargin,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <CheckBox
            value={this.state.checked_address}
            onValueChange={this.address_submit}
            tintColors={{ true: "#1374A3", false: "#1374A3" }}
          />
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
              editable={this.state.checked_address == false ? false : true}
            />
            {this.state.checked_address ? (
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

            {this.state.address.label !== "" ? (
              <View style={styles.addressRightView}>
                <Text style={styles.addressRighttext}>
                  {this.state.address.label}
                </Text>
              </View>
            ) : null}
          </View>
        </View>
        <Modal
          style={styles.footerModal}
          visible={this.state.isAddressModelOpen}
          transparent={true}
          animationType="fade"
          onRequestClose={() => this.setState({ isAddressModelOpen: false })}
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
  messagner_2_submit = () => {
    const { checked_messagner_2 } = this.state;
    if (checked_messagner_2 == true) {
      this.setState({ checked_messagner_2: false });
      this.setState({ messanger_2: "" });
    } else {
      this.setState({ checked_messagner_2: true });
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

  onChangeMessenger2 = (value) => {
    this.state.messanger_2.messanger = value;
    this.setState({ messanger_2: this.state.messanger_2 });
  };
  changeMessangerLabel2 = (label) => {
    this.setState({ isMessangerModelOpen2: false });
    this.state.messanger_2.label = label;
    this.setState({ messanger_2: this.state.messanger_2 });
  };

  renderMessage() {
    return (
      <View
        style={{
          marginLeft: Metrics.baseMargin,
          marginTop: Metrics.doubleBaseMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CheckBox
            value={this.state.checked_messagner_1}
            onValueChange={this.messagner_1_submit}
            tintColors={{ true: "#1374A3", false: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <TextInput
              placeholder="Messanger Account  -1"
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
              editable={this.state.checked_messagner_1 == false ? false : true}
            />

            {this.state.checked_messagner_1 ? (
              <TouchableHighlight
                underlayColor="transparent"
                style={styles.rightView}
                onPress={() => this.setState({ isMessangerModelOpen: true })}
              >
                <Icon
                  style={styles.iconSize}
                  size={width * 0.06}
                  name="chevron-small-down"
                />
              </TouchableHighlight>
            ) : null}

            {this.state.messanger_1.label !== "" ? (
              <View style={styles.rightView}>
                <Text style={styles.righttext}>
                  {this.state.messanger_1.label}
                </Text>
              </View>
            ) : null}
          </View>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked_messagner_2}
            onValueChange={this.messagner_2_submit}
            tintColors={{ true: "#1374A3", false: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <TextInput
              placeholder=" Messanger Account  -2"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              //value={this.state.messanger_2}
              onChangeText={(value) => this.onChangeMessenger(value)}
              onSubmitEditing={() => {
                this.social_media_1.focus();
              }}
              keyboardType={"default"}
              ref={(input) => {
                this.messanger_2 = input;
              }}
              editable={this.state.checked_messagner_2 == false ? false : true}
            />
            {this.state.checked_messagner_2 ? (
              <TouchableHighlight
                underlayColor="transparent"
                style={styles.rightView}
                onPress={() => this.setState({ isMessangerModelOpen2: true })}
              >
                <Icon
                  style={styles.iconSize}
                  size={width * 0.06}
                  name="chevron-small-down"
                />
              </TouchableHighlight>
            ) : null}

            {this.state.messanger_2.label !== "" ? (
              <View style={styles.rightView}>
                <Text style={styles.righttext}>
                  {this.state.messanger_2.label}
                </Text>
              </View>
            ) : null}
          </View>
        </View>
        <Modal
          style={styles.footerModal}
          visible={this.state.isMessangerModelOpen}
          transparent={true}
          animationType="fade"
          onRequestClose={() => this.setState({ isMessangerModelOpen: false })}
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
        <Modal
          style={styles.footerModal}
          visible={this.state.isMessangerModelOpen2}
          transparent={true}
          animationType="fade"
          onRequestClose={() => this.setState({ isMessangerModelOpen2: false })}
        >
          <View style={styles.contactContent}>
            <View style={styles.content}>
              <Text style={styles.modalHeader}>Messanger Account</Text>
              <View style={{ flexDirection: "column" }}>
                {this.state.mesangerLabelList2.map((item, index) => {
                  return (
                    <TouchableHighlight
                      underlayColor="transparent"
                      onPress={() => {
                        this.changeMessangerLabel2(item.label);
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
                      isAddMessangerLabel2: true,
                      messangerLabel2: "",
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
          visible={this.state.isAddMessangerLabel2}
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
                  keyboardType={"default"}
                  onChangeText={(label) => {
                    this.changeMessangerLabel2(label);
                  }}
                />
                <TouchableHighlight
                  underlayColor="transparent"
                  style={styles.saveView}
                  onPress={() =>
                    this.state.messangerLabel2 !== ""
                      ? this.setState({
                          isAddMessangerLabel2: false,
                          isMessangerModelOpen2: false,
                        })
                      : this.setState({ isAddMessangerLabel2: false })
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
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CheckBox
            value={this.state.checked_social_media_1}
            onValueChange={this.socil_media_1_submit}
            tintColors={{ true: "#1374A3", false: "#1374A3" }}
          />
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
            {this.state.checked_social_media_1 ? (
              <TouchableHighlight
                underlayColor="transparent"
                style={styles.addressRightView}
                onPress={() => this.setState({ isSocialMediaModelOpen: true })}
              >
                <Icon
                  style={styles.iconSize}
                  size={width * 0.06}
                  name="chevron-small-down"
                />
              </TouchableHighlight>
            ) : null}

            {this.state.social_media_1.label !== "" ? (
              <View style={styles.addressRightView}>
                <Text style={styles.addressRighttext}>
                  {this.state.social_media_1.label}
                </Text>
              </View>
            ) : null}
          </View>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked_social_media_2}
            onValueChange={this.socil_media_2_submit}
            tintColors={{ true: "#1374A3", false: "#1374A3" }}
          />
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
            {this.state.checked_social_media_2 ? (
              <TouchableHighlight
                underlayColor="transparent"
                style={styles.addressRightView}
                onPress={() => this.setState({ isSocialMediaModelOpen2: true })}
              >
                <Icon
                  style={styles.iconSize}
                  size={width * 0.06}
                  name="chevron-small-down"
                />
              </TouchableHighlight>
            ) : null}

            {this.state.social_media_2.label !== "" ? (
              <View style={styles.addressRightView}>
                <Text style={styles.addressRighttext}>
                  {this.state.social_media_2.label}
                </Text>
              </View>
            ) : null}
          </View>
        </View>
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
        {/* social media 2  */}
        <Modal
          style={styles.footerModal}
          visible={this.state.isSocialMediaModelOpen2}
          transparent={true}
          animationType="fade"
          onRequestClose={() =>
            this.setState({ isSocialMediaModelOpen2: false })
          }
        >
          <View style={styles.contactContent}>
            <View style={styles.content}>
              <Text style={styles.modalHeader}>Social Media</Text>
              <View style={{ flexDirection: "column" }}>
                {this.state.socialMediaLabelList2.map((item, index) => {
                  return (
                    <TouchableHighlight
                      underlayColor="transparent"
                      onPress={() => {
                        this.changeSocialMediaLabel2(item.label);
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
                      isAddSocialMediaLabel2: true,
                      socialMedia2: "",
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
          visible={this.state.isAddSocialMediaLabel2}
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
                  keyboardType={"default"}
                  onChangeText={(label) => {
                    this.changeSocialMediaLabel2(label);
                  }}
                />
                <TouchableHighlight
                  underlayColor="transparent"
                  style={styles.saveView}
                  onPress={() =>
                    this.state.socialMediaLabel2 !== ""
                      ? this.setState({
                          isAddSocialMediaLabel2: false,
                          isSocialMediaModelOpen2: false,
                        })
                      : this.setState({
                          isAddSocialMediaLabel2: false,
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
  website_2_submit = () => {
    const { checked_website_2 } = this.state;
    if (checked_website_2 == true) {
      this.setState({ checked_website_2: false });
      this.setState({ website_2: "" });
    } else {
      this.setState({ checked_website_2: true });
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
  onChangeWebsite2 = (value, index) => {
    this.state.website_2.website = value;
    this.setState({ website_2: this.state.website_2 });
  };
  changeWebsiteLabel2 = (label) => {
    this.setState({ isWebsiteModelOpen2: false });
    this.state.website_2.label = label;
    this.setState({ website_2: this.state.website_2 });
  };
  renderWebsite() {
    return (
      <View
        style={{
          marginLeft: Metrics.baseMargin,
          marginTop: Metrics.doubleBaseMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CheckBox
            value={this.state.checked_website_1}
            onValueChange={this.website_1_submit}
            tintColors={{ true: "#1374A3", false: "#1374A3" }}
          />
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
            {this.state.checked_website_1 ? (
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

            {this.state.website_1.label !== "" ? (
              <View style={styles.addressRightView}>
                <Text style={styles.addressRighttext}>
                  {this.state.website_1.label}
                </Text>
              </View>
            ) : null}
          </View>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked_website_2}
            onValueChange={this.website_2_submit}
            tintColors={{ true: "#1374A3", false: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <TextInput
              placeholder="Website -2"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              value={this.state.website_2}
              onChangeText={(value) => this.onChangeWebsite(value)}
              onSubmitEditing={() => {
                this.date.focus();
              }}
              keyboardType={"default"}
              ref={(input) => {
                this.website_2 = input;
              }}
              editable={this.state.checked_website_2 == false ? false : true}
            />
            {this.state.checked_website_2 ? (
              <TouchableHighlight
                underlayColor="transparent"
                style={styles.addressRightView}
                onPress={() => this.setState({ isWebsiteModelOpen2: true })}
              >
                <Icon
                  style={styles.iconSize}
                  size={width * 0.06}
                  name="chevron-small-down"
                />
              </TouchableHighlight>
            ) : null}

            {this.state.website_2.label !== "" ? (
              <View style={styles.addressRightView}>
                <Text style={styles.addressRighttext}>
                  {this.state.website_2.label}
                </Text>
              </View>
            ) : null}
          </View>
        </View>
        <Modal
          style={styles.footerModal}
          visible={this.state.isWebsiteModelOpen}
          transparent={true}
          animationType="fade"
          onRequestClose={() => this.setState({ isWebsiteModelOpen: false })}
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
        <Modal
          style={styles.footerModal}
          visible={this.state.isWebsiteModelOpen2}
          transparent={true}
          animationType="fade"
          onRequestClose={() => this.setState({ isWebsiteModelOpen2: false })}
        >
          <View style={styles.contactContent}>
            <View style={styles.content}>
              <Text style={styles.modalHeader}>Website</Text>
              <View style={{ flexDirection: "column" }}>
                {this.state.websiteLableList2.map((item, index) => {
                  return (
                    <TouchableHighlight
                      underlayColor="transparent"
                      onPress={() => {
                        this.changeWebsiteLabel2(item.label);
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
                      isAddWebsiteLabel2: true,
                      websiteLabel2: "",
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
          visible={this.state.isAddWebsiteLabel2}
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
                  keyboardType={"default"}
                  onChangeText={(label) => {
                    this.changeWebsiteLabel2(label);
                  }}
                />
                <TouchableHighlight
                  underlayColor="transparent"
                  style={styles.saveView}
                  onPress={() =>
                    this.state.WebsiteLabel2 !== ""
                      ? this.setState({
                          isAddWebsiteLabel2: false,
                          isWebsiteModelOpen2: false,
                        })
                      : this.setState({ isAddWebsiteLabel2: false })
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
    // console.log("A date has been picked: ", date);
    // // var fomate = moment(date).format("MMMM, Do YYYY")
    // // this.state.date.date = moment(date).format("MMMM, Do YYYY");

    // this.setState({
    //   isVisible: false,
    //   choosenDate: moment(date).format("MMMM, Do YYYY"),
    // });
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
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CheckBox
            value={this.state.checked_date}
            onValueChange={this.date_submit}
            tintColors={{ true: "#1374A3", false: "#1374A3" }}
          />
          <View style={styles.filedView}>
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
            {this.state.checked_date ? (
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

            {this.state.date.label !== "" ? (
              <View style={styles.addressRightView}>
                <Text style={styles.addressRighttext}>
                  {this.state.date.label}
                </Text>
              </View>
            ) : null}
          </View>
        </View>
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
        <View style={{ flexDirection: "row" }}>
          <CheckBox
            value={this.state.checked_note}
            onValueChange={this.note_submit}
            tintColors={{ true: "#1374A3", false: "#1374A3" }}
          />
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
              editable={this.state.checked_note == false ? false : true}
            />
            {this.state.checked_note ? (
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

            {this.state.note.label !== "" ? (
              <View style={styles.addressRightView}>
                <Text style={styles.addressRighttext}>
                  {this.state.note.label}
                </Text>
              </View>
            ) : null}
          </View>
        </View>
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

  renderCompany() {
    return (
      <View
        style={{
          marginLeft: Metrics.baseMargin,
          marginTop: Metrics.doubleBaseMargin,
          marginBottom: Metrics.baseMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CheckBox
            value={this.state.checked_company}
            onValueChange={this.company_submit}
            tintColors={{ true: "#1374A3", false: "#1374A3" }}
          />
          <View style={styles.filedView}>
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
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked_job_title}
            onValueChange={this.job_title_submit}
            tintColors={{ true: "#1374A3", false: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <TextInput
              placeholder="Job Title"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              value={this.state.job_title}
              onChangeText={(job_title) => this.setState({ job_title })}
              onSubmitEditing={() => {
                this.work_hour.focus();
              }}
              keyboardType={"default"}
              ref={(input) => {
                this.job_title = input;
              }}
              editable={this.state.checked_job_title == false ? false : true}
            />
          </View>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked_work_hours}
            onValueChange={this.work_hour_submit}
            tintColors={{ true: "#1374A3", false: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <TextInput
              placeholder="Work Hours"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              value={this.state.work_hour}
              onChangeText={(work_hour) => this.setState({ work_hour })}
              keyboardType={"default"}
              ref={(input) => {
                this.work_hour = input;
              }}
              editable={this.state.checked_work_hours == false ? false : true}
            />
          </View>
        </View>
      </View>
    );
  }
  forSelectNavigate = () => {
    const {
      selectedName,
      first_name,
      last_name,
      middle_name,
      nick_name,
      phone_1,
      phone_2,
      phone_3,
      email_1,
      email_2,
      address,
      messanger_1,
      messanger_2,
      social_media_1,
      social_media_2,
      website_1,
      website_2,
      date,
      note,
      company,
      job_title,
      work_hour,
    } = this.state;
    const { username } = this.props;
    if (first_name == "") {
      alert("Please enter to save data");
    } else {
      manageLabelToFirebase(
        username,
        selectedName,
        first_name,
        last_name,
        middle_name,
        nick_name,
        phone_1,
        phone_2,
        phone_3,
        email_1,
        email_2,
        address,
        messanger_1,
        messanger_2,
        social_media_1,
        social_media_2,
        website_1,
        website_2,
        date,
        note,
        company,
        job_title,
        work_hour
      );
      this.props.navigation.navigate("forSelectContact");
      alert("Successfully save data");
    }
  };
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
          <View style={{ alignItems: "center" }}>
            <LineText>{this.state.selectedName}</LineText>
          </View>

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
                Next
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
  username:
    state.login.shouldLoadData.username || state.reg.shouldLoadData.username,
});

export default connect(mapStateToProps)(ManageLable);

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
const LineText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 17px;
  color: ${(props) => props.theme.textColor};
  margin-top: 25px;
  text-align: center;
`;
