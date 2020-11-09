import {
  CheckBox,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { Component } from "react";
import { darkTheme, lightTheme } from "../theme/themeProps";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Icon from "react-native-vector-icons/FontAwesome5";
import Metrics from "../theme/Metrics";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import plus from "../../assets/images/plus.png";
import styles from "./chooseContactFromLabelStyle.js";
import { switchTheme } from "../../action/themeAction";
import Constants from "../../action/Constants";
import AsyncStorage from '@react-native-community/async-storage'
import { Spinner } from "../../components/Spinner";
import Toast from 'react-native-easy-toast';

var { width, height } = Dimensions.get("window");

class chooseContactFromLabel extends Component {
  state = {
    dataManage: [],
    checked: false,
    isSelected: false,
    selectedRealetion: [],
    data: "",
    isLoading: false
  };

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", async() => {
      this.labelList()
    });
  }

  labelList=()=>{
    this.setState({ isLoading: true }, async () => {
      const baseurl = Constants.baseurl;
      fetch(baseurl + "get_label")
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          var arr = responseJson.data.relation.split(/,/).map((item) => {
            return { relation: item, isSelect: false };
          });
          this.setState({ dataManage: arr, isLoading: false });
        })
        .catch((error) => {
          console.error(error);
          this.setState({ isLoading: false });
        });
    })
  }

  onchecked = (keyInd, item) => {
    const { dataManage, selectedRealetion } = this.state;
    let arr = dataManage.map((item, key) => {
      if (keyInd == key) {
        item.isSelect = !item.isSelect;
      }
      return { ...item };
    });
    // console.log("after arr ===> ", arr);
    this.setState({ dataManage: arr });
    console.log("datatmanage arr ===> ", dataManage);
  };

  renderHeader() {
    return (
      <Header
        title="Add Contacts AIC User(s)"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  renderMiddle() {
    return (
      <View
        style={{ height: height * 0.65, marginBottom: Metrics.smallMargin }}
      >
        <ScrollView>
          {this.state.dataManage.map((item, key) => (
            <View style={styles.mainView}>
              <CheckBox
                value={item.isSelect}
                onChange={() => {
                  this.onchecked(key, item.isSelect);
                }}
                // onValueChange={item.isSelect}
                tintColors={{ true: "#1374A3", false: "#000" }}
              />
              <NormalText>{item.relation}</NormalText>
            </View>
          ))}

          {this.state.viewSection == true && (
            <View style={styles.addlabelView}>
              <TextInput
                placeholder="New Label"
                style={
                  this.props.theme.mode === "light"
                    ? styles.stylefiledText
                    : styles.stylefiledTextBlack
                }
                value={this.state.label}
                onChangeText={(value) => this.setState({ label: value })}
                ref={(input) => {
                  this.label = input;
                }}
                keyboardType={"default"}
                autoCapitalize={false}
                // onSubmitEditing={this.labelApiCall}
                placeholderTextColor={COLORS.black}
              />
            </View>
          )}

          <View style={styles.mainView}>
            <Image
              source={plus}
              style={{
                width: width * 0.055,
                height: width * 0.055,
                marginLeft: Metrics.xsmallMargin,
              }}
            />
            <View style={styles.smallWhiteview}>
              <Text
                style={{
                  fontSize: width * 0.03,
                  fontFamily: Font.regular,
                }}
              >
                Add
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  renderLast() {
    return (
      <View style={{ alignItems: "center", flex: 1 }}>
        <View
          style={{
            flex: 1,
            bottom: 20,
            position: "absolute",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={styles.Whiteview}
            onPress={() =>this.forAddContactNavigate()}
          >
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: Font.medium,
                fontSize: width * 0.045,
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  async forAddContactNavigate() {
   
    const { dataManage, selectedRealetion } = this.state;

    dataManage.map((item) => {
      item.isSelect == true
        ? selectedRealetion.push(item.relation)
        : console.log("selected------->", item.isSelect);
    });

    const selected = selectedRealetion.toString();
    await AsyncStorage.setItem("@selectedLabel", selected);

    if(selected == '') {
      this.refs.toast.show('Please select label to associate with USERNAME')
    } else {
      this.props.navigation.navigate('ForAddContact');
    }

    this.setState({ selectedRealetion: [] });
  }

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

      <View style={{flex: 1}}>
        <Container>
          {this.renderHeader()}
          {this.renderMiddle()}
          {this.renderLast()}
        </Container>
        <Toast
          ref="toast"
          style={{
            backgroundColor:
              this.props.theme.mode === "light" ? "black" : "white",
            width: width * 0.8,
            alignItems: "center",
          }}
          position="bottom"
          positionValue={250}
          fadeInDuration={100}
          fadeOutDuration={2000}
          opacity={1}
          textStyle={{
            color: this.props.theme.mode === "light" ? "white" : "black",
            fontFamily: Font.medium,
            fontSize: width * 0.04,
          }}
        />
        {this.showLoader()}
      </View>
      </ThemeProvider>
    );
  }
}
const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
});

const mapDispatchToProps = (dispatch) => ({
  switchTheme: bindActionCreators(switchTheme, dispatch),
});

export default connect(mapStateToProps)(chooseContactFromLabel);

const Container = styled.View`
  flex: 1;
  width: 100%;
  /* align-items: center; */
  background-color: ${(props) => props.theme.backColor};
`;
const NormalText = styled.Text`
  font-family: Roboto-Light;
  font-size: 15px;
  color: ${(props) => props.theme.iconColor};
  text-transform:capitalize
`;
