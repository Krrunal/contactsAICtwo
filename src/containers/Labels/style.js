import { Dimensions, StyleSheet } from 'react-native';

import { COLORS } from '../theme/Colors.js';
import Font from '../theme/font';
import Metrics from '../theme/Metrics';

var {width,height} =  Dimensions.get('window');
export default StyleSheet.create({
      whiteBigView:{
        width:width*0.8,
        backgroundColor:COLORS.white,
        borderRadius: 10,
        marginTop:Metrics.baseMargin
      },

      tripleView:{
          flexDirection:'row',
          alignItems:'center',
          flex:1,
          marginLeft:Metrics.doubleBaseMargin,
          marginTop:Metrics.doubleBaseMargin,
          },

      manageView:{
        justifyContent:'center',
        alignItems:'center',
        width:width*0.2,
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
        marginLeft:Metrics.baseMargin,
        marginBottom:Metrics.smallMargin,
        marginTop:Metrics.xsmallMargin
      },
      
      tripleText:{
        marginLeft:Metrics.baseMargin,
        fontFamily: Font.regular,
        fontSize: width * 0.04,
        textTransform: "capitalize",
        color:COLORS.main_text_color
      },

      manageText:{
        fontFamily: Font.regular,
        fontSize: width * 0.033,
        color:COLORS.main_text_color,
      },

      Whiteview:{
        justifyContent:'center',
         alignItems:'center',
         width:width*0.3,
         height:height*0.055,
         backgroundColor:COLORS.white,
         shadowColor: COLORS.black,
         shadowOffset: {
           width: 3,
           height: 3,
           borderWidth :1,
         },
       shadowOpacity: 0.25,
       shadowRadius:4,
       elevation: 5,
       borderRadius:5,
       marginTop:Metrics.xdoubleBaseMargin,
       margin:Metrics.smallMargin,
      },

   WhiteviewTwo:{
    justifyContent:'center',
    alignItems:'center',
    width:width*0.3,
    height:height*0.055,
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
   },
   bottomButton:{
    color: COLORS.main_text_color,
    fontFamily: Font.medium,
    fontSize: width * 0.045,
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
  addlabelView  :{
    width: width,
    marginTop:Metrics.baseMargin,
    alignItems:'center',
    justifyContent: 'center',
    marginTop:Metrics.doubleBaseMargin,
}, 
itemText:{
  fontSize: width * 0.040,
  fontFamily: Font.regular,
  color:COLORS.main_text_color,
  marginLeft:Metrics.baseMargin
}
 });