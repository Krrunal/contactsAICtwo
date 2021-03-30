import {
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

import AsyncStorage from "@react-native-community/async-storage";
import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font.js";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/backHeader";
import { connect } from "react-redux";
import styles from "./afterRequestSendStyle.js";

var { width, height } = Dimensions.get("screen");

class afterRequestSend extends Component {
  state = {
    label: "",
  };
  async componentDidMount() {
    this.setState({
      label: await AsyncStorage.getItem("@selectedLabel"),
    });
  }
  renderHeader() {
    return (
      <Header
        title="Add Contacts AIC User"
        onPress={() => this.props.navigation.navigate("ChooseContactFromLabel")}
      />
    );
  }
  renderMiddle() {
    return (
      <View>
        <View style={styles.uperView}>
          <Text
            style={[
              styles.uperText,
              {
                color:
                  this.props.theme.mode === "light"
                    ? COLORS.main_text_color
                    : COLORS.white,
              },
            ]}
          >
            Your Request To Add This Contact Has Been Sent
          </Text>
          <Text  style={[ styles.uperText2,  { color:  this.props.theme.mode === "light"  ? COLORS.main_text_color: COLORS.white,},]} >
            Lables You Associated With This Contact:
          </Text>
        
            {this.state.label.split(/,/).map((item) => (
            <Text  style={[ styles.sizeTextSmall,  { color:  this.props.theme.mode === "light"  ? COLORS.main_text_color: COLORS.white,},]} >

              {item} </Text>
            ))}
          
        </View>
      </View>
    );
  }
  forOkNavigate =() =>{
    this.props.navigation.navigate("AddContact");
  }
  
  renderLast(){
      return(
        <View style={{ alignItems: "center" ,position:"absolute",bottom:50}}>
        <TouchableOpacity
          style={styles.SmallMiddle}
          onPress={this.forOkNavigate}
        >
          <Text
            style={{
              fontSize: width * 0.035,
              fontFamily: Font.medium,
              fontSize: width * 0.043,
              color:COLORS.main_text_color
            }}
          >
            OK
          </Text>
        </TouchableOpacity>
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
          {this.renderMiddle()}
          {this.renderLast()}
        </Container>
      </ThemeProvider>
    );
  }
}
function mapStateToProps(state) {
  return {
    theme: state.themeReducer.theme,
    user_id: state.login.shouldLoadData.user_id,
  };
}

export default connect(mapStateToProps)(afterRequestSend);

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.backColor};
  align-items: center;
`;
