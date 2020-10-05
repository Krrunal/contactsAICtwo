/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from 'react-native';

// eslint-disable-next-line prettier/prettier
import { COLORS } from '../theme/Colors.js';
import Metrics from '../theme/Metrics';

var {width,height} =  Dimensions.get('window');
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white
    },
   
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
        marginTop:Metrics.baseMargin,
        alignItems:'center'
      },
      
      quardView:{
          flexDirection:'row',
          alignItems:'center'
      },
      outerImgStyle:{
          width:width*0.1,
          height:width*0.1
      },
      personName:{
          marginLeft:Metrics.smallMargin,
          fontSize:width*0.035
      },
      editImgStyle:{
        width:width*0.035,
        height:width*0.035,
        marginLeft:Metrics.baseMargin
      },
      resetImgStyle:{
        width:width*0.030,
        height:width*0.030,
        marginLeft:Metrics.smallMargin
      },
      plusStyle:{
        width: width * 0.130,
        height: width * 0.120,
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
   blueText:{
    fontSize:width*0.035,
    color:COLORS.main_text_color,
    fontWeight:"bold"
  
},
textMiddle:{
  fontFamily:'Roboto-Light',
  fontSize: width * 0.040,
  padding:Metrics.xdoubleBaseMargin,
 
  textAlign:'center',
 
},
mainView:{
  flexDirection:'row',
  marginLeft:Metrics.doubleBaseMargin,
  alignItems:'center',
  marginTop:Metrics.smallMargin,

},
contactText:{
  marginLeft:Metrics.smallMargin,
  fontFamily:'Roboto-Light',
  fontSize: width * 0.040,
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

},

  
 });