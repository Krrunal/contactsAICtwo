import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component, useState } from "react";

import { COLORS } from "../../containers/theme/Colors";
import { DrawerItems } from "react-navigation-drawer";
import Font from "../../containers/theme/font";
import GeneralStatusBar from "../StatusBar/index";
import Metrics from "../../containers/theme/Metrics";
import PropTypes from "prop-types";
import { Text } from "react-native-paper";
import contact from "../../assets/icons/contact.png";
import help from "../../assets/icons/help.png";
import info from "../../assets/icons/info.png";
import label from "../../assets/icons/label.png";
import navIcon from "../../assets/icons/navIcon.png";
import setting from "../../assets/icons/settings.png";

var { width, height } = Dimensions.get("window");

export function SideBar(props) {
  state = {
    status: false,
  };

  const [shouldShowInfo, setShouldShowInfo] = useState(false);
  const [shouldShowContact, setShouldShowContact] = useState(false);
  const [shouldShowLabel, setShouldShowLabel] = useState(false);
  const [shouldShowSetting, setShouldShowSetting] = useState(false);
  const [shouldShowHelp, setShouldShowHelp] = useState(false);

  toggleStatus = () => {
    this.setState({
      status: !this.state.status,
    });
    console.log("toggle button handler: " + this.state.status);
  };

  const showInfoClick = () => {
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
    }else{
      setShouldShowSetting(!shouldShowSetting);
    }
  };
  const showHelpClick = () =>{
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
      setShouldShowHelp(!shouldShowHelp)

    }else{
      setShouldShowHelp(!shouldShowHelp)
    }
  }
  return (
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
              <Text style={styles.itemTextMain}>My Information</Text>
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
                    <Text style={styles.itemText}>My Contact Information</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
          </View>

          <View style={shouldShowContact ? styles.darkView : styles.lightView}>
            <TouchableOpacity style={styles.item} onPress={showContactClick}>
              <Image
                source={contact}
                style={{ width: width * 0.04, height: width * 0.04 }}
              />
              <Text style={styles.itemTextMain}>Contacts</Text>
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
                    <Text style={styles.itemText}>Pending Requests</Text>
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

          <View style={shouldShowSetting ? styles.darkView : styles.lightView}>
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
            <TouchableOpacity
              style={styles.item}
              onPress={showHelpClick}
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
          </View>
        </View>
        {/* </DrawerItems> */}
      </ScrollView>
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

    // marginVertical: Metrics.doubleBaseMargin,
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
});

// function mapStateToProps(state) {
//   return {
//     theme: state.themeReducer.theme,
   
//     username: (state.login.shouldLoadData.username || state.reg.shouldLoadData.username),

//   };
// }

// const mapDispatchToProps = (dispatch) => ({
//   switchTheme: bindActionCreators(switchTheme, dispatch),
// });

// export default connect(mapStateToProps)(Add);
