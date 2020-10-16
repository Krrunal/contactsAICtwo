import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../theme/Colors.js';
import Metrics from '../theme/Metrics';
import Font from '../theme/font';

var {width, height} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
      alignItems:'center'
    },

    buttonView:{
        width: width * 0.8,
        height: height * 0.065,
        backgroundColor: COLORS.main_text_color,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: height * 0.03
    },

    text:{
        fontFamily: Font.medium,
        fontSize: width * 0.045,
        color:COLORS.white,
        textAlign:'center'
    },

});
