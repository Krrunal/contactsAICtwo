import {
BackHandler,
Dimensions,
Image,
Keyboard,
ScrollView,
Text,
TextInput,
TouchableOpacity,
View
} from "react-native";
import React, { Component } from "react";
import { darkTheme, lightTheme } from "../theme/themeProps";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font.js";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/backHeader";
import Icon from "react-native-vector-icons/FontAwesome5";
import Metrics from "../theme/Metrics";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styles from "./manuallyAddContactStyle.js";
import { switchTheme } from "../../action/themeAction";

var { width, height } = Dimensions.get("window");

class manuallyAddContact extends Component {
  backAction = () => {
    this.props.navigation.navigate("SerachEditContact");
    // BackHandler.exitApp();
    return true;
  }; 
  
  componentDidMount = async () => {
    //  BackHandler.addEventListener("hardwareBackPress", this.backAction);
  };

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backAction);
  
  }
  
  renderHeader() {
    return (
      <Header
        title="Add Contacts AIC User"
        onPress={() =>  this.props.navigation.navigate("AddContact")}
      />
    );
  }

  renderMiddle() {
    return (
      <View style={styles.mainView} keyboardShouldPersistTaps="always">
        <TouchableOpacity style={styles.Whiteview} onPress={this.QRScanner}>
          <Text style={styles.blueText}>QR Code</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Whiteview}
          onPress={this.manuallyAddNavigate}
        >
          <Text style={styles.blueText}>Username</Text>
        </TouchableOpacity>
      </View>
    );
  }

  QRScanner = () => {
    this.props.navigation.navigate('QRScanner')
  };

  manuallyAddNavigate = () => {
    this.props.navigation.navigate('AfterAddContact')
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
