import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";
import { darkTheme, lightTheme } from "../theme/themeProps";
import styled, { ThemeProvider } from "styled-components/native";

import AsyncStorage from "@react-native-community/async-storage";
import { COLORS } from "../theme/Colors.js";
import CheckBox from "@react-native-community/checkbox";
import Constants from "../../action/Constants";
import ContactUs from '../ContactUs/index';
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Icon from "react-native-vector-icons/FontAwesome5";
import Metrics from "../theme/Metrics";
import { Spinner } from "../../components/Spinner";
import Toast from "react-native-easy-toast";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import downArrow from "../../assets/icons/dropIcon.png";
import plus from "../../assets/images/plus.png";
import styles from "./addContactMultipleStyle.js";
import { switchTheme } from "../../action/themeAction";

var { width, height } = Dimensions.get("window");

class addContactMultiple extends Component {
  state = {
    label: "",
    dataManage: [],
    dataManage2: [],
    dataManage3: [],
    dataManage4: [],
    dataManage5: [],
    isSelected: false,
    selectedRealetion: [],
    data: "",
    isLoading: false,
    viewSection: false,
    disabledLabel: false,
    selectedName: "",
    user_name: "",
    checked: false,
    splitData: "",
    splitData1: "",
    itemSelected: "",
    userLabel2: [],
    userLabel3: [],
    userLabel4: [],
    u_name1: "",
    u_name2: "",
    u_name3: "",
    u_name4: "",
  };

  async componentDidMount() {
    const { navigation } = this.props;
    this.setState({
      selectedName: await AsyncStorage.getItem("@selectedName"),
      user_name: await AsyncStorage.getItem("@username"),
      u_name1: await AsyncStorage.getItem("@u_name1"),
      u_name2: await AsyncStorage.getItem("@u_name2"),
      u_name3: await AsyncStorage.getItem("@u_name3"),
      u_name4: await AsyncStorage.getItem("@u_name4"),
    });
    const { user_name } = this.state;
    let splitData = user_name.split(/,/);
    this.setState({ splitData: splitData[0] });

    this.focusListener = navigation.addListener("didFocus", async () => {
      this.labelList();
    });
  }

  // labelList = () => {
  //   this.setState({ isLoading: true }, async () => {
  //     const baseurl = Constants.baseurl;
  //     fetch(baseurl + "get_label")
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((responseJson) => {
  //         if (responseJson.data.relation == "") {
  //           this.setState({ dataManage: [], isLoading: false });
  //         } else {
  //           var labelData = responseJson.data.relation.split(/,/);
  //           this.setState({ dataManage: labelData, isLoading: false });
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         this.setState({ isLoading: false });
  //       });
  //   });
  // };

  labelList = () => {
    this.setState({ isLoading: true }, async () => {
      const baseurl = Constants.baseurl;
      fetch(baseurl + "getlabel")
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
         // console.log("response=---->", responseJson.data);
      // this.setState({ isLoading: false });
          var arr = responseJson.data.map((item) => {
            return {
              relation: item.relation,
              isSelect: false,
              isUser1: false,
              isUser2: false,
              isUser3: false,
              isUser4: false,
            };
          });
          this.setState({ dataManage: arr, isLoading: false });
          this.setState({ dataManage2: arr, isLoading: false });
          this.setState({ dataManage3: arr, isLoading: false });
          this.setState({ dataManage4: arr, isLoading: false });
          this.setState({ dataManage5: arr, isLoading: false });
          console.log("response=---->", this.state.dataManage);
        })
        .catch((error) => {
          console.error(error);
          this.setState({ isLoading: false });
        });
    });
  };

  labelApiCall = () => {
    const baseurl = Constants.baseurl;
    const relation = this.state.label;
    var _body = new FormData();
    _body.append("relation", relation);

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
        if (responseJson.data.relation == "") {
          this.setState({
            dataManage: responseJson.data.relation,
            viewSection: false,
            label: "",
          });
        } else {
          var labelData = responseJson.data.relation.split(/,/);
          this.setState({
            dataManage: labelData,
            viewSection: false,
            label: "",
          });
        }
      });
  };

  onchecked = async (keyInd, item) => {
    const {
      dataManage,
      dataManage2,
      dataManage3,
      dataManage4,
      dataManage5,
      user_name,
      multipleLabel,
      splitData,
      splitData1,
      u_name1,
      u_name2,
      u_name3,
      u_name4,
    } = this.state;

    if (splitData) {
      let arr = dataManage.map((item, key) => {
        if (keyInd == key) {
          item.isSelect = !item.isSelect;
        }
        return { ...item };
      });

      this.setState({ dataManage: arr });
    }
    if (u_name1 == splitData1) {
      let arr = dataManage.map((item, key) => {
        if (keyInd == key) {
          item.isSelect = !item.isSelect;
        }
        return { ...item };
      });

      this.setState({ dataManage: arr });
    }

    if (u_name2 == splitData1) {
     let arr = dataManage3.map((item, key) => {
        if (keyInd == key) {
          item.isUser2 = !item.isUser2;
        }
        return { ...item };
      });
      this.setState({ dataManage3: arr });
    }

    if (u_name3 == splitData1) {
      let arr = dataManage4.map((item, key) => {
        if (keyInd == key) {
          item.isUser3 = !item.isUser3;
        }
        return { ...item };
      });
      this.setState({ dataManage4: arr });
    }

    if (u_name4 == splitData1) {
      let arr = dataManage5.map((item, key) => {
        if (keyInd == key) {
          item.isUser4 = !item.isUser4;
        }
        return { ...item };
      });
      this.setState({ dataManage5: arr });
    }
  };

  onPressAddLabel = () => {
    this.setState({ viewSection: true });
  };

  message = () => {
    this.state.label == ""
      ? this.refs.toast.show("Please enter label name")
      : this.textChange();
  };

  textChange = (value) => {
    var valueLength = this.state.label;

    if (valueLength.length <= 3) {
      alert("Label contain maximum 3 character");
    } else {
      this.labelApiCall();
    }
  };

  renderHeader() {
    return (
      <Header
        title="Add Contacts AIC User"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }
  openFlatView = () => {
    if (this.state.flatViewOpen == true) {
      this.setState({ flatViewOpen: false });
    } else {
      this.setState({ flatViewOpen: true });
    }
  };
  onManage = (item) => {
    const {
      dataManage,
      user_name,
      multipleLabel,
      splitData,
      splitData1,
    } = this.state;

    this.setState({ splitData1: item });
    this.setState({ flatViewOpen: false });
    this.setState({ splitData: "" });

    let contactArr = dataManage.map((item, key) => {
      if (this.state.checked == false) {
        item.isSelect = false;
      }
    });
  };
  renderDropDown() {
    return (
      <View
        style={{
          alignItems: "center",
          width: width,
        }}
      >
      
          <TouchableOpacity>
            {/* {this.state.flatViewOpen !== true ?
             <View style={{ flexDirection: "row", width: width * 0.8 }}>
             {this.state.splitData1 == "" ? (
               <Text style={styles.flatSmallText}>{this.state.splitData}</Text>
             ) : (
               <Text style={styles.flatSmallText}>
                 {this.state.splitData1}
               </Text>
             )}
             <TouchableOpacity
               style={{
                 justifyContent: "flex-end",
                 flex: 1,
                 flexDirection: "row",
                 marginRight: 15,
               }}
               onPress={this.openFlatView}
             >
               <Image source={downArrow} style={styles.downArrowStyle} />
             </TouchableOpacity>
           </View> :
            null
             }
            */}

            {this.state.flatViewOpen == true ? (
             
              <Modal
                style={styles.footerFlat}
                visible={this.state.flatViewOpen}
                transparent={true}
                animationType="fade"
                onRequestClose={() => this.setState({ flatViewOpen: false })}
              >
                <View
                  style={{
                    alignItems: "center",
                    width: width,
                    marginTop: Metrics.labelMargin,
                  }}
                >
                  <View style={styles.contentFlat}>
                    <View style={styles.flatView}>
                      <View
                        style={{
                          flexDirection: "row",
                          width: width * 0.8,
                        }}
                      >
                        <View style={{ flexDirection: "column" }}>
                          {this.state.user_name.split(/,/).map((item) => (
                            <TouchableOpacity
                              onPress={() => {
                                this.onManage(item);
                              }}
                            >
                              <Text style={styles.flatSmallText}> {item} </Text>
                            </TouchableOpacity>
                          ))}
                        </View>

                        <TouchableOpacity
                          style={{
                            justifyContent: "flex-end",
                            flex: 1,
                            flexDirection: "row",
                            marginRight: 15,
                          }}
                          onPress={this.openFlatView}
                         >
                          <Image
                            source={downArrow}
                            style={styles.downArrowStyle}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>
            ) : 
            <TouchableOpacity style={styles.flatSmallView}>
            <View style={{ flexDirection: "row", width: width * 0.8 }}>
                    {this.state.splitData1 == "" ? (
                      <Text style={styles.flatSmallText}>{this.state.splitData}</Text>
                    ) : (
                      <Text style={styles.flatSmallText}>
                        {this.state.splitData1}
                      </Text>
                    )}
                    <TouchableOpacity
                      style={{
                        justifyContent: "flex-end",
                        flex: 1,
                        flexDirection: "row",
                        marginRight: 15,
                      }}
                      onPress={this.openFlatView}
                    >
                      <Image source={downArrow} style={styles.downArrowStyle} />
                    </TouchableOpacity>
                 </View>
            </TouchableOpacity>
            }
          </TouchableOpacity>
      
      </View>
    );
  }

  renderMiddle() {
    const {
      dataManage,
      user_name,
      multipleLabel,
      splitData,
      splitData1,
      u_name1,
      u_name2,
      u_name3,
      u_name4,
    } = this.state;

    return (
      <ScrollView>
        <View style={{ flex: 1, marginBottom: Metrics.xxdoubleBaseMargin }}>
          {this.state.dataManage.map((item, key) =>
            this.state.dataManage === [""] ? null : (
              <View style={styles.mainView}>
                {splitData ? (
                  <CheckBox
                    value={item.isSelect}
                    onChange={() => {
                      this.onchecked(key, item.isSelect);
                    }}
                    tintColors={{ true: "#1374A3", false: "#1374A3" }}
                  />
                ) : null}
                {u_name2 == splitData1 ? (
                  <CheckBox
                    value={item.isUser2}
                    onChange={() => {
                      this.onchecked(key, item.isUser2);
                    }}
                    tintColors={{ true: "#1374A3", false: "#1374A3" }}
                  />
                ) : null}
                {u_name1 == splitData1 ? (
                  <CheckBox
                    value={item.isUser1}
                    onChange={() => {
                      this.onchecked(key, item.isUser1);
                    }}
                    tintColors={{ true: "#1374A3", false: "#1374A3" }}
                  />
                ) : null}
                {u_name3 == splitData1 ? (
                  <CheckBox
                    value={item.isUser3}
                    onChange={() => {
                      this.onchecked(key, item.isUser1);
                    }}
                    tintColors={{ true: "#1374A3", false: "#1374A3" }}
                  />
                ) : null}
                {u_name4 == splitData1 ? (
                  <CheckBox
                    value={item.isUser4}
                    onChange={() => {
                      this.onchecked(key, item.isUser4);
                    }}
                    tintColors={{ true: "#1374A3", false: "#1374A3" }}
                  />
                ) : null}
                <TouchableOpacity>
                  <Text
                    style={[
                      styles.itemText,
                      {
                        color:
                          this.props.theme.mode === "light"
                            ? "#1374A3"
                            : "white",
                      },
                    ]}
                  >
                    {item.relation}
                  </Text>
                </TouchableOpacity>
              </View>
            )
          )}

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
    );
  }

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
            onPress={() => this.forAddContactNavigate()}
          >
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: Font.medium,
                fontSize: width * 0.045,
              }}
            >
              Add Contact(s)
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  async forAddContactNavigate() {
    const {
      dataManage,
      dataManage2,
      dataManage3,
      dataManage4,
      dataManage5,
      selectedRealetion,
      userLabel1,
      userLabel2,
      userLabel3,
      userLabel4,
    } = this.state;

    dataManage3.map((item) => {
      item.isSelect == true
        ? selectedRealetion.push(item.relation)
        : console.log("isSelect------->", item.isSelect);
    });
    const selected = selectedRealetion.toString();
    await AsyncStorage.setItem("@selectedLabel", selected);

    dataManage3.map((item) => {
      item.isUser2 == true
        ? userLabel2.push(item.relation)
        : console.log("isUser2------->", item.isUser2);
    });
    const userLabel12 = userLabel2.toString();
    await AsyncStorage.setItem("@userLabel2", userLabel12);

    dataManage4.map((item) => {
      item.isUser3 == true
        ? userLabel3.push(item.relation)
        : console.log("isUser3------->", item.isUser2);
    });

    const userLabel13 = userLabel3.toString();
    await AsyncStorage.setItem("@userLabel3", userLabel13);

    dataManage5.map((item) => {
      item.isUser4 == true
        ? userLabel4.push(item.relation)
        : console.log("isUser2------->", item.isUser2);
    });
    const userLabel14 = userLabel4.toString();
    await AsyncStorage.setItem("@userLabel4", userLabel14);

    console.log("Data manage ---->", dataManage);
    console.log("Data 3 ---->", dataManage3);
    console.log("Data 4 ---->", dataManage4);
    console.log("Data 5 ---->", dataManage5);

    if (selected ==  "" ) {
      this.refs.toast.show("Please select label to associate with USERNAME");
    } else {
      this.props.navigation.navigate("forAdd2");
       this.setState({ selectedRealetion: [] });
        this.setState({ splitData1: "" });
    }
 }

  showLoader() {
    if (this.state.isLoading == true) {
      return <Spinner />;
    }
  }
  selectAll = () => {
    const { dataManage } = this.state;
    let contactArr = dataManage.map((item, key) => {
      this.state.checked == false
        ? (item.isSelect = true)
        : (item.isSelect = false);
      item.isSelected = !item.isSelect;
      this.setState({ checked: !this.state.checked });
      return { ...item };
    });
    this.setState({ dataManage: contactArr });
  };

  renderSelectAll() {
    return (
      <View style={{ width: width }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: Metrics.doubleBaseMargin,
            marginTop: Metrics.doubleBaseMargin,
          }}
        >
          <CheckBox
            value={this.state.checked}
            onChange={() => {
              this.selectAll();
            }}
            tintColors={{ true: "#1374A3", false: "#1374A3" }}
          />
          <Text
            style={{
              color: COLORS.main_text_color,
              fontFamily: Font.regular,
              fontSize: width * 0.05,
              marginLeft: Metrics.smallMargin,
            }}
          >
            Select (De-select) All
          </Text>
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

        <View style={{ flex: 1 }}>
          <Container>
            {this.renderHeader()}
            <View style={{ alignItems: "center" }}>
              <View style={styles.uperView}>
                <Text style={styles.uperText}>
                  Choose witch label(s) to associate with [ USERNAME ]
                </Text>
              </View>
            </View>
            {this.renderDropDown()}
            {this.state.flatViewOpen == true ?  
               <View style={{marginTop:Metrics.xxxxdoubleBaseMargin}}>
                      {this.renderSelectAll()}
                      {this.renderMiddle()}
                      
              </View>
            :
            <View>
                  {this.renderSelectAll()}
                  {this.renderMiddle()}
                
            </View>
            }
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

export default connect(mapStateToProps)(addContactMultiple);

const Container = styled.View`
  flex: 1;
  width: 100%;
  /* align-items: center; */
  background-color: ${(props) => props.theme.backColor};
`;
const NormalText = styled.Text`
  font-family: Roboto-Light;
  font-size: 15px;
  color: ${(props) => props.theme.textColor};
  text-transform: capitalize;
`;
