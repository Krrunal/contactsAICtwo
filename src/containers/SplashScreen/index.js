import * as React from "react";

import { Image, Text, View } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { StackActions, NavigationActions } from 'react-navigation';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import GeneralStatusBar from "../../components/StatusBar/index";
import { darkTheme, lightTheme } from "../theme/themeProps";
import styles from "./style";
import { switchTheme } from "../../action/themeAction";
import * as action from '../../action';

class Splash extends React.Component {
  async componentDidMount() {
    this.timeoutHandle = setTimeout(async () => {
      this.props.isLogedIn == false 
        ? this.props.navigation.reset(
        [NavigationActions.navigate({ routeName: 'Login' })] ,0)
        : this.props.navigation.reset(
          [NavigationActions.navigate({ routeName: 'AddContact' })] ,0)
      // this.props.navigation.navigate('Login')
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
    // nav: state.nav,
    theme: state.themeReducer.theme,
    isLogedIn: state.login.shouldLoadData
  }
}

export default connect(mapStateToProps)(Splash);

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backColor};
`;
