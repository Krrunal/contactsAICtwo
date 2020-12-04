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
import React, { Component } from "react";
import { darkTheme, lightTheme } from "../theme/themeProps";
import styled, { ThemeProvider } from "styled-components/native";

import AsyncStorage from "@react-native-community/async-storage";
import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font.js";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import { Spinner } from "../../components/Spinner";
import Toast from "react-native-easy-toast";
import { addItem } from "../../services/FirebaseDatabase/addToFirebase";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import firebase from "../../services/FirebaseDatabase/db";
import styles from "./forContactStyle.js";
import { switchTheme } from "../../action/themeAction";

var { width, height } = Dimensions.get("screen");

class forAddContact extends Component {
  state = {
    label: "",
    data: [],
    contacts: "",
    contact: [],
    isUserExist: false,
    loader: false,
  };

  async componentDidMount() {
    this.setState({
      // label: this.props.navigation.state.params.label,
      // data: JSON.parse(this.props.navigation.state.params.data)
      label: await AsyncStorage.getItem("@selectedLabel"),
      data: JSON.parse(await AsyncStorage.getItem("@qrData")),
    });
    // console.log("Username  ---->", this.state.data);
    // console.log(JSON.parse(await AsyncStorage.getItem("@qrData")));
    const { data, label } = this.state;
    firebase.firestore().collection(this.props.user_id).get()
      .then((snap) => {
        snap.forEach(async (doc) => {
          if (this.state.isUserExist == false) {
            console.log("is exist1----->", this.state.isUserExist);
            console.log(
              "data----->",
              doc._data.id,
              "user_id--->",
              JSON.parse(this.props.navigation.state.params.data).user_id
            );
            if (
              doc._data.id ===
              JSON.parse(await AsyncStorage.getItem("@qrData")).user_id
            ) {
              this.setState({ isUserExist: true });
              console.log("is exist2----->", this.state.isUserExist);
            }
          }
        });
      });
  }

  renderHeader() {
    return (
      <Header
        title="Add Contacts AIC User(s)"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  renderHeaderLine() {
    return (
      <View style={styles.TopView}>
        <View style={styles.topOne}>
          <BoldText>Contact(s) to Add </BoldText>
        </View>
        <View style={styles.toptwo}>
          <BoldText>Label(s)</BoldText>
        </View>
      </View>
    );
  }

  renderMiddle() {
    return (
      <View style={styles.WhiteBigview}>
        {this.state.data == null ? (
          <TouchableOpacity style={styles.textLeft}>
            <Text style={styles.sizeText}>[ USER NAME ]</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.textLeft}>
            <Text style={styles.sizeText}>{this.state.data.username}</Text>
          </TouchableOpacity>
        )}

        {this.state.data == null ? (
          <View style={styles.textRigh}>
            <Text style={styles.sizeTextSmall}>Green Inc. </Text>
          </View>
        ) : (
          <View style={styles.textRigh}>
            {this.state.label.split(/,/).map((item) => (
              <Text style={styles.sizeTextSmall}> {item} </Text>
            ))}
          </View>
        )}
        {/* <TouchableOpacity style={styles.textLeft}>
          <Text style={styles.sizeText}>{this.state.data.username}</Text>
        </TouchableOpacity> */}
        {/* <View style={styles.textRigh}>
          { this.state.label.split(/[ ,]+/).map((item) => (
            <Text style={styles.sizeTextSmall}> {item} </Text>
          )) }
        </View> */}
      </View>
    );
  }

  renderView() {
    return (
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.SmallMiddle}
          onPress={this.forAddContactNavigate}
        >
          <Text
            style={{
              fontSize: width * 0.035,
              fontFamily: Font.medium,
              fontSize: width * 0.043,
              color:COLORS.main_text_color
            }}
          >
            Add Contact
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  forAddContactNavigate = () => {
    this.props.navigation.navigate("ManuallyAddContact");
  };

  renderLast() {
    return (
      <View style={{ alignItems: "center", flex: 1 }}>
        <View
          style={{
            flex: 1,
            bottom: 30,
            position: "absolute",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={styles.Whiteview}
            onPress={this.backtNavigate}
          >
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: Font.medium,
                fontSize: width * 0.045,
              }}
            >
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.WhiteviewTwo}
            onPress={this.finishNavigate}
          >
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: Font.medium,
                fontSize: width * 0.045,
              }}
            >
              Finish
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  backtNavigate = () => {
    this.props.navigation.navigate("ChooseContactFromLabel");
  };

  showLoader() {
    if (this.state.loader == true) {
      return <Spinner />;
    }
  }

  finishNavigate = () => {
    const { data, label } = this.state;
    if (this.state.data == null) {
      this.props.navigation.navigate("AddContact");
    } else {
      if (this.state.isUserExist == false) {
        this.setState({ loader: false });
        addItem(
          this.props.user_id,
          data.user_id,
          label,
          data.contact,
          data.email,
          data.username
        );
        this.props.navigation.navigate("AddContact");
      } else {
        this.setState({ loader: false });
        // this.refs.toast.show('Contact already exist ')
        alert("Contact already exist ");
        this.props.navigation.navigate("AddContact");
      }
    }
  };

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
          {this.renderHeaderLine()}
          {this.renderMiddle()}
          {this.renderView()}
          {this.renderLast()}
          <Toast
            ref="toast"
            style={{
              backgroundColor:
                this.props.theme.mode === "light" ? "black" : "white",
              width: width * 0.8,
              alignItems: "center",
            }}
            position="bottom"
            positionValue={220}
            fadeInDuration={100}
            fadeOutDuration={2000}
            opacity={1}
            textStyle={{
              color: this.props.theme.mode === "light" ? "white" : "black",
              fontFamily: Font.medium,
              fontSize: width * 0.04,
            }}
          />
          {this.showLoader()}
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

export default connect(mapStateToProps)(forAddContact);

const Container = styled.View`
  flex: 1;

  background-color: ${(props) => props.theme.backColor};
  align-items: center;
`;
const BoldText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 17px;
  color: ${(props) => props.theme.textColor};
`;
