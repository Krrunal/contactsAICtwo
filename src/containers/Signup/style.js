import { Dimensions, StyleSheet } from 'react-native';

// eslint-disable-next-line prettier/prettier
import { COLORS } from '../theme/Colors.js';
import Metrics from '../theme/Metrics';

var {width,height} =  Dimensions.get('window');

export default StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:COLORS.white,
        alignItems:'center',
       
    },
    mobileView:{
        backgroundColor:COLORS.main_sky_blue,
        // marginLeft:30,
        width:width*0.9,
        height:height*0.075,
        borderRadius:10,
        marginTop:Metrics.xsmallMargin,
        justifyContent:'center'
    },
    textInputViewSignup:{
        marginLeft:15,
        justifyContent:'center',
        alignItems:'center',
        color:COLORS.main_text_color
    },
    userView:{
        backgroundColor:COLORS.main_sky_blue,
        // marginLeft:30,
        width:width*0.9,
        height:height*0.075,
        borderRadius:10,
        marginTop:Metrics.xsmallMargin,
        justifyContent:'center'
    },
    userText:{
        marginTop:Metrics.smallMargin,
        marginLeft:Metrics.baseMargin,
        flexDirection:'row'
    },
    downText:{
        fontSize:10,
        marginTop:Metrics.xsmallMargin,
        marginLeft:Metrics.baseMargin
    },
    checkboxView:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:Metrics.baseMargin,
        marginTop:Metrics.smallMargin,


    },
    submitView:{
        backgroundColor:COLORS.white,
        // marginLeft:30,
        width:width*0.9,
        height:height*0.075,
        borderRadius:10,
        marginTop:Metrics.baseMargin,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius:4,
        elevation: 5,
        marginBottom:Metrics.doubleBaseMargin
    },
    submitText:{
        color:COLORS.black,
        fontSize:18
    },
    logoStyle:{
        width:width*0.2,
        height:width*0.2,
        marginTop:Metrics.baseMargin,

    },
    logoText:{
        marginTop:Metrics.baseMargin,
        color:COLORS.main_text_color,
        fontSize:20
    },
    headerView:{
        width:width,
        justifyContent:'center',
        alignItems:'center'
    },
    normalText:{
        fontSize:12,
        marginTop:Metrics.xsmallMargin,

    },
    showText:{
        marginTop:Metrics.xsmallMargin,
        fontSize:13
     },
     RigthView:{
         width:width,
         flex:1,
         flexDirection:'row',
         justifyContent: 'flex-end',
         marginTop:Metrics.smallMargin,
         alignItems:'center',
         marginRight:Metrics.baseMargin

     }
    
})