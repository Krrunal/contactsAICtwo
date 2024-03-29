import { Dimensions, StyleSheet } from "react-native";

// eslint-disable-next-line prettier/prettier
import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font";
import Metrics from "../theme/Metrics";

var { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  smallWhiteView: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.21,
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
  smallBlueView: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.21,
    height: height * 0.045,
    backgroundColor: COLORS.main_text_color,
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
  whiteText: {
    fontFamily: Font.medium,
    fontSize: width * 0.04,
    color: COLORS.white,
  },
  blueText: {
    fontFamily: Font.medium,
    fontSize: width * 0.04,
    color: COLORS.main_text_color,
  },
  doubleView: {
    flexDirection: "row",
    marginTop: Metrics.baseMargin,
    marginLeft: Metrics.doubleBaseMargin,
    marginRight: Metrics.doubleBaseMargin,
  },

  middleView: {
    flexDirection: "row",
    justifyContent: "center",
    width: width,
    borderColor:COLORS.main_text_color,
    borderWidth: 1,
  },

  firstView: {
    width: width * 0.5,
    borderWidth: 1,
    borderTopColor:COLORS.white,
    borderBottomColor:COLORS.white,
    borderRightColor:COLORS.main_text_color,
  },
  secondView: {
    width: width * 0.5,
    borderWidth: 1,
    borderTopColor:COLORS.white,
    borderBottomColor:COLORS.white,
    borderLeftColor:COLORS.white,
  },
  FirstText: {
    fontFamily: Font.medium,
    fontSize: width * 0.042,
    textTransform: "capitalize",
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
    marginLeft: Metrics.smallMargin,
    color: COLORS.main_text_color,
   },
});

