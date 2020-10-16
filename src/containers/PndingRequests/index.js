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
import React, { Component, useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font";
import Header from "../../components/header/index";
import Metrics from "../theme/Metrics";
import { connect } from "react-redux";
import styles from "./style.js";

var { width, height } = Dimensions.get("window");
class pendingRequest extends Component {
  renderHeader() {
    return (
      <Header
        title="Pending Requests"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  renderMiddle() {
    return (
      <View style={styles.whiteBigView}>
        <View style={styles.checkboxView}>
          <NormalText>Username_1</NormalText>
          <View style={styles.twoWhiteView}>
            <View style={styles.smallWhiteView}>
              <Text style={styles.smallText}>Accept</Text>
            </View>
            <View style={styles.smallWhiteView}>
              <Text style={styles.smallText}>Deny</Text>
            </View>
          </View>
        </View>
        <View style={styles.checkboxView}>
          <NormalText>Phone Number_1</NormalText>
          <View style={styles.twoWhiteView}>
            <View style={styles.smallWhiteView}>
              <Text style={styles.smallText}>Accept</Text>
            </View>
            <View style={styles.smallWhiteView}>
              <Text style={styles.smallText}>Deny</Text>
            </View>
          </View>
        </View>
        <View style={styles.checkboxView}>
          <NormalText>First Name Last Name</NormalText>
          <View style={styles.twoWhiteView}>
            <View style={styles.smallWhiteView}>
              <Text style={styles.smallText}>Accept</Text>
            </View>
            <View style={styles.smallWhiteView}>
              <Text style={styles.smallText}>Deny</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  renderLast() {
    return (
      <View style={{ alignItems: "center", flex: 1 }}>
        <View style={{ flex: 1, bottom: 40, position: "absolute" }}>
          <View style={styles.Whiteview}>
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: Font.medium,
                fontSize: width * 0.045,
              }}
            >
              {" "}
              Add Contacts
            </Text>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Container>
          {/* <View style={styles.container}> */}
          {this.renderHeader()}
          <View style={{ width: width * 0.7 }}>
            <LineText>
              The following users are requesting to be added to your contact
              list{" "}
            </LineText>
          </View>
          {this.renderMiddle()}
          {this.renderLast()}
          {/* </View> */}
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

export default connect(mapStateToProps)(pendingRequest);

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;
const NormalText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 15px;
  color: ${(props) => props.theme.textColor};
`;
const LineText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 15px;
  color: ${(props) => props.theme.iconColor};
  line-height: 30px;
  text-align: center;
  margin-Top:12px;
`;
