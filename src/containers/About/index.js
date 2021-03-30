import { Dimensions, View } from "react-native";
import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/backHeader";
import { connect } from "react-redux";
import styles from "./style.js";

var { width, height } = Dimensions.get("window");

class About extends Component {
  renderHeader() {
    return (
      <Header
        title="About"
        onPress={() => this.props.navigation.navigate("SerachEditContact")}

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

        <Container>{this.renderHeader()}</Container>
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

export default connect(mapStateToProps)(About);

const Container = styled.View`
  flex: 1;

  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;
