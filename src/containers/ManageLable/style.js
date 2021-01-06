import { Dimensions, StyleSheet } from "react-native";

import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font";
import Metrics from "../theme/Metrics";

var { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  blueView: {
    width: width * 0.9,
    height: height * 0.065,
    backgroundColor: COLORS.main_text_color,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  dateView: {
    width: width * 0.35,
    justifyContent: "center",
    marginLeft: Metrics.baseMargin,
   height: height * 0.052,
    //marginTop: Metrics.baseMargin,
  },
  sideBarView: {
    justifyContent: "center",
    margin: Metrics.xsmallMargin,
  },

  sidebarViewCenter: {
    width: width * 0.6,
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

  sidebarStyle: {
    width: width * 0.1,
    height: width * 0.1,
  },

  middleView: {
    flex: 1,
    flexDirection: "row",
    padding: Metrics.smallMargin,
    marginLeft: Metrics.doubleBaseMargin,
    marginRight: Metrics.doubleBaseMargin,
    marginTop: Metrics.baseMargin,
  },

  firstBlack: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.034,
    height: width * 0.034,
    backgroundColor: COLORS.main_text_color,
    borderRadius: 25,
    marginTop: Metrics.baseMargin,
  },
  firstBlackWhite: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.034,
    height: width * 0.034,
    backgroundColor: COLORS.white,
    borderRadius: 25,
    marginTop: Metrics.baseMargin,
  },
  firstWhite: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.034,
    height: width * 0.034,
    backgroundColor: COLORS.white,
    borderColor: COLORS.main_text_color,
    borderWidth: 2,
    borderRadius: 25,
    marginTop: Metrics.baseMargin,
  },
  firstWhiteBlack: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.034,
    height: width * 0.034,
    backgroundColor: COLORS.black,
    borderColor: COLORS.white,
    borderWidth: 2,
    borderRadius: 25,
    marginTop: Metrics.baseMargin,
  },
  firstText: {
    color: COLORS.main_text_color,
  },

  firstImg: {
    width: width * 0.2,
    height: width * 0.2,
  },

  firstMiddle: {
    alignItems: "center",
    padding: Metrics.xsmallMargin,
    width: width * 0.2,
    margin: Metrics.baseMargin,
  },

  innerStyle: {
    width: width * 0.1,
    height: width * 0.1,
  },

  filedView: {
    width: width * 0.8,
    height: height * 0.062,
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
      flexDirection:'row',
      alignItems: "center",
  },
  filedViewForMobile:{
    width: width * 0.8,
    height: height * 0.072,
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
  },
  stylefiledText: {
    marginLeft: Metrics.xsmallMargin,
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center",
    color: COLORS.main_text_color,
    fontFamily: Font.medium,
    fontSize: width * 0.035,
    width: width * 0.5,
   
    },
 
  filedViewRight: {
    width: width * 0.8,
    height: height * 0.052,
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
    marginLeft: Metrics.xdoubleBaseMargin,
    marginTop: Metrics.smallMargin,
  },

  rightView: {
    width: width * 0.050,
    height: height * 0.052,
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    flex: 1,
    marginRight: Metrics.smallMargin,
   },
  rightViewMobile :{
    width: width * 0.050,
    height: height * 0.052,
    //alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    flex: 1,
    marginRight: Metrics.xsmallMargin,
  },
  filedViewRightTwo: {
    width: width * 0.8,
    height: height * 0.052,
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
    marginLeft: Metrics.xdoubleBaseMargin,
    marginTop: Metrics.smallMargin,
    flexDirection: "row",
  },

  filedViewAddress: {
    fontFamily: "Roboto-Light",
    fontSize: width * 0.035,
    width: width * 0.8,
    height: height * 0.12,
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
  },

  stylefiledTextAddress: {
    marginLeft: Metrics.smallMargin,
    marginLeft: 15,
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
    fontSize: width * 0.035,
  },

  saveView: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.23,
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
    marginBottom: Metrics.baseMargin,
    marginTop: Metrics.baseMargin,
  },

  righttext: {
    color: COLORS.main_text_color,
    fontFamily: Font.light,
    fontSize: width * 0.026,
     textAlign: "right",
  },
  rightTextMobile:{
    color: COLORS.main_text_color,
    fontFamily: Font.light,
    fontSize: width * 0.023,
     textAlign: "right",
    
  },
  dateText: {
    fontFamily: Font.regular,
    fontSize: width * 0.035,
    color: COLORS.main_text_color,
    marginLeft: Metrics.smallMargin,
  },
  filedViewNote: {
    width: width * 0.8,
    height: height * 0.1,
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
    flexDirection:'row'
  },

  stylefiledTextNote: {
    marginLeft: Metrics.smallMargin,
    marginLeft: 15,
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
    fontSize: width * 0.035,
  },

  mainView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Metrics.baseMargin,
  },
  addressRightView: {
    alignItems: "flex-end",
    //justifyContent: "flex-end",
    flex: 1,
    marginRight: Metrics.smallMargin,
    paddingBottom: 10,
    marginTop: Metrics.smallMargin,
  },

  addressRighttext: {
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
    fontSize: width * 0.02,
    textAlign: "right",
    marginTop: Metrics.smallMargin,
  },
  addressFieldContainer: {
    width: width * 0.8,
    height: width * 0.25,
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
  addressFieldContainerAddress : {
    width: width * 0.8,
    height: width * 0.25,
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
    // flexDirection: "row",
    marginRight: Metrics.smallMargin,
  },
  addressField: {
    marginLeft: Metrics.smallMargin,
    color: COLORS.main_text_color,
     width: width * 0.55,
    textAlignVertical: "top",
    fontFamily: Font.medium,
    fontSize: width * 0.035,
  },
 
  centertext: {
    marginTop: width * 0.065,
    textAlign: "center",
    fontSize: width * 0.042,
    fontFamily: Font.light,
  },
  labelText: {
    marginTop: width * 0.025,
    textAlign: "center",
    fontSize: width * 0.04,
    fontFamily: Font.regular,
  },
  scrollStyle: {
    //   alignItems: 'center',
    height: height * 0.75,
  },
  checkboxView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: Metrics.xsmallMargin,
    width: width * 0.8,
    marginTop:Metrics.baseMargin
  },
  selectText: {
    fontFamily: Font.medium,
    fontSize: width * 0.04,
   
  },
  checkboxViewTwo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Metrics.baseMargin,

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

  iconSize: {
    color: COLORS.main_text_color,
    textAlign: "right",
  },

  footerModal: {
    justifyContent: "center",
    width: width,
    height: height * 0.7,
    opacity: 0.5,
  },
  workModal:{
    width: width,
    height: height * 0.4,
    opacity: 0.5,
   
  },
  workModalView:{
    backgroundColor: "rgba(0,0,0,0.0)",
    margin: 0,
    height: height,
    width: width * 0.4,
    alignItems:'flex-end',
    justifyContent:'flex-end',
    position:'absolute',
    bottom: width * 0.93,
    flexDirection:'row',
    right:0
  },
  contactContent: {
    margin: 0,
    height: height,
    width: width,
    backgroundColor: "rgba(0,0,0,0.6)",
    alignItems: "center",
    justifyContent: "center",
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

  modalHeader: {
    fontFamily: Font.medium,
    fontSize: width * 0.045,
    alignSelf: "center",
  },

  labelName: {
    fontFamily: Font.regular,
    fontSize: width * 0.043,
    color: COLORS.main_text_color,
    marginVertical: height * 0.01,
  },

  addLabelField: {
    borderWidth: 1,
    borderColor: COLORS.main_text_color,
    borderRadius: 5,
    marginTop: Metrics.baseMargin,
  },
  mobileInputText: {
    fontSize: width * 0.032,
    fontFamily: Font.regular,
    color: COLORS.main_text_color,
    width: width * 0.1,
    // borderWidth:2
  },
  dialcodeText: {
    fontSize: width * 0.032,
    fontFamily: Font.regular,
    color: COLORS.main_text_color,
  },
  flatView:{
    width:width*0.55,
    height:height*0.2,
    borderWidth: 2,
    borderColor: COLORS.main_text_color,
    borderRadius: 5,
   
  },
  flatSmallView:{
    width:width*0.55,
    height:height*0.048,
    borderWidth: 2,
    borderColor: COLORS.main_text_color,
    borderRadius: 5,
    marginRight:Metrics.doubleBaseMargin,
    marginTop:Metrics.doubleBaseMargin,
    alignItems:'center',
    flexDirection:'row'
  },
  flatSmallText:{
    fontSize: width * 0.043,
    fontFamily: Font.medium,
    color: COLORS.main_text_color,
    marginLeft:Metrics.smallMargin,
  },
  footerFlat:{
    // alignItems: "flex-end",
    // width: width,
    // height: height ,
    opacity: 0.5,
    marginTop:Metrics.xdoubleBaseMargin,
    
  },
  contentFlat:{
    // height: height,
    // width: width,
    backgroundColor: COLORS.white,
    justifyContent: "flex-end",
    width:width*0.55,
   // height:height*0.2,
    marginRight:Metrics.doubleBaseMargin,
    marginTop:Metrics.xdoubleBaseMargin,
  },
  smallView:{
    width:width,
    alignItems:'center',
    marginTop: Metrics.baseMargin,
  },
  emailText: {
    fontSize: width * 0.025,
    fontFamily: Font.medium,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: Metrics.baseMargin,
    width: width * 0.7,
    color: COLORS.main_text_color,
    marginLeft:Metrics.xsmallMargin,
  //  marginTop: Metrics.baseMargin,
  },
  workView:{
    width: width * 0.8,
    height: width * 0.8,
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
    flexDirection:'row',
    position:'relative'
  //  alignItems: "center",
  },
  workText:{
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
   
  },
  timeText:{
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
    fontSize: width * 0.018
  },
  LeftView:{
    width: width * 0.53,
    
      height: width * 0.8,
    marginLeft:10,
   
  },
  dayView:{
    flexDirection:'row',
    marginTop:10,
    alignItems:'center',
  },
  timeView:{
    width: width * 0.14,
    borderWidth:1,
    height: width * 0.080,
    marginLeft:10,
    borderRadius: 4,
    borderColor:COLORS.main_text_color,
    justifyContent:'center',
    alignItems:'center'
  },
  downArrowStyle:{
    width: width * 0.085,
     height: width * 0.085,
     resizeMode:'contain'
  },
  checkedIcon:{
    width: width * 0.05,
    height: width * 0.05,
    resizeMode:'contain',
    marginTop:6
  },
  selectTimezone:{
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    // marginRight: 5,
    height: height * 0.04,
    width: width * 0.2,
    borderColor: COLORS.main_text_color,
    borderWidth: 1,
    borderRadius: 10,
  }
});
