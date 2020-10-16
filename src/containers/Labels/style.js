import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../theme/Colors.js';
import Metrics from '../theme/Metrics';
import Font from '../theme/font';

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
          flex:1,
          marginLeft:Metrics.doubleBaseMargin,
          marginTop:Metrics.doubleBaseMargin,
        alignItems:'center'
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
        marginLeft:Metrics.baseMargin
      },
      
      tripleText:{
        marginLeft:Metrics.baseMargin,
        fontFamily: Font.regular,
        fontSize: width * 0.04,
      },

      manageText:{
        fontFamily: Font.light,
        fontSize: width * 0.033,
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
   }
      
 });