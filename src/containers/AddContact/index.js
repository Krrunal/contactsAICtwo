import {
  BackHandler,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";
import { darkTheme, lightTheme } from "../theme/themeProps";
import styled, { ThemeProvider } from "styled-components/native";

import AsyncStorage from "@react-native-community/async-storage";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import { addManualContact } from '../../services/FirebaseDatabase/manualContactToFirebase';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import firebase from "../../services/FirebaseDatabase/db";
// import {createDrawerNavigator} from '@react-navigation/drawer';
import styles from "./style";
import { switchTheme } from "../../action/themeAction";

var { width, height } = Dimensions.get("window");

class Add extends Component {
  constructor() {
    super();
  this.state = { 
    user_name:""
  }}

  componentDidMount = async () => {
     const {username , user_id} =this.props ;
     await AsyncStorage.setItem("@sidemenuName", username);
     await AsyncStorage.setItem("@sidemenuID", user_id);
  }
  renderHeader() {
    return (
      <Header
        title="Add Contact"
        onPress={() => this.props.navigation.toggleDrawer()}
      />
    );
  }

  renderFirst() {
    return (
      <TouchableOpacity
        style={styles.buttonView}
        onPress={this.addContactNavigate}
      >
        <Text style={styles.text}>Add Contacts AIC User</Text>
      </TouchableOpacity>
    );
  }

  addContactNavigate = () => {
    this.props.navigation.navigate("ManuallyAddContact");
  };

  renderSecond() {
    return (
      <TouchableOpacity
        style={styles.buttonView}
        onPress={this.importmanuallyNavigate}
      >
        <Text style={styles.text}>Add Contact Manually</Text>
      </TouchableOpacity>
    );
  }

  // manuallyAddContact
  importmanuallyNavigate = () => {
    this.props.navigation.navigate("AddmanuallyContact");
  };

  renderThird() {
    return (
      <TouchableOpacity style={styles.buttonView}>
        <Text style={styles.text} onPress={this.importNavigate}>
          Import Contact From My Device
        </Text>
      </TouchableOpacity>
    );
  }

  importNavigate = () => {
    this.props.navigation.navigate("ImportContacts");
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
        <View style={styles.container}>
          <Container>
            {this.renderHeader()}
            <View style={{ marginTop: height * 0.2, flex: 1 }}>
              {this.renderFirst()}
              {this.renderSecond()}
              {this.renderThird()}
            </View>
          </Container>
        </View>
      </ThemeProvider>
    );
  }
}
function mapStateToProps(state) {
 
  return {
    theme: state.themeReducer.theme,
    user_id: (state.login.shouldLoadData.user_id || state.reg.shouldLoadData.user_id),
    contact: (state.login.shouldLoadData.contact || state.reg.shouldLoadData.contact),
    email: (state.login.shouldLoadData.email || state.reg.shouldLoadData.email),
    username: (state.login.shouldLoadData.username || state.reg.shouldLoadData.username),

  };
}

const mapDispatchToProps = (dispatch) => ({
  switchTheme: bindActionCreators(switchTheme, dispatch),
});

export default connect(mapStateToProps)(Add);

const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;
