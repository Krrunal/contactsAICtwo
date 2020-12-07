import {
 Dimensions,
 Image,
 ImageBackground,
 Keyboard,
 Text,
 TextInput,
 TouchableHighlight,
 TouchableOpacity,
 View,
} from "react-native";
import React, { Component, useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";

import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Icon from "react-native-vector-icons/FontAwesome5";
import Metrics from "../theme/Metrics";
import { Title } from "react-native-paper";
import calender from "../../assets/images/calender.png";
import call from "../../assets/images/call.png";
import { connect } from "react-redux";
import edit from "../../assets/images/edit.png";
import email from "../../assets/images/email.png";
import friendImg from "../../assets/images/friendImg.jpg";
import handshake from "../../assets/images/handshake.png";
import home from "../../assets/images/home.png";
import iconEmail from "../../assets/icons/iconEmail.png";
import iconMap from "../../assets/icons/iconMap.png";
import iconMessage from "../../assets/icons/iconMessage.png";
import iconPay from "../../assets/icons/iconPay.png";
import iconVideo from "../../assets/icons/iconVideo.png";
import iconcall from "../../assets/icons/iconCall.png";
import innerimg from "../../assets/images/innerimg.png";
import instagram from "../../assets/images/instagram.png";
import logo from "../../assets/images/logo.png";
import message from "../../assets/images/message.png";
import note from "../../assets/images/note.png";
import reset from "../../assets/images/reset.png";
import styles from "./style.js";
import website from "../../assets/images/website.png";
import websiteImg from "../../assets/images/website.png";

const person = require("../../assets/images/person.png");
var { width, height } = Dimensions.get("window");
class Profile extends Component {
  renderImg() {
    return (
      <View
        style={{
          alignItems: "center",
          width:width,
         // padding: Metrics.smallMargin,
         marginTop:Metrics.baseMargin
        }}
      >
        <View style={styles.ImgBigView}>
          <View style={styles.imgView}>
          
            <ImageBackground
              source={require("../../assets/images/person.png")}
              style={styles.imgStyle}
            >
              <View style={styles.OverImageText}>
                <TouchableOpacity
                  style={{ alignItems: "center", flexDirection: "row" }}
                  onPress={this.Profilenavigate}
                >
                  <Icon
                    name={"angle-left"}
                    size={27}
                    color={COLORS.main_text_color}
                  />
                  <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          <Text style={styles.profileText}>Sean Green</Text>
        </View>
        
      </View>
    );
  }

  Profilenavigate = () => {
    this.props.navigation.navigate("AddContact");
  };

  renderMiddle() {
    return (
      <View style={{width:width , alignItems:'center'}}>

     
      <View style={styles.middleView}>
        <View style={styles.mainView}>
          <View style={styles.IconView}>
            <View style={styles.iconContainer}>
              <Image source={iconcall} style={styles.callImg} />
            </View>
            <Text
              style={styles.textIcon}
            >
              Call
            </Text>
          </View>
          <View style={styles.IconView}>
            <View style={styles.iconContainer}>
              <Image source={iconMessage} style={styles.callImg} />
            </View>
            <Text
              style={styles.textIcon}
            >
              Text
            </Text>
          </View>
          <View style={styles.IconView}>
            <View style={styles.iconContainer}>
              <Image source={iconVideo} style={styles.callImg} />
            </View>
            <Text
              style={styles.textIcon}
            >
              Video
            </Text>
          </View>
          <View style={styles.IconView}>
            <View style={styles.iconContainer}>
              <Image source={iconEmail} style={styles.callImg} />
            </View>
            <Text
              style={styles.textIcon}
            >
              E-mail
            </Text>
          </View>
          <View style={styles.IconView}>
            <View style={styles.iconContainer}>
              <Image source={iconMap} style={styles.callImg} />
            </View>
            <Text
              style={styles.textIcon}
            >
              Direction
            </Text>
          </View>
          <View style={styles.IconView}>
            <View style={styles.iconContainer}>
              <Image source={iconPay} style={styles.callImg} />
            </View>
            <Text
              style={styles.textIcon}
            >
              Pay
            </Text>
          </View>
        </View>
      </View>
      </View>
    );
  }

  renderFriend() {
    return (
      <View
        style={{
          marginLeft: Metrics.smallMargin,
          marginTop: Metrics.smallMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={friendImg} style={styles.innerStyle} />
          <View style={styles.filedView}>
            <TextInput
              placeholder="Friends, Universal Studio"
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
      <View
        style={{
          marginLeft: Metrics.smallMargin,
          marginTop: Metrics.smallMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={call} style={styles.innerStyle} />

          <View style={styles.filedView}>
            <TextInput
              placeholder="+1 (303) 123-4567"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              keyboardType={"numeric"}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "flex-end",
                    width: width * 0.3,
                  }}
                >
                  <View style={styles.rightTwoImg}>
                    <View>
                      <Image source={edit} style={styles.editImg} />
                    </View>
                    <View style={styles.resetImg}>
                      <Image source={reset} style={styles.editImg} />
                    </View>
                  </View>
                  <Text style={styles.righttext}>( Personal )</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.fieldMain}>
          <View style={styles.filedViewRightTwo}>
            <TextInput
              placeholder="+1 (303) 123-4567"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              keyboardType={"numeric"}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "flex-end",
                    width: width * 0.3,
                  }}
                >
                  <View style={styles.rightTwoImg}>
                    <View>
                      <Image source={edit} style={styles.editImg} />
                    </View>
                    <View style={styles.resetImg}>
                      <Image source={reset} style={styles.editImg} />
                    </View>
                  </View>
                  <Text style={styles.righttext}>( Work )</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.filedViewRightTwo}>
            <TextInput
              placeholder="+1 (303) 123-4567"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              keyboardType={"numeric"}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <View>
                <View style={styles.rightTwoImg}>
                  <View>
                    <Image source={edit} style={styles.editImg} />
                  </View>
                  <View style={styles.resetImg}>
                    <Image source={reset} style={styles.editImg} />
                  </View>
                </View>
                <Text style={styles.righttext}>( Lanline )</Text>
              </View>
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
          marginLeft: Metrics.smallMargin,
          marginTop: Metrics.smallMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={email} style={styles.innerStyle} />
          <View style={styles.filedView}>
            <TextInput
              placeholder="Sean@gmail.com"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <View>
                <View style={styles.rightTwoImg}>
                  <View>
                    <Image source={edit} style={styles.editImg} />
                  </View>
                  <View style={styles.resetImg}>
                    <Image source={reset} style={styles.editImg} />
                  </View>
                </View>
                <Text style={styles.righttext}>( Personal )</Text>
              </View>
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
          marginLeft: Metrics.xsmallMargin,
          marginTop: Metrics.smallMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={home} style={styles.innerStyle} />
          <View style={styles.filedViewAddress}>
            <View
              style={{
                width: width * 0.42,
                height: width * 0.17,
                flexDirection: "row",
              }}
            >
              <TextInput
                placeholder="Sean "
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                multiline={true}
              />
              <View style={styles.rightView}>
                <View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "flex-end",
                      width: width * 0.2,
                    }}
                  >
                    <View style={styles.rightTwoImg}>
                      <View>
                        <Image source={edit} style={styles.editImg} />
                      </View>
                      <View style={styles.resetImg}>
                        <Image source={reset} style={styles.editImg} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.righttext}>( Personal )</Text>
          </View>
        </View>
      </View>
    );
  }

  renderMesssanger() {
    return (
      <View
        style={{
          marginLeft: Metrics.smallMargin,
          marginTop: Metrics.smallMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={message} style={styles.innerStyle} />
          <View style={styles.filedView}>
            <TextInput
              placeholder="Sean@gmail.com"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "flex-end",
                    width: width * 0.4,
                  }}
                >
                  <View style={styles.rightTwoImg}>
                    <View>
                      <Image source={edit} style={styles.editImg} />
                    </View>
                    <View style={styles.resetImg}>
                      <Image source={reset} style={styles.editImg} />
                    </View>
                  </View>
                  <Text style={styles.righttext}>( Facebook Messenger )</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  renderSocialMedia() {
    return (
      <View
        style={{
          marginLeft: Metrics.smallMargin,
          marginTop: Metrics.smallMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={instagram} style={styles.innerStyle} />

          <View style={styles.filedView}>
            <TextInput
              placeholder="@usernamesean"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              keyboardType={"numeric"}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "flex-end",
                    width: width * 0.3,
                  }}
                >
                  <View style={styles.rightTwoImg}>
                    <View>
                      <Image source={edit} style={styles.editImg} />
                    </View>
                    <View style={styles.resetImg}>
                      <Image source={reset} style={styles.editImg} />
                    </View>
                  </View>
                  <Text style={styles.righttext}>( Facebook )</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.fieldMain}>
          <View style={styles.filedViewRightTwo}>
            <TextInput
              placeholder="Seanusername"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              keyboardType={"numeric"}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "flex-end",
                    width: width * 0.3,
                  }}
                >
                  <View style={styles.rightTwoImg}>
                    <View>
                      <Image source={edit} style={styles.editImg} />
                    </View>
                    <View style={styles.resetImg}>
                      <Image source={reset} style={styles.editImg} />
                    </View>
                  </View>
                  <Text style={styles.righttext}>( Instagram )</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  renderWebsite() {
    return (
      <View
        style={{
          marginLeft: Metrics.smallMargin,
          marginTop: Metrics.smallMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={website} style={styles.innerStyle} />
          <View style={styles.filedView}>
            <TextInput
              placeholder="www.seamuser.com"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "flex-end",
                    width: width * 0.4,
                  }}
                >
                  <View style={styles.rightTwoImg}>
                    <View>
                      <Image source={edit} style={styles.editImg} />
                    </View>
                    <View style={styles.resetImg}>
                      <Image source={reset} style={styles.editImg} />
                    </View>
                  </View>
                  <Text style={styles.righttext}>( Personal )</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  renderDate() {
    return (
      <View
        style={{
          marginLeft: Metrics.smallMargin,
          marginTop: Metrics.smallMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={calender} style={styles.innerStyle} />

          <View style={styles.filedView}>
            <TextInput
              placeholder="1st January,1970"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              keyboardType={"numeric"}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "flex-end",
                    width: width * 0.3,
                  }}
                >
                  <View style={styles.rightTwoImg}>
                    <View>
                      <Image source={edit} style={styles.editImg} />
                    </View>
                    <View style={styles.resetImg}>
                      <Image source={reset} style={styles.editImg} />
                    </View>
                  </View>
                  <Text style={styles.righttext}>( Birthday )</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.fieldMain}>
          <View style={styles.filedViewRightTwo}>
            <TextInput
              placeholder="3rd Febrauary,1999"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              keyboardType={"numeric"}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "flex-end",
                    width: width * 0.4,
                  }}
                >
                  <View style={styles.rightTwoImg}>
                    <View>
                      <Image source={edit} style={styles.editImg} />
                    </View>
                    <View style={styles.resetImg}>
                      <Image source={reset} style={styles.editImg} />
                    </View>
                  </View>
                  <Text style={styles.righttext}>( wedding anniversary )</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  renderNote() {
    return (
      <View
        style={{
          marginLeft: Metrics.xsmallMargin,
          marginTop: Metrics.smallMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={note} style={styles.innerStyle} />
          <View style={styles.filedViewAddress}>
            <View
              style={{
                width: width * 0.42,
                height: width * 0.17,
                flexDirection: "row",
              }}
            >
              <TextInput
                placeholder="To book me Comedian E-mail me at workmail@company.com"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                multiline={true}
              />
              <View style={styles.rightView}>
                <View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "flex-end",
                      width: width * 0.2,
                    }}
                  >
                    <View style={styles.rightTwoImg}>
                      {/* <View>
                    <Image source={edit} style={styles.editImg} />
                  </View> */}
                      <View style={styles.resetImg}>
                        <Image source={reset} style={styles.editImg} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.righttext}>( Note 1 )</Text>
          </View>
        </View>
      </View>
    );
  }

  renderCompany() {
    return (
      <View
        style={{
          marginLeft: Metrics.smallMargin,
          marginTop: Metrics.smallMargin,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={handshake} style={styles.innerStyle} />

          <View style={styles.filedView}>
            <TextInput
              placeholder="IBM"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
            />
            <View style={styles.rightView}>
              <View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "flex-end",
                    width: width * 0.3,
                  }}
                >
                  <View style={styles.rightTwoImg}>
                    {/* <View>
                    <Image source={edit} style={styles.editImg} />
                  </View> */}
                    <View style={styles.resetImg}>
                      <Image source={reset} style={styles.editImg} />
                    </View>
                  </View>
                  <Text style={styles.righttext}>( Company )</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.fieldMain}>
          <View style={styles.filedViewRightTwo}>
            <TextInput
              placeholder="Software Engineer"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              keyboardType={"numeric"}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "flex-end",
                    width: width * 0.3,
                  }}
                >
                  <View style={styles.rightTwoImg}>
                    {/* <View>
                    <Image source={edit} style={styles.editImg} />
                  </View> */}
                    <View style={styles.resetImg}>
                      <Image source={reset} style={styles.editImg} />
                    </View>
                  </View>
                  <Text style={styles.righttext}>( Job Title )</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.fieldMain}>
          <View style={styles.filedViewRightTwoCompany}>
            <View
              style={{
                width: width * 0.5,
                height: width * 0.35,
                flexDirection: "row",
              }}
            >
              <TextInput
                placeholder="Monday 9.00a.mto 5:00p.m Tuesday 9.00a.mto 5:00p.m 
             Wednesday 9.00a.mto 5:00p.m
             Thrusday 9.00a.mto 5:00p.m
             Friday 9.00a.mto 5:00p.m
             Saturday off
             Sunday off "
                style={styles.stylefiledTextCompany}
                placeholderTextColor={COLORS.main_text_color}
                multiline={true}
              />
              <View style={styles.rightView}>
                <View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "flex-end",
                      width: width * 0.35,
                    }}
                  >
                    <View style={styles.rightTwoCompany}>
                      <Image source={reset} style={styles.editImg} />
                      <View style={styles.resetImg}></View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.righttext}>Pacific Time Zone</Text>
            <Text style={styles.righttext}>( Work hours)</Text>
          </View>
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
          <ScrollView style={{ flex: 1 }}>
            {this.renderImg()}
            {this.renderMiddle()}

            {this.renderFriend()}
            {this.renderMobile()}
            {this.renderEmail()}
            {this.renderAddress()}
            {this.renderMesssanger()}
            {this.renderSocialMedia()}
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
            <TouchableHighlight style={styles.saveView}>
              <Text
                style={{
                  color: COLORS.main_text_color,
                  fontFamily: "Roboto-Bold",
                  fontSize: width * 0.04,
                }}
              >
                Edit
              </Text>
            </TouchableHighlight>
          </View>
        </Container>
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

export default connect(mapStateToProps)(Profile);

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
