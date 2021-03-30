import {
  Dimensions,
  Image,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../theme/themeProps";
import { dateOFF, dateON } from "../theme/dateProps";
import { firstNameFirst, lastNameFirst } from "../theme/nameFirstProps";
import { shortFirstName, shortLastName } from "../theme/sortNameProps";
import styled, { ThemeProvider } from "styled-components/native";

import AsyncStorage from "@react-native-community/async-storage";
import CheckBox from "@react-native-community/checkbox";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/backHeader";
import { ResponsiveSize } from "../theme/GlobalFont";
import { bindActionCreators } from "redux";
import { checkContact } from "../../action/Authactions";
import { fcmService } from '../../services/FirebaseDatabase/FCMService'
import firebase from '../../services/FirebaseDatabase/db';
import moment from "moment";
import styles from "./style.js";
import { switchContact } from "../../action/switchContactAction";
import { switchDate } from "../../action/switchDate";
import {switchName} from '../../action/switchName';
import { switchTheme } from "../../action/themeAction";

var { width, height } = Dimensions.get("window");
class display extends Component {
  state = {
    checked: false,
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
    checked7: false,
    isVisible:false,
    //notificationTime: moment(),
    dob:"",
    weddingDate:"",
    notificationTitle: 'Birthday Notification',
    notificationDescription: 'May your day is Awesome',
    notificationTitle2: 'Wedding Anniversary Notification',
    isVisibleOverlay: false,
    notifyData: {}
  };

  componentDidMount = async () => {
    
   const { username } = this.props;
    fcmService.register(this.onRegister, this.onNotification, this.onOpenNotification)
    firebase
    .firestore()
    .collection("user")
    .doc(username)
    .get()
    .then((snap) => {
      var item = snap._data;
      console.log("Wedding--->",item.weddingForNotify);
      this.setState({ dob: item.notificationTime });
      this.setState({ weddingDate: item.weddingForNotify });
      console.log("snap--->",this.state.dob);
     
    })
    
    {
      if (this.props.theme.mode === "light") {
        this.setState({ checked4: false });
        this.setState({ checked5: true });
      } else {
        this.setState({ checked4: true });
        this.setState({ checked5: false });
      }
      if (this.props.contactChange.mode === "first") {
        this.setState({ checked: false });
        this.setState({ checked1: true });
      } else {
        this.setState({ checked: true });
        this.setState({ checked1: false });
      }
      if (this.props.nameChange.mode === "firstName") {
        this.setState({ checked2: false });
        this.setState({ checked3: true });
      } else {
        this.setState({ checked2: true });
        this.setState({ checked3: false });
      }
      if (this.props.dateChange.mode === "OFF") {
        this.setState({ checked6: true });
        this.setState({ checked7: false });
      } else {
        this.setState({ checked6: false });
        this.setState({ checked7: true });
      }
    }
  };

  checkName = () => {
    if (this.state.checked2 == true) {
      this.setState({ checked2: false, checked3: true });
      this.props.switchName(firstNameFirst)
    } else {
      this.setState({ checked2: true, checked3: false });
     this.props.switchName(lastNameFirst)
    }
  };

  checkContact = () => {
    if (this.state.checked == true) {
      this.setState({ checked: false, checked1: true });
      this.props.switchContact(shortFirstName);
    } else {
      this.setState({ checked: true, checked1: false });
      this.props.switchContact(shortLastName);
    }
  };
  check = () => {
    if (this.state.checked4 == true) {
      this.setState({ checked4: false, checked5: true });
      this.props.switchTheme(lightTheme);
    } else {
      this.setState({ checked4: true, checked5: false });
      this.props.switchTheme(darkTheme);
    }
  };
  checkDate = () => {
    if (this.state.checked6 == true) {
      this.setState({ checked6: false, checked7: true });
      this.props.switchDate(dateOFF);
    } else {
      this.setState({ checked6: true, checked7: false });
      this.props.switchDate(dateON);
      this.setReminder();
      this.setReminder2();
    }
  };
  // For birthday Notification

  onRegister = (token) => {
    console.log("[Notification fcm ] onRegister:", token)
  }

  onNotification = (notify) => {
    console.log("[Notification fcm ] : onNotification:", notify)
    const notification = fcmService.buildNotification(this.createNotification(notify))
    fcmService.displayNotification(notification)
  }

  onOpenNotification = (notify) => {
    console.log("[Notification fcm ] : onOpenNotification ", notify)
    this.setState({ notifyData: notify._data }, () => this.setState({ isVisibleOverlay: true }))
  }

  setReminder = () => {
     const {dob} = this.state;
    const { notificationDescription, notificationTitle } = this.state
    let body = {
      _title: notificationTitle,
      _body: notificationDescription,
      _data: {
        title: notificationTitle,
        body: notificationDescription,
      },
      _notificationId: Math.random().toString(),
      time: dob
    }
    this.scheduleReminder(body)
     
  
  };
  setReminder2 = () => {
    const {weddingDate} = this.state;
    const { notificationDescription, notificationTitle2 } = this.state
    let body = {
      _title: notificationTitle2,
      _body: notificationDescription,
      _data: {
        title: notificationTitle2,
        body: notificationDescription,
      },
      _notificationId: Math.random().toString(),
      time: weddingDate
    }
    this.scheduleReminder(body)
  };
  scheduleReminder = (notifyDetails) => {
    const notification = fcmService.buildNotification(this.createNotification(notifyDetails))
    fcmService.scheduleNotification(notification, notifyDetails.time)
    this.resetState()
  }
  createNotification = (notify) => {
    const channelObj = {
      channelId: "SmapleChannelID",
      channelName: "SmapleChannelName",
      channelDes: "SmapleChannelDes"
    }
    const channel = fcmService.buildChannel(channelObj)
    const buildNotify = {
      title: notify._title,
      content: notify._body,
      sound: 'default',
      channel: channel,
      data: notify._data,
      colorBgIcon: "#1A243B",
      largeIcon: 'ic_launcher',
      smallIcon: 'ic_launcher',
      vibrate: true,
      dataId: notify._notificationId
    }
    return buildNotify
  }

  resetState = () => {
    this.setState({
      dob: moment(),
      notificationTitle2:moment(),
      notificationTitle: '',
      notificationTitle2: '',
      notificationDescription: ''
    })
  }
 //For birthday Notification finish
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
        <Container>
          <Header
            title="Display"
            onPress={() => this.props.navigation.navigate("SerachEditContact")}
          />
          <View style={styles.middleView}>
            <TouchableOpacity style={styles.FirstView}>
              <BoldText>Sort Contacts by:</BoldText>
              
              <View style={styles.checkView}>
                <CheckBox
                  value={this.state.checked}
                  onValueChange={this.checkContact}
                  tintColors={{ true: "#1374A3", false: "#1374A3" }}
                />
                <NormalText>First Name</NormalText>
              </View>
              <View style={styles.checkViewtwo}>
                <CheckBox
                  value={this.state.checked1}
                  onValueChange={this.checkContact}
                  tintColors={{ true: "#1374A3", false: "#1374A3" }}
                />
                <NormalText>Last Name</NormalText>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.FirstView}
            >
              <BoldText>Display Contact's Name by</BoldText>
              <View style={styles.checkView}>
                <CheckBox
                  value={this.state.checked2}
                  onValueChange={this.checkName}
                  tintColors={{ true: "#1374A3", false: "#1374A3" }}
                />
                <NormalText>First Name First</NormalText>
              </View>
              <View style={styles.checkViewtwo}>
                <CheckBox
                  value={this.state.checked3}
                  onValueChange={this.checkName}
                  tintColors={{ true: "#1374A3", false: "#1374A3" }}
                />
                <NormalText>Last Name First</NormalText>
              </View>
            </TouchableOpacity>
            <View style={styles.FirstView}>
              <BoldText>Night Mode</BoldText>
              <TouchableOpacity style={styles.checkView}>
                <CheckBox
                  value={this.state.checked4}
                  onValueChange={this.check}
                  tintColors={{ true: "#1374A3", false: "#1374A3" }}
                />
                <NormalText>On</NormalText>
              </TouchableOpacity>
              <View style={styles.checkViewtwo}>
                <CheckBox
                  value={this.state.checked5}
                  onValueChange={this.check}
                  tintColors={{ true: "#1374A3", false: "#1374A3" }}
                />
                <NormalText>Off</NormalText>
              </View>
            </View>
            <View style={styles.FirstView}>
              <BoldText>Export Dates to Calendar</BoldText>
              <View style={styles.checkView}>
                <CheckBox
                  value={this.state.checked6}
                  onValueChange={this.checkDate}
                  tintColors={{ true: "#1374A3", false: "#1374A3" }}
                />
                <NormalText>On</NormalText>
              </View>
              <View style={styles.checkViewtwo}>
                <CheckBox
                  value={this.state.checked7}
                  onValueChange={this.checkDate}
                  tintColors={{ true: "#1374A3", false: "#1374A3" }}
                />
                <NormalText>Off</NormalText>
              </View>
            </View>
          </View>
        </Container>
      </ThemeProvider>
    );
  }
}
function mapStateToProps(state) {

  console.log("State from display--->", state.switchDateReducer.dateChange);
  return {
    theme: state.themeReducer.theme,
    contactChange: state.sortContactsReducer.contactChange,
    nameChange:state.switchNameReducer.nameChange,
    dateChange:state.switchDateReducer.dateChange,
    username:state.login.shouldLoadData.username || state.reg.shouldLoadData.username,

  };
}

const mapDispatchToProps = (dispatch) => ({
  switchTheme: bindActionCreators(switchTheme, dispatch),
  switchContact: bindActionCreators(switchContact, dispatch),
  switchName : bindActionCreators(switchName,dispatch),
  switchDate: bindActionCreators(switchDate,dispatch),

});

export default connect(mapStateToProps, mapDispatchToProps)(display);

const Container = styled.SafeAreaView`
  flex: 1;

  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;
const NormalText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 17px;
  color: ${(props) => props.theme.textColor};
`;
const BoldText = styled.Text`
  font-family: Roboto-Bold;
  font-size: 17px;
  color: ${(props) => props.theme.textColor};
`;

