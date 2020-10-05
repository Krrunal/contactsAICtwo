import { Dimensions, StyleSheet } from 'react-native';

// eslint-disable-next-line prettier/prettier
import { COLORS } from '../theme/Colors.js';
import Metrics from '../theme/Metrics';

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
        //borderWidth: 1
    },

    text: {
        fontFamily:'Roboto-Bold',
        fontSize: width * 0.045,
   
       
        //fontWeight: "900",
        //fontFamily: Font.bold,
        color: COLORS.main_text_color
    }
})