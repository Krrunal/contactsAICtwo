import {
 Avatar,
 Caption,
 Drawer,
 Paragraph,
 Text,
 Title,
 TouchableRipple,
} from 'react-native-paper';
import {Dimensions, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React, {Component} from 'react';

import {COLORS} from '../../containers/theme/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Metrics from '../../containers/theme/Metrics';
import innerimg from '../../assets/images/innerimg.png';
import sideBAR from '../../assets/images/sideBAR.png';

var {width, height} = Dimensions.get('window');
// import styles from  './style'

export  function DrawerContent(props){
 
    state ={
      status:false
    }
  
  toggleStatus=()=>{
    this.setState({
      status:!this.state.status
    });
    console.log('toggle button handler: '+ this.state.status);
  }
    return(
    <View style={styles.mainContent}> 
    <DrawerContentScrollView {...props}>
        
    <View style={styles.whiteView}>
                <View style={{width:width*0.6,flexDirection:'row'}}>
                <View style={styles.sideBarViewContent}><Image source={sideBAR} style={styles.sidebarStyle}/></View> 
                <View style={styles.sidebarViewCenterContent}><Text style={styles.centerText}>CONTACTS AIC</Text></View>
                </View>
     </View>
     <View style={{marginLeft:Metrics.doubleBaseMargin}}>
     <TouchableOpacity style={styles.item}>
            {/* <Icon name={'info-circle'} size={15} color={COLORS.white}/> */}
            <Image source={innerimg} style={{width:14,height:15}}/>
            <Text style={styles.itemText}>My Information</Text>
     </TouchableOpacity>
     <View style={styles.item}>
            <Icon name={'info-circle'} size={15} color={COLORS.white}/>
            <Text style={styles.itemText}>Contacts</Text>
     </View>
     <View style={styles.item}>
            <Icon name={'info-circle'} size={15} color={COLORS.white}/>
            <Text style={styles.itemText}>My Labels</Text>
     </View>
     <View style={styles.item}>
            <Icon name={'info-circle'} size={15} color={COLORS.white}/>
            <Text style={styles.itemText}>Sttings</Text>
     </View>
     <View style={styles.item}>
            <Icon name={'info-circle'} size={15} color={COLORS.white}/>
            <Text style={styles.itemText}>Help/Support</Text>
     </View>
     </View>
    
           
     
    </DrawerContentScrollView>
   
    </View>
    );
   
}
const styles = StyleSheet.create({
    mainContent:{
        backgroundColor: COLORS.main_text_color,
        flex:1
    },
    whiteView:{
     width: width * 0.6,
    height: height * 0.075,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft:Metrics.baseMargin,
    marginTop:Metrics.baseMargin
    },
    sideBarViewContent:{
        justifyContent:'center',
        margin:Metrics.xsmallMargin,
       
     },
     sidebarViewCenterContent:{
        width: width * 0.5,
        //  justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft:Metrics.smallMargin,
    },
    centerText:{
        fontSize:17,
        color:COLORS.main_text_color,
      
    },
    sidebarStyle: {
        width: width * 0.1,
        height: width * 0.1,
      },
      item:{
        width: width * 0.6,
        flex:1,
         flexDirection:'row',
        alignItems:'center',
        marginTop:Metrics.doubleBaseMargin
      },
      itemText:{
        color:COLORS.white,marginLeft:Metrics.smallMargin,fontSize:17
      }
})