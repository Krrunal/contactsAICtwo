import { Dimensions, StyleSheet } from "react-native";

import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font";
import Metrics from "../theme/Metrics";

var { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: COLORS.white,
  },

  importHeading: {
    fontFamily: Font.regular,
    fontSize: width * 0.038,
    marginVertical: Metrics.doubleBaseMargin,
    textAlign: "center",
    lineHeight: height * 0.03,
  },

  whiteBigView: {
    borderWidth: 1,
    width: width * 0.9,
    marginTop: Metrics.baseMargin,
    borderColor: COLORS.main_text_color,
    //height: height * 0.15,
    borderRadius: 10,
  },

  checkboxView: {
    flexDirection: "row",

  },

  showText: {
    fontFamily: Font.regular,
    fontSize: width * 0.038,
  },

  twoWhiteView: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
  },

  smallWhiteView: {
    justifyContent: "center",
    alignItems: "center",
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
    marginHorizontal: Metrics.xsmallMargin,
  },

  smallText: {
    fontFamily: Font.light,
    fontSize: width * 0.028,
    color: COLORS.main_text_color,
  },

  Whiteview: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.66,
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
  },
  usernameText: {
    fontFamily: Font.medium,
    fontSize: width * 0.03,
    // color:COLORS.main_text_color
  },
  oneView: {
    flexDirection: "row",
    marginTop: Metrics.baseMargin,
    width: width * 0.85,
   // marginLeft: Metrics.smallMargin,
  },
  mainView: {
    flexDirection: "row",
    //marginLeft: Metrics.doubleBaseMargin,
    alignItems: "center",
    marginTop: Metrics.baseMargin,
    // borderWidth: 1
  },
  itemText: {
    fontSize: width * 0.04,
    fontFamily: Font.regular,
    color: COLORS.main_text_color,
    marginLeft: Metrics.baseMargin,
  },
  acceptView: {
    borderWidth: 2,
    borderColor: COLORS.main_text_color,
    height: height * 0.04,
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.25,
    borderRadius: 5,
   
  },
  acceptText: {
    fontSize: width * 0.034,
    fontFamily: Font.regular,
    color: COLORS.main_text_color,
  },
  checkView: {
    width: width * 0.07,
    height: width * 0.07,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.main_text_color,
    borderWidth: 2,
    borderRadius: 3,
    //  backgroundColor:COLORS.main_text_color
  },
  checkViewForLight: {
    width: width * 0.07,
    height: width * 0.07,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.main_text_color,
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: COLORS.main_text_color,
  },
  checkedStyle: {
    width: width * 0.04,
    height: width * 0.04,
    resizeMode: "contain",
  },
  deSelectText: {
    fontFamily: Font.medium,
    fontSize: width * 0.05,
    marginLeft:Metrics.baseMargin
  },
  upText:{
    fontFamily: Font.medium,
    fontSize: width * 0.046,
    marginLeft:Metrics.baseMargin
  },
  afterConfrimStyle:{
    borderWidth: 1,
    width: width * 0.9,
    marginTop: Metrics.baseMargin,
    borderColor: COLORS.main_text_color,
   // height: height * 0.25,
    borderRadius: 10,
  }

});
