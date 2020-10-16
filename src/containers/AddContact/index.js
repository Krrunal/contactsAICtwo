import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import { darkTheme, lightTheme } from "../theme/themeProps";
import styled, { ThemeProvider } from "styled-components/native";

import { CommonActions } from '@react-navigation/native';
import Header from '../../components/header/index';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {createDrawerNavigator} from '@react-navigation/drawer';
import styles from './style';
import { switchTheme } from "../../action/themeAction";

var {width, height} = Dimensions.get('window');

class Add extends Component {

  renderHeader() {
    return (
        <Header 
          title="Add Contact(s)"
          onPress={() => this.props.navigation.openDrawer()}
        />
    );
  }

  renderFirst() {
    return (
      <TouchableOpacity style={styles.buttonView} onPress={this.addContactNavigate}>
        <Text style={styles.text}>Add Contacts AIC User(s)</Text>
      </TouchableOpacity>
    );
  }

  addContactNavigate = () => {
    this.props.navigation.dispatch(
        CommonActions.navigate({
          name: 'chooseContactFromLabel',
          //routes: [{ name: 'Login' }],
        })
    );
  }

  renderSecond() {
    return (
      <TouchableOpacity style={styles.buttonView} onPress={this.importmanuallyNavigate}>
        <Text style={styles.text}>Add Contact Manually</Text>
      </TouchableOpacity>
    );
  }

  // manuallyAddContact
  importmanuallyNavigate = () => {
    this.props.navigation.dispatch(
        CommonActions.navigate({
          name: 'addmanuallyContact',
          //routes: [{ name: 'Login' }],
        })
    );
  }

  renderThird() {
    return (
      <TouchableOpacity style={styles.buttonView}>
        <Text style={styles.text} onPress={this.importNavigate} >
          Import Contact(s) From My Device</Text>
      </TouchableOpacity>
    );
  }

  importNavigate = () => {
    this.props.navigation.dispatch(
        CommonActions.navigate({
          name: 'ImportContacts',
          //routes: [{ name: 'Login' }],
        })
    );
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
      <View style={styles.container}>
      <Container>

        {this.renderHeader()}
        <View style={{ marginTop: height * 0.2, flex: 1}}>
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
const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
});

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
