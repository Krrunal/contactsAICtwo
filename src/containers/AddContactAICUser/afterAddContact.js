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
import Font from "../theme/font.js";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Icon from "react-native-vector-icons/FontAwesome5";
import Metrics from "../theme/Metrics";
import { connect } from "react-redux";
import styles from "./afterAddContactStyle.js";

var { width, height } = Dimensions.get("window");

class afterAddContact extends Component {
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
      <View style={{ alignItems: "center" }}>
        <View style={{ marginTop: Metrics.baseMargin }}>
          <View>
            <View>
              <NormalText>Username #1</NormalText>
            </View>

            <View style={styles.userView}>
              <TextInput
                placeholderTextColor={COLORS.main_text_color}
                style={styles.textInputViewSignup}
              />
            </View>
          </View>
        </View>
        <View style={{ marginTop: Metrics.baseMargin }}>
          <View>
            <View>
              <NormalText>Username #2</NormalText>
            </View>

            <View style={styles.userView}>
              <TextInput
                placeholderTextColor={COLORS.main_text_color}
                style={styles.textInputViewSignup}
              />
            </View>
          </View>
        </View>
        <View style={{ marginTop: Metrics.baseMargin }}>
          <View>
            <View>
              <NormalText>Username #3</NormalText>
            </View>

            <View style={styles.userView}>
              <TextInput
                placeholderTextColor={COLORS.main_text_color}
                style={styles.textInputViewSignup}
              />
            </View>
          </View>
        </View>
        <View style={{ marginTop: Metrics.baseMargin }}>
          <View style={{ marginBottom: Metrics.doubleBaseMargin }}>
            <View>
              <NormalText>Username #4</NormalText>
            </View>

            <View style={styles.userView}>
              <TextInput
                placeholderTextColor={COLORS.main_text_color}
                style={styles.textInputViewSignup}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }

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
            onPress={this.backNavigate}
          >
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: Font.medium,
                fontSize: width * 0.045,
              }}
            >
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.WhiteviewTwo}
            onPress={this.forAddContactNavigate}
          >
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: Font.medium,
                fontSize: width * 0.045,
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  backNavigate = () => {
    this.props.navigation.navigate('ForAddContact')
  };

  forAddContactNavigate = () => {
    this.props.navigation.navigate('ForAdd2')
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
          {/* <View style={styles.container}> */}
          {this.renderHeader()}
          <View style={styles.headerLineContainer}>
            <LineText> Enter Contact's Username </LineText>
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

export default connect(mapStateToProps)(afterAddContact);

const Container = styled.View`
  flex: 1;

  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;

const NormalText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 17px;
  color: ${(props) => props.theme.iconColor};
`;
const LineText = styled.Text`
  font-family: Roboto-Light;
  font-size: 17px;
  color: ${(props) => props.theme.iconColor};
  line-height: 30px;
  text-align: center;
`;
