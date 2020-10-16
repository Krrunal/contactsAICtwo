import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../containers/theme/Colors';
import Font from '../../containers/theme/font';
import Metrics from '../../containers/theme/Metrics';

var {width, height} = Dimensions.get('window');

export default StyleSheet.create({

    blueView: {
        width: width * 0.9,
        backgroundColor: COLORS.main_text_color,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop:Metrics.doubleBaseMargin
    },

    sidebarStyle: {
        width: width * 0.1,
        height: width * 0.1,
    },

    sidebarStyleRight: {
        width: width * 0.1,
        height: width * 0.1,
    },

    sideBarView:{
        justifyContent:'center',
        margin:Metrics.xsmallMargin,
    },

    sidebarViewRight:{
        margin:Metrics.xsmallMargin,
        flex:1,
        justifyContent:'flex-end',
        flexDirection:'row'
    },

    sidebarStyleRight: {
        width: width * 0.1,
        height: width * 0.1,
    },

    centerText:{
        fontSize:width*0.047,
        color:COLORS.white,
        fontFamily:Font.medium,
        marginLeft:Metrics.smallMargin
    },

    sidebarViewCenter:{
        width: width * 0.65,
        alignItems: 'center',
        flexDirection: 'row',
    }
})
