import { Dimensions, StyleSheet } from 'react-native';

import { COLORS } from '../theme/Colors.js';
import Font from '../theme/font';
import Metrics from '../theme/Metrics';

var {width,height} =  Dimensions.get('window');

export default StyleSheet.create({
    container:{
        flex:1,
        height: height,
        // backgroundColor:COLORS.white,
        alignItems:'center',
    },

    headerView: {
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height * 0.15,
    },

    viewEmail:{
        backgroundColor:COLORS.main_sky_blue,
        marginTop: height * 0.07,
        width: width * 0.85,
        height: height * 0.065,
        borderRadius: 8,
        justifyContent:'center',
    },

    viewPassword:{
        backgroundColor:COLORS.main_sky_blue,
        marginTop: height * 0.025,
        width: width * 0.85,
        height: height * 0.065,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent:'center',
        flexDirection: 'row',
    },

    viewLogin:{
      backgroundColor:COLORS.light_blue,
      width:width*0.85,
      height:height*0.065,
      borderRadius:10 ,
      marginTop:20,
      justifyContent:'center',
      alignItems:'center',
    },

    loginText:{
        color:COLORS.white,
        fontSize:width*0.045, 
        fontFamily: Font.medium
    },

    rememberView:{
        flexDirection:'row',
        marginTop:Metrics.baseMargin,
        justifyContent:'center',
        alignItems:'center'
    },

    rememberText:{
        fontSize: width*0.04, 
        fontFamily: Font.regular,
        color: COLORS.main_text_color,
        marginLeft:Metrics.smallMargin,
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
        fontSize: width * 0.037,
        fontFamily: Font.medium
    },

    signupInlogin:{
        backgroundColor:COLORS.main_text_color,
        width: width*0.370,
        height: height*0.06,
        borderRadius: 10 ,
        marginTop: height * 0.07,
        justifyContent:'center',
        alignItems:'center',
    },

    logoImg:{
        width: width * 0.2,
        height: width * 0.2
    },

    logoView:{
        width:width,
        justifyContent:'center',
        alignItems:'center',
    },
    
    logoText:{
        marginTop :Metrics.listSpace,
        color :COLORS.main_text_color,
        fontFamily: Font.medium,
        fontSize: width * 0.055, 
    },
    
    eyeView: {
        flex: 1,
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
    checkedStyle:{
        width: width * 0.030,
        height: width * 0.030,
        resizeMode:'contain'
    },
    uncheckedStyle:{
        width: width * 0.045,
        height: width * 0.045,
        resizeMode:'contain'

    },
    checkView:{
        width: width * 0.045,
        height: width * 0.045,
        justifyContent:'center',
        alignItems:'center',
        borderColor:COLORS.main_text_color,
        borderWidth:1,
        borderRadius:3
    },

    error: {
        color: COLORS.red,
        // borderWidth: 1,
        alignSelf: 'center',
        width: width * 0.75,
        marginTop: height * 0.005
    }
});