import {
  Dimensions,
  FlatList,
  Image,
  PermissionsAndroid,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { Component, useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import CheckBox from "@react-native-community/checkbox";
import Contacts from "react-native-contacts";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Metrics from "../theme/Metrics";
import SendSMS from 'react-native-sms'
import checkedModified from  "../../assets/icons/checkedModified.png";
import checkedWhite from  "../../assets/icons/checkedWhite.png";
import { connect } from "react-redux";
import styles from "./style.js";

var { width, height } = Dimensions.get("window");
class InviteContact extends Component {
  state = {
    checked: false,
    inserFlag: false,
    fetchedContacts: [],
    selectedContact: [],
    isLoading: false,
    contactSelected:[],
    contactSelected2:"",
    shortcontacts: [],
    checkedOff:false
  };

  componentDidMount() {
    this.getContact();
  }

  renderHeader() {
    return (
      <Header
        title="Invite Contacts"
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
        console.log("You can use the CONTACTS");
       
        this.setState({ isLoading: true }, async () => {
           Contacts.getAll((err, contacts) => {
            if (err) throw err;
            const { phoneNumbers } = this.state


            const contactNumber = contacts.filter((number) => {
              if (number.phoneNumbers.length != 0) {
                var n_number = Object.assign({}, number);
                n_number.isSelected = false;
                n_number.image = "";
                return n_number;
              }
            
            });

            //alert(JSON.stringify(contactNumber)); return;
            contactNumber.sort(function (a, b) {
              var AfamilyName = a.givenName == "" ? "" : a.givenName;
              var BfamilyName = b.givenName == "" ? "" : b.givenName;
              if (AfamilyName.toLowerCase() < BfamilyName.toLowerCase()) {
                return -1;
              }
              if (AfamilyName.toLowerCase() > BfamilyName.toLowerCase()) {
                return 1;
              }
              return 0;
            });
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
          alignItems: "center",
          height: height * 0.65,
          paddingHorizontal: 0,
        }}
      >
        <TouchableOpacity style={styles.checkboxView} onPress={() => {this.selectAll()}}>
        {this.state.checkedOff == true ? (
                      <View style={styles.checkViewForLight}> 
                      {this.props.theme.mode === "light" ? 
                       <Image source={checkedWhite} style={styles.checkedStyle} /> 
                       :
                       <Image source={checkedModified} style={styles.checkedStyle} /> 
                      }
                       
                      </View>
                    ) : (
                      <View style={styles.checkView}></View>
                    )
                     
           }
         <Text
            style={[
              styles.deSelectText,
              {
                color: this.props.theme.mode === "light" ? "#1374A3" : "white",
              },
            ]}
          > Select (De-select) All </Text>
        </TouchableOpacity>

        <ScrollView>
          {fetchedContacts.map((item, key) => (
            <View style={styles.checkboxViewTwo} key={key}>
              <CheckBox
                value={item.isSelected}
                onChange={() => {
                  this.onchecked(key, item.isSelected);
                }}
                tintColors={{ true: "#1374A3", false: "#1374A3" }}
              />
            <Text  style={[ styles.selectText,{ color:  this.props.theme.mode === "light" ? "#1374A3" : "white",  },    ]} >{item.displayName}  </Text>

            </View>
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
            onPress={this.invitenavigate}
          >
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: Font.medium,
                fontSize: width * 0.045,
              }}
            >
              Invite
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  invitenavigate = () => {
    const { fetchedContacts , contactSelected ,shortcontacts} = this.state;
   
    var contact = fetchedContacts.map((item) => {
      item.isSelected== true
      ? contactSelected.push(item.phoneNumbers)
      : (item.isSelected = false);
    })
    
    contactSelected.map((item,index) =>{
      const result = contactSelected[index].find( ({ number }) => number == number );
      console.log("Contact---->",contactSelected);
      console.log("Contact---->",result.number);
      shortcontacts.push(result.number);
    })
   
    console.log("number---->",shortcontacts[0]);

    SendSMS.send({
      body: 'This message from ContactAIC!',
      recipients: shortcontacts,
      successTypes: ['sent', 'queued'],
      allowAndroidSendWithoutReadPermission: true,
     
     }, (completed, cancelled, error) => {
        console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
     });
    this.props.navigation.navigate("AfterSentInvite");
    this.getContact();
    
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
          {this.renderHeader()}
          <Text
            style={[
              styles.importHeading,
              {
                color: this.props.theme.mode === "light" ? "#1374A3" : "white",
              },
            ]}
          >
            Invite People to join Contact AIC
          </Text>
          {this.renderMiddle()}
          {this.renderLast()}
        </Container>
      </ThemeProvider>
    );
  }
}
const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
});

export default connect(mapStateToProps)(InviteContact);

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
