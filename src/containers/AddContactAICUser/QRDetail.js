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
    Linking,
    Button
  } from "react-native";
  import React, { Component } from "react";
  import { darkTheme, lightTheme } from "../theme/themeProps";
  import styled, { ThemeProvider } from "styled-components/native";
  
  import { COLORS } from "../theme/Colors.js";
  import { CommonActions } from "@react-navigation/native";
  import Font from "../theme/font.js";
  import Header from "../../components/header/index";
  import Metrics from "../theme/Metrics";
  import { bindActionCreators } from "redux";
  import { connect } from "react-redux";
  import styles from "./manuallyAddContactStyle.js";
  import { switchTheme } from "../../action/themeAction";
  import QRCodeScanner from 'react-native-qrcode-scanner';
  import { RNCamera } from 'react-native-camera';

  var { width, height } = Dimensions.get("window");
  
  class QRDetail extends Component {
  
    state = {
        qrCodeData: '',
        scanner: ''
    }

    componentDidMount() {
        // alert(this.props.route.params.data)
        // const qrCodeData = this.props.route.params.data;
        // const scanner = this.props.route.params.scanner;
        this.setState({ 
            qrCodeData: this.props.route.params.data, 
            scanner: this.props.route.params.scanner 
        });
    }

    scanQRCodeAgain() {
        this.setState({qrCodeData: '', scanner: '' })
        this.props.navigation.dispatch(
            CommonActions.navigate({
              name: "QRScanner",
              //routes: [{ name: 'Login' }],
            })
          );
      }

    renderCamera() {
        return(
        <View style={{width: width, height: height*0.6, alignItems: 'center', justifyContent: 'center'}}> 
        <Text style={styles.text}>{this.props.route.params.data}</Text>
        <Button
          title={"Scan QRCode Again"}
          onPress={() => this.scanQRCodeAgain()}
        />
        </View>
        )
    }

    render() {
      return (
        <ThemeProvider theme={this.props.theme}>
          <Container>
            {this.renderCamera()}
            {/* {this.renderMiddle()} */}
          </Container>
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
  
  export default connect(mapStateToProps)(QRDetail);
  
  const Container = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    background-color: ${(props) => props.theme.backColor};
  `;
  