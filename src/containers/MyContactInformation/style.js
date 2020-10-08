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
    alignContent: 'center',
    justifyContent: 'center',
  },
  squareBorder: {
    width: width * 0.2,
    height: width * 0.2,
    borderColor: COLORS.main_text_color,
    borderRadius: 10,
    borderWidth: 3,
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
    fontFamily: 'Roboto-Light',
    fontSize: width * 0.035,
  },
  firstImg: {
    width: width * 0.2,
    height: width * 0.2,
  },
  firstMiddle: {
    alignItems: 'center',
    padding: Metrics.xsmallMargin,
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
    marginLeft: Metrics.smallMargin,

    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.main_text_color,

    fontSize: width * 0.025,

    fontFamily: 'Roboto-Bold',
    width: width * 0.4,
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
    height: height * 0.15,
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

   
    fontFamily: 'Roboto-Bold',
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
    fontFamily: 'Roboto-Light',
    fontSize: width * 0.02,
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
    fontFamily: 'Roboto-Bold',
    fontSize: width * 0.025,
  },
  fieldMain: {
    alignItems: 'center',
    flex: 1,
    width: width,
    marginLeft: Metrics.xsmallMargin,
  },
});
