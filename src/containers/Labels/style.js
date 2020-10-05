/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from 'react-native';

// eslint-disable-next-line prettier/prettier
import { COLORS } from '../theme/Colors.js';
import Metrics from '../theme/Metrics';

var {width,height} =  Dimensions.get('window');
export default StyleSheet.create({
    sideBarView:{
        justifyContent:'center',
        margin:Metrics.xsmallMargin,
       
     }, 
     sidebarViewCenter:{
        width: width * 0.6,
        //  justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft:Metrics.smallMargin
     },
    sidebarViewRight:{
        margin:Metrics.xsmallMargin,
        flex:1,
        justifyContent:'flex-end',
        flexDirection:'row'
    },
    centerText:{
      fontFamily:'Roboto-Bold',
      fontSize: width * 0.045,
        color:COLORS.white,
      
    },
    sidebarStyle: {
        width: width * 0.1,
        height: width * 0.1,
       
      },
      blueView: {
        width: width * 0.9,
        height: height * 0.065,
        backgroundColor: COLORS.main_text_color,
        borderRadius: 10,
        flexDirection: 'row',
        marginTop:Metrics.doubleBaseMargin,
        alignItems:'center'
      },
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
        fontFamily:'Roboto-Light',
 fontSize: width * 0.040,
      },
      manageText:{
        fontFamily:'Roboto-Light',
        fontSize: width * 0.036,
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