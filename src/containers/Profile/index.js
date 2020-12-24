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

import { COLORS } from "../theme/Colors.js";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Icon from "react-native-vector-icons/FontAwesome5";
import IconEntypo from "react-native-vector-icons/Entypo";
import IntlPhoneInput from "react-native-intl-phone-input";
import Metrics from "../theme/Metrics";
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
      contact: [],
      contacts: "",

      //data from firebase
      address: {address : "",label: "" }, 
      company:{ company: "",label: "" }, 
      // date: "",
      dob1: "",
      email: "",
      job_title:  { jobTitle:"",label: "" }, 
      messenger:{ messanger: "",label: "" }, 
      facebook:{ socialMedia: "",label: "" }, 
      instagram:{ instagram:  "",label: "" }, 
      // note1: "",
      number: "",
      number1: { number1: "", label: "" },
      number2: { number2: "", label: "" },
      number3: { number3: "", label: "" },
      social_media: "",
      website: { website:"",label: "" },
      work_hour:  { workHours: "", label: "" },
      friends: "",
      //  data from firebase finish
      isVisible: false,
      isVisible2: false,
      mobileSection: false,
      status: false,

      //profile data
      friends_profile: "",
      phonenumber_1: "",
      phonenumber_2: "",
      phonenumber_3: "",
      email_profile: { email: "", label: "" },
      birthday: "",
      address_profile: { address: "", label: "" },
      messenger_profile: { messanger: "", label: "" },
      facebook_profile: { socialMedia: "", label: "" },
      instagram_profile: { instagam: "", label: "" },
      website_profile: { website: "", label: "" },
      date: { date: "", label: "" },
      wedding: { date: "", label: "" },
      dateLabel: "",
      wedding_anniversary: { date: "", label: "" },
      wedding_anniversaryLabel: "",
      note_profile: { note : "", label: "" },
      work_hour_profile: { workHours: "", label: "" },
      company_profile: { company: "", label: "" },
      job_title_profile: { jobTitle: "", label: "" },
      social_media1: "",
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
      mobileLabel: "",
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
      //mobile modal 2
      phone_1: {
        phone_1: "",
        label: "",
      },
      isMobileModelOpen2: false,
      mobileLabelList2: [
        { label: "Personal" },
        { label: "Work" },
        { label: "Home" },
        { label: "Main" },
        { label: "Other" },
      ],
      mobileLabel2: "",
      isAddMobileLabel2: false,
      //mobile modal 3
      phone_1: {
        phone_1: "",
        label: "",
      },
      isMobileModelOpen3: false,
      mobileLabelList3: [
        { label: "Personal" },
        { label: "Work" },
        { label: "Home" },
        { label: "Main" },
        { label: "Other" },
      ],
      mobileLabel3: "",
      isAddMobileLabel3: false,
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
      //date
      isDateModelOpen: false,
      dateLableList: [{ label: " Birthday" }, { label: "Wedding Anniversary" }],
      dateLabel: "",
      isAddDateLabel: false,
      isDateArrayModelOpen: false,
      isDateModelOpen: false,
      isAddDateArrayLabel: false,
      isVisible: false,
      //date 2(wedding anniversary)
      isDateModelOpen2: false,
      dateLableList2: [
        { label: " Birthday" },
        { label: "Wedding Anniversary" },
      ],
      dateLabel2: "",
      isAddDateLabel2: false,
      isDateArrayModelOpen2: false,
      isDateModelOpen2: false,
      isAddDateArrayLabel2: false,
      isVisible2: false,
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

  componentDidMount() {
    const { username } = this.props;
    firebase
      .firestore()
      .collection("user")
      .doc(username)
      .get()
      .then((snap) => {
        var item = snap._data;
        this.setState({ contact:  item });
         console.log("social media ---->",  item.date );
        this.setState({ mobileLabel: item.mobileLabel });
        this.setState({ email: item.email.email });
        this.setState({ emailLabel: item.email.label });
        this.setState({ address: item.address });
        this.setState({ company: item.company });
        this.setState({ date: item.date });
        this.setState({ wedding : item.wedding });
        this.setState({ job_title: item.job_title });
        this.setState({ messenger: item.messenger });
        this.setState({ facebook: item.facebook });
        this.setState({ messenger2: item.messenger2 });
        this.setState({ note1: item.note });
        this.setState({ number: item.number });
        this.setState({ number1: item.number1 });
        this.setState({ number2: item.number2 });
        this.setState({ number3: item.number3 });
        this.setState({ social_media: item.social_media });
        this.setState({ social_media1: item.social_media1 });
        this.setState({ website: item.website1.website });
        this.setState({ work_hour: item.work_hour.workHours });
        this.setState({ friends: item.friend });
      });
  }

  renderImg() {
    return (
      <View
        style={{
          alignItems: "center",
          width: width,
          // padding: Metrics.smallMargin,
          marginTop: Metrics.baseMargin,
        }}
      >
        <View style={styles.ImgBigView}>
          <View style={styles.imgView}>
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
                value={this.state.friends_profile}
                onChangeText={(friends_profile) =>
                  this.setState({ friends_profile })
                }
              />
            ) : (
              <Text style={styles.stylefiledText}>{this.state.friends}</Text>
            )}
          </View>
        </View>
      </View>
    );
  }
  onChangeNumber = ({
    dialCode,
    unmaskedPhoneNumber,
    phoneNumber,
    isVerified,
  }) => {
    if (isVerified == true) {
      this.state.number1.number1 = unmaskedPhoneNumber;
      this.setState({ number1: this.state.number1,});
    } else {
      this.state.number1.number1 = unmaskedPhoneNumber;
      this.setState({number1: this.state.number1 });
    }
  };
  onChangeNumber2 = ({
    dialCode,
    unmaskedPhoneNumber,
    phoneNumber,
    isVerified,
  }) => {
    if (isVerified == true) {
      this.state.number2.number1 = unmaskedPhoneNumber;
      this.setState({ number1: this.state.number2});
    } else {
      this.state.number2.number2 = unmaskedPhoneNumber;
      this.setState({ number2: this.state.number2});
    }
  };
  onChangeNumber3 = ({
    dialCode,
    unmaskedPhoneNumber,
    phoneNumber,
    isVerified,
  }) => {
    if (isVerified == true) {
      this.state.number3.number3 = unmaskedPhoneNumber;
      this.setState({ number3: this.state.number3});
    } else {
      this.state.number3.number3 = unmaskedPhoneNumber;
      this.setState({ number3: this.state.number3});
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
  renderMobileLabel2 = ({ item, index }) => {
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
  renderMobileLabel3 = ({ item, index }) => {
    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() =>
          this.setState({ mobileLabel3: item.label, isMobileModelOpen3: false })
        }
      >
        <Text style={styles.labelName}> {item.label} </Text>
      </TouchableHighlight>
    );
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
                value={this.state.phonenumber_1}
                inputRef={"phone"}
                keyboardType={"numeric"}
                onChangeText={this.onChangeNumber}
                defaultCountry="CA"
                isProfile={false}
              />
            ) : (
              <Text style={styles.stylefiledText}>{this.state.number1.number1 }</Text>
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
                    <View style={styles.rightTwoImg}>
                      <View>
                        <Image source={edit} style={styles.editImg} />
                      </View>
                      <View style={styles.resetImg}>
                        <Image source={reset} style={styles.editImg} />
                      </View>
                    </View>
                  )}
                  {this.state.status == true ? (
                    <TouchableHighlight
                      underlayColor="transparent"
                      style={[styles.rightView]}
                      onPress={() => this.setState({ isMobileModelOpen: true })}
                    >
                      <IconEntypo
                        style={styles.iconSize}
                        size={width * 0.06}
                        name="chevron-small-down"
                      />
                    </TouchableHighlight>
                  ) : null}

                  {this.state.mobileLabel !== "" ? (
                    <View style={[styles.rightView]}>
                      <Text style={styles.righttext}>
                        {this.state.mobileLabel}
                      </Text>
                    </View>
                  ) : null}
                </View>
              </View>
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
        </View>
        <View style={styles.fieldMain}>
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
                value={this.state.phonenumber_2}
                inputRef={"phone"}
                keyboardType={"numeric"}
                onChangeText={this.onChangeNumber2}
                defaultCountry="CA"
                isProfile={false}
              />
            ) : (
              <Text style={styles.stylefiledText}>{this.state.number2.number2}</Text>
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
                      <Text style={styles.righttext}>Home</Text>
                    </View>
                  )}
                  {this.state.status == true ? (
                    <TouchableHighlight
                      underlayColor="transparent"
                      style={[styles.rightView]}
                      onPress={() =>
                        this.setState({ isMobileModelOpen2: true })
                      }
                    >
                      <IconEntypo
                        style={styles.iconSize}
                        size={width * 0.06}
                        name="chevron-small-down"
                      />
                    </TouchableHighlight>
                  ) : null}

                  {this.state.isAddMobileLabel2 !== "" ? (
                    <View style={[styles.rightView]}>
                      <Text style={styles.righttext}>
                        {this.state.mobileLabel2}
                      </Text>
                    </View>
                  ) : null}
                </View>
              </View>
            </View>
            <Modal
              style={styles.footerModal}
              visible={this.state.isMobileModelOpen2}
              transparent={true}
              animationType="fade"
              onRequestClose={() =>
                this.setState({ isMobileModelOpen2: false })
              }
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
                      renderItem={this.renderMobileLabel2.bind(this)}
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
                        this.mobileLabel = input;
                      }}
                    />
                    <TouchableHighlight
                      underlayColor="transparent"
                      style={styles.saveView}
                      onPress={() =>
                        this.state.mobileLabel !== ""
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
                value={this.state.phonenumber_3}
                inputRef={"phone"}
                keyboardType={"numeric"}
                onChangeText={this.onChangeNumber3}
                defaultCountry="CA"
                isProfile={false}
              />
            ) : (
              // this.state.number3 == "" ? (
              //   <Text style={styles.stylefiledText}>+1 (303) 123-4567</Text>
              // ) :
              <Text style={styles.stylefiledText}>{this.state.number3.number3}</Text>
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
                    <Text style={styles.righttext}>Personal</Text>
                  </View>
                )}

                {this.state.status == true ? (
                  <TouchableHighlight
                    underlayColor="transparent"
                    style={[styles.rightView]}
                    onPress={() => this.setState({ isMobileModelOpen3: true })}
                  >
                    <IconEntypo
                      style={styles.iconSize}
                      size={width * 0.06}
                      name="chevron-small-down"
                    />
                  </TouchableHighlight>
                ) : null}

                {this.state.isAddMobileLabel3 !== "" ? (
                  <View style={[styles.rightView]}>
                    <Text style={styles.righttext}>
                      {this.state.mobileLabel3}
                    </Text>
                  </View>
                ) : null}
              </View>
            </View>
          </View>
        </View>
        <Modal
          style={styles.footerModal}
          visible={this.state.isMobileModelOpen3}
          transparent={true}
          animationType="fade"
          onRequestClose={() => this.setState({ isMobileModelOpen3: false })}
        >
          <View style={styles.contactContent}>
            <View style={styles.content}>
              <Text style={styles.modalHeader}>Phone</Text>
              <View style={{ flexDirection: "column" }}>
                <FlatList
                  refreshing={true}
                  keyExtractor={(item, index) => index.toString()}
                  data={this.state.mobileLabelList3}
                  extraData={this.state}
                  numColumns={1}
                  renderItem={this.renderMobileLabel3.bind(this)}
                  style={styles.flatlist}
                  keyboardShouldPersistTaps={"always"}
                />
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() =>
                    this.setState({
                      isAddMobileLabel3: true,
                      mobileLabel3: "",
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
          visible={this.state.isAddMobileLabel3}
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
                  value={this.state.mobileLabel3}
                  onChangeText={(value) =>
                    this.setState({ mobileLabel3: value })
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
                          isAddMobileLabel3: false,
                          isMobileModelOpen3: false,
                        })
                      : this.setState({ isAddMobileLabel3: false })
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
  onChangeEmail = (value) => {
    this.state.email_profile.email = value;
    this.setState({ email_profile: this.state.email_profile });
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
          <View style={styles.filedView}>
            {this.state.status == true ? (
              <TextInput
                placeholder="Sean@gmail.com"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                keyboardType={"email-address"}
                value={this.state.email_profile}
                onChangeText={(value) => this.onChangeEmail(value)}
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
                    <Text style={styles.righttext}>Home</Text>
                  </View>
                )}
                {this.state.status ? (
                  <TouchableHighlight
                    underlayColor="transparent"
                    style={styles.rightView}
                    onPress={() => this.setState({ isEmailModelOpen: true })}
                  >
                    <IconEntypo
                      style={styles.iconSize}
                      size={width * 0.06}
                      name="chevron-small-down"
                    />
                  </TouchableHighlight>
                ) : null}

                {this.state.status && this.state.email_profile.label !== "" ? (
                  <View style={styles.rightView}>
                    <Text style={styles.righttext}>
                      {this.state.email_profile.label}
                    </Text>
                  </View>
                ) : null}
              </View>
            </View>
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
    );
  }

  onChangeAddress = (value) => {
    this.state.address_profile.address = value;
    this.setState({ address_profile: this.state.address_profile });
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
                    onChangeText={(value) => this.onChangeAddress(value)}
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
                    {this.state.address.address}
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
                        <Text style={styles.righttext}>Home</Text>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            </View>
            {this.state.status == true ? (
              <TouchableHighlight
                underlayColor="transparent"
                style={styles.addressRightView}
                onPress={() => this.setState({ isAddressModelOpen: true })}
              >
                <IconEntypo
                  style={styles.iconSize}
                  size={width * 0.06}
                  name="chevron-small-down"
                />
              </TouchableHighlight>
            ) : null}

            {this.state.address_profile.label !== "" ? (
              <View style={styles.addressRightView}>
                <Text style={styles.addressRighttext}>
                  {this.state.address_profile.label}
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

  onChangeMessenger = (value) => {
    this.state.messenger_profile.messanger = value;
    this.setState({ messenger_profile: this.state.messenger_profile });
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
              <Text style={styles.stylefiledText}>{this.state.messenger.messanger}</Text>
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
                      <Text style={styles.righttext}>Facebook Messanger</Text>
                    </View>
                  )}

                  {this.state.status == true ? (
                    <TouchableHighlight
                      underlayColor="transparent"
                      style={[styles.rightView]}
                      onPress={() =>
                        this.setState({ isMessangerModelOpen: true })
                      }
                    >
                      <IconEntypo
                        style={styles.iconSize}
                        size={width * 0.06}
                        name="chevron-small-down"
                      />
                    </TouchableHighlight>
                  ) : null}

                  {this.state.status == true &&
                  this.state.messenger_profile.label !== "" ? (
                    <View style={[styles.rightView]}>
                      <Text style={styles.righttext}>
                        {this.state.messenger_profile.label}
                      </Text>
                    </View>
                  ) : null}
                </View>
              </View>
            </View>
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

  onChangeSocialMedia = (value) => {
    this.state.facebook_profile.socialMedia = value;
    this.setState({ facebook_profile: this.state.facebook_profile });
  };
  onChangeSocialMedia2 = (value) => {
    this.state.instagram_profile.socialMedia = value;
    this.setState({ instagram_profile: this.state.instagram_profile });
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

          <View style={styles.filedView}>
            {this.state.status == true ? (
              <TextInput
                placeholder="@usernamesean"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                keyboardType={"numeric"}
                keyboardType={"default"}
                value={this.state.facebook_profile}
                onChangeText={(value) => this.onChangeSocialMedia(value)}
              />
            ) : (
         <Text style={styles.stylefiledText}>{this.state.facebook.socialMedia}</Text>
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
                      <Text style={styles.righttext}>Facebook</Text>
                    </View>
                  )}
                  {this.state.status == true ? (
                    <TouchableHighlight
                      underlayColor="transparent"
                      style={styles.addressRightView}
                      onPress={() =>
                        this.setState({ isSocialMediaModelOpen: true })
                      }
                    >
                      <IconEntypo
                        style={styles.iconSize}
                        size={width * 0.06}
                        name="chevron-small-down"
                      />
                    </TouchableHighlight>
                  ) : null}

                  {this.state.facebook_profile.label !== "" ? (
                    <View style={[styles.rightView]}>
                      <Text style={styles.righttext}>
                        {this.state.facebook_profile.label}
                      </Text>
                    </View>
                  ) : null}
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.fieldMain}>
          <View style={styles.filedViewRightTwo}>
            {this.state.status == true ? (
              <TextInput
                placeholder="Seanusername"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                keyboardType={"default"}
                value={this.state.instagram_profile}
                onChangeText={(value) => this.onChangeSocialMedia2(value)}
              />
            ) : (
              <Text style={styles.stylefiledText}>{this.state.instagram.instagram}</Text>
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
                      <Text style={styles.righttext}>Instagram</Text>
                    </View>
                  )}
                  {this.state.status == true ? (
                    <TouchableHighlight
                      underlayColor="transparent"
                      style={styles.addressRightView}
                      onPress={() =>
                        this.setState({ isSocialMediaModelOpen2: true })
                      }
                    >
                      <IconEntypo
                        style={styles.iconSize}
                        size={width * 0.06}
                        name="chevron-small-down"
                      />
                    </TouchableHighlight>
                  ) : null}

                  {this.state.instagram_profile.label !== "" ? (
                    <View style={[styles.rightView]}>
                      <Text style={styles.righttext}>
                        {this.state.instagram_profile.label}
                      </Text>
                    </View>
                  ) : null}
                </View>
              </View>
            </View>
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
  onChangeWebsite = (value, index) => {
    this.state.website_profile.website = value;
    this.setState({ website_profile: this.state.website_profile });
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
          <View style={styles.filedView}>
            {this.state.status == true ? (
              <TextInput
                placeholder="www.seamuser.com"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                keyboardType={"default"}
                value={this.state.website_profile}
                onChangeText={(value) => this.onChangeWebsite(value)}
              />
            ) : (
              <Text style={styles.stylefiledText}>{this.state.website.website}</Text>
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
                      <Text style={styles.righttext}>Personal</Text>
                    </View>
                  )}
                  {this.state.status == true ? (
                    <TouchableHighlight
                      underlayColor="transparent"
                      style={[styles.rightView]}
                      onPress={() =>
                        this.setState({ isWebsiteModelOpen: true })
                      }
                    >
                      <IconEntypo
                        style={styles.iconSize}
                        size={width * 0.06}
                        name="chevron-small-down"
                      />
                    </TouchableHighlight>
                  ) : null}

                  {this.state.website_profile.label !== "" ? (
                    <View style={[styles.rightView]}>
                      <Text style={styles.righttext}>
                        {this.state.website_profile.label}
                      </Text>
                    </View>
                  ) : null}
                </View>
              </View>
            </View>
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
      </View>
    );
  }
  showDateTimePicker = () => {
    this.setState({ isVisible: true });
  };
  onChangeDate = (date) => {
    this.setState({
      isVisible: false,
    });
    var date = moment(date).format("MMMM, Do YYYY");
    this.state.date.date = date;
    this.setState({ date: this.state.date });
    console.log("date -------->", this.state.date);
  };
  hidePicker = () => {
    this.setState({ isVisible: false });
  };
  showDateTimePicker2 = () => {
    this.setState({ isVisible2: true });
  };
  onChangeDate2 = (date) => {
    this.setState({
      isVisible2: false,
      //wedding_anniversary: moment(date).format("MMMM, Do YYYY"),
    });
    var date = moment(date).format("MMMM, Do YYYY");
    this.state.wedding_anniversary.date = date;
    this.setState({ wedding_anniversary: this.state.wedding_anniversary });

    console.log("A date has been picked: ", this.state.wedding_anniversary);
  };
  hidePicker2 = () => {
    this.setState({ isVisible2: false });
  };

  changeDateLabel = (label) => {
    this.setState({ isDateModelOpen: false });
    this.state.date.label = label;
    this.setState({ date: this.state.date });
    console.log("date -------->", this.state.date);
  };
  changeDateLabel2 = (label) => {
    this.setState({ isDateModelOpen2: false });
    this.state.wedding_anniversary.label = label;
    this.setState({ wedding_anniversary: this.state.wedding_anniversary });
    console.log("date -------->", this.state.wedding_anniversary);
  };
  renderDate() {
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
                        <Text style={styles.righttext}>Birthday</Text>
                      </View>
                    )}
                    {this.state.status == true ? (
                      <TouchableHighlight
                        underlayColor="transparent"
                        style={[
                          styles.addressRightView,
                          { marginTop: Metrics.smallMargin },
                        ]}
                        onPress={() => this.setState({ isDateModelOpen: true })}
                      >
                        <IconEntypo
                          style={styles.iconSize}
                          size={width * 0.06}
                          name="chevron-small-down"
                        />
                      </TouchableHighlight>
                    ) : null}

                    {this.state.date.label !== "" ? (
                      <View style={[styles.rightView]}>
                        <Text style={styles.righttext}>
                          {this.state.date.label}
                        </Text>
                      </View>
                    ) : null}
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.filedView}>
              <Text style={styles.stylefiledText}>{this.state.date.date}</Text>
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
              this.state.wedding_anniversary.date == "" ? (
                <Text style={styles.dateText}>3rd Febrauary,1999</Text>
              ) : null}
              <Text style={styles.dateText}>
                {this.state.wedding_anniversary.date}
              </Text>
              <DateTimePickerModal
                isVisible={this.state.isVisible2}
                onConfirm={this.onChangeDate2}
                onCancel={this.hidePicker2}
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
                        <Text style={styles.righttext}>
                          wedding anniversary
                        </Text>
                      </View>
                    )}
                    {this.state.status == true ? (
                      <TouchableHighlight
                        underlayColor="transparent"
                        style={[
                          styles.addressRightView,
                          { marginTop: Metrics.smallMargin },
                        ]}
                        onPress={() =>
                          this.setState({ isDateModelOpen2: true })
                        }
                      >
                        <IconEntypo
                          style={styles.iconSize}
                          size={width * 0.06}
                          name="chevron-small-down"
                        />
                      </TouchableHighlight>
                    ) : null}

                    {this.state.wedding_anniversary.label !== "" ? (
                      <View style={[styles.rightView]}>
                        <Text style={styles.righttext}>
                          {this.state.wedding_anniversary.label}
                        </Text>
                      </View>
                    ) : null}
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.filedViewRightTwo}>
              <Text style={styles.stylefiledText}>{this.state.wedding.date}</Text>
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
                    <Text style={styles.righttext}>
                  wedding anniversary 
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
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
        {/* wedding anniversary  */}
        <Modal
          style={styles.footerModal}
          visible={this.state.isDateModelOpen2}
          transparent={true}
          animationType="fade"
          onRequestClose={() => this.setState({ isDateModelOpen2: false })}
        >
          <View style={styles.contactContent}>
            <View style={styles.content}>
              <Text style={styles.modalHeader}>Date</Text>
              <View style={{ flexDirection: "column" }}>
                {this.state.dateLableList2.map((item, index) => {
                  return (
                    <TouchableHighlight
                      underlayColor="transparent"
                      onPress={() => {
                        this.changeDateLabel2(item.label);
                      }}
                    >
                      <Text style={styles.labelName}> {item.label} </Text>
                    </TouchableHighlight>
                  );
                })}
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() =>
                    this.setState({ isAddDateLabel2: true, dateLabel2: "" })
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
          visible={this.state.isAddDateLabel2}
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
                    this.changeDateLabel2(label);
                  }}
                />
                <TouchableHighlight
                  underlayColor="transparent"
                  style={styles.saveView}
                  onPress={() =>
                    this.state.dateLabel2 !== ""
                      ? this.setState({
                          isAddDateLabel2: false,
                          isDateModelOpen2: false,
                        })
                      : this.setState({ isAddDateLabel2: false })
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

  onChangeNote = (value) => {
    this.state.note_profile.note = value;
    this.setState({ note_profile: this.state.note_profile });
  };
  changeNoteLabel = (label) => {
    this.setState({ isNoteModelOpen: false });
    this.state.note_profile.label = label;
    this.setState({ note_profile: this.state.note_profile });
  };
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
                  value={this.state.note_profile}
                  onChangeText={(value) => this.onChangeNote(value)}
                />
              ) : (
                <Text style={styles.stylefiledText}>{this.state.note1.note}</Text>
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
                        <Text style={styles.righttext}>Note</Text>
                      </View>
                    )}
                    {this.state.status ? (
                      <TouchableHighlight
                        underlayColor="transparent"
                        style={styles.addressRightView}
                        onPress={() => this.setState({ isNoteModelOpen: true })}
                      >
                        <IconEntypo
                          style={styles.iconSize}
                          size={width * 0.06}
                          name="chevron-small-down"
                        />
                      </TouchableHighlight>
                    ) : null}

                    {this.state.note_profile.label !== "" ? (
                      <View style={styles.addressRightView}>
                        <Text style={styles.addressRighttext}>
                          {this.state.note_profile.label}
                        </Text>
                      </View>
                    ) : null}
                  </View>
                </View>
              </View>
            </View>
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

  onChangeCompany = (value) => {
    this.state.company_profile.company = value;
    this.setState({ company_profile: this.state.company_profile });
  };
  onChangeJobTitle = (value) => {
    this.state.job_title_profile.jobTitle = value;
    this.setState({ job_title_profile: this.state.job_title_profile });
  };
  onChangeWorkHours = (value, index) => {
    this.state.work_hour_profile.workHours = value;
    this.setState({ work_hour_profile: this.state.work_hour_profile });
  };

  renderCompany() {
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
                value={this.state.company_profile}
                onChangeText={(value) => this.onChangeCompany(value)}
              />
            ) : (
              <Text style={styles.stylefiledText}>{this.state.company.company}</Text>
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
                value={this.state.job_title_profile}
                onChangeText={(value) => this.onChangeJobTitle(value)}
              />
            ) : (
              <Text style={styles.stylefiledText}>{this.state.job_title.jobTitle}</Text>
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
        <View style={styles.fieldMain}>
          <View style={styles.filedViewRightTwoCompany}>
            <View
              style={{
                width: width * 0.5,
                // height: width * 0.35,
                flexDirection: "row",
              }}
            >
              {this.state.status == true ? (
                <TextInput
                  placeholder="Monday 9.00a.mto 5:00p.m Tuesday 9.00a.mto 5:00p.m 
             Wednesday 9.00a.mto 5:00p.m
             Thrusday 9.00a.mto 5:00p.m
             Friday 9.00a.mto 5:00p.m
             Saturday off
             Sunday off "
                  style={styles.stylefiledTextCompany}
                  placeholderTextColor={COLORS.main_text_color}
                  multiline={true}
                  keyboardType={"default"}
                  value={this.state.work_hour_profile}
                  onChangeText={(value) => this.onChangeWorkHours(value)}
                />
              ) : (
                <Text style={styles.stylefiledText}>
                  {this.state.work_hour}
                </Text>
              )}

              <View style={styles.rightView}>
                <View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "flex-end",
                      width: width * 0.35,
                    }}
                  >
                    <View style={styles.rightTwoCompany}>
                      <Image source={reset} style={styles.editImg} />
                      <View style={styles.resetImg}></View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.righttext}>Pacific Time Zone</Text>
            <Text style={styles.righttext}> Work hours</Text>
          </View>
        </View>
      </View>
    );
  }

  ShowHideTextComponentView = () => {
    if (this.state.status == false) {
      this.setState({ status: true });
    } else {
      this.setState({ status: false });
    }
    const { username } = this.props;

    const {
      friends_profile,
      phonenumber_1,
      phonenumber_2,
      phonenumber_3,
      email_profile,
      address_profile,
      messenger_profile,
      facebook_profile,
      instagram_profile,
      website_profile,
      birthday,
      wedding_anniversary,
      note_profile,
      work_hour_profile,
      company_profile,
      profile_image,
      messenger2,
      job_title_profile,
    } = this.state;
    if (friends_profile !== "") {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ friend: friends_profile });
    }
    if (phonenumber_1 !== "") {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ number1: phonenumber_1 });
    }
    if (phonenumber_2 !== "") {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ number2: phonenumber_2 });
    }
    if (phonenumber_3 !== "") {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ number3: phonenumber_3 });
    }
    if (email_profile !== "") {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ email: email_profile });
    }
    if (address_profile !== "") {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ address: address_profile });
    }
    if (messenger_profile !== "") {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ messanger1: messenger_profile });
    }
    if (facebook_profile !== "") {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ social_media1: facebook_profile });
    }
    if (instagram_profile !== "") {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ social_media2: instagram_profile });
    }
    if (website_profile !== "") {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ website1: website_profile });
    }
    if (birthday !== "") {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ date: birthday });
    }
    if (wedding_anniversary !== "") {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ dob: wedding_anniversary });
    }
    if (note_profile !== "") {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ note: note_profile });
    }
    if (work_hour_profile !== "") {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ work_hour: work_hour_profile });
    }
    if (company_profile !== "") {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ company: company_profile });
    }
    if (job_title_profile !== "") {
      firebase
        .firestore()
        .collection("user")
        .doc(`${username}`)
        .update({ job_title: job_title_profile });
    }
  };

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
