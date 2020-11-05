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

import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Icon from "react-native-vector-icons/FontAwesome5";
import Metrics from "../theme/Metrics";
import { Spinner } from "../../components/Spinner";
import { connect } from "react-redux";
import firebase from "../../services/FirebaseDatabase/db";
import info from "../../assets/icons/info.svg";
import logo from "../../assets/images/logo.png";
import sideBar from "../../assets/images/sideBAR.png";
import styles from "./style.js";

var { width, height } = Dimensions.get("window");
class ViewLabelByName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
      contacts: [],
      label: [],
      labels: [],
      splitLabel: [],
    };
  }

  componentDidMount() {
    this.setState({ loader: true });
    firebase.firestore().collection(this.props.user_id).get()
      .then((snap) => {
        snap.forEach((doc) => {
          this.setState({ loader: false });
          console.log("doc data===>", doc._data);
          var item = doc._data;
          this.state.contact.push(item);

          var arr = doc._data.label;

          this.state.label.push(arr);
        });
        this.setState({ contacts: this.state.contact });
        this.setState({ labels: this.state.label });

        const data = this.state.labels.join(",").split(",");
        this.setState({ splitLabel: data });
        console.log("Label ===>", this.state.label);
        console.log(" Split Label ===>", this.state.splitLabel);
      });
  }

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
        <TouchableOpacity
          style={styles.smallWhiteView}
          onPress={this.labelNavigate}
        >
          <Text style={styles.blueText}>Contact</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <View style={styles.smallBlueView}>
            <Text style={styles.whiteText}>Label</Text>
          </View>
        </View>
      </View>
    );
  }

  labelNavigate = () => {
    this.props.navigation.navigate("ViewLabel");
  };

  renderBigView() {
    return (
      <View style={{ alignItems: "center" }}>
        <ScrollView style={{ width: width, marginBottom: 190 }}>
          <View style={{ alignItems: "center" }}>

            {this.state.splitLabel.map((item) => (
              <View style={styles.middleView}>
                <View style={styles.firstView}>
                  <Text style={styles.FirstText}>Aron roy</Text>
                </View>
                <View style={styles.secondView}>
                  <Text
                    style={[
                      styles.FirstText,
                      { color: COLORS.main_text_color },
                    ]}
                  >
                    {item}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
  showLoader() {
    if (this.state.loader == true) {
      return <Spinner />;
    }
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

          {this.state.contacts == "" ? (
            <View style={{ marginTop: Metrics.doubleBaseMargin }}>
              <LineText>Please wait a moment</LineText>
            </View>
          ) : null}
          {this.renderBigView()}
        </Container>
      </ThemeProvider>
    );
  }
}
function mapStateToProps(state) {
  return {
    theme: state.themeReducer.theme,
    user_id: state.login.shouldLoadData.user_id,
  };
}
export default connect(mapStateToProps)(ViewLabelByName);

const Container = styled.View`
  flex: 1;

  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;
const LineText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 20px;
  color: ${(props) => props.theme.iconColor};
  line-height: 30px;
  text-align: center;
  margin-top: 12px;
`;
