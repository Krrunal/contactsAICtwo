import {
  CheckBox,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font.js";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import { connect } from "react-redux";
import styles from "./forAdd2Style.js";

var { width, height } = Dimensions.get("window");

class forAdd2 extends Component {
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
      <View>
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
        <View style={styles.WhiteBigview}>
          <TouchableOpacity style={styles.textLeft}>
            <Text style={styles.sizeText}>[ USER NAME 2 ]</Text>
          </TouchableOpacity>
          <View style={styles.textRigh}>
            <Text style={styles.sizeTextSmall}>
              Sport Gambling Podcast {" \n"}
              Green Inc.
            </Text>
          </View>
        </View>
      </View>
    );
  }

  afterContactNavigate = () => {
    this.props.navigation.navigate('ManuallyAddContact')
  };

  renderView() {
    return (
      <View>
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
    this.props.navigation.navigate('SerachEditContact')
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
    this.props.navigation.navigate('AfterAddContact')
  };

  finishtNavigate = () => {
    this.props.navigation.navigate('SerachEditContact')
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
          {this.renderHeaderLine()}
          {this.renderMiddle()}
          {this.renderView()}
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

export default connect(mapStateToProps)(forAdd2);

const Container = styled.View`
  flex: 1;

  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;
const BoldText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 17px;
  color: ${(props) => props.theme.iconColor};
`;
