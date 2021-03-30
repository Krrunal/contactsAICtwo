import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Keyboard,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon, { FA5Style } from "react-native-vector-icons/FontAwesome5";
import React, { Component, useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import AsyncStorage from "@react-native-community/async-storage";
import AutoDragSortableView from "./AutoDragSortableView";
import { COLORS } from "../theme/Colors.js";
import Constants from "../../action/Constants";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import { Label } from "native-base";
import Metrics from "../theme/Metrics";
import { Spinner } from "../../components/Spinner";
import Toast from "react-native-easy-toast";
import { VERSION } from "lodash";
import { connect } from "react-redux";
import styles from "./style.js";

var { width, height } = Dimensions.get("window");

const parentWidth = width;
const childrenWidth = width - 20;
const childrenHeight = 65;

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
      viewSection: false,
      isLoading: false,
      selectedName: "",
      addView:false,
    };
    this.indexlabel = 0;
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", async () => {
      this.labelList();
    });
  }

  labelList = () => {
    this.setState({ isLoading: true }, async () => {
      const baseurl = Constants.baseurl;
      fetch(baseurl + "getlabel")
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          if (responseJson.data.relation == "") {
            this.setState({ dataManage: [], isLoading: false });
          } else {
          
            var labelData = responseJson.data.map((item,index) => {
                 return { relation: item.relation, isSelect: false };
              });
              console.log(" labelData    --->", labelData); 
            this.setState({ dataManage : labelData, isLoading: false });
           this.setState({ isLoading: false });
          }
        })
        .catch((error) => {
          console.error(error);
          this.setState({ isLoading: false });
        });
    });
  };

  onManage = async (keyInd, item, key) => {
    const { dataManage, selectedName } = this.state;

    let arr = dataManage.map((item, key) => {
      if (keyInd == key) {
        item.isSelect = !item.isSelect;
      }
      return { ...item };
    });
    this.setState({ dataManage: arr });
    dataManage.map(async (item) => {
      item.isSelect == true
        ? await AsyncStorage.setItem("@selectedName", item.relation)
        : console.log("selected------->", item.isSelect);
    });
    const selected = selectedName.toString();
    this.props.navigation.navigate("ManageLable", { otherParam: selected });
  };

  renderHeader() {
    return (
      <Header
        title="Labels"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  message = () => {
    this.state.label == ""
      ? this.refs.toast.show("Please enter label name")
      : this.textChange();
  };

  onPressAddLabel = () => {
    this.setState({ viewSection: true });
    this.setState({ addView: true });

  };

  labelApiCall = () => {
    const baseurl = Constants.baseurl;
    const relation = this.state.label;
    var _body = new FormData();
    _body.append("relation", relation);
    // console.log("state value === > ", relation);
    fetch(baseurl + "addlabel", {
      method: "POST",
      headers: {
        "Content-Type":
          Platform.OS == "ios" ? "application/json" : "multipart/form-data",
      },
      body: _body,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ viewSection : false , label: "",});
        console.log("add labe; ---->",responseJson.message)
        this.refs.toast.show(responseJson.message);
        
        this.labelList();
      
      });
  };

  textChange = (value) => {
    var valueLength = this.state.label;

    if (valueLength.length <= 3) {
      //this.refs.toast.show("Label contain maximum 3 character")
      alert("Label contain maximum 3 character");
    } else {
      this.setState({ addView: false });
      this.labelApiCall();
    }
  };

  renderMiddle() {
    return (
      <ScrollView  keyboardShouldPersistTaps={true}>
        <View style={{ flex: 1, marginBottom: Metrics.smallMargin }}>
          {this.state.dataManage.map((item, key) =>
            this.state.dataManage === [""] ? null : (
              <View key={key} style={styles.tripleView}>
                <TouchableOpacity style={{ width: width * 0.1 }}>
                  {this.props.theme.mode === "light" ? (
                    <Icon
                      name={"arrows-alt-v"}
                      size={20}
                      color={COLORS.main_text_color}
                    />
                  ) : (
                    <Icon
                      name={"arrows-alt-v"}
                      size={20}
                      color={COLORS.white}
                    />
                  )}
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.manageView}
                  onPress={() => {
                    this.onManage(key, item.isSelect);
                  }}
                >
                  <Text style={styles.manageText}>Manage</Text>
                </TouchableOpacity>
                <Text
                  style={[
                    styles.itemText,
                    {
                      color:
                        this.props.theme.mode === "light" ? "#1374A3" : "white",
                    },
                  ]}
                >
                  {item.relation}
                </Text>
              </View>
            )
          )}
        </View>
      </ScrollView>
    );
  }

  manageLabelnavigate = () => {
    this.props.navigation.navigate("ManageLable");
  };

  navigateToDelete = () => {
    this.props.navigation.navigate("SelectLable");
  };

  renderLast() {
    return (
      <View style={{ alignItems: "center", flex: 1 }}>
        <View
          style={{
            flex: 1,
            bottom: 40,
            position: "absolute",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={styles.Whiteview}
            onPress={
              this.state.viewSection == false
                ? this.onPressAddLabel
                : this.message
            }
            disable={this.state.disabledLabel}
          >
            <Text style={styles.bottomButton}>Add</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.WhiteviewTwo}
            onPress={this.navigateToDelete}
          >
            <Text style={styles.bottomButton}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  showLoader() {
    if (this.state.isLoading == true) {
      return <Spinner />;
    }
  }
  renderItem(item, index) {
    return (
      <ScrollView  keyboardShouldPersistTaps={true}>
        <View style={{ flex: 1, marginBottom: Metrics.baseMargin }}>
          <View style={styles.tripleView}>
            <TouchableOpacity
              style={{ width: width * 0.05 }}
              // onPress={() => {
              //   this.onSwipe(key, item.isSelect);
              // }}
            >
              {this.props.theme.mode === "light" ? (
                <Icon
                  name={"arrows-alt-v"}
                  size={25}
                  color={COLORS.main_text_color}
                />
              ) : (
                <Icon name={"arrows-alt-v"} size={20} color={COLORS.white} />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.manageView}
              // onPress={() => {
              //   this.onManage();
              // }}
              onPress={() => {
                this.onManage(index, item.isSelect);
              }}
            >
              <Text style={styles.manageText}>Manage</Text>
            </TouchableOpacity>
            <Text
              style={[
                styles.itemText,
                {
                  color:
                    this.props.theme.mode === "light" ? "#1374A3" : "white",
                },
              ]}
            >
              {item.relation}
            </Text>
          </View>
        </View>
      </ScrollView>
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

        <View style={{ flex: 1, height: height }}>
          <Container>
            {this.renderHeader()}
            {/* {this.renderMiddle()} */}
            <ScrollView  keyboardShouldPersistTaps={true}>
              <View>
                {this.state.addView ? 
                <View style={{marginLeft: Metrics.doubleBaseMargin,marginTop: Metrics.doubleBaseMargin,}}>
                <Text style={{ fontSize: width * 0.05,fontFamily: Font.medium,color: this.props.theme.mode === "light" ? COLORS.main_text_color :COLORS.white}}>
                  Add Label
                </Text>
                  </View> : null
                  }
                
                <View style={{ height: height * 0.77  , marginTop:Metrics.baseMargin}}>
                  <AutoDragSortableView
                    dataSource={this.state.dataManage}
                    parentWidth={parentWidth}
                    childrenWidth={childrenWidth}
                    marginChildrenBottom={20}
                    marginChildrenRight={10}
                    marginChildrenLeft={10}
                    marginChildrenTop={5}
                    childrenHeight={childrenHeight}
                    onDataChange={(dataManage) => {
                      if (dataManage.length != this.state.dataManage.length) {
                        this.setState({
                          dataManage: dataManage,
                        });
                      }
                    }}
                    keyExtractor={(item, index) => item.txt}
                    renderItem={(item, index) => {
                      return this.renderItem(item, index);
                    }}
                  />
                </View>

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
                      placeholderTextColor={COLORS.black}
                    />
                  </View>
                )}
                    </View>
            </ScrollView>
                {this.renderLast()}
          
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
          </Container>
          {this.showLoader()}
        </View>
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
