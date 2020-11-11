import {
Dimensions,
Image,
Text,
TouchableOpacity,
View,
} from "react-native";
import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Icon from "react-native-vector-icons/FontAwesome5";
import Metrics from "../theme/Metrics";
import { connect } from "react-redux";
import styles from "./style.js";

var { width, height } = Dimensions.get("window");

class AddContactAICUser extends Component {
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
      <View>
        <View style={{ alignItems: "center", marginTop: Metrics.baseMargin }}>
          <TouchableOpacity
            style={styles.Whiteview}
            onPress={this.byLabelNavigate}
          >
            <Text style={styles.blueText}>QR Code</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Whiteview}
            onPress={this.manuallyAddNavigate}
          >
            <Text style={styles.blueText}>Username</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  byLabelNavigate = () => {
    this.props.navigation.navigate('ManuallyAddContact')
  };

  manuallyAddNavigate = () => {
    this.props.navigation.navigate('ForAddContact')
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

export default connect(mapStateToProps)(AddContactAICUser);
const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;
