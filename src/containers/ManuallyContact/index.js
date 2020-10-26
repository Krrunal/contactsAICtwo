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
      address: "",
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

      valueArrayNumber: [],
      valueArrayEmail: [],
      valueArrayAddress: [],
      valueArrayMessanger: [],
      valueArraySocialMedia: [],
      valueArrayWebsite: [],
      valueArrayDate: [],
      valueArrayNote: [],
      valueArrayCompany: [],

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

    this.indexNumber = 0;
    this.indexEmail = 0;
    this.indexAddress = 0;
    this.indexMessanger = 0;
    this.indexSocialMedia = 0;
    this.indexWebsite = 0;
    this.indexDate = 0;
    this.indexNote = 0;
    this.indexCompany = 0;
    this.animatedValue = new Animated.Value(0);
  }

  ShowHideTextComponentView = () => {
    if (this.state.status == true) {
      this.setState({ status: false });
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
              {this.state.status ? (
                <TextInput
                  placeholder=""
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={10}
                  value={this.first_name}
                  onChangeText={(value) => this.setState({ first_name: value })}
                  ref={(input) => {
                    this.first_name = input;
                  }}
                />
              ) : (
                <TextInput
                  placeholder=""
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={10}
                  editable={this.state.TextInputDisable}
                  value={this.first_name}
                  onChangeText={(value) => this.setState({ first_name: value })}
                  ref={(input) => {
                    this.first_name = input;
                  }}
                />
              )}

              <View style={styles.rightView}>
                <Text style={styles.righttext}>First Name</Text>
              </View>
            </View>

            <View style={styles.filedView}>
              {this.state.status ? (
                <TextInput
                  placeholder=""
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={10}
                  value={this.middle_name}
                  onChangeText={(value) =>
                    this.setState({ middle_name: value })
                  }
                  ref={(input) => {
                    this.middle_name = input;
                  }}
                />
              ) : (
                <TextInput
                  placeholder=""
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={10}
                  editable={this.state.TextInputDisable}
                  value={this.middle_name}
                  onChangeText={(value) =>
                    this.setState({ middle_name: value })
                  }
                  ref={(input) => {
                    this.middle_name = input;
                  }}
                />
              )}
              <View style={styles.rightView}>
                <Text style={styles.righttext}>Middle Name</Text>
              </View>
            </View>

            <View style={styles.filedView}>
              {this.state.status ? (
                <TextInput
                  placeholder=""
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={10}
                  value={this.last_name}
                  onChangeText={(value) => this.setState({ last_name: value })}
                  ref={(input) => {
                    this.last_name = input;
                  }}
                />
              ) : (
                <TextInput
                  placeholder=""
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={10}
                  editable={this.state.TextInputDisable}
                  value={this.last_name}
                  onChangeText={(value) => this.setState({ last_name: value })}
                  ref={(input) => {
                    this.last_name = input;
                  }}
                />
              )}

              <View style={styles.rightView}>
                <Text style={styles.righttext}>Last Name</Text>
              </View>
            </View>

            <View style={styles.filedView}>
              {this.state.status ? (
                <TextInput
                  placeholder=""
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={10}
                  value={this.nick_name}
                  onChangeText={(value) => this.setState({ nick_name: value })}
                  ref={(input) => {
                    this.nick_name = input;
                  }}
                />
              ) : (
                <TextInput
                  placeholder=""
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={10}
                  editable={this.state.TextInputDisable}
                  value={this.nick_name}
                  onChangeText={(value) => this.setState({ nick_name: value })}
                  ref={(input) => {
                    this.nick_name = input;
                  }}
                />
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

  addNumber = () => {
    this.animatedValue.setValue(0);
    let newlyAddedValue = { indexNumber: this.indexNumber };
    this.setState(
      {
        disabledNumber: true,
        valueArrayNumber: [...this.state.valueArrayNumber, newlyAddedValue],
      },
      () => {
        Animated.timing(this.animatedValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          this.indexNumber = this.indexNumber + 1;
          this.setState({ disabledNumber: false });
        });
      }
    );
  };

  renderMobile() {
    let arrayNumber = this.state.valueArrayNumber.map((item, key) => {
      if (key == this.indexNumber) {
        return (
          <View style={styles.filedView}>
            <TextInput
              placeholder="Phone Number"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
              editable={this.state.TextInputDisable}
            />

            <View style={styles.rightView}>
              <Text style={styles.righttext}>Personal</Text>
            </View>
          </View>
        );
      } else {
        return (
          <View style={styles.filedView}>
            <TextInput
              placeholder="Phone Number"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>Personal</Text>
            </View>
          </View>
        );
      }
    });

    return (
      <View style={{ marginTop: Metrics.baseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={call} style={styles.innerStyle} />
          </View>

          <View>
            <View style={styles.filedView}>
              {this.state.status ? (
                <TextInput
                  placeholder="Phone Number -1"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={13}
                  keyboardType={"numeric"}
                  value={this.state.number1}
                  onChangeText={(value) => this.setState({ number1: value })}
                  ref={(input) => {
                    this.number1 = input;
                  }}
                />
              ) : (
                <TextInput
                  placeholder="Phone Number -1"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={13}
                  keyboardType={"numeric"}
                  editable={this.state.TextInputDisable}
                  value={this.state.number1}
                  onChangeText={(value) => this.setState({ number1: value })}
                  ref={(input) => {
                    this.number1 = input;
                  }}
                />
              )}

              <View style={styles.rightView}>
                <Text style={styles.righttext}>Personal (Mobile)</Text>
              </View>
            </View>

            <View style={styles.filedView}>
              {this.state.status ? (
                <TextInput
                  placeholder="Phone Number -2"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={13}
                  keyboardType={"numeric"}
                  value={this.state.number2}
                  onChangeText={(value) => this.setState({ number2: value })}
                  ref={(input) => {
                    this.number2 = input;
                  }}
                />
              ) : (
                <TextInput
                  placeholder="Phone Number -2"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={13}
                  keyboardType={"numeric"}
                  editable={this.state.TextInputDisable}
                  value={this.state.number2}
                  onChangeText={(value) => this.setState({ number2: value })}
                  ref={(input) => {
                    this.number2 = input;
                  }}
                />
              )}

              <View style={styles.rightView}>
                <Text style={styles.righttext}>Personal (Landline)</Text>
              </View>
            </View>

            <View style={styles.filedView}>
              {this.state.status ? (
                <TextInput
                  placeholder="Phone Number -3"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={13}
                  keyboardType={"numeric"}
                  value={this.state.number3}
                  onChangeText={(value) => this.setState({ number3: value })}
                  ref={(input) => {
                    this.number3 = input;
                  }}
                />
              ) : (
                <TextInput
                  placeholder="Phone Number -3"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={13}
                  keyboardType={"numeric"}
                  value={this.state.number3}
                  editable={this.state.TextInputDisable}
                  onChangeText={(value) => this.setState({ number3: value })}
                  ref={(input) => {
                    this.number3 = input;
                  }}
                />
              )}

              <View style={styles.rightView}>
                <Text style={styles.righttext}>Work (Landline)</Text>
              </View>
            </View>

            {arrayNumber}

            <TouchableOpacity
              onPress={this.addNumber}
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

  addEmailAddress = () => {
    this.animatedValue.setValue(0);
    let newlyAddedValue = { indexEmail: this.indexEmail };
    this.setState(
      {
        disabledEmail: true,
        valueArrayEmail: [...this.state.valueArrayEmail, newlyAddedValue],
      },
      () => {
        Animated.timing(this.animatedValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          this.indexEmail = this.indexEmail + 1;
          this.setState({ disabledEmail: false });
        });
      }
    );
  };

  renderEmail() {
    let arrayEmailAddress = this.state.valueArrayEmail.map((item, key) => {
      if (key == this.indexEmail) {
        return (
          <View style={styles.filedView} key={key}>
            <TextInput
              placeholder="E-mail Address"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>( Personal )</Text>
            </View>
          </View>
        );
      } else {
        return (
          <View style={styles.filedView}>
            <TextInput
              placeholder="E-mail Address"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>( Personal )</Text>
            </View>
          </View>
        );
      }
    });

    return (
      <View style={{ marginTop: Metrics.doubleBaseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={email} style={styles.innerStyle} />
          </View>

          <View>
            <View style={styles.filedView}>
              {this.state.status ? (
                <TextInput
                  placeholder="E-mail Address -1"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={10}
                  value={this.state.email1}
                  onChangeText={(value) => this.setState({ email1: value })}
                  ref={(input) => {
                    this.email1 = input;
                  }}
                />
              ) : (
                <TextInput
                  placeholder="E-mail Address -1"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={10}
                  editable={this.state.TextInputDisable}
                  value={this.state.email1}
                  onChangeText={(value) => this.setState({ email1: value })}
                  ref={(input) => {
                    this.email1 = input;
                  }}
                />
              )}

              <View style={styles.rightView}>
                <Text style={styles.righttext}>( Personal 1 )</Text>
              </View>
            </View>

            <View style={styles.filedView}>
              {this.state.status ? (
                <TextInput
                  placeholder="E-mail Address -2"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={10}
                  value={this.state.email2}
                  onChangeText={(value) => this.setState({ email2: value })}
                  ref={(input) => {
                    this.email2 = input;
                  }}
                />
              ) : (
                <TextInput
                  placeholder="E-mail Address -2"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={10}
                  editable={this.state.TextInputDisable}
                  value={this.state.email2}
                  onChangeText={(value) => this.setState({ email2: value })}
                  ref={(input) => {
                    this.email2 = input;
                  }}
                />
              )}

              <View style={styles.rightView}>
                <Text style={styles.righttext}>( Personal 2 )</Text>
              </View>
            </View>

            {arrayEmailAddress}

            <TouchableOpacity
              onPress={this.addEmailAddress}
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
    this.animatedValue.setValue(0);
    let newlyAddedValue = { indexAddress: this.indexAddress };
    this.setState(
      {
        disabledAddress: true,
        valueArrayAddress: [...this.state.valueArrayAddress, newlyAddedValue],
      },
      () => {
        Animated.timing(this.animatedValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          this.indexAddress = this.indexAddress + 1;
          this.setState({ disabledAddress: false });
        });
      }
    );
  };

  renderAddress() {
    let arrayAddress = this.state.valueArrayAddress.map((item, key) => {
      if (key == this.indexAddress) {
        return (
          <View style={styles.addressFieldContainer} key={key}>
            <TextInput
              placeholder="Address"
              style={styles.addressField}
              placeholderTextColor={COLORS.main_text_color}
              multiline={true}
              numberOfLines={5}
            />

            <View style={styles.addressRightView}>
              <Text style={styles.addressRighttext}>( Personal )</Text>
            </View>
          </View>
        );
      } else {
        return (
          <View style={styles.addressFieldContainer}>
            <TextInput
              placeholder="Address"
              style={styles.addressField}
              placeholderTextColor={COLORS.main_text_color}
              multiline={true}
              numberOfLines={5}
            />
            <View style={styles.addressRightView}>
              <Text style={styles.addressRighttext}>( Personal )</Text>
            </View>
          </View>
        );
      }
    });

    return (
      <View style={{ marginTop: Metrics.doubleBaseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={home} style={styles.innerStyle} />
          </View>

          <View>
            <View style={styles.addressFieldContainer}>
              {this.state.status ? (
                <TextInput
                  placeholder="Address"
                  style={styles.addressField}
                  placeholderTextColor={COLORS.main_text_color}
                  multiline={true}
                  numberOfLines={5}
                  value={this.state.address}
                  onChangeText={(value) => this.setState({ address: value })}
                  ref={(input) => {
                    this.address = input;
                  }}
                />
              ) : (
                <TextInput
                  placeholder="Address"
                  style={styles.addressField}
                  placeholderTextColor={COLORS.main_text_color}
                  multiline={true}
                  numberOfLines={5}
                  editable={this.state.TextInputDisable}
                  value={this.state.address}
                  onChangeText={(value) => this.setState({ address: value })}
                  ref={(input) => {
                    this.address = input;
                  }}
                />
              )}
              <View style={styles.addressRightView}>
                <Text style={styles.addressRighttext}>( Personal 1 )</Text>
              </View>
            </View>

            {arrayAddress}

            <TouchableOpacity
              onPress={this.addAddress}
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

  addMessager = () => {
    this.animatedValue.setValue(0);
    let newlyAddedValue = { indexMessanger: this.indexMessanger };
    this.setState(
      {
        disabledMessanger: true,
        valueArrayMessanger: [
          ...this.state.valueArrayMessanger,
          newlyAddedValue,
        ],
      },
      () => {
        Animated.timing(this.animatedValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          this.indexMessanger = this.indexMessanger + 1;
          this.setState({ disabledMessanger: false });
        });
      }
    );
  };

  renderMessage() {
    let arrayMessenger = this.state.valueArrayMessanger.map((item, key) => {
      if (key == this.indexMessanger) {
        return (
          <View style={styles.filedView}>
            <TextInput
              placeholder="Messenger Account"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>( Personal )</Text>
            </View>
          </View>
        );
      } else {
        return (
          <View style={styles.filedView}>
            <TextInput
              placeholder="Messenger Account"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>( Personal )</Text>
            </View>
          </View>
        );
      }
    });

    return (
      <View style={{ marginTop: Metrics.doubleBaseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={message} style={styles.innerStyle} />
          </View>

          <View>
            <View style={styles.filedView}>
              {this.state.status ? (
                <TextInput
                  placeholder="Messenger Account -1"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={10}
                  value={this.state.messenger1}
                  onChangeText={(value) => this.setState({ messenger1: value })}
                  ref={(input) => {
                    this.messenger1 = input;
                  }}
                />
              ) : (
                <TextInput
                  placeholder="Messenger Account -1"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={10}
                  editable={this.state.TextInputDisable}
                  value={this.state.messenger1}
                  onChangeText={(value) => this.setState({ messenger1: value })}
                  ref={(input) => {
                    this.messenger1 = input;
                  }}
                />
              )}

              <View style={styles.rightView}>
                <Text style={styles.righttext}>( Personal )</Text>
              </View>
            </View>

            <View style={styles.filedView}>
              {this.state.status ? (
                <TextInput
                  placeholder="Messenger Account -2"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={10}
                  value={this.state.messenger2}
                  onChangeText={(value) => this.setState({ messenger2: value })}
                  ref={(input) => {
                    this.messenger2 = input;
                  }}
                />
              ) : (
                <TextInput
                  placeholder="Messenger Account -2"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={10}
                  editable={this.state.TextInputDisable}
                  value={this.state.messenger2}
                  onChangeText={(value) => this.setState({ messenger2: value })}
                  ref={(input) => {
                    this.messenger2 = input;
                  }}
                />
              )}
              <View style={styles.rightView}>
                <Text style={styles.righttext}>( Work )</Text>
              </View>
            </View>

            {arrayMessenger}

            <TouchableOpacity
              onPress={this.addMessager}
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
    this.animatedValue.setValue(0);
    let newlyAddedValue = { indexSocialMedia: this.indexSocialMedia };
    this.setState(
      {
        disabledSocialMedia: true,
        valueArraySocialMedia: [
          ...this.state.valueArraySocialMedia,
          newlyAddedValue,
        ],
      },
      () => {
        Animated.timing(this.animatedValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          this.indexSocialMedia = this.indexSocialMedia + 1;
          this.setState({ disabledSocialMedia: false });
        });
      }
    );
  };

  renderSocialmedia() {
    let arraySocialMedia = this.state.valueArraySocialMedia.map((item, key) => {
      if (key == this.indexSocialMedia) {
        return (
          <View style={styles.filedView}>
            <TextInput
              placeholder="Social Media Account"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>( Personal )</Text>
            </View>
          </View>
        );
      } else {
        return (
          <View style={styles.filedView}>
            <TextInput
              placeholder="Social Media Account"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>( Personal )</Text>
            </View>
          </View>
        );
      }
    });

    return (
      <View style={{ marginTop: Metrics.doubleBaseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={instagram} style={styles.innerStyle} />
          </View>

          <View>
            <View style={styles.filedView}>
              {this.state.status ? (
                <TextInput
                  placeholder="Social Media Account -1"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  value={this.state.social_media1}
                  onChangeText={(value) =>
                    this.setState({ social_media1: value })
                  }
                  ref={(input) => {
                    this.social_media1 = input;
                  }}
                />
              ) : (
                <TextInput
                  placeholder="Social Media Account -1"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  editable={this.state.TextInputDisable}
                  value={this.state.social_media1}
                  onChangeText={(value) =>
                    this.setState({ social_media1: value })
                  }
                  ref={(input) => {
                    this.social_media1 = input;
                  }}
                />
              )}

              <View style={styles.rightView}>
                <Text style={styles.righttext}>( Instagram Personal )</Text>
              </View>
            </View>

            <View style={styles.filedView}>
              {this.state.status ? (
                <TextInput
                  placeholder="Social Media Account -2"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  value={this.state.social_media2}
                  onChangeText={(value) =>
                    this.setState({ social_media2: value })
                  }
                  ref={(input) => {
                    this.social_media2 = input;
                  }}
                />
              ) : (
                <TextInput
                  placeholder="Social Media Account -2"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  editable={this.state.TextInputDisable}
                  value={this.state.social_media2}
                  onChangeText={(value) =>
                    this.setState({ social_media2: value })
                  }
                  ref={(input) => {
                    this.social_media2 = input;
                  }}
                />
              )}

              <View style={styles.rightView}>
                <Text style={styles.righttext}>( Periscop Professional )</Text>
              </View>
            </View>

            {arraySocialMedia}

            <TouchableOpacity
              onPress={this.addSocialMedia}
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
    this.animatedValue.setValue(0);
    let newlyAddedValue = { indexWebsite: this.indexWebsite };
    this.setState(
      {
        disableWebsite: true,
        valueArrayWebsite: [...this.state.valueArrayWebsite, newlyAddedValue],
      },
      () => {
        Animated.timing(this.animatedValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          this.indexWebsite = this.indexWebsite + 1;
          this.setState({ disableWebsite: false });
        });
      }
    );
  };

  renderWebsite() {
    let arrayWebsite = this.state.valueArrayWebsite.map((item, key) => {
      if (key == this.indexWebsite) {
        return (
          <View style={styles.filedView}>
            <TextInput
              placeholder="Website"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>( podcast )</Text>
            </View>
          </View>
        );
      } else {
        return (
          <View style={styles.filedView}>
            <TextInput
              placeholder="Website"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>( podcast )</Text>
            </View>
          </View>
        );
      }
    });

    return (
      <View style={{ marginTop: Metrics.doubleBaseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={website} style={styles.innerStyle} />
          </View>

          <View>
            <View style={styles.filedView}>
              {this.state.status ? (
                <TextInput
                  placeholder="Website -1"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  value={this.state.website1}
                  onChangeText={(value) => this.setState({ website1: value })}
                  ref={(input) => {
                    this.website1 = input;
                  }}
                />
              ) : (
                <TextInput
                  placeholder="Website -1"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  editable={this.state.TextInputDisable}
                  value={this.state.website1}
                  onChangeText={(value) => this.setState({ website1: value })}
                  ref={(input) => {
                    this.website1 = input;
                  }}
                />
              )}
              <View style={styles.rightView}>
                <Text style={styles.righttext}>( Sport gambling podcast )</Text>
              </View>
            </View>

            <View style={styles.filedView}>
              {this.state.status ? (
                <TextInput
                  placeholder="Website -2"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                />
              ) : (
                <TextInput
                  placeholder="Website -2"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  editable={this.state.TextInputDisable}
                  value={this.state.website2}
                  onChangeText={(value) => this.setState({ website2: value })}
                  ref={(input) => {
                    this.website2 = input;
                  }}
                />
              )}
              <View style={styles.rightView}>
                <Text style={styles.righttext}>( Universal Studio )</Text>
              </View>
            </View>

            {arrayWebsite}

            <TouchableOpacity
              onPress={this.addWebsite}
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
    this.animatedValue.setValue(0);
    let newlyAddedValue = { indexDate: this.indexDate };
    this.setState(
      {
        disabledDate: true,
        valueArrayDate: [...this.state.valueArrayDate, newlyAddedValue],
      },
      () => {
        Animated.timing(this.animatedValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          this.indexDate = this.indexDate + 1;
          this.setState({ disabledDate: false });
        });
      }
    );
  };

  renderDate() {
    let arrayDate = this.state.valueArrayDate.map((item, key) => {
      if (key == this.indexDate) {
        return (
          <View style={styles.filedView}>
            <TextInput
              placeholder="Date"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>( Birthday )</Text>
            </View>
          </View>
        );
      } else {
        return (
          <View style={styles.filedView}>
            <TextInput
              placeholder="Date"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>( Birthday )</Text>
            </View>
          </View>
        );
      }
    });

    return (
      <View style={{ marginTop: Metrics.doubleBaseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={calender} style={styles.innerStyle} />
          </View>

          <View>
            <View style={styles.filedView}>
              {this.state.status ? (
                <TextInput
                  placeholder="Date"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  value={this.state.dob}
                  onChangeText={(value) => this.setState({ dob: value })}
                  ref={(input) => {
                    this.dob = input;
                  }}
                />
              ) : (
                <TextInput
                  placeholder="Date"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  editable={this.state.TextInputDisable}
                  value={this.state.dob}
                  onChangeText={(value) => this.setState({ dob: value })}
                  ref={(input) => {
                    this.dob = input;
                  }}
                />
              )}
              <View style={styles.rightView}>
                <Text style={styles.righttext}>( Birthday )</Text>
              </View>
            </View>

            {arrayDate}

            <TouchableOpacity
              onPress={this.addDate}
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
    this.animatedValue.setValue(0);
    let newlyAddedValue = { indexNote: this.indexNote };
    this.setState(
      {
        disabledNote: true,
        valueArrayNote: [...this.state.valueArrayNote, newlyAddedValue],
      },
      () => {
        Animated.timing(this.animatedValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          this.indexNote = this.indexNote + 1;
          this.setState({ disabledNote: false });
        });
      }
    );
  };

  renderNote() {
    let arrayNote = this.state.valueArrayNote.map((item, key) => {
      if (key == this.indexNote) {
        return (
          <View style={styles.addressFieldContainer}>
            <TextInput
              placeholder="Note"
              style={styles.addressField}
              placeholderTextColor={COLORS.main_text_color}
              multiline={true}
              numberOfLines={5}
            />
            <View style={styles.addressRightView}>
              <Text style={styles.addressRighttext}>( Note )</Text>
            </View>
          </View>
        );
      } else {
        return (
          <View style={styles.addressFieldContainer}>
            <TextInput
              placeholder="Note"
              style={styles.addressField}
              placeholderTextColor={COLORS.main_text_color}
              multiline={true}
              numberOfLines={5}
            />
            <View style={styles.addressRightView}>
              <Text style={styles.addressRighttext}>( Note )</Text>
            </View>
          </View>
        );
      }
    });

    return (
      <View style={{ marginTop: Metrics.doubleBaseMargin }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={note} style={styles.innerStyle} />
          </View>

          <View>
            <View style={styles.addressFieldContainer}>
              {this.state.status ? (
                <TextInput
                  placeholder="Note"
                  style={styles.addressField}
                  placeholderTextColor={COLORS.main_text_color}
                  multiline={true}
                  numberOfLines={5}
                  value={this.state.note}
                  onChangeText={(value) => this.setState({ note: value })}
                  ref={(input) => {
                    this.note = input;
                  }}
                />
              ) : (
                <TextInput
                  placeholder="Note"
                  style={styles.addressField}
                  placeholderTextColor={COLORS.main_text_color}
                  multiline={true}
                  numberOfLines={5}
                  editable={this.state.TextInputDisable}
                  value={this.state.note}
                  onChangeText={(value) => this.setState({ note: value })}
                  ref={(input) => {
                    this.note = input;
                  }}
                />
              )}

              <View style={styles.addressRightView}>
                <Text style={styles.addressRighttext}>( Note -1 )</Text>
              </View>
            </View>

            {arrayNote}

            <TouchableOpacity
              onPress={this.addNote}
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
    this.animatedValue.setValue(0);
    let newlyAddedValue = { indexCompany: this.indexCompany };
    this.setState(
      {
        disabledCompany: true,
        valueArrayCompany: [...this.state.valueArrayCompany, newlyAddedValue],
      },
      () => {
        Animated.timing(this.animatedValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          this.indexCompany = this.indexCompany + 1;
          this.setState({ disabledCompany: false });
        });
      }
    );
  };

  renderCompany() {
    let arrayCompany = this.state.valueArrayCompany.map((item, key) => {
      if (key == this.indexCompany) {
        return (
          <View style={styles.filedView}>
            <TextInput
              placeholder="Company"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
          </View>
        );
      } else {
        return (
          <View style={styles.filedView}>
            <TextInput
              placeholder="Company"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
          </View>
        );
      }
    });

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
              {this.state.status ? (
                <TextInput
                  placeholder="Company"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={15}
                  value={this.state.company}
                  onChangeText={(value) => this.setState({ company: value })}
                  ref={(input) => {
                    this.company = input;
                  }}
                />
              ) : (
                <TextInput
                  placeholder="Company"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={15}
                  editable={this.state.TextInputDisable}
                  value={this.state.company}
                  onChangeText={(value) => this.setState({ company: value })}
                  ref={(input) => {
                    this.company = input;
                  }}
                />
              )}
              <View style={styles.rightView}>
                {/* <Text style={styles.righttext}>First Name</Text> */}
              </View>
            </View>

            <View style={styles.filedView}>
              {this.state.status ? (
                <TextInput
                  placeholder="Job Title"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={15}
                  value={this.state.job_title}
                  onChangeText={(value) => this.setState({ job_title: value })}
                  ref={(input) => {
                    this.job_title = input;
                  }}
                />
              ) : (
                <TextInput
                  placeholder="Job Title"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={15}
                  editable={this.state.TextInputDisable}
                  value={this.state.job_title}
                  onChangeText={(value) => this.setState({ job_title: value })}
                  ref={(input) => {
                    this.job_title = input;
                  }}
                />
              )}
            </View>

            <View style={styles.filedView}>
              {this.state.status ? (
                <TextInput
                  placeholder="Work Hours"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={15}
                  value={this.state.work_hour}
                  onChangeText={(value) => this.setState({ work_hour: value })}
                  ref={(input) => {
                    this.work_hour = input;
                  }}
                />
              ) : (
                <TextInput
                  placeholder="Work Hours"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.main_text_color}
                  maxLength={15}
                  editable={this.state.TextInputDisable}
                  value={this.state.work_hour}
                  onChangeText={(value) => this.setState({ work_hour: value })}
                  ref={(input) => {
                    this.work_hour = input;
                  }}
                />
              )}
            </View>

            {arrayCompany}

            <TouchableOpacity
              onPress={this.addCompany}
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
                {this.state.status == true ? (
                  <Text
                    style={{
                      color: COLORS.main_text_color,
                      fontFamily: Font.medium,
                      fontSize: width * 0.04,
                    }}
                  >
                    {" "}
                    Save{" "}
                  </Text>
                ) : (
                  <Text
                    style={{
                      color: COLORS.main_text_color,
                      fontFamily: Font.medium,
                      fontSize: width * 0.04,
                    }}
                  >
                    Edit{" "}
                  </Text>
                )}
              </TouchableHighlight>
            </View>
          </Container>
        </View>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
});

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
