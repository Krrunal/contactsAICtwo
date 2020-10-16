import * as React from 'react';

import { Image, Text, View } from 'react-native';
import { darkTheme, lightTheme } from "../theme/themeProps";
import styled, { ThemeProvider } from "styled-components/native";

import {CommonActions} from '@react-navigation/native';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styles from './style';
import { switchTheme } from "../../action/themeAction";

class Splash extends React.Component {
    async componentDidMount() {
        this.timeoutHandle = setTimeout(async() => {
            this.props.navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                })
            );
        }, 2000);
    }

    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                      
            <View style={styles.container}>
            <Container>

                {/* <GeneralStatusBar backgroundColor={Colors.transparent} barStyle="light-content" /> */}
                <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
                <View style={styles.nameView}>
                    <Text style={styles.text}> CONTACTS AIC </Text>
                </View>
                </Container>
            </View>
            </ThemeProvider>
        );
    }
}



const mapStateToProps = (state) => ({
    theme: state.themeReducer.theme,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    switchTheme: bindActionCreators(switchTheme, dispatch),
  });
  
  export default connect(mapStateToProps)(Splash);
  
  const Container = styled.View`
    flex: 1;
  
    width: 100%;
    align-items: center;
    justify-Content: center;
    background-color: ${(props) => props.theme.backColor};
  `;

