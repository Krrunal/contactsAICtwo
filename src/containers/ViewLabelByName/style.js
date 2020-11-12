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
     marginTop: Metrics.smallMargin,
    marginBottom: Metrics.smallMargin,
    justifyContent: "center",
    width: width * 0.9,
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

  firstView: {
    width: width * 0.4,
    marginRight: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginVertical: Metrics.baseMargin,
  },

  secondView: {
    width: width * 0.4,
    marginRight: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginBottom: Metrics.baseMargin,
  },
  FirstText: {
    fontFamily: Font.medium,
    fontSize: width * 0.04,

    textTransform: "capitalize",
  },
});

// import { Dimensions, StyleSheet } from "react-native";

// // eslint-disable-next-line prettier/prettier
// import { COLORS } from "../theme/Colors.js";
// import Font from "../theme/font";
// import Metrics from "../theme/Metrics";

// var { width, height } = Dimensions.get("window");

// export default StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.white,
//   },
//   smallWhiteView: {
//     justifyContent: "center",
//     alignItems: "center",
//     width: width * 0.21,
//     height: height * 0.045,
//     backgroundColor: COLORS.white,
//     shadowColor: COLORS.black,
//     shadowOffset: {
//       width: 3,
//       height: 3,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//     borderRadius: 5,
//     margin: Metrics.xsmallMargin,
//   },
//   smallBlueView: {
//     justifyContent: "center",
//     alignItems: "center",
//     width: width * 0.21,
//     height: height * 0.045,
//     backgroundColor: COLORS.main_text_color,
//     shadowColor: COLORS.black,
//     shadowOffset: {
//       width: 3,
//       height: 3,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//     borderRadius: 5,
//     margin: Metrics.xsmallMargin,
//   },
//   whiteText: {
//     fontFamily: Font.medium,
//     fontSize: width * 0.04,
//     color: COLORS.white,
//   },
//   blueText: {
//     fontFamily: Font.medium,
//     fontSize: width * 0.04,
//     color: COLORS.main_text_color,
//   },
//   doubleView: {
//     flexDirection: "row",
//     marginTop: Metrics.baseMargin,
//     marginLeft: Metrics.doubleBaseMargin,
//     marginRight: Metrics.doubleBaseMargin,
//   },
//   middleView: {
//     flex: 1,
//     flexDirection: "row",
//     marginTop: Metrics.baseMargin,
//     justifyContent: "center",

//     width: width * 0.94,
//     // height: height * 0.2,
//     backgroundColor: COLORS.white,
//     shadowColor: COLORS.black,
//     shadowOffset: {
//       width: 3,
//       height: 3,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//     borderRadius: 5,
//     marginBottom: Metrics.xsmallMargin,
//   },
//   firstView: {
//     width: width * 0.5,

//     marginRight: 10,
//     marginLeft: Metrics.doubleBaseMargin,
//     marginTop: Metrics.smallMargin,
//     marginBottom: Metrics.smallMargin,
//   },
//   secondView: {
//     width: width * 0.4,
//     // height: height * 0.3,
//     marginLeft: Metrics.smallMargin,
//     marginTop: Metrics.smallMargin,
//     marginRight: Metrics.smallMargin,
//   },
//   FirstText: {
//     fontFamily: Font.medium,
//     fontSize: width * 0.04,

//     textTransform: "capitalize",
//     padding: 3,
//   },
// });
