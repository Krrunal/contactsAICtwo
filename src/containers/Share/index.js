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
              <Text style={styles.qrText}> Mr._Green_Jeans</Text>
              <QRCode
                value={"Mr._Green_Jeans"}
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
