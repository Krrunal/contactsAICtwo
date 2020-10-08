import {
  CheckBox,
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {COLORS} from '../theme/Colors.js';
import {CommonActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Metrics from '../theme/Metrics';
import {Title} from 'react-native-paper';
import calender from '../../assets/images/calender.png';
import call from '../../assets/images/call.png';
import edit from '../../assets/images/edit.png';
import email from '../../assets/images/email.png';
import friendImg from '../../assets/images/friendImg.jpg';
import handshake from '../../assets/images/handshake.png';
import home from '../../assets/images/home.png';
import iconEmail from '../../assets/icons/iconEmail.png';
import iconMap from '../../assets/icons/iconMap.png';
import iconMessage from '../../assets/icons/iconMessage.png';
import iconPay from '../../assets/icons/iconPay.png';
import iconVideo from '../../assets/icons/iconVideo.png';
import iconcall from '../../assets/icons/iconCall.png';
import innerimg from '../../assets/images/innerimg.png';
import instagram from '../../assets/images/instagram.png';
import logo from '../../assets/images/logo.png';
import message from '../../assets/images/message.png';
import note from '../../assets/images/note.png';
import reset from '../../assets/images/reset.png';
import styles from './style.js';
import {useTheme} from '@react-navigation/native';
import website from '../../assets/images/website.png';
import websiteImg from '../../assets/images/website.png';

const person = require('../../assets/images/person.png');
var {width, height} = Dimensions.get('window');
export default function searchContact({navigation}) {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const textcolor = colors.textColor;
  const currentTheme = useSelector((state) => {
    return state.myDarMode;
  });

  const Profilenavigate = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'AddContact',
        //routes: [{ name: 'Login' }],
      }),
    );
  };

  return (
    <View
      style={[
        {backgroundColor: COLORS.white, flex: 1},
        {backgroundColor: colors.backColor},
      ]}>
      <ScrollView style={{flex: 1}}>
        <View>
          <View
            style={{
              alignItems: 'center',
              marginTop: Metrics.smallMargin,
              padding: Metrics.smallMargin,
            }}>
            <View style={styles.ImgBigView}>
              <View style={styles.imgView}>
                <ImageBackground
                  source={require('../../assets/images/person.png')}
                  style={styles.imgStyle}>
                  <View style={styles.OverImageText}>
                    <TouchableOpacity
                      style={{alignItems: 'center', flexDirection: 'row'}}
                      onPress={Profilenavigate}>
                      <Icon
                        name={'angle-left'}
                        size={25}
                        color={COLORS.transparent}
                      />
                      <Text style={styles.backText}>Back</Text>
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              </View>

              <Text style={styles.profileText}>Sean Green</Text>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.middleView}>
            <View style={styles.mainView}>
              <View style={styles.IconView}>
                <Image source={iconcall} style={styles.callImg} />
                <Text
                  style={{
                    marginTop: Metrics.xsmallMargin,
                    fontFamily: 'Roboto-Bold',
                    fontSize: width * 0.022,
                  }}>
                  Call
                </Text>
              </View>
              <View style={styles.IconView}>
                <Image source={iconMessage} style={styles.textImg} />
                <Text
                  style={{
                    marginTop: Metrics.xsmallMargin,
                    fontFamily: 'Roboto-Bold',
                    fontSize: width * 0.022,
                  }}>
                  Text
                </Text>
              </View>
              {/* <View style={styles.IconView}>
              <Image source={iconVideo} style={styles.videoImg} />

              <Text style={{marginTop: Metrics.xsmallMargin}}>Video</Text>
            </View> */}
              <View style={styles.IconView}>
                <Image source={iconVideo} style={styles.videoImg} />
                <Text
                  style={{
                    marginTop: Metrics.smallMargin,
                    fontFamily: 'Roboto-Bold',
                    fontSize: width * 0.022,
                    marginRight: Metrics.smallMargin,
                  }}>
                  Video
                </Text>
              </View>
              <View style={styles.IconView}>
                <Image source={iconEmail} style={styles.emailImg} />
                <Text
                  style={{
                    marginTop: Metrics.xsmallMargin,
                    fontFamily: 'Roboto-Bold',
                    fontSize: width * 0.022,
                  }}>
                  E-mail
                </Text>
              </View>
              <View style={styles.IconView}>
                <Image source={iconMap} style={styles.mapImg} />
                <Text
                  style={{
                    marginTop: Metrics.xsmallMargin,
                    fontFamily: 'Roboto-Bold',
                    fontSize: width * 0.022,
                  }}>
                  Direction
                </Text>
              </View>
              <View style={styles.IconView}>
                <Image source={iconPay} style={styles.payImg} />
                <Text
                  style={{
                    marginTop: Metrics.xsmallMargin,
                    fontFamily: 'Roboto-Bold',
                    fontSize: width * 0.022,
                  }}>
                  Pay
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.renderView}>
          <View style={{flexDirection: 'row'}}>
            <Image source={friendImg} style={styles.innerStyle} />
            <View style={styles.filedView}>
              <TextInput
                placeholder="Friends,Universal Studio"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.black}
                maxLength={10}
              />
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
                placeholder="+1 (303) 123-4567"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.black}
                keyboardType={'numeric'}
                maxLength={10}
              />
              <View style={styles.rightView}>
                <View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'flex-end',
                      width: width * 0.3,
                    }}>
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
                placeholderTextColor={COLORS.black}
                keyboardType={'numeric'}
                maxLength={10}
              />
              <View style={styles.rightView}>
                <View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'flex-end',
                      width: width * 0.3,
                    }}>
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
                placeholderTextColor={COLORS.black}
                keyboardType={'numeric'}
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
        <View
          style={{
            marginLeft: Metrics.smallMargin,
            marginTop: Metrics.smallMargin,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={email} style={styles.innerStyle} />
            <View style={styles.filedView}>
              <TextInput
                placeholder="Sean@gmail.com"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.black}
                maxLength={10}
              />
              <View style={styles.rightView}>
                <View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'flex-end',
                      width: width * 0.3,
                    }}>
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
        <View
          style={{
            marginLeft: Metrics.xsmallMargin,
            marginTop: Metrics.smallMargin,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={home} style={styles.innerStyle} />
            <View style={styles.filedViewAddress}>
              <View
                style={{
                  width: width * 0.3,
                  height: width * 0.32,
                  flexDirection: 'row',
                }}>
                <TextInput
                  placeholder="4546 willows St.
                
                Los Angles, CA 90016
                
                United states"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.black}
                  multiline={true}
                />
                <View style={styles.rightView}>
                  <View>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'flex-end',
                        width: width * 0.2,
                      }}>
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
        <View
          style={{
            marginLeft: Metrics.smallMargin,
            marginTop: Metrics.smallMargin,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={message} style={styles.innerStyle} />
            <View style={styles.filedView}>
              <TextInput
                placeholder="@usernamesean"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.black}
              />
              <View style={styles.rightView}>
                <View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'flex-end',
                      width: width * 0.4,
                    }}>
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
        <View
          style={{
            marginLeft: Metrics.smallMargin,
            marginTop: Metrics.smallMargin,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={instagram} style={styles.innerStyle} />

            <View style={styles.filedView}>
              <TextInput
                placeholder="@usernamesean"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.black}
                keyboardType={'numeric'}
                maxLength={10}
              />
              <View style={styles.rightView}>
                <View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'flex-end',
                      width: width * 0.3,
                    }}>
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
                placeholderTextColor={COLORS.black}
                keyboardType={'numeric'}
                maxLength={10}
              />
              <View style={styles.rightView}>
                <View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'flex-end',
                      width: width * 0.3,
                    }}>
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
        <View
          style={{
            marginLeft: Metrics.smallMargin,
            marginTop: Metrics.smallMargin,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={website} style={styles.innerStyle} />
            <View style={styles.filedView}>
              <TextInput
                placeholder="www.seamuser.com"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.black}
                maxLength={10}
              />
              <View style={styles.rightView}>
                <View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'flex-end',
                      width: width * 0.4,
                    }}>
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
        <View
          style={{
            marginLeft: Metrics.smallMargin,
            marginTop: Metrics.smallMargin,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={calender} style={styles.innerStyle} />

            <View style={styles.filedView}>
              <TextInput
                placeholder="1st January,1970"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.black}
                keyboardType={'numeric'}
                maxLength={10}
              />
              <View style={styles.rightView}>
                <View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'flex-end',
                      width: width * 0.3,
                    }}>
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
                placeholderTextColor={COLORS.black}
                keyboardType={'numeric'}
                maxLength={10}
              />
              <View style={styles.rightView}>
                <View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'flex-end',
                      width: width * 0.4,
                    }}>
                    <View style={styles.rightTwoImg}>
                      <View>
                        <Image source={edit} style={styles.editImg} />
                      </View>
                      <View style={styles.resetImg}>
                        <Image source={reset} style={styles.editImg} />
                      </View>
                    </View>
                    <Text style={styles.righttext}>
                      ( wedding anniversary )
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginLeft: Metrics.xsmallMargin,
            marginTop: Metrics.smallMargin,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={note} style={styles.innerStyle} />
            <View style={styles.filedViewNote}>
              <View
                style={{
                  width: width * 0.42,
                  height: width * 0.25,
                  flexDirection: 'row',
                }}>
                <TextInput
                  placeholder="To book me Comedian E-mail me at workmail@company.com"
                  style={styles.stylefiledText}
                  placeholderTextColor={COLORS.black}
                  multiline={true}
                />
                <View style={styles.rightView}>
                  <View>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'flex-end',
                        width: width * 0.2,
                      }}>
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
        <View
          style={{
            marginLeft: Metrics.smallMargin,
            marginTop: Metrics.smallMargin,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={handshake} style={styles.innerStyle} />

            <View style={styles.filedView}>
              <TextInput
                placeholder="IBM"
                style={styles.stylefiledText}
                placeholderTextColor={COLORS.black}
              />
              <View style={styles.rightView}>
                <View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'flex-end',
                      width: width * 0.3,
                    }}>
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
                placeholderTextColor={COLORS.black}
                keyboardType={'numeric'}
                maxLength={10}
              />
              <View style={styles.rightView}>
                <View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'flex-end',
                      width: width * 0.3,
                    }}>
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
                  flexDirection: 'row',
                }}>
                <TextInput
                  placeholder="Monday 9.00a.mto 5:00p.m Tuesday 9.00a.mto 5:00p.m 
             Wednesday 9.00a.mto 5:00p.m
             Thrusday 9.00a.mto 5:00p.m
             Friday 9.00a.mto 5:00p.m
             Saturday off
             Sunday off "
                  style={styles.stylefiledTextCompany}
                  placeholderTextColor={COLORS.black}
                  multiline={true}
                />
                <View style={styles.rightView}>
                  <View>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'flex-end',
                        width: width * 0.35,
                      }}>
                      <View style={styles.rightTwoCompany}>
                        <Image source={reset} style={styles.editImg} />
                        <View style={styles.resetImg}></View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <Text style={styles.righttext}>Pacific Time Zone</Text>
              <Text style={styles.righttext}>( Work Hours)</Text>
            </View>
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
          marginTop: Metrics.smallMargin,
        }}>
        <TouchableHighlight style={styles.saveView}>
          <Text
            style={{
              color: COLORS.main_text_color,
              fontFamily: 'Roboto-Bold',
              fontSize: width * 0.04,
            }}>
            Edit
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
