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
import { connect } from "react-redux";
import firebase from '../../services/FirebaseDatabase/db';
import styles from "./style.js";

var { width, height } = Dimensions.get("window");

class searchContact extends Component {
  state = {
    contact: [],
    contacts: '',
  }

  componentDidMount() {
    console.log(this.props.user_id)
    firebase.firestore().collection(this.props.user_id).get()
      .then((snap) => {
      snap.forEach((doc) => {
        this.state.contact.push(doc._data);
      });
    });

    this.setState({ contacts: this.state.contact})
    console.log('contact----->',this.state.contacts)

  }

  renderHeader() {
    return (
      <Header
        title="My Contact Information"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  renderMiddle() {
    const { checked, checked1, checked2, checked3 } = this.state;
    return (
      <View style={{ alignItems: "center" }}>
        <View style={styles.BlueBIgView}>
          <View style={{ marginTop: Metrics.doubleBaseMargin }}>
            <View style={styles.checkboxView}>
              <CheckBox
                value={this.state.checked}
                onValueChange={() =>
                  this.setState({ checked: !this.state.checked })
                }
                tintColors={{ true: "#fff", false: "#000" }}
              />
              <Text style={styles.showText}>Select All</Text>
            </View>
            <View></View>

            <ScrollView  keyboardShouldPersistTaps={true}>
              <View style={{ flex: 1 }}>
                <View style={styles.checkboxViewTwo}>
                  <CheckBox
                    value={this.state.checked1}
                    onValueChange={() =>
                      this.setState({ checked1: !this.state.checked1 })
                    }
                    tintColors={{ true: "#fff", false: "#000" }}
                  />
                  <Text style={styles.showText}>Ron Aron</Text>
                </View>
                <View style={styles.checkboxView}>
                  <CheckBox
                    value={this.state.checked2}
                    onValueChange={() =>
                      this.setState({ checked2: !this.state.checked2 })
                    }
                    tintColors={{ true: "#fff", false: "#000" }}
                  />
                  <Text style={styles.showText}>Shelly Blimton</Text>
                </View>
                <View style={styles.checkboxView}>
                  <CheckBox
                    value={this.state.checked3}
                    onValueChange={() =>
                      this.setState({ checked3: !this.state.checked3 })
                    }
                    tintColors={{ true: "#fff", false: "#000" }}
                  />
                  <Text style={styles.showText}>Arnoid Broser</Text>
                </View>
                <View style={styles.checkboxView}>
                  <CheckBox
                    value={this.state.checked4}
                    onValueChange={() =>
                      this.setState({ checked4: !this.state.checked4 })
                    }
                    tintColors={{ true: "#fff", false: "#000" }}
                  />
                  <Text style={styles.showText}>catherine</Text>
                </View>
                <View style={styles.checkboxView}>
                  <CheckBox
                    value={this.state.checked5}
                    onValueChange={() =>
                      this.setState({ checked5: !this.state.checked5 })
                    }
                    tintColors={{ true: "#fff", false: "#000" }}
                  />
                  <Text style={styles.showText}>Debra Evans</Text>
                </View>
                <View style={styles.checkboxView}>
                  <CheckBox
                    value={this.state.checked6}
                    onValueChange={() =>
                      this.setState({ checked6: !this.state.checked6 })
                    }
                    tintColors={{ true: "#fff", false: "#000" }}
                  />
                  <Text style={styles.showText}>Lizzatte Frankin</Text>
                </View>
                <View style={styles.checkboxView}>
                  <CheckBox
                    value={this.state.checked7}
                    onValueChange={() =>
                      this.setState({ checked7: !this.state.checked7 })
                    }
                    tintColors={{ true: "#fff", false: "#000" }}
                  />
                  <Text style={styles.showText}>Louis Gossett</Text>
                </View>
                <View style={styles.checkboxView}>
                  <CheckBox
                    value={this.state.checked8}
                    onValueChange={() =>
                      this.setState({ checked8: !this.state.checked8 })
                    }
                    tintColors={{ true: "#fff", false: "#000" }}
                  />
                  <Text style={styles.showText}>Amaanda Hornberger</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }

  renderLast() {
    return (
      <View style={{ alignItems: "center", flex: 1 }}>
        <View style={{ flex: 1, bottom: 15, position: "absolute" }}>
          <View style={styles.Whiteview}>
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: "Roboto-Bold",
                fontSize: width * 0.045,
              }}
            >
              Import
            </Text>
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

function mapStateToProps(state) {
  return {
    theme: state.themeReducer.theme,
    user_id: state.login.shouldLoadData.user_id
  };
}
export default connect(mapStateToProps)(searchContact);
