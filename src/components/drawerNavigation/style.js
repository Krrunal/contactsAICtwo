import {Dimensions, StyleSheet} from 'react-native';

import {COLORS} from '../../../src/containers/theme/Colors.js';
import Metrics from '../../containers/theme/Metrics.js';

var {width, height} = Dimensions.get('window');
export default StyleSheet.create({
    mainContent:{
        backgroundColor: COLORS.main_text_color,
        flex:1
    },
    whiteView:{
        width: width * 0.8,
    height: height * 0.075,
    backgroundColor: COLORS.main_text_color,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    },
    sideBarViewContent:{
        justifyContent:'center',
        margin:Metrics.xsmallMargin,
       
     },
     sidebarViewCenterContent:{
        width: width * 0.5,
         justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
       
    },
    centerText:{
        fontSize:17,
        color:COLORS.white,
      
    },
    sidebarStyle: {
        width: width * 0.1,
        height: width * 0.1,
      },
});