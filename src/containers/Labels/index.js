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
import React, { Component, useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import { CommonActions } from "@react-navigation/native";
import Font from "../theme/font";
import Header from "../../components/header/index";
import Icon from "react-native-vector-icons/FontAwesome5";
import Metrics from "../theme/Metrics";
import { connect } from "react-redux";
import styles from "./style.js";

var { width, height } = Dimensions.get("window");
class labels extends Component {
  renderHeader() {
    return (
      <Header
        title="Labels"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  renderMiddle() {
    return (
      <ScrollView>
        <View style={{ flex: 1, marginBottom: Metrics.smallMargin }}>
          <View style={styles.tripleView}>
            {this.props.theme.mode === "light" ? (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.black} />
            ) : (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.white} />
            )}

            <TouchableOpacity
              style={styles.manageView}
              onPress={this.manageLabelnavigate}
            >
              <Text style={styles.manageText}>Manage</Text>
            </TouchableOpacity>
            <NormalText>Family</NormalText>
          </View>
          <View style={styles.tripleView}>
            {this.props.theme.mode === "light" ? (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.black} />
            ) : (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.white} />
            )}
            <View style={styles.manageView}>
              <Text style={styles.manageText}>Manage</Text>
            </View>
            <NormalText>Friend</NormalText>
          </View>
          <View style={styles.tripleView}>
            {this.props.theme.mode === "light" ? (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.black} />
            ) : (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.white} />
            )}
            <View style={styles.manageView}>
              <Text style={styles.manageText}>Manage</Text>
            </View>
            <NormalText>Relative</NormalText>
          </View>
          <View style={styles.tripleView}>
            {this.props.theme.mode === "light" ? (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.black} />
            ) : (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.white} />
            )}
            <View style={styles.manageView}>
              <Text style={styles.manageText}>Manage</Text>
            </View>
            <NormalText>Universal Studio</NormalText>
          </View>
          <View style={styles.tripleView}>
            {this.props.theme.mode === "light" ? (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.black} />
            ) : (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.white} />
            )}
            <View style={styles.manageView}>
              <Text style={styles.manageText}>Manage</Text>
            </View>
            <NormalText>Sports Gambling Podcast</NormalText>
          </View>
          <View style={styles.tripleView}>
            {this.props.theme.mode === "light" ? (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.black} />
            ) : (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.white} />
            )}
            <View style={styles.manageView}>
              <Text style={styles.manageText}>Manage</Text>
            </View>
            <NormalText>Green Inc.</NormalText>
          </View>
          <View style={styles.tripleView}>
            {this.props.theme.mode === "light" ? (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.black} />
            ) : (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.white} />
            )}
            <View style={styles.manageView}>
              <Text style={styles.manageText}>Manage</Text>
            </View>
            <NormalText>No Label</NormalText>
          </View>
        </View>
      </ScrollView>
    );
  }

  manageLabelnavigate = () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: "ManageLable",
        //routes: [{ name: 'Login' }],
      })
    );
  };

  renderLast() {
    return (
      <View style={{ alignItems: "center", flex: 1 }}>
        <View
          style={{
            flex: 1,
            bottom: 40,
            position: "absolute",
            flexDirection: "row",
          }}
        >
          <View style={styles.Whiteview}>
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: Font.medium,
                fontSize: width * 0.045,
              }}
            >
              Add
            </Text>
          </View>
          <View style={styles.WhiteviewTwo}>
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: Font.medium,
                fontSize: width * 0.045,
              }}
            >
              Delete
            </Text>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Container>
          {this.renderHeader()}
          {this.renderMiddle()}
          {this.renderLast()}
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

export default connect(mapStateToProps)(labels);

const Container = styled.View`
  flex: 1;

  width: 100%;

  background-color: ${(props) => props.theme.backColor};
`;
const NormalText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 17px;
  color: ${(props) => props.theme.textColor};
  margin-left: 15px;
`;
const IconColor = styled.Image`
  color: ${(props) => props.theme.textColor};
`;
