import * as action from "../../action";

import {
  Button,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import DateTimePicker from "react-native-modal-datetime-picker";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/backHeader";
import QRCode from "react-native-qrcode-svg";
import { connect } from "react-redux";
import { fcmService } from "../../services/FirebaseDatabase/FCMService";
import moment from "moment";
import styles from "./style.js";

var { width, height } = Dimensions.get("window");

class Share extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      notificationTime: moment(),
      notificationTitle: "",
      notificationDescription: "",
      isVisibleOverlay: false,
      notifyData: {},
    };
  }

  renderHeader() {
    return (
      <Header
        title="Share"
        onPress={() => this.props.navigation.navigate("SerachEditContact")}
      />
    );
  }

  renderView() {
    return (
      <View style={{ }}>
        <View
          style={{ width: 100, height: 250, backgroundColor: COLORS.black }}
        >
          <Text>hiii</Text>
        </View>
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
          {this.state.section ? this.renderView() : null}

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
  // console.log("state---->", state.login.shouldLoadData);
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
