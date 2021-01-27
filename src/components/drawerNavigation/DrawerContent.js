import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
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
import { Text } from "react-native-paper";
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

export function SideBar(props) {
  state = {
    status: false,
    user_name: "false",
  };

  const [shouldShowInfo, setShouldShowInfo] = useState(false);
  const [shouldShowContact, setShouldShowContact] = useState(false);
  const [shouldShowLabel, setShouldShowLabel] = useState(false);
  const [shouldShowSetting, setShouldShowSetting] = useState(false);
  const [shouldShowHelp, setShouldShowHelp] = useState(false);
  const [data, setData] = useState("");
  const [id, setid] = useState("");
  const [setIsLogedIn, IsLogedIn] = useState("");
  const [pendingRequest, setPendingRequest] = useState([]);
  const [p_id] = useState([]);
  const [p_ids] = useState("");
  const [recivedIdArray] = useState([]);
  const [pendingId] = useState([]);
  const [counter, setCounter] = useState(0);
  const [name] = useState([]);
  useEffect(async () => {
    const data = await AsyncStorage.getItem("@sidemenuName");
    setData(data);
    // const id = await AsyncStorage.getItem("@sidemenuID");
    // console.log("iddd--->",id)
    // setid(id)
    pendingRequestApiCall();
    console.log("Get Username Response---->", counter);
  }, []);

  const pendingRequestApiCall = async () => {
    //const {user_id} = this.props;
    const user_id = await AsyncStorage.getItem("@sidemenuID");

    const baseurl = Constants.baseurl;
    console.log("saperateIds=---->", pendingRequest);

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
        var pendingRequest = responseJson.data;
        setPendingRequest(pendingRequest);
        console.log("pending---->", pendingRequest);

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

        pendingRequest.forEach((doc) => {
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

                name.push(u_name);

                // this.setState({counter :c })
              }
            })
            .catch((error) => {
              console.log("name error---->", error);
            });
        });

        console.log("Get Username Response---->", pendingRequest.length);
        var counter = pendingRequest.length;
        setCounter(counter);
        console.log("counter---->", counter);

        if (data == "") {
          //this.setState({ loader: false });
        } else {
          pendingRequest.map((item) => {
            p_id.push(item.id);
          });
          var pID = p_id.map((item) => {
            return { item: item, isSelect: false };
          });
          p_ids(pID);
          //  this.setState({ p_ids : pID });
        }
        // console.log("iddddd---->",this.state.p_ids)
        // saperateIds();
      })
      .catch((error) => {
        console.log("errrorr---->", error);
      });
  };

  const isLogedInChek = async () => {
    const data = await AsyncStorage.getItem("@sidemenuName");
    console.log("username ---->", data);
    firebase
      .firestore()
      .collection("user")
      .doc(data)
      .get()
      .then((snap) => {
        var IsLogedIn = snap._data.isLogedIn;
        if (IsLogedIn == true) {
          firebase
            .firestore()
            .collection("user")
            .doc(`${data}`)
            .update({ isLogedIn: false });
          console.log("snappp false--->", snap._data.isLogedIn);
          props.navigation.navigate("Login");
        } else {
          console.log("snappp--->", snap._data.isLogedIn);
        }
      });
  };

  const showInfoClick = () => {
    // console.log("--------",setIsLogedIn);
    if (shouldShowContact) {
      setShouldShowContact(!shouldShowContact);
    }
    if (shouldShowLabel) {
      setShouldShowLabel(!shouldShowLabel);
    }
    if (shouldShowSetting) {
      setShouldShowSetting(!shouldShowSetting);
    }
    if (shouldShowHelp) {
      setShouldShowHelp(!shouldShowHelp);
      setShouldShowInfo(!shouldShowInfo);
    } else {
      setShouldShowInfo(!shouldShowInfo);
    }
  };
  const showContactClick = () => {
    if (shouldShowLabel) {
      setShouldShowLabel(!shouldShowLabel);
    }
    if (shouldShowSetting) {
      setShouldShowSetting(!shouldShowSetting);
    }
    if (shouldShowHelp) {
      setShouldShowHelp(!shouldShowHelp);
      setShouldShowContact(!shouldShowContact);
    } else {
      if (shouldShowInfo) {
        setShouldShowInfo(!shouldShowInfo);
      }
      setShouldShowContact(!shouldShowContact);
    }
  };
  const showLabelClick = () => {
    if (shouldShowSetting) {
      setShouldShowSetting(!shouldShowSetting);
    }
    if (shouldShowContact) {
      setShouldShowContact(!shouldShowContact);
    }
    if (shouldShowInfo) {
      setShouldShowInfo(!shouldShowInfo);
    }
    if (shouldShowHelp) {
      setShouldShowHelp(!shouldShowHelp);
      setShouldShowLabel(!shouldShowLabel);
    } else {
      setShouldShowLabel(!shouldShowLabel);
    }
  };

  const showSetttingClick = () => {
    if (shouldShowContact) {
      setShouldShowContact(!shouldShowContact);
    }
    if (shouldShowInfo) {
      setShouldShowInfo(!shouldShowInfo);
    }
    if (shouldShowHelp) {
      setShouldShowHelp(!shouldShowHelp);
    }
    if (shouldShowLabel) {
      setShouldShowLabel(!shouldShowLabel);
      setShouldShowSetting(!shouldShowSetting);
    } else {
      setShouldShowSetting(!shouldShowSetting);
    }
  };
  const showHelpClick = () => {
    if (shouldShowContact) {
      setShouldShowContact(!shouldShowContact);
    }
    if (shouldShowInfo) {
      setShouldShowInfo(!shouldShowInfo);
    }
    if (shouldShowLabel) {
      setShouldShowLabel(!shouldShowLabel);
    }
    if (shouldShowSetting) {
      setShouldShowSetting(!shouldShowSetting);
      setShouldShowHelp(!shouldShowHelp);
    } else {
      setShouldShowHelp(!shouldShowHelp);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.mainContent}>
        <View style={styles.whiteView}>
          <View style={{ width: width * 0.6, flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.sideBarViewContent}
              onPress={() => props.navigation.closeDrawer()}
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
            <View style={shouldShowInfo ? styles.darkView : styles.lightView}>
              <TouchableOpacity style={styles.item} onPress={showInfoClick}>
                <Image
                  source={info}
                  style={{ width: width * 0.04, height: width * 0.04 }}
                />
                {data == null ? (
                  <Text style={styles.itemTextMain}>My Information</Text>
                ) : (
                  <Text style={styles.itemTextMain}>{data}</Text>
                )}
              </TouchableOpacity>

              <View>
                {shouldShowInfo ? (
                  <View style={styles.drawerStyle}>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate("Share") &&
                          props.navigation.closeDrawer();
                      }}
                    >
                      <Text style={styles.itemText}>Share</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate("MyContactInfromation") &&
                          props.navigation.closeDrawer();
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

            <View
              style={shouldShowContact ? styles.darkView : styles.lightView}
            >
              <TouchableOpacity style={styles.item} onPress={showContactClick}>
                <Image
                  source={contact}
                  style={{ width: width * 0.04, height: width * 0.04 }}
                />
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      color: COLORS.white,
                      marginLeft: Metrics.smallMargin,
                      fontSize: width * 0.045,
                      fontFamily: Font.medium,
                    }}
                  >
                    Contacts
                  </Text>
                  {shouldShowContact ? 
                  null
                 :  
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
                 }
                  
                </View>
              </TouchableOpacity>

              <View>
                {shouldShowContact ? (
                  <View style={styles.drawerStyle}>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate("SerachEditContact") &&
                          props.navigation.closeDrawer();
                      }}
                    >
                      <Text style={styles.itemText}>View</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate("PendingRequest") &&
                          props.navigation.closeDrawer();
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Text
                          style={{
                            color: COLORS.white,
                            marginLeft: Metrics.smallMargin,
                            fontSize: width * 0.037,
                            marginTop: Metrics.smallMargin,
                            fontFamily: Font.regular,
                          }}
                        >
                          Pending Requests
                        </Text>
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
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate("AddContact") &&
                          props.navigation.closeDrawer();
                      }}
                    >
                      <Text style={styles.itemText}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate("ImportContacts") &&
                          props.navigation.closeDrawer();
                      }}
                    >
                      <Text style={styles.itemText}>Import</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate("Invite") &&
                          props.navigation.closeDrawer();
                      }}
                    >
                      <Text style={styles.itemText}>Invite</Text>
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>
            </View>

            <View style={shouldShowLabel ? styles.darkView : styles.lightView}>
              <TouchableOpacity style={styles.item} onPress={showLabelClick}>
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
                        props.navigation.navigate("Label") &&
                          props.navigation.closeDrawer();
                      }}
                    >
                      <Text style={styles.itemText}>Manage</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate("ViewLabel") &&
                          props.navigation.closeDrawer();
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
              <TouchableOpacity style={styles.item} onPress={showSetttingClick}>
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
                        props.navigation.navigate("Display") &&
                          props.navigation.closeDrawer();
                      }}
                    >
                      <Text style={styles.itemText}>Display</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate("Profile") &&
                          props.navigation.closeDrawer();
                      }}
                    >
                      <Text style={styles.itemText}>My Account</Text>
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>
            </View>

            <View style={shouldShowHelp ? styles.darkView : styles.lightView}>
              <TouchableOpacity style={styles.item} onPress={showHelpClick}>
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
                        props.navigation.navigate("About") &&
                          props.navigation.closeDrawer();
                      }}
                    >
                      <Text style={styles.itemText}>About</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate("ContactUs") &&
                          props.navigation.closeDrawer();
                      }}
                    >
                      <Text style={styles.itemText}>Contact</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate("Help") &&
                          props.navigation.closeDrawer();
                      }}
                      style={{ marginBottom: Metrics.baseMargin }}
                    >
                      <Text style={styles.itemText}>Help</Text>
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>
              <View style={{ marginTop: Metrics.doubleBaseMargin }}>
                <TouchableOpacity style={styles.item} onPress={isLogedInChek}>
                  <Image
                    source={logout}
                    style={{ width: width * 0.04, height: width * 0.04 }}
                  />
                  <Text style={styles.itemTextMain}>Logout</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* {showLoader()} */}
          {/* </DrawerItems> */}
        </ScrollView>
      </View>
    </View>
  );
}

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
    fontSize: width * 0.037,
    marginTop: Metrics.smallMargin,
    fontFamily: Font.regular,
  },

  itemTextMain: {
    color: COLORS.white,
    marginLeft: Metrics.smallMargin,
    fontSize: width * 0.045,
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

function mapStateToProps(state) {
  console.log("state from sidebar---->", state.login.shouldLoadData.username);
  return {
    theme: state.themeReducer.theme,
    username:
      state.login.shouldLoadData.username || state.reg.shouldLoadData.username,
  };
}
export default connect(mapStateToProps)(SideBar);
