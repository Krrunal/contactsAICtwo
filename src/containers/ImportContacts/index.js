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
import { connect } from "react-redux";
import { isRequired } from "react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType";
import sideBar from "../../assets/images/sideBAR.png";
import styles from "./style.js";

var { width, height } = Dimensions.get("window");

class importContact extends Component {
  state = {
    checked: false,
    checked1: false,
    checked2: false,
    checked3: false,
  };

  componentDidMount() {
    this.getContact();
  }

  selectAll() {
    const { checked, checked1, checked2, checked3 } = this.state;
    if (this.state.checked == true) {
      this.state.checked1 = true;
      this.state.checked2 = true;
      this.state.checked3 = true;
    } else if (this.state.checked == false) {
      this.state.checked1 = false;
      this.state.checked2 = false;
      this.state.checked3 = false;
    }
  }

  selectOne() {
    const { checked, checked1, checked2, checked3 } = this.state;
    if (this.state.checked1 == true) {
      this.state.checked1 = false;
    } else if ((this.state.checked1 = false)) {
      this.state.checked1 = true;
    }
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
          title: "Cool Photo App READ_CONTACTS Permission",
          message:
            "Cool Photo App needs access to your CONTACTS " +
            "so you can take awesome pictures.",
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

  renderItem({ item, index }) {
    const lengthArray = this.state.fetchedContacts.length;
    return (
      <View style={styles.checkboxViewTwo}>
        <CheckBox
          value={this.state.checked1}
          onValueChange={() =>
            this.setState({ checked1: !this.state.checked1 })
          }
          tintColors={{ true: "#1374A3", false: "#000" }}
        />
        <NormalText>{item.displayName}</NormalText>
      </View>
    );
  }

  renderMiddle() {
    return (
      <View style={{ alignItems: "center", height: height * 0.65 }}>
        <View style={styles.checkboxView}>
          <CheckBox
            value={this.state.checked}
            onPress={this.selectAll()}
            onValueChange={() =>
              this.setState({ checked: !this.state.checked })
            }
            tintColors={{ true: "#1374A3", false: "#000" }}
          />
          <NormalText>Select (De-select) All</NormalText>
        </View>

        <ScrollView>
          {this.props.theme.mode === "light" ? (
            <View style={styles.contactView}>
              <FlatList
                refreshing={true}
                keyExtractor={(item, index) => index.toString()}
                data={this.state.fetchedContacts}
                extraData={this.state}
                numColumns={1}
                renderItem={this.renderItem.bind(this)}
              />
            </View>
          ) : (
            <View style={styles.contactViewBlack}>
              <FlatList
                refreshing={true}
                keyExtractor={(item, index) => index.toString()}
                data={this.state.fetchedContacts}
                extraData={this.state}
                numColumns={1}
                renderItem={this.renderItem.bind(this)}
              />
            </View>
          )}
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

  importnavigate = () => {
    this.props.navigation.navigate("SerachEditContact");
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

const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
});

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
