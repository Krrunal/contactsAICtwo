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
import {useDispatch, useSelector} from 'react-redux';

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
import {useTheme} from '@react-navigation/native';
import website from '../../assets/images/website.png';

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

var {width, height} = Dimensions.get('window');

export default function addmanuallyContact({navigation}) {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const textcolor = colors.textColor;
  const currentTheme = useSelector((state) => {
    return state.myDarMode;
  });

  return (
    <View style={[styles.container, {backgroundColor: colors.backColor}]}>
      <View style={{alignItems: 'center', marginTop: Metrics.doubleBaseMargin}}>
        <View style={styles.blueView}>
          <View style={{width: width * 0.9, flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.sideBarView}
              onPress={() => navigation.openDrawer()}>
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
      <ScrollView
        style={[
          {flex: 1, backgroundColor: COLORS.white},
          {backgroundColor: colors.backColor},
        ]}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.lableText}>Friend</Text>
          <View style={styles.middleView}>
            <View style={styles.firstMiddle}>
              <View style={styles.squareBorder}></View>
              {/* <Image source={borderCorner} style={styles.firstImg} /> */}
              <View style={styles.firstLightBlue}></View>
              {/* <View style={styles.first}>
              <Text style={styles.firstText}>Select Photo</Text>
            </View> */}
            </View>
            <View style={styles.firstMiddle}>
              <View style={styles.squareBorder}></View>
              <View style={styles.firstdarkBlue}></View>
            </View>
            <View style={styles.firstMiddle}>
              <View style={styles.squareBorder}></View>
              <View style={styles.firstLightBlue}></View>
            </View>
          </View>
        </View>
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
              style={[{
                color: COLORS.main_text_color,
                fontFamily: 'Roboto-Light',
                fontSize: width * 0.035,
                marginBottom: Metrics.baseMargin,
              }, {color: colors.textColor}]}>
              + Add Phone Number
            </Text>
          </View>
        </View>
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
              style={[{
                color: COLORS.main_text_color,
                fontFamily: 'Roboto-Light',
                fontSize: width * 0.035,
                marginBottom: Metrics.baseMargin,
              }, {color: colors.textColor}]}>
              + Add E-mail Address
            </Text>
          </View>
        </View>
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
              style={[{
                color: COLORS.main_text_color,
                fontFamily: 'Roboto-Light',
                fontSize: width * 0.035,
                marginBottom: Metrics.baseMargin,
              }, {color: colors.textColor}]}>
              + Add Address
            </Text>
          </View>
        </View>
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
              style={[{
                color: COLORS.main_text_color,
                fontFamily: 'Roboto-Light',
                fontSize: width * 0.035,
                marginBottom: Metrics.baseMargin,
              }, {color: colors.textColor}]}>
              + Add Messenger Account
            </Text>
          </View>
        </View>
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
              style={[{
                color: COLORS.main_text_color,
                fontFamily: 'Roboto-Light',
                fontSize: width * 0.035,
                marginBottom: Metrics.baseMargin,
              }, {color: colors.textColor}]}>
              + Add Social Media Account
            </Text>
          </View>
        </View>
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
              style={[{
                color: COLORS.main_text_color,
                fontFamily: 'Roboto-Light',
                fontSize: width * 0.035,
                marginBottom: Metrics.baseMargin,
              }, {color: colors.textColor}]}>
              + Add Website{' '}
            </Text>
          </View>
        </View>
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
              style={[{
                color: COLORS.main_text_color,
                fontFamily: 'Roboto-Light',
                fontSize: width * 0.035,

                marginBottom: Metrics.baseMargin,
              }, {color: colors.textColor}]}>
              + Add Date{' '}
            </Text>
          </View>
        </View>
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
              style={[{
                color: COLORS.main_text_color,
                fontFamily: 'Roboto-Light',
                fontSize: width * 0.035,
                marginBottom: Metrics.baseMargin,
              }, {color: colors.textColor}]}>
              + Add Note
            </Text>
          </View>
        </View>
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
              style={[{
                color: COLORS.main_text_color,
                fontFamily: 'Roboto-Light',
                fontSize: width * 0.035,
                marginBottom: Metrics.baseMargin,
              }, {color: colors.textColor}]}>
              + Company{' '}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          width: width * 0.9,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          flexDirection: 'row',
        }}>
        <TouchableHighlight style={styles.saveView}>
          <Text
            style={{
              color: COLORS.main_text_color,
              fontFamily: 'Roboto-Bold',
              fontSize: width * 0.045,
            }}>
            Edit
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
