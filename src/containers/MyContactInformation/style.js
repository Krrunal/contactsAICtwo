import { Dimensions, StyleSheet } from "react-native";

import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font";
import Metrics from "../theme/Metrics";

var { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    width:width
    //justifyContent: "center",
    // marginTop:Metrics.xxdoubleBaseMargin
  },
  SqureImage:{
    width: width * 0.185,
    height: width * 0.185,
    borderRadius:5
  },
  squareBorder: {
    width: width * 0.2,
    height: width * 0.2,
    borderColor: COLORS.main_text_color,
    borderRadius: 10,
    borderWidth: 3,
   
  },

  middleView: {
    flex: 1,
    flexDirection: "row",
    padding: Metrics.smallMargin,
    marginLeft: Metrics.doubleBaseMargin,
    marginRight: Metrics.doubleBaseMargin,
    marginVertical: Metrics.baseMargin,
  },

  first: {
    justifyContent: "center",
    alignItems: "center",
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
    marginHorizontal: Metrics.dividerHeight,
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
    alignItems: "center",
    padding: Metrics.xsmallMargin,
    width: height * 0.16
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
    // elevation: 5,
    borderRadius: 5,
    marginLeft: Metrics.smallMargin,
    marginBottom: Metrics.baseMargin,
    flexDirection: "row",
    marginRight: Metrics.smallMargin,
    marginTop: Metrics.xsmallMargin,
    alignItems: "center",
    position: "relative",
  },
  filedView2: {
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
    flexDirection: "row",
    marginRight: Metrics.baseMargin,
    marginTop: Metrics.xxxdoubleBaseMargin,
    alignItems: "center",
  },
  filedViewBig: {
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
    flexDirection: "row",
    marginRight: Metrics.smallMargin,
    marginTop: Metrics.multipleLabel,
    alignItems: "center",
  },
  stylefiledText: {
    marginLeft: Metrics.smallMargin,
    justifyContent: "center",
    alignItems: "center",
    color: COLORS.main_text_color,
    fontSize: width * 0.032,
    width: width * 0.5,
    fontFamily: Font.medium,
   },
  Text_1: {
    marginLeft: Metrics.smallMargin,
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
  },
  rightView: {
     alignItems: "flex-end",
    justifyContent: "flex-start",
    flex: 1,
    marginRight: Metrics.smallMargin,
   
  },
  rightViewBorder: {
    alignItems: "center",
    justifyContent: "center",
    // flex: 1,
    marginRight: Metrics.smallMargin,
    height: height * 0.04,
    width: width * 0.2,
    borderColor: COLORS.main_text_color,
    borderWidth: 1,
    borderRadius: 10,
  },
  righttext: {
    color: COLORS.main_text_color,
    fontFamily: Font.light,
    fontSize: width * 0.022,
    textAlign: "right",
  },

  iconSize: {
    color: COLORS.main_text_color,
    textAlign: "right",
  },

  addFieldText: {
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
    fontSize: width * 0.032,
    marginLeft: Metrics.baseMargin,
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
    flexDirection: "row",
    marginRight: Metrics.smallMargin,
  },

  addressField: {
    marginLeft: Metrics.smallMargin,
    color: COLORS.main_text_color,
    fontSize: width * 0.03,
    width: width * 0.5,
    fontFamily: Font.regular,
    textAlignVertical: "top",
   
  },

  addressRightView: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flex: 1,
    marginRight: Metrics.smallMargin,
    paddingBottom: 10,
  },

  addressRighttext: {
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
    fontSize: width * 0.02,
    textAlign: "right",
  },
  compnyRightText: {
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
    fontSize: width * 0.03,
    textAlign: "right",
  },
  saveView: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.2,
    height: height * 0.06,
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
    marginTop: 10,
  },

  fieldMain: {
    alignItems: "center",
    flex: 1,
    width: width * 0.85,
    marginLeft: Metrics.xsmallMargin,
  },

  viewHolder: {
    alignItems: "center",
    flex: 1,
    width: width,
    borderWidth: 1,
  },

  addFiledText: {
    color: COLORS.main_text_color,
    fontFamily: "Roboto-Light",
    fontSize: width * 0.035,
    marginBottom: Metrics.baseMargin,
  },

  addFiledTextBlack: {
    color: COLORS.white,
    fontFamily: "Roboto-Light",
    fontSize: width * 0.035,
    marginBottom: Metrics.baseMargin,
  },

  lableText: {
    marginTop: Metrics.baseMargin,
    color: COLORS.main_text_color,
    fontFamily: "Roboto-Bold",
    fontSize: width * 0.04,
  },

  firstdarkBlue: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.034,
    height: width * 0.034,
    backgroundColor: COLORS.main_text_color,
    borderRadius: 25,
    marginTop: Metrics.baseMargin,
  },

  firstLightBlue: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.034,
    height: width * 0.034,
    backgroundColor: COLORS.main_sky_blue,
    borderRadius: 25,
    marginTop: Metrics.baseMargin,
  },

  footerModal: {
    // justifyContent: "center",
    width: width,
    // height: height * 0.7,
    opacity: 0.5,
    alignItems: "flex-end",
    // position:"absolute",
    // elevation:10,
    // zIndex:1
  },

  contactContent: {
    // margin: 0,
    // height: height,
    // width: width,
    // backgroundColor: "rgba(0,0,0,0.6)",
    // alignItems: "center",
    // justifyContent: "center",
    margin: 0,
    height: height,
    width: width,
    backgroundColor: "rgba(0,0,0,0.0)",
    // alignItems: "flex-end",
    // justifyContent: "flex-end",
    // marginTop: Metrics.myInfo,
    // marginRight:Metrics.baseMargin,
    // bottom:250,
    position: "absolute",
    elevation: 10,
    zIndex: 1,
  },

  content: {
    width: width * 0.35,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 10,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.05,
    borderColor: COLORS.main_text_color,
    borderWidth: 3,
    borderRadius: 10,
  },

  modalHeader: {
    fontFamily: Font.medium,
    fontSize: width * 0.045,
    alignSelf: "center",
  },

  labelName: {
    fontFamily: Font.regular,
    fontSize: width * 0.03,
    color: COLORS.main_text_color,
    marginTop: 7,
    borderWidth: 1,
  },

  addLabelField: {
    borderWidth: 1,
    borderColor: COLORS.main_text_color,
    borderRadius: 5,
    marginTop: Metrics.baseMargin,
  },
  dateText: {
    fontFamily: Font.regular,
    fontSize: width * 0.03,
    color: COLORS.main_text_color,
    marginLeft: Metrics.smallMargin,
  },
  deleteBox: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: height * 0.056,
    borderRadius: 10,
    marginTop: Metrics.xsmallMargin,
  },
  deleteText: {
    fontFamily: Font.regular,
    fontSize: width * 0.03,
    color: COLORS.white,
  },
  dateView: {
    height: height * 0.05,
    justifyContent: "center",

    width: width * 0.45,
  },
  dateBlack: {
    fontFamily: Font.bold,
    fontSize: width * 0.03,
    color: COLORS.black,
    marginLeft: Metrics.smallMargin,
    alignItems: "center",
  },
  mobileInputText: {
    fontSize: width * 0.032,
    fontFamily: Font.regular,
    color: COLORS.main_text_color,
    width: width * 0.1,
  },
  dialcodeText: {
    fontSize: width * 0.032,
    fontFamily: Font.regular,
    color: COLORS.main_text_color,
  },
  ContactStyle: {
    width: width * 0.75,
    borderRadius: 10,

    flexDirection: "row",
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
    width: width * 0.75,
    marginLeft: Metrics.smallMargin,
  },
  containerContact: {
    backgroundColor: COLORS.main_sky_blue,
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
    width: width * 0.75,
    marginLeft: Metrics.smallMargin,
  },
  containerContactWidh: {
    backgroundColor: COLORS.main_sky_blue,
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
    width: width * 0.59,
    marginLeft: Metrics.smallMargin,
  },

  //model style
  countryModalStyle: {
    flex: 1,
    borderColor: "black",
    borderTopWidth: 1,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalContainer: {
    paddingTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
    flex: 10,
    backgroundColor: "white",
  },
  modalFlagStyle: {
    fontSize: 25,
  },
  filterInputStyle: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#fff",
    color: "#424242",
  },
  modalCountryItemCountryNameStyle: {
    flex: 1,
    fontSize: 15,
  },
  modalCountryItemCountryDialCodeStyle: {
    fontSize: 15,
  },
  searchIconStyle: {
    color: "black",
    fontSize: 15,
    marginLeft: 15,
  },
  closeButtonStyle: {
    padding: 12,
    alignItems: "center",
  },
  selectTypeText: {
    fontFamily: Font.light,
    fontSize: width * 0.023,
    color: COLORS.main_text_color,
  },
  flatlist: {},
  modelView: {
    width: width * 0.32,
    height: height * 0.26,
    backgroundColor: COLORS.white,
    borderColor: COLORS.main_text_color,
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: Metrics.xxxdoubleBaseMargin,
  },
  modelViewBig: {
    width: width * 0.3,
    height: height * 0.25,
    backgroundColor: COLORS.white,
    borderColor: COLORS.main_text_color,
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: Metrics.xxxdoubleBaseMargin,
  },

  inputTextView: {
    borderWidth: 1,
    borderColor: COLORS.main_text_color,
    borderRadius: 10,
    height: height * 0.045,
  },
  customText: {
    fontFamily: Font.regular,
    fontSize: width * 0.03,
    color: COLORS.main_text_color,
    marginLeft: 3,
    marginTop: 1,
  },
  textinputText: {
    fontFamily: Font.regular,
    fontSize: width * 0.02,
    color: COLORS.main_text_color,
  },
  titleView: {
    margin: 20,
    backgroundColor: "#EEEFF0",
  },
  titleinput: {
    fontSize: 20,
    fontWeight: "600",
    margin: 5,
    backgroundColor: "#fff",
  },
  workView: {
    width: width * 0.8,
    height: width * 0.8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.main_text_color,
     marginLeft: Metrics.smallMargin,
    flexDirection: "row",
    position: "relative",
 
  },
  LeftView: {
    width: width * 0.53,
    height: width * 0.8,
    marginLeft: 10,
  },

  timeView: {
    width: width * 0.14,
    borderWidth: 1,
    height: width * 0.08,
    marginLeft: 10,
    borderRadius: 4,
    borderColor: COLORS.main_text_color,
    justifyContent: "center",
    alignItems: "center",
    flex:1
  },
  timeText: {
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
    fontSize: width * 0.018,
    width: width * 0.11,
    height: width * 0.08,
    textAlign:'center',
   
    // justifyContent: "center",
    // alignItems: "center",

  },
  workModal: {
    width: width,
    height: height * 0.4,
    opacity: 0.5,
  },
  workModalView: {
    backgroundColor: "rgba(0,0,0,0.0)",
    margin: 0,
    height: height,
    width: width * 0.4,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: width * 0.93,
    flexDirection: "row",
    right: 0,
  },
  content: {
    width: width * 0.4,
    height: height * 0.25,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 10,
  },
  checkedIcon: {
    width: width * 0.05,
    height: width * 0.05,
    resizeMode: "contain",
    marginTop: 6,
  },
  dayView: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  selectTimezone: {
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.04,
    width: width * 0.2,
    borderColor: COLORS.main_text_color,
    borderWidth: 1,
    borderRadius: 10,
  },
  workText: {
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
    
  },
 searchSection: {
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.main_text_color,
    height: height * 0.065,
    paddingHorizontal: 5,
    marginVertical: 5,
    position: "relative",
    width: width * 0.8,
    marginLeft: Metrics.smallMargin,
    marginBottom: Metrics.baseMargin,
    marginRight: Metrics.smallMargin,
    marginTop: Metrics.xsmallMargin,
    backgroundColor:COLORS.white
  },
  searchSectionAddress: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: COLORS.main_text_color,
    borderRadius: 10,
    paddingHorizontal: 5,
    marginVertical: 5,
    position: "relative",
    width: width * 0.8,
    height: height * 0.15,
    marginLeft: Metrics.smallMargin,
    marginBottom: Metrics.smallMargin,
    marginRight: Metrics.smallMargin,
    marginTop: Metrics.xsmallMargin,
    backgroundColor:COLORS.white
  },
  modalBtn: {
    borderColor: COLORS.main_text_color,
    borderRadius: 11,
    borderWidth: 1,
    width: width * 0.2,
    height: width * 0.08,
    justifyContent: "center",
    alignItems: "center",
   },
  addNewBox: {
    marginLeft: Metrics.xdoubleBaseMargin,
  },
 addNew: {
    fontFamily: Font.medium,
    fontSize: width * 0.03,
  },
  removeNew: {
    fontFamily: Font.medium,
    fontSize: width * 0.03,
    marginRight: Metrics.baseMargin,
    color: COLORS.red,
  },
  type: {
    fontSize: 12,
    color: COLORS.white,
    //  fontFamily: fonts.pop_regular,
    padding: 10,
  },

  mobileInputText: {
    fontSize: width * 0.04,
    fontFamily: Font.medium,
    color: COLORS.main_text_color,

  },
  modal: {
    backgroundColor: "#ffffff",
    position: "absolute",
    bottom: 15,
    right: 10,
    borderWidth: 2,
    borderRadius: 10,
    width: width * 0.35,
   // height: height * 0.3,
    borderColor: COLORS.main_text_color,
  },
  labelContainer: {
    },
  label: {
    fontFamily: Font.medium,
    fontSize: width * 0.03,
    padding: 10,
    color: COLORS.main_text_color,
  },
  cutomTextInput: {
    borderWidth: 1,
    marginBottom: 15,
    marginHorizontal: 10,
    height: 40,
    paddingHorizontal: 10,
    fontFamily: Font.medium,
    fontSize: width * 0.03,
    color: COLORS.main_text_color,
  },
  customView: {
    flexDirection: "row",
  },
  customRight: {
    alignItems: "flex-end",
    flex: 1,
    marginRight: Metrics.smallMargin,
  },
});
