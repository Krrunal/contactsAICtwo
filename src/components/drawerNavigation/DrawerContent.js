import * as actions from "../../action";

import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import AsyncStorage from "@react-native-community/async-storage";
import { COLORS } from "../../containers/theme/Colors";
import Constants from "../../action/Constants";
import Font from "../../containers/theme/font";
import Metrics from "../../containers/theme/Metrics";
import { Spinner } from "../../components/Spinner";
import { connect } from "react-redux";
import contact from "../../assets/icons/contact.png";
import firebase from "../../services/FirebaseDatabase/db";
import help from "../../assets/icons/help.png";
import info from "../../assets/icons/info.png";
import label from "../../assets/icons/label.png";
import logout from "../../assets/images/logout.png";
import navIcon from "../../assets/icons/navIcon.png";
import setting from "../../assets/icons/settings.png";

var { width, height } = Dimensions.get("window");
class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowInfo: false,
      shouldShowContact: false,
      shouldShowLabel: false,
      shouldShowSetting: false,
      shouldShowHelp: false,
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
      email: "",
    };
  }
  componentDidMount = async () => {
    this.pendingRequestApiCall();
  };

  isLogedInChek = async () => {
    this.props.navigation.closeDrawer();
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "NO",
          onPress: () => {
            console.log("cancle logout");
          },
        },
        {
          text: "YES",
          onPress: () => {
            this.props.logoutUser();
            this.props.loginEmailChangeRemove(this.state.email);
          },
        },
      ],
      { cancelable: false }
    );

    console.log("log out user----->", this.props.shouldLoadData);
  };
  pendingRequestApiCall = () => {
    const { user_id } = this.props;
    this.setState({ loader: true }, async () => {
      const baseurl = Constants.baseurl;

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
         
          if (responseJson[0].data == null) {
            console.log("pending      -->", responseJson[0].data);
           }else{
              responseJson.map((d1) => {
            this.setState({ pendingRequest: d1 });
          });
          this.state.pendingRequest.data.map((item, index) => { 
            this.state.p_id.push(item.dd.id);
          })
        

          var pID = this.state.p_id.map((item) => {
            return { item: item, isSelect: false };
          });
         this.setState({ p_ids: pID, loader: false });
             
           }
         
         this.compareIDs();
        })

        .catch((error) => {
          console.log("errrorr---->", error);
        });
    });
  };

  compareIDs = () => {
    const { user_id } = this.props;
    this.state.pendingRequest.data.map((item, index) => { 
     
      this.state.recivedIdArray.push(item.dd.receive_rid)
    })
   // console.log("penidng  ---->",this.state.recivedIdArray)
    var r_id = this.state.recivedIdArray[0];
    if (user_id == r_id) {
      console.log("yes both are same");
      this.getUsername();
    }
  };

 
  getUsername = () => {
    // console.log("getUsername=---->");
    var s_id = this.state.senderIdArray[0];

    this.state.pendingRequest.data.forEach((doc) => {
      if (doc.dd.sender_id == undefined) {
      } else {
        const baseurl = Constants.baseurl;
        var _body = new FormData();
        _body.append("id", doc.dd.sender_id);
        fetch(baseurl + "get_username", {
          method: "POST",
          body: _body,
        })
          .then((response) => {
            return response.json();
          })
          .then((responseJson) => {
            // console.log("Name is-->", responseJson);
            var data = responseJson.data;
            if (data.username == "") {
              console.log("Name is-->", empty);
            } else {
              var u_name = data.username;
              this.state.name.push(u_name);
              //console.log("Get Username Response---->", data);
              var c = this.state.name.length;
              this.setState({ counter: c });
             console.log("Get Username Response---->", this.state.counter);
            }
            if (this.state.name == "") {
              //console.log("Name is-->", empty);
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
      }
    });
  };

  showInfoClick = () => {
    const {
      shouldShowInfo,
      shouldShowContact,
      shouldShowLabel,
      shouldShowSetting,
      shouldShowHelp,
    } = this.state;
    if (shouldShowContact) {
      this.setState({ shouldShowContact: false });
    }
    if (shouldShowLabel) {
      this.setState({ shouldShowLabel: false });
    }
    if (shouldShowSetting) {
      this.setState({ shouldShowSetting: false });
    }
    if (shouldShowHelp) {
      this.setState({ shouldShowHelp: false });
      this.setState({ shouldShowInfo: true });
    } else {
      if (shouldShowInfo === true) {
        this.setState({ shouldShowInfo: false });
      } else {
        this.setState({ shouldShowInfo: true });
      }
    }
  };

  showContactClick = () => {
    const {
      shouldShowInfo,
      shouldShowContact,
      shouldShowLabel,
      shouldShowSetting,
      shouldShowHelp,
    } = this.state;

    if (shouldShowLabel) {
      this.setState({ shouldShowLabel: false });
    }
    if (shouldShowSetting) {
      this.setState({ shouldShowSetting: false });
    }
    if (shouldShowHelp) {
      this.setState({ shouldShowHelp: false });
      this.setState({ shouldShowContact: true });
    } else {
      if (shouldShowInfo) {
        this.setState({ shouldShowInfo: false });
      }
      if (shouldShowContact === true) {
        this.setState({ shouldShowContact: false });
      } else {
        this.setState({ shouldShowContact: true });
      }
    }
  };
  showLabelClick = () => {
    const {
      shouldShowInfo,
      shouldShowContact,
      shouldShowLabel,
      shouldShowSetting,
      shouldShowHelp,
    } = this.state;

    if (shouldShowSetting) {
      this.setState({ shouldShowSetting: false });
    }
    if (shouldShowContact) {
      this.setState({ shouldShowContact: false });
    }
    if (shouldShowInfo) {
      this.setState({ shouldShowInfo: false });
    }
    if (shouldShowHelp) {
      this.setState({ shouldShowHelp: false });
      this.setState({ shouldShowLabel: true });
    } else {
      if (shouldShowLabel === true) {
        this.setState({ shouldShowLabel: false });
      } else {
        this.setState({ shouldShowLabel: true });
      }
    }
  };
  showSetttingClick = () => {
    const {
      shouldShowInfo,
      shouldShowContact,
      shouldShowLabel,
      shouldShowSetting,
      shouldShowHelp,
    } = this.state;
    if (shouldShowContact) {
      this.setState({ shouldShowContact: false });
    }
    if (shouldShowInfo) {
      this.setState({ shouldShowInfo: false });
    }
    if (shouldShowHelp) {
      this.setState({ shouldShowHelp: false });
    }
    if (shouldShowLabel) {
      this.setState({ shouldShowLabel: false });
      this.setState({ shouldShowSetting: true });
    } else {
      if (shouldShowSetting === true) {
        this.setState({ shouldShowSetting: false });
      } else {
        this.setState({ shouldShowSetting: true });
      }
    }
  };
  showHelpClick = () => {
    const {
      shouldShowInfo,
      shouldShowContact,
      shouldShowLabel,
      shouldShowSetting,
      shouldShowHelp,
    } = this.state;
    if (shouldShowContact) {
      this.setState({ shouldShowContact: false });
    }
    if (shouldShowInfo) {
      this.setState({ shouldShowInfo: false });
    }
    if (shouldShowLabel) {
      this.setState({ shouldShowLabel: false });
    }
    if (shouldShowSetting) {
      this.setState({ shouldShowSetting: false });
      this.setState({ shouldShowHelp: true });
    } else {
      if (shouldShowHelp === true) {
        this.setState({ shouldShowHelp: false });
      } else {
        this.setState({ shouldShowHelp: true });
      }
    }
  };
  render() {
    const {
      shouldShowContact,
      shouldShowLabel,
      shouldShowSetting,
      shouldShowHelp,
      counter,
    } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.mainContent}>
          <View style={styles.whiteView}>
            <View style={{ width: width * 0.6, flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.sideBarViewContent}
                onPress={() => this.props.navigation.closeDrawer()}
              >
                <Image source={navIcon} style={styles.sidebarStyle} />
              </TouchableOpacity>
              <View style={styles.sidebarViewCenterContent}>
                <Text style={styles.centerText}>CONTACTS AIC</Text>
              </View>
            </View>
          </View>
          <ScrollView>
            <View>
              <View
                style={
                  this.state.shouldShowInfo ? styles.darkView : styles.lightView
                }
              >
                <TouchableOpacity
                  style={styles.item}
                  onPress={this.showInfoClick}
                >
                  <Image
                    source={info}
                    style={{ width: width * 0.04, height: width * 0.04 }}
                  />
                  {this.props.username == null ? (
                    <Text style={styles.itemTextMain}>My Information</Text>
                  ) : (
                    <Text style={styles.itemTextMain}>
                      {this.props.username}
                    </Text>
                  )}
                </TouchableOpacity>

                <View>
                  {this.state.shouldShowInfo ? (
                    <View style={styles.drawerStyle}>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate("Share") &&
                            this.props.navigation.closeDrawer();
                        }}
                      >
                        <Text style={styles.itemText}>Share</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate(
                            "MyContactInfromation"
                          ) && this.props.navigation.closeDrawer();
                        }}
                      >
                        <Text style={styles.itemText}>
                          My Contact Information
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ) : null}
                </View>
              </View>
              {/* <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("ContactUs") &&
              this.props.navigation.closeDrawer();
          }}
        >
             <Text style={{ marginTop: 250 }}>Drawer</Text>
             <Text style={{ marginTop: 250 }}>{this.props.username}</Text>
        </TouchableOpacity>
      */}

              <View
                style={shouldShowContact ? styles.darkView : styles.lightView}
              >
                <TouchableOpacity
                  style={styles.item}
                  onPress={this.showContactClick}
                >
                  <Image
                    source={contact}
                    style={{ width: width * 0.04, height: width * 0.04 }}
                  />
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        color: COLORS.white,
                        marginLeft: Metrics.smallMargin,
                        fontSize: width * 0.051,
                        fontFamily: Font.medium,
                      }}
                    >
                      Contacts
                    </Text>

                    {!shouldShowContact ? (
                      counter == "" ? null : (
                        <View style={styles.counterView}>
                          <Text
                            style={{
                              color: COLORS.white,
                              fontSize: width * 0.022,
                              fontFamily: Font.regular,
                            }}
                          >
                            {counter}
                          </Text>
                        </View>
                      )
                    ) : null}
                  </View>
                </TouchableOpacity>

                <View>
                  {shouldShowContact ? (
                    <View style={styles.drawerStyle}>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate("SerachEditContact") &&
                            this.props.navigation.closeDrawer();
                        }}
                      >
                        <Text style={styles.itemText}>View</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate("PendingRequest") &&
                            this.props.navigation.closeDrawer();
                        }}
                      >
                        <View style={{ flexDirection: "row" }}>
                          <Text
                            style={{
                              color: COLORS.white,
                              marginLeft: Metrics.smallMargin,
                              fontSize: width * 0.045,
                              marginTop: Metrics.smallMargin,
                              fontFamily: Font.regular,
                            }}
                          >
                            Pending Requests
                          </Text>
                          {counter == "" ? null : (
                            <View style={styles.counterView}>
                              <Text
                                style={{
                                  color: COLORS.white,
                                  fontSize: width * 0.022,
                                  fontFamily: Font.regular,
                                }}
                              >
                                {counter}
                              </Text>
                            </View>
                          )}
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate("AddContact") &&
                            this.props.navigation.closeDrawer();
                        }}
                      >
                        <Text style={styles.itemText}>Add</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate("ImportContacts") &&
                            this.props.navigation.closeDrawer();
                        }}
                      >
                        <Text style={styles.itemText}>Import</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate("Invite") &&
                            this.props.navigation.closeDrawer();
                        }}
                      >
                        <Text style={styles.itemText}>Invite</Text>
                      </TouchableOpacity>
                    </View>
                  ) : null}
                </View>
              </View>

              <View
                style={shouldShowLabel ? styles.darkView : styles.lightView}
              >
                <TouchableOpacity
                  style={styles.item}
                  onPress={this.showLabelClick}
                >
                  <Image
                    source={label}
                    style={{ width: width * 0.04, height: width * 0.04 }}
                  />
                  <Text style={styles.itemTextMain}>My Labels</Text>
                </TouchableOpacity>

                <View>
                  {shouldShowLabel ? (
                    <View style={styles.drawerStyle}>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate("Label") &&
                            this.props.navigation.closeDrawer();
                        }}
                      >
                        <Text style={styles.itemText}>Manage</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate("ViewLabel") &&
                            this.props.navigation.closeDrawer();
                        }}
                      >
                        <Text style={styles.itemText}>View</Text>
                      </TouchableOpacity>
                    </View>
                  ) : null}
                </View>
              </View>

              <View
                style={shouldShowSetting ? styles.darkView : styles.lightView}
              >
                <TouchableOpacity
                  style={styles.item}
                  onPress={this.showSetttingClick}
                >
                  <Image
                    source={setting}
                    style={{ width: width * 0.04, height: width * 0.04 }}
                  />
                  <Text style={styles.itemTextMain}>Settings</Text>
                </TouchableOpacity>
                <View>
                  {shouldShowSetting ? (
                    <View style={styles.drawerStyle}>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate("Display") &&
                            this.props.navigation.closeDrawer();
                        }}
                      >
                        <Text style={styles.itemText}>Display</Text>
                      </TouchableOpacity>
                      {/* <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate("Profile") &&
                            this.props.navigation.closeDrawer();
                        }}
                      >
                        <Text style={styles.itemText}>My Account</Text>
                      </TouchableOpacity> */}
                    </View>
                  ) : null}
                </View>
              </View>

              <View style={shouldShowHelp ? styles.darkView : styles.lightView}>
                <TouchableOpacity
                  style={styles.item}
                  onPress={this.showHelpClick}
                >
                  <Image
                    source={help}
                    style={{ width: width * 0.04, height: width * 0.04 }}
                  />
                  <Text style={styles.itemTextMain}>Help/Support</Text>
                </TouchableOpacity>

                <View style={{}}>
                  {shouldShowHelp ? (
                    <View style={styles.drawerStyle}>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate("About") &&
                            this.props.navigation.closeDrawer();
                        }}
                      >
                        <Text style={styles.itemText}>About</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate("ContactUs") &&
                            this.props.navigation.closeDrawer();
                        }}
                      >
                        <Text style={styles.itemText}>Contact</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate("Help") &&
                            this.props.navigation.closeDrawer();
                        }}
                        style={{ marginBottom: Metrics.baseMargin }}
                      >
                        <Text style={styles.itemText}>Help</Text>
                      </TouchableOpacity>
                    </View>
                  ) : null}
                </View>
              </View>
              <View style={[styles.lightView, {}]}>
                <TouchableOpacity
                  style={styles.item}
                  onPress={this.isLogedInChek}
                >
                  <Image
                    source={logout}
                    style={{ width: width * 0.04, height: width * 0.04 }}
                  />
                  <Text style={styles.itemTextMain}>Logout</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  //  console.log("drawer---->", state.login);
  return {
    theme: state.themeReducer.theme,
    user_id: state.login.shouldLoadData.user_id,
    username: state.login.shouldLoadData.username,
    email: state.login.shouldLoadData.email,
    shouldLoadData: state.login.shouldLoadData,
  };
};

export default connect(mapStateToProps, actions)(SideBar);

const styles = StyleSheet.create({
  mainContent: {
    backgroundColor: COLORS.main_text_color,
    flex: 1,
    paddingTop: height * 0.04,
  },

  whiteView: {
    width: width * 0.6,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: Metrics.baseMargin,
    marginTop: Metrics.doubleBaseMargin,
  },

  sideBarViewContent: {
    justifyContent: "center",
    margin: Metrics.xsmallMargin,
  },

  sidebarViewCenterContent: {
    width: width * 0.5,
    alignItems: "center",
    flexDirection: "row",
    marginLeft: Metrics.smallMargin,
  },

  centerText: {
    fontSize: width * 0.05,
    color: COLORS.main_text_color,
    fontFamily: Font.medium,
  },

  sidebarStyle: {
    width: width * 0.1,
    height: width * 0.1,
  },

  item: {
    width: width * 0.6,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  itemText: {
    color: COLORS.white,
    marginLeft: Metrics.smallMargin,
    fontSize: width * 0.045,
    marginTop: Metrics.SmallMargin,
    fontFamily: Font.regular,
  },

  itemTextMain: {
    color: COLORS.white,
    marginLeft: Metrics.smallMargin,
    fontSize: width * 0.051,
    fontFamily: Font.medium,
  },

  drawerStyle: {
    marginLeft: Metrics.baseMargin,
    marginTop: Metrics.smallMargin,
  },

  itemHelp: {
    width: width * 0.6,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: Metrics.doubleBaseMargin,
    marginBottom: Metrics.smallMargin,
  },

  darkView: {
    width: width,
    paddingLeft: Metrics.doubleBaseMargin,
    marginVertical: Metrics.baseMargin,
    paddingVertical: Metrics.baseMargin,
    backgroundColor: COLORS.dark_blue,
    width: width * 0.67,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },

  lightView: {
    width: width,
    paddingLeft: Metrics.doubleBaseMargin,
    marginTop: height * 0.01,
    paddingVertical: Metrics.baseMargin,
    backgroundColor: COLORS.main_text_color,
  },
  counterView: {
    backgroundColor: COLORS.red,
    height: height * 0.02,
    width: width * 0.04,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
