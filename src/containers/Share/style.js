import { Dimensions, StyleSheet } from "react-native";

// eslint-disable-next-line prettier/prettier
import { COLORS } from "../theme/Colors.js";
import Font  from "../theme/font";
import Metrics from "../theme/Metrics";

var { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:COLORS.white,
    width: width,
    height: height,
    alignItems: "center",
    justifyContent:'center'
  },
  blueView: {
    width: width * 0.9,
    height: height * 0.065,
    backgroundColor: COLORS.main_text_color,
    borderRadius: 10,
    flexDirection: "row",
    marginTop: Metrics.doubleBaseMargin,
    alignItems: "center",
  },
  sideBarView: {
    justifyContent: "center",
    margin: Metrics.xsmallMargin,
    alignItems: "center",
  },
  sidebarViewCenter: {
    width: width * 0.5,
    //  justifyContent: 'center',
    alignItems: "center",
    flexDirection: "row",
    marginLeft: Metrics.smallMargin,
  },
  sidebarViewRight: {
    margin: Metrics.xsmallMargin,
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  centerText: {
    fontFamily: "Roboto-Bold",
    fontSize: width * 0.045,
    color: COLORS.white,
  },
  sidebarStyle: {
    width: width * 0.1,
    height: width * 0.1,
  },
  qrContainer: {
    borderRadius: 15,
    padding: width * 0.1,
    backgroundColor: COLORS.main_text_color,
    alignItems:'center'
  },
  qrText: {
    color: COLORS.white,
    fontFamily: Font.medium,
    fontSize: width * 0.05,
    marginBottom: Metrics.doubleBaseMargin,
  },
  ///
  cardTitleView: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 8,
  },
  cardTitle: {
    fontSize: 15,
    color: '#585858',
    fontWeight: '600',
  },
  titleStyle: {
    fontSize: 20,
    color: '#585858',
  },
  subtitleStyle: {
    fontSize: 16,
    color: '#585858',
  },
  titleView: {
    margin: 20,
    backgroundColor: '#EEEFF0',
  },
  titleinput: {
    fontSize: 20,
    fontWeight: '600',
    margin: 5,
    backgroundColor: "#fff"
  }
});
