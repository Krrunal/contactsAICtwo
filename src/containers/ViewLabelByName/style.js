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
    width: width * 0.195,
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
    margin: Metrics.xsmallMargin,
  },
  smallBlueView: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.195,
    height: height * 0.055,
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
    fontSize: width * 0.045,
    color: COLORS.white,
  },
  blueText: {
    fontFamily: Font.medium,
    fontSize: width * 0.045,
    color: COLORS.main_text_color,
  },
  doubleView: {
    flexDirection: "row",
    marginTop: Metrics.baseMargin,
    marginLeft: Metrics.doubleBaseMargin,
    marginRight: Metrics.doubleBaseMargin,
  },
  middleView: {
    flex: 1,
    flexDirection: "row",
    marginTop: Metrics.baseMargin,
    justifyContent: "center",

    width: width * 0.94,
    height: height * 0.17,
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
    marginBottom: Metrics.xsmallMargin,
  },
  firstView: {
    width: width * 0.5,
    marginLeft: Metrics.doubleBaseMargin,
  },
  secondView: {
    width: width * 0.5,
  },
  FirstText: {
    fontFamily: Font.medium,
    fontSize: width * 0.045,
    padding: Metrics.smallMargin,
    textTransform: "capitalize",
  },
});
