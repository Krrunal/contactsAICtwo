import { Dimensions, StyleSheet } from 'react-native';

// eslint-disable-next-line prettier/prettier
import { COLORS } from '../theme/Colors.js';
import Metrics from '../theme/Metrics';
import Font from '../theme/font';

var {width,height} =  Dimensions.get('window');

export default StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:COLORS.white,
        width:width,
        height:height,
        alignItems:'center',
        justifyContent: 'center'
    },
    qrContainer: {
        borderRadius: 15,
        padding: width * 0.1,
        backgroundColor: COLORS.main_text_color,
        alignItems: 'center',
    },
    qrText: {
        color: COLORS.white,
        fontFamily: Font.medium,
        fontSize: width * 0.05,
        marginBottom: Metrics.doubleBaseMargin
    }
})