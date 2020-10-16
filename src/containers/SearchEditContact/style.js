import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../theme/Colors.js';
import Metrics from '../theme/Metrics';
import Font from '../theme/font';

var {width,height} =  Dimensions.get('window');
export default StyleSheet.create({
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
          fontFamily: Font.regular,
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