import {Dimensions, StyleSheet} from 'react-native';

import {COLORS} from '../theme/Colors.js';
import Font from '../theme/font';
import Metrics from '../theme/Metrics';

var {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },

  headerLineContainer: {
    width: width,
    alignItems: 'center',
    paddingHorizontal: width * 0.2,
    marginVertical: Metrics.baseMargin
  },

  headerLine: {
    textAlign: 'center',
    fontFamily: Font.regular,
    fontSize: width * 0.035,
    lineHeight: height * 0.03
  },

  TopView: {
    flexDirection: 'row',
    marginTop: Metrics.doubleBaseMargin,
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
  
  sizeText: {
    fontSize: width * 0.040,
    fontFamily: Font.regular,
    color:COLORS.main_text_color,
   
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
   // justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.85,
   // height: height * 0.06,
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
    marginTop: height * 0.03,
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
    flexDirection: 'column',
    margin: Metrics.smallMargin,
    width: width * 0.05,
   
    marginLeft:Metrics.baseMargin,
   
  },
  textRighBig : {
    flex:1,
  // flex: 0.5,
    //justifyContent: 'flex-end',
  //  flexDirection: 'column',
   // margin: Metrics.smallMargin,
   width: width * 0.85,
  },
  sizeTextSmall: {
    textAlign: 'right',
    fontSize: width * 0.025,
    fontFamily:'Roboto-Light',
    textTransform: "capitalize",
    color:COLORS.main_text_color
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
  userText : {
    fontSize: width * 0.040,
    fontFamily: Font.regular,
    color:COLORS.main_text_color
  },
  textLeft: {
    margin: Metrics.baseMargin,
    flex: 0.6,
  },

back2Text:{
  color: COLORS.main_text_color,
  fontFamily: Font.medium,
  fontSize: width * 0.045,
}
});
