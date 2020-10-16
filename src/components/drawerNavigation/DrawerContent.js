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
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React, { Component, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddContact from "../../containers/AddContact/index";
import { COLORS } from "../../containers/theme/Colors";
import { CommonActions } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Metrics from "../../containers/theme/Metrics";
import Share from "../../containers/Share/index";
import { Text } from "react-native-paper";
import contact from "../../assets/icons/contact.png";
import help from "../../assets/icons/help.png";
import info from "../../assets/icons/info.png";
import innerimg from "../../assets/images/innerimg.png";
import label from "../../assets/icons/label.png";
import navIcon from "../../assets/icons/navIcon.png";
import setting from "../../assets/icons/settings.png";
import sideBAR from "../../assets/images/sideBAR.png";
import { useTheme } from "@react-navigation/native";

// import Share from '../../containers/Share /index';

var { width, height } = Dimensions.get("window");
// import styles from  './style'

export function DrawerContent(props, navigation) {
  state = {
    status: false,
  };

  //theme
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => {
    return state.myDarMode;
  });

  const [shouldShowInfo, setShouldShowInfo] = useState(false);
  const [shouldShowContact, setShouldShowContact] = useState(false);
  const [shouldShowLabel, setShouldShowLabel] = useState(false);
  const [shouldShowSetting, setShouldShowSetting] = useState(false);
  const [shouldShowHelp, setShouldShowHelp] = useState(false);
  //this.state = {
  //   status: false,
  //   show:true,
  // };

  toggleStatus = () => {
    this.setState({
      status: !this.state.status,
    });
    console.log("toggle button handler: " + this.state.status);
  };

  return (
    <View style={styles.mainContent}>
      <View style={styles.whiteView}>
        <View style={{ width: width * 0.6, flexDirection: "row" }}>
          <View style={styles.sideBarViewContent}>
            <Image source={navIcon} style={styles.sidebarStyle} />
          </View>
          <View style={styles.sidebarViewCenterContent}>
            <Text style={styles.centerText}>CONTACTS AIC</Text>
          </View>
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <View style={{ marginLeft: Metrics.doubleBaseMargin }}>
          <TouchableHighlight activeOpacity={0.6} underlayColor="">
            <View
              styles={{
                width: width,
                height: height * 0.5,
                backgroundColor: COLORS.main_text_color,
              }}
            >
              <TouchableOpacity style={styles.item}>
                {/* <Icon name={'info-circle'} size={15} color={COLORS.white}/> */}
                <Image source={info} style={{ width: 14, height: 15 }} />

                <TouchableOpacity
                  onPress={() => setShouldShowInfo(!shouldShowInfo)}
                >
                  <Text style={styles.itemTextMain}>My Information</Text>
                </TouchableOpacity>
              </TouchableOpacity>
              <View style={{}}>
                {shouldShowInfo ? (
                  <View style={styles.drawerStyle}>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate("Share");
                      }}
                    >
                      <Text style={styles.itemText}>Share</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate("MyContactInfromation");
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
          </TouchableHighlight>
          <TouchableOpacity
            onPress={() => setShouldShowContact(!shouldShowContact)}
            style={styles.item}
          >
            <Image source={contact} style={{ width: 14, height: 15 }} />
            <Text style={styles.itemTextMain}>Contacts(2)</Text>
          </TouchableOpacity>
          <View style={{}}>
            {shouldShowContact ? (
              <View style={styles.drawerStyle}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("SerachEditContact");
                  }}
                >
                  <Text style={styles.itemText}>View</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("pendingRequest");
                  }}
                >
                  <Text style={styles.itemText}>Pending Requests(2)</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("AddContact");
                  }}
                >
                  <Text style={styles.itemText}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("ImportContacts");
                  }}
                >
                  <Text style={styles.itemText}>Import</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("Invite");
                  }}
                >
                  <Text style={styles.itemText}>Invite</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>

          <TouchableOpacity
            onPress={() => setShouldShowLabel(!shouldShowLabel)}
            style={styles.item}
          >
            <Image source={label} style={{ width: 14, height: 15 }} />
            <Text style={styles.itemTextMain}>My Labels</Text>
          </TouchableOpacity>
          <View style={{}}>
            {shouldShowLabel ? (
              <View style={styles.drawerStyle}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("Label");
                  }}
                >
                  <Text style={styles.itemText}>Manage</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("ViewLabel");
                  }}
                >
                  <Text style={styles.itemText}>View</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>

          <TouchableOpacity
            onPress={() => setShouldShowSetting(!shouldShowSetting)}
            style={styles.item}
          >
            <Image source={setting} style={{ width: 14, height: 15 }} />
            <Text style={styles.itemTextMain}>Settings</Text>
          </TouchableOpacity>
          <View style={{}}>
            {shouldShowSetting ? (
              <View style={styles.drawerStyle}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("display");
                  }}
                >
                  <Text style={styles.itemText}>Display</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("Profile");
                  }}
                >
                  <Text style={styles.itemText}>My Account</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>

          <TouchableOpacity
            onPress={() => setShouldShowHelp(!shouldShowHelp)}
            style={styles.itemHelp}
          >
            <Image source={help} style={{ width: 14, height: 15 }} />

            <Text style={styles.itemTextMain}>Help/Support</Text>
          </TouchableOpacity>

          <View style={{}}>
            {shouldShowHelp ? (
              <View style={styles.drawerStyle}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("About");
                  }}
                >
                  <Text style={styles.itemText}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("ContactUs");
                  }}
                >
                  <Text style={styles.itemText}>Contact</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("help");
                  }}
                  style={{ marginBottom: Metrics.baseMargin }}
                >
                  <Text style={styles.itemText}>Help</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    backgroundColor: COLORS.main_text_color,
    flex: 1,
  },
  whiteView: {
    width: width * 0.6,
    height: height * 0.075,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: Metrics.baseMargin,
    marginTop: Metrics.baseMargin,
  },
  sideBarViewContent: {
    justifyContent: "center",
    margin: Metrics.xsmallMargin,
  },
  sidebarViewCenterContent: {
    width: width * 0.5,
    //  justifyContent: 'center',
    alignItems: "center",
    flexDirection: "row",
    marginLeft: Metrics.smallMargin,
  },
  centerText: {
    fontSize: width * 0.045,
    color: COLORS.main_text_color,
    fontFamily: "Roboto-Bold",
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
    marginTop: Metrics.doubleBaseMargin,
  },
  itemText: {
    color: COLORS.white,
    marginLeft: Metrics.smallMargin,
    fontSize: 17,
    marginTop: Metrics.smallMargin,
  },
  itemTextMain: {
    color: COLORS.white,
    marginLeft: Metrics.smallMargin,
    fontSize: width * 0.045,
    fontFamily: "Roboto-Bold",
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
});
