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

  contactView: {
    width: width * 0.8,
    height: height * 0.55,
    backgroundColor: COLORS.white,
  },
  contactViewBlack: {
    width: width * 0.8,
    height: height * 0.55,
    backgroundColor: COLORS.black,
  },
  checkboxView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: Metrics.xsmallMargin,
  },

  showText: {
    fontFamily: Font.regular,
    fontSize: width * 0.04,
    color: COLORS.black,
    marginLeft: Metrics.baseMargin,
  },

  checkboxViewTwo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Metrics.baseMargin,
    // borderWidth: 1,
    borderColor: "white",
    marginHorizontal: 0,
    width: width * 0.8,
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
    marginTop: Metrics.baseMargin,
  },

  smallWhiteView: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.145,
    height: height * 0.045,
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
    fontSize: 10,
  },

  twoWhiteView: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
  },

  importHeading: {
    fontFamily: Font.regular,
    fontSize: width * 0.040,
    marginVertical: Metrics.doubleBaseMargin,
  },
  selectText: {
  
    fontFamily: Font.medium,
    fontSize: width * 0.039,
  },
  deSelectText: {
  
    fontFamily: Font.medium,
    fontSize: width * 0.050,
  },
  rememberView: {
    flexDirection: "row",
    marginTop: Metrics.baseMargin,
    justifyContent: "center",
    alignItems: "center",

    width: width * 0.5,
    height: width * 0.1,
  },
  checkedStyle: {
    width: width * 0.04,
    height: width * 0.04,
    resizeMode: "contain",
  },
  checkView: {
    width: width * 0.070,
    height: width * 0.070,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.main_text_color,
    borderWidth: 2,
    borderRadius: 3,
  //  backgroundColor:COLORS.main_text_color
  },
  checkViewForLight: {
    width: width * 0.070,
    height: width * 0.070,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.main_text_color,
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor:COLORS.main_text_color
  },

});
