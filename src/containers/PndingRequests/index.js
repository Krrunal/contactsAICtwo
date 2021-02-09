import {
  Dimensions,
  FlatList,
  Image,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component, useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import AsyncStorage from "@react-native-community/async-storage";
import { COLORS } from "../theme/Colors.js";
import CheckBox from "@react-native-community/checkbox";
import Constants from "../../action/Constants";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import { Label } from "native-base";
import Labels from "../Labels/index";
import Metrics from "../theme/Metrics";
import { Spinner } from "../../components/Spinner";
import { addItem } from "../../services/FirebaseDatabase/addToFirebase";
import { addManualContact } from "../../services/FirebaseDatabase/manualContactToFirebase";
import checkedWhite from "../../assets/icons/checkedWhite.png";
import { connect } from "react-redux";
import moment from "moment";
import { request } from "react-native-permissions";
import styles from "./style.js";

var { width, height } = Dimensions.get("window");
class pendingRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qrCodeData: {},
      pendingRequest: [],
      acceptData: [],
      pendingUsername: [],
      name: [],
      nameId: "",
      loader: false,
      pendingId: [],
      senderId: "",
      recivedIdArray: [],
      senderIdArray: [],
      receiveId: "",
      names: [],
      acceptName: "",
      p_id: [],
      p_ids: "",
      p_idsSelected: [],
      trueName: [],
      isSelectedName: "",
      counter: "",
      checkedOff: false,
      dataManage: [],
      labelSection: false,
      selectedLable: [],
      afterConfirmSection: false,
      middleSection: true,
      keyInd: "",
      denySection: false,
      requestTime: [],
      requestTimeS: "",
      requestDate: [],
      requestDates: "",
      selectedTiem: "",
      denyYESSection: false,
      selectedRelation:[],
      labelSelected:""
    };
  }
  renderHeader() {
    return (
      <Header
        title="Pending Requests"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  componentDidMount = async () => {
    const { user_id, navigation } = this.props;
    this.setState({
      qrCodeData: JSON.parse(await AsyncStorage.getItem("@qrData")),
    });
    this.pendingRequestApiCall();
    this.labelList();
  };

  pendingRequestApiCall = () => {
    const { user_id } = this.props;
    this.setState({ loader: true }, async () => {
      const baseurl = Constants.baseurl;
      // console.log("pendingRequestApiCall--->");

      var _body = new FormData();
      _body.append("receive_id", user_id);
      fetch(baseurl + "get_pending", {
        method: "POST",
        headers: {
          "Content-Type":
            Platform.OS == "ios" ? "application/json" : "multipart/form-data",
        },
        body: _body,
      })
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          var data = responseJson.data;
          this.setState({ pendingRequest: data });

          if (data == "") {
           // console.log("empty---->", this.state.names);
            this.setState({ names: [] });
           // console.log("empty---->", this.state.names);
            this.setState({ loader: false });
          } else {
            this.state.pendingRequest.map((item) => {
              this.state.p_id.push(item.id);
              let formateDate = moment(item.created_at).format("MMMM, Do YYYY");
              let formateTime = moment(item.created_at).format("LLLL");
              console.log("iddddd---->", formateTime);
              this.state.requestDate.push(formateDate);
              this.state.requestTime.push(formateTime);
              //console.log("pending request ---->", item.created_at);
            });
            var pID = this.state.p_id.map((item) => {
              return { item: item, isSelect: false };
            });
            this.setState({
              p_ids: pID,
              requestTimeS: this.state.requestTime,
              requestDates: this.state.requestDate,
              loader: false,
            });
          }
          this.saperateIds();
        })
        .catch((error) => {
          console.log("errrorr---->", error);
        });
    });
  };

  compareIDs = () => {
    const { user_id } = this.props;
    var r_id = this.state.recivedIdArray[0];
    if (user_id == r_id) {
      console.log("yes both are same");
      this.getUsername();
    }
  };

  saperateIds = () => {
    const {
      pendingRequest,
      receiveId,
      recivedIdArray,
      senderIdArray,
      pendingId,
    } = this.state;
    pendingRequest.map((item, index) => {
      const rId = pendingRequest.find(
        ({ receive_rid }) => receive_rid == receive_rid
      );
      const sid = pendingRequest.find(
        ({ sender_id }) => sender_id == sender_id
      );
      var recivedId = rId.receive_rid;
      recivedIdArray.push(recivedId);
    });

    pendingRequest.map((item) => {
      pendingId.push(item.id);
    });
    this.compareIDs();
  };

  getUsername = () => {
    var s_id = this.state.senderIdArray[0];
    this.state.pendingRequest.forEach((doc) => {
      const baseurl = Constants.baseurl;
      var _body = new FormData();
      _body.append("id", doc.sender_id);
      fetch(baseurl + "get_username", {
        method: "POST",
        body: _body,
      })
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          var data = responseJson.data;
          if (data.username == "") {
            console.log("Name is-->", empty);
          } else {
            var u_name = data.username;
            this.state.name.push(u_name);
           // console.log("Get Username Response---->", data);
            var c = this.state.name.length;
            this.setState({ counter: c });
          }
          if (this.state.name == "") {
           // console.log("Name is-->", empty);
            this.setState({ loader: false });
          } else {
            var nameData = this.state.name.map((item) => {
              return { item: item, isSelect: false };
            });
            this.setState({ names: nameData });
            this.setState({ loader: false });
          }
        })
        .catch((error) => {
          console.log("name error---->", error);
        });
    });
  };

  removePendingRequestData = () => {
    console.log("selectedRelation ---->",this.state.selectedLable)
    const { user_id, username } = this.props;
    const { name, names, trueName, isSelectedName, selectedLable ,dataManage } = this.state;
//    console.log("Name---->", dataManage);
     var r_id = this.state.recivedIdArray[0];       
      dataManage.map((item) => {
      item.isSelect == true
        ? selectedLable.push(item.relation)
        : console.log("selected------->", item.isSelect);
    });

    const selected = selectedLable.toString();
    names.map((item, index) => {
      if (item.isSelect == true) {
        this.setState({ trueName: [] });
        trueName.push(item.item);
       // console.log("aftere true name ----->", trueName);
      }
    });
    console.log("selected------->",selected);

    
    addItem(user_id, user_id, selected, "", "", trueName[0]);
    addItem(r_id, r_id, selected, "", "", trueName[0]);

    addManualContact(
      // user_id,
      username,
      selected,
      "",
      "",
      "",
      trueName[0],
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    );
  
    this.setState({ name: [] });
    this.setState({
      trueName: [],
      middleSection: true,
      afterConfirmSection: false,
    });
    this.pendingRequestApiCall();
  };
  showDenyRequest = (keyInd, item, time) => {
    console.log("time---->", time);
    this.setState({
      // labelSection: true,
      denySection: true,
      acceptName: item,
      middleSection: false,
      keyInd: keyInd,
      selectedTiem: time,
    });
  };
  denySubmit = () => {
    const { names, p_ids, p_idsSelected, keyInd } = this.state;

    let arr1 = names.map((item, key) => {
      if (keyInd == key) {
        item.isSelect = !item.isSelect;
      }
      return { ...item };
    });
    this.setState({ names: arr1 });

    let arr = p_ids.map((item, key) => {
      if (keyInd == key) {
        item.isSelect = !item.isSelect;
      }
      return { ...item };
    });
    this.setState({ p_ids: arr });

    p_ids.map((item, key) => {
      if (item.isSelect == true) {
        p_idsSelected.push(item.item);
      }
    });

    console.log("deny submit---->", p_idsSelected);
    p_idsSelected.map((item, index) => {
      const baseurl = Constants.baseurl;
      const id = p_idsSelected[index];
      var _body = new FormData();
      _body.append("id", id);
      fetch(baseurl + "update_pending", {
        method: "POST",
        headers: {
          "Content-Type":
            Platform.OS == "ios" ? "application/json" : "multipart/form-data",
        },
        body: _body,
      })
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          // this.setState({ loader: false });
          var data = responseJson;
          if (data == "") {
            // console.log("empty---->", this.state.names);
             this.setState({ names: [] });
            // console.log("empty---->", this.state.names);
             this.setState({ loader: false });
           }else{
            console.log("Update Pending response---->", data);
            this.setState({ acceptData: data });
            console.log(
              "Update Pending response---->",
              this.state.acceptData.status
            );
           }
         
          if (this.state.acceptData.status == true) {
            this.setState({ trueName: [] });
            this.setState({ name: [] });
            this.setState({ denyYESSection: false, middleSection: true });
            this.pendingRequestApiCall();
          }
        })
        .catch((error) => {
          // this.setState({ loader: false });
          console.log("Update errrorr---->", error);
        });
    });
  };

  showLabelList = (keyInd, item) => {
    //console.log("Key Ind --->",keyInd)
    this.setState({
      labelSection: true,
      acceptName: item,
      middleSection: false,
      keyInd: keyInd,
    });
  };

  acceptSubmit = () => {
    const { names, p_ids, p_idsSelected, keyInd } = this.state;

    // console.log("Key Ind---->", keyInd);
    let arr1 = names.map((item, key) => {
      if (keyInd == key) {
        item.isSelect = !item.isSelect;
      }
      return { ...item };
    });
    this.setState({ names: arr1 });

    let arr = p_ids.map((item, key) => {
      if (keyInd == key) {
        item.isSelect = !item.isSelect;
      }
      return { ...item };
    });
    this.setState({ p_ids: arr });

    p_ids.map((item, key) => {
      if (item.isSelect == true) {
        p_idsSelected.push(item.item);
      }
    });
    console.log("p_ids---->", p_idsSelected);
    p_idsSelected.map((item, index) => {
      // this.setState({ loader: true }, async () => {
      const baseurl = Constants.baseurl;
      const id = p_idsSelected[index];
      var _body = new FormData();
      _body.append("id", id);
      fetch(baseurl + "update_pending", {
        method: "POST",
        headers: {
          "Content-Type":
            Platform.OS == "ios" ? "application/json" : "multipart/form-data",
        },
        body: _body,
      })
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          // this.setState({ loader: false });
          var data = responseJson;
          console.log("Update Pending response---->", data);
          this.setState({ acceptData: data });
          console.log(
            "Update Pending response---->",
            this.state.acceptData.status
          );
          if (this.state.acceptData.status == true) {
            // this.pendingRequestApiCall();
            this.setState({ trueName: [] });
            this.removePendingRequestData();
          }
        })
        .catch((error) => {
          // this.setState({ loader: false });
          console.log("Update errrorr---->", error);
        });
    });
    // });
  };

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
          this.setState({ dataManage: arr, isLoading: false });
        })
        .catch((error) => {
          console.error(error);
          this.setState({ isLoading: false });
        });
    });
  };
  selectAll = () => {
    const { dataManage ,labelSelected ,selectedRelation} = this.state;
  
    let contactArr = dataManage.map((item, key) => {
      this.state.checkedOff == true
        ? (item.isSelect = true)
        : (item.isSelect = false);
      item.isSelect = !item.isSelect;
      this.setState({ checkedOff: !this.state.checkedOff });
      return { ...item };
    });
    this.setState({ dataManage: contactArr  });
  //  console.log("---->",dataManage)
    
    dataManage.map((item) => {
     
      item.isSelect == true
        ? selectedRelation.push(item.relation)
        : console.log("selected------->", item.isSelect);
    });
   // const selected = selectedRelation.toString();
    
    this.setState({ selectedLable : selectedRelation });
   console.log("datemanage---->",selectedRelation)
  };

  onchecked = (keyInd, item, item2) => {
    console.log("selct--->", item2.relation);
    this.setState({ selectedLable: item2.relation });
    const { dataManage, selectedRealetion } = this.state;
    let arr = dataManage.map((item, key) => {
      if (keyInd == key) {
        item.isSelect = !item.isSelect;
      }
      return { ...item };
    });
    this.setState({ dataManage: arr });
    // console.log("datatmanage arr ===> ", dataManage);
  };
  renderItem({ item, index }) {
    return (
      <View style={{ width: width, alignItems: "center" }}>
        {/* {this.state.names.map((item) => { */}
        <View style={styles.whiteBigView}>
          <View style={styles.checkboxView}>
            <View style={[styles.oneView, { marginLeft: Metrics.smallMargin }]}>
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={[
                    styles.usernameText,
                    {
                      color:
                        this.props.theme.mode == "light"
                          ? COLORS.main_text_color
                          : COLORS.white,
                      textDecorationLine: "underline",
                      textDecorationColor: COLORS.main_text_color,
                    },
                  ]}
                >
                  Username:
                </Text>
                <Text
                  style={[
                    styles.usernameText,
                    {
                      color:
                        this.props.theme.mode == "light"
                          ? COLORS.main_text_color
                          : COLORS.white,
                    },
                  ]}
                >
                  {item.item}
                </Text>
              </View>
              <View style={{ width: width * 0.34, alignItems: "center" }}>
                <View style={{ flexDirection: "column" }}>
                  <Text
                    style={[
                      styles.usernameText,
                      {
                        color:
                          this.props.theme.mode == "light"
                            ? COLORS.main_text_color
                            : COLORS.white,
                        textDecorationLine: "underline",
                        textDecorationColor: COLORS.main_text_color,
                      },
                    ]}
                  >
                    Name:
                  </Text>
                  <Text
                    style={[
                      styles.usernameText,
                      {
                        color:
                          this.props.theme.mode == "light"
                            ? COLORS.main_text_color
                            : COLORS.white,
                      },
                    ]}
                  >
                    {item.item}
                  </Text>
                </View>
              </View>

              <View
                style={{ width: width * 0.3, marginLeft: Metrics.smallMargin }}
              >
                <View style={{ flexDirection: "column" }}>
                  <Text
                    style={[
                      styles.usernameText,
                      {
                        color:
                          this.props.theme.mode == "light"
                            ? COLORS.main_text_color
                            : COLORS.white,
                        textDecorationLine: "underline",
                        textDecorationColor: COLORS.main_text_color,
                      },
                    ]}
                  >
                    Label:
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginTop: Metrics.baseMargin }}>
            <Text
              style={{
                fontSize: width * 0.025,
                fontFamily: Font.regular,
                color:
                  this.props.theme.mode == "light"
                    ? COLORS.black
                    : COLORS.white,
                marginLeft: Metrics.smallMargin,
              }}
            >
              Request Received on {this.state.requestTimeS[index]}
            </Text>
          </View>
          <View
            style={{
              width: width,
              marginTop: Metrics.doubleBaseMargin,
              alignItems: "center",
            }}
          >
            <View style={{}}>
              <View style={{ flexDirection: "row", padding: 8 }}>
                <TouchableOpacity
                  style={styles.acceptView}
                  onPress={(value) => {
                    this.showDenyRequest(
                      index,
                      item.item,
                      this.state.requestTimeS[index]
                    );
                  }}
                >
                  <Text
                    style={[
                      styles.acceptText,
                      {
                        color:
                          this.props.theme.mode == "light"
                            ? COLORS.main_text_color
                            : COLORS.white,
                      },
                    ]}
                  >
                    Deny
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.acceptView,
                    { marginLeft: Metrics.doubleBaseMargin },
                  ]}
                  onPress={(value) => {
                    this.showLabelList(index, item.item);
                  }}
                >
                  <Text
                    style={[
                      styles.acceptText,
                      {
                        color:
                          this.props.theme.mode == "light"
                            ? COLORS.main_text_color
                            : COLORS.white,
                      },
                    ]}
                  >
                    Accept
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        {/* })} */}
      </View>
    );
  }

  renderMiddle() {
    return (
      <View style={{ width: 1, alignItems: "center" }}>
        <View
          style={{
            width: width,
            marginTop: Metrics.baseMargin,
            height: height * 0.7,
          }}
        >
          <FlatList
            refreshing={true}
            keyExtractor={(item, index) => index.toString()}
            data={this.state.names}
            extraData={this.state}
            numColumns={1}
            renderItem={this.renderItem.bind(this)}
          />
        </View>
      </View>
    );
  }

  renderLast() {
    return (
      <View style={{ alignItems: "center", flex: 1 }}>
        <View style={{ flex: 1, bottom: 20, position: "absolute" }}>
          <TouchableOpacity
            style={styles.Whiteview}
            onPress={this.navigateSearch}
          >
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: Font.medium,
                fontSize: width * 0.045,
              }}
            >
              Add Contacts
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  navigateSearch = () => {
    this.setState({
      labelSection: false,
      afterConfirmSection: true,
      middleSection: false,
    });
    this.acceptSubmit();
    let arr = this.state.dataManage.map((item, key) => {
      if (item.isSelect ==  true) {
        item.isSelect = false;
      }
      return { ...item };
    });
    this.setState({ dataManage: arr });
  };
  showLoader() {
    if (this.state.loader == true) {
      return <Spinner />;
    }
  }
  renderLabel() {
    return (
      <ScrollView>
        <View style={{ width: width }}>
          <View style={{ width: width, alignItems: "center" }}>
            <View
              style={{ width: width * 0.95, marginTop: Metrics.baseMargin }}
            >
              <Text
                style={[
                  styles.upText,
                  {
                    color:
                      this.props.theme.mode === "light"
                        ? COLORS.main_text_color
                        : COLORS.white,
                    marginTop: Metrics.baseMargin,
                  },
                ]}
              >
                Select Which Label(s) You Wish To Associate With This Contact
              </Text>
            </View>
          </View>
          <View
            style={{
              // flex: 1,
              marginBottom: Metrics.xxdoubleBaseMargin,
              marginTop: Metrics.doubleBaseMargin,
              marginLeft: Metrics.doubleBaseMargin,
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
                Select (De-select) All{" "}
              </Text>
            </TouchableOpacity>
            {/* <ScrollView>
            <View style={{ borderWidth: 1, height: height * 0.3 }}> */}
            {this.state.dataManage.map((item, key) =>
              this.state.dataManage === [""] ? null : (
                <View style={styles.mainView}>
                  <CheckBox
                    value={item.isSelect}
                    onChange={() => {
                      this.onchecked(key, item.isSelect, item);
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
            {/* </View>
            </ScrollView> */}
          </View>
        </View>
      </ScrollView>
    );
  }
  renderU_name() {
    return (
      <View>
        <View style={{ width: width }}>
          <View style={[styles.oneView, { marginLeft: Metrics.smallMargin }]}>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={[
                  styles.usernameText,
                  {
                    color:
                      this.props.theme.mode == "light"
                        ? COLORS.main_text_color
                        : COLORS.white,
                    textDecorationLine: "underline",
                    textDecorationColor: COLORS.main_text_color,
                  },
                ]}
              >
                Username:
              </Text>
              <Text
                style={[
                  styles.usernameText,
                  {
                    color:
                      this.props.theme.mode == "light"
                        ? COLORS.main_text_color
                        : COLORS.white,
                  },
                ]}
              >
                {this.state.acceptName}
              </Text>
            </View>
            <View style={{ alignItems: "center", width: width * 0.34 }}>
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={[
                    styles.usernameText,
                    {
                      color:
                        this.props.theme.mode == "light"
                          ? COLORS.main_text_color
                          : COLORS.white,
                      textDecorationLine: "underline",
                      textDecorationColor: COLORS.main_text_color,
                    },
                  ]}
                >
                  Name:
                </Text>
                <Text
                  style={[
                    styles.usernameText,
                    {
                      color:
                        this.props.theme.mode == "light"
                          ? COLORS.main_text_color
                          : COLORS.white,
                    },
                  ]}
                >
                  {this.state.acceptName}
                </Text>
              </View>
            </View>
            <View
              style={{ width: width * 0.3, marginLeft: Metrics.smallMargin }}
            >
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={[
                    styles.usernameText,
                    {
                      color:
                        this.props.theme.mode == "light"
                          ? COLORS.main_text_color
                          : COLORS.white,
                      textDecorationLine: "underline",
                      textDecorationColor: COLORS.main_text_color,
                    },
                  ]}
                >
                  Label:
                </Text>
                <Text
                  style={[
                    styles.usernameText,
                    {
                      color:
                        this.props.theme.mode == "light"
                          ? COLORS.main_text_color
                          : COLORS.white,
                    },
                  ]}
                >
                  {this.state.selectedLable}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  renderUpText() {
    return (
      <View style={{ width: width, alignItems: "center" }}>
        <View style={{ width: width * 0.93, marginTop: Metrics.baseMargin }}>
          <Text
            style={[
              styles.upText,
              {
                color:
                  this.props.theme.mode === "light"
                    ? COLORS.main_text_color
                    : COLORS.white,
              },
            ]}
          >
            The Following Contacts Are Requesting To Be Added:
          </Text>
        </View>
      </View>
    );
  }
  confirmSection() {
    return (
      <View style={{ width: width, alignItems: "center" }}>
        <View style={styles.afterConfrimStyle}>
          {this.renderU_name()}
          <View style={styles.c1View}>
            <View
              style={[
                styles.c2View,
                {
                  backgroundColor:
                    this.props.theme.mode === "light"
                      ? COLORS.black
                      : COLORS.white,
                },
              ]}
            >
              <Text
                style={{
                  color:
                    this.props.theme.mode === "light"
                      ? COLORS.white
                      : COLORS.black,
                  fontFamily: Font.medium,
                  fontSize: width * 0.035,
                }}
              >
                Request Accepted
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  noClick = () => {
    this.setState({ middleSection: true, denySection: false });
  };
  yesClick = () => {
    this.setState({ denyYESSection: true, denySection: false });
    this.denySubmit();
  };
  denyView() {
    return (
      <View style={{ width: width, alignItems: "center" }}>
        <View style={styles.afterConfrimStyle}>
          {this.renderU_name()}
          <View
            style={{
              marginTop: Metrics.baseMargin,
              marginLeft: Metrics.smallMargin,
            }}
          >
            <Text
              style={{
                fontSize: width * 0.025,
                fontFamily: Font.regular,
                color:
                  this.props.theme.mode == "light"
                    ? COLORS.black
                    : COLORS.white,
              }}
            >
              Request Received on
              {this.state.selectedTiem}
            </Text>
          </View>
          <Text
            style={{
              color:
                this.props.theme.mode == "light"
                  ? COLORS.main_text_color
                  : COLORS.white,
              fontSize: width * 0.043,
              fontFamily: Font.medium,
              marginLeft: Metrics.smallMargin,
              marginTop: Metrics.smallMargin,
            }}
          >
            Are You Sure Want To Deny This Request ?
          </Text>
          <View
            style={{
              width: width,
              marginTop: Metrics.doubleBaseMargin,
              alignItems: "center",
            }}
          >
            <View style={{}}>
              <View style={{ flexDirection: "row", padding: 8 }}>
                <TouchableOpacity
                  style={styles.acceptView}
                  onPress={() => {
                    this.yesClick();
                  }}
                >
                  <Text
                    style={[
                      styles.acceptText,
                      {
                        color:
                          this.props.theme.mode == "light"
                            ? COLORS.main_text_color
                            : COLORS.white,
                      },
                    ]}
                  >
                    YES
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.acceptView,
                    { marginLeft: Metrics.doubleBaseMargin },
                  ]}
                  onPress={() => {
                    this.noClick();
                  }}
                >
                  <Text
                    style={[
                      styles.acceptText,
                      {
                        color:
                          this.props.theme.mode == "light"
                            ? COLORS.main_text_color
                            : COLORS.white,
                      },
                    ]}
                  >
                    NO
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  denyYESSectionView() {
    return (
      <View style={{ width: width, alignItems: "center" }}>
        <View style={styles.afterConfrimStyle}>
          {this.renderU_name()}
          <View style={styles.c1View}>
            <View
              style={[
                styles.c2View,
                {
                  backgroundColor:
                    this.props.theme.mode === "light"
                      ? COLORS.black
                      : COLORS.white,
                },
              ]}
            >
              <Text
                style={{
                  color:
                    this.props.theme.mode === "light"
                      ? COLORS.white
                      : COLORS.black,
                  fontFamily: Font.medium,
                  fontSize: width * 0.035,
                }}
              >
                Request Denied
              </Text>
            </View>
          </View>
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
            {this.renderUpText()}
            {this.state.labelSection == true ? (
              <View style={{ flex: 1 }}>
                {this.renderU_name()}
                {this.renderLabel()}
                {this.renderLast()}
              </View>
            ) : null}
            {this.state.middleSection ? (
              <View style={{ width: width, alignItems: "center" }}>
                {this.renderMiddle()}
              </View>
            ) : null}

            {this.state.afterConfirmSection == true ? (
              <View>{this.confirmSection()}</View>
            ) : null}
            {this.state.denySection == true ? (
              <View>{this.denyView()}</View>
            ) : null}
            {this.state.denyYESSection == true ? (
              <View>{this.denyYESSectionView()}</View>
            ) : null}
          </Container>
          {this.showLoader()}
        </View>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
  user_id: state.login.shouldLoadData.user_id,
  username: state.login.shouldLoadData.username,
});

const mapDispatchToProps = (dispatch) => ({
  switchTheme: bindActionCreators(switchTheme, dispatch),
});

export default connect(mapStateToProps)(pendingRequest);

const Container = styled.View`
  flex: 1;
  width: 100%;

  background-color: ${(props) => props.theme.backColor};
`;

const LineText = styled.Text`
  font-family: Roboto-Medium;
  font-size: 16px;
  color: ${(props) => props.theme.textColor};
  line-height: 30px;

  margin-top: 12px;
`;
