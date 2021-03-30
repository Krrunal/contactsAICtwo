import * as actions from "../../action";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";
import { darkTheme, lightTheme } from "../theme/themeProps";
import styled, { ThemeProvider } from "styled-components/native";
import AsyncStorage from "@react-native-community/async-storage";
import { COLORS } from "../theme/Colors.js";
import CheckBox from "@react-native-community/checkbox";
import Constants from "../../action/Constants";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/backHeader";
import Icon from "react-native-vector-icons/FontAwesome5";
import Metrics from "../theme/Metrics";
import { Spinner } from "../../components/Spinner";
import Toast from "react-native-easy-toast";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import plus from "../../assets/images/plus.png";
import styles from "./aftreMultiplReqSendStyle.js";
import { switchTheme } from "../../action/themeAction";

var { width, height } = Dimensions.get("window");

class aftreMultiplReqSend extends Component {
  state = {
    u_name1: "",
    u_name2: "",
    u_name3: "",
    u_name4: "",
    isLoading: false,
  };
  async componentDidMount() {
    this.setState({
      u_name1: await AsyncStorage.getItem("@u_name1"),
      u_name2: await AsyncStorage.getItem("@u_name2"),
      u_name3: await AsyncStorage.getItem("@u_name3"),
      u_name4: await AsyncStorage.getItem("@u_name4"),
    });
  }
    renderHeader() {
        return (
          <Header
            title="Add Contacts AIC User"
            onPress={() => this.props.navigation.navigate("forAdd2")}
          />
        );
      }
      forAddContactNavigate() { 
         this.props.navigation.navigate("AddContact");
      }
      renderLast() {
        return (
          <View style={{ alignItems: "center", flex: 1 }}>
            <View
              style={{
                flex: 1,
                bottom: 40,
                position: "absolute",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                style={styles.SmallMiddle}
                onPress={() => this.forAddContactNavigate()}
              >
                <Text
                  style={{
                    color: COLORS.main_text_color,
                    fontFamily: Font.medium,
                    fontSize: width * 0.045,
                  }}
                >
                 OK
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }
      renderMiddle(){
        const { u_name1, u_name2, u_name3, u_name4 } = this.state;
          return(
            <View style={{ alignItems: "center" }}>
            <View style={styles.middle}>
            <Text style={[styles.uperText,{color:this.props.theme.mode == "light" ? COLORS.main_text_color : COLORS.white}]}>
              {u_name1}
              </Text>
              {u_name2 !== null ? ( 
                  <Text style={[styles.uperText,{color:this.props.theme.mode == "light" ? COLORS.main_text_color : COLORS.white}]}>
                  {u_name2}
                  </Text>
                  
               ) : null}
                 {u_name3 !== null ? ( 
                  <Text style={[styles.uperText,{color:this.props.theme.mode == "light" ? COLORS.main_text_color : COLORS.white}]}>
                  {u_name3}
                  </Text>
                  
               ) : null}
                 {u_name3 !== null ? ( 
                  <Text style={[styles.uperText,{color:this.props.theme.mode == "light" ? COLORS.main_text_color : COLORS.white}]}>
                  {u_name3}
                  </Text>
                  
               ) : null}
            </View> 
           
           
            
            </View>
          );
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
    
            <View style={{ flex: 1 }}>
              <Container>
                {this.renderHeader()}
               
                <View style={{ alignItems: "center" }}>
                  <View style={styles.uperView}>
                    <Text style={[styles.uperText,{color:this.props.theme.mode == "light" ? COLORS.main_text_color : COLORS.white}]}>
                       Requests Were Sent To The Following Contacts AIC Users
                    </Text>
                  </View>
                </View>
                {this.renderMiddle()}
                {this.renderLast()}
              </Container>
             
            </View>
          </ThemeProvider>
        );
      }
    }
    const mapStateToProps = (state) => ({
     
      theme: state.themeReducer.theme,
      username: state.login.shouldLoadData.username,
      user_id: state.login.shouldLoadData.user_id,
    });
    
    
    export default connect(mapStateToProps,actions)(aftreMultiplReqSend);
    
    const Container = styled.View`
      flex: 1;
      width: 100%;
      /* align-items: center; */
      background-color: ${(props) => props.theme.backColor};
    `;
    const NormalText = styled.Text`
      font-family: Roboto-Light;
      font-size: 15px;
      color: ${(props) => props.theme.textColor};
      text-transform: capitalize;
    `;
    