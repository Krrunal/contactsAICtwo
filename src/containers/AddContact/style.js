import { Dimensions, StyleSheet } from 'react-native';

// eslint-disable-next-line prettier/prettier
import { COLORS } from '../theme/Colors.js';
import Metrics from '../theme/Metrics';

var {width,height} =  Dimensions.get('window');
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
        alignItems:'center',
    },
    blueView:{
        width:width*0.8,
        height:height*0.075,
        backgroundColor:COLORS.main_sky_blue,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
        
    }

})