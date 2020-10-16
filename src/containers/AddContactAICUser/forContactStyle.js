import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../theme/Colors.js';
import Metrics from '../theme/Metrics';
import Font from '../theme/font';

var {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },

  TopView: {
    flexDirection: 'row',
    marginVertical: Metrics.doubleBaseMargin,
    marginHorizontal: width * 0.05
  },

  topOne: {
    marginLeft:Metrics.smallMargin
  },

  toptwo: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginRight:Metrics.smallMargin
  },

  Whiteview: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.3,
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
    marginTop: Metrics.xdoubleBaseMargin,
    margin: Metrics.smallMargin,
  },

  WhiteviewTwo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.3,
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
    marginTop: Metrics.xdoubleBaseMargin,
    margin: Metrics.smallMargin,
  },

  WhiteBigview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.85,
    height: height * 0.06,
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
    // margin: Metrics.smallMargin,
  },

  WhiteviewMiddle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.3,
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
    marginTop: Metrics.xdoubleBaseMargin,
    margin: Metrics.smallMargin,
  },

  textLeft: {
    margin: Metrics.baseMargin,
    flex: 0.6,
  },

  textRigh: {
    flex: 0.5,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    margin: Metrics.smallMargin,
    width: width * 0.05,
  },

  sizeText: {
    fontSize: width * 0.040,
    fontFamily: Font.regular,
  },

  sizeTextSmall: {
    textAlign: 'right',
    fontSize: width * 0.025,
    fontFamily:'Roboto-Light',
  },

  SmallMiddle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.5,
    height: height * 0.055,
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
    marginTop: Metrics.doubleBaseMargin,
  },
});
