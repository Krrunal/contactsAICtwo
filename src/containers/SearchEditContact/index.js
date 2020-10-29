import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component, useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Metrics from "../theme/Metrics";
import firebase from '../../services/FirebaseDatabase/db';
// import { getContact } from '../../services/FirebaseDatabase/getAllContact';
import { TouchableHighlight } from "react-native-gesture-handler";
import { connect } from "react-redux";
import edit from "../../assets/images/edit.png";
import outerimg from "../../assets/images/outerimg.png";
import plus from "../../assets/images/plus.png";
import reset from "../../assets/images/reset.png";
import styles from "./style.js";
import style from "../../components/StatusBar/style.js";

var { width, height } = Dimensions.get("window");

class searchContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
      contacts: '',
      };
  }

  componentDidMount() {
    firebase.firestore().collection(this.props.user_id).get()
      .then((snap) => {
      snap.forEach((doc) => {
        console.log(doc._data)
        var item = doc._data;
        this.state.contact.push(item);
      });
      this.setState({ contacts: this.state.contact})
      console.log('contact----->',this.state.contacts)
    });
  }


  renderHeader() {
    return (
      <Header
        title="Search Contacts"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  renderItem({ item, index }) {
    const lengthArray = this.state.contacts.length;
    const character = (item.user_name || item.first_name).charAt(0)
    // console.log('length===>',character)
    return (
      <View style={styles.quardView}>
        <View style={styles.imgView}>
          <Text style={[styles.img_text,{
            color: this.props.theme.mode === "light" 
            ? 'black' 
            : "white"}]}>{character}
              {/* {item.user_name.substring(0, 1) || item.first_name.substring(0, 1)} */}
          </Text>
        </View>
        {/* <Image source={outerimg} style={styles.outerImgStyle} /> */}
        <Text style={[styles.personName,
          {color: this.props.theme.mode === "light" 
            ? 'black' 
            : "white"}]}>
            {item.user_name || item.first_name}
        </Text>
        {/* <TouchableHighlight underlayColor='transparant'
          onPress={() => this.navigate(
            item.id,
            item.data.first_name,
            item.data.middle_name,
            item.data.last_name,
            item.data.nick_name,
            item.data.number1,
            item.data.number2,
            item.data.number3,
            item.data.email1,
            item.data.email2,
            item.data.address,
            item.data.messenger1,
            item.data.messenger2,
            item.data.social_media1,
            item.data.social_media2,
            item.data.website1,
            item.data.website2,
            item.data.dob,
            item.data.note,
            item.data.company,
            item.data.job_title,
            item.data.work_hour
    )}> */}
          <Image source={edit} style={styles.editImgStyle} />
        {/* </TouchableHighlight> */}
        <Image source={reset} style={styles.resetImgStyle} />
      </View>
    );
  }

  // navigate = ()=>{
  //   this.props.navigation.dispatch(
  //     CommonActions.navigate('editContact', {
  //       name: 'editContact',
  //     })
  //   )
  // }

  //   navigate = (
  //     id,
  //     first_name,
  //     middle_name,
  //     last_name,
  //     nick_name,
  //     number1,
  //     number2,
  //     number3,
  //     email1,
  //     email2,
  //     address,
  //     messenger1,
  //     messenger2,
  //     social_media1,
  //     social_media2,
  //     website1,
  //     website2,
  //     dob,
  //     note,
  //     company,
  //     job_title,
  //     work_hour,
  // ) => {
  //     // this.props.navigation.navigate(screen:'editContact',
  //     //   params: { user: 'jane' }
  //     // })
  //     this.props.navigation.dispatch(
  //       CommonActions.navigate('editContact', {
  //         name: 'editContact',
  //         id: id,
  //         first_name: first_name,
  //         middle_name: middle_name,
  //         last_name: last_name,
  //         nick_name: nick_name,
  //         number1: number1,
  //         number2: number2,
  //         number3: number3,
  //         email1: email1,
  //         email2: email2,
  //         address: address,
  //         messenger1: messenger1,
  //         messenger2: messenger2,
  //         social_media1: social_media1,
  //         social_media2: social_media2,
  //         website1: website1,
  //         website2: website2,
  //         dob: dob,
  //         note: note,
  //         company: company,
  //         job_title: job_title,
  //         work_hour: work_hour,
  //         //routes: [{ name: 'Login' }],
  //       })
  //     );
  //   }

  renderMiddle() {
    return (
      <View style={styles.scrollStyle}>
        <ScrollView style={{ marginTop: Metrics.doubleBaseMargin }}>
          <View style={styles.mainView}>

              <FlatList
                refreshing={true}
                keyExtractor={(item, index) => index.toString()}
                data={this.state.contacts}
                extraData={this.state}
                numColumns={1}
                renderItem={this.renderItem.bind(this)}
              />

          </View>
        </ScrollView>
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
    this.props.navigation.navigate('ManuallyAddContact')
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
        <Container>
          {/* <View style={{backgroundColor: COLORS.white, flex: 1}}> */}
          {this.renderHeader()}

          {this.renderMiddle()}

          {this.renderLast()}
          {/* </View> */}
        </Container>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    theme: state.themeReducer.theme,
    user_id: state.login.shouldLoadData.user_id
  };
}
export default connect(mapStateToProps)(searchContact);

const Container = styled.View`
  flex: 1;

  width: 100%;
  /* align-items: center; */
  background-color: ${(props) => props.theme.backColor};
`;
const NormalText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 17px;
  color: ${(props) => props.theme.textColor};
  margin-left: 5px;
`;
