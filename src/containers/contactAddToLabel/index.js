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
import React, { Component, useState } from "react";

import { COLORS } from "../theme/Colors.js";
import CheckBox from "@react-native-community/checkbox";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Metrics from "../theme/Metrics";
import styles from "./style.js";

var { width, height } = Dimensions.get("window");
export default class searchContact extends Component {
  state = {
    checked: false,
  };

  renderHeader() {
    return (
      <Header
        title="Manage Labels"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  renderMiddle() {
    return (
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            paddingRight: Metrics.baseMargin,
            paddingLeft: Metrics.baseMargin,
            width: width * 0.7,
          }}
        >
          <Text style={{ padding: Metrics.baseMargin, textAlign: "center" }}>
            Select which contacts you'd like to associate with the label:
          </Text>
          <Text style={{ textAlign: "center" }}>Friend</Text>
        </View>

        <ScrollView>
          <View style={styles.mainView}>
            <View style={styles.quardView}>
              <CheckBox
                value={this.state.checked}
                onValueChange={() =>
                  this.setState({ checked: !this.state.checked })
                }
                tintColors={{ true: "#1374A3", false: "#1374A3"}}
              />
              <Text style={styles.personName}>Ron Aron</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  renderLast() {
    return (
      <View style={{ alignItems: "center", flex: 1 }}>
        <View style={{ flex: 1, bottom: 20, position: "absolute" }}>
          <View style={styles.Whiteview}>
            <Text style={{ color: COLORS.main_text_color }}> Save </Text>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={{ backgroundColor: COLORS.white, flex: 1 }}>
        <GeneralStatusBar
          backgroundColor={
            this.props.theme.mode === "light" ? "white" : "black"
          }
          barStyle={
            this.props.theme.mode === "dark" ? "light-content" : "dark-content"
          }
        />

        {this.renderHeader()}
        {this.renderMiddle()}
        {this.renderLast()}
      </View>
    );
  }
}
