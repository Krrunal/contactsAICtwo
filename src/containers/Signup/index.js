import {
  FlatList,
  Image,
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";
import { darkTheme, lightTheme } from "../theme/themeProps";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import { CommonActions } from "@react-navigation/native";
import Font from "../theme/font.js";
import Icon from "react-native-vector-icons/FontAwesome";
import IntlPhoneInput from "react-native-intl-phone-input";
import Metrics from "../theme/Metrics";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import iSqure from "../../assets/icons/iSquare.png";
import logo from "../../assets/images/logo.png";
import styles from "./style.js";
import { switchTheme } from "../../action/themeAction";

class Signup extends Component {
  state = {
    checked: false,
    isKeyboardVisible: false,
    show: false,
    showRender: false,
    isPassModelOpen: false,
    passwordInfo: [
      { info: "1) Eight characters." },
      { info: "2) Two lowercase letters." },
      { info: "3) Two uppercase letters." },
      { info: "4) Two special characters." },
      { info: "5) Two numbers." },
    ],
  };

  renderHeader() {
    return (
      <View style={{ paddingBottom: Metrics.ratio(10) }}>
        <View style={styles.headerView}>
          <Image source={logo} style={styles.logoStyle} />
          <Text style={styles.logoText}>SIGN UP</Text>
        </View>
      </View>
    );
  }

  renderMobileNumber() {
    return (
      <View>
        <View style={styles.userText}>
          <BoldBlack>*Phone number :</BoldBlack>
          <View style={styles.RigthView}>
            <Image
              source={require("../../assets/icons/iSquare.png")}
              style={styles.infoIcon}
            />
            <CountryText>Lookup Country Code</CountryText>
          </View>
        </View>
        <View style={styles.numberView}>
          <IntlPhoneInput
            containerStyle={{ backgroundColor: COLORS.main_sky_blue }}
            phoneInputStyle={styles.mobileInputText}
            dialCodeTextStyle={styles.mobileInputText}
            defaultCountry="IN"
          />
        </View>
      </View>
    );
  }

  renderuserName() {
    return (
      <View>
        <View style={styles.userText}>
          <BoldBlack>*Username :</BoldBlack>
        </View>
        <View style={styles.mobileView}>
          <TextInput
            placeholderTextColor={COLORS.main_text_color}
            style={styles.textInputViewSignup}
            keyboardType="default"
          />
        </View>
        {/* <Text style={styles.downText}>Username <Text style={{color: COLORS.green, fontSize: 10}}>IS</Text> available</Text>
        <Text style={styles.downText}>
          Username <Text style={{color: COLORS.red, fontSize: 10}}>IS NOT</Text>{' '}
          available
        </Text> */}
      </View>
    );
  }

  renderEmail() {
    return (
      <View>
        <View style={styles.userText}>
          <BoldBlack>E-mail :</BoldBlack>
        </View>
        {/* <View style={styles.userView}>
          <TextInput
            placeholderTextColor={COLORS.main_text_color}
            style={styles.textInputViewSignup}
          />
        </View> */}
        <View style={styles.mobileView}>
          <TextInput
            placeholderTextColor={COLORS.main_text_color}
            style={styles.textInputViewSignup}
            keyboardType="email-address"
          />
        </View>
      </View>
    );
  }

  passwordInfo({ item, index }) {
    return (
      <View>
        <Text> {item.info} </Text>
      </View>
    );
  }

  renderPassword() {
    return (
      <View>
        <View style={styles.userText}>
          <BoldBlack>*Password :</BoldBlack>
          <View style={styles.RigthView}>
            <TouchableWithoutFeedback
              onPress={() => this.setState({ isPassModelOpen: true })}
              style={{ flexDirection: "row" }}
            >
              <RightImage source={iSqure} />
              <CountryText>Password Requirements</CountryText>
            </TouchableWithoutFeedback>
          </View>
        </View>

        <View style={styles.passView}>
          <TextInput
            placeholderTextColor={COLORS.main_text_color}
            style={styles.textInputViewSignup}
            autoCapitalize="none"
            placeholder=" "
            keyboardType="default"
            secureTextEntry={this.state.show == false ? true : false}
            value={this.state.password}
          />

          <View style={styles.eyeView}>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={this.showPassword}
            >
              {this.state.show == false ? (
                <Icon
                  name="eye-slash"
                  size={18}
                  color={COLORS.main_text_color}
                />
              ) : (
                <Icon name="eye" size={18} color={COLORS.main_text_color} />
              )}
            </TouchableHighlight>
          </View>
        </View>
        <NormalText>Used for password / username recovery</NormalText>

        <Modal
          visible={this.state.isPassModelOpen}
          transparent={true}
          style={styles.footerModal}
          // onBackPress={() => this.setState({ isPassModelOpen: false })}
        >
          <View style={styles.contactContent}>
            <View style={styles.popupHeader}>
              <TouchableHighlight
                onPress={() => this.setState({ isPassModelOpen: false })}
              >
                <Icon name="times" size={25} />
              </TouchableHighlight>
            </View>
            <BoldBlack> Password must contain: </BoldBlack>

            <FlatList
              refreshing={true}
              keyExtractor={(item, index) => index.toString()}
              data={this.state.passwordInfo}
              extraData={this.state}
              numColumns={1}
              renderItem={this.passwordInfo.bind(this)}
              // scrollEnabled={true}
              style={styles.flatlist}
              // showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps={"always"}
            />
          </View>
        </Modal>
      </View>
    );
  }

  showPassword = () => {
    this.state.show == false
      ? this.setState({ show: true })
      : this.setState({ show: false });
  };

  showrenderPassword = () => {
    this.state.showRender == false
      ? this.setState({ showRender: true })
      : this.setState({ showRender: false });
  };

  renderReEnterPassword() {
    return (
      <View>
        <View style={styles.userText}>
          <BoldBlack>*Re-Enter Password :</BoldBlack>
        </View>
        <View style={styles.passView}>
          <TextInput
            placeholderTextColor={COLORS.main_text_color}
            style={styles.textInputViewSignup}
            secureTextEntry={this.state.showRender == false ? true : false}
          />
          <View style={styles.eyeView}>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={this.showrenderPassword}
            >
              {this.state.showRender == false ? (
                <Icon
                  name="eye-slash"
                  size={18}
                  color={COLORS.main_text_color}
                />
              ) : (
                <Icon name="eye" size={18} color={COLORS.main_text_color} />
              )}
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }

  renderSubmitView() {
    return (
      <TouchableOpacity style={styles.submitView} onPress={this.navigate}>
        <Text style={styles.submitText}>SUBMIT</Text>
      </TouchableOpacity>
    );
  }

  navigate = () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: "AddContact",
        //routes: [{ name: 'Login' }],
      })
    );
  };

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
     
          <ScrollView>
          <Container>
            {this.renderHeader()}
            {this.renderMobileNumber()}
            {this.renderuserName()}
            {this.renderEmail()}
            {this.renderPassword()}
            {this.renderReEnterPassword()}
            {this.renderSubmitView()}
            </Container>
          </ScrollView>
      
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
});

export default connect(mapStateToProps)(Signup);

const Container = styled.View`
  flex: 1;

  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
  justify-content: center;
`;
const NormalText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 10px;
  color: ${(props) => props.theme.textColor};
  margin-left:20px;
  margin-Top:2px;
`;

const ScrollView = styled.ScrollView`
  color: ${(props) => props.theme.textColor};
  flex: 1;
`;
const CountryText = styled.Text`
  font-size: 8px;
  margin-left: 5px;
  font-family: Roboto-Medium;
  font-size: 8px;
  color: ${(props) => props.theme.iconColor};

`;
const RightImage = styled.Image`
  width: 10px;
  height: 10px;
  align-self: center;
  
`;
const BoldBlack = styled.Text`
  font-family: Roboto-Medium;
  font-size: 17px;
  color: ${(props) => props.theme.iconColor};
`;