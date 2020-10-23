import {
  CheckBox,
  Dimensions,
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component, useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import Add from "../AddContact/index";
import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Metrics from "../theme/Metrics";
import borderCorner from "../../assets/images/borderCorner.png";
import { connect } from "react-redux";
import styles from "./style.js";

var { width, height } = Dimensions.get("window");

class ManageLable extends Component {
  state = {
    checked: true,
  };

  renderHeader() {
    return (
      <Header
        title="Manage Label"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  renderMiddle() {
    return (
      <View style={{ alignItems: "center" }}>
        <View style={styles.middleView}>
          <View style={styles.firstMiddle}>
            <Image source={borderCorner} style={styles.firstImg} />

            {this.props.theme.mode === "light" ? (
              <View style={styles.firstBlack}></View>
            ) : (
              <View style={styles.firstBlackWhite}></View>
            )}
          </View>
          <View style={styles.firstMiddle}>
            <Image source={borderCorner} style={styles.firstImg} />

            {this.props.theme.mode === "light" ? (
              <View style={styles.firstBlack}></View>
            ) : (
              <View style={styles.firstBlackWhite}></View>
            )}
          </View>
          <View style={styles.firstMiddle}>
            <Image source={borderCorner} style={styles.firstImg} />

            {this.props.theme.mode === "light" ? (
              <View style={styles.firstWhite}></View>
            ) : (
              <View style={styles.firstWhiteBlack}></View>
            )}
          </View>
        </View>
      </View>
    );
  }

  renderName() {
    return (
      <View
        style={{
          marginLeft: Metrics.baseMargin,
          // marginTop: Metrics.baseMargin,
        }}
      >
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() =>
              this.setState({ checked: !this.state.checked })
            }
            tintColors={{ true: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <TextInput
              placeholder="First Name"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
          </View>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() =>
              this.setState({ checked: !this.state.checked })
            }
            tintColors={{ true: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <TextInput
              placeholder="Middle Name"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
          </View>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() =>
              this.setState({ checked: !this.state.checked })
            }
            tintColors={{ true: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <TextInput
              placeholder="Last Name"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
          </View>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() =>
              this.setState({ checked: !this.state.checked })
            }
            tintColors={{ true: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <TextInput
              placeholder="NickName"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
          </View>
        </View>
      </View>
    );
  }

  renderMobile() {
    return (
      //
      <View
        style={{
          marginLeft: Metrics.baseMargin,
          marginTop: Metrics.doubleBaseMargin,
        }}
      >
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() =>
              this.setState({ checked: !this.state.checked })
            }
            tintColors={{ true: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <TextInput
              placeholder="Phone Number-1"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>(Personal)</Text>
            </View>
          </View>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() =>
              this.setState({ checked: !this.state.checked })
            }
            tintColors={{ true: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <TextInput
              placeholder="Phone Number -2"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>(Lanline)</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  renderEmail() {
    return (
      <View
        style={{
          marginLeft: Metrics.baseMargin,
          marginTop: Metrics.doubleBaseMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() =>
              this.setState({ checked: !this.state.checked })
            }
            tintColors={{ true: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <TextInput
              placeholder="E-mail Address -1"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>(Personal 1)</Text>
            </View>
          </View>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() =>
              this.setState({ checked: !this.state.checked })
            }
            tintColors={{ true: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <TextInput
              placeholder="E-mail Address -2"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>(Personal 2)</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  renderAddress() {
    return (
      <View
        style={{
          marginLeft: Metrics.baseMargin,
          marginTop: Metrics.doubleBaseMargin,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() =>
              this.setState({ checked: !this.state.checked })
            }
            tintColors={{ true: "#1374A3" }}
          />
          <View style={styles.filedViewAddress}>
            <TextInput
              placeholder="Address "
              style={styles.stylefiledTextAddress}
              placeholderTextColor={COLORS.main_text_color}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>(Personal 1)</Text>
            </View>
          </View>
        </View>
        {/* <View
          style={{
            marginLeft: Metrics.xdoubleBaseMargin,
            marginTop: Metrics.smallMargin,
          }}>
          <Text
            style={{
              color: COLORS.main_text_color,
              fontSize: 12,
              marginBottom: Metrics.baseMargin,
            }}>
            + Add Address
          </Text>
        </View> */}
      </View>
    );
  }

  renderMessage() {
    return (
      <View
        style={{
          marginLeft: Metrics.baseMargin,
          marginTop: Metrics.doubleBaseMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() =>
              this.setState({ checked: !this.state.checked })
            }
            tintColors={{ true: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <TextInput
              placeholder="Messanger Account  -1"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>(Personal)</Text>
            </View>
          </View>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() =>
              this.setState({ checked: !this.state.checked })
            }
            tintColors={{ true: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <TextInput
              placeholder=" Messanger Account  -2"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>(Work)</Text>
            </View>
          </View>
        </View>
        {/* <View
        style={{
          marginLeft: Metrics.xdoubleBaseMargin,
          marginTop: Metrics.smallMargin,
        }}>
        <Text
          style={{
            color: COLORS.main_text_color,
            fontSize: 12,
            marginBottom: Metrics.baseMargin,
          }}>
          + Add Messanger Account  
        </Text>
      </View> */}
      </View>
    );
  }

  renderSocialmedia() {
    return (
      <View
        style={{
          marginLeft: Metrics.baseMargin,
          marginTop: Metrics.doubleBaseMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() =>
              this.setState({ checked: !this.state.checked })
            }
            tintColors={{ true: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <TextInput
              placeholder=" Social Media Account  -1"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>(Instagram Personal)</Text>
            </View>
          </View>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() =>
              this.setState({ checked: !this.state.checked })
            }
            tintColors={{ true: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <TextInput
              placeholder=" Social Media Account  -2"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>(Work)</Text>
            </View>
          </View>
        </View>
        {/* <View
        style={{
          marginLeft: Metrics.xdoubleBaseMargin,
          marginTop: Metrics.smallMargin,
        }}>
        <Text
          style={{
            color: COLORS.main_text_color,
            fontSize: 12,
            marginBottom: Metrics.baseMargin,
          }}>
          + Add Social Media Account  
        </Text>
      </View> */}
      </View>
    );
  }

  renderWebsite() {
    return (
      <View
        style={{
          marginLeft: Metrics.baseMargin,
          marginTop: Metrics.doubleBaseMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() =>
              this.setState({ checked: !this.state.checked })
            }
            tintColors={{ true: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <TextInput
              placeholder="Website -1"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>(Sport gameling podcast)</Text>
            </View>
          </View>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() =>
              this.setState({ checked: !this.state.checked })
            }
            tintColors={{ true: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <TextInput
              placeholder="Website -2"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>(Universal Studio)</Text>
            </View>
          </View>
        </View>
        {/* <View
        style={{
          marginLeft: Metrics.xdoubleBaseMargin,
          marginTop: Metrics.smallMargin,
        }}>
        <Text
          style={{
            color: COLORS.main_text_color,
            fontSize: 12,
            marginBottom: Metrics.baseMargin,
          }}>
          + Add Website
        </Text>
      </View> */}
      </View>
    );
  }

  renderDate() {
    return (
      <View
        style={{
          marginLeft: Metrics.baseMargin,
          marginTop: Metrics.doubleBaseMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() =>
              this.setState({ checked: !this.state.checked })
            }
            tintColors={{ true: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <TextInput
              placeholder="Date"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>(Birthday)</Text>
            </View>
          </View>
        </View>
        {/* <View
        style={{
          marginLeft: Metrics.xdoubleBaseMargin,
          marginTop: Metrics.smallMargin,
        }}>
        <Text
          style={{
            color: COLORS.main_text_color,
            fontSize: 12,
            marginBottom: Metrics.baseMargin,
          }}>
          + Add Website
        </Text>
      </View> */}
      </View>
    );
  }

  renderNote() {
    return (
      <View
        style={{
          marginLeft: Metrics.baseMargin,
          marginTop: Metrics.doubleBaseMargin,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() =>
              this.setState({ checked: !this.state.checked })
            }
            tintColors={{ true: "#1374A3" }}
          />
          <View style={styles.filedViewNote}>
            <TextInput
              placeholder="Note"
              style={styles.stylefiledTextNote}
              placeholderTextColor={COLORS.main_text_color}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>(Note -1)</Text>
            </View>
          </View>
        </View>
        {/* <View style={{marginLeft:Metrics.xdoubleBaseMargin,marginTop:Metrics.smallMargin}}>
                <Text  style={{color:COLORS.main_text_color,fontSize:12, marginBottom:Metrics.baseMargin,}}>+ Add Note</Text>
    </View> */}
      </View>
    );
  }

  renderCompany() {
    return (
      <View
        style={{
          marginLeft: Metrics.baseMargin,
          marginTop: Metrics.doubleBaseMargin,
          marginBottom: Metrics.baseMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() =>
              this.setState({ checked: !this.state.checked })
            }
            tintColors={{ true: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <TextInput
              placeholder="Company"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
          </View>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() =>
              this.setState({ checked: !this.state.checked })
            }
            tintColors={{ true: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <TextInput
              placeholder="Job Title"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
          </View>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() =>
              this.setState({ checked: !this.state.checked })
            }
            tintColors={{ true: "#1374A3" }}
          />
          <View style={styles.filedView}>
            <TextInput
              placeholder="Work Hourse"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
          </View>
        </View>
        {/* <View
        style={{
          marginLeft: Metrics.xdoubleBaseMargin,
          marginTop: Metrics.smallMargin,
        }}>
        <Text
          style={{
            color: COLORS.main_text_color,
            fontSize: 12,
            marginBottom: Metrics.baseMargin,
          }}>
          + Add Comapny
        </Text>
      </View> */}
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
          <View style={{ alignItems: "center" }}>
            <LineText>Friend</LineText>
          </View>

          <ScrollView>
            {this.renderMiddle()}
            {this.renderName()}
            {this.renderMobile()}
            {this.renderEmail()}
            {this.renderAddress()}
            {this.renderMessage()}
            {this.renderSocialmedia()}
            {this.renderWebsite()}
            {this.renderDate()}
            {this.renderNote()}
            {this.renderCompany()}
          </ScrollView>
          <View
            style={{
              width: width * 0.9,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <View style={styles.saveView}>
              <Text
                style={{
                  color: COLORS.main_text_color,
                  fontFamily: "Roboto-Bold",
                  fontSize: width * 0.035,
                }}
              >
                Next
              </Text>
            </View>
          </View>
        </Container>
      </ThemeProvider>
    );
  }
}
const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
});

export default connect(mapStateToProps)(ManageLable);

const Container = styled.View`
  flex: 1;

  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;
const ScrollView = styled.ScrollView`
  color: ${(props) => props.theme.textColor};
  flex: 1;
`;
const LineText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 17px;
  color: ${(props) => props.theme.iconColor};
  margin-top: 25px;
  text-align: center;
`;
