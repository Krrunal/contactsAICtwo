import {
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React, { Component, useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";
import firebase from "../../services/FirebaseDatabase/db";

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
      // number: "",
      // number1: "",
      friends: "",
      number2: "",
      number3: "",
      email: "",
      address: "",

      company: "",
      date: "",
      dob1: "",
      job_title: "",
      messenger: "",
      messenger1: "",
      messenger2: "",
      note1: "",
      number: "",
      number1: "",
      number2: "",
      number3: "",
      social_media: "",
      website: "",
      work_hour: "",
      isVisible: false,
      isVisible2: false,
      mobileSection: false,
      status: false,

      birthday: "",
      address_profile: "",
      wedding_anniversary: "",
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
        console.log("Number--->", item.address);
        // this.setState({ contact: item });
        this.setState({ address: item.address });
        this.setState({ company: item.company });
        this.setState({ date: item.date });
        this.setState({ dob1: item.dob1 });
        this.setState({ email: item.email });
        this.setState({ job_title: item.job_title });
        this.setState({ messenger: item.messenger });
        this.setState({ messenger1: item.messenger1 });
        this.setState({ messenger2: item.messenger2 });
        this.setState({ note1: item.note1 });
        this.setState({ number: item.number });
        this.setState({ number1: item.number1 });
        this.setState({ number2: item.number2 });
        this.setState({ number3: item.number3 });
        this.setState({ social_media: item.social_media });
        this.setState({ website: item.website });
        this.setState({ work_hour: item.work_hour });
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
                value={this.state.friends}
                onChangeText={(friends) => this.setState({ friends })}
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
                value={this.state.phonenumber_2}
                inputRef={"phone"}
                keyboardType={"numeric"}
                onChangeText={this.onChangeNumber2}
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
                value={this.state.phonenumber_2}
                inputRef={"phone"}
                keyboardType={"numeric"}
                onChangeText={this.onChangeNumber2}
                defaultCountry="CA"
                isProfile={false}
              />
            ) : (
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
        </View>
      </View>
    );
  }

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
                onChangeText={(email_profile) =>
                  this.setState({ email_profile })
                }
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
                    onChangeText={(address_profile) =>
                      this.setState({ address_profile })
                    }
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
                onChangeText={(messenger_profile) =>
                  this.setState({ messenger_profile })
                }
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
                value={this.state.facebook}
                onChangeText={(facebook) => this.setState({ facebook })}
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
                value={this.state.instagram}
                onChangeText={(instagram) => this.setState({ instagram })}
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
                onChangeText={(website_profile) =>
                  this.setState({ website_profile })
                }
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
                     <Text style={styles.righttext}>( wedding anniversary )</Text>
                   </View>
                 </View>
               </View>
             </TouchableOpacity>
          ) : (
            <View style={styles.filedViewRightTwo}>
            <Text style={styles.stylefiledText}>{this.state.dob1}</Text>
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
                  <Text style={styles.righttext}>( wedding anniversary )</Text>
                </View>
              </View>
            </View>
          </View>
          ) }
       
        </View>
      </View>
    );
  }

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
                 value={this.state.note}
                 onChangeText={(note) => this.setState({ note })}
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
               value={this.state.company}
               onChangeText={(company) => this.setState({ company })}
             />
            ) : ( <Text style={styles.stylefiledText}>{this.state.company}</Text>)}
           
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
                onChangeText={(job_title_profile) => this.setState({ job_title_profile })}
              /> 
            ) : (<Text style={styles.stylefiledText}>{this.state.job_title}</Text>)}
           
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
                value={this.state.work_hours}
                onChangeText={(work_hours) => this.setState({ work_hours })}
              />) : (<Text style={styles.stylefiledText}>{this.state.work_hour}</Text>)}
            
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
