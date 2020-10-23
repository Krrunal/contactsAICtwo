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
import Font from "../theme/font.js";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styles from "./forContactStyle.js";
import { switchTheme } from "../../action/themeAction";

var { width, height } = Dimensions.get("window");

class forAddContact extends Component {
  renderHeader() {
    return (
      <Header
        title="Add Contacts AIC User(s)"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  renderHeaderLine() {
    return (
      <View style={styles.TopView}>
        <View style={styles.topOne}>
          <BoldText>Contact(s) to Add </BoldText>
        </View>
        <View style={styles.toptwo}>
          <BoldText>Label (s)</BoldText>
        </View>
      </View>
    );
  }

  renderMiddle() {
    return (
      <View style={styles.WhiteBigview}>
        <TouchableOpacity style={styles.textLeft}>
          <Text style={styles.sizeText}>[ USER NAME ]</Text>
        </TouchableOpacity>
        <View style={styles.textRigh}>
          <Text style={styles.sizeTextSmall}>
            Sport Gambling Podcast {" \n"}
            Green Inc.
          </Text>
        </View>
      </View>
    );
  }
  // onPress={this.afterContactNavigate}
  afterContactNavigate = () => {
    this.props.navigation.navigate('ManuallyAddContact')
  };

  renderView() {
    return (
      <View style={{alignItems:'center'}}>
        <TouchableOpacity
          style={styles.SmallMiddle}
          onPress={this.forAddContactNavigate}
        >
          <Text
            style={{
              fontSize: width * 0.035,
              fontFamily: Font.medium,
              fontSize: width * 0.043,
            }}
          >
            Add Contact
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  forAddContactNavigate = () => {
    this.props.navigation.navigate('ManuallyAddContact')
  };

  renderLast() {
    return (
      <View style={{ alignItems: "center", flex: 1 }}>
        <View
          style={{
            flex: 1,
            bottom: 30,
            position: "absolute",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={styles.Whiteview}
            onPress={this.backtNavigate}
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
            onPress={this.finishtNavigate}
          >
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: Font.medium,
                fontSize: width * 0.045,
              }}
            >
              Finish
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  backtNavigate = () => {
    this.props.navigation.navigate('ChooseContactFromLabel')
  };

  finishtNavigate = () => {
    this.props.navigation.navigate('AddContact')
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
          <View>
            {this.renderHeader()}
            {this.renderHeaderLine()}
            {this.renderMiddle()}
            {this.renderView()}
            {this.renderLast()}
          </View>
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

export default connect(mapStateToProps)(forAddContact);

const Container = styled.View`
  flex: 1;

  background-color: ${(props) => props.theme.backColor};
  align-items:center;
`;
const BoldText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 17px;
  color: ${(props) => props.theme.iconColor};
`;
