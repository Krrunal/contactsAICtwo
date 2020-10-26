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
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Icon from "react-native-vector-icons/FontAwesome5";
import Metrics from "../theme/Metrics";
import { connect } from "react-redux";
import info from "../../assets/icons/info.svg";
import logo from "../../assets/images/logo.png";
import sideBar from "../../assets/images/sideBAR.png";
import styles from "./style.js";

var { width, height } = Dimensions.get("window");
class ViewLabelByName extends Component {
  renderHeader() {
    return (
      <Header
        title="View Labels"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  renderMiddle() {
    return (
      <View style={styles.doubleView}>
        <TouchableOpacity
          style={styles.smallWhiteView}
          onPress={this.labelNavigate}
        >
          <Text style={styles.blueText}>Contact</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <View style={styles.smallBlueView}>
            <Text style={styles.whiteText}>Label</Text>
          </View>
        </View>
      </View>
    );
  }

  labelNavigate = () => {
    this.props.navigation.navigate('ViewLabel')
  };

  renderBigView() {
    return (
      <View>
        <ScrollView>
          <View style={{ alignItems: "center" }}>
            <View style={styles.middleView}>
              <View style={styles.firstView}>
                <Text style={styles.secondText}> Shelly blimpoton</Text>
                <Text style={styles.secondText}> debrah</Text>
              </View>
              <View style={styles.secondView}>
                <Text style={styles.FirstText}>Friends </Text>
              </View>
            </View>
            <View style={styles.middleView}>
              <View style={styles.firstView}>
                <Text style={styles.secondText}> Shelly blimpoton</Text>
                <Text style={styles.secondText}> debrah</Text>
                <Text style={styles.secondText}> Shelly blimpoton</Text>
                <Text style={styles.secondText}> debrah</Text>
              </View>
              <View style={styles.secondView}>
                <Text style={styles.FirstText}>Universal Studio</Text>
              </View>
            </View>
          </View>
        </ScrollView>
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
          {/* // <View style={styles.container}> */}
          {this.renderHeader()}
          {this.renderMiddle()}
          {this.renderBigView()}
        </Container>
      </ThemeProvider>
    );
  }
}
const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
});

export default connect(mapStateToProps)(ViewLabelByName);

const Container = styled.View`
  flex: 1;

  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;
