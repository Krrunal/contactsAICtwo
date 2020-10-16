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
import React, {Component} from 'react';

import {COLORS} from '../theme/Colors.js';
import ContactUs from '../ContactUs/index';
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
import style from '../../components/drawerNavigation/style';
import styles from './style.js';
import website from '../../assets/images/website.png';

// import firebase from '../../services/FirebaseDatabase/db';
// import { addItem } from '../../services/FirebaseDatabase/addToFirebase';

var {width, height} = Dimensions.get('window');

export default class addmanuallyContact extends Component {
  state = {
      first_name: '',
      middle_name: '',
      last_name: '',
      nick_name: '',
      number1: '',
      number2: '',
      number3: '',
      email1: '',
      email2: '',
      address: '',
      messenger1: '',
      messenger2: '',
      social_media1: '',
      social_media2: '',
      website1: '',
      website2: '',
      dob: '',
      note: '',
      company: '',
      job_title: '',
      work_hour: '',
  }

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
              <Text style={styles.centerText}>Add Contact Manually</Text>
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
         <Text style={styles.lableText}>Friend</Text>
        <View style={styles.middleView}>
          <View style={styles.firstMiddle}>
            <View style={styles.squareBorder}></View>
            {/* <Image source={borderCorner} style={styles.firstImg} /> */}
            <View style={styles.firstLightBlue}>
              
            </View>
            {/* <View style={styles.first}>
              <Text style={styles.firstText}>Select Photo</Text>
            </View> */}
          </View>
          <View style={styles.firstMiddle}>
            <View style={styles.squareBorder}></View>
            <View style={styles.firstdarkBlue}>
              
              </View>
          </View>
          <View style={styles.firstMiddle}>
            <View style={styles.squareBorder}></View>
            <View style={styles.firstLightBlue}>
              
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
              value={this.state.first_name}
              onChangeText={(value) => this.setState({ first_name: value })}
              ref={input => { this.first_name = input }}
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
              value={this.state.middle_name}
              onChangeText={(value) => this.setState({ middle_name: value })}
              ref={input => { this.middle_name = input }}
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
              value={this.state.last_name}
              onChangeText={(value) => this.setState({ last_name: value })}
              ref={input => { this.last_name = input }}
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
              value={this.state.nick_name}
              onChangeText={(value) => this.setState({ nick_name: value })}
              ref={input => { this.nick_name = input }}
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
              value={this.state.number1}
              onChangeText={(value) => this.setState({ number1: value })}
              ref={input => { this.number1 = input }}
            />
            <View style={styles.rightView}>
              <View>
                <Text style={styles.righttext}>(Personal)</Text>
              
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
              value={this.state.number2}
              onChangeText={(value) => this.setState({ number2: value })}
              ref={input => { this.number2 = input }}
            />
            <View style={styles.rightView}>
              <View>
                {/* <Text style={styles.righttext}>Personal</Text> */}
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
              value={this.state.number3}
              onChangeText={(value) => this.setState({ number3: value })}
              ref={input => { this.number3 = input }}
            />
            <View style={styles.rightView}>
              <View>
                <Text style={styles.righttext}>(Business)</Text>
                {/* <Text style={styles.righttext}>(Landline)</Text> */}
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
              // maxLength={10}
              value={this.state.email1}
              onChangeText={(value) => this.setState({ email1: value })}
              ref={input => { this.email1 = input }}
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
              // maxLength={10}
              value={this.state.email2}
              onChangeText={(value) => this.setState({ email2: value })}
              ref={input => { this.email2 = input }}
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
              value={this.state.address}
              onChangeText={(value) => this.setState({ address: value })}
              ref={input => { this.address = input }}
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
              // maxLength={10}
              value={this.state.messenger1}
              onChangeText={(value) => this.setState({ messenger1: value })}
              ref={input => { this.messenger1 = input }}
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
              // maxLength={10}
              value={this.state.messenger2}
              onChangeText={(value) => this.setState({ messenger2: value })}
              ref={input => { this.messenger2 = input }}

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
              // maxLength={10}
              value={this.state.social_media1}
              onChangeText={(value) => this.setState({ social_media1: value })}
              ref={input => { this.social_media1 = input }}

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
              //maxLength={10}
              value={this.state.social_media2}
              onChangeText={(value) => this.setState({ social_media2: value })}
              ref={input => { this.social_media2 = input }}

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
              // maxLength={10}
              value={this.state.website1}
              onChangeText={(value) => this.setState({ website1: value })}
              ref={input => { this.website1 = input }}

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
              // maxLength={10}
              value={this.state.website2}
              onChangeText={(value) => this.setState({ website2: value })}
              ref={input => { this.website2 = input }}

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
              value={this.state.dob}
              onChangeText={(value) => this.setState({ dob: value })}
              ref={input => { this.dob = input }}
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
              value={this.state.note}
              onChangeText={(value) => this.setState({ note: value })}
              ref={input => { this.note = input }}
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
              value={this.state.company}
              onChangeText={(value) => this.setState({ company: value })}
              ref={input => { this.company = input }}
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
              value={this.state.job_title}
              onChangeText={(value) => this.setState({ job_title: value })}
              ref={input => { this.job_title = input }}

            />
          </View>
          <View style={styles.filedViewRightTwo}>
            <TextInput
              placeholder="Work Hours"
              style={styles.stylefiledText}
              placeholderTextColor={COLORS.main_text_color}
              maxLength={10}
              value={this.state.work_hour}
              onChangeText={(value) => this.setState({ work_hour: value })}
              ref={input => { this.work_hour = input }}

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

  // addToFirebase() {
  //   addItem(
  //     '1',
  //     'friend',
  //     this.state.first_name,
  //     this.state.middle_name,
  //     this.state.last_name,
  //     this.state.nick_name,
  //     this.state.number1,
  //     this.state.number2,
  //     this.state.number3,
  //     this.state.email1,
  //     this.state.email2,
  //     this.state.address,
  //     this.state.messenger1,
  //     this.state.messenger2,
  //     this.state.social_media1,
  //     this.state.social_media2,
  //     this.state.website1,
  //     this.state.website2,
  //     this.state.dob,
  //     this.state.note,
  //     this.state.company,
  //     this.state.job_title,
  //     this.state.work_hour,
  //   )
  // }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ScrollView style={{flex: 1, backgroundColor: COLORS.white}}>
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
          <TouchableHighlight style={styles.saveView} underlayColor='transparant' >
          {/* onPress={() => this.addToFirebase()}> */}
            <Text style={{color: COLORS.main_text_color}}>Edit</Text>
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
