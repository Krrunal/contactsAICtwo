import * as actions from "../../action";

/* eslint-disable no-undef */
// eslint-disable-next-line prettier/prettier
import {
  CheckBox,
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";
import {Root, Toast} from 'native-base';
// import { showToastError, validateEmail } from "../../action/Validation";
import styled, { ThemeProvider } from "styled-components/native";
import { COLORS } from "../theme/Colors.js";
import GeneralStatusBar from "../../components/StatusBar/index";
import Icon from "react-native-vector-icons/FontAwesome";
import { InputCard } from "../../components/InputCard";
import { TouchableHighlight } from "react-native-gesture-handler";
import { bindActionCreators } from "redux";
import checked from "../../assets/icons/checked.png";
import { connect } from "react-redux";
import innerimg from "../../assets/images/innerimg.png";
import logo from "../../assets/images/logo.png";
import styles from "./style.js";
import unchecked from "../../assets/icons/unchecked.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      isKeyboardVisible: false,
      show: true,
      phone_number: "",
      password: "",
      checkedOff: false,
      email: "",
    };
  }

  componentDidMount = () => {
    {
      if (this.props.theme.mode === "light") {
        this.setState({ checked4: false });
        this.setState({ checked5: true });
      } else {
        this.setState({ checked4: true });
        this.setState({ checked5: false });
      }
    }
  };

  showPassword = () => {
    this.state.show == true
      ? this.setState({ show: false })
      : this.setState({ show: true });
  };

  check = () => {
    this.state.checkedOff == false
      ? this.setState({ checkedOff: true })
      : this.setState({ checkedOff: false });
  };

  navigate = () => {
    this.props.navigation.navigate('Signup')
  };

  loginUser = () => {
    const { email, password } = this.props;
    email == "" ? this.setState({unameError: "Please enter username"}) : this.setState({unameError: ""});
    password == "" ? this.setState({passwordError: "Please enter password"}) : this.setState({passwordError: ""});
    if(email && password) {
      this.props.loginUser();
    }
  };

  onSubmit(value) {
    switch (value) {
      case "email":
        this.refs.emailCont.refs.email.focus();
        break;

      case "password":
        this.refs.LoginpasswordCont.refs.password.focus();
        break;
    }
    console.log(value);
  }

  render() {
    const { email, password, loginEmailChange, loginPassChange } = this.props;

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

        <Container>
          <ScrollView>
          <Root>
            <View style={styles.container}>
            
              <View style={styles.headerView}>
                <Image source={logo} style={styles.logoImg} />
                <Text style={styles.logoText}>CONTACTS AIC</Text>
              </View>
              <View style={styles.viewEmail}>
                <InputCard
                  onChangeText={loginEmailChange}
                  blurOnSubmit={false}
                  autoCapitalize={true}
                  ref={"emailCont"}
                  inputRef={"email"}
                  onSubmitEditing={(email) => this.onSubmit("email")}
                  value={email}
                  returnKey={"next"}
                  keyboardType={"email-address"}
                  secureEntry={false}
                  placeholder={"Email"}
                ></InputCard>
              </View>
              {this.state.unameError == undefined || this.state.unameError == "" 
                ? null : <Text style={styles.error}>{this.state.unameError}</Text> }

              <View style={styles.viewPassword}>
                <InputCard
                  onChangeText={loginPassChange}
                  blurOnSubmit={false}
                  autoCapitalize={true}
                  ref={"LoginpasswordCont"}
                  inputRef={"password"}
                  onSubmitEditing={(password) => this.onSubmit("password")}
                  value={password}
                  returnKey={"done"}
                  keyboardType={"default"}
                  secureEntry={this.state.show}
                  placeholder={"Password"}
                ></InputCard>

                <View style={styles.eyeView}>
                  <TouchableHighlight
                    underlayColor="transparent"
                    onPress={this.showPassword}
                  >
                    {this.state.show == false ? (
                      <Icon
                        name="eye"
                        size={18}
                        color={COLORS.main_text_color}
                      />
                    ) : (
                      <Icon
                        name="eye-slash"
                        size={18}
                        color={COLORS.main_text_color}
                      />
                    )}
                  </TouchableHighlight>
                </View>
              </View>
              {this.state.passwordError == undefined || this.state.passwordError == "" 
                ? null : <Text style={styles.error}>{this.state.passwordError}</Text> }

              <TouchableOpacity
                style={styles.viewLogin}
                onPress={this.loginUser}
              >
                <Text style={styles.loginText}>Log In</Text>
              </TouchableOpacity>
              <View style={styles.rememberView}>
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={this.check}
                >
                  {this.state.checkedOff == true ? (
                    <View style={styles.checkView}>
                      <Image source={checked} style={styles.checkedStyle} />
                    </View>
                  ) : (
                    <View style={styles.checkView}></View>
                    // <Image source={unchecked} style={styles.uncheckedStyle} />
                  )}
                </TouchableHighlight>
                {/* <CheckBox
          value={this.state.checked}
          onValueChange={() => this.setState({checked: !this.state.checked})}
          tintColors={{true: '#1374A3', false: '#000'}}
        /> */}
                <Text style={styles.rememberText}>Remember Me</Text>
              </View>
              <View style={styles.lineStyle}>
                <View style={styles.lineView}></View>
                <Text style={styles.orText}>OR </Text>
                <View style={styles.lineViewTwo}></View>
              </View>
              <TouchableOpacity
                style={styles.signupInlogin}
                onPress={this.navigate}
              >
                <Text style={styles.loginText}>SIGN UP</Text>
                
              </TouchableOpacity>
            
            </View>
            </Root>
          </ScrollView>
        </Container>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    response: state.login.response,
    theme: state.themeReducer.theme,
    email: state.login.email,
    password: state.login.password,
    loader: state.login.loader,
  };
}

export default connect(mapStateToProps, actions)(Login);

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;
const ScrollView = styled.ScrollView`
  color: ${(props) => props.theme.textColor};
  flex: 1;
`;