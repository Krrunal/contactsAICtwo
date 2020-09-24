/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from 'react-native';

// eslint-disable-next-line prettier/prettier
import { COLORS } from '../theme/Colors.js';
import Metrics from '../theme/Metrics';

var {width,height} =  Dimensions.get('window');
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
        // alignItems:'center',
        marginTop:Metrics.doubleBaseMargin,
      
        
    },
    blueView: {
        width: width * 0.9,
        height: height * 0.075,
        backgroundColor: COLORS.main_text_color,
        borderRadius: 10,
        flexDirection: 'row',
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
        marginLeft:Metrics.baseMargin
     },
    sidebarViewRight:{
        margin:Metrics.xsmallMargin,
        flex:1,
        justifyContent:'flex-end',
        flexDirection:'row'
    },
    centerText:{
        fontSize:17,
        color:COLORS.white,
      
    },
    sidebarStyle: {
        width: width * 0.1,
        height: width * 0.1,
      },
      middleView:{
          flex:1,
          flexDirection:'row',
          padding:Metrics.smallMargin,
         marginLeft:Metrics.doubleBaseMargin,
         marginRight:Metrics.doubleBaseMargin,
         marginTop:Metrics.baseMargin,
        

      },
      first:{
          justifyContent:'center',
          alignItems:'center',
          width:width*0.3,
          height:height*0.050,
          backgroundColor:COLORS.white,
          shadowColor: COLORS.black,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius:4,
        elevation: 5,
        borderRadius:5,
        marginTop:Metrics.baseMargin,
        
      },
      firstText:{
          color:COLORS.main_text_color
      },
      firstImg: {
          width:width*0.2,
          height:width*0.2
      },
      firstMiddle:{
          alignItems:'center',
          padding:Metrics.xsmallMargin

      },
      innerStyle:{
          width:width*0.1,
          height:width*0.1
      },
      filedView:{
       
                    width:width*0.8,
                    height:height*0.052,
                    backgroundColor:COLORS.white,
                    shadowColor: COLORS.black,
                    shadowOffset: {
                    width: 2,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius:4,
                elevation: 5,
                borderRadius:5,
                marginLeft:Metrics.smallMargin,
                flexDirection:'row'
      },
      stylefiledText:{
                marginLeft:Metrics.smallMargin,
                marginLeft:15,
                justifyContent:'center',
                alignItems:'center',
                color:COLORS.main_text_color,
                fontSize:12,
                width:width*0.4
            
      },
      filedViewRight:{
                width:width*0.8,
                height:height*0.052,
                backgroundColor:COLORS.white,
                shadowColor: COLORS.black,
                shadowOffset: {
                    width: 2,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius:4,
                elevation: 5,
                borderRadius:5,
                marginLeft:Metrics.xdoubleBaseMargin,
                marginTop:Metrics.smallMargin
                
    },
    rightView:{
        // width:width,
        // 
        // 
        // 
        // marginTop:Metrics.smallMargin,
        // alignItems:'center',
        // marginRight:Metrics.baseMargin
        alignItems:'center',
        justifyContent: 'flex-end',
        flexDirection:'row',
        flex:1,
        marginRight:Metrics.baseMargin,
       
    },
    filedViewRightTwo:{
        width:width*0.8,
        height:height*0.052,
        backgroundColor:COLORS.white,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius:4,
        elevation: 5,
        borderRadius:5,
        marginLeft:Metrics.xdoubleBaseMargin,
        marginTop:Metrics.smallMargin,
        flexDirection:'row'
    },
    filedViewAddress:{
       
        width:width*0.8,
        height:height*0.2,
        backgroundColor:COLORS.white,
        shadowColor: COLORS.black,
        shadowOffset: {
        width: 2,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius:4,
    elevation: 5,
    borderRadius:5,
    marginLeft:Metrics.smallMargin,
},
stylefiledTextAddress:{
    marginLeft:Metrics.smallMargin,
    marginLeft:15,
    // justifyContent:'center',
    // alignItems:'center',
    color:COLORS.main_text_color,
    fontSize:12,
   

},
saveView:{
    justifyContent:'center',
          alignItems:'center',
          width:width*0.2,
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
       
        marginBottom:Metrics.baseMargin,
        
        
},
righttext:{
    color:COLORS.main_text_color,
    fontSize:8
},
filedViewNote:{
    width:width*0.8,
    height:height*0.1,
    backgroundColor:COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
    width: 2,
    height: 2,
},
shadowOpacity: 0.25,
shadowRadius:4,
elevation: 5,
borderRadius:5,
marginLeft:Metrics.smallMargin,
},
stylefiledTextNote:{
    marginLeft:Metrics.smallMargin,
    marginLeft:15,
    // justifyContent:'center',
    // alignItems:'center',
    color:COLORS.main_text_color,
    fontSize:12,
   

},
});