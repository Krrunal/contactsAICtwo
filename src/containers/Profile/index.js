import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Keyboard,
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
      address: "",
      company: "",
      date: "",
      dob1: "",
      email: "",
      job_title: "",
      messenger: "",
      messenger1: "",
      messenger2: "",
      // note1: "",
      number: "",
      number1: "",
      number2: "",
      number3: "",
      social_media: "",
      website: "",
      work_hour: "",
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
      email_profile: { email :"" , label : ""},
      birthday:"",
      address_profile: { address :"" , label : ""},
      messenger_profile: { messanger :"" , label : ""},
      facebook_profile: { socialMedia :"" , label : ""},
      instagram_profile: { instagam :"" , label : ""},
      website_profile: { website :"" , label : ""},
      wedding_anniversary: "",
      note_profile: { note :"" , label : ""},
      work_hour_profile:{ workHours :"" , label : ""},
      company_profile: { company :"" , label : ""},
      job_title_profile: { jobTitle :"" , label : ""},
      social_media1:"",
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
        this.setState({ contact: item });
        console.log("social media ---->",item.social_media1.socialMedia)
        this.setState({ email :item.email.email})
        this.setState({ emailLabel :item.email.label})
        this.setState({ address: item.address.address });
        this.setState({ company: item.company.company });
        this.setState({ date: item.date });
        this.setState({ dob: item.dob });
        this.setState({ job_title: item.job_title.jobTitle });
        this.setState({ messenger: item.messenger });
        this.setState({ messenger1: item.messanger1.messanger });
        this.setState({ messenger2: item.messenger2 });
        this.setState({ note1: item.note.note });
        this.setState({ number: item.number });
        this.setState({ number1: item.number1 });
        this.setState({ number2: item.number2 });
        this.setState({ number3: item.number3 });
        this.setState({ social_media: item.social_media });
        this.setState({ social_media1: item.social_media1.socialMedia });
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
      this.setState({ phonenumber_1: unmaskedPhoneNumber });
    } else {
      this.setState({ phonenumber_1: unmaskedPhoneNumber });
    }
  };
  onChangeNumber2 = ({
    dialCode,
    unmaskedPhoneNumber,
    phoneNumber,
    isVerified,
  }) => {
    if (isVerified == true) {
      this.setState({ phonenumber_2: unmaskedPhoneNumber });
    } else {
      this.setState({ phonenumber_2: unmaskedPhoneNumber });
    }
  };
  onChangeNumber3 = ({
    dialCode,
    unmaskedPhoneNumber,
    phoneNumber,
    isVerified,
  }) => {
    if (isVerified == true) {
      this.setState({ phonenumber_3: unmaskedPhoneNumber });
    } else {
      this.setState({ phonenumber_3: unmaskedPhoneNumber });
    }
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
              <Text style={styles.stylefiledText}>{this.state.number1}</Text>
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
                    <View>
                      <Image source={edit} style={styles.editImg} />
                    </View>
                    <View style={styles.resetImg}>
                      <Image source={reset} style={styles.editImg} />
                    </View>
                  </View>
                  <Text style={styles.righttext}>( Personal )</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* <View style={styles.fieldMain}>
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
              //  ( this.state.number2 == "" ? (
              //     <Text style={styles.stylefiledText}>+1 (303) 123-4567</Text>
              //   ) : (

              //   ))
              <Text style={styles.stylefiledText}>{this.state.number2}</Text>
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
                    <View>
                      <Image source={edit} style={styles.editImg} />
                    </View>
                    <View style={styles.resetImg}>
                      <Image source={reset} style={styles.editImg} />
                    </View>
                  </View>
                  <Text style={styles.righttext}>( Work )</Text>
                </View>
              </View>
            </View>
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
              <Text style={styles.stylefiledText}>{this.state.number3}</Text>
            )}
            <View style={styles.rightView}>
              <View>
                <View style={styles.rightTwoImg}>
                  <View>
                    <Image source={edit} style={styles.editImg} />
                  </View>
                  <View style={styles.resetImg}>
                    <Image source={reset} style={styles.editImg} />
                  </View>
                </View>
                <Text style={styles.righttext}>( Lanline )</Text>
              </View>
            </View>
          </View>
        </View> */}
      </View>
    );
  }
  onChangeEmail = (value) => {
    this.state.email_profile.email = value;
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
                <View style={styles.rightTwoImg}>
                  <View>
                    <Image source={edit} style={styles.editImg} />
                  </View>
                  <View style={styles.resetImg}>
                    <Image source={reset} style={styles.editImg} />
                  </View>
                </View>
                <Text style={styles.righttext}>( Personal )</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  onChangeAddress = (value) => {
    this.state.address_profile.address = value;
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
                    {this.state.address}
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
                    <View style={styles.rightTwoImg}>
                      <View>
                        <Image source={edit} style={styles.editImg} />
                      </View>
                      <View style={styles.resetImg}>
                        <Image source={reset} style={styles.editImg} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.righttext}>( Personal )</Text>
          </View>
        </View>
      </View>
    );
  }

  onChangeMessenger = (value) => {
    this.state.messenger_profile.messanger = value;
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
              <Text style={styles.stylefiledText}>{this.state.messenger1}</Text>
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
                  <View style={styles.rightTwoImg}>
                    <View>
                      <Image source={edit} style={styles.editImg} />
                    </View>
                    <View style={styles.resetImg}>
                      <Image source={reset} style={styles.editImg} />
                    </View>
                  </View>
                  <Text style={styles.righttext}>( Facebook Messenger )</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
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
              <Text style={styles.stylefiledText}>{this.state.messenger2}</Text>
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
                    <View>
                      <Image source={edit} style={styles.editImg} />
                    </View>
                    <View style={styles.resetImg}>
                      <Image source={reset} style={styles.editImg} />
                    </View>
                  </View>
                  <Text style={styles.righttext}>( Facebook )</Text>
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
              <Text style={styles.stylefiledText}>{this.state.messenger}</Text>
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
                    <View>
                      <Image source={edit} style={styles.editImg} />
                    </View>
                    <View style={styles.resetImg}>
                      <Image source={reset} style={styles.editImg} />
                    </View>
                  </View>
                  <Text style={styles.righttext}>( Instagram )</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  onChangeWebsite = (value, index) => {
    this.state.website_profile.website = value;
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
              <Text style={styles.stylefiledText}>{this.state.website}</Text>
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
                  <View style={styles.rightTwoImg}>
                    <View>
                      <Image source={edit} style={styles.editImg} />
                    </View>
                    <View style={styles.resetImg}>
                      <Image source={reset} style={styles.editImg} />
                    </View>
                  </View>
                  <Text style={styles.righttext}>( Personal )</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  showDateTimePicker = () => {
    this.setState({ isVisible: true });
  };
  onChangeDate = (date) => {
    console.log("A date has been picked: ", date);
    this.setState({
      isVisible: false,
      birthday: moment(date).format("MMMM, Do YYYY"),
    });
  };
  hidePicker = () => {
    this.setState({ isVisible: false });
  };
  showDateTimePicker2 = () => {
    this.setState({ isVisible2: true });
  };
  onChangeDate2 = (date) => {
    console.log("A date has been picked: ", date);
    this.setState({
      isVisible2: false,
      wedding_anniversary: moment(date).format("MMMM, Do YYYY"),
    });
  };
  hidePicker2 = () => {
    this.setState({ isVisible2: false });
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
              {this.state.isVisible == false && this.state.birthday == "" ? (
                <Text style={styles.dateText}>1st January,1970</Text>
              ) : null}
              <Text style={styles.dateText}>{this.state.birthday}</Text>
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
                    <View style={styles.rightTwoImg}>
                      <View>
                        <Image source={edit} style={styles.editImg} />
                      </View>
                      <View style={styles.resetImg}>
                        <Image source={reset} style={styles.editImg} />
                      </View>
                    </View>
                    <Text style={styles.righttext}>( Birthday )</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.filedView}>
              <Text style={styles.stylefiledText}>{this.state.date}</Text>
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
                    <Text style={styles.righttext}>( Birthday )</Text>
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
              this.state.wedding_anniversary == "" ? (
                <Text style={styles.dateText}>3rd Febrauary,1999</Text>
              ) : null}
              <Text style={styles.dateText}>
                {this.state.wedding_anniversary}
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
                    <View style={styles.rightTwoImg}>
                      <View>
                        <Image source={edit} style={styles.editImg} />
                      </View>
                      <View style={styles.resetImg}>
                        <Image source={reset} style={styles.editImg} />
                      </View>
                    </View>
                    <Text style={styles.righttext}>
                      ( wedding anniversary )
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.filedViewRightTwo}>
              <Text style={styles.stylefiledText}>{this.state.dob}</Text>
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
                      ( wedding anniversary )
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }

  onChangeNote = (value) => {
    this.state.note_profile.note = value;
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
                width: width * 0.42,
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
                <Text style={styles.stylefiledText}>{this.state.note1}</Text>
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
                    <View style={styles.rightTwoImg}>
                      <View style={styles.resetImg}>
                        <Image source={reset} style={styles.editImg} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.righttext}>( Note 1 )</Text>
          </View>
        </View>
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
              <Text style={styles.stylefiledText}>{this.state.company}</Text>
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
                  <Text style={styles.righttext}>( Company )</Text>
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
              <Text style={styles.stylefiledText}>{this.state.job_title}</Text>
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
                  <Text style={styles.righttext}>( Job Title )</Text>
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
            <Text style={styles.righttext}>( Work hours)</Text>
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
      firebase .firestore().collection("user").doc(`${username}`).update({ friend : friends_profile });
    }
    if (phonenumber_1 !== "") {
      firebase .firestore().collection("user").doc(`${username}`).update({ number1 : phonenumber_1 });
    }
    if (email_profile !== "") {
        firebase .firestore().collection("user").doc(`${username}`).update({ email : email_profile });
    }
    if (address_profile !== "") {
      firebase .firestore().collection("user").doc(`${username}`).update({ address : address_profile });
    }
    if (messenger_profile !== "") {
      firebase .firestore().collection("user").doc(`${username}`).update({ messanger1 : messenger_profile });
    }
    if (facebook_profile !== "") {
      firebase .firestore().collection("user").doc(`${username}`).update({ social_media1 : facebook_profile });
    }
    if (instagram_profile !== "") {
      firebase .firestore().collection("user").doc(`${username}`).update({ social_media2 : instagram_profile });
    }
    if (website_profile !== "") {
      firebase .firestore().collection("user").doc(`${username}`).update({ website1 : website_profile });
    }
    if (birthday !== "") {
      firebase .firestore().collection("user").doc(`${username}`).update({ date : birthday });
    }
    if (wedding_anniversary !== "") {
      firebase .firestore().collection("user").doc(`${username}`).update({ dob : wedding_anniversary });
    }
    if (note_profile !== "") {
      firebase .firestore().collection("user").doc(`${username}`).update({ note : note_profile });
    }
    if (work_hour_profile !== "") {
      firebase .firestore().collection("user").doc(`${username}`).update({ work_hour : work_hour_profile });
    }
    if (company_profile !== "") {
      firebase .firestore().collection("user").doc(`${username}`).update({ company : company_profile });
    }
    if (job_title_profile !== "") {
      firebase .firestore().collection("user").doc(`${username}`).update({ job_title : job_title_profile });
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
