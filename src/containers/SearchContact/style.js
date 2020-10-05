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
        fontSize:width*0.045,
        color:COLORS.white,
        fontFamily:'Roboto-Bold',
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
      BlueBIgView:{
          width:width*0.8,
          height:height*0.7,
          backgroundColor:COLORS.main_text_color,
         borderRadius: 10,
         marginTop:Metrics.baseMargin
      },
      checkboxView:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:Metrics.doubleBaseMargin,
        marginTop:Metrics.smallMargin,

      },
      showText:{
        fontFamily:'Roboto-Light',
        fontSize:width*0.040,
        color:COLORS.white
     },
     checkboxViewTwo:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:Metrics.doubleBaseMargin,
        marginTop:Metrics.baseMargin,

      },
      Whiteview:{
         justifyContent:'center',
          alignItems:'center',
          width: width * 0.8,
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
        marginTop:Metrics.baseMargin,
    }
});