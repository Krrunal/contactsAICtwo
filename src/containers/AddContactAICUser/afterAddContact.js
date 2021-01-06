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
import styled, { ThemeProvider } from "styled-components/native";

import AsyncStorage from "@react-native-community/async-storage";
import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font.js";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Icon from "react-native-vector-icons/FontAwesome5";
import Metrics from "../theme/Metrics";
import { connect } from "react-redux";
import styles from "./afterAddContactStyle.js";

var { width, height } = Dimensions.get("window");

class afterAddContact extends Component {
  constructor() {
    super();
     this.state = {
      u_name1: "",
      u_name2: "",
      u_name3: "",
      u_name4: "",
      graySection: false,
      grayU_name1: false,
      grayU_name2: false,
      selectedUsername:[]
    };
  }
  renderHeader() {
    return (
      <Header
        title="Add Contacts AIC User(s)"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }
  
  submitEdit = async () => {
    const { u_name1 ,selectedUsername} = this.state;
    this.setState({ graySection: true });
    // selectedUsername.push(u_name1);
  };

  uName2Submit = async () => {
    const {  u_name2,selectedUsername } = this.state;
     this.setState({ grayU_name1: true });
    //  selectedUsername.push(u_name2);
   
  };
  uName3Submit = async () => {
    const {  u_name3 ,selectedUsername} = this.state;
    this.setState({ grayU_name2: true });
    // selectedUsername.push(u_name3);
   
  };
  uName4Submit = async () => {
    const {  u_name4 , selectedUsername} = this.state;
    // selectedUsername.push(u_name4);
    console.log("selected Username ---->",selectedUsername);
  
  };
  renderMiddle() {
    return (
      <View style={{ alignItems: "center" }}>
        <View style={{ marginTop: Metrics.baseMargin }}>
          <View>
            <View>
              <Text style={styles.userText}>Username #1</Text>
            </View>

            <View style={[styles.userView, { backgroundColor: COLORS.white }]}>
              <TextInput
                placeholder=""
                placeholderTextColor={COLORS.main_text_color}
                style={styles.textInputViewSignup}
                value={this.state.u_name1}
                onChangeText={(value) => this.setState({ u_name1: value })}
                ref={(input) => {
                  this.u_name1 = input;
                }}
                onSubmitEditing={this.submitEdit}
              />
            </View>
          </View>
        </View>
        <View style={{ marginTop: Metrics.baseMargin }}>
          <View>
            <View>
              <Text style={styles.userText}>Username #2</Text>
            </View>

            <View
              style={[
                styles.userView,
                {
                  backgroundColor:
                    this.state.graySection == true
                      ? COLORS.white
                      : COLORS.main_sky_blue,
                },
              ]}
            >
              <TextInput
                placeholder=""
                placeholderTextColor={COLORS.main_text_color}
                style={styles.textInputViewSignup}
                value={this.state.u_name2}
                onChangeText={(value) => this.setState({ u_name2: value })}
                ref={(input) => {
                  this.u_name2 = input;
                }}
                onSubmitEditing={this.uName2Submit}
                editable={this.state.graySection ? true : false}
              />
            </View>
          </View>
        </View>
        <View style={{ marginTop: Metrics.baseMargin }}>
          <View>
            <View>
              <Text style={styles.userText}>Username #3</Text>
            </View>

            <View
              style={[
                styles.userView,
                {
                  backgroundColor:
                    this.state.grayU_name1 == true
                      ? COLORS.white
                      : COLORS.main_sky_blue,
                },
              ]}
            >
              <TextInput
                placeholder=""
                placeholderTextColor={COLORS.main_text_color}
                style={styles.textInputViewSignup}
                value={this.state.u_name3}
                onChangeText={(value) => this.setState({ u_name3: value })}
                ref={(input) => {
                  this.u_name3 = input;
                }}
                onSubmitEditing={this.uName3Submit}
                editable={this.state.grayU_name1 ? true : false}
              />
            </View>
          </View>
        </View>
        <View style={{ marginTop: Metrics.baseMargin }}>
          <View style={{ marginBottom: Metrics.doubleBaseMargin }}>
            <View>
              <Text style={styles.userText}>Username #4</Text>
            </View>

            <View
              style={[
                styles.userView,
                {
                  backgroundColor:
                    this.state.grayU_name2 == true
                      ? COLORS.white
                      : COLORS.main_sky_blue,
                },
              ]}
            >
              <TextInput
                placeholder=""
                placeholderTextColor={COLORS.main_text_color}
                style={styles.textInputViewSignup}
                value={this.state.u_name4}
                onChangeText={(value) => this.setState({ u_name4: value })}
                ref={(input) => {
                  this.u_name4 = input;
                }}
                editable={this.state.grayU_name2 ? true : false}
                onSubmitEditing={this.uName4Submit}
              />
            </View>
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
            bottom: 0,
            position: "relative",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={styles.Whiteview}
            onPress={this.backNavigate}
          >
            <Text
              style={[styles.backButtton, { color: COLORS.main_text_color }]}
            >
              Back
            </Text>
          </TouchableOpacity>
          {this.state.graySection == true ? (
            <TouchableOpacity
              style={[styles.WhiteviewTwo, { backgroundColor: COLORS.white }]}
              onPress={this.forAddContactNavigate}
            >
              <Text style={styles.backButtton}>Next</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[
                styles.WhiteviewTwo,
                { backgroundColor: COLORS.main_sky_blue },
              ]}
            >
              <Text style={styles.backButtton}>Next</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }

  backNavigate = () => {
    this.props.navigation.navigate("ForAddContact");
  };

  forAddContactNavigate = async () => {
    const { selectedUsername ,u_name1 ,u_name2 ,u_name3,u_name4} = this.state;
     selectedUsername.push(u_name1);
     selectedUsername.push(u_name2);
     selectedUsername.push(u_name3);
     selectedUsername.push(u_name4);
    const selected = selectedUsername.toString();
    
    
    await AsyncStorage.setItem("@u_name1",u_name1);
    await AsyncStorage.setItem("@u_name2",u_name2);
    await AsyncStorage.setItem("@u_name3",u_name3);
    await AsyncStorage.setItem("@u_name4",u_name4);
    await AsyncStorage.setItem("@username", selected);
    this.props.navigation.navigate("addContactMultiple");
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
          {/* <View style={styles.container}> */}
          {this.renderHeader()}
          <View style={styles.headerLineContainer}>
            <LineText> Enter Contact's Username </LineText>
          </View>
          <ScrollView style={{ width: width }}>
            {this.renderMiddle()}
          </ScrollView>

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

export default connect(mapStateToProps)(afterAddContact);

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;

const NormalText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 17px;
  color: ${(props) => props.theme.textColor};
`;
const LineText = styled.Text`
  font-family: Roboto-Light;
  font-size: 17px;
  color: ${(props) => props.theme.textColor};
  line-height: 30px;
  text-align: center;
`;
