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
import checkedModified from "../../assets/icons/checkedModified.png";
import checkedWhite from "../../assets/icons/checkedWhite.png";
import { connect } from "react-redux";
import plus from "../../assets/images/plus.png";
import styles from "./chooseContactFromLabelStyle.js";
import { switchTheme } from "../../action/themeAction";

var { width, height } = Dimensions.get("window");

class chooseContactFromLabel extends Component {
  state = {
    label: "",
    dataManage: [],
    checked: false,
    isSelected: false,
    selectedRealetion: [],
    data: "",
    isLoading: false,
    viewSection: false,
    disabledLabel: false,
    qrCodeData: {},
    checkedOff: false,
    labelID:"",labelIDs:[]
  };

  async componentDidMount() {
    this.setState({
      qrCodeData: JSON.parse(await AsyncStorage.getItem("@qrData")),
    });
    console.log("qr data--->", this.state.qrCodeData);
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", async () => {
      this.labelList();
    });
  }

  // labelList = () => {
  //   this.setState({ isLoading: true }, async () => {
  //     const baseurl = Constants.baseurl;
  //     fetch(baseurl + "get_label")
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((responseJson) => {
  //         if (responseJson.data.relation == "") {
  //           this.setState({ dataManage: [], isLoading: false });
  //         } else {
  //           var labelData = responseJson.data.relation.split(/,/);
  //           this.setState({ dataManage: labelData, isLoading: false });
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         this.setState({ isLoading: false });
  //       });
  //   });
  // };

  labelList = () => {
    this.setState({ isLoading: true }, async () => {
      const baseurl = Constants.baseurl;
      fetch(baseurl + "getlabel")
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          var arr = responseJson.data.map((item,index) => {
            return { relation: item.relation, isSelect: false ,labelID : item.id};
         });
          this.setState({ dataManage: arr, isLoading: false });
        })
        .catch((error) => {
          console.error(error);
          this.setState({ isLoading: false });
        });
    });
  };

  labelApiCall = () => {
    const baseurl = Constants.baseurl;
    const relation = this.state.label;
    var _body = new FormData();
    _body.append("relation", relation);

    //console.log("state value === > ", relation);
    fetch(baseurl + "add_label", {
      method: "POST",
      headers: {
        "Content-Type":
          Platform.OS == "ios" ? "application/json" : "multipart/form-data",
      },
      body: _body,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.refs.toast.show(responseJson.message);
        if (responseJson.data.relation == "") {
          this.setState({
            dataManage: responseJson.data.relation,
            viewSection: false,
            label: "",
          
          });
        } else {
          var labelData = responseJson.data.relation.split(/,/);
          this.setState({
            dataManage: labelData,
            viewSection: false,
            label: "",
           
          });
        }
      });
  };

  selectAll = () => {
    const { dataManage } = this.state;
    let contactArr = dataManage.map((item, key) => {
      this.state.checkedOff == true
        ? (item.isSelect = true)
        : (item.isSelect = false);
      item.isSelect = !item.isSelect;
      this.setState({ checkedOff: !this.state.checkedOff });
      return { ...item };
    });
    this.setState({ dataManage: contactArr });
  };

  onchecked = (keyInd, item ,id) => {
    console.log("iddd",id)
    const { dataManage, selectedRealetion } = this.state;
    let arr = dataManage.map((item, key) => {
      if (keyInd == key) {
        item.isSelect = !item.isSelect;
      }
      return { ...item };
    });

    this.setState({ dataManage: arr });
  };
  onPressAddLabel = () => {
    this.setState({ viewSection: true });
  };
  message = () => {
    this.state.label == ""
      ? this.refs.toast.show("Please enter label name")
      : this.textChange();
  };
  textChange = (value) => {
    var valueLength = this.state.label;

    if (valueLength.length <= 3) {
      alert("Label contain maximum 3 character");
    } else {
      this.labelApiCall();
    }
  };
  renderHeader() {
    return (
      <Header
        title="Add Contacts AIC User"
        onPress={() => this.props.navigation.navigate("AddContact") }
      />
    );
  }
  renderMiddle() {
    return (
      <ScrollView  keyboardShouldPersistTaps={true}>
        <View
          style={{
            flex: 1,
            marginBottom: Metrics.xxdoubleBaseMargin,
            marginTop: Metrics.baseMargin,
            height: height * 0.5,
          }}
        >
          <TouchableOpacity
            style={[styles.checkboxView, {}]}
            onPress={() => {
              this.selectAll();
            }}
          >
            {this.state.checkedOff == true ? (
              <View style={styles.checkViewForLight}>
                {this.props.theme.mode === "light" ? (
                  <Image source={checkedWhite} style={styles.checkedStyle} />
                ) : (
                  <Image source={checkedModified} style={styles.checkedStyle} />
                )}
              </View>
            ) : (
              <View style={styles.checkView}></View>
            )}
            <Text
              style={[
                styles.deSelectText,
                {
                  color:
                    this.props.theme.mode === "light" ? "#1374A3" : "white",
                },
              ]}
            > Select (De-select) All
            </Text>
          </TouchableOpacity>
          <ScrollView  keyboardShouldPersistTaps={true}>
            {this.state.dataManage.map((item, key) =>
              this.state.dataManage === [""] ? null : (
                <View style={styles.mainView}>
                  <CheckBox
                    value={item.isSelect}
                    onChange={() => {
                      this.onchecked(key, item.isSelect , item.labelID);
                    }}
                    tintColors={{ true: "#1374A3", false: "#1374A3" }}
                  />
                  <Text
                    style={[
                      styles.itemText,
                      {
                        color:
                          this.props.theme.mode === "light"
                            ? "#1374A3"
                            : "white",
                      },
                    ]}
                  >
                    {item.relation}
                  </Text>
                </View>
              )
            )}
          </ScrollView>
          {this.state.viewSection == true && (
            <View style={styles.addlabelView}>
              <TextInput
                placeholder="New Label"
                style={
                  this.props.theme.mode === "light"
                    ? styles.stylefiledText
                    : styles.stylefiledTextBlack
                }
                value={this.state.label}
                onChangeText={(value) => this.setState({ label: value })}
                ref={(input) => {
                  this.label = input;
                }}
                keyboardType={"default"}
                autoCapitalize={false}
                placeholderTextColor={COLORS.black}
              />
            </View>
          )}
          
        </View>
      </ScrollView>
    );
  }

  renderLast() {
    return (
      <View style={{ alignItems: "center", flex: 1 }}>
        <View
          style={{
            flex: 1,
            bottom: 50,
            position: "absolute",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={styles.Whiteview}
            onPress={() => this.forAddContactNavigate()}
          >
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: Font.medium,
                fontSize: width * 0.045,
              }}
            >
              Add Contact
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  notificationApiCall = () => {
    const { username, user_id } = this.props;
    
    this.setState({ isLoading: true });
    const { dataManage, selectedRealetion ,labelIDs} = this.state;
   
    dataManage.map((item) => {
      item.isSelect == true
        ? labelIDs.push(item.labelID)
        : console.log("selected------->", item.labelID);
    });
    
    let ids = this.state.labelIDs.toString()
    console.log("labele iddsss  ------->",ids);
    
    const deviceid = this.state.qrCodeData.fcmToken;
    const baseurl = Constants.baseurl;
    const receive_id = this.state.qrCodeData.user_id;
    
    var _body = new FormData();
    _body.append("deviceid", deviceid);
    _body.append("receive_id", receive_id);
    _body.append("username", username);
    _body.append("sender_id", user_id);
    _body.append("label_id", ids);
    fetch(baseurl + "android", {
      method: "POST",
      headers: {
        "Content-Type":
          Platform.OS == "ios" ? "application/json" : "multipart/form-data",
      },
      body: _body,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        var data = responseJson;
        console.log("notification response---->", data);
        this.setState({ isLoading: false });
      })
      .catch((error) => {
        console.log("errrorr---->", error);
      });
  };

  async forAddContactNavigate() {
    const { dataManage, selectedRealetion ,labelIDs} = this.state;
  
    dataManage.map((item) => {
      item.isSelect == true
        ? selectedRealetion.push(item.relation)
        : console.log("selected------->", item.isSelect);
    });
   
    const selected = selectedRealetion.toString();
    await AsyncStorage.setItem("@selectedLabel", selected);
    this.notificationApiCall();
    if (selected == "") {
      this.refs.toast.show("Please select label to associate with USERNAME");
    } else {
      this.props.navigation.navigate("afterRequestSend");
    }

    this.setState({ selectedRealetion: [] });
  }

  showLoader() {
    if (this.state.isLoading == true) {
      return <Spinner />;
    }
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
                <Text style={styles.uperText}>
                  Select Which Label(s) You Wish To Associate With This Contact
                </Text>
              </View>
            </View>
            {this.renderMiddle()}
            {this.renderLast()}
          </Container>
          <Toast
            ref="toast"
            style={{
              backgroundColor:
                this.props.theme.mode === "light" ? "black" : "white",
              width: width * 0.8,
              alignItems: "center",
            }}
            position="bottom"
            positionValue={250}
            fadeInDuration={100}
            fadeOutDuration={2000}
            opacity={1}
            textStyle={{
              color: this.props.theme.mode === "light" ? "white" : "black",
              fontFamily: Font.medium,
              fontSize: width * 0.04,
            }}
          />
          {this.showLoader()}
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

export default connect(mapStateToProps, actions)(chooseContactFromLabel);

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
