import {
  CheckBox,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";
import { darkTheme, lightTheme } from "../theme/themeProps";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import { CommonActions } from "@react-navigation/native";
import Font from "../theme/font";
import Header from "../../components/header/index";
import Icon from "react-native-vector-icons/FontAwesome5";
import Metrics from "../theme/Metrics";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import plus from "../../assets/images/plus.png";
import styles from "./chooseContactFromLabelStyle.js";
import { switchTheme } from "../../action/themeAction";

var { width, height } = Dimensions.get("window");

class chooseContactFromLabel extends Component {
  state = {
    checked: false,
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
  };

  renderHeader() {
    return (
      <Header
        title="Add Contacts AIC User(s)"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  renderMiddle() {
    return (
      <View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() =>
              this.setState({ checked: !this.state.checked })
            }
            tintColors={{ true: "#1374A3", false: "#000" }}
          />
          <NormalText>Family</NormalText>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked1}
            onValueChange={() =>
              this.setState({ checked1: !this.state.checked1 })
            }
            tintColors={{ true: "#1374A3", false: "#000" }}
          />
          <NormalText>Friend</NormalText>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked2}
            onValueChange={() =>
              this.setState({ checked2: !this.state.checked2 })
            }
            tintColors={{ true: "#1374A3", false: "#000" }}
          />
          <NormalText>Relative</NormalText>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked3}
            onValueChange={() =>
              this.setState({ checked3: !this.state.checked3 })
            }
            tintColors={{ true: "#1374A3", false: "#000" }}
          />
          <NormalText>Universal Studio</NormalText>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked4}
            onValueChange={() =>
              this.setState({ checked4: !this.state.checked4 })
            }
            tintColors={{ true: "#1374A3", false: "#000" }}
          />
          <NormalText>Sposrt Gambling Podcast</NormalText>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked5}
            onValueChange={() =>
              this.setState({ checked5: !this.state.checked5 })
            }
            tintColors={{ true: "#1374A3", false: "#000" }}
          />
          <NormalText>Green Inc.</NormalText>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked6}
            onValueChange={() =>
              this.setState({ checked6: !this.state.checked6 })
            }
            tintColors={{ true: "#1374A3", false: "#000" }}
          />
          <NormalText>UCLA</NormalText>
        </View>
        <View style={styles.mainView}>
          <Image
            source={plus}
            style={{
              width: width * 0.055,
              height: width * 0.055,
              marginLeft: Metrics.xsmallMargin,
            }}
          />
          <View style={styles.smallWhiteview}>
            <Text
              style={{
                fontSize: width * 0.03,
                fontFamily: Font.regular,
              }}
            >
              Add
            </Text>
          </View>
        </View>
      </View>
    );
  }

  renderLast() {
    return (
      <View style={{ alignItems: "center", flex: 1 }}>
        <View
          style={{
            flex: 1,
            bottom: 20,
            position: "absolute",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={styles.Whiteview}
            onPress={this.forAddContactNavigate}
          >
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: Font.medium,
                fontSize: width * 0.045,
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  forAddContactNavigate = () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: "forAddContact",
        //routes: [{ name: 'Login' }],
      })
    );
  };

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Container>
          {/* <View style={styles.container}> */}

          {this.renderHeader()}
          <View style={styles.headerLineContainer}>
            <LineText>
              {" "}
              Select which label(s) to associate with [ USERNAME ]{" "}
            </LineText>
          </View>
          {this.renderMiddle()}
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

export default connect(mapStateToProps)(chooseContactFromLabel);

const Container = styled.View`
flex: 1;

width: 100%;
/* align-items: center; */
background-color: ${(props) => props.theme.backColor};
`;
const NormalText = styled.Text`
  font-family: Roboto-Light;
  font-size: 15px;
  color: ${(props) => props.theme.iconColor};
`;
const LineText = styled.Text`
  font-family: Roboto-Light;
  font-size: 15px;
  color: ${(props) => props.theme.iconColor};
  line-Height:30px;
  text-Align: center;
`;
