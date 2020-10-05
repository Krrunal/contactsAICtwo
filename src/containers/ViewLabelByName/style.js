import { Dimensions, StyleSheet } from 'react-native';

// eslint-disable-next-line prettier/prettier
import { COLORS } from '../theme/Colors.js';
import Metrics from '../theme/Metrics';

var {width,height} =  Dimensions.get('window');

export default StyleSheet.create({
    container:{
       flex:1,
        backgroundColor:COLORS.white,
       
     
       
    },
    blueView: {
        width: width * 0.9,
        height: height * 0.075,
        backgroundColor: COLORS.main_text_color,
        borderRadius: 10,
        flexDirection: 'row',
        marginTop:Metrics.baseMargin,
        alignItems:'center'
      },
      sideBarView:{
        justifyContent:'center',
        margin:Metrics.xsmallMargin,
       alignItems:'center'
     },
     sidebarViewCenter:{
        
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
      
    },
    sidebarStyle: {
        width: width * 0.1,
        height: width * 0.1,
      },
      smallWhiteView:{
        justifyContent:'center',
          alignItems:'center',
          width:width*0.195,
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
        margin:Metrics.xsmallMargin,
        
    },
    smallBlueView:{
        justifyContent:'center',
          alignItems:'center',
          width:width*0.195,
          height:height*0.055,
          backgroundColor:COLORS.main_text_color,
          shadowColor: COLORS.black,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius:4,
        elevation: 5,
        borderRadius:5,
        margin:Metrics.xsmallMargin
    },
    whiteText:{
        fontSize:width*0.035,
        color:COLORS.white,
    },
  blueText  :{
        fontSize:width*0.035,
        color:COLORS.main_text_color,
    },
doubleView:{
    
    flexDirection:'row',
    marginTop:Metrics.baseMargin,
    marginLeft:Metrics.doubleBaseMargin,
    marginRight:Metrics.doubleBaseMargin,
    
},
middleView:{
    flex:1,
    flexDirection:'row',
    marginTop:Metrics.baseMargin,
    justifyContent:'center',
        
          width:width,
          height:height*0.170,
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
        marginBottom:Metrics.xsmallMargin
},
firstView:{
    width:width*0.5,
    marginLeft:Metrics.doubleBaseMargin,
    
    
},
secondView:{
    width:width*0.5,
},
FirstText:{
    fontSize:width*0.035,
    color:COLORS.main_text_color,
    padding:Metrics.smallMargin
},
secondText:{
    fontSize:width*0.035,
    padding:Metrics.xsmallMargin,
   
    
}
})