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

import Font from "../theme/font";
import Header from "../../components/header/index";
import { connect } from "react-redux";
import styles from "./style.js";

var { width, height } = Dimensions.get("window");

class Help extends Component {
  renderHeader() {
    return (
      <Header title="Help" onPress={() => this.props.navigation.openDrawer()} />
    );
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Container>{this.renderHeader()}</Container>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
});

export default connect(mapStateToProps)(Help);

const Container = styled.View`
  flex: 1;

  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;