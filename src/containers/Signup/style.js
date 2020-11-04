import { Dimensions, StyleSheet } from 'react-native';

import { COLORS } from '../theme/Colors.js';
import Font from '../theme/font';
import Metrics from '../theme/Metrics';

var {width,height} =  Dimensions.get('window');

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
        alignItems:'center',
    },

    mobileView:{
        backgroundColor:COLORS.main_sky_blue,
        width:width*0.9,
        height:height*0.065,
        borderRadius:10,
        marginTop:Metrics.xsmallMargin,
        justifyContent:'center',
      
    },
    numberView  :{
        backgroundColor:COLORS.main_sky_blue,
        width:width*0.9,
        height:height*0.065,
        borderRadius:10,
        marginTop:Metrics.baseMargin,
        justifyContent:'center',
        marginBottom:Metrics.smallMargin
    },
    mobileInputView: {
        width:width*0.9,
        borderRadius:10,
        marginTop:Metrics.xsmallMargin,
        justifyContent:'center',
        // borderWidth: 1
    },

    passView:{
        backgroundColor:COLORS.main_sky_blue,
        marginTop: height * 0.005,
        width: width * 0.9,
        height: height * 0.065,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent:'center',
        flexDirection: 'row',
    },

    userText:{
        marginTop:Metrics.smallMargin,
        marginLeft:Metrics.baseMargin,
        flexDirection:'row',
      
     
     
     
    },

    downText:{
        fontSize:width*0.030,
        marginTop:Metrics.xsmallMargin,
        marginLeft:Metrics.baseMargin,
        fontFamily: Font.light,
    },

    submitView:{
        backgroundColor:COLORS.white,
        width:width*0.9,
        height:height*0.075,
        borderRadius:10,
        marginTop:Metrics.doubleBaseMargin,
        justifyContent:'center',
        alignItems:'center',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.7,
        shadowRadius:4,
        elevation: 5,
        marginBottom:Metrics.doubleBaseMargin
    },

    submitText:{
        fontSize: width*0.040, 
        fontFamily: Font.medium
    },

    logoStyle:{
        width: width * 0.17,
        height: width * 0.17,
        marginVertical:Metrics.doubleBaseMargin,
    },

    logoText:{
        color:COLORS.main_text_color,
        fontSize: width*0.053,
        fontFamily: Font.bold
    },

    headerView:{
        width: width,
        justifyContent:'center',
        alignItems:'center'
    },

    normalText:{
        fontFamily: Font.medium,
        marginTop:Metrics.xsmallMargin,
        fontSize: width*0.04,
    },
    
    RigthView:{
        width:width,
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop:Metrics.smallMargin,
        alignItems:'center',
        marginRight:Metrics.baseMargin,
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
    
    footerModal: {
        justifyContent: 'center',
        flex: 1
    },

    contactContent: {
        margin: 0,
        marginTop: height*0.4,
        width: width * 0.8,
        backgroundColor: COLORS.white,
        alignSelf: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.05,
        borderRadius: 10
    },

    popupHeader: {
        alignItems: 'flex-end'
    },

    infoIcon: {
        width: width * 0.02,
        height: width * 0.02,
        alignSelf: 'center',
        resizeMode:'contain'
    },
    error:{
        fontSize:15,
        paddingLeft: width * 0.03,
        paddingTop: height * 0.005
    },
 
    errorSuccess: {
        fontSize:15,
        color:COLORS.green,
        paddingLeft: width * 0.03,
        paddingTop: height * 0.005 
    },
    errorFail: {
        fontSize:15,
        color:COLORS.red,
        paddingLeft: width * 0.03,
        paddingTop: height * 0.005 
    },
    checkIcon  :{
        width: width * 0.030,
        height: width * 0.030,
        resizeMode:'contain'
    }
})