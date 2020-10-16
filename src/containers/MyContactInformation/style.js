import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../theme/Colors.js';
import Metrics from '../theme/Metrics';
import Font from '../theme/font';

var {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center'
  },

  squareBorder:{
    width: width * 0.2,
    height: width * 0.2,
    borderColor: COLORS.main_text_color,
    borderRadius: 10,
    borderWidth:3
  },

  middleView: {
    flex: 1,
    flexDirection: 'row',
    padding: Metrics.smallMargin,
    marginLeft: Metrics.doubleBaseMargin,
    marginRight: Metrics.doubleBaseMargin,
    marginVertical: Metrics.baseMargin,
  },

  first: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.27,
    height: height * 0.033,
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
    marginHorizontal: Metrics.dividerHeight
  },

  firstText: {
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
    fontSize: width * 0.032,
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
    width: width * 0.75,
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
    marginLeft: Metrics.smallMargin,
    marginBottom: Metrics.baseMargin,
    flexDirection: 'row',
  },

  stylefiledText: {
    marginLeft: Metrics.smallMargin,
    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.main_text_color,
    fontSize: width * 0.03,
    width: width * 0.55,
    fontFamily: Font.regular,
  },

  rightView: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1,
    marginRight: Metrics.smallMargin,
  },

  righttext: {
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
    fontSize: width * 0.020,
    textAlign: 'right'
  },

  addFieldText: {
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
    fontSize: width * 0.032,
    marginLeft: Metrics.baseMargin
  },

  addressFieldContainer: {
    width: width * 0.75,
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
    marginBottom: Metrics.baseMargin,
    flexDirection: 'row',
  },

  addressField: {
    marginLeft: Metrics.smallMargin,
    color: COLORS.main_text_color,
    fontSize: width * 0.03,
    width: width * 0.55,
    fontFamily: Font.regular,
    textAlignVertical: 'top'
  },

  addressRightView: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 1,
    marginRight: Metrics.smallMargin,
    paddingBottom: 10
  },

  addressRighttext: {
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
    fontSize: width * 0.020,
    textAlign: 'right'
  },

  saveView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.2,
    height: height * 0.07,
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
    marginBottom: 30,
    marginTop: 10
  },
  
  fieldMain: {
    alignItems: 'center',
    flex: 1,
    width: width * 0.85,
    marginLeft: Metrics.xsmallMargin,
  },

  viewHolder:{
    alignItems: 'center',
    flex: 1,
    width: width,
    borderWidth: 1
  },
});
