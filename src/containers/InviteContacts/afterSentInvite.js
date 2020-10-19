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
} from 'react-native';
import React, {Component, useState} from 'react';
import styled, { ThemeProvider } from "styled-components/native";

import {COLORS} from '../theme/Colors.js';
import {CommonActions} from '@react-navigation/native';
import Font from '../theme/font';
import Header from '../../components/header';
import Metrics from '../theme/Metrics';
import { connect } from "react-redux";
import styles from './style.js';

var {width, height} = Dimensions.get('window');
class afterSentInvite extends Component {
  
  renderHeader() {
    return (
        <Header 
          title="Invite Contacts"
          onPress={() => this.props.navigation.openDrawer()}
        />
    );
  }
  
  renderLast() {
    return (
      <View style={{alignItems: 'center', marginTop: Metrics.doubleBaseMargin}}>
          <TouchableOpacity style={styles.Whiteview}  onPress={this.invitenavigate}>
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: Font.medium,
                fontSize: width * 0.045,
              }}>
              OK
            </Text>
          </TouchableOpacity>
      </View>
    );
  }

  oknavigate = () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: 'Invite',
        //routes: [{ name: 'Login' }],
      }),
    );
  };

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
      <Container>

        {this.renderHeader()}
        <NormalText> Invite(s) Sent </NormalText>
        {this.renderLast()}
   
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

export default connect(mapStateToProps)(afterSentInvite);

const Container = styled.View`
  flex: 1;

  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;
const NormalText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 17px;
  color: ${(props) => props.theme.iconColor};
  margin-top:40px
`;