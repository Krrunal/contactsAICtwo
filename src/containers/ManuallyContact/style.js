/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';

// eslint-disable-next-line prettier/prettier
import {COLORS} from '../theme/Colors.js';
import Metrics from '../theme/Metrics';

var {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    // alignItems:'center',
  },
  blueView: {
    width: width * 0.9,
    height: height * 0.065,
    backgroundColor: COLORS.main_text_color,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  squareBorder:{
    width: width * 0.190,
    height: width * 0.180,
    borderColor: COLORS.main_text_color,
    borderRadius: 10,
    borderWidth:3
  },

  sideBarView: {
    justifyContent: 'center',
    margin: Metrics.xsmallMargin,
  },
  sidebarViewCenter: {
    width: width * 0.6,
    //  justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: Metrics.smallMargin,
  },
  sidebarViewRight: {
    margin: Metrics.xsmallMargin,
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  centerText: {
    fontSize: width * 0.045,
    color: COLORS.white,
    fontFamily: 'Roboto-Bold',
  },
  sidebarStyle: {
    width: width * 0.1,
    height: width * 0.1,
  },
  middleView: {
    flex: 1,
    flexDirection: 'row',
    padding: Metrics.smallMargin,
    marginLeft: Metrics.doubleBaseMargin,
    marginRight: Metrics.doubleBaseMargin,
    marginTop: Metrics.baseMargin,
  },
  first: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.3,
    height: height * 0.04,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 5,
    marginTop: Metrics.baseMargin,
  },
  firstText: {
    color: COLORS.main_text_color,
    fontFamily:'Roboto-Light',
    fontSize: width * 0.035,

  },
  firstImg: {
    width: width * 0.2,
    height: width * 0.2,
  },
  firstMiddle: {
    alignItems: 'center',
    padding: Metrics.xsmallMargin,
    margin:Metrics.baseMargin
  },
  innerStyle: {
    width: width * 0.1,
    height: width * 0.1,
  },
  filedView: {
    width: width * 0.8,
    height: height * 0.056,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 5,
    marginLeft: Metrics.xsmallMargin,
    flexDirection: 'row',
  },
  stylefiledText: {
    marginLeft: Metrics.xsmallMargin,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.main_text_color,
    fontSize: width * 0.025,
    width: width * 0.4,
    fontFamily:'Roboto-Bold',

  },
  filedViewRight: {
    width: width * 0.8,
    height: height * 0.052,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 5,
    // marginLeft:Metrics.xdoubleBaseMargin,
    marginTop: Metrics.smallMargin,
    flexDirection: 'row',
  },
  rightView: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flex: 1,
    marginRight: Metrics.smallMargin,
  },
  filedViewRightTwo: {
    width: width * 0.8,
    height: height * 0.056,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 5,

    marginTop: Metrics.smallMargin,
    flexDirection: 'row',
  },
  filedViewAddress: {
    width: width * 0.8,
    height: height * 0.150,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 5,
    marginLeft: Metrics.smallMargin,
  },
  stylefiledTextAddress: {
    marginLeft: Metrics.smallMargin,
    marginLeft: 15,
    // justifyContent:'center',
    // alignItems:'center',
    color: COLORS.main_text_color,
    fontSize: width * 0.025,
    fontFamily:'Roboto-Bold',

  },
  saveView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.2,
    height: height * 0.065,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 5,

    marginBottom: Metrics.baseMargin,
  },
  righttext: {
    color: COLORS.main_text_color,
    fontSize: width * 0.018,
    fontFamily:'Roboto-Light',
  },
  filedViewNote: {
    width: width * 0.8,
    height: height * 0.145,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 5,
    marginLeft: Metrics.smallMargin,
  },
  stylefiledTextNote: {
    marginLeft: Metrics.smallMargin,
    marginLeft: 15,
    // justifyContent:'center',
    // alignItems:'center',
    color: COLORS.main_text_color,
    fontFamily:'Roboto-Bold',
    fontSize: width * 0.025,


  },
  fieldMain: {
    alignItems: 'center',
    flex: 1,
    width: width,
    marginLeft: Metrics.xsmallMargin,
  },
  firstdarkBlue:{
    justifyContent:'center',
    alignItems:'center',
    width:width*0.034,
    height:width*0.034,
    backgroundColor:COLORS.main_text_color,
  //   shadowColor: COLORS.black,
  // shadowOffset: {
  //     width: 2,
  //     height: 2,
  // },
  // shadowOpacity: 0.25,
  // shadowRadius:4,
  // elevation: 5,
  borderRadius:25,
  marginTop:Metrics.baseMargin,
  
},
firstLightBlue:{
  justifyContent:'center',
  alignItems:'center',
  width:width*0.034,
  height:width*0.034,
  backgroundColor:COLORS.main_sky_blue,
//   shadowColor: COLORS.black,
// shadowOffset: {
//     width: 2,
//     height: 2,
// },
// shadowOpacity: 0.25,
// shadowRadius:4,
// elevation: 5,
borderRadius:25,
marginTop:Metrics.baseMargin,
},
lableText:{
  marginTop:Metrics.baseMargin,
  color:COLORS.main_text_color,
  fontFamily:'Roboto-Bold',
  fontSize: width * 0.040,
 
}
});
