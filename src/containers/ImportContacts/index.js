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
import Contacts from "react-native-contacts";
import Font from "../theme/font.js";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Metrics from "../theme/Metrics";
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

            // const contactNumber = contacts.filter((number) => {
            const contactNumber = contacts.filter((item) => {
              if (item.phoneNumbers.length != 0) {
                return { contact: item, isSelected: false };
              }
            });
            //    console.log("Import contact------>", contactNumber);

            const sort = contacts.sort(function (a, b) {
              if (a.givenName.toLowerCase() < b.givenName.toLowerCase())
                return -1;
              if (a.givenName.toLowerCase() > b.givenName.toLowerCase())
                return 1;
              return 0;
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
                {item.displayName}
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

  // importnavigate = (isSelect, item, key) => {
  //   this.setState({ isLoading: true });
  //   const { fetchedContacts, selectedContact, n1 } = this.state;
  //   const { user_id, username } = this.props;

  //   firebase
  //     .firestore()
  //     .collection("user")
  //     .doc(username)
  //     .collection("contacts")
  //     .get()
  //     .then((snap) => {

  //       if (!snap.empty) {
  //                 snap.forEach(async (doc) => {

  //                   // selectedContact.push(doc._data.number);

  //                   // selectedContact.map((item,index) =>{
  //                   //   const number2 = selectedContact.find(
  //                   //     ({ number }) => number == number
  //                   //   );
  //                   //   // var number1 = number.number;
  //                   //   // n1.push(number1)
  //                   //   //console.log("doc number---->", number2.number);
  //                   // })
  //                   fetchedContacts.map((item) => {
  //                     if (item.isSelected == true) {
  //                       if(item.phoneNumbers !== undefined){
  //                         if (doc._data.number[0].number !== item.phoneNumbers[0].number) {
  //                           item.isSelected = false;
  //                           this.setState({ isLoading: false });
  //                            console.log('phone number---->',item.phoneNumbers[0].number)
  //                            console.log('doc number---->',doc._data.number[0].number)
  //                          } else {
  //                           item.isSelected = false;
  //                           console.log('phone number---->',item.phoneNumbers[0].number)
  //                           this.goInsert();
  //                         }
  //                       }

  //                     }
  //                   });
  //                 });
  //               } else {
  //         fetchedContacts.map((item) => {
  //           if (item.isSelected == true) {
  //             importContactToFirebase(
  //               username,
  //               "",
  //               item.givenName,
  //               item.middleName,
  //               item.familyName,
  //               "",
  //               "",
  //               "",
  //               "",
  //               item.phoneNumbers,
  //               "",
  //               "",
  //               item.emailAddresses,
  //               "",
  //               item.postalAddresses,
  //               "",
  //               "",
  //               "",
  //               "",
  //               "",
  //               "",
  //               "",
  //               "",
  //               "",
  //               item.birthday,
  //               "",
  //               "",
  //               item.note,
  //               item.company,
  //               "",
  //               item.jobTitle,
  //               "",
  //               "",
  //               ""
  //             );
  //           }
  //         });
  //         this.props.navigation.navigate("SerachEditContact");
  //         this.setState({ checked: false, isLoading: false });
  //         let contactArr = fetchedContacts.map((item, key) => {
  //           if ((item.isSelected = true)) {
  //             item.isSelected = false;
  //           }
  //           if (this.state.checkedOff == true) {
  //             this.setState({ checkedOff: false });
  //           }

  //           return { ...item };
  //         });
  //         this.setState({ fetchedContacts: contactArr });
  //       }
  //     });
  // };
  importnavigate = (isSelect, item, key) => {
    const { fetchedContacts, selectedContact, n1, n2 } = this.state;
    const { user_id, username } = this.props;
       this.setState({isLoading: true})
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
              console.log("fetch contactss------>", item.thumbnailPath);
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
                console.log("address---->", address.label);
                let address1 = address.label;
                this.setState({ addressLable: address1 });
              }
              importContactToFirebase(
                username,
                item.thumbnailPath,
                "",
                "",
                item.givenName.toLowerCase(),
                item.middleName.toLowerCase(),
                item.familyName.toLowerCase(),
                "",
                this.state.addressLable,
                "",
                "",
                "",
                item.phoneNumbers,
                "",
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
                item.jobTitle.toLowerCase(),
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
              );
            }
          });

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
          this.setState({isLoading: true})
        } else {
          fetchedContacts.map((item) => {
            if (item.isSelected == true) {
              importContactToFirebase(
                username,
                item.thumbnailPath,
                "",
                "",
                item.givenName.toLowerCase(),
                item.middleName.toLowerCase(),
                item.familyName.toLowerCase(),
                "",
                this.state.addressLable,
                "",
                "",
                "",
                item.phoneNumbers,
                "",
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
                item.jobTitle.toLowerCase(),
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
              );
            }
          });
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
          this.setState({isLoading: true})
        }
      });
  };
  goInsert = () => {
    const { fetchedContacts, selectedContact } = this.state;
    const { user_id, username } = this.props;
    fetchedContacts.map((item) => {
      if (item.isSelected == true) {
        importContactToFirebase(
          username,
          item.thumbnailPath,
          item.givenName.toLowerCase(),
          item.middleName.toLowerCase(),
          item.familyName.toLowerCase(),
          "",
          this.state.addressLable,
          "",
          "",
          "",
          item.phoneNumbers,
          "",
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
          item.jobTitle.toLowerCase(),
          "",
          "",
          "",
          "",
          "",
          true
        );
      }
    });
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
    this.setState({ n1: [] });
    this.setState({ fetchedContacts: contactArr });
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
