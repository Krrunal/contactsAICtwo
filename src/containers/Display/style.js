import {Dimensions, StyleSheet} from 'react-native';

import {COLORS} from '../theme/Colors.js';
import Font from '../theme/font';
import Metrics from '../theme/Metrics';

var {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.white,
    width: width,
    alignItems: 'center',
  },

  middleView: {
    width: width * 0.9,
    marginTop: Metrics.baseMargin
  },

  boldText: {
    fontFamily: Font.bold,
    fontSize: width * 0.04,
  },

  FirstView: {
    marginTop: Metrics.baseMargin,
    marginLeft: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
  },
  // checkContainer: {
  //   marginVertical: Metrics.xsmallMargin,
  //   // borderWidth: 1
  // },
  // checkView: {
  //   marginVertical: Metrics.xsmallMargin,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },

  checkView: {
    marginTop: Metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkViewtwo: {
    marginTop: Metrics.xsmallMargin,
    flexDirection: 'row',
    alignItems: 'center',
  },

  normalText: {
    fontFamily: Font.regular,
    fontSize: width * 0.04,
  
  },
});
