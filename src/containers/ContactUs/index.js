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
  View
} from "react-native";
import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/backHeader";
import { connect } from "react-redux";
import notifee from '@notifee/react-native';
import styles from "./style.js";

var { width, height } = Dimensions.get("window");


class ContactUs extends Component {
  renderHeader() {
    return (
      <Header
        title="Contact"
        onPress={() => this.props.navigation.navigate("SerachEditContact")}
        />
    );
  }
 
  
  //   onDisplayNotification = async() =>{
  //   // Create a channel
  //   const channelId = await notifee.createChannel({
  //     id: '1',
  //     name: 'Default Channel',
  //   });

  //   // Display a notification
  //   await notifee.displayNotification({
  //     title: 'Notification Title',
  //     body: 'Main body content of the notification',
  //     android: {
  //       channelId,
  //     },
  //   });
  // }

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

        <Container keyboardShouldPersistTaps="always">
          {this.renderHeader()}
          {/* <Button title="Display Notification" 
          onPress={() => {this.onDisplayNotification()}} /> */}

        </Container>
      </ThemeProvider>
    );
  }
}
const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
});

export default connect(mapStateToProps)(ContactUs);

const Container = styled.View`
  flex: 1;

  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;
