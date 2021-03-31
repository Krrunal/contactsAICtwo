import {
  Dimensions,
  FlatList,
  Image,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component, useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import Add from "../AddContact/index";
import AsyncStorage from "@react-native-community/async-storage";
import { COLORS } from "../theme/Colors.js";
import CheckBox from "@react-native-community/checkbox";
import Constants from "../../action/Constants";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import { Label } from "native-base";
import Metrics from "../theme/Metrics";
import borderCorner from "../../assets/images/borderCorner.png";
import { connect } from "react-redux";
import firebase from "../../services/FirebaseDatabase/db";
import styles from "./style.js";

var { width, height } = Dimensions.get("window");

class forSelectContact extends Component {
  constructor() {
    super();
    this.state = {
      selectedName: "",
      contact: [],
      contacts: [],
      isLoading: false,
      shortcontacts: [],
      checked: false,
    };
  }

  async componentDidMount() {
    const { username } = this.props;
    this.setState({
      selectedName: await AsyncStorage.getItem("@selectedName"),
    });
   
    firebase
      .firestore()
      .collection("user")
      .doc(username)
      .collection("contacts")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          console.log("sort--->", doc._data);
          var item = doc._data;

          this.state.contact.push(item);
        });
        this.setState({ contacts: this.state.contact });
      });
  }

 
  renderHeader() {
    return (
      <Header
        title="Manage Label"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  selectAll = () => {
    const { contacts } = this.state;
    let contactArr = contacts.map((item, key) => {
      this.state.checked == true
        ? (item.ismanually = true)
        : (item.ismanually = false);
      item.ismanually = !item.ismanually;
      this.setState({ checked: !this.state.checked });
      return { ...item };
    });
    this.setState({ contacts: contactArr });
  };

  onchecked = (keyInd, item) => {
    const { contacts } = this.state;
    let contactArr = contacts.map((item, key) => {
      console.log("iteemmm--->", item.ismanually);
      if (keyInd == key) {
        item.ismanually = !item.ismanually;
      }
      this.setState({ checked: false });
      return { ...item };
    });
    this.setState({ contacts: contactArr });
  };

  renderMiddle() {
    const { contacts } = this.state;
    return (
      <View style={styles.scrollStyle}>
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

          {/* <NormalText>Select (De-select) All</NormalText> */}
        </View>
        <View
          style={{
            marginTop: Metrics.baseMargin,
            height: height * 0.6,
         
          }}
        >
          <ScrollView keyboardShouldPersistTaps="always">
            {contacts.map((item, key) => (
              <View style={styles.checkboxViewTwo} key={key}>
                <CheckBox
                  value={item.ismanually}
                  onChange={() => {
                    this.onchecked(key, item.ismanually);
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
                  {item.first_name}{item.last_name || item.middle_name} 
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
  renderLast() {
    return (
      <View style={{ alignItems: "center", flex: 1 }}>
        <View style={{ flex: 1, bottom: 10, position: "absolute" }}>
          <TouchableOpacity
            style={styles.Whiteview}
            onPress={this.manageLabel1Navigate}
          >
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: Font.medium,
                fontSize: width * 0.045,
              }}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  manageLabel1Navigate = () => {
    this.props.navigation.navigate("Label");
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
        <Container keyboardShouldPersistTaps="always">
          {this.renderHeader()}

          <View style={{ alignItems: "center", width: width * 0.7 }}>
            <Text
              style={[
                styles.centertext,
                {
                  color:
                    this.props.theme.mode === "light" ? "#1374A3" : "white",
                },
              ]}
            >
              Select Which Contacts to Associate with the Label:
            </Text>
            <Text
              style={[
                styles.labelText,
                {
                  color:
                    this.props.theme.mode === "light" ? "#1374A3" : "white",
                },
              ]}
            >
              {this.state.selectedName}
            </Text>
          </View>

          {this.renderMiddle()}

          {this.renderLast()}
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
  contactChange: state.sortContactsReducer.contactChange,
  nameChange: state.switchNameReducer.nameChange,
});

export default connect(mapStateToProps)(forSelectContact);
const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;
