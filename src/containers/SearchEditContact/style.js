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
        marginTop:Metrics.baseMargin,
        alignItems:'center'
      },
      mainView:{
      
            width:width*0.8,
          
          //  backgroundColor:COLORS.transparent
      },
      quardView:{
          flexDirection:'row',
          alignItems:'center',
          marginTop:Metrics.doubleBaseMargin
      },
      outerImgStyle:{
          width:width*0.1,
          height:width*0.1
      },
      personName:{
          marginLeft:Metrics.smallMargin,
          fontFamily:'Roboto-Light',
          fontSize: width * 0.040,
         
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
      scrollStyle:{
        alignItems: 'center', height:height*0.7,
       }
 });