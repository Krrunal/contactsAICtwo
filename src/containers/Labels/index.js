import {
  Animated,
  CheckBox,
  Dimensions,
  Image,
  Keyboard,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component, useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Icon from "react-native-vector-icons/FontAwesome5";
import Metrics from "../theme/Metrics";
import { connect } from "react-redux";
import styles from "./style.js";

var { width, height } = Dimensions.get("window");
class labels extends Component {
  constructor() {
    super();

    this.state = {
      label: "",
      valueArrayLabel: [],

      disabledLabel: false,
      status: false,
    };
    this.indexlabel = 0;
    this.animatedValue = new Animated.Value(0);
  }
  renderHeader() {
    return (
      <Header
        title="Labels"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }
  ShowHideTextComponentView = () => {
    if (this.state.status == true) {
      this.setState({ status: false });
    } else {
      this.setState({ status: true });
    }
  };
  addLabel = () => {
    this.animatedValue.setValue(0);
    let newlyAddedValue = { indexlabel: this.indexlabel };
    this.setState(
      {
        disabledLabel: true,
        valueArrayLabel: [...this.state.valueArrayLabel, newlyAddedValue],
      },
      () => {
        Animated.timing(this.animatedValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          this.indexlabel = this.indexlabel + 1;
          this.setState({ disabledLabel: false });
        });
      }
    );
  };
  renderMiddle() {
    let arrayLabel = this.state.valueArrayLabel.map((item, key) => {
      if (key == this.indexlabel) {
        return (
          <View style={styles.addlabelView}>
            {this.props.theme.mode === "light" ? (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.black} />
            ) : (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.white} />
            )}
            <View style={styles.manageView}>
              <Text style={styles.manageText}>Manage</Text>
            </View>
            <TextInput
              placeholder="No Label"
              style={styles.stylefiledText}
              value={this.state.label}
              onChangeText={(value) => this.setState({ label: value })}
              ref={(input) => {
                this.label = input;
              }}
            />
          </View>
        );
      } else {
        return (
          <View style={styles.addlabelView}>
            {this.props.theme.mode === "light" ? (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.black} />
            ) : (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.white} />
            )}
            <View style={styles.manageView}>
              <Text style={styles.manageText}>Manage</Text>
            </View>
            <TextInput
              placeholder="No Label"
              style={styles.stylefiledText}
              value={this.state.label}
              onChangeText={(value) => this.setState({ label: value })}
              ref={(input) => {
                this.label = input;
              }}
            />
          </View>
        );
      }
    });

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

          {arrayLabel}
        </View>
      </ScrollView>
    );
  }

  manageLabelnavigate = () => {
    this.props.navigation.navigate('ManageLable')
  };

  renderLast() {
    return (
      <View style={{ alignItems: "center", flex: 1 }}>
        <View
          style={{
            flex: 1,
            bottom: 35,
            position: "absolute",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={styles.Whiteview}
            onPress={this.addLabel}
            disable={this.state.disabledLabel}
          >
            <Text style={styles.bottomButton}>Add</Text>
          </TouchableOpacity>

          <View style={styles.WhiteviewTwo}>
            <Text style={styles.bottomButton}>Delete</Text>
          </View>
        </View>
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
          {this.renderLast()}
        </Container>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
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
const ScrollView = styled.ScrollView`
  /* color: ${(props) => props.theme.textColor}; */
  /* flex: 1; */
  height: 60%;
  margin-bottom: 100px;
`;
const TextInput = styled.TextInput`
  font-family: Roboto-Regular;
  font-size: 17px;
  color: ${(props) => props.theme.iconColor};
  margin-left: 15px;
`