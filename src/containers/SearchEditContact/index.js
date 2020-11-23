import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component, useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Metrics from "../theme/Metrics";
import { Spinner } from "../../components/Spinner";
// import { getContact } from '../../services/FirebaseDatabase/getAllContact';
import { TouchableHighlight } from "react-native-gesture-handler";
import { connect } from "react-redux";
import edit from "../../assets/images/edit.png";
import firebase from "../../services/FirebaseDatabase/db";
import outerimg from "../../assets/images/outerimg.png";
import plus from "../../assets/images/plus.png";
import reset from "../../assets/images/reset.png";
import style from "../../components/StatusBar/style.js";
import styles from "./style.js";

var { width, height } = Dimensions.get("screen");

class searchContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
      contacts: "",
      isLoading: false,
       shortcontacts: "",
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", async () => {
      this.contactList();
    });
  }

  componentWillUnmount() {
    this.focusListener.remove();
    this.setState({ contact: [] });
  }

  async contactList() {
    const { username } = this.props;
    firebase
      .firestore()
      .collection("user")
      .doc(username)
      .collection("contacts")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          var item = doc._data;
          this.state.contact.push(item);
        });
        this.setState({ contacts: this.state.contact });
        const sort = this.state.contacts.sort(function (a, b) {
          if (a.first_name.toLowerCase() < b.first_name.toLowerCase())  return -1;
          if (a.first_name.toLowerCase() > b.first_name.toLowerCase()) return 1;
          return 0;
        });
        this.setState({ shortcontacts: sort });
      });
  }

  renderHeader() {
    return (
      <Header
        title="Search Contacts"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  renderItem({ item, index }) {
    const lengthArray = this.state.contacts.length;
    const character = (item.user_name || item.first_name).charAt(0);
    return (
      <View style={styles.quardView}>
        <Image source={item.profile_image} />
        <View style={styles.imgView}>
          <Text
            style={[
              styles.img_text,
              {
                color: this.props.theme.mode === "light" ? "black" : "white",
              },
            ]}
          >
            {character}
          </Text>
        </View>
        <Text
          style={[
            styles.personName,
            { color: this.props.theme.mode === "light" ? "black" : "white" },
          ]}
        >
          {item.user_name || item.first_name} {item.last_name}
        </Text>
        <Image source={edit} style={styles.editImgStyle} />
        {/* </TouchableHighlight> */}
        <Image source={reset} style={styles.resetImgStyle} />
      </View>
    );
  }

  renderMiddle() {
    return (
      <View style={styles.scrollStyle}>
        <FlatList
          refreshing={true}
          keyExtractor={(item, index) => index.toString()}
          data={this.state.shortcontacts}
          extraData={this.state}
          numColumns={1}
          renderItem={this.renderItem.bind(this)}
        />
      </View>
    );
  }

  renderLast() {
    return (
      <View
        style={{
          alignItems: "flex-end",
          flex: 1,
          marginRight: Metrics.baseMargin,
        }}
      >
        <View style={{ flex: 1, bottom: 30, position: "absolute" }}>
          <TouchableOpacity
            style={styles.Whiteview}
            onPress={this.plusnavigate}
          >
            <Image source={plus} style={styles.plusStyle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  plusnavigate = () => {
    this.setState({ contact: [] });
    this.props.navigation.navigate("ManuallyAddContact");
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
            {/* <View style={{backgroundColor: COLORS.white, flex: 1}}> */}
            {this.renderHeader()}
            {this.state.contacts == "" ? (
              <LineText> No contact imported to show </LineText>
            ) : null}

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
  return {
    theme: state.themeReducer.theme,
    user_id:
      state.login.shouldLoadData.user_id || state.reg.shouldLoadData.user_id,
    username:
      state.login.shouldLoadData.username || state.reg.shouldLoadData.username,
  };
}
export default connect(mapStateToProps)(searchContact);

const Container = styled.View`
  flex: 1;
  width: 100%;
  /* align-items: center; */
  background-color: ${(props) => props.theme.backColor};
`;

const LineText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 15px;
  color: ${(props) => props.theme.iconColor};
  line-height: 30px;
  text-align: center;
  margin-top: 12px;
`;
