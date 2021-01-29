import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import React, { Component, useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Metrics from "../theme/Metrics";
import { Spinner } from "../../components/Spinner";
import _ from 'lodash'
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
      contacts: "",
      isLoading: false,
      shortcontacts: "",
      filteredShortcontacts:[],
      nameContacts: "",
      query:"",
      searchText:"",
      serachSection:false,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    //   this.focusListener = navigation.addListener("didFocus", async () => {
    if (this.props.contactChange.mode === "first") {
      this.contactList();
      console.log("first");
    } else {
      this.contactListFirst();
      console.log("Last");
    }
 
  }

  async contactList() {
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
          console.log("contactList----->",item)
          this.state.contact.push(item);
        });
        this.setState({ contacts : this.state.contact });
        const sort = this.state.contacts.sort(function (a, b) {
          if (a.first_name.toLowerCase() < b.first_name.toLowerCase())
            return -1;
          if (a.first_name.toLowerCase() > b.first_name.toLowerCase()) return 1;
          return 0;
        });
        this.setState({ shortcontacts: sort });
      });
  }
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
          var item = doc._data;
          console.log("first----->",item)
          this.state.contact.push(item);
        });
        this.setState({ contacts: this.state.contact });

        const sort = this.state.contacts.sort(function (a, b) {
          if (a.last_name.toLowerCase() < b.last_name.toLowerCase()) return -1;
          if (a.last_name.toLowerCase() > b.last_name.toLowerCase()) return 1;
          return 0;
        });
        this.setState({ shortcontacts: sort });
     });
  }
  handleSearch = (text) => {
    this.setState({serachSection:true})
    const { shortcontacts ,filteredShortcontacts} = this.state;
    
    if(text){
      const newData = shortcontacts.filter(
        function(item){
            const itemData = item.first_name 
                ? item.first_name.toUpperCase()
                : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        console.log("new data----->",newData)
        this.setState({shortcontacts : newData , searchText : text})
    }else{
      this.setState({ shortcontacts : shortcontacts , searchText : ""})
    }
  
  }
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
            <View style={{ justifyContent:'center',}}>
              <View style={styles.sidebarViewCenter}>
                {this.state.serachSection ? <View>
                  <Text style={styles.searchTextInput}>Search Contacts</Text>
                </View> :null}
               
                <TextInput
                    placeholder="Search Contacts "
                    placeholderTextColor = {COLORS.main_sky_blue}
                    style={this.state.serachSection == true  ?  styles.placholderStyle : styles.placholderStyle2 }
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

  renderItem({ item, index }) {
    const lengthArray = this.state.contacts.length;

    const character = (item.user_name || item.first_name).charAt(0);
    return (
      <View style={styles.quardView}>
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
         {item.last_name}{item.user_name || item.first_name}
          </Text>
        )}
        {item.isImport == false ? (
          <Image source={edit} style={styles.editImgStyle} />
        ) : (
          <Image source={reset} style={styles.resetImgStyle} />
        )}
      </View>
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
  return {
    theme: state.themeReducer.theme,
    user_id:
      state.login.shouldLoadData.user_id || state.reg.shouldLoadData.user_id,
    username:
      state.login.shouldLoadData.username || state.reg.shouldLoadData.username,
    contactChange: state.sortContactsReducer.contactChange,
    nameChange: state.switchNameReducer.nameChange,
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
