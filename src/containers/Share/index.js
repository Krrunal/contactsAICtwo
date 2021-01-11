import * as action from '../../action';

import {
Button,
Dimensions,
Text,
TextInput,
TouchableOpacity,
View
} from "react-native";
import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import DateTimePicker from 'react-native-modal-datetime-picker';
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import QRCode from "react-native-qrcode-svg";
import { connect } from "react-redux";
import { fcmService } from '../../services/FirebaseDatabase/FCMService';
import moment from 'moment';
import styles from "./style.js";

var { width, height } = Dimensions.get("window");

class Share extends Component {
  constructor(props) {
    super(props);
    this.state = {
    isDateTimePickerVisible: false,
    notificationTime: moment(),
    notificationTitle: '',
    notificationDescription: '',
    isVisibleOverlay: false,
    notifyData : {}
  };
  }
  componentDidMount() {
    fcmService.register(this.onRegister, this.onNotification, this.onOpenNotification)
  }
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

    const { notificationTime } = this.state;
    const { notificationDescription, notificationTitle } = this.state
    let body = {
      _title: notificationTitle,
      _body: notificationDescription,
      _data: {
        title: notificationTitle,
        body: notificationDescription,
      },
      _notificationId: Math.random().toString(),
      time: notificationTime
    }
    this.scheduleReminder(body)
     alert('Your Remider Set SuccessFully.');
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
      notificationTime: moment(),
      notificationTitle: '',
      notificationDescription: ''
    })
  }

  displayDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  closeDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handlePicked = async (date) => {
   this.closeDateTimePicker();
    this.setState({
      notificationTime: moment(date),
    });

 };

  handleValueChange = (value, name) => {
    this.setState({
      [name]: value
    })
  }
  renderHeader() {
    return (
      <Header
        title="Share"
        onPress={() => this.props.navigation.toggleDrawer()}
      />
    );
  }
renderView(){
  const {notifyData,notificationTime,notificationTitle,notificationDescription,isDateTimePickerVisible}=this.state;
  return(
  <View style={styles.container}>
        <View style={styles.cardTitleView}>
          <Text style={styles.cardTitle}>Add Reminder</Text>
        </View>
        <TouchableOpacity  onPress={this.displayDateTimePicker} style={{width:250,borderWidth:1}}>
             <Text style={{ opacity: 0.7 }}>{moment(notificationTime).format('LT')}</Text>
        </TouchableOpacity>
        {/* <ListItem
          title="Time"
          titleStyle={styles.titleStyle}
          onPress={this.displayDateTimePicker}
          rightElement={<Text style={{ opacity: 0.7 }}>{moment(notificationTime).format('LT')}</Text>}
        /> */}
        <View style={styles.titleView}>
          <TextInput
            style={styles.titleinput}
            value={notificationTitle}
            onChangeText={(text) => this.handleValueChange(text, 'notificationTitle')}
            placeholder="Title"
          />
          <TextInput
            multiline={true}
            numberOfLines={3}
            style={styles.titleinput}
            value={notificationDescription}
            onChangeText={(text) => this.handleValueChange(text, 'notificationDescription')}
            placeholder="Description"
          />
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
          <Button
            title="Add reminder"
            buttonStyle={{ width: 200, height: 40 }}
            onPress={() => this.setReminder()}
          />
        </View>
        <View
          style={{ flex: 1 }}
          isVisible={this.state.isVisibleOverlay}
          onBackdropPress={() => this.closeOverLay()}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ margin: 20, fontSize: 20, fontWeight: '600' }}>{notifyData && notifyData.title}</Text>
            <Text style={{ margin: 20, fontSize: 16 }}>{notifyData && notifyData.body}</Text>
          </View>
        </View>
        <DateTimePicker
          isVisible={isDateTimePickerVisible}
          onConfirm={this.handlePicked}
          onCancel={this.closeDateTimePicker}
          mode="datetime"
          is24Hour={false}
          date={new Date(notificationTime)}
          titleIOS="Pick your Notification time"
        />
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
        <Container>
          {this.renderHeader()}
          {/* {this.renderView()} */}
         
          <View style={styles.container}>
            <View style={styles.qrContainer}>
            <Text style={styles.qrText}> {this.props.data.username}</Text>
              <QRCode
                value={JSON.stringify(this.props.data)}
                size={width * 0.4}
                color={COLORS.white}
                backgroundColor={COLORS.main_text_color}
                logoSize={30}
                logoMargin={2}
                logoBorderRadius={15}
                logoBackgroundColor="yellow"
              />
            </View>
          </View> 
        </Container>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  // console.log("state---->", state.login.shouldLoadData);
  return {
    data: state.login.shouldLoadData,
    theme: state.themeReducer.theme,
  };
}

export default connect(mapStateToProps, action)(Share);

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.backColor};
  justify-content: center;
  align-items: center;
`;
