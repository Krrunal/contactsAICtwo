import {
  Dimensions,
  FlatList,
  PermissionsAndroid,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
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

  // renderItem({ item, index }) {
  //   const lengthArray = this.state.fetchedContacts.length;
  //   return (
  //     <View style={styles.checkboxViewTwo}>
  //       <CheckBox
  //         value={this.state.checked1}
  //         // onPress={this.selectOne()}
  //         onValueChange={() =>
  //           this.setState({ checked1: !this.state.checked1 })
  //         }
  //         tintColors={{ true: "#1374A3", false: "#000" }}
  //       />
  //       <ImportText>{item.displayName}</ImportText>
  //     </View>
  //   );
  // }
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
      this.state.checked == true
        ? (item.isSelected = true)
        : (item.isSelected = false);
      item.isSelected = !item.isSelected;
      this.setState({ checked: !this.state.checked });
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
        <View style={styles.checkboxView}>
          <CheckBox
            value={this.state.checked}
            onChange={() => {
              this.selectAll();
            }}
            tintColors={{ true: "#1374A3", false: "#1374A3" }}
          />
         
         <Text
            style={[
              styles.selectText,
              {
                color: this.props.theme.mode === "light" ? "#1374A3" : "white",
              },
            ]}
          >
            {" "}
            Select (De-select) All{" "}
          </Text>
        </View>

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
  // renderMiddle() {
  //   return (
  //     <View
  //       style={{
  //         alignItems: "center",
  //         height: height * 0.65,
  //         marginTop: Metrics.baseMargin,
  //       }}
  //     >
  //       <View style={styles.checkboxView}>
  //         <CheckBox
  //           value={this.state.checked}
  //           onPress={this.selectAll()}
  //           onValueChange={() =>
  //             this.setState({ checked: !this.state.checked })
  //           }
  //           tintColors={{ true: "#1374A3", false: "#000" }}
  //         />
  //         <ImportText>Select (De-select) All</ImportText>
  //       </View>

  //       <ScrollView>
  //         {this.props.theme.mode === "light" ? (
  //           <View style={styles.contactView}>
  //             <FlatList
  //               refreshing={true}
  //               keyExtractor={(item, index) => index.toString()}
  //               data={this.state.fetchedContacts}
  //               extraData={this.state}
  //               numColumns={1}
  //               renderItem={this.renderItem.bind(this)}
  //             />
  //           </View>
  //         ) : (
  //           <View style={styles.contactViewBlack}>
  //             <FlatList
  //               refreshing={true}
  //               keyExtractor={(item, index) => index.toString()}
  //               data={this.state.fetchedContacts}
  //               extraData={this.state}
  //               numColumns={1}
  //               renderItem={this.renderItem.bind(this)}
  //             />
  //           </View>
  //         )}
  //       </ScrollView>
  //     </View>
  //   );
  // }

  renderLast() {
    return (
      <View style={{ alignItems: "center", flex: 1 }}>
        <View style={{ flex: 1, bottom: 0, position: "absolute" }}>
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
    this.props.navigation.navigate("AfterSentInvite");
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
          {/* <NormalText> Invite People to join Contact AIC </NormalText> */}
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
