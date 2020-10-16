import {
    CheckBox,
    Dimensions,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, {Component} from 'react';
import styled, { ThemeProvider } from "styled-components/native";

import {COLORS} from '../theme/Colors.js';
import { CommonActions } from '@react-navigation/native';
import Font from '../theme/font.js';
import Header from '../../components/header/index';
import { connect } from "react-redux";
import styles from './forAdd2Style.js';

var {width, height} = Dimensions.get('window');
  
 class forAdd2 extends Component {
    renderHeader() {
      return (
          <Header 
            title="Add Contacts AIC User(s)"
            onPress={() => this.props.navigation.openDrawer()}
          />
      );
    }

    renderHeaderLine() {
      return (
          <View style={styles.TopView}>
            <View style={styles.topOne}>
              <BoldText>Contact(s) to Add </BoldText>
            </View>
            <View style={styles.toptwo}>
              <BoldText>Label (s)</BoldText>
            </View>
          </View>
      );
    }

    renderMiddle() {
      return (
        <View>
        <View style={styles.WhiteBigview} >
          <TouchableOpacity style={styles.textLeft} >
            <Text style={styles.sizeText}>[ USER NAME ]</Text>
          </TouchableOpacity>
          <View style={styles.textRigh}>
            <Text style={styles.sizeTextSmall}>
              Sport Gambling Podcast {' \n'}
              Green Inc.
            </Text>
          </View>
        </View>
        <View style={styles.WhiteBigview} >
          <TouchableOpacity style={styles.textLeft} >
            <Text style={styles.sizeText}>[ USER NAME 2 ]</Text>
          </TouchableOpacity>
          <View style={styles.textRigh}>
            <Text style={styles.sizeTextSmall}>
              Sport Gambling Podcast {' \n'}
              Green Inc.
            </Text>
          </View>
          
        </View>
        </View>
      );
    }

    // onPress={this.afterContactNavigate}
    afterContactNavigate = () => {
      this.props.navigation.dispatch(
          CommonActions.navigate({
            name: 'manuallyAddContact',
            //routes: [{ name: 'Login' }],
          })
      );
    }

  renderView() {
    return (
      <View>
        <TouchableOpacity style={styles.SmallMiddle} onPress={this.forAddContactNavigate}>
          <Text
            style={{
              fontSize: width * 0.035,
              fontFamily: Font.medium,
              fontSize: width * 0.043,
            }}>
            Add Contact
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  forAddContactNavigate = () => {
      this.props.navigation.dispatch(
          CommonActions.navigate({
            name: 'SerachEditContact',
            //routes: [{ name: 'Login' }],
          })
      );
  }

  renderLast() {
    return (
      <View style={{alignItems: 'center', flex: 1}}>
        <View
          style={{
            flex: 1,
            bottom: 30,
            position: 'absolute',
            flexDirection: 'row',
          }}>
          <TouchableOpacity style={styles.Whiteview} onPress={this.backtNavigate}>
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: Font.medium,
                fontSize: width * 0.045,
              }}>
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.WhiteviewTwo} onPress={this.finishtNavigate}>
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: Font.medium,
                fontSize: width * 0.045,
              }}>
              Finish
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  backtNavigate = () => {
      this.props.navigation.dispatch(
          CommonActions.navigate({
            name: 'afterAddContact',
            //routes: [{ name: 'Login' }],
          })
      );
  }

  finishtNavigate = () => {
    this.props.navigation.dispatch(
        CommonActions.navigate({
          name: 'SerachEditContact',
          //routes: [{ name: 'Login' }],
        })
    );
  }

  render() {
      return (
        <ThemeProvider theme={this.props.theme}>
        <Container>
 
        {/* <View style={styles.container}> */}
          {this.renderHeader()}        
          {this.renderHeaderLine()}
          {this.renderMiddle()}
          {this.renderView()}
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

const mapDispatchToProps = (dispatch) => ({
  switchTheme: bindActionCreators(switchTheme, dispatch),
});

export default connect(mapStateToProps)(forAdd2);

const Container = styled.View`
  flex: 1;

  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;
const BoldText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 17px;
  color: ${(props) => props.theme.iconColor};
`;
