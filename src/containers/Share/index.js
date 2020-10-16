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
import { darkTheme, lightTheme } from "../theme/themeProps";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import Header from "../../components/header/index";
import Metrics from "../theme/Metrics";
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
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Container>
          <View style={styles.container}>
            {this.renderHeader()}

            {this.props.theme.mode === "light" ? (
              <TouchableOpacity
                onPress={() => this.props.switchTheme(darkTheme)}
              >
                <Text>Switch to Dark Theme</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => this.props.switchTheme(lightTheme)}
              >
                <Text style={{color:COLORS.main_text_color}}>Switch to Light Theme</Text>

              </TouchableOpacity>
            )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Share);

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.backColor};
  justify-content: center;
  align-items: center;
`;
