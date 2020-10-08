import {
  CheckBox,
  Dimensions,
  Image,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Add from '../AddContact/index';
import {COLORS} from '../theme/Colors.js';
import Metrics from '../theme/Metrics';
import borderCorner from '../../assets/images/borderCorner.png';
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
import {useTheme} from '@react-navigation/native';
import website from '../../assets/images/website.png';

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

var {width, height} = Dimensions.get('window');
export default function ManageLable({navigation}) {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const textcolor = colors.textColor;
  const currentTheme = useSelector((state) => {
    return state.myDarMode;
  });
  return (
    <View style={[styles.container,{backgroundColor: colors.backColor}]}>
      <ScrollView style={[{flex: 1, backgroundColor: COLORS.white},{backgroundColor: colors.backColor}]}>
        <View
          style={{alignItems: 'center', marginTop: Metrics.doubleBaseMargin}}>
          <View style={styles.blueView}>
            <View style={{width: width * 0.9, flexDirection: 'row'}}>
              <TouchableOpacity
                style={styles.sideBarView}
                onPress={() => navigation.openDrawer()}>
                <Image source={sideBar} style={styles.sidebarStyle} />
              </TouchableOpacity>
              <View style={styles.sidebarViewCenter}>
                <Text style={styles.centerText}>Manage Labels</Text>
              </View>
              <View style={styles.sidebarViewRight}>
                <Image source={rigthLogo} style={styles.sidebarStyle} />
              </View>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              marginTop: Metrics.baseMargin,
              fontFamily: 'Roboto-Bold',
              fontSize: width * 0.04,
              color: COLORS.main_text_color,
            }}>
            Friend
          </Text>
          <View style={styles.middleView}>
            <View style={styles.firstMiddle}>
              <Image source={borderCorner} style={styles.firstImg} />
              <View style={styles.firstBlack}></View>
            </View>
            <View style={styles.firstMiddle}>
              <Image source={borderCorner} style={styles.firstImg} />
              <View style={styles.firstBlack}>
                {/* <Text style={styles.firstText}>Select Photo</Text> */}
              </View>
            </View>
            <View style={styles.firstMiddle}>
              <Image source={borderCorner} style={styles.firstImg} />
              <View style={styles.firstWhite}>
                {/* <Text style={styles.firstText}>Select Photo</Text> */}
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginLeft: Metrics.baseMargin,
            marginTop: Metrics.doubleBaseMargin,
          }}>
          <View style={styles.mainView}>
            <CheckBox
              // value={this.state.checked}
              // onValueChange={() => this.setState({checked: !this.state.checked})}
              tintColors={{true: '#1374A3'}}
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
              // value={this.state.checked}
              // onValueChange={() => this.setState({checked: !this.state.checked})}
              tintColors={{true: '#1374A3'}}
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
              // value={this.state.checked}
              // onValueChange={() => this.setState({checked: !this.state.checked})}
              tintColors={{true: '#1374A3'}}
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
              // value={this.state.checked}
              // onValueChange={() => this.setState({checked: !this.state.checked})}
              tintColors={{true: '#1374A3'}}
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
        <View
          style={{
            marginLeft: Metrics.baseMargin,
            marginTop: Metrics.doubleBaseMargin,
          }}>
          <View style={styles.mainView}>
            <CheckBox
              // value={this.state.checked}
              // onValueChange={() => this.setState({checked: !this.state.checked})}
              tintColors={{true: '#1374A3'}}
            />
            <View style={styles.filedView}>
              <TextInput
                placeholder="Phone Number-1"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                maxLength={10}
                keyboardType={'numeric'}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>(Personal)</Text>
              </View>
            </View>
          </View>
          <View style={styles.mainView}>
            <CheckBox
              // value={this.state.checked}
              // onValueChange={() => this.setState({checked: !this.state.checked})}
              tintColors={{true: '#1374A3'}}
            />
            <View style={styles.filedView}>
              <TextInput
                placeholder="Phone Number -2"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
                maxLength={10}
                keyboardType={'numeric'}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>(Lanline)</Text>
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
            + Add Mobile
          </Text>
        </View> */}
        </View>
        <View
          style={{
            marginLeft: Metrics.baseMargin,
            marginTop: Metrics.doubleBaseMargin,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              // value={this.state.checked}
              // onValueChange={() => this.setState({checked: !this.state.checked})}
              tintColors={{true: '#1374A3'}}
            />
            <View style={styles.filedView}>
              <TextInput
                placeholder="E-mail Address -1"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>(Personal 1)</Text>
              </View>
            </View>
          </View>
          <View style={styles.mainView}>
            <CheckBox
              // value={this.state.checked}
              // onValueChange={() => this.setState({checked: !this.state.checked})}
              tintColors={{true: '#1374A3'}}
            />
            <View style={styles.filedView}>
              <TextInput
                placeholder="E-mail Address -2"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.main_text_color}
              />
              <View style={styles.rightView}>
                <Text style={styles.righttext}>(Personal 2)</Text>
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
            + Add E-mail Address
          </Text>
        </View> */}
        </View>
        <View
          style={{
            marginLeft: Metrics.baseMargin,
            marginTop: Metrics.doubleBaseMargin,
          }}>
          <View style={{flexDirection: 'row'}}>
            <CheckBox
              // value={this.state.checked}
              // onValueChange={() => this.setState({checked: !this.state.checked})}
              tintColors={{true: '#1374A3'}}
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
        <View
          style={{
            marginLeft: Metrics.baseMargin,
            marginTop: Metrics.doubleBaseMargin,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              // value={this.state.checked}
              // onValueChange={() => this.setState({checked: !this.state.checked})}
              tintColors={{true: '#1374A3'}}
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
              // value={this.state.checked}
              // onValueChange={() => this.setState({checked: !this.state.checked})}
              tintColors={{true: '#1374A3'}}
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
        <View
          style={{
            marginLeft: Metrics.baseMargin,
            marginTop: Metrics.doubleBaseMargin,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              // value={this.state.checked}
              // onValueChange={() => this.setState({checked: !this.state.checked})}
              tintColors={{true: '#1374A3'}}
            />
            <View style={styles.filedView}>
              <TextInput
                placeholder=" Social Media Account -1"
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
              // value={this.state.checked}
              // onValueChange={() => this.setState({checked: !this.state.checked})}
              tintColors={{true: '#1374A3'}}
            />
            <View style={styles.filedView}>
              <TextInput
                placeholder=" Social Media Account -2"
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
        <View
          style={{
            marginLeft: Metrics.baseMargin,
            marginTop: Metrics.doubleBaseMargin,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              // value={this.state.checked}
              // onValueChange={() => this.setState({checked: !this.state.checked})}
              tintColors={{true: '#1374A3'}}
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
              // value={this.state.checked}
              // onValueChange={() => this.setState({checked: !this.state.checked})}
              tintColors={{true: '#1374A3'}}
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
        <View
          style={{
            marginLeft: Metrics.baseMargin,
            marginTop: Metrics.doubleBaseMargin,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              // value={this.state.checked}
              // onValueChange={() => this.setState({checked: !this.state.checked})}
              tintColors={{true: '#1374A3'}}
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
        <View
          style={{
            marginLeft: Metrics.baseMargin,
            marginTop: Metrics.doubleBaseMargin,
          }}>
          <View style={{flexDirection: 'row'}}>
            <CheckBox
              // value={this.state.checked}
              // onValueChange={() => this.setState({checked: !this.state.checked})}
              tintColors={{true: '#1374A3'}}
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
        <View
          style={{
            marginLeft: Metrics.baseMargin,
            marginTop: Metrics.doubleBaseMargin,
            marginBottom: Metrics.baseMargin,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              // value={this.state.checked}
              // onValueChange={() => this.setState({checked: !this.state.checked})}
              tintColors={{true: '#1374A3'}}
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
              // value={this.state.checked}
              // onValueChange={() => this.setState({checked: !this.state.checked})}
              tintColors={{true: '#1374A3'}}
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
              // value={this.state.checked}
              // onValueChange={() => this.setState({checked: !this.state.checked})}
              tintColors={{true: '#1374A3'}}
            />
            <View style={styles.filedView}>
              <TextInput
                placeholder="Work Hours"
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
      </ScrollView>
      <View
        style={{
          width: width * 0.9,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          flexDirection: 'row',
          marginTop:Metrics.smallMargin
        }}>
        <View style={styles.saveView}>
          <Text
            style={{
              color: COLORS.main_text_color,
              fontFamily: 'Roboto-Bold',
              fontSize: width * 0.035,
            }}>
            Next
          </Text>
        </View>
      </View>
    </View>
  );
}
