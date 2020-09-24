import { CheckBox, Dimensions, Image, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {COLORS} from '../theme/Colors.js';
import Metrics from '../theme/Metrics';
import borderCorner from '../../assets/images/borderCorner.png';
import call from '../../assets/images/call.png'
import email from '../../assets/images/email.png';
import handshake from '../../assets/images/handshake.png';
import home from '../../assets/images/home.png';
import  innerimg from '../../assets/images/innerimg.png';
import instagram from '../../assets/images/instagram.png';
import logo from '../../assets/images/logo.png';
import message from '../../assets/images/message.png';
import note from '../../assets/images/note.png';
import outerimg from '../../assets/images/outerimg.png';
import sideBar from '../../assets/images/sideBAR.png';
import styles from './style.js';
import website from '../../assets/images/website.png';

var {width,height} =  Dimensions.get('window');

export default class MyContact extends Component {
    renderHeader(){
        return(
            <View style={{alignItems:'center'}}>
        <View style={styles.blueView}>
             <View style={{width:width*0.9,flexDirection:'row'}}>
             <TouchableOpacity style={styles.sideBarView} onPress={() => this.props.navigation.openDrawer()}><Image source={sideBar} style={styles.sidebarStyle}/></TouchableOpacity> 
             <View style={styles.sidebarViewCenter}><Text style={styles.centerText}>My Contact Information</Text></View>
             <View style={styles.sidebarViewRight}><Image source={logo} style={styles.sidebarStyle}/></View>

            </View>
          </View>
          </View>
        )
    }
    renderMiddle(){
        return(
         <View style={{ alignItems: 'center'}}>
            <View style={styles.middleView}>
                <View style={styles.firstMiddle}>
                    <Image source={borderCorner} style={styles.firstImg}/>
                    <View style={styles.first}>
                        <Text style={styles.firstText}>Select Photo</Text>
                    </View>
                </View>
                <View style={styles.firstMiddle}>
                    <Image source={borderCorner} style={styles.firstImg}/>
                    <View style={styles.first}>
                        <Text style={styles.firstText}>Select Photo</Text>
                    </View>
                </View>
                <View style={styles.firstMiddle}>
                    <Image source={borderCorner} style={styles.firstImg}/>
                    <View style={styles.first}>
                        <Text style={styles.firstText}>Select Photo</Text>
                    </View>
                   
                </View>
            </View>
            </View>
          
        );
    }
    renderName(){
        return(
            <View style={{marginLeft:Metrics.baseMargin,marginTop:Metrics.smallMargin}}>
            
                <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Image source={innerimg} style={styles.innerStyle}/>
                   <View style={styles.filedView}>
                      <TextInput
                         placeholder='First Name'
                         style={styles.stylefiledText}
                         placeholderTextColor={COLORS.main_text_color}
                         maxLength={10}
                         />
                    </View>
                   
                </View>
                <View style={styles.filedViewRight}>
                      <TextInput
                         placeholder='Middle Name'
                         style={styles.stylefiledText}
                         placeholderTextColor={COLORS.main_text_color}
                         />
                </View>
                <View style={styles.filedViewRight}>
                      <TextInput
                         placeholder='Last Name'
                         style={styles.stylefiledText}
                         placeholderTextColor={COLORS.main_text_color}
                         />
                </View>
                <View style={styles.filedViewRight}>
                      <TextInput
                         placeholder='Nickname'
                         style={styles.stylefiledText}
                         placeholderTextColor={COLORS.main_text_color}
                         />
                    </View>
            </View>
        );
    }
    renderMobile(){
        return(
            <View style={{marginLeft:Metrics.baseMargin,marginTop:Metrics.smallMargin}}>
            
                <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Image source={call} style={styles.innerStyle}/>
                   <View style={styles.filedView}>
                      <TextInput
                         placeholder='Phone Number-1'
                         style={styles.stylefiledText}
                         placeholderTextColor={COLORS.main_text_color}
                         keyboardType={'numeric'}
                         maxLength={10}
                         />
                         <View style={styles.rightView}><Text style={styles.righttext}>(Personal)</Text></View>
                    </View>
                 
                </View>
                <View style={styles.filedViewRightTwo}>
                      <TextInput
                         placeholder='Phone Number-2'
                         style={styles.stylefiledText}
                         placeholderTextColor={COLORS.main_text_color}
                         keyboardType={'numeric'}
                         maxLength={10}
                         />
                <View style={styles.rightView}><Text style={styles.righttext}>(Lanline)</Text></View>

                </View>
                <View style={styles.filedViewRightTwo}>
                      <TextInput
                         placeholder='Phone Number-3'
                         style={styles.stylefiledText}
                         placeholderTextColor={COLORS.main_text_color}
                         keyboardType={'numeric'}
                         maxLength={10}
                         />
                <View style={styles.rightView}><Text style={styles.righttext}>(Business)</Text></View>

                </View>
                <View style={{marginLeft:Metrics.xdoubleBaseMargin,marginTop:Metrics.smallMargin}}>
                    <Text  style={{color:COLORS.main_text_color,fontSize:12,}}>+ Add phone Number</Text>
                </View>
               
         </View>
        );
    }
    renderEmail(){
        return(
            <View style={{marginLeft:Metrics.baseMargin,marginTop:Metrics.smallMargin}}>
                 <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Image source={email} style={styles.innerStyle}/>
                   <View style={styles.filedView}>
                      <TextInput
                         placeholder='E-mail Address -1'
                         style={styles.stylefiledText}
                         placeholderTextColor={COLORS.main_text_color}
                         maxLength={10}
                         />
                         <View style={styles.rightView}><Text style={styles.righttext}>(Personal 1)</Text></View>
                    </View>
                 
                </View>
                <View style={styles.filedViewRightTwo}>
                      <TextInput
                         placeholder='E-mail Address-2'
                         style={styles.stylefiledText}
                         placeholderTextColor={COLORS.main_text_color}
                        
                         maxLength={10}
                         />
                <View style={styles.rightView}><Text style={styles.righttext}>(Personal 2)</Text></View>

                </View>
                <View style={{marginLeft:Metrics.xdoubleBaseMargin,marginTop:Metrics.smallMargin}}>
                    <Text  style={{color:COLORS.main_text_color,fontSize:12,}}>+ Add E-mail Address</Text>
                </View>
               
            </View>
        );
    }
    renderAddress(){
        return(
           
            <View style={{marginLeft:Metrics.baseMargin,marginTop:Metrics.smallMargin}}>
                  <View style={{flexDirection:'row',}}>
                   <Image source={home} style={styles.innerStyle}/>
                   <View style={styles.filedViewAddress}>
                      <TextInput
                         placeholder='Address '
                         style={styles.stylefiledTextAddress}
                         placeholderTextColor={COLORS.main_text_color}
                        
                        
                         />
                         <View style={styles.rightView}><Text style={styles.righttext}>(Personal 1)</Text></View>
                    </View>
                 
                </View>
            </View>
        );
    }
    renderMessage(){
        return(
            <View style={{marginLeft:Metrics.baseMargin,marginTop:Metrics.smallMargin}}>
                 <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Image source={message} style={styles.innerStyle}/>
                   <View style={styles.filedView}>
                      <TextInput
                         placeholder='Messenger Account -1'
                         style={styles.stylefiledText}
                         placeholderTextColor={COLORS.main_text_color}
                         maxLength={10}
                         />
                         <View style={styles.rightView}><Text style={styles.righttext}>(Personal)</Text></View>
                    </View>
                 
                </View>
                <View style={styles.filedViewRightTwo}>
                      <TextInput
                         placeholder='Messenger Account -2'
                         style={styles.stylefiledText}
                         placeholderTextColor={COLORS.main_text_color}
                
                         maxLength={10}
                         />
                <View style={styles.rightView}><Text style={styles.righttext}>(Work)</Text></View>

                </View>
                <View style={{marginLeft:Metrics.xdoubleBaseMargin,marginTop:Metrics.smallMargin}}>
                    <Text  style={{color:COLORS.main_text_color,fontSize:12,}}>+ Add Messenger Account</Text>
                </View>
               
            </View>
        );
    }
     renderSocialmedia(){
        return(
            <View style={{marginLeft:Metrics.baseMargin,marginTop:Metrics.smallMargin}}>
                 <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Image source={message} style={styles.innerStyle}/>
                   <View style={styles.filedView}>
                      <TextInput
                         placeholder='Social Media Account -1'
                         style={styles.stylefiledText}
                         placeholderTextColor={COLORS.main_text_color}
                         maxLength={10}
                         />
                         <View style={styles.rightView}><Text style={styles.righttext}>(Instagram Personal)</Text></View>
                    </View>
                 
                </View>
                <View style={styles.filedViewRightTwo}>
                      <TextInput
                         placeholder='Social Media Account -2'
                         style={styles.stylefiledText}
                         placeholderTextColor={COLORS.main_text_color}
                
                         maxLength={10}
                         />
                <View style={styles.rightView}><Text style={styles.righttext}>(Instagram Professional)</Text></View>

                </View>
                <View style={{marginLeft:Metrics.xdoubleBaseMargin,marginTop:Metrics.smallMargin}}>
                    <Text  style={{color:COLORS.main_text_color,fontSize:12, marginBottom:Metrics.baseMargin,}}>+ Add Social Media Account</Text>
                </View>
               
            </View>
        );
    }
    renderWebsite(){
        return(
            <View style={{marginLeft:Metrics.baseMargin,marginTop:Metrics.smallMargin}}>
                 <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Image source={website} style={styles.innerStyle}/>
                   <View style={styles.filedView}>
                      <TextInput
                         placeholder='Website -1'
                         style={styles.stylefiledText}
                         placeholderTextColor={COLORS.main_text_color}
                         maxLength={10}
                         />
                         <View style={styles.rightView}><Text style={styles.righttext}>(Sport gambling podcast)</Text></View>
                    </View>
                 
                </View>
                <View style={styles.filedViewRightTwo}>
                      <TextInput
                         placeholder='Website -2'
                         style={styles.stylefiledText}
                         placeholderTextColor={COLORS.main_text_color}
                
                         maxLength={10}
                         />
                <View style={styles.rightView}><Text style={styles.righttext}>(Universal Studio)</Text></View>

                </View>
                <View style={{marginLeft:Metrics.xdoubleBaseMargin,marginTop:Metrics.smallMargin}}>
                    <Text  style={{color:COLORS.main_text_color,fontSize:12, marginBottom:Metrics.baseMargin,}}>+ Add Website  </Text>
                </View>
               
            </View>
        );
    }
    renderDate(){
        return(
            <View style={{marginLeft:Metrics.baseMargin,marginTop:Metrics.smallMargin}}>
                 <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Image source={website} style={styles.innerStyle}/>
                   <View style={styles.filedView}>
                      <TextInput
                         placeholder='Date'
                         style={styles.stylefiledText}
                         placeholderTextColor={COLORS.main_text_color}
                         maxLength={10}
                         />
                         <View style={styles.rightView}><Text style={styles.righttext}>(Birthday)</Text></View>
                    </View>
                 
                </View>
                
                <View style={{marginLeft:Metrics.xdoubleBaseMargin,marginTop:Metrics.smallMargin}}>
                    <Text  style={{color:COLORS.main_text_color,fontSize:12, marginBottom:Metrics.baseMargin,}}>+ Add Date  </Text>
                </View>
               
            </View>
        );
    }
    renderNote(){
        return(
            <View style={{marginLeft:Metrics.baseMargin,marginTop:Metrics.smallMargin}}>
            <View style={{flexDirection:'row',}}>
             <Image source={note} style={styles.innerStyle}/>
             <View style={styles.filedViewNote}>
                <TextInput
                   placeholder='Note'
                   style={styles.stylefiledTextNote}
                   placeholderTextColor={COLORS.main_text_color}
                  
                  
                   />
                   <View style={styles.rightView}><Text style={styles.righttext}>(Note -1)</Text></View>
              </View>
           
          </View>
      </View>
        );
    }
    renderCompany(){
        return(
            <View style={{marginLeft:Metrics.baseMargin,marginTop:Metrics.smallMargin}}>
                 <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Image source={handshake} style={styles.innerStyle}/>
                   <View style={styles.filedView}>
                      <TextInput
                         placeholder='Comapny'
                         style={styles.stylefiledText}
                         placeholderTextColor={COLORS.main_text_color}
                         maxLength={10}
                         />
                    </View>
                 
                </View>
                <View style={styles.filedViewRightTwo}>
                      <TextInput
                         placeholder='Job Title'
                         style={styles.stylefiledText}
                         placeholderTextColor={COLORS.main_text_color}
                
                         maxLength={10}
                         />

                </View>
                <View style={styles.filedViewRightTwo}>
                      <TextInput
                         placeholder='Work Hourse'
                         style={styles.stylefiledText}
                         placeholderTextColor={COLORS.main_text_color}
                
                         maxLength={10}
                         />

                </View>
                <View style={{marginLeft:Metrics.xdoubleBaseMargin,marginTop:Metrics.smallMargin}}>
                    <Text  style={{color:COLORS.main_text_color,fontSize:12, marginBottom:Metrics.baseMargin,}}>+ Add Comapny  </Text>
                </View>
               
            </View>
        );
    }
    render(){
        return( 
            
            <View style={styles.container}>
                <ScrollView style={{flex:1}}>
                {this.renderHeader()}
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
                <View style={{
                    width:width*0.9,flexDirection:'row', alignItems:'center',
                        justifyContent: 'flex-end',
                        flexDirection:'row',}}>
                    <View style={styles.saveView}>
                        <Text style={{color:COLORS.main_text_color,}}>Save</Text>
                    </View>
                </View>
             </View>
                            
           
            
        );
    }
}
{/* <View style={styles.saveView}>
<Text>Save</Text>
</View> */}