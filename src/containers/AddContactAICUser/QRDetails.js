import {
  Button,
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

var { width, height } = Dimensions.get("window");

class QRDetail extends Component {
  state = {
    qrCodeData: "",
    scanner: "",
  };

  componentDidMount() {
    // alert(this.props.route.params.data)
    // const qrCodeData = this.props.route.params.data;
    // const scanner = this.props.route.params.scanner;
    this.setState({
      qrCodeData: this.props.route.params.data,
      // scanner: this.props.route.params.scanner,
    });
  }

  scanQRCodeAgain() {
    this.setState({ qrCodeData: ""});
    this.props.navigation.navigate('QRScanner')
  }

  renderCamera() {
    return (
      <View
        style={{
          width: width,
          height: height * 0.6,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NormalText>{this.props.route.params.data}</NormalText>
        <Button
        style={{marginTop:25}}
          title={"Scan QRCode Again"}
          onPress={() => this.scanQRCodeAgain()}
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
          {this.renderCamera()}
          {/* {this.renderMiddle()} */}
        </Container>
      </ThemeProvider>
    );
  }
}
const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
});

const mapDispatchToProps = (dispatch) => ({
  switchTheme: bindActionCreators(switchTheme, dispatch),
});

const Container = styled.View`
  flex: 1;

  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;
const NormalText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 17px;
  color: ${(props) => props.theme.textColor};
`;
export default connect(mapStateToProps, mapDispatchToProps)(QRDetail);
