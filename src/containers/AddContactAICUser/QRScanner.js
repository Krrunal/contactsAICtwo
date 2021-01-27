import {
Dimensions,

} from "react-native";
import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import AsyncStorage from '@react-native-community/async-storage'
import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font.js";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import QRCodeScanner from "react-native-qrcode-scanner";

import { connect } from "react-redux";
import styles from "./manuallyAddContactStyle.js";
import { switchTheme } from "../../action/themeAction";

var { width, height } = Dimensions.get("screen");

class QRScanner extends Component {
  state = {
    data: [],
  };

  renderHeader() {
    return (
      <Header
        title="Add Contacts AIC User(s)"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  onSuccess = async (e) => {
    console.error("An error occured", e);
    
    let str = e.data;
    // var NewText = str.toString();
    // console.log("STRRRRRRRR--........",str)
    // var SampleText = NewText.replace("fcmToken", "token");
   //  console.log("Sameplet--........",str.includes("fcmToken"))

    if (str.indexOf("contactAIC" && "app") !== -1) {
        await AsyncStorage.setItem("@qrData", e.data);
        this.props.navigation.navigate("ChooseContactFromLabel");
    } else {
        console.log("Not getting");
    }
  };

  renderCamera() {
    return (
        <QRCodeScanner
          onRead={this.onSuccess}
          reactivate={true}
          showMarker={true}
          markerStyle={{borderColor: COLORS.main_text_color, borderRadius: 10}}
          checkAndroid6Permissions={true}
          cameraStyle={{ height: height}}
          containerStyle={{height: height}}
        />
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

        <Container>
          {/* {this.renderHeader()} */}
          {this.renderCamera()}
        </Container>
      </ThemeProvider>
    );
  }
}
const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
});

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;
export default connect(mapStateToProps, null)(QRScanner);
