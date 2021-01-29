import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import AsyncStorage from "@react-native-community/async-storage";
import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font.js";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import { connect } from "react-redux";
import firebase from "../../services/FirebaseDatabase/db";
import firebaseFrom from "react-native-firebase";
import styles from "./forAdd2Style.js";
import Constants from "../../action/Constants";
import { Spinner } from "../../components/Spinner";

var { width, height } = Dimensions.get("window");

class forAdd2 extends Component {
  state = {
    user_name: "",
    label: "",
    userLabel1: "",
    userLabel2: "",
    userLabel3: "",
    userLabel4: "",
    u_name1: "",
    u_name2: "",
    u_name3: "",
    u_name4: "",
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({
      user_name: await AsyncStorage.getItem("@username"),
      label: await AsyncStorage.getItem("@selectedLabel"),
      userLabel1: await AsyncStorage.getItem("@userLabel1"),
      userLabel2: await AsyncStorage.getItem("@userLabel2"),
      userLabel3: await AsyncStorage.getItem("@userLabel3"),
      userLabel4: await AsyncStorage.getItem("@userLabel4"),

      u_name1: await AsyncStorage.getItem("@u_name1"),
      u_name2: await AsyncStorage.getItem("@u_name2"),
      u_name3: await AsyncStorage.getItem("@u_name3"),
      u_name4: await AsyncStorage.getItem("@u_name4"),
    });
    console.log("Label----1---->", this.state.label);
    //console.log("multiple----1---->",this.state.userLabel1)
    console.log("multiple----2---->", this.state.userLabel2);
    console.log("multiple----3---->", this.state.userLabel3);
    console.log("multiple----4---->", this.state.userLabel4);
  }

  renderHeader() {
    return (
      <Header
        title="Add Contacts AIC User"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  renderHeaderLine() {
    return (
      <View style={styles.TopView}>
        <View style={styles.topOne}>
          <BoldText>Contact(s) to Add </BoldText>
        </View>
        <View style={styles.toptwo}>
          <BoldText>Label (s)</BoldText>
        </View>
      </View>
    );
  }

  renderMiddle() {
    const { u_name1, u_name2, u_name3, u_name4 } = this.state;
    return (
      <View>
        {u_name1 !== "" ? (
          <View style={styles.WhiteBigview}>
            <View style={styles.textRigh}>
              <Text style={styles.userText}>{u_name1}</Text>
            </View>
            <View style={styles.textRigh}>
              {this.state.label !== ""
                ? this.state.label
                    .split(/,/)
                    .map((item) => (
                      <Text style={styles.sizeTextSmall}> {item} </Text>
                    ))
                : null}
            </View>
          </View>
        ) : null}
        {u_name2 !== null ? (
          <View style={styles.WhiteBigview}>
            <View style={styles.textRigh}>
              <Text style={styles.userText}>{u_name2}</Text>
            </View>
            <View style={styles.textRigh}>
              {this.state.userLabel2 !== null
                ? this.state.userLabel2
                    .split(/,/)
                    .map((item) => (
                      <Text style={styles.sizeTextSmall}> {item} </Text>
                    ))
                : null}
            </View>
          </View>
        ) : null}
        {u_name3 !== null ? (
          <View style={styles.WhiteBigview}>
            <View style={styles.textRigh}>
              <Text style={styles.userText}>{u_name3}</Text>
            </View>
            <View style={styles.textRigh}>
              {this.state.userLabel3 == null ? (
                <Text style={styles.sizeTextSmall}></Text>
              ) : (
                this.state.userLabel3
                  .split(/,/)
                  .map((item) => (
                    <Text style={styles.sizeTextSmall}> {item} </Text>
                  ))
              )}
            </View>
          </View>
        ) : null}
        {u_name4 !== null ? (
          <View style={styles.WhiteBigview}>
            <View style={styles.textRigh}>
              <Text style={styles.userText}>{u_name4}</Text>
            </View>
            <View style={styles.textRigh}>
              {this.state.userLabel4 == null ? (
                <Text style={styles.sizeTextSmall}></Text>
              ) : (
                this.state.userLabel4
                  .split(/,/)
                  .map((item) => (
                    <Text style={styles.sizeTextSmall}> {item} </Text>
                  ))
              )}
            </View>
          </View>
        ) : null}
      </View>
    );
  }

  afterContactNavigate = () => {
    this.props.navigation.navigate("ManuallyAddContact");
  };

  renderLast() {
    return (
      <View style={{ alignItems: "center", flex: 1 }}>
        <View
          style={{
            flex: 1,
            bottom: 40,
            position: "absolute",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={styles.Whiteview}
            onPress={this.backtNavigate}
          >
            <Text style={styles.back2Text}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.WhiteviewTwo}
            onPress={this.finishtNavigate}
          >
            <Text style={styles.back2Text}>Finish</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  backtNavigate = () => {
    this.props.navigation.navigate("AfterAddContact");
  };

  finishtNavigate = () => {
    this.setState({ isLoading: true }, async () => { 
    const { username, user_id } = this.props;
    const { u_name1, u_name2, u_name3, u_name4 } = this.state;
    // console.log("usname 111-->",u_name1);
    // console.log("user_id---->",user_id)
    const baseurl = Constants.baseurl;
    var _body = new FormData();
    _body.append("username1", u_name1);
    _body.append("username2", u_name2);
    _body.append("username3", u_name3);
    _body.append("username4", u_name4);
    _body.append("sender_id", user_id);
    fetch(baseurl + "send_bulk", {
      method: "POST",
      headers: {
        "Content-Type":
          Platform.OS == "ios" ? "application/json" : "multipart/form-data",
      },
      body: _body,
    })
      .then((response) => response.text())
      .then((responseJson) => {
        console.log("Bulf Notification response---->",JSON.stringify(responseJson));
        this.afterApiCall();
        this.setState({ isLoading: false });
        })
      .catch((error) => {
        console.log("errrorr---->", error);
      });
    });
  };
  afterApiCall = () =>{
    this.props.navigation.navigate("aftreMultiplReqSend");
  }
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
          {this.renderHeaderLine()}
          {this.renderMiddle()}
          {this.renderLast()}
        </Container>
        {this.showLoader()}
        </View>
      </ThemeProvider>
    );
  }
}
const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
  username: state.login.shouldLoadData.username,
  user_id: state.login.shouldLoadData.user_id,
});

const mapDispatchToProps = (dispatch) => ({
  switchTheme: bindActionCreators(switchTheme, dispatch),
});

export default connect(mapStateToProps)(forAdd2);

const Container = styled.View`
  flex: 1;

  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;
const BoldText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 17px;
  color: ${(props) => props.theme.textColor};
`;
