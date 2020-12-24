import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../theme/Colors.js';
import Metrics from '../theme/Metrics';
import Font from '../theme/font';

var {width,height} =  Dimensions.get('window');

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
        width:width,
        height:height,
    },

    headerLineContainer: {
        width: width,
        alignItems: 'center',
        paddingHorizontal: width * 0.2,
        marginVertical: Metrics.baseMargin
    },

    headerLine: {
        textAlign: 'center',
        fontFamily: Font.regular,
        fontSize: width * 0.035,
        lineHeight: height * 0.03
    },

    userView:{
       // backgroundColor:COLORS.white,
        width:width*0.8,
        height:height*0.057,
        borderRadius:10,
        marginTop:Metrics.xsmallMargin,
        justifyContent:'center',
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius:4,
        elevation: 5,
        borderRadius:5,
        // borderWidth: 1
    },

    textInputViewSignup:{
        marginLeft:15,
        justifyContent:'center',
        alignItems:'center',
        color:COLORS.main_text_color,
        fontSize: width * 0.037,
        fontFamily: Font.regular
    },

    downText:{
        fontFamily: Font.regular,
        fontSize: width * 0.038,
        marginTop:Metrics.xsmallMargin,
        marginLeft:Metrics.xsmallMargin,
    },

    okView:{
        backgroundColor:COLORS.white,
        // marginLeft:30,
        width:width*0.4,
        height:height*0.075,
        borderRadius:10,
        marginTop:Metrics.xsmallMargin,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius:4,
        elevation: 5,
        borderRadius:5,
    },

    Whiteview:{
        justifyContent:'center',
         alignItems:'center',
         width:width*0.270,
         height:height*0.065,
         backgroundColor:COLORS.white,
         shadowColor: COLORS.black,
       shadowOffset: {
           width: 3,
           height: 3,
       },
       shadowOpacity: 0.25,
       shadowRadius:4,
       elevation: 5,
       borderRadius:5,
       marginTop:Metrics.xdoubleBaseMargin,
       margin:Metrics.smallMargin,
       marginRight: Metrics.baseMargin
   },

   WhiteviewTwo:{
        justifyContent:'center',
        alignItems:'center',
        width:width*0.270,
        height:height*0.065,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius:4,
        elevation: 5,
        borderRadius:5,
        marginTop:Metrics.xdoubleBaseMargin,
        marginLeft: Metrics.baseMargin,
        margin:Metrics.smallMargin,
    },
    userText:{
        fontFamily:Font.regular,
        fontSize:width*0.040,
        color:COLORS.main_text_color,
        marginLeft: Metrics.smallMargin,
        marginBottom: Metrics.xsmallMargin,
    },
    backButtton:{
        fontFamily: Font.medium,
        fontSize: width * 0.045,
      }

})