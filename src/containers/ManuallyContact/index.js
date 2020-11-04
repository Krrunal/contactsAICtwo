import { ActionSheet, Root } from "native-base";
import {
  Animated,
  CheckBox,
  Dimensions,
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";
import { darkTheme, lightTheme } from "../theme/themeProps";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import { Colors } from "react-native-paper";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import ImagePicker from "react-native-image-crop-picker";
import Metrics from "../theme/Metrics";
import { ThemeContext } from "react-navigation";
import Toast from "react-native-easy-toast";
import { addManualContact } from "../../services/FirebaseDatabase/manualContactToFirebase";
import { bindActionCreators } from "redux";
import calender from "../../assets/images/calender.png";
import call from "../../assets/images/call.png";
import { color } from "react-native-reanimated";
import { connect } from "react-redux";
import email from "../../assets/images/email.png";
import handshake from "../../assets/images/handshake.png";
import home from "../../assets/images/home.png";
import innerimg from "../../assets/images/innerimg.png";
import instagram from "../../assets/images/instagram.png";
import message from "../../assets/images/message.png";
import note from "../../assets/images/note.png";
import rigthLogo from "../../assets/icons/contact.png";
import sideBar from "../../assets/images/sideBAR.png";
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
      first_name: "",
      middle_name: "",
      last_name: "",
      nick_name: "",
      number1: "",
      number2: "",
      number3: "",
      email1: "",
      email2: "",
      address1: "",
      messenger1: "",
      messenger2: "",
      social_media1: "",
      social_media2: "",
      website1: "",
      website2: "",
      dob: "",
      note: "",
      company: "",
      job_title: "",
      work_hour: "",
      image: null,
      images: null,
      image2: null,
      image3: null,

      numberArray: [],
      emailArray: [],
      addressArray: [],
      messangerArray: [],
      socialMediaArray: [],
      websiteArray: [],
      dateArray: [],
      noteArray: [],
      companyArray: [],

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
    };
  }

  ShowHideTextComponentView = () => {
    const {
      first_name,
      middle_name,
      last_name,
      nick_name,
      number1,
      number2,
      number3,
      numberArray,
      email1,
      email2,
      emailArray,
      address1,
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
    const { user_id } = this.props;
    if (this.state.status == true) {
      if( first_name !== "" && number1 !== "" ){
            addManualContact(
                  user_id,
                  first_name,
                  middle_name,
                  last_name,
                  nick_name,
                  number1,
                  number2,
                  number3,
                  numberArray,
                  email1,
                  email2,
                  emailArray,
                  address1,
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
          first_name: "",
          middle_name: "",
          last_name: "",
          nick_name: "",
          number1: "",
          number2: "",
          number3: "",
          numberArray: [],
          email1: "",
          email2: "",
          emailArray: [],
          address1: "",
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
       alert('Please enter data to save contact')
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
            this.takePhtotFromCamera2();
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

  takePhtotFromCamera2 = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image2) => {
      console.log(image2);
      this.setState({
        image: {
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
      <View style={{ alignItems: "center" }}>
        <Text style={styles.lableText}>Friend</Text>
        <View style={styles.middleView}>
          <View style={styles.firstMiddle}>
            <View style={styles.squareBorder}></View>
            {/* <Image source={borderCorner} style={styles.firstImg} /> */}
            <View style={styles.firstLightBlue}></View>
            {/* <View style={styles.first}>
              <Text style={styles.firstText}>Select Photo</Text>
            </View> */}
          </View>
          <View style={styles.firstMiddle}>
            <View style={styles.squareBorder}></View>
            <View style={styles.firstdarkBlue}></View>
          </View>
          <View style={styles.firstMiddle}>
            <View style={styles.squareBorder}></View>
            <View style={styles.firstLightBlue}></View>
          </View>
        </View>
      </View>
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
    this.setState({
      numberArray: [...this.state.numberArray, { number: "value" }],
    });
  };

  onChangeNumber = (value, index) => {
    this.state.numberArray[index].number = value;
    this.setState({ numberArray: this.state.numberArray });
  };

  renderMobile() {
    return (
      <View style={{ marginTop: Metrics.baseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={call} style={styles.innerStyle} />
          </View>

          <View>
            <View style={styles.filedView}>
              <TextInput
                placeholder="Phone Number -1"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                maxLength={10}
                editable={this.state.status ? true : false}
                keyboardType={"numeric"}
                value={this.state.number1}
                onChangeText={(value) => this.setState({ number1: value })}
                ref={(input) => {
                  this.number1 = input;
                }}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Personal (Mobile)</Text>
              </View>
            </View>

            <View style={styles.filedView}>
              <TextInput
                placeholder="Phone Number -2"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                maxLength={10}
                editable={this.state.status ? true : false}
                keyboardType={"numeric"}
                value={this.state.number2}
                onChangeText={(value) => this.setState({ number2: value })}
                ref={(input) => {
                  this.number2 = input;
                }}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Personal (Landline)</Text>
              </View>
            </View>

            <View style={styles.filedView}>
              <TextInput
                placeholder="Phone Number -3"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                maxLength={10}
                editable={this.state.status ? true : false}
                keyboardType={"numeric"}
                value={this.state.number3}
                onChangeText={(value) => this.setState({ number3: value })}
                ref={(input) => {
                  this.number3 = input;
                }}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Work (Landline)</Text>
              </View>
            </View>

            {this.state.numberArray.map((input, key) => {
              return (
                <View style={styles.filedView} key={key}>
                  <TextInput
                    placeholder="Phone Number"
                    style={styles.stylefiledText}
                    placeholderTextColor={COLORS.main_text_color}
                    maxLength={10}
                    key={key}
                    keyboardType={"number-pad"}
                    onChangeText={(number) => {
                      this.onChangeNumber(number, key);
                    }}
                  />
                </View>
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
          </View>
        </View>
      </View>
    );
  }

  addEmail = () => {
    this.setState({
      emailArray: [...this.state.emailArray, { email: "value" }],
    });
  };

  onChangeEmail = (value, index) => {
    this.state.emailArray[index].email = value;
    this.setState({ emailArray: this.state.emailArray });
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
                placeholder="E-mail Address -1"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                editable={this.state.status ? true : false}
                value={this.state.email1}
                onChangeText={(value) => this.setState({ email1: value })}
                ref={(input) => {
                  this.email1 = input;
                }}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>( Personal 1 )</Text>
              </View>
            </View>

            <View style={styles.filedView}>
              <TextInput
                placeholder="E-mail Address -2"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                editable={this.state.status ? true : false}
                value={this.state.email2}
                onChangeText={(value) => this.setState({ email2: value })}
                ref={(input) => {
                  this.email2 = input;
                }}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>( Personal 2 )</Text>
              </View>
            </View>

            {this.state.emailArray.map((input, key) => {
              return (
                <View style={styles.filedView} key={key}>
                  <TextInput
                    placeholder="E-mail Address"
                    style={styles.stylefiledText}
                    placeholderTextColor={COLORS.main_text_color}
                    key={key}
                    keyboardType={"email-address"}
                    onChangeText={(email) => {
                      this.onChangeEmail(email, key);
                    }}
                  />
                </View>
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
          </View>
        </View>
      </View>
    );
  }

  addAddress = () => {
    this.setState({
      addressArray: [...this.state.addressArray, { address: "value" }],
    });
  };

  onChangeAddress = (value, index) => {
    this.state.addressArray[index].address = value;
    this.setState({ addressArray: this.state.addressArray });
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
                value={this.state.address1}
                onChangeText={(value) => this.setState({ address1: value })}
                ref={(input) => {
                  this.address1 = input;
                }}
              />
              <View style={styles.addressRightView}>
                <Text style={styles.addressRighttext}>( Personal 1 )</Text>
              </View>
            </View>

            {this.state.addressArray.map((input, key) => {
              return (
                <View style={styles.addressFieldContainer} key={key}>
                  <TextInput
                    placeholder="Address"
                    style={styles.addressField}
                    placeholderTextColor={COLORS.main_text_color}
                    multiline={true}
                    numberOfLines={5}
                    key={key}
                    keyboardType={"default"}
                    onChangeText={(address) => {
                      this.onChangeAddress(address, key);
                    }}
                  />
                </View>
              );
            })}

            <TouchableOpacity
              onPress={() => this.addAddress()}
              disable={this.state.disabledAddress}
            >
              {this.state.status ? (
                <NormalText> + Add Address </NormalText>
              ) : null}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  addMessanger = () => {
    this.setState({
      messangerArray: [...this.state.messangerArray, { messenger: "value" }],
    });
  };

  onChangeMessenger = (value, index) => {
    this.state.messangerArray[index].messenger = value;
    this.setState({ messangerArray: this.state.messangerArray });
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
                placeholder="Messenger Account -1"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                editable={this.state.status ? true : false}
                value={this.state.messenger1}
                onChangeText={(value) => this.setState({ messenger1: value })}
                ref={(input) => {
                  this.messenger1 = input;
                }}
              />

              <View style={styles.rightView}>
                <Text style={styles.righttext}>( Personal )</Text>
              </View>
            </View>

            <View style={styles.filedView}>
              <TextInput
                placeholder="Messenger Account -2"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                editable={this.state.status ? true : false}
                value={this.state.messenger2}
                onChangeText={(value) => this.setState({ messenger2: value })}
                ref={(input) => {
                  this.messenger2 = input;
                }}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>( Work )</Text>
              </View>
            </View>

            {this.state.messangerArray.map((input, key) => {
              return (
                <View style={styles.filedView} key={key}>
                  <TextInput
                    placeholder="Messenger Account"
                    style={styles.stylefiledText}
                    placeholderTextColor={COLORS.main_text_color}
                    key={key}
                    keyboardType={"default"}
                    onChangeText={(messenger) => {
                      this.onChangeMessenger(messenger, key);
                    }}
                  />
                </View>
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
          </View>
        </View>
      </View>
    );
  }

  addSocialMedia = () => {
    this.setState({
      socialMediaArray: [
        ...this.state.socialMediaArray,
        { socialMedia: "value" },
      ],
    });
  };

  onChangeSocialMedia = (value, index) => {
    this.state.socialMediaArray[index].socialMedia = value;
    this.setState({ socialMediaArray: this.state.socialMediaArray });
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
                placeholder="Social Media Account -1"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                value={this.state.social_media1}
                editable={this.state.status ? true : false}
                onChangeText={(value) =>
                  this.setState({ social_media1: value })
                }
                ref={(input) => {
                  this.social_media1 = input;
                }}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>( Instagram Personal )</Text>
              </View>
            </View>

            <View style={styles.filedView}>
              <TextInput
                placeholder="Social Media Account -2"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                value={this.state.social_media2}
                editable={this.state.status ? true : false}
                onChangeText={(value) =>
                  this.setState({ social_media2: value })
                }
                ref={(input) => {
                  this.social_media2 = input;
                }}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>( Periscop Professional )</Text>
              </View>
            </View>

            {this.state.socialMediaArray.map((input, key) => {
              return (
                <View style={styles.filedView} key={key}>
                  <TextInput
                    placeholder="Social Media Account"
                    style={styles.stylefiledText}
                    placeholderTextColor={COLORS.main_text_color}
                    key={key}
                    keyboardType={"default"}
                    onChangeText={(socialMedia) => {
                      this.onChangeSocialMedia(socialMedia, key);
                    }}
                  />
                </View>
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
          </View>
        </View>
      </View>
    );
  }

  addWebsite = () => {
    this.setState({
      websiteArray: [...this.state.websiteArray, { website: "value" }],
    });
  };

  onChangeWebsite = (value, index) => {
    this.state.websiteArray[index].website = value;
    this.setState({ websiteArray: this.state.websiteArray });
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
                placeholder="Website -1"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                value={this.state.website1}
                editable={this.state.status ? true : false}
                onChangeText={(value) => this.setState({ website1: value })}
                ref={(input) => {
                  this.website1 = input;
                }}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>( Sport gambling podcast )</Text>
              </View>
            </View>

            <View style={styles.filedView}>
              <TextInput
                placeholder="Website -2"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                value={this.state.website2}
                editable={this.state.status ? true : false}
                onChangeText={(value) => this.setState({ website2: value })}
                ref={(input) => {
                  this.website2 = input;
                }}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>( Universal Studio )</Text>
              </View>
            </View>

            {this.state.websiteArray.map((input, key) => {
              return (
                <View style={styles.filedView} key={key}>
                  <TextInput
                    placeholder="Website"
                    style={styles.stylefiledText}
                    placeholderTextColor={COLORS.main_text_color}
                    key={key}
                    keyboardType={"default"}
                    onChangeText={(website) => {
                      this.onChangeWebsite(website, key);
                    }}
                  />
                </View>
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
          </View>
        </View>
      </View>
    );
  }

  addDate = () => {
    this.setState({
      dateArray: [...this.state.dateArray, { date: "value" }],
    });
  };

  onChangeDate = (value, index) => {
    this.state.dateArray[index].date = value;
    this.setState({ dateArray: this.state.dateArray });
  };

  renderDate() {
    return (
      <View style={{ marginTop: Metrics.doubleBaseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={calender} style={styles.innerStyle} />
          </View>

          <View>
            <View style={styles.filedView}>
              <TextInput
                placeholder="Date"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                value={this.state.dob}
                editable={this.state.status ? true : false}
                onChangeText={(value) => this.setState({ dob: value })}
                ref={(input) => {
                  this.dob = input;
                }}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>( Birthday )</Text>
              </View>
            </View>

            {this.state.dateArray.map((input, key) => {
              return (
                <View style={styles.filedView} key={key}>
                  <TextInput
                    placeholder="Date"
                    style={styles.stylefiledText}
                    placeholderTextColor={COLORS.main_text_color}
                    key={key}
                    keyboardType={"default"}
                    onChangeText={(date) => {
                      this.onChangeDate(date, key);
                    }}
                  />
                </View>
              );
            })}

            <TouchableOpacity
              onPress={() => this.addDate()}
              disable={this.state.disabledDate}
            >
              {this.state.status ? <NormalText> + Add Date </NormalText> : null}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  addNote = () => {
    this.setState({
      noteArray: [...this.state.noteArray, { note: "value" }],
    });
  };

  onChangeNote = (value, index) => {
    this.state.noteArray[index].note = value;
    this.setState({ noteArray: this.state.noteArray });
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
                value={this.state.note}
                editable={this.state.status ? true : false}
                onChangeText={(value) => this.setState({ note: value })}
                ref={(input) => {
                  this.note = input;
                }}
              />
              <View style={styles.addressRightView}>
                <Text style={styles.addressRighttext}>( Note -1 )</Text>
              </View>
            </View>

            {this.state.noteArray.map((input, key) => {
              return (
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
                      this.onChangeNote(note, key);
                    }}
                  />
                </View>
              );
            })}

            <TouchableOpacity
              onPress={() => this.addNote()}
              disable={this.state.disabledNote}
            >
              {this.state.status ? <NormalText> + Add Note </NormalText> : null}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  addCompany = () => {
    this.setState({
      companyArray: [...this.state.companyArray, { company: "value" }],
    });
  };

  onChangeCompany = (value, index) => {
    this.state.companyArray[index].company = value;
    this.setState({ companyArray: this.state.companyArray });
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
                value={this.state.company}
                editable={this.state.status ? true : false}
                onChangeText={(value) => this.setState({ company: value })}
                ref={(input) => {
                  this.company = input;
                }}
              />
              <View style={styles.rightView}>
                {/* <Text style={styles.righttext}>First Name</Text> */}
              </View>
            </View>

            <View style={styles.filedView}>
              <TextInput
                placeholder="Job Title"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                editable={this.state.status ? true : false}
                value={this.state.job_title}
                onChangeText={(value) => this.setState({ job_title: value })}
                ref={(input) => {
                  this.job_title = input;
                }}
              />
            </View>

            <View style={styles.filedView}>
              <TextInput
                placeholder="Work Hours"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                value={this.state.work_hour}
                editable={this.state.status ? true : false}
                onChangeText={(value) => this.setState({ work_hour: value })}
                ref={(input) => {
                  this.work_hour = input;
                }}
              />
            </View>

            {this.state.companyArray.map((input, key) => {
              return (
                <View style={styles.filedView} key={key}>
                  <TextInput
                    placeholder="Company"
                    style={styles.addressField}
                    placeholderTextColor={COLORS.main_text_color}
                    key={key}
                    keyboardType={"default"}
                    onChangeText={(company) => {
                      this.onChangeCompany(company, key);
                    }}
                  />
                </View>
              );
            })}

            <TouchableOpacity
              onPress={() => this.addCompany()}
              disable={this.state.disabledCompany}
            >
              {this.state.status ? <NormalText> + Company </NormalText> : null}
            </TouchableOpacity>
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
          </Container>
        </View>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    theme: state.themeReducer.theme,
    user_id: state.login.shouldLoadData.user_id,
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
