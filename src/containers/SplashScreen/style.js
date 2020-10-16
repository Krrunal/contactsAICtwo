import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../theme/Colors.js';
import Metrics from '../theme/Metrics';
import Font from '../theme/font';

var {width,height} =  Dimensions.get('window');

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        width: Metrics.profileImageSize,
        height: Metrics.profileImageSize,
    },
    
    nameView: {
        width: width,
        paddingVertical: Metrics.buttonPadding,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontFamily: Font.regular,
        fontSize: width * 0.055,
        color: COLORS.main_text_color
    }
})