import * as action from '../../action';

import {
  Button,
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
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Metrics from "../theme/Metrics";
import QRCode from "react-native-qrcode-svg";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styles from "./style.js";
import { switchTheme } from "../../action/themeAction";

var { width, height } = Dimensions.get("window");

class Share extends Component {
  renderHeader() {
    return (
      <Header
        title="Share"
        onPress={() => this.props.navigation.toggleDrawer()}
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
          {this.renderHeader()}
          <View style={styles.container}>
            <View style={styles.qrContainer}>
            <Text style={styles.qrText}> {this.props.data.username}</Text>
              <QRCode
                value={JSON.stringify(this.props.data)}
                size={width * 0.4}
                color={COLORS.white}
                backgroundColor={COLORS.main_text_color}
                logoSize={30}
                logoMargin={2}
                logoBorderRadius={15}
                logoBackgroundColor="yellow"
              />
            </View>
          </View>
        </Container>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  console.log("state---->", state.login.shouldLoadData);
  return {
    data: state.login.shouldLoadData,
    theme: state.themeReducer.theme,
  };
}

export default connect(mapStateToProps, action)(Share);

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.backColor};
  justify-content: center;
  align-items: center;
`;
