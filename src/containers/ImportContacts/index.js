import {
  CheckBox,
  Dimensions,
  FlatList,
  Image,
  PermissionsAndroid,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component, useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import Contacts from "react-native-contacts";
import Font from "../theme/font.js";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Metrics from "../theme/Metrics";
import { addManualContact } from '../../services/FirebaseDatabase/manualContactToFirebase';
import { connect } from "react-redux";
import firebase from '../../services/FirebaseDatabase/db';
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
  };

  componentDidMount() {
    this.getContact();
  }

  renderHeader() {
    return (
      <Header
        title="Import Contacts"
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
                // var n_number = [{contact: item, isSelected: false}];
                // n_number.isSelected = false;
                // n_number.image = "";
                return {contact: item, isSelected: false};
              }
              // console.log(number)
            });
            console.log(contactNumber);

            // return {contactNumber};

            //alert(JSON.stringify(contactNumber)); return;
            // contactNumber.sort(function (a, b) {
            //   var AfamilyName = a.givenName == "" ? "" : a.givenName;
            //   var BfamilyName = b.givenName == "" ? "" : b.givenName;
            //   if (AfamilyName.toLowerCase() < BfamilyName.toLowerCase()) {
            //     return -1;
            //   }
            //   if (AfamilyName.toLowerCase() > BfamilyName.toLowerCase()) {
            //     return 1;
            //   }
            //   return 0;
            // });
            // console.log(contactNumber);
            this.setState({
              isLoading: false,
              fetchedContacts: contactNumber,
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
      this.setState({ checked: false})
      return { ...item };
    });
    this.setState({ fetchedContacts: contactArr });   
  };

  selectAll = () => {
    const { fetchedContacts } = this.state;
    let contactArr = fetchedContacts.map((item, key) => {
      this.state.checked == true ? item.isSelected = true : item.isSelected = false
      item.isSelected = !item.isSelected;
      this.setState({checked : !this.state.checked})
      return { ...item };
    });
    this.setState({ fetchedContacts: contactArr });   
  }

  renderMiddle() {
    const { fetchedContacts } = this.state;
    return (
      <View style={{ alignItems: "center", height: height * 0.65, paddingHorizontal: 0 }}>
        <View style={styles.checkboxView}>
          <CheckBox
            value={this.state.checked}
            onChange={() => {
              this.selectAll();
            }}          
            tintColors={{ true: "#1374A3", false: "#000" }}
          />
          <NormalText>Select (De-select) All</NormalText>
        </View>

        <ScrollView>

          {fetchedContacts.map((item, key) => (
            <View style={styles.checkboxViewTwo} key={key}>
              <CheckBox
                value={item.isSelected}
                onChange={() => {
                  this.onchecked(key,item.isSelected);
                }}          
                tintColors={{ true: "#1374A3", false: "#000" }}
              />
              <NormalText>{item.displayName}</NormalText>
              {/* {item.contact.displayName}, */}
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }

  renderLast() {
    return (
      <View style={{ alignItems: "center", flex: 1, width: width }}>
        <View style={{ flex: 1, position: "absolute", Bottom: 0 }}>
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

  importnavigate = (isSelect,item,key) => {
    const { fetchedContacts, selectedContact } = this.state;
    const {user_id} = this.props

    firebase.firestore().collection(this.props.user_id).get()
    .then((snap) => {
      snap.forEach(async(doc) => {
          fetchedContacts.map((item) => {
            if(item.isSelected == true) {
              if(doc._data.number[0].number !== item.phoneNumbers[0].number) {
                // console.log('not exist---->',item.phoneNumbers[0].number)
              } else {
                item.isSelected = false
              }
            }
          });
      });
      fetchedContacts.map((item) => {
        if(item.isSelected == true) {
          console.log('final---->',item.phoneNumbers[0].number)
              addManualContact( 
                user_id, item.givenName, item.middleName, item.familyName, "", "", "",
                "", item.phoneNumbers, "", "", item.emailAddresses, "", item.postalAddresses,
                "", "", "", "", "", "", "", "", "", item.birthday, "", "", item.note, 
                item.company, "", item.jobTitle,""
              )
        }
      })
      this.props.navigation.navigate("SerachEditContact");
    });
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
          {/* <View style={styles.container}> */}
          {this.renderHeader()}
            <Text style={[styles.importHeading,{color: this.props.theme.mode === "light"? 'black': 'white'}]}>
              Import contact(s) from Device
            </Text>
          {this.renderMiddle()}
          {this.renderLast()}
        </Container>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    theme: state.themeReducer.theme,
    user_id: state.login.shouldLoadData.user_id
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
  font-size: 16px;
  color: ${(props) => props.theme.iconColor};
  margin-left: 10px;
`;
