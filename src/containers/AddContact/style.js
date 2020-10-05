import {Dimensions, StyleSheet} from 'react-native';

// eslint-disable-next-line prettier/prettier
import {COLORS} from '../theme/Colors.js';
import Metrics from '../theme/Metrics';

var {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems:'center'
  },
  blueView: {
    width: width * 0.9,
    height: height * 0.065,
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
        height: height * 0.065,
        backgroundColor: COLORS.main_text_color,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop:Metrics.baseMargin
    },
    SecondView:{
        width: width * 0.8,
        height: height * 0.065,
        backgroundColor: COLORS.main_text_color,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop:Metrics.baseMargin
    },
    firstText:{
      fontFamily:'Roboto-Bold',
      fontSize: width * 0.042,
        color:COLORS.white,
        textAlign:'center'
    },
    centerText:{
      fontSize:width*0.045,
        color:COLORS.white,
        fontFamily:'Roboto-Bold',
        marginLeft:Metrics.smallMargin
    },
    sidebarViewCenter:{
        width: width * 0.5,
         
        alignItems: 'center',
        flexDirection: 'row',
       
    }
});
