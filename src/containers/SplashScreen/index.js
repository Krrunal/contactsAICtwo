import * as React from "react";
import * as action from "../../action";

import { Image, Text, View } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";
import { darkTheme, lightTheme } from "../theme/themeProps";
import styled, { ThemeProvider } from "styled-components/native";

import GeneralStatusBar from "../../components/StatusBar/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import firebase from "../../services/FirebaseDatabase/db";
import styles from "./style";
import { switchTheme } from "../../action/themeAction";

class Splash extends React.Component {
state = { 
  isFirebaseLogin :""
}
  async componentDidMount() {
    const {username} = this.props;
    firebase
  .firestore()
  .collection("user")
  .doc(username)
  .get()
  .then((snap) => { 
      var IsLogedIn = snap._data.isLogedIn 
      if(IsLogedIn == true){
          this.setState({isFirebaseLogin : IsLogedIn})
          console.log("snappp true--->",this.state.isFirebaseLogin)
      }else{
        this.setState({isFirebaseLogin : IsLogedIn})
        console.log("snappp flase--->",this.state.isFirebaseLogin)
      }
  })
    this.timeoutHandle = setTimeout(async () => {
      this.state.isFirebaseLogin == false
        ? this.props.navigation.reset(
            [NavigationActions.navigate({ routeName: "Login" })],
            0
          )
        : this.props.navigation.reset(
            [NavigationActions.navigate({ routeName: "AddContact" })],
            0
          );
    }, 2000);
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
        <View style={styles.container}>
          <Container>
            <Image
              source={require("../../assets/images/logo.png")}
              style={styles.logo}
            />
            <View style={styles.nameView}>
              <Text style={styles.text}> CONTACTS AIC </Text>
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
    isLogedIn: state.login.shouldLoadData,
    username: state.login.shouldLoadData.username,
  };
}

export default connect(mapStateToProps)(Splash);

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backColor};
`;
