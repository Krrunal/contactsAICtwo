import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../theme/Colors.js';
import Metrics from '../theme/Metrics';
import Font from '../theme/font';

var {width,height} =  Dimensions.get('window');
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white
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
       marginTop:Metrics.doubleBaseMargin,
    },
    
    blueText:{
      fontSize:width*0.043,
      color:COLORS.main_text_color,
      fontFamily: Font.medium,
    },

    mainView:{
      alignItems:'center',
      height: height * 0.3,
      marginTop: height * 0.15
    },

 });