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
import Header from "../../components/header/index";
import Icon from "react-native-vector-icons/FontAwesome5";
import Metrics from "../theme/Metrics";
import { Spinner } from "../../components/Spinner";
import Toast from "react-native-easy-toast";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import plus from "../../assets/images/plus.png";
import styles from "./chooseContactFromLabelStyle.js";
import { switchTheme } from "../../action/themeAction";
import checkedWhite from  "../../assets/icons/checkedWhite.png";

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
    qrCodeData:{},
    checkedOff:false
  };

  async componentDidMount() {
    this.setState({
      qrCodeData: JSON.parse(await AsyncStorage.getItem("@qrData"))
    });
    console.log("qr data--->",this.state.qrCodeData);
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
      fetch(baseurl + "get_label")
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          var arr = responseJson.data.relation.split(/,/).map((item) => {
            return { relation: item, isSelect: false };
          });
          this.setState({ dataManage : arr, isLoading: false });
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
    this.setState({ dataManage : contactArr });
  };

  onchecked = (keyInd, item) => {
    const { dataManage, selectedRealetion } = this.state;
    let arr = dataManage.map((item, key) => {
      if (keyInd == key) {
        item.isSelect = !item.isSelect;
      }
      return { ...item };
    });
    // console.log("after arr ===> ", arr);
    this.setState({ dataManage: arr });
   // console.log("datatmanage arr ===> ", dataManage);
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
        title="Add Contacts AIC User(s)"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }
renderMiddle() {
    return (
      <ScrollView>
        <View style={{ flex: 1, marginBottom: Metrics.xxdoubleBaseMargin,marginTop:Metrics.baseMargin }}>
          <TouchableOpacity
            style={[styles.checkboxView,{}]}
            onPress={() => {
              this.selectAll();
            }}
          >
            {this.state.checkedOff == true ? (
              <View style={styles.checkViewForLight}>
                <Image source={checkedWhite} style={styles.checkedStyle} />
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
            >
              {" "}
              Select (De-select) All{" "}
            </Text>
          </TouchableOpacity>
          {this.state.dataManage.map((item, key) =>
            this.state.dataManage === [""] ? null : (
              <View style={styles.mainView}>
                <CheckBox
                  value={item.isSelect}
                  onChange={() => {
                    this.onchecked(key, item.isSelect);
                  }}
                  tintColors={{ true: "#1374A3", false: "#1374A3" }}
                />
                <Text
                  style={[
                    styles.itemText,
                    {
                      color:
                        this.props.theme.mode === "light" ? "#1374A3" : "white",
                    },
                  ]}
                >
                  {item.relation}
                </Text>
              </View>
            )
          )}

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
                // onSubmitEditing={this.labelApiCall}
                placeholderTextColor={COLORS.black}
              />
            </View>
          )}
          {/* 
          <TouchableOpacity
            style={styles.mainView}
            // onPress={
            //   this.state.viewSection == false
            //     ? this.onPressAddLabel
            //     : this.message
            // }
            disable={this.state.disabledLabel}
          >
            <Image
              source={plus}
              style={{
                width: width * 0.055,
                height: width * 0.055,
                marginLeft: Metrics.xsmallMargin,
              }}
            />
            <View style={styles.smallWhiteview}>
              <Text
                style={{
                  fontSize: width * 0.03,
                  fontFamily: Font.regular,
                }}
              >
                Add
              </Text>
            </View>
          </TouchableOpacity> */}
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
            bottom: 20,
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
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  notificationApiCall = () => {
    const {username,user_id}=this.props;
    this.setState({ isLoading: true})
    const deviceid = this.state.qrCodeData.fcmToken;
    const baseurl = Constants.baseurl;
    const receive_id = this.state.qrCodeData.user_id;

    var _body = new FormData();
    _body.append("deviceid", deviceid);
    _body.append("receive_id", receive_id);
    _body.append("username", username);
    _body.append("sender_id", user_id);
   
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
      console.log("notification response---->",data)
      this.setState({ isLoading: false})
    })
    .catch((error) => {
      console.log("errrorr---->",error)
    });
  }

  async forAddContactNavigate() {
    const { dataManage, selectedRealetion } = this.state;
     this.notificationApiCall();
    dataManage.map((item) => {
      item.isSelect == true
        ? selectedRealetion.push(item.relation)
        : console.log("selected------->", item.isSelect);
    });

    const selected = selectedRealetion.toString();
    await AsyncStorage.setItem("@selectedLabel", selected);

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


export default connect(mapStateToProps,actions)(chooseContactFromLabel);

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
