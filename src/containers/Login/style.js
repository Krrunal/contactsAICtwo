/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from 'react-native';

// eslint-disable-next-line prettier/prettier
import { COLORS } from '../theme/Colors.js';
import Metrics from '../theme/Metrics';

var {width,height} =  Dimensions.get('window');
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
        alignItems:'center',
        marginTop:Metrics.doubleBaseMargin
    },
    viewEmail:{
        backgroundColor:COLORS.main_sky_blue,
        // marginLeft:30,
        width:width*0.8,
        height:height*0.075,
        borderRadius:10,
        justifyContent:'center'

    },
    viewPassword:{
        backgroundColor:COLORS.main_sky_blue,
        // marginLeft:30,
        width:width*0.8,
        height:height*0.075,
        borderRadius:10,
        marginTop:20,
        justifyContent:'center'
    },
    textInputView:{
        marginLeft:15,
        justifyContent:'center',
        alignItems:'center'
    },
    viewLogin:{
      backgroundColor:COLORS.main_text_color,
      width:width*0.8,
      height:height*0.075,
      borderRadius:10 ,
      marginTop:20,
      justifyContent:'center',
      alignItems:'center',
    },
    loginText:{
        color:COLORS.white,
        fontSize:18
        
    },
    rememberView:{
        flexDirection:'row',
        marginTop:Metrics.baseMargin,
        justifyContent:'center'
    },
    rememberText:{
        fontSize:16,
        marginTop:Metrics.xsmallMargin
        
    },
    lineView:{
        width:width*0.2,
        height:height*0.01,
        backgroundColor:COLORS.main_text_color,
        marginRight:Metrics.baseMargin,
        marginTop:Metrics.smallMargin
    },
    lineViewTwo:{
        width:width*0.2,
        height:height*0.01,
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
        width:width*0.4,
        height:height*0.075,
        borderRadius:10 ,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
      },
      logoImg:{
         width:width*0.3,
         height:width*0.3
         
      },
      logoView:{
          width:width,
          height:height*0.3,
          justifyContent:'center',
          alignItems:'center',
      },
      logoText:{
          marginTop:Metrics.xsmallMargin,
          color:COLORS.main_text_color
      },
    
    
    
});