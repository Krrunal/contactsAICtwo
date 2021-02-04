import {
  BackHandler,
  Dimensions,
  FlatList,
  Image,
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component, useState } from "react";
import { Title, connectStyle } from "native-base";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Icon from "react-native-vector-icons/FontAwesome";
import Metrics from "../theme/Metrics";
import { Spinner } from "../../components/Spinner";
import _ from "lodash";
// import { getContact } from '../../services/FirebaseDatabase/getAllContact';
import { connect } from "react-redux";
import edit from "../../assets/images/edit.png";
import firebase from "../../services/FirebaseDatabase/db";
import plus from "../../assets/images/plus.png";
import reset from "../../assets/images/reset.png";
import rigthLogo from "../../assets/icons/contact.png";
import sideBar from "../../assets/images/sideBAR.png";
import style from "../../components/StatusBar/style.js";
import styles from "./style.js";

var { width, height } = Dimensions.get("screen");

class searchContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
      firstName: [],
      contacts: "",
      isLoading: false,
      shortcontacts: "",
      filteredShortcontacts: [],
      nameContacts: "",
      query: "",
      searchText: "",
      serachSection: false,
      result: "",
      workViewOpen: false,
    };
  }

  // componentWillMount() {
  //   BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  // }

  // componentWillUnmount() {
  //   BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  // }

  handleBackButton = () => {
    if (this.props.isLogedIn == false) {
    } else {
      BackHandler.exitApp();
      return true;
    }
  };
  componentDidMount() {
    const { navigation } = this.props;

    this.focusListener = navigation.addListener("didFocus", async () => {
      this.setState({ isLoading: true });
      // this.setState({shortcontacts:""})
      this.setState({ contact: [] });
      this.setState({ contacts: "" });
      if (this.props.contactChange.mode === "first") {
        this.contactList();
        console.log("first");
      } else {
        this.contactListFirst();
        console.log("Last");
      }
    });
  }

  // componentWillUnmount() {
  //   this.focusListener.remove();
  // }

  async contactList() {
    // this.setState({ isLoading: true })
    const { username } = this.props;
    firebase
      .firestore()
      .collection("user")
      .doc(username)
      .collection("contacts")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          var item = doc._data;
          //  console.log("contactList----->",item)
          this.state.contact.push(item);
        });
        this.setState({ contacts: this.state.contact });
        const sort = this.state.contacts.sort(function (a, b) {
          if (a.first_name.toLowerCase() < b.first_name.toLowerCase())
            return -1;
          if (a.first_name.toLowerCase() > b.first_name.toLowerCase()) return 1;
          return 0;
        });
        this.setState({ shortcontacts: sort, isLoading: false });
      });
  }
  async contactListFirst() {
    const { username } = this.props;
    // this.setState({ isLoading: true })
    firebase
      .firestore()
      .collection("user")
      .doc(username)
      .collection("contacts")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          var item = doc._data;
          console.log("first----->", item);
          this.state.contact.push(item);
        });
        this.setState({ contacts: this.state.contact });

        const sort = this.state.contacts.sort(function (a, b) {
          if (a.last_name.toLowerCase() < b.last_name.toLowerCase()) return -1;
          if (a.last_name.toLowerCase() > b.last_name.toLowerCase()) return 1;
          return 0;
        });
        this.setState({ shortcontacts: sort, isLoading: false });
      });
  }
  handleSearch = (text) => {
    this.setState({ serachSection: true });
    const { shortcontacts } = this.state;

    if (text) {
      const newData = shortcontacts.filter(function (item) {
        const itemData = item.first_name
          ? item.first_name.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      console.log("new data----->", newData);
      this.setState({ shortcontacts: newData, searchText: text });
    } else {
      this.setState({ shortcontacts: shortcontacts, searchText: "" });
    }
  };
  renderHeader() {
    return (
      <View style={{ alignItems: "center" }}>
        <View style={styles.blueView}>
          <View style={{ width: width * 0.9, flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.sideBarView}
              onPress={() => this.props.navigation.toggleDrawer()}
            >
              <Image source={sideBar} style={styles.sidebarStyle} />
            </TouchableOpacity>
            <View style={{ justifyContent: "center" }}>
              <View style={styles.sidebarViewCenter}>
                {this.state.serachSection ? (
                  <View>
                    <Text style={styles.searchTextInput}>Search Contacts</Text>
                  </View>
                ) : null}

                <TextInput
                  placeholder="Search Contacts "
                  placeholderTextColor={COLORS.main_sky_blue}
                  style={
                    this.state.serachSection == true
                      ? styles.placholderStyle
                      : styles.placholderStyle2
                  }
                  onChangeText={(text) => {
                    this.handleSearch(text);
                  }}
                  value={this.state.searchText}
                />
              </View>
            </View>

            <View style={styles.sidebarViewRight}>
              <Image source={rigthLogo} style={styles.sidebarStyleRight} />
            </View>
          </View>
        </View>
      </View>
    );
  }

  onFlatlist = (key, first_name, last_name, user_name) => {
    const { shortcontacts, firstName } = this.state;
    let FN = shortcontacts[key];
    firstName.push(FN);
    console.log("item---->", firstName);
    this.setState({ workViewOpen: true });
  };

  // onClickFlatlist = (key) =>{

  // }

  renderItem({ item, index }) {
    const lengthArray = this.state.contacts.length;

    const character = (item.user_name || item.first_name).charAt(0);
    return (
      <TouchableOpacity
        style={styles.quardView}
        onPress={() => {
          this.onFlatlist(
            index,
            item.last_name,
            item.first_name,
            item.user_name
          );
        }}
      >
        <View style={styles.imgView}>
          {item.profile_image == "" ? (
            item.profile_image2 == "" ? (
              item.profile_image3 == "" ? (
                <Text
                  style={[
                    styles.img_text,
                    {
                      color:
                        this.props.theme.mode === "light" ? "#1374A3" : "white",
                    },
                  ]}
                >
                  {character}
                </Text>
              ) : (
                <Image
                  source={{ uri: item.profile_image3 }}
                  style={styles.profileImage}
                />
              )
            ) : (
              <Image
                source={{ uri: item.profile_image2 }}
                style={styles.profileImage}
              />
            )
          ) : (
            <Image
              source={{ uri: item.profile_image }}
              style={styles.profileImage}
            />
          )}
        </View>

        {this.props.nameChange.mode == "firstName" ? (
          <Text
            style={[
              styles.personName,
              {
                color: this.props.theme.mode === "light" ? "#1374A3" : "white",
              },
            ]}
          >
            {item.user_name || item.first_name} {item.last_name}
          </Text>
        ) : (
          <Text
            style={[
              styles.personName,
              {
                color: this.props.theme.mode === "light" ? "#1374A3" : "white",
              },
            ]}
          >
            {item.last_name} {item.user_name || item.first_name}
          </Text>
        )}

        {item.isImport == false ? (
          <Image source={edit} style={styles.editImgStyle} />
        ) : (
          <Image source={reset} style={styles.resetImgStyle} />
        )}
      </TouchableOpacity>
    );
  }

  renderMiddle() {
    return (
      <View style={styles.scrollStyle}>
        <FlatList
          refreshing={true}
          keyExtractor={(item, index) => index.toString()}
          data={this.state.shortcontacts}
          extraData={this.state}
          numColumns={1}
          renderItem={this.renderItem.bind(this)}
        />
      </View>
    );
  }

  renderLast() {
    return (
      <View
        style={{
          alignItems: "flex-end",
          flex: 1,
          marginRight: Metrics.baseMargin,
        }}
      >
        <View style={{ flex: 1, bottom: 30, position: "absolute" }}>
          <TouchableOpacity
            style={styles.Whiteview}
            onPress={this.plusnavigate}
          >
            <Image source={plus} style={styles.plusStyle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  plusnavigate = () => {
    this.setState({ contact: [] });
    this.props.navigation.navigate("ManuallyAddContact");
  };

  showLoader() {
    if (this.state.isLoading == true) {
      return <Spinner />;
    }
  }
  renderItem2({ item, index }) {
    return (
      <View style={{}}>
        <View style={{ width: width * 0.8, alignItems: "center" }}>
          <Text
            style={[
              styles.midName,
              {
                marginTop: Metrics.baseMargin,
                marginBottom: Metrics.baseMargin,
              },
            ]}
          >
            {item.first_name} {item.last_name}
          </Text>
        </View>
        
          <View>
            <View style={{marginLeft:Metrics.smallMargin,flexDirection:'row'}}>
              {item.profile_image == "" ? null :
              <View style={{marginLeft:Metrics.smallMargin}}>
              <Image
                  source={{ uri: item.profile_image }}
                  style={styles.profileImage2}
                />
                </View>
              }
              {item.profile_image2 == "" ? null :
               <View style={{marginLeft:Metrics.smallMargin}}>
              <Image
                  source={{ uri: item.profile_image2 }}
                  style={styles.profileImage2}
                />
                </View>
              }
          {item.profile_image3 == "" ? null :
              <View style={{marginLeft:Metrics.smallMargin}}>
              <Image
                  source={{ uri: item.profile_image3 }}
                  style={styles.profileImage2}
                />
                </View>
              }
            </View>
          </View>
       
        {item.first_name == "" ? null : (
          <Text style={[styles.midName, { marginLeft: Metrics.baseMargin }]}>
            First Name :
            <Text style={[styles.personName]}> {item.first_name} </Text>
          </Text>
        )}
        {item.middle_name == "" ? null : (
          <Text style={[styles.midName, { marginLeft: Metrics.baseMargin }]}>
            Middle Name :
            <Text style={[styles.personName]}> {item.middle_name} </Text>
          </Text>
        )}
        {item.last_name == "" ? null : (
          <Text style={[styles.midName, { marginLeft: Metrics.baseMargin }]}>
            Last Name :
            <Text style={[styles.personName]}> {item.last_name} </Text>
          </Text>
        )}
        {item.nick_name == "" ? null : (
          <Text style={[styles.midName, { marginLeft: Metrics.baseMargin }]}>
            Nick Name :
            <Text style={[styles.personName]}> {item.nick_name} </Text>
          </Text>
        )}
         {item.number1.number == "" ? null : (
           <Text style={[styles.midName, { marginLeft: Metrics.baseMargin }]}>
                Number :
            <Text style={[styles.personName]}> {item.number1.number} 
            {item.number1.label !== "" ? 
                <Text>
                   ({ item.number1.label})
                </Text>
             : null}
            </Text>
          </Text>
        )}
        {item.number.number == "" || item.number == ""
          ? null
          : item.number.map((item, i) => (
              <Text
                style={[styles.midName, { marginLeft: Metrics.baseMargin }]}
              >
                Number :<Text style={[styles.personName]}>{item.number}</Text>
                {item.label !== "" ? (
                  <Text>
                   ({item.label})
                  </Text>
                  ) 
                  
                  : null}
              </Text>
            )) }

        {item.email1.email == "" || item.email1 == "" ? null : (
          <Text style={[styles.midName, { marginLeft: Metrics.baseMargin }]}>
            Email :
            <Text style={[styles.personName]}>
              {" "}
              {item.email1.email} (
              {item.email1.label !== "" ? item.email1.label : null})
            </Text>
          </Text>
        )}
        {item.email == ""
          ? null
          : item.email.map((item, index) => (
              <Text
                style={[styles.midName, { marginLeft: Metrics.baseMargin }]}
              >
                {" "}
                Website:
                <Text style={[styles.personName]}>
                  {" "}
                  {item.email} {item.label !== "" ? item.label : null}
                </Text>
              </Text>
            ))}

        {item.address1.address == "" || item.address1 == "" ? null : (
          <Text style={[styles.midName, { marginLeft: Metrics.baseMargin }]}>
            Address :
            <Text style={[styles.personName]}>
              {" "}
              {item.address1.address}(
              {item.address1.label !== "" ? item.address1.label : null})
            </Text>
          </Text>
        )}
        {item.address == ""
          ? null
          : item.address.map((item, index) => (
              <Text
                style={[styles.midName, { marginLeft: Metrics.baseMargin }]}
              >
                {" "}
                Website:
                <Text style={[styles.personName]}>
                  {" "}
                  {item.address}({item.label !== "" ? item.label : null})
                </Text>
              </Text>
            ))}
        {item.messenger1 == "" || item.messenger1 == "" ? null : (
          <Text style={[styles.midName, { marginLeft: Metrics.baseMargin }]}>
            Messenger Account :
            <Text style={[styles.personName]}>
              {item.messenger1.messanger}(
              {item.messenger1.label !== "" ? item.messenger1.label : null})
            </Text>
          </Text>
        )}

        {item.messenger == ""
          ? null
          : item.messenger.map((item, index) => (
              <Text
                style={[styles.midName, { marginLeft: Metrics.baseMargin }]}
              >
                {" "}
                Messenger Account :
                <Text style={[styles.personName]}>
                  {" "}
                  {item.messenger}
                  {item.label !== "" ? item.label : null}
                </Text>
              </Text>
            ))}

        {item.social_media1.socialMedia == "" ||
        item.social_media1 == "" ? null : (
          <Text style={[styles.midName, { marginLeft: Metrics.baseMargin }]}>
            Social Media :
            <Text style={[styles.personName]}>
              {item.social_media1.socialMedia}(
              {item.social_media1.label !== ""
                ? item.social_media1.label
                : null}
              )
            </Text>
          </Text>
        )}

        {item.social_media == ""
          ? null
          : item.social_media.map((item, index) => (
              <Text
                style={[styles.midName, { marginLeft: Metrics.baseMargin }]}
              >
                Social Media Account :
                <Text style={[styles.personName]}>
                  {" "}
                  {item.social_media}({item.label !== "" ? item.label : null}){" "}
                </Text>
              </Text>
            ))}

        {item.website.website == "" || item.website == "" ? null : (
          <Text style={[styles.midName, { marginLeft: Metrics.baseMargin }]}>
            Website :{" "}
            <Text style={[styles.personName]}>
              {item.website.website}(
              {item.website.label !== "" ? item.website.label : null})
            </Text>
          </Text>
        )}

        {item.websiteArray == ""
          ? null
          : item.websiteArray.map((item, index) => (
              <Text
                style={[styles.midName, { marginLeft: Metrics.baseMargin }]}
              >
                {" "}
                Website :{" "}
                <Text style={[styles.personName]}>
                  {item.website}
                  {item.label !== "" ? item.label : null}{" "}
                </Text>
              </Text>
            ))}
        {/* date */}

        {item.date == null || item.date.date == "" ? null : (
          <Text style={[styles.midName, { marginLeft: Metrics.baseMargin }]}>
            Date :{" "}
            <Text style={[styles.personName]}>
              {item.date.date} (
              {item.date.label !== "" ? item.date.label : null})
            </Text>
          </Text>
        )}

        {item.dateArray == ""
          ? null
          : item.dateArray.map((item, index) => (
              <View>
                <Text
                  style={[styles.midName, { marginLeft: Metrics.baseMargin }]}
                >
                  {" "}
                  Date :
                  <Text style={[styles.personName]}>
                    {" "}
                    {item.date}
                    {item.label !== "" ? item.label : null}{" "}
                  </Text>
                </Text>
              </View>
            ))}

        {/* note */}
        {item.note.note == "" || item.note == "" ? null : (
          <Text style={[styles.midName, { marginLeft: Metrics.baseMargin }]}>
            Note :
            <Text style={[styles.personName]}>
              {" "}
              {item.note.note} (
              {item.note.label !== "" ? item.note.label : null})
            </Text>
          </Text>
        )}

        {item.noteArray == ""
          ? null
          : item.noteArray.map((item, index) => (
              <View>
                {" "}
                <Text
                  style={[styles.midName, { marginLeft: Metrics.baseMargin }]}
                >
                  Note :{" "}
                  <Text style={[styles.personName]}>
                    {" "}
                    {item.note}
                    {item.label !== "" ? item.label : null}
                  </Text>
                </Text>
              </View>
            ))}

        {/* Company */}
        {item.company.company == "" || item.company == "" ? null : (
          <Text style={[styles.midName, { marginLeft: Metrics.baseMargin }]}>
            Company :
            <Text style={[styles.personName]}>{item.company.company}</Text>
          </Text>
        )}

        {item.companyArray == ""
          ? null
          : item.companyArray.map((item, index) => (
              <View>
                <Text
                  style={[styles.midName, { marginLeft: Metrics.baseMargin }]}
                >
                  Company :{" "}
                  <Text style={[styles.personName]}> {item.company} </Text>
                  <Text style={[styles.personName]}>
                    {" "}
                    {item.label !== "" ? item.label : null}
                  </Text>
                </Text>
              </View>
            ))}
        {/* JOb Title */}
        {item.jobTitle.jobTitle == "" || item.jobTitle == "" ? null : (
          <Text style={[styles.midName, { marginLeft: Metrics.baseMargin }]}>
            Job Title :
            <Text style={[styles.personName]}> {item.jobTitle.jobTitle} </Text>
          </Text>
        )}

        {item.jobTitleArray == "" || item.jobTitleArray == null
          ? null
          : item.jobTitleArray.map((item, index) => (
              <View>
                <Text
                  style={[styles.midName, { marginLeft: Metrics.baseMargin }]}
                >
                  Job Title :{" "}
                  <Text style={[styles.personName]}> {item.jobTitle} </Text>
                  <Text style={[styles.personName]}>
                    {" "}
                    {item.label !== "" ? item.label : null}{" "}
                  </Text>
                </Text>
              </View>
            ))}

        {/* Work hour */}
        {item.workHours.workHours == "" || item.workHours == "" ? null : (
          <Text style={[styles.midName, { marginLeft: Metrics.baseMargin }]}>
            Work Hours :{" "}
            <Text style={[styles.personName]}> {item.workHours.workHours}</Text>
          </Text>
        )}
        {item.workHoursArray == "" || item.workHoursArray == null
          ? null
          : item.workHoursArray.map((item, index) => (
              <View>
                <Text
                  style={[styles.midName, { marginLeft: Metrics.baseMargin }]}
                >
                  Work Hours :{" "}
                  <Text style={[styles.personName]}> {item.workHours} </Text>{" "}
                  <Text style={[styles.personName]}>
                    {" "}
                    {item.label !== "" ? item.label : null}{" "}
                  </Text>
                </Text>
              </View>
            ))}
      </View>
    );
  }
  onClose = () => {
    this.setState({ firstName: [] });
    this.setState({ workViewOpen: false });
  };
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
            {/* <View style={{backgroundColor: COLORS.white, flex: 1}}> */}
            {this.renderHeader()}
            {this.state.contacts == "" ? (
              <LineText> No contact imported to show </LineText>
            ) : null}

            <Modal
              style={styles.workModal}
              visible={this.state.workViewOpen}
              transparent={true}
              animationType="fade"
              onRequestClose={this.onClose}
            >
              <View style={styles.workModalView}>
                <View style={styles.content}>
                  <View style={{}}>
                    <View style={styles.popupHeader}>
                      <TouchableHighlight
                        onPress={this.onClose}
                        underlayColor="#DDDDDD"
                      >
                        <Icon name="times" size={30} />
                      </TouchableHighlight>
                    </View>
                    <FlatList
                      refreshing={true}
                      keyExtractor={(item, index) => index.toString()}
                      data={this.state.firstName}
                      extraData={this.state}
                      numColumns={1}
                      renderItem={this.renderItem2.bind(this)}
                    />
                  </View>
                  {/* {this.state.firstName.map((item, key) => (
                    <View key={key}>
                      <Text>{item.first_name}</Text>
                    </View>
                  ))} */}
                </View>
              </View>
            </Modal>
            {/* {this.renderModal()} */}
            {this.renderMiddle()}
            {this.renderLast()}
          </Container>
          {this.showLoader()}
        </View>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  //console.log("State Fromm  ------->", state);
  return {
    theme: state.themeReducer.theme,
    user_id:
      state.login.shouldLoadData.user_id || state.reg.shouldLoadData.user_id,
    username:
      state.login.shouldLoadData.username || state.reg.shouldLoadData.username,
    contactChange: state.sortContactsReducer.contactChange,
    nameChange: state.switchNameReducer.nameChange,
    isLogedIn: state.login.shouldLoadData,
  };
}
export default connect(mapStateToProps)(searchContact);

const Container = styled.View`
  flex: 1;
  width: 100%;
  /* align-items: center; */
  background-color: ${(props) => props.theme.backColor};
`;

const LineText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 15px;
  color: ${(props) => props.theme.textColor};
  line-height: 30px;
  text-align: center;
  margin-top: 12px;
`;
