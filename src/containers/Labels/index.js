import {
  Animated,
  CheckBox,
  Dimensions,
  Image,
  Keyboard,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component, useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import Constants from "../../action/Constants";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Icon from "react-native-vector-icons/FontAwesome5";
import Metrics from "../theme/Metrics";
import {Spinner} from '../../components/Spinner';
import Toast from 'react-native-easy-toast';
import { connect } from "react-redux";
import styles from "./style.js";

var { width, height } = Dimensions.get("window");
class labels extends Component {
  constructor() {
    super();
    this.state = {
      label: "",
      valueArrayLabel: [],
      //api data
      dataManage: [],
      disabledLabel: false,
      status: false,
      viewSection: false
    };
    this.indexlabel = 0;
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", async() => {
      this.labelList()
    });
  }

  labelList=()=>{
    const baseurl = Constants.baseurl;
    fetch(baseurl + "get_label")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log('response',responseJson.data.relation)
        if(responseJson.data.relation == "") {
          this.setState({ dataManage: [] });
        } else {
          var labelData = responseJson.data.relation.split(/,/);
          this.setState({ dataManage: labelData });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentWillUnmount() {
    // Remove the event listener
    // this.focusListener.remove();
  }

  renderHeader() {
    return (
      <Header
        title="Labels"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  ShowHideTextComponentView = () => {
    if (this.state.status == true) {
      this.setState({ status: false });
    } else {
      this.setState({ status: true });
    }
  };

  message = () => {
    this.state.label == ""
    ? this.refs.toast.show('Please enter label name')
    : this.labelApiCall()
  }

  onPressAddLabel=()=> {
    this.setState({viewSection:true})
  }

  labelApiCall = () => {
    const baseurl = Constants.baseurl;
    const relation = this.state.label;
    var _body = new FormData();
    _body.append("relation", relation);

    console.log("state value === > ", relation);
    fetch(baseurl + "add_label", {
      method: "POST",
      headers: {
        "Content-Type":
          Platform.OS == "ios" ? "application/json" : "multipart/form-data",
      },
      body: _body,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.refs.toast.show(responseJson.message);
        if(responseJson.data.relation == "") {
          this.setState({ dataManage: responseJson.data.relation, viewSection: false, label: '' });
        } else {
          var labelData = responseJson.data.relation.split(/,/);
          this.setState({ dataManage: labelData, viewSection: false, label: '' });
        }
      });
  };

  renderMiddle() {
    return (
      <ScrollView>
        <View style={{ flex: 1, marginBottom: Metrics.smallMargin }}>
          {this.state.dataManage.map((item, key) => (
            this.state.dataManage === [""] ?
              null :
              <View style={styles.tripleView} key={key}>
                {this.props.theme.mode === "light" ? (
                  <Icon name={"arrows-alt-v"} size={15} color={COLORS.black} />
                ) : (
                  <Icon name={"arrows-alt-v"} size={15} color={COLORS.white} />
                )}

                <TouchableOpacity
                  style={styles.manageView}
                  onPress={this.manageLabelnavigate}
                >
                  <Text style={styles.manageText}>Manage</Text>
                </TouchableOpacity>
                <NormalText> {item}</NormalText>
              </View>
          ))}

        {this.state.viewSection == true &&
          <View style={styles.addlabelView}>
            <TextInput
              placeholder="New Label"
              style={this.props.theme.mode === "light" ? styles.stylefiledText : styles.stylefiledTextBlack}
              value={this.state.label}
              onChangeText={(value) => this.setState({ label: value })}
              ref={(input) => { this.label = input }}
              keyboardType={"default"}
              autoCapitalize={false}
              // onSubmitEditing={this.labelApiCall}
              placeholderTextColor={COLORS.black }
            />
          </View>
        }
        </View>
      </ScrollView>
    );
  }

  manageLabelnavigate = () => {
    this.props.navigation.navigate("ManageLable");
  };

  navigateToDelete = () => {
    this.props.navigation.navigate("SelectLable");
  }
  showLoader() {
    if (this.state.loader == true) {
      return <Spinner />
    }
  }

  renderLast() {
    return (
      <View style={{ alignItems: "center", flex: 1 }}>
        <View
          style={{
            flex: 1,
            bottom: 35,
            position: "absolute",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={styles.Whiteview}
            onPress={this.state.viewSection == false ? this.onPressAddLabel : this.message}
            disable={this.state.disabledLabel}
          >
            <Text style={styles.bottomButton}>Add</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.WhiteviewTwo} onPress={this.navigateToDelete} >
            <Text style={styles.bottomButton}>Delete</Text>
          </TouchableOpacity>
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

        <Container>
          {this.renderHeader()}
          {this.renderMiddle()}
          {this.renderLast()}
            <Toast
              ref="toast"
              style={{
                backgroundColor: this.props.theme.mode === "light" ? 'black': 'white', 
                width: width * 0.8, 
                alignItems: 'center' 
              }}
              position='bottom'
              positionValue={200}
              fadeInDuration={1000}
              fadeOutDuration={1000}
              opacity={1}
              textStyle={{
                color: this.props.theme.mode === "light" ? 'white' : 'black',
                fontFamily: Font.medium,
                fontSize: width * 0.04
              }}
            />
          {this.showLoader()}
        </Container>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
});

export default connect(mapStateToProps)(labels);

const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${(props) => props.theme.backColor};
`;
const NormalText = styled.Text`
  font-family: Roboto-medium;
  font-size: 17px;
  margin-left: 15px;
  text-transform: capitalize;
  color: ${(props) => props.theme.iconColor};
`;
const IconColor = styled.Image`
  color: ${(props) => props.theme.textColor};
`;
const ScrollView = styled.ScrollView`
  /* color: ${(props) => props.theme.textColor}; */
  /* flex: 1; */
  height: 60%;
  margin-bottom: 100px;
`;
const TextInput = styled.TextInput`
  font-family: Roboto-Regular;
  font-size: 17px;
  color: ${(props) => props.theme.iconColor};
  margin-left: 15px;
`;