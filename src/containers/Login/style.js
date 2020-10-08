/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from 'react-native';

// eslint-disable-next-line prettier/prettier
import { COLORS } from '../theme/Colors.js';
import Metrics from '../theme/Metrics';
import {useTheme} from '@react-navigation/native';

var {width,height} =  Dimensions.get('window');

export default StyleSheet.create({
    mainStyle:{
        
        flex: 1, backgroundColor: COLORS.white},
    container:{
      flex:1,
        backgroundColor:COLORS.white,
   
        alignItems:'center',
        height:height,
    },
    headerView: {
        //borderWidth: 3,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height * 0.15,
    },

    viewEmail:{
        backgroundColor:COLORS.main_sky_blue,
        marginTop: height * 0.07,
        width: width * 0.8,
        height: height * 0.065,
        borderRadius: 8,
        justifyContent:'center'

    },
    viewPassword:{
        backgroundColor:COLORS.main_sky_blue,
        marginTop: height * 0.025,
        width: width * 0.8,
        height: height * 0.065,
        borderRadius: 8,
        justifyContent:'center',
        flexDirection: 'row'
    },
    passwordInputView: {
        marginLeft:15,
        width: width * 0.6,
        justifyContent:'center',
        alignItems:'center',
         fontSize:width*0.040, 
         fontFamily:'Roboto-Light'
        //borderWidth: 1 
    },

    textInputView:{
        marginLeft:15,
        justifyContent:'center',
        alignItems:'center',
        fontSize:width*0.040, 
        fontFamily:'Roboto-Light'
    },
    viewLogin:{
      backgroundColor:COLORS.main_text_color,
      width:width*0.8,
      height:height*0.065,
      borderRadius:10 ,
      marginTop:20,
      justifyContent:'center',
      alignItems:'center',
      
    },
    loginText:{
        color:COLORS.white,
        fontSize:width*0.040, 
        fontFamily:"Roboto-Bold"
        
    },
    rememberView:{
        flexDirection:'row',
        marginTop:Metrics.baseMargin,
        justifyContent:'center'
    },
    rememberText:{
        fontSize:width*0.040, 
        marginTop:Metrics.xsmallMargin,
        fontFamily:'Roboto-Light'
    },
    lineView:{
        width:width*0.2,
        height:width*0.01,
        backgroundColor:COLORS.main_text_color,
        marginRight:Metrics.baseMargin,
        marginTop:Metrics.smallMargin
    },
    lineViewTwo:{
        width:width*0.2,
        height:width*0.01,
        backgroundColor:COLORS.main_text_color,
        marginLeft:Metrics.baseMargin,
        marginTop:Metrics.smallMargin

    },
    lineStyle:{
        flexDirection:'row',
        marginTop:Metrics.baseMargin

    },
    orText:{
        color:COLORS.main_text_color,
        fontSize:16

    },
    signupInlogin:{
        backgroundColor:COLORS.main_text_color,
        width:width*0.370,
        height:height*0.062,
        borderRadius:10 ,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
      },
      logoImg:{
         width:width*0.250,
         height:width*0.250
         
      },
      logoView:{
          width:width,
          height:height*0.3,
          justifyContent:'center',
          alignItems:'center',
      },
      logoText:{
          marginTop:Metrics.smallMargin,
          color:COLORS.main_text_color,
          fontFamily:'Roboto-Bold',
          fontSize:width*0.040, 
      },
    
      eyeView: {
        //borderWidth: 1,
        width: width * 0.17,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkIcon: {
        width: width * 0.045,
        height: width * 0.045,
    },
    checkIcon: {
        width: width * 0.045,
        height: width * 0.045,
    },

});