import { Dimensions, StyleSheet } from "react-native";

import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font";
import Metrics from "../theme/Metrics";

var { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  quardView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Metrics.doubleBaseMargin,
    width: width * 0.8,
  },
  personName: {
    marginLeft: Metrics.baseMargin,
    fontFamily: Font.regular,
    fontSize: width * 0.04,
    // textTransform: "capitalize",
    color: COLORS.main_text_color,
    padding: 5,
  },
  midName: {
    fontFamily: Font.medium,
    fontSize: width * 0.045,
    textTransform: "capitalize",
    color: COLORS.main_text_color,
  },
  imgView: {
    width: width * 0.1,
    height: width * 0.1,
    borderWidth: 2,
    borderColor: COLORS.main_text_color,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 0,
  },
  img_text: {
    fontFamily: Font.medium,
    fontSize: width * 0.05,
    textTransform: "capitalize",
  },
  editImgStyle: {
    width: width * 0.035,
    height: width * 0.035,
    marginLeft: Metrics.baseMargin,
    resizeMode: "contain",
  },
  resetImgStyle: {
    width: width * 0.03,
    height: width * 0.03,
    marginLeft: Metrics.smallMargin,
    resizeMode: "contain",
  },
  plusStyle: {
    width: width * 0.14,
    height: width * 0.14,
  },
  deleteStyle :{
    width: width * 0.13,
    height: width * 0.13,
    resizeMode: "contain",
    borderRadius: 5,
  },
  scrollStyle: {
    alignItems: "center",
    height: height * 0.75,
  },
  profileImage: {
    width: width * 0.095,
    height: width * 0.092,
    borderRadius: 5,
  },
  sidebarStyle: {
    width: width * 0.1,
    height: width * 0.1,
  },

  sidebarStyleRight: {
    width: width * 0.1,
    height: width * 0.1,
  },
  sideBarView: {
    justifyContent: "center",
    margin: Metrics.xsmallMargin,
  },
  blueView: {
    width: width * 0.9,
    height: width * 0.14,
    backgroundColor: COLORS.main_text_color,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: Metrics.doubleBaseMargin,
  },

  sidebarViewRight: {
    margin: Metrics.xsmallMargin,
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  sidebarViewCenter: {
    width: width * 0.66,
    height: width * 0.12,
    // alignItems: 'center',
    //flexDirection: 'row',
    backgroundColor: COLORS.white,
    justifyContent: "center",
    borderRadius: 10,
  },
  placholderStyle: {
    fontFamily: Font.regular,
    fontSize: width * 0.04,
    color: COLORS.main_text_color,
    marginBottom: 25,
    marginLeft: 7,
  },
  placholderStyle2: {
    fontFamily: Font.regular,
    fontSize: width * 0.048,
    color: COLORS.main_text_color,
    marginLeft: 7,
    marginBottom: 25,
  },
  searchTextInput: {
    fontFamily: Font.regular,
    fontSize: width * 0.026,
    color: COLORS.main_text_color,
    marginLeft: 7,
    marginTop: 6,
  },
  workModal: {
    width: width,
    height: height,
    opacity: 0.5,
  },
  workModalView: {
    backgroundColor: "rgba(0,0,0,0.6)",
    margin: 0,
    height: height,
    width: width,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    right: 0,
  },
  content: {
    width: width * 0.8,
    height: height * 0.8,
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

  popupHeader: {
    alignItems: "flex-end",
    marginRight: Metrics.baseMargin,
    marginTop: Metrics.smallMargin,
  },
  profileImage2: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: 5,
  },
  serachText: {
    fontFamily: Font.regular,
    fontSize: width * 0.053,
    color: COLORS.main_sky_blue,
    marginLeft: 7,
  },
  innerStyle: {
    width: width * 0.1,
    height: width * 0.1,
  },
  searchSection: {
    width: width * 0.64,
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
    marginTop:Metrics.baseMargin
  },
  searchSectionAddress: {
    width: width * 0.64,
    height: height * 0.15,
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
   // alignItems:'center',
  },
  addressField: {
    marginLeft: Metrics.smallMargin,
    color: COLORS.main_text_color,
    fontSize: width * 0.03,
    width: width * 0.5,
    fontFamily: Font.regular,
    textAlignVertical: "top",
    
  },

  rightView: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
    flex: 1,
    marginRight: Metrics.smallMargin,
  },
  righttext: {
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
    fontSize: width * 0.02,
    textAlign: "right",
  },
  stylefiledText: {
    marginLeft: Metrics.smallMargin,
    justifyContent: "center",
    alignItems: "center",
    color: COLORS.main_text_color,
    fontSize: width * 0.03,
    width: width * 0.4,
   fontFamily: Font.medium,
  
    
  },
  selectTypeText: {
    fontFamily: Font.light,
    fontSize: width * 0.023,
    color: COLORS.main_text_color,
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

  labelContainer: {},
  customRight: {
    alignItems: "flex-end",
    flex: 1,
    marginRight: Metrics.smallMargin,
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

  addressRightView: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flex: 1,
    marginRight: Metrics.smallMargin,
    paddingBottom: 10,
  },
  compnyRightText: {
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
    fontSize: width * 0.03,
    textAlign: "right",
  },
  workView:{
    width: width * 0.67,
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
    marginLeft: Metrics.xsmallMargin,
    flexDirection:'row',
    position:'relative',
    marginBottom: Metrics.smallMargin,
  },
  LeftView:{
    width: width * 0.53,
    height: width * 0.8,
  },
  checkedIcon: {
    width: width * 0.05,
    height: width * 0.05,
    resizeMode: "contain",
    marginTop: 6,
  },
  workText: {
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
    marginLeft:5,
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
    flex:1,
  },
  dayView: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  
  },
  timeText: {
    justifyContent: "center",
    alignItems: "center",
    // color: COLORS.main_text_color,
    // fontFamily: Font.medium,
    // fontSize: width * 0.018,
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
    fontSize: width * 0.018,
    width: width * 0.11,
    height: width * 0.08,
  },
  timeText2 : {
    justifyContent: "center",
    alignItems: "center",
    color: COLORS.main_text_color,
    fontFamily: Font.medium,
    fontSize: width * 0.018,
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
  middleView: {
    flex: 1,
    flexDirection: "row",
    padding: Metrics.smallMargin,
    marginLeft: Metrics.doubleBaseMargin,
    marginRight: Metrics.doubleBaseMargin,
    marginVertical: Metrics.baseMargin,
  },
  firstMiddle: {
    alignItems: "center",
    padding: Metrics.xsmallMargin,
  
    paddingHorizontal:Metrics.baseMargin
  },

  squareBorder: {
    width: width * 0.2,
    height: width * 0.2,
    borderColor: COLORS.main_text_color,
    borderRadius: 10,
    borderWidth: 3,
    marginHorizontal: Metrics.dividerHeight,
  },
  sqaureImage:{
    width: width * 0.188,
    height: width * 0.188,
    // resizeMode:'contain',
    borderRadius: 10,
  },
  firstText: {
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
    fontSize: width * 0.032,
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
  halfWidth :{
    width: width * 0.5,
    flexDirection: "row",
    // borderWidth:1
  },
  Text_1: {
    marginLeft: Metrics.smallMargin,
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
  },

  addNewBox: {
    marginLeft: Metrics.xdoubleBaseMargin,
  },
  personImageStyle :{
    width: width * 0.5,
    height: height * 0.3,
    marginTop: Metrics.xbaseMargin,
  },
  smallIcon:{
    width: width * 0.05,
    height: height * 0.03,
    resizeMode:'contain',
    paddingHorizontal:Metrics.xbaseMargin
  },
  doubleImaageView:{
    marginTop:Metrics.baseMargin,
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center'
  },
  arrowStyle:{
    width: width * 0.2,
    height: height * 0.2,
    resizeMode:'contain',
 },
  arrowView:{
    alignItems:'center',
    justifyContent:'center',

  }
});
