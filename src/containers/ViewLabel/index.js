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

import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import { connect } from "react-redux";
import styles from "./style.js";

var { width, height } = Dimensions.get("window");

class ViewLabel extends Component {
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
        <View style={styles.smallBlueView}>
          <Text style={styles.whiteText}>Contact</Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <TouchableOpacity
            style={styles.smallWhiteView}
            onPress={this.labelNavigate}
          >
            <Text style={styles.blueText}>Label</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  labelNavigate = () => {
    this.props.navigation.navigate("ViewLabelByName")
  };

  renderBigView() {
    return (
      <View>
        <ScrollView>
          <View style={{ alignItems: "center" }}>
            <View style={styles.middleView}>
              <View style={styles.firstView}>
                <Text style={styles.FirstText}>Ron Aron</Text>
              </View>
              <View style={styles.secondView}>
                <Text style={styles.secondText}>Universal Studio</Text>
                <Text style={styles.secondText}>Green Inc. </Text>
                <Text style={styles.secondText}>Sports gambling podcast</Text>
              </View>
            </View>
            <View style={styles.middleView}>
              <View style={styles.firstView}>
                <Text style={styles.FirstText}>Shelly Blimton</Text>
              </View>
              <View style={styles.secondView}>
                <Text style={styles.secondText}>Friends</Text>

                <Text style={styles.secondText}>Universal Studio</Text>
                <Text style={styles.secondText}>Green Inc. </Text>
                <Text style={styles.secondText}>Sports gambling podcast</Text>
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

export default connect(mapStateToProps)(ViewLabel);

const Container = styled.View`
  flex: 1;

  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;
