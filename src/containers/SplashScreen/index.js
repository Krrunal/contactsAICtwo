import * as React from "react";
import * as action from "../../action";

import { BackHandler, Dimensions, Image, Text, View } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";
import { darkTheme, lightTheme } from "../theme/themeProps";
import styled, { ThemeProvider } from "styled-components/native";

import AsyncStorage from "@react-native-community/async-storage";
import Constants from "../../action/Constants";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import NavigationService from "../../action/navigationService";
import NetInfo from "@react-native-community/netinfo";
import Toast from "react-native-easy-toast";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import firebase from "../../services/FirebaseDatabase/db";
import styles from "./style";
import { switchTheme } from "../../action/themeAction";

var { width, height } = Dimensions.get("window");
class Splash extends React.Component {
  state = {
    isFirebaseLogin: "",
    shortcontacts: "",
  };

  backAction = () => {
    BackHandler.exitApp();
    return true;
  };
  getImage = () => {
    const { username } = this.props;

    firebase
      .firestore()
      .collection("user")
      .doc(username)
      .collection("contacts")
      .get()
      .then((snap) => {
        snap.docs.forEach((doc_id) => {
          if (doc_id._data.user_id == undefined) {
            //   console.log("undefined---->", doc_id._data.user_id);
          } else {
            //   console.log("---->", doc_id._data.user_id);
            const baseurl = Constants.baseurl;
            var _body = new FormData();
            _body.append("user_id", doc_id._data.user_id);

            fetch(baseurl + "get_uplopimages_user", {
              method: "POST",
              body: _body,
            })
              .then((response) => {
                return response.json();
              })
              .then((responseJson) => {
                //    console.log("data---->", responseJson);
                if (responseJson.status == false) {
                } else {
                  responseJson.data.map((img) => {
                    //console.log("data---->", img);
                    if (img.position == 1) {
                      firebase
                        .firestore()
                        .collection("user")
                        .doc(username)
                        .collection("contacts")
                        .doc(doc_id.id)
                        .update({ profile_image: img.profile });
                      console.log("getImage 111 --->", img.profile);
                    }
                    if (img.position == 2) {
                      firebase
                        .firestore()
                        .collection("user")
                        .doc(username)
                        .collection("contacts")
                        .doc(doc_id.id)
                        .update({ profile_image2: img.profile });
                      console.log("getImage   22 --->", img.profile);
                    }
                    if (img.position == 3) {
                      firebase
                        .firestore()
                        .collection("user")
                        .doc(username)
                        .collection("contacts")
                        .doc(doc_id.id)
                        .update({ profile_image3: img.profile });
                      console.log("getImage  3 --->", img.profile);
                    }
                  });

                  this.setState({ isLoading: false });
                }
              })
              .catch((error) => {
                console.log("name error---->", error);
              });
          }
        });
        // this.getImageFromDoc()
      });
  };

  getImageFromDoc = () => {
    const { username } = this.props;
    firebase
      .firestore()
      .collection("user")
      .doc(username)
      .collection("contacts")
      .get()
      .then((snap) => {
        snap.docs.forEach((doc_id) => {
          if (doc_id._data.isManually == undefined) {
          } else {
            if (doc_id._data.isManually == true) {
              const baseurl = Constants.baseurl;
              var _body = new FormData();
              _body.append("docid", doc_id.id);
              console.log("----->", doc_id.id);
              fetch(baseurl + "get_uplopimages_doc", {
                method: "POST",
                body: _body,
              })
                .then((response) => {
                  return response.json();
                })
                .then((responseJson) => {
                  if (responseJson.status == false) {
                    console.log("data---->", responseJson.status);
                    //  this.showContact()
                  } else {
                    responseJson.data.map((img) => {
                      console.log("profile --->", img);
                      if (img.position == 1) {
                        firebase
                          .firestore()
                          .collection("user")
                          .doc(username)
                          .collection("contacts")
                          .doc(doc_id.id)
                          .update({ profile_image: img.profile });
                        console.log("getImageFromDoc 11 --->", img.profile);
                      }
                      if (img.position == 2) {
                        firebase
                          .firestore()
                          .collection("user")
                          .doc(username)
                          .collection("contacts")
                          .doc(doc_id.id)
                          .update({ profile_image2: img.profile });
                        console.log("getImageFromDoc 22 --->", img.profile);
                      }
                      if (img.position == 3) {
                        firebase
                          .firestore()
                          .collection("user")
                          .doc(username)
                          .collection("contacts")
                          .doc(doc_id.id)
                          .update({ profile_image3: img.profile });
                        console.log("getImageFromDoc 3 --->", img.profile);
                      }
                      //  this.showContact()
                      this.setState({ isLoading: false });
                    });
                  }
                })
                .catch((error) => {
                  console.log("name error---->", error);
                });
            }
          }
        });
        //   this.getImageForImportContact()
      });
  };
  getImageForImportContact = () => {
    const { username } = this.props;
    firebase
      .firestore()
      .collection("user")
      .doc(username)
      .collection("contacts")
      .get()
      .then((snap) => {
        snap.docs.forEach((doc_id) => {
          // console.log(" iff----->", doc_id.id);
          if (doc_id._data.isImport == true) {
            //  console.log(" iff----->", doc_id._data.isImport);

            const baseurl = Constants.baseurl;
            var _body = new FormData();
            _body.append("docid", doc_id.id);

            fetch(baseurl + "get_uplopimages_doc", {
              method: "POST",
              body: _body,
            })
              .then((response) => {
                return response.json();
              })
              .then((responseJson) => {
                if (responseJson.status == false) {
                } else {
                  responseJson.data.map((img) => {
                    console.log(" isImport  profile --->", img);
                    if (img.position == 1) {
                      firebase
                        .firestore()
                        .collection("user")
                        .doc(username)
                        .collection("contacts")
                        .doc(doc_id.id)
                        .update({ profile_image: img.profile });
                      console.log(
                        "getImageForImportContact 111 --->",
                        img.profile
                      );
                    }
                    if (img.position == 2) {
                      firebase
                        .firestore()
                        .collection("user")
                        .doc(username)
                        .collection("contacts")
                        .doc(doc_id.id)
                        .update({ profile_image2: img.profile });
                      console.log(
                        "getImageForImportContact e 22 --->",
                        img.profile
                      );
                    }
                    if (img.position == 3) {
                      firebase
                        .firestore()
                        .collection("user")
                        .doc(username)
                        .collection("contacts")
                        .doc(doc_id.id)
                        .update({ profile_image3: img.profile });
                      console.log(
                        "getImageForImportContact 3 --->",
                        img.profile
                      );
                    }

                    this.setState({ isLoading: false });
                  });
                }
              })
              .catch((error) => {
                console.log("name error---->", error);
              });
          } else {
            //  console.log(" else  ----->", doc_id._data.isImport);
          }
        });
      });
  };
  showContact = () => {
    const { username } = this.props;
    this.getImage();
    this.getImageFromDoc();
    this.getImageForImportContact();
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", async () => {
      this.setState({ isLoading: true });
      this.setState({ contact: [] });
      this.setState({ contacts: "" });
      if (this.props.contactChange.mode === "first") {
        this.contactList();
        console.log(" splsh   first");
      } else {
        this.contactListFirst();
        console.log("splsh   Last");
      }
    });
  };
  contactList = async (dispatch) => {
    const { username } = this.props;
    firebase
      .firestore()
      .collection("user")
      .doc(username)
      .collection("contacts")
      .get()
      .then(async (snap) => {
        snap.forEach((doc) => {
          var item = doc._data;
          this.state.contact.push(item);
        });
        this.setState({ contacts: this.state.contact });
        const sort = this.state.contacts.sort(function (a, b) {
          if (a.last_name.toLowerCase() < b.last_name.toLowerCase()) return -1;
          if (a.last_name.toLowerCase() > b.last_name.toLowerCase()) return 1;
          return 0;
        });

        this.setState({ shortcontacts: sort });
        var data = this.state.shortcontacts.map((Data) => {
          return { item: Data, isSelect: false };
        });
        this.setState({ shortcontacts: data });
        this.props.isLogedIn == false
          ? this.props.navigation.reset(
              [NavigationActions.navigate({ routeName: "Login" })],
              0
            )
          : this.props.navigation.reset(
              [
                NavigationActions.navigate({
                  routeName: "SerachEditContact",
                  params: { user: this.state.shortcontacts },
                }),
              ],
              0
            );
      });
  };
  async contactListFirst() {
    const { username } = this.props;
    firebase
      .firestore()
      .collection("user")
      .doc(username)
      .collection("contacts")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          //   console.log("first_name----->", doc);
          var item = doc._data;
          this.state.contact.push(item);
          // console.log("first_name----->", item);
        });
        this.setState({ contacts: this.state.contact });
        const sort = this.state.contacts.sort(function (a, b) {
          if (a.first_name.toLowerCase() < b.first_name.toLowerCase())
            return -1;
          if (a.first_name.toLowerCase() > b.first_name.toLowerCase()) return 1;
          return 0;
        });
        this.setState({ shortcontacts: sort, data: sort, isLoading: false });
        var data = this.state.shortcontacts.map((Data) => {
          return { item: Data, isSelect: false };
        });
        this.setState({ shortcontacts: data });
        this.props.isLogedIn == false
          ? this.props.navigation.reset(
              [NavigationActions.navigate({ routeName: "Login" })],
              0
            )
          : this.props.navigation.reset(
              [
                NavigationActions.navigate({
                  routeName: "SerachEditContact",
                  params: { user: this.state.shortcontacts },
                }),
              ],
              0
            );
      });
  }
  // async componentDidMount() {
  //   BackHandler.addEventListener("hardwareBackPress", this.backAction);

  //   this.timeoutHandle = setTimeout(async () => {
  //     this.props.isLogedIn == false
  //       ? this.props.navigation.reset(
  //           [NavigationActions.navigate({ routeName: "Login" })],
  //           0
  //         )
  //       : this.props.navigation.reset(
  //           [NavigationActions.navigate({ routeName: "SerachEditContact" })],
  //           0
  //         );
  //   }, 2000);
  // }
  backGroundTask = () => {
    console.log("remandar ------>")
  };
  async componentDidMount() {
    // this.timer = setInterval(() => this.backGroundTask(), 1000);
    BackHandler.addEventListener("hardwareBackPress", this.backAction);
    this.timeoutHandle = setTimeout(async () => {
      this.showContact();
    });
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backAction);
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
        <View style={styles.container}>
          <Container>
            <Image
              source={require("../../assets/images/logo.png")}
              style={styles.logo}
            />
            <View style={styles.nameView}>
              <Text style={styles.text}> CONTACTS AIC </Text>
            </View>
            <Toast
              ref="toast"
              style={{
                backgroundColor:
                  this.props.theme.mode === "light" ? "black" : "white",
                width: width * 0.9,
                alignItems: "center",
              }}
              position="bottom"
              positionValue={200}
              fadeInDuration={1000}
              fadeOutDuration={1000}
              opacity={1}
              textStyle={{
                color: this.props.theme.mode === "light" ? "white" : "black",
                fontFamily: Font.medium,
                fontSize: width * 0.04,
                padding: 7,
              }}
            />
          </Container>
        </View>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    theme: state.themeReducer.theme,
    isLogedIn: state.login.shouldLoadData,
    username:
      state.login.shouldLoadData.username || state.reg.shouldLoadData.username,
    contactChange: state.sortContactsReducer.contactChange,
    nameChange: state.switchNameReducer.nameChange,
  };
}

export default connect(mapStateToProps)(Splash);

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backColor};
`;
