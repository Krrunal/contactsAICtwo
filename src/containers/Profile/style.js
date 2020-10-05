/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';

// eslint-disable-next-line prettier/prettier
import {COLORS} from '../theme/Colors.js';
import Metrics from '../theme/Metrics';

var {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  ImgBigView: {
    justifyContent: 'center',

    width: width * 0.97,
    height: height * 0.4,
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
  },
  imgView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    width: width * 0.8,
    height: height * 0.3,
  },
  OverImageText: {
    position: 'absolute',
    top: 2,
    left: 5,
    right: 0,
    bottom: 0,
  },
  backText: {
    marginLeft: Metrics.smallMargin,
    fontFamily: 'Roboto-Bold',
    fontSize: width * 0.04,
  },
  profileText: {
    color: COLORS.main_text_color,

    marginLeft: Metrics.doubleBaseMargin,
    marginTop: Metrics.smallMargin,
    fontFamily: 'Roboto-Bold',
    fontSize: width * 0.045,
  },
  middleView: {
    justifyContent: 'center',

    width: width * 0.97,
    height: height * 0.1,
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
    marginTop: Metrics.smallMargin,
    // padding: Metrics.smallMargin,
    alignItems: 'center',
  },
  callImg: {
    width: width * 0.07,
    height: width * 0.07,
  },
  textImg: {
    width: width * 0.082,
    height: width * 0.068,
  },
  videoImg: {
    width: width * 0.1,
    height: width * 0.06,
  },
  emailImg: {
    width: width * 0.083,
    height: width * 0.065,
  },
  mapImg: {
    width: width * 0.05,
    height: width * 0.07,
  },
  payImg: {
    width: width * 0.08,
    height: width * 0.068,
  },
  iconText: {marginTop: Metrics.xsmallMargin},

  mainView: {
    alignItems: 'center',
    flexDirection: 'row',
    width: width * 0.8,
    height: height * 0.1,
    justifyContent: 'center',
    // padding: Metrics.xsmallMargin,
    // marginLeft: Metrics.smallMargin,
    // marginRight: Metrics.smallMargin,
  },
  IconView: {
    justifyContent: 'center',
    margin: Metrics.smallMargin,

    width: width * 0.125,

    alignItems: 'center',
  },
  innerStyle: {
    width: width * 0.1,
    height: width * 0.11,
  },
  filedView: {
    width: width * 0.8,
    height: height * 0.06,
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

  filedViewtwo: {
    width: width * 0.8,
    height: height * 0.06,
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

    // justifyContent: 'center',
    // alignItems: 'center',
    color: COLORS.black,
    fontFamily: 'Roboto-Bold',
    width: width * 0.550,
  },
  renderView: {
    marginTop: Metrics.baseMargin,
    marginLeft: Metrics.smallMargin,
  },
  rightView: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flex: 1,
    marginRight: Metrics.xsmallMargin,
    marginTop: Metrics.smallMargin,
  },
  rightViewAdress: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flex: 1,
    marginRight: Metrics.smallMargin,
    marginTop: Metrics.baseMargin,
  },
  righttext: {
    color: COLORS.main_text_color,
    fontSize: width * 0.025,
    fontFamily: 'Roboto-Light',
    textAlign: 'right',
    marginRight: Metrics.smallMargin,
  },
  righttextAdreess: {
    color: COLORS.main_text_color,
    fontSize: width * 0.025,
    fontFamily: 'Roboto-Light',
    textAlign: 'right',
    marginRight: Metrics.smallMargin,
  },
  fieldMain: {
    alignItems: 'center',
    flex: 1,
    width: width,
    marginLeft: Metrics.xsmallMargin,
  },
  filedViewRightTwo: {
    width: width * 0.8,
    height: height * 0.06,
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
  editImg: {
    width: width * 0.04,
    height: width * 0.04,
    marginRight: 12,
  },
  rightTwoImg: {
    flexDirection: 'row',
  
    width: width * 0.15,
  },
  resetImg: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flex: 1,
  },
  filedViewAddress: {
    width: width * 0.8,
    height: height * 0.12,
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
    fontSize: width * 0.036,
    fontFamily: 'Roboto-Bold',
  },
  filedViewRightTwoCompany:{
    width: width * 0.8,
    height: height * 0.180,
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
    marginBottom: Metrics.baseMargin,
    
  },
  stylefiledTextCompany: {
    marginLeft: Metrics.smallMargin,

    // justifyContent: 'center',
    // alignItems: 'center',
    color: COLORS.black,
    fontFamily: 'Roboto-Bold',
    width: width * 0.500,
  },
  rightTwoCompany: {
    flexDirection: 'row',
  
    width: width * 0.15,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flex: 1,
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
});

// { width:width*0.1,height:height*0.050,backgroundColor:COLORS.main_sky_blue,justifyContent:'center',alignItems:'center'}
