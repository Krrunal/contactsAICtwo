/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from "react-native";

// eslint-disable-next-line prettier/prettier
import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font.js";
import Metrics from "../theme/Metrics";

var { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  ImgBigView: {
    justifyContent: "center",
    width: width * 0.970,
    height: height * 0.4,
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
    padding:12
    //borderWidth:5,
    // borderColor:COLORS.main_sky_blue
  },
  dateView: {
    width: width * 0.35,
    justifyContent: "center",
    marginLeft: Metrics.baseMargin,

    height: height * 0.052,
    marginTop: Metrics.xsmallMargin,
  },
  imgView: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.9,
    height: height * 0.3,
   
   
  },

  imgStyle: {
    width:width * 0.85,
    height: height * 0.28,
    resizeMode:'contain',
   
  },

  OverImageText: {
    position: "absolute",
    top: 2,
    left: 5,
    right: 0,
    bottom: 0,
  },

  backText: {
    marginLeft: Metrics.smallMargin,
    fontFamily: Font.medium,
    fontSize: width * 0.04,
    color: COLORS.main_text_color,

  },

  profileText: {
    color: COLORS.main_text_color,
    marginLeft: Metrics.baseMargin,
    marginTop: Metrics.xsmallMargin,
    fontFamily: Font.medium,
    fontSize: width * 0.06,
  },

  middleView: {
    justifyContent: "center",
    width: width * 0.97,
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
    marginTop: Metrics.xsmallMargin,
    alignItems: "center",
    alignSelf: "center",
  // borderWidth:1
  },

  IconView: {
    justifyContent: "center",
    width: width * 0.16,
    alignItems: "center",
  },

  iconContainer: {
    width: width * 0.082,
    height: width * 0.082,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1
  },

  callImg: {
    width: width * 0.082,
    height: width * 0.082,
    resizeMode: "contain"
  },

  iconText: {
    marginTop: Metrics.xsmallMargin,
  },

  mainView: {
    alignItems: "center",
    flexDirection: "row",
    width: width * 0.8,
    height: height * 0.1,
    justifyContent: "center",
  },

  innerStyle: {
    width: width * 0.1,
    height: width * 0.11,
  },

  filedView: {
    width: width * 0.8,
    height: height * 0.06,
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
    marginLeft: Metrics.xsmallMargin,
    flexDirection: "row",
    alignItems:'center',
   
  },
  mobileInputText: {
    fontSize: width * 0.035,
    fontFamily: Font.regular,
    color: COLORS.main_text_color,

  },
  filedViewtwo: {
    width: width * 0.8,
    height: height * 0.06,
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
    marginLeft: Metrics.xsmallMargin,
    flexDirection: "row",
  },

  stylefiledText: {
    marginLeft: Metrics.smallMargin,
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
    width: width * 0.55,
    fontSize: width * 0.035,
      padding:10,
   
    marginBottom:Metrics.smallMargin
  },

  renderView: {
    marginTop: Metrics.baseMargin,
    marginLeft: Metrics.smallMargin,
  },

  rightView: {
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    flex: 1,
    marginRight: Metrics.xsmallMargin,
    // alignItems: "flex-end",
    // justifyContent: "center",
    // flex: 1,
    // marginRight: Metrics.smallMargin,
  },

  rightViewAdress: {
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    flex: 1,
    marginRight: Metrics.smallMargin,
    marginTop: Metrics.baseMargin,
  },

  righttext: {
    color: COLORS.main_text_color,
    fontSize: width * 0.023,
    fontFamily: Font.light,
    textAlign: "right",
    marginRight: Metrics.xsmallMargin,
    marginBottom:Metrics.smallMargin
  },

  righttextAdreess: {
    color: COLORS.main_text_color,
    fontSize: width * 0.025,
    fontFamily: Font.light,
    textAlign: "right",
  },

  fieldMain: {
    alignItems: "center",
    flex: 1,
    width: width,
    marginLeft: Metrics.xsmallMargin,
  },

  filedViewRightTwo: {
    width: width * 0.8,
    height: height * 0.06,
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
    marginTop: Metrics.smallMargin,
    flexDirection: "row",
    alignItems:'center',
  },

  editImg: {
    width: width * 0.04,
    height: width * 0.04,
    marginRight: 12,
    resizeMode:'contain'
  },

  rightTwoImg: {
    flexDirection: "row",
    width: width * 0.15,
    justifyContent:"flex-end",
    marginTop:Metrics.xsmallMargin,
 
  },

  resetImg: {
    justifyContent: "flex-end",
    flexDirection: "row",
    flex: 1,
  },

  filedViewAddress: {
    width: width * 0.8,
   // height: height * 0.13,
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
    flexDirection: "row",
  },

  stylefiledTextAddress: {
    marginLeft: Metrics.smallMargin,
    marginLeft: 15,
    color: COLORS.main_text_color,
    fontSize: width * 0.036,
    fontFamily: Font.regular,
  },

  filedViewRightTwoCompany: {
    width: width * 0.8,
   // height: height * 0.25,
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
    marginTop: Metrics.smallMargin,
    marginBottom: Metrics.baseMargin,
  },

  stylefiledTextCompany: {
    marginLeft: Metrics.smallMargin,
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
    width: width * 0.5,
  },

  rightTwoCompany: {
    flexDirection: "row",
    width: width * 0.15,
    justifyContent: "flex-end",
    flexDirection: "row",
    flex: 1,
    borderWidth:1
  },

  saveView: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.2,
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
    marginBottom: Metrics.baseMargin,
    marginTop: Metrics.baseMargin,
  },
  textIcon:{
    marginTop: Metrics.xsmallMargin,
    fontFamily: Font.medium,
    fontSize: width * 0.03,
    color:COLORS.main_text_color
  },
  dateText: {
    fontFamily: Font.regular,
    fontSize: width * 0.036,
    color: COLORS.main_text_color,
    marginLeft: Metrics.smallMargin,
  },

  footerModal: {
    justifyContent: "center",
    width: width,
    height: height * 0.7,
    opacity: 0.5,
  },
  addressRightView: {
    alignItems: "flex-end",
    //justifyContent: "flex-end",
    flex: 1,
    marginRight: Metrics.smallMargin,
    paddingBottom: 10,
    marginTop: Metrics.smallMargin,
  },
  iconSize: {
    color: COLORS.main_text_color,
    textAlign: "right",
  },

  addressRighttext: {
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
    fontSize: width * 0.02,
    textAlign: "right",
    marginTop: Metrics.smallMargin,
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
    borderRadius: 10,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.05,
  },

  labelName: {
    fontFamily: Font.regular,
    fontSize: width * 0.043,
    color: COLORS.main_text_color,
    marginVertical: height * 0.01,
  },
  modalHeader: {
    fontFamily: Font.medium,
    fontSize: width * 0.045,
    alignSelf: "center",
  },

  addLabelField: {
    borderWidth: 1,
    borderColor: COLORS.main_text_color,
    borderRadius: 5,
    marginTop: Metrics.baseMargin,
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
    position:'relative',
    marginBottom: Metrics.smallMargin,
  //  alignItems: "center",
  },
  LeftView:{
    width: width * 0.53,
    height: width * 0.8,
    marginLeft:10,
   
  },
  workText:{
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
   
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
  timeText:{
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
    fontSize: width * 0.018,
    width: width * 0.11,
    
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
  dayView:{
    flexDirection:'row',
    marginTop:10,
    alignItems:'center',
  },
  selectTimezone:{
    alignItems: "center",
    justifyContent: "center",
    //flex: 1,
    // marginRight: 5,
    height: height * 0.04,
    width: width * 0.2,
    // borderColor: COLORS.main_text_color,
    // borderWidth: 1,
    // borderRadius: 10,
  },
});
