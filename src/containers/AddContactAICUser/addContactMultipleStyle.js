import { Dimensions, StyleSheet } from 'react-native';

import { COLORS } from '../theme/Colors.js';
import Font from '../theme/font';
import Metrics from '../theme/Metrics';

var {width,height} =  Dimensions.get('window');
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
    },
   
    headerLineContainer: {
        width: width,
        alignItems: 'center',
        paddingHorizontal: width * 0.17,
        marginVertical: Metrics.smallMargin
    },

    headerLine: {
        textAlign: 'center',
        fontFamily: Font.regular,
        fontSize: width * 0.035,
        lineHeight: height * 0.03
    },

    Whiteview:{
        justifyContent:'center',
        alignItems:'center',
        width:width*0.6,
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
    },

    mainView:{
        flexDirection:'row',
        marginLeft:Metrics.doubleBaseMargin,
        alignItems:'center',
        marginTop:Metrics.baseMargin,
       // borderWidth: 1
    },

    contactText:{
        marginLeft:Metrics.smallMargin,
        fontFamily: Font.light,
        fontSize: width * 0.038,
    },
    
    smallWhiteview:{
        justifyContent:'center',
        alignItems:'center',
        width:width*0.155,
        height:height*0.035,
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
        marginLeft:Metrics.smallMargin,
        marginBottom:Metrics.smallMargin
    },
    addlabelView  :{
        width: width,
        marginTop:Metrics.baseMargin,
        alignItems:'center',
        justifyContent: 'center',
        marginTop:Metrics.doubleBaseMargin,
         }, 
    stylefiledText: {
        justifyContent: 'center',
        alignItems: 'center',
        color: COLORS.main_text_color,
        fontSize: width * 0.040,
        fontFamily: Font.regular,
        paddingVertical: width * 0.005,
        paddingHorizontal: width * 0.05,
        borderRadius: 5,
        backgroundColor: COLORS.main_sky_blue,
      },
      stylefiledTextBlack: {
        justifyContent: 'center',
        alignItems: 'center',
        color: COLORS.black,
        fontSize: width * 0.040,
        fontFamily: Font.regular,
        paddingVertical: width * 0.005,
        paddingHorizontal: width * 0.05,
        borderRadius: 5,
        backgroundColor: COLORS.white,
      },
      itemText:{
        fontSize: width * 0.040,
        fontFamily: Font.regular,
        color:COLORS.main_text_color,
        marginLeft:Metrics.baseMargin
      },
      uperView:{
         
          width:width*0.7,
          alignItems:'center',
          marginTop:Metrics.baseMargin
      },
      uperText:{
          textAlign:'center',
          fontSize: width * 0.035,
          fontFamily: Font.regular,
          color:COLORS.main_text_color,
          padding:width * 0.030,
          letterSpacing: 0.5
          //margin:width * 0.030,
      },
      flatSmallView:{
        width:width*0.8,
        height:height*0.048,
        borderWidth: 2,
        borderColor: COLORS.main_text_color,
        borderRadius: 5,
        //marginRight:Metrics.doubleBaseMargin,
        marginTop:Metrics.doubleBaseMargin,
        alignItems:'center',
        flexDirection:'row'
      },
      flatSmallText:{
        fontSize: width * 0.043,
        fontFamily: Font.medium,
        color: COLORS.main_text_color,
        marginLeft:Metrics.smallMargin,
      },
      footerFlat:{
        // alignItems: "flex-end",
        // width: width,
        // height: height ,
        opacity: 0.5,
        marginTop:Metrics.xdoubleBaseMargin,
        
      },
      contentFlat:{
   
        // height: height,
        // width: width,
        backgroundColor: COLORS.white,
        justifyContent: "flex-end",
        width:width*0.8,
       // height:height*0.2,
       // marginRight:Metrics.doubleBaseMargin,
        marginTop:Metrics.multipleLabel,
      },
      flatView:{
        width:width*0.8,
        height:height*0.2,
        borderWidth: 2,
        borderColor: COLORS.main_text_color,
        borderRadius: 5,
       
      },
      downArrowStyle:{
        width: width * 0.085,
         height: width * 0.085,
         resizeMode:'contain'
      }
 });