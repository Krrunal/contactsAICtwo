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
    Linking
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
  
  class QRScanner extends Component {
  
    state = {
      // data: [],
    }

    onSuccess = async e => {
        // Linking.openURL(e.data).catch(err =>
          // console.error('An error occured', e.data)
        // );
        this.props.navigation.dispatch(
          CommonActions.navigate('QRDetail',{
            name: "QRDetail",
            scanner: this.scanner,
            data: e.data,
            //routes: [{ name: 'Login' }],
          })
        );

    };

    renderCamera() {
        return(
        <View style={{width: width, height: height}}> 
        <QRCodeScanner
            onRead={this.onSuccess}
            // flashMode={RNCamera.Constants.FlashMode.torch}
            // topContent={
            // <Text style={{borderWidth: 2, color: 'black'}}>
            //     Go to{' '}
            //     <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            //     your computer and scan the QR code.
            // </Text>
            // }
            reactivate={true}
            showMarker={true}
            checkAndroid6Permissions={true}
            // cameraStyle={{ height: height * 0.5}}
        />
        </View>
        )
    }

    // renderMiddle() {
    //   return (
    //     <View style={styles.mainView}>
    //     </View>
    //   );
    // }
   
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
  
  export default connect(mapStateToProps)(QRScanner);
  
  const Container = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    background-color: ${(props) => props.theme.backColor};
  `;
  