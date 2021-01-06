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
    elevation: 5,
    borderRadius: 5,
    marginLeft: Metrics.smallMargin,
    marginBottom: Metrics.baseMargin,
    flexDirection: "row",
    marginRight: Metrics.smallMargin,
    marginTop: Metrics.xsmallMargin,
    alignItems: "center",
   
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
  filedViewBig:{
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
    fontSize: width * 0.03,
    width: width * 0.5,
    fontFamily: Font.regular,
  },

  rightView: {
    alignItems: "flex-end",
    justifyContent: "center",
    flex: 1,
    marginRight: Metrics.smallMargin,
    height: height * 0.04,
  },
  rightViewBorder: {
    alignItems: "flex-end",
    justifyContent: "center",
    flex: 1,
    marginRight: Metrics.smallMargin,
    height: height * 0.04,
    width: width * 0.3,
    borderColor: COLORS.main_text_color,
    borderWidth: 1,
    borderRadius: 10,
  },
  righttext: {
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
    fontSize: width * 0.02,
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
    width: width * 0.55,
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
    alignItems: "flex-end",
    //justifyContent: "flex-end",
    marginTop: Metrics.myInfo,
    marginRight:Metrics.baseMargin

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
    fontSize: width * 0.030,
    color: COLORS.main_text_color,
    marginTop: 3,
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
    marginRight: 3,
  },
  flatlist: {},
  modelView: {
    width:width*0.3,
    height:height *0.20,
    backgroundColor:COLORS.white,
    borderColor:COLORS.main_text_color,
    borderWidth:2,
    borderRadius:10,
    marginBottom:Metrics.xxxdoubleBaseMargin,
    // opacity:0.6,
    // zIndex:1,
    // elevation:5,
    // position:'absolute'
  },
  modelViewBig : {
    width:width*0.3,
    height:height *0.25,
    backgroundColor:COLORS.white,
    borderColor:COLORS.main_text_color,
    borderWidth:2,
    borderRadius:10,
    marginBottom:Metrics.xxxdoubleBaseMargin
  },
 
  inputTextView:{
    borderWidth:1,
    borderColor:COLORS.main_text_color,
    borderRadius:10,
    height:height *0.045,
  },
  customText:{
    fontFamily: Font.regular,
    fontSize: width * 0.030,
    color: COLORS.main_text_color,
    marginLeft:3,
    marginTop:1
  },
  textinputText:{
    fontFamily: Font.regular,
    fontSize: width * 0.020,
    color: COLORS.main_text_color,

  }
});
