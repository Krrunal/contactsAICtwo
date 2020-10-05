import {
  CheckBox,
  Dimensions,
  Image,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {COLORS} from '../theme/Colors.js';
import Metrics from '../theme/Metrics';
import borderCorner from '../../assets/images/borderCorner.png';
import calender from '../../assets/images/calender.png';
import call from '../../assets/images/call.png';
import email from '../../assets/images/email.png';
import handshake from '../../assets/images/handshake.png';
import home from '../../assets/images/home.png';
import innerimg from '../../assets/images/innerimg.png';
import instagram from '../../assets/images/instagram.png';
import logo from '../../assets/images/logo.png';
import message from '../../assets/images/message.png';
import note from '../../assets/images/note.png';
import outerimg from '../../assets/images/outerimg.png';
import rigthLogo from '../../assets/icons/contact.png';
import sideBar from '../../assets/images/sideBAR.png';
import styles from './style.js';
import website from '../../assets/images/website.png';

var {width, height} = Dimensions.get('window');

export default class MyContactInfromation extends Component {
  renderHeader() {
    return (
      <View style={{alignItems: 'center', marginTop: Metrics.doubleBaseMargin}}>
        <View style={styles.blueView}>
          <View style={{width: width * 0.9, flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.sideBarView}
              onPress={() => this.props.navigation.openDrawer()}>
              <Image source={sideBar} style={styles.sidebarStyle} />
            </TouchableOpacity>
            <View style={styles.sidebarViewCenter}>
              <Text style={styles.centerText}>My Contact Information</Text>
            </View>
            <View style={styles.sidebarViewRight}>
              <Image source={rigthLogo} style={styles.sidebarStyle} />
            </View>
          </View>
        </View>
      </View>
    );
  }
  renderMiddle() {
    return (
      <View style={{alignItems: 'center'}}>
        <View style={styles.middleView}>
          <View style={styles.firstMiddle}>
            <View style={styles.squareBorder}></View>
            {/* <Image source={borderCorner} style={styles.firstImg} /> */}
            <View style={styles.first}>
              <Text style={styles.firstText}>Select Photo</Text>
            </View>
          </View>
          <View style={styles.firstMiddle}>
            <View style={styles.squareBorder}></View>
            <View style={styles.first}>
              <Text style={styles.firstText}>Select Photo</Text>
            </View>
          </View>
          <View style={styles.firstMiddle}>
            <View style={styles.squareBorder}></View>
            <View style={styles.first}>
              <Text style={styles.firstText}>Select Photo</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  renderName() {
    return (
      <View
        style={{
          marginLeft: Metrics.smallMargin,
          marginTop: Metrics.smallMargin,
          marginBottom: Metrics.baseMargin,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={innerimg} style={styles.innerStyle} />
          <View style={styles.filedView}>
            <TextInput
              placeholder=""
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />

            <View style={styles.rightView}>
              <Text style={styles.righttext}>First Name</Text>
            </View>
          </View>
        </View>
        <View style={styles.fieldMain}>
          <View style={styles.filedViewRight}>
            <TextInput
              placeholder=" "
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>Middle Name</Text>
            </View>
          </View>

          <View style={styles.filedViewRight}>
            <TextInput
              placeholder=" "
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>Last Name</Text>
            </View>
          </View>
          <View style={styles.filedViewRight}>
            <TextInput
              placeholder=" "
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}> NickName</Text>
            </View>
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
         
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={call} style={styles.innerStyle} />

          <View style={styles.filedView}>
            <TextInput
              placeholder="Phone Number-1"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              keyboardType={'numeric'}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <View>
                <Text style={styles.righttext}>Personal</Text>
                <Text style={styles.righttext}>(Mobile)</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.fieldMain}>
          <View style={styles.filedViewRightTwo}>
            <TextInput
              placeholder="Phone Number-2"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              keyboardType={'numeric'}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <View>
                <Text style={styles.righttext}>Personal</Text>
                <Text style={styles.righttext}>(Landline)</Text>
              </View>
            </View>
          </View>
          <View style={styles.filedViewRightTwo}>
            <TextInput
              placeholder="Phone Number-3"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              keyboardType={'numeric'}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <View>
                <Text style={styles.righttext}>Work</Text>
                <Text style={styles.righttext}>(Landline)</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginLeft: Metrics.xdoubleBaseMargin,
            marginTop: Metrics.smallMargin,
          }}>
          <Text
            style={{
              color: COLORS.main_text_color,
              fontFamily: 'Roboto-Light',
              fontSize: width * 0.035,
              marginBottom: Metrics.baseMargin,
            }}>
            + Add Phone Number
          </Text>
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
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={email} style={styles.innerStyle} />
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
        <View style={styles.fieldMain}>
          <View style={styles.filedViewRightTwo}>
            <TextInput
              placeholder="E-mail Address-2"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>(Personal 2)</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginLeft: Metrics.xdoubleBaseMargin,
            marginTop: Metrics.smallMargin,
          }}>
          <Text
            style={{
              color: COLORS.main_text_color,
              fontFamily: 'Roboto-Light',
              fontSize: width * 0.035,
              marginBottom: Metrics.baseMargin,
            }}>
            + Add E-mail Address
          </Text>
        </View>
      </View>
    );
  }
  renderAddress() {
    return (
      <View
        style={{
          marginLeft: Metrics.smallMargin,
          marginTop: Metrics.smallMargin,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image source={home} style={styles.innerStyle} />
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
        <View
          style={{
            marginLeft: Metrics.xdoubleBaseMargin,
            marginTop: Metrics.smallMargin,
          }}>
          <Text
            style={{
              color: COLORS.main_text_color,
              fontFamily: 'Roboto-Light',
              fontSize: width * 0.035,
              marginBottom: Metrics.baseMargin,
            }}>
            + Add Address
          </Text>
        </View>
      </View>
    );
  }
  renderMessage() {
    return (
      <View
        style={{
          marginLeft: Metrics.smallMargin,
          marginTop: Metrics.smallMargin,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={message} style={styles.innerStyle} />
          <View style={styles.filedView}>
            <TextInput
              placeholder="Messenger Account -1"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>(Personal)</Text>
            </View>
          </View>
        </View>
        <View style={styles.fieldMain}>
          <View style={styles.filedViewRightTwo}>
            <TextInput
              placeholder="Messenger Account -2"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>(Work)</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginLeft: Metrics.xdoubleBaseMargin,
            marginTop: Metrics.smallMargin,
          }}>
          <Text
            style={{
              color: COLORS.main_text_color,
              fontFamily: 'Roboto-Light',
              fontSize: width * 0.035,
              marginBottom: Metrics.baseMargin,
            }}>
            + Add Messenger Account
          </Text>
        </View>
      </View>
    );
  }
  renderSocialmedia() {
    return (
      <View
        style={{
          marginLeft: Metrics.smallMargin,
          marginTop: Metrics.smallMargin,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={instagram} style={styles.innerStyle} />
          <View style={styles.filedView}>
            <TextInput
              placeholder="Social Media Account -1"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>(Instagram Personal)</Text>
            </View>
          </View>
        </View>
        <View style={styles.fieldMain}>
          <View style={styles.filedViewRightTwo}>
            <TextInput
              placeholder="Social Media Account -2"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>(Instagram Professional)</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginLeft: Metrics.xdoubleBaseMargin,
            marginTop: Metrics.smallMargin,
          }}>
          <Text
            style={{
              color: COLORS.main_text_color,
              fontFamily: 'Roboto-Light',
              fontSize: width * 0.035,
              marginBottom: Metrics.baseMargin,
            }}>
            + Add Social Media Account
          </Text>
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
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={website} style={styles.innerStyle} />
          <View style={styles.filedView}>
            <TextInput
              placeholder="Website -1"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
            <View style={styles.rightView}>
              <Text style={styles.righttext}>(Sport gambling podcast)</Text>
            </View>
          </View>
        </View>
        <View style={styles.fieldMain}>
          <View style={styles.filedViewRightTwo}>
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
        <View
          style={{
            marginLeft: Metrics.xdoubleBaseMargin,
            marginTop: Metrics.smallMargin,
          }}>
          <Text
            style={{
              color: COLORS.main_text_color,
              fontFamily: 'Roboto-Light',
              fontSize: width * 0.035,
              marginBottom: Metrics.baseMargin,
            }}>
            + Add Website{' '}
          </Text>
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
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={calender} style={styles.innerStyle} />
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

        <View
          style={{
            marginLeft: Metrics.xdoubleBaseMargin,
            marginTop: Metrics.smallMargin,
          }}>
          <Text
            style={{
              color: COLORS.main_text_color,
              fontFamily: 'Roboto-Light',
              fontSize: width * 0.035,

              marginBottom: Metrics.baseMargin,
            }}>
            + Add Date{' '}
          </Text>
        </View>
      </View>
    );
  }
  renderNote() {
    return (
      <View
        style={{
          marginLeft: Metrics.smallMargin,
          marginTop: Metrics.smallMargin,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image source={note} style={styles.innerStyle} />
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
        <View
          style={{
            marginLeft: Metrics.xdoubleBaseMargin,
            marginTop: Metrics.smallMargin,
          }}>
          <Text
            style={{
              color: COLORS.main_text_color,
              fontFamily: 'Roboto-Light',
              fontSize: width * 0.035,
              marginBottom: Metrics.baseMargin,
            }}>
            + Add Note
          </Text>
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
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={handshake} style={styles.innerStyle} />
          <View style={styles.filedView}>
            <TextInput
              placeholder="Company"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
          </View>
        </View>
        <View style={styles.fieldMain}>
          <View style={styles.filedViewRightTwo}>
            <TextInput
              placeholder="Job Title"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
          </View>
          <View style={styles.filedViewRightTwo}>
            <TextInput
              placeholder="Work Hours"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
            />
          </View>
        </View>
        <View
          style={{
            marginLeft: Metrics.xdoubleBaseMargin,
            marginTop: Metrics.smallMargin,
          }}>
          <Text
            style={{
              color: COLORS.main_text_color,
              fontFamily: 'Roboto-Light',
              fontSize: width * 0.035,
              marginBottom: Metrics.baseMargin,
            }}>
            + Company{' '}
          </Text>
        </View>
      </View>
    );
  }
  onPress = (index) => {
    this.scroll.scrollTo({x: index * width, y: 0, animated: true})
 }
  
  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ScrollView style={{flex: 1, backgroundColor: COLORS.white}}
            ref = {re => this.scroll = re}
        >
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
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection: 'row',
          }}>
          <TouchableHighlight style={styles.saveView}   
          onPress = {() => this.onPress(0)} >
            <Text style={{color: COLORS.main_text_color,  fontFamily:'Roboto-Bold',
 fontSize: width * 0.040,
}}>Edit</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
{
  /* <View style={styles.saveView}>
<Text>Save</Text>
</View> */
}
