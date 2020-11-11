import { Dimensions, StyleSheet } from 'react-native';

import { COLORS } from '../theme/Colors.js';
import Font from '../theme/font';
import Metrics from '../theme/Metrics';

var {width,height} =  Dimensions.get('window');
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
    },
   
    headerLineContainer: {
        width: width,
        alignItems: 'center',
        paddingHorizontal: width * 0.17,
        marginVertical: Metrics.smallMargin
    },

    headerLine: {
        textAlign: 'center',
        fontFamily: Font.regular,
        fontSize: width * 0.035,
        lineHeight: height * 0.03
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

    mainView:{
        flexDirection:'row',
        marginLeft:Metrics.doubleBaseMargin,
        alignItems:'center',
        marginTop:Metrics.baseMargin,
        // borderWidth: 1
    },

    contactText:{
        marginLeft:Metrics.smallMargin,
        fontFamily: Font.light,
        fontSize: width * 0.038,
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
        marginBottom:Metrics.smallMargin
    },

  
 });