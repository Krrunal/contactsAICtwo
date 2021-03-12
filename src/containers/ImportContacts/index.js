import {
  Dimensions,
  FlatList,
  Image,
  PermissionsAndroid,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component, useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import CheckBox from "@react-native-community/checkbox";
import Constants from "../../action/Constants";
import Contacts from "react-native-contacts";
import Font from "../theme/font.js";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Metrics from "../theme/Metrics";
import RNFetchBlob from "rn-fetch-blob";
import { Spinner } from "../../components/Spinner";
import checked from "../../assets/icons/checkedModified.png";
import checkedModified from "../../assets/icons/checkedModified.png";
import checkedWhite from "../../assets/icons/checkedWhite.png";
import { connect } from "react-redux";
import firebase from "../../services/FirebaseDatabase/db";
import { importContactToFirebase } from "../../services/FirebaseDatabase/importContacToFirebase";
import { isRequired } from "react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType";
import sideBar from "../../assets/images/sideBAR.png";
import styles from "./style.js";

var { width, height } = Dimensions.get("window");

class importContact extends Component {
  state = {
    checked: false,
    inserFlag: false,
    fetchedContacts: [],
    selectedContact: [],
    n1: [],
    n2: [],
    isLoading: false,
    aicGivenName: [],
    aicGivenNames: [],
    checkedOff: false,
    addressLable: "",
    address1: "",
    website: "",
    jobTitle: "",
    doc_id: "",
    emailAddresses: "",
    isLoading: false,
    mobile_phone: "",
  };

  componentDidMount() {
    this.getContact();
    const { user_id, username } = this.props;
  }

  renderHeader() {
    return (
      <Header
        title="Import Contact"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  getContact = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: "ContactAIC App READ_CONTACTS Permission",
          message: "ContactAIC App needs access to your CONTACTS ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.setState({ isLoading: true }, async () => {
          Contacts.getAll((err, contacts) => {
            if (err) throw err;
            const contactNumber = contacts.filter((item) => {
              if (item.phoneNumbers.length != 0) {
                return { contact: item, isSelected: false };
              }
            });

            const sort = contacts.sort(function (a, b, index) {
              console.log("e lse  ---->", a.givenName);
              if (a.givenName == null) {
              } else {
                if (a.givenName.toLowerCase() < b.givenName.toLowerCase())
                  return -1;
                if (a.givenName.toLowerCase() > b.givenName.toLowerCase())
                  return 1;
                return 0;
              }
            });

            this.setState({
              isLoading: false,
              // fetchedContacts: contactNumber,
              fetchedContacts: sort,
              oldContacts: contactNumber,
              isModalVisible: true,
            });
          });
        });
      } else {
        console.log("READ_CONTACTS permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  onchecked = (keyInd, item) => {
    const { fetchedContacts } = this.state;
    let contactArr = fetchedContacts.map((item, key) => {
      if (keyInd == key) {
        item.isSelected = !item.isSelected;
      }
      this.setState({ checked: false });
      return { ...item };
    });
    this.setState({ fetchedContacts: contactArr });
  };

  selectAll = () => {
    const { fetchedContacts } = this.state;
    let contactArr = fetchedContacts.map((item, key) => {
      this.state.checkedOff == true
        ? (item.isSelected = true)
        : (item.isSelected = false);
      item.isSelected = !item.isSelected;
      this.setState({ checkedOff: !this.state.checkedOff });
      return { ...item };
    });
    this.setState({ fetchedContacts: contactArr });
  };

  renderMiddle() {
    const { fetchedContacts } = this.state;
    // console.log("sfdreeee---->",fetchedContacts[0])
    return (
      <View
        style={{
          // alignItems: "center",
          height: height * 0.6,
          paddingHorizontal: 0,
        }}
      >
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

        <ScrollView>
          {fetchedContacts.map((item, key) => (
            <TouchableOpacity
              style={styles.checkboxViewTwo}
              key={key}
              onPress={() => {
                this.onchecked(key, item.isSelected);
              }}
            >
              <CheckBox
                value={item.isSelected}
                onChange={() => {
                  this.onchecked(key, item.isSelected);
                }}
                tintColors={{ true: "#1374A3", false: "#1374A3" }}
              />
              <Text
                style={[
                  styles.selectText,
                  {
                    color:
                      this.props.theme.mode === "light" ? "#1374A3" : "white",
                  },
                ]}
              >
                {/* item.postalAddresses[0].formattedAddress */}
                {item.displayName == null ? "No Name" : item.displayName}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }

  renderLast() {
    return (
      <View style={{ alignItems: "center", flex: 1 }}>
        <View style={{ flex: 1, bottom: 25, position: "absolute" }}>
          <TouchableOpacity
            style={styles.Whiteview}
            onPress={this.importnavigate}
          >
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: Font.medium,
                fontSize: width * 0.045,
              }}
            >
              Import Contacts
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  getUniqeID = (profile_base) => {
    console.log(" doc_id --->", this.state.doc_id);
    const { user_id, username } = this.props;
    this.setState({ isLoading: true });
    const baseurl = Constants.baseurl;
    var _body = new FormData();
    _body.append("docid", this.state.doc_id);
    _body.append("userfile", profile_base);
    _body.append("position", 1);
    fetch(baseurl + "uploadfiles", {
      method: "POST",
      body: _body,
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log(" update  profile image 111 --->", responseJson);
        this.setState({ isLoading: false });
      })
      .catch((error) => {
        this.setState({ isLoading: false });
        alert("Something went wrong in image Update");
        console.log("name error---->", error);
      });
  };
  convertBase642(PATH_TO_THE_FILE) {
    let data = "";
    RNFetchBlob.fs
      .readStream(PATH_TO_THE_FILE, "base64", 4095)
      .then((ifstream) => {
        ifstream.open();
        ifstream.onData((chunk) => {
          data += chunk;
        });
        ifstream.onError((err) => {
          console.log("oops", err);
        });
        ifstream.onEnd(() => {
          var bs = data;
          // this.setState({ profile_base : bs });
          this.getUniqeID(bs);
        });
      });
  }
  importnavigate = (isSelect, item, key) => {
    const { fetchedContacts, selectedContact, n1, n2 } = this.state;
    const { user_id, username } = this.props;
    this.setState({ isLoading: true });
    firebase
      .firestore()
      .collection("user")
      .doc(username)
      .collection("contacts")
      .get()
      .then((snap) => {
        if (!snap.empty) {
          snap.forEach(async (doc) => {
            fetchedContacts.map((item) => {
              if (item.isSelected == true) {
                if (
                  doc._data.number.length > 0 &&
                  item.phoneNumbers.length > 0
                ) {
                  if (
                    doc._data.number[0].number !== item.phoneNumbers[0].number
                  ) {
                    // console.log("phone number---->", item.phoneNumbers[0].number );
                  } else {
                    item.isSelected = false;
                  }
                }
              }
            });
          });

          fetchedContacts.map((item) => {
            if (item.isSelected == true) {
              var S4 = (((1 + Math.random()) * 0x10000) | 0)
                .toString(16)
                .substring(1);
              // console.log(" if s4---->", S4);
              console.log("fetch contactss------>", item);
              if (item.emailAddresses.length > 0) {
                this.setState({ emailAddresses: item.emailAddresses[0].email });
              }
              if (item.urlAddresses.length > 0) {
                const address = item.urlAddresses.find(({ url }) => url == url);
                let address1 = address.url;
                this.setState({ website: address1 });
              }

              if (item.postalAddresses.length > 0) {
                const address = item.postalAddresses.find(
                  ({ formattedAddress }) => formattedAddress == formattedAddress
                );
                let address1 = address.formattedAddress;
                this.setState({ address1: address1 });
              }
              if (item.postalAddresses.length > 0) {
                const address = item.postalAddresses.find(
                  ({ formattedAddress }) => formattedAddress == formattedAddress
                );

                let address1 = address.label;
                this.setState({ addressLable: address1 });
              }

              if (item.jobTitle == "") {
                this.setState({ jobTitle: "" });
              } else {
                this.setState({ jobTitle: item.jobTitle });
              }
              if (item.thumbnailPath == "") {
              } else {
                this.convertBase642(item.thumbnailPath);
              }
              if (item.phoneNumbers.length > 0) {
                console.log("address---->", item.phoneNumbers[0].number);
                this.setState({ mobile_phone: item.phoneNumbers[0].number });
              }
              importContactToFirebase(
                username,
                item.thumbnailPath,
                "",
                "",
                item.givenName == null ? "" : item.givenName,
                item.middleName == null ? "" : item.middleName,
                item.familyName,
                "",
                this.state.addressLable,
                this.state.mobile_phone,
                "",
                "",
                item.phoneNumbers,
                this.state.emailAddresses,
                "",
                item.emailAddresses,
                "",
                this.state.address1,
                "",
                "",
                "",
                "",
                "",
                "",
                this.state.website,
                "",
                "",
                "",
                "",
                "",
                item.note.toLowerCase(),
                item.company.toLowerCase(),
                "",
                this.state.jobTitle.toLowerCase(),
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                true,
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                S4
              );
              firebase
                .firestore()
                .collection("user")
                .doc(username)
                .collection("contacts")
                .get()
                .then((snap) => {
                  snap.docs.forEach((doc_id) => {
                    if (S4 == doc_id._data.unique_id) {
                      console.log("doc idddddd ----->", doc_id.id);
                      this.setState({ doc_id: doc_id.id });
                    }
                  });
                });
            }
          });

          // this.getUniqeID();
          this.props.navigation.navigate("SerachEditContact");
          this.setState({ checked: false, isLoading: false });
          let contactArr = fetchedContacts.map((item, key) => {
            if ((item.isSelected = true)) {
              item.isSelected = false;
            }
            if (this.state.checkedOff == true) {
              this.setState({ checkedOff: false });
            }
            return { ...item };
          });
          this.setState({ fetchedContacts: contactArr });
          this.setState({ isLoading: false });
        } else {
          fetchedContacts.map((item) => {
            if (item.isSelected == true) {
              console.log("fetch contactss------>", item);
              var S4 = (((1 + Math.random()) * 0x10000) | 0)
                .toString(16)
                .substring(1);
              console.log("s4---->", S4);
              if (item.thumbnailPath == "") {
              } else {
                this.convertBase642(item.thumbnailPath);
              }
              if (item.emailAddresses.length > 0) {
                this.setState({ emailAddresses: item.emailAddresses[0].email });
              }
              if (item.urlAddresses.length > 0) {
                const address = item.urlAddresses.find(({ url }) => url == url);
                let address1 = address.url;
                this.setState({ website: address1 });
              }

              if (item.postalAddresses.length > 0) {
                const address = item.postalAddresses.find(
                  ({ formattedAddress }) => formattedAddress == formattedAddress
                );
                let address1 = address.formattedAddress;
                this.setState({ address1: address1 });
              }
              if (item.postalAddresses.length > 0) {
                const address = item.postalAddresses.find(
                  ({ formattedAddress }) => formattedAddress == formattedAddress
                );

                let address1 = address.label;
                this.setState({ addressLable: address1 });
              }

              if (item.jobTitle == "") {
                this.setState({ jobTitle: "" });
              } else {
                this.setState({ jobTitle: item.jobTitle });
              }

              if (item.phoneNumbers.length > 0) {
                console.log("address---->", item.phoneNumbers[0].number);
                this.setState({ mobile_phone: item.phoneNumbers[0].number });
              }
              importContactToFirebase(
                username,
                item.thumbnailPath,
                "",
                "",
                item.givenName == null ? "" : item.givenName,
                item.middleName == null ? "" : item.middleName,
                item.familyName,
                "",
                this.state.addressLable,
                this.state.mobile_phone,
                "",
                "",
                item.phoneNumbers,
                this.state.emailAddresses,
                "",
                item.emailAddresses,
                "",
                this.state.address1,
                "",
                "",
                "",
                "",
                "",
                "",
                this.state.website,
                "",
                "",
                item.birthday,
                "",
                "",
                item.note.toLowerCase(),
                item.company.toLowerCase(),
                "",
                this.state.jobTitle.toLowerCase(),
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                true,
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                S4
              );
              firebase
                .firestore()
                .collection("user")
                .doc(username)
                .collection("contacts")
                .get()
                .then((snap) => {
                  snap.docs.forEach((doc_id) => {
                    if (S4 == doc_id._data.unique_id) {
                      console.log("doc idddddd ----->", doc_id.id);
                      this.setState({ doc_id: doc_id.id });
                    }
                  });
                });
            }
          });

          //   this.getUniqeID();
          this.props.navigation.navigate("SerachEditContact");
          this.setState({ checked: false, isLoading: false });
          let contactArr = fetchedContacts.map((item, key) => {
            if ((item.isSelected = true)) {
              item.isSelected = false;
            }
            if (this.state.checkedOff == true) {
              this.setState({ checkedOff: false });
            }

            return { ...item };
          });
          this.setState({ fetchedContacts: contactArr });
          this.setState({ isLoading: false });
        }
      });
  };

  showLoader() {
    if (this.state.isLoading == true) {
      return <Spinner />;
    }
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
            {this.renderHeader()}
            <Text
              style={[
                styles.importHeading,
                {
                  color:
                    this.props.theme.mode === "light" ? "#1374A3" : "white",
                },
              ]}
            >
              Import contact from Device
            </Text>
            {this.renderMiddle()}
            {this.renderLast()}
          </Container>
          {this.showLoader()}
        </View>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state);
  return {
    theme: state.themeReducer.theme,
    user_id: state.login.shouldLoadData.user_id,
    username:
      state.login.shouldLoadData.username || state.reg.shouldLoadData.username,
  };
}

export default connect(mapStateToProps)(importContact);

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;
const NormalText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 18px;
  color: ${(props) => props.theme.iconColor};
  margin-left: 10px;
`;
