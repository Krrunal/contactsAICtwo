import { Dimensions, StyleSheet } from 'react-native';

// eslint-disable-next-line prettier/prettier
import { COLORS } from '../theme/Colors.js';
import Metrics from '../theme/Metrics';

var {width,height} =  Dimensions.get('window');

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
        width:width,
        height:height,
        // alignItems:'center'
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
      sideBarView:{
        justifyContent:'center',
        margin:Metrics.xsmallMargin,
       alignItems:'center'
     },
     sidebarViewCenter:{
        width: width * 0.5,
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
        fontSize:width*0.035,
        color:COLORS.white,
        fontFamily:'Roboto-Bold',
        fontSize: width * 0.045,
   
      
    },
    sidebarStyle: {
        width: width * 0.1,
        height: width * 0.1,
      },
      userView:{
        backgroundColor:COLORS.white,
        // marginLeft:30,
        width:width*0.8,
        height:height*0.075,
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
    },
    textInputViewSignup:{
        marginLeft:15,
        justifyContent:'center',
        alignItems:'center',
        color:COLORS.main_text_color
    },
    downText:{
        fontFamily:'Roboto-Bold',
        fontSize: width * 0.045,
   
        marginTop:Metrics.xsmallMargin,
        marginLeft:Metrics.xsmallMargin,
       
    },
    middleText:{
        fontFamily:'Roboto-Light',
        fontSize: width * 0.040,
       
        marginTop:Metrics.baseMargin,
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
   },
   WhiteviewTwo:{
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
   },
   scrollStyle:{
       marginBottom:Metrics.baseMargin,
       flex:1
   }
   
      
    
})