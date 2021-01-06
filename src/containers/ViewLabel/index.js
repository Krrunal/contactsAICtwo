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
import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Labels from "../Labels/index";
import Metrics from "../theme/Metrics";
import { Spinner } from "../../components/Spinner";
import { connect } from "react-redux";
import firebase from "../../services/FirebaseDatabase/db";
import styles from "./style.js";

var { width, height } = Dimensions.get("screen");

class ViewLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
      contacts: [],
      label: [],
      labels: [],
      splitLabel: [],
      loader: false,
      shortcontacts: "",
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", async () => {
      this.contactList();
    });
  }

  componentWillUnmount() {
    this.focusListener.remove();
    this.setState({ contact: [] });
  }

  contactList = () => {
    const id = JSON.stringify(this.props.user_id);
    this.setState({ loader: true }, async () => {
      firebase
        .firestore()
        .collection(this.props.user_id)
        .get()
        .then((snap) => {
           snap.forEach((doc) => {
            console.log("doc data===>", doc._data);
            var item = doc._data;
            this.state.contact.push(item);
          });
          this.setState({ contacts: this.state.contact, loader: false });
         
          const sort = this.state.contacts.sort(function (a, b) {
            if (a.user_name.toLowerCase() < b.user_name.toLowerCase())
              return -1;
            if (a.user_name.toLowerCase() > b.user_name.toLowerCase()) return 1;
            return 0;
          });
          this.setState({ shortcontacts : sort });
        });
    });
  };

  renderHeader() {
    return (
      <Header
        title="View Labels"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  renderMiddle() {
    return (
      <View style={styles.doubleView}>
        <View style={styles.smallBlueView}>
          <Text style={styles.whiteText}>Contact</Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <TouchableOpacity
            style={styles.smallWhiteView}
            onPress={this.labelNavigate}
          >
            <Text style={styles.blueText}>Label</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  labelNavigate = () => {
    this.setState({ contact: [] });
    this.props.navigation.navigate("ViewLabelByName");
  };

  contactsList({ item, index }) {
    var labelArray = item.label;
    var nameArr = labelArray !== undefined && labelArray.split(",");
    console.log(nameArr);

    return (
      <View style={{ alignItems: "center" ,width:width}}>
        <View style={styles.middleView}>
          <View style={styles.firstView}>
            <Text style={[styles.FirstText]}>
              {item.user_name || item.first_name} {item.last_name}
            </Text>
          </View>
          <View>
            <View style={styles.secondView}>
              {nameArr !== false &&
                nameArr.map((item, key) => (
                  <Text style={styles.FirstText}>{item}</Text>
                ))}
            </View>
          </View>
        </View>
      </View>
    );
  }

  renderBigView() {
    return (
      <View style={{ alignItems: "center", flex: 1, marginTop:Metrics.baseMargin}}>
       
          <FlatList
            refreshing={true}
            keyExtractor={(item, index) => index.toString()}
            data={this.state.shortcontacts}
            extraData={this.state}
            numColumns={1}
            renderItem={this.contactsList.bind(this)}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
          />
        
      </View>
    );
  }

  showLoader() {
    if (this.state.loader == true) {
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
            {this.renderMiddle()}
            {this.state.contacts == "" ? (
              <View style={{ marginTop: Metrics.doubleBaseMargin }}>
                <LineText>Nothing to show</LineText>
              </View>
            ) : null}
            {this.renderBigView()}
          </Container>
          {this.showLoader()}
        </View>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  console.log("state------->",  state.login.shouldLoadData.user_id);
  return {
    theme: state.themeReducer.theme,
    user_id: state.login.shouldLoadData.user_id,
  };
}
export default connect(mapStateToProps)(ViewLabel);

const Container = styled.View`
  flex: 1;

  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;
const LineText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 20px;
  color: ${(props) => props.theme.textColor};
  line-height: 30px;
  text-align: center;
  margin-top: 12px;
`;
