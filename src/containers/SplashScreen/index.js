import * as React from "react";
import * as action from "../../action";

import { BackHandler, Dimensions, Image, Text, View } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";
import { darkTheme, lightTheme } from "../theme/themeProps";
import styled, { ThemeProvider } from "styled-components/native";

import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import NetInfo from "@react-native-community/netinfo";
import Toast from "react-native-easy-toast";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import firebase from "../../services/FirebaseDatabase/db";
import styles from "./style";
import { switchTheme } from "../../action/themeAction";

var { width, height } = Dimensions.get("window");
class Splash extends React.Component {
  state = {
    isFirebaseLogin: "",
  };
  
  backAction = () => {
    BackHandler.exitApp();
    return true;
  };

  async componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backAction);
   
        this.timeoutHandle = setTimeout(async () => {
          this.props.isLogedIn == false
            ? this.props.navigation.reset(
                [NavigationActions.navigate({ routeName: "Login" })],
                0
              )
            : 
         
                this.props.navigation.reset(
                [NavigationActions.navigate({ routeName: "AddContact" })],
                0
                )
           
        }, 2000);
      
 
   
}
componentWillUnmount() {
  BackHandler.removeEventListener("hardwareBackPress", this.backAction);
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
            <Toast
                ref="toast"
                style={{
                  backgroundColor:
                    this.props.theme.mode === "light" ? "black" : "white",
                  width: width * 0.9,
                  alignItems: "center",
                }}
                position="bottom"
                positionValue={200}
                fadeInDuration={1000}
                fadeOutDuration={1000}
                opacity={1}
                textStyle={{
                  color: this.props.theme.mode === "light" ? "white" : "black",
                  fontFamily: Font.medium,
                  fontSize: width * 0.04,
                  padding: 7,
                }}
              />
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
