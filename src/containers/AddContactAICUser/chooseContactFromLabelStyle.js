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
      
    },
    blueView: {
        width: width * 0.9,
        height: height * 0.075,
        backgroundColor: COLORS.main_text_color,
        borderRadius: 10,
        flexDirection: 'row',
       marginTop:Metrics.doubleBaseMargin
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
        fontSize:17,
        color:COLORS.white,
      
    },
    sidebarStyle: {
        width: width * 0.1,
        height: width * 0.1,
      },
      textMiddle:{
        margin:Metrics.doubleBaseMargin,
        textAlign:'center',
        padding:Metrics.smallMargin,
        marginTop:Metrics.doubleBaseMargin
    }
  
})