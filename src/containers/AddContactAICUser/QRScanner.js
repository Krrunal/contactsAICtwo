import {
  CheckBox,
  Dimensions,
  Image,
  Keyboard,
  Linking,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  
} from "react-native";
import React, { Component } from "react";
import { darkTheme, lightTheme } from "../theme/themeProps";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font.js";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Metrics from "../theme/Metrics";
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styles from "./manuallyAddContactStyle.js";
import { switchTheme } from "../../action/themeAction";
import AsyncStorage from '@react-native-community/async-storage'

var { width, height } = Dimensions.get("window");

class QRScanner extends Component {
  state = {
    // data: [],
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
    // Linking.openURL(e.data).catch(err =>
    console.error("An error occured", e);
    // );
    // this.props.navigation.navigate('ChooseContactFromLabel',{data: e.data})

    let str = e.data;
    if (str.indexOf("contactAIC" && "app") !== -1) {
      await AsyncStorage.setItem("@qrData", e.data);

      this.props.navigation.navigate(
        "ChooseContactFromLabel"

        // this.props.navigation.navigate("ChooseContactFromLabel", {
        //   data: e.data,
        // }
      );
    } else {
      console.log("Not getting");
    }
  };

  renderCamera() {
    return (
      <View
        style={{
          width: width,
          height: height * 0.8,
          marginTop: height * 0.056,
        }}
      >
        <QRCodeScanner
          onRead={this.onSuccess}
          reactivate={true}
          showMarker={true}
          checkAndroid6Permissions={true}
          cameraStyle={{ height: height * 0.5 }}
        />
      </View>
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
          {this.renderHeader()}
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
