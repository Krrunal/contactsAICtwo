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
    },
    mobileView:{
        backgroundColor:COLORS.main_sky_blue,
        // marginLeft:30,
        width:width*0.9,
        height:height*0.065,
        borderRadius:10,
        marginTop:Metrics.xsmallMargin,
        justifyContent:'center',
       
    },
    textInputViewSignup:{
        fontSize:width*0.040, 
        fontFamily:"Roboto-Light",
        justifyContent:'center',
        alignItems:'center',
        color:COLORS.main_text_color,
        marginLeft:Metrics.baseMargin,
        width: width * 0.650,
    },
    userView:{
        backgroundColor:COLORS.main_sky_blue,
        // marginLeft:30,
        width:width*0.9,
        height:height*0.065,
        borderRadius:10,
        marginTop:Metrics.xsmallMargin,
        justifyContent:'center',
        flexDirection: 'row'
    },
    passView:{
        backgroundColor:COLORS.main_sky_blue,
        marginTop:Metrics.xsmallMargin
        ,
        width: width * 0.9,
        height: height * 0.065,
        borderRadius: 8,
        justifyContent:'center',
        flexDirection: 'row'
    },
    userText:{
        marginTop:Metrics.smallMargin,
        marginLeft:Metrics.baseMargin,
        flexDirection:'row'
    },
    downText:{
        fontSize:width*0.030,
        marginTop:Metrics.xsmallMargin,
        marginLeft:Metrics.baseMargin,
        fontFamily:'Roboto-Light',
    },
    checkboxView:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:Metrics.smallMargin,
        marginTop:Metrics.smallMargin,


    },
    submitView:{
        backgroundColor:COLORS.white,
        // marginLeft:30,
        width:width*0.9,
        height:height*0.075,
        borderRadius:10,
        marginTop:Metrics.doubleBaseMargin,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius:4,
        elevation: 5,
        marginBottom:Metrics.doubleBaseMargin
    },
    submitText:{
        color:COLORS.black,
        fontSize:width*0.040, 
        fontFamily:"Roboto-Bold"
    },
    logoStyle:{
        width:width*0.2,
        height:width*0.2,
        marginTop:Metrics.baseMargin,

    },
    logoText:{
        marginTop:Metrics.baseMargin,
        color:COLORS.main_text_color,
        fontSize:width*0.045,
        fontFamily:"Roboto-Bold"
    },
    headerView:{
        width:width,
        justifyContent:'center',
        alignItems:'center'
    },
    normalText:{
        fontFamily:'Roboto-Bold',
        marginTop:Metrics.xsmallMargin,
        fontSize:width*0.045,

    },
    showText:{
        marginTop:Metrics.xsmallMargin,
        fontSize:width*0.035,
        fontFamily:'Roboto-Light',
     },
     RigthView:{
         width:width,
         flex:1,
         flexDirection:'row',
         justifyContent: 'flex-end',
         marginTop:Metrics.smallMargin,
         alignItems:'center',
         marginRight:Metrics.baseMargin

     },
     eyeView: {
        //borderWidth: 1,
        width: width * 0.025,
        alignItems: 'flex-end',
        justifyContent: 'center',
        flex:1,
        marginRight:Metrics.baseMargin,
      
    },
    checkIcon: {
        width: width * 0.045,
        height: width * 0.045,
    },
    checkIcon: {
        width: width * 0.045,
        height: width * 0.045,
    },
    
})