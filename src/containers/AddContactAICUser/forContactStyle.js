import {Dimensions, StyleSheet} from 'react-native';

// eslint-disable-next-line prettier/prettier
import {COLORS} from '../theme/Colors.js';
import Metrics from '../theme/Metrics';

var {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,

    alignItems: 'center',
  },
  blueView: {
    width: width * 0.9,
    height: height * 0.065,
    backgroundColor: COLORS.main_text_color,
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: Metrics.doubleBaseMargin,
   
  },
  sideBarView: {
    justifyContent: 'center',
    margin: Metrics.xsmallMargin,
    alignItems: 'center',
  },
  sidebarViewCenter: {
    width: width * 0.5,
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
    fontFamily: 'Roboto-Bold',
    fontSize: width * 0.045,

    color: COLORS.white,
  },
  sidebarStyle: {
    width: width * 0.1,
    height: width * 0.1,
  },
  TopView: {
    flexDirection: 'row',

    marginTop: Metrics.baseMargin,
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
    width: width * 0.8,
    height: height * 0.085,
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
  },
  textRigh: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    margin: Metrics.smallMargin,
    width: width * 0.1,
  

  },
  sizeText: {
    fontSize: width * 0.045,
    fontFamily:'Roboto-Bold',

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
    marginTop: Metrics.doubleBaseMargin,
    margin: Metrics.smallMargin,
  },
});
