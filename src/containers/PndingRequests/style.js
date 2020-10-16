import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../theme/Colors.js';
import Metrics from '../theme/Metrics';
import Font from '../theme/font';

var {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container:{
    alignItems: 'center',
    flex: 1,
    backgroundColor: COLORS.white,
  },

  importHeading:{
    fontFamily: Font.regular,
    fontSize: width * 0.038,
    marginVertical: Metrics.doubleBaseMargin,
    textAlign: 'center',
    lineHeight: height * 0.03
  },

  whiteBigView: {
    width: width * 0.85,
    marginTop: Metrics.doubleBaseMargin,
  },

  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.baseMargin,
  },

  showText: {
    fontFamily: Font.regular,
    fontSize: width * 0.038,
  },

  twoWhiteView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },

  smallWhiteView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.162,
    height: width * 0.065,
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
    margin: Metrics.xsmallMargin,
  },

  smallText: {
    fontFamily: Font.light,
    fontSize: width * 0.028,
  },

  Whiteview:{
    justifyContent:'center',
    alignItems:'center',
    width:width*0.660,
    height:height*0.065,
    backgroundColor:COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
        width: 3,
        height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius:4,
    elevation: 5,
    borderRadius:5,
  },

});
