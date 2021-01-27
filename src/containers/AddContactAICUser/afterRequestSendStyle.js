import { Dimensions, StyleSheet } from "react-native";

import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font";
import Metrics from "../theme/Metrics";

var { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  uperView: {
    width: width * 0.85,
    // alignItems: "center",
    marginTop: Metrics.baseMargin,
  },
  uperText: {
    textAlign: "left",
    fontSize: width * 0.045,
    fontFamily: Font.medium,
    padding: width * 0.03,
    letterSpacing: 0.5,
  },
  uperText2: {
    textAlign: "left",
    fontSize: width * 0.035,
    fontFamily: Font.regular,
    padding: width * 0.03,
    // letterSpacing: 0.5,
  },
  sizeTextSmall: {
    textAlign: "left",
    fontSize: width * 0.035,
    fontFamily: Font.regular,
    textTransform: "capitalize",
    padding: width * 0.03,
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
