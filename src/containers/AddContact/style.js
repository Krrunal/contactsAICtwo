import {Dimensions, StyleSheet} from 'react-native';

// eslint-disable-next-line prettier/prettier
import {COLORS} from '../theme/Colors.js';
import Metrics from '../theme/Metrics';

var {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    
  },
  blueView: {
    width: width * 0.8,
    height: height * 0.075,
    backgroundColor: COLORS.main_text_color,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sidebarStyle: {
    width: width * 0.1,
    height: width * 0.1,
  },
  sidebarStyleRight: {
    width: width * 0.1,
    height: width * 0.1,
  },
//   left: {
//          justifyContent: 'flex-end',
//        flexDirection: 'row', 
//        flex: 1,
//     },
//   right: {
//       justifyContent: 'flex-end', 
//       flexDirection: 'row', 
//       flex: 1
//     },
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
    firstView:{
        width: width * 0.8,
        height: height * 0.075,
        backgroundColor: COLORS.main_text_color,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop:Metrics.baseMargin
    },
    SecondView:{
        width: width * 0.8,
        height: height * 0.075,
        backgroundColor: COLORS.main_text_color,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop:Metrics.baseMargin
    },
    firstText:{
        fontSize:17,
        color:COLORS.white
    },
    centerText:{
        fontSize:17,
        color:COLORS.white,
      
    },
    sidebarViewCenter:{
        width: width * 0.5,
         justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
       
    }
});
