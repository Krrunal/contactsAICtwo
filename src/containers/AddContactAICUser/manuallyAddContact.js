import {
  CheckBox,
  Dimensions,
  Image,
  Keyboard,
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
import { CommonActions } from "@react-navigation/native";
import Font from "../theme/font.js";
import Header from "../../components/header/index";
import Icon from "react-native-vector-icons/FontAwesome5";
import Metrics from "../theme/Metrics";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styles from "./manuallyAddContactStyle.js";
import { switchTheme } from "../../action/themeAction";

var { width, height } = Dimensions.get("window");

class manuallyAddContact extends Component {
  renderHeader() {
    return (
      <Header
        title="Add Contacts AIC User(s)"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  renderMiddle() {
    return (
      <View style={styles.mainView}>
        <TouchableOpacity
          style={styles.Whiteview}
          onPress={this.QRScanner} >
          <Text style={styles.blueText}>QR Code</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Whiteview}
          onPress={this.manuallyAddNavigate}>
          <Text style={styles.blueText}>Username</Text>
        </TouchableOpacity>
      </View>
    );
  }

  QRScanner = () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: "QRScanner",
        //routes: [{ name: 'Login' }],
      })
    );
  }

  manuallyAddNavigate = () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: "afterAddContact",
        //routes: [{ name: 'Login' }],
      })
    );
  };

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Container>
          {this.renderHeader()}
          {this.renderMiddle()}
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

export default connect(mapStateToProps)(manuallyAddContact);

const Container = styled.View`
  flex: 1;

  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;
