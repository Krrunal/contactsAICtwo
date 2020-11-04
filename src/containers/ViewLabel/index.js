import {
  CheckBox,
  Dimensions,
  FlatList,
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
import Labels from "../Labels/index";
import Metrics from "../theme/Metrics";
import { Spinner } from "../../components/Spinner";
import { connect } from "react-redux";
import firebase from "../../services/FirebaseDatabase/db";
import styles from "./style.js";

var { width, height } = Dimensions.get("window");

class ViewLabel extends Component {
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
    firebase
      .firestore()
      .collection(this.props.user_id)
      .get()
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

        const data = this.state.labels;
        this.setState({ splitLabel: data });
        console.log("Label ===>", this.state.contacts);
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
        <View style={styles.smallBlueView}>
          <Text style={styles.whiteText}>Contact</Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <TouchableOpacity
            style={styles.smallWhiteView}
            onPress={this.labelNavigate}
          >
            <Text style={styles.blueText}>Label</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  labelNavigate = () => {
    this.props.navigation.navigate("ViewLabelByName");
  };

  renderBigView() {
    return (
      <View style={{ alignItems: "center" }}>
        <ScrollView style={{ width: width, marginBottom: 190 }}>
          <View style={{ alignItems: "center" }}>
            {this.state.contacts.map((item, index) => (
              <View style={styles.middleView}>
                <View style={styles.firstView}>
                  <Text
                    style={[
                      styles.FirstText,
                      { color: COLORS.main_text_color },
                    ]}
                  >
                    {" "}
                    {item.user_name || item.first_name}
                  </Text>
                </View>
                <View>
                  <View style={styles.secondView}>
                    <Text style={styles.FirstText}>{item.label}</Text>
                  </View>
                  {/* <View style={styles.secondView}> */}
                  {/* {this.state.splitLabel.map((item) => (
                  <View>
                    <View>
                      <Text style={styles.FirstText}>{item}</Text>
                    </View>
                  </View>
                ))} */}
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
        {/* {this.showLoader()} */}
      </ThemeProvider>
    );
  }
}
// const mapStateToProps = (state) => ({
//   theme: state.themeReducer.theme,
//   user_id: state.login.shouldLoadData.user_id,
// });
function mapStateToProps(state) {
  return {
    theme: state.themeReducer.theme,
    user_id: state.login.shouldLoadData.user_id,
  };
}
export default connect(mapStateToProps)(ViewLabel);

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
