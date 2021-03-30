/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from "react-native";

// eslint-disable-next-line prettier/prettier
import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font.js";
import Metrics from "../theme/Metrics";

var { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    width:width
  
  },
  arrowView:{
    alignItems:'center',
    justifyContent:'center',
  
  
 },
 arrowStyle:{
  width: width * 0.2,
  height: height * 0.12,
  resizeMode:'contain',

},
backArrowStyle:{
  width: width * 0.12,
  height: height * 0.1,
  resizeMode:'contain',
  marginLeft: Metrics.baseMargin,
},
personImageStyle :{
  width: width * 0.5,
  height: height * 0.3,
  marginTop: Metrics.xbaseMargin,
 
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
  width: width * 0.7,
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
  width: width * 0.7,
  height: height * 0.15,
  marginLeft: Metrics.smallMargin,
  marginBottom: Metrics.smallMargin,
  marginRight: Metrics.smallMargin,
  marginTop: Metrics.xsmallMargin,
  backgroundColor:COLORS.white
},
stylefiledText: {
  marginLeft: Metrics.smallMargin,
  justifyContent: "center",
  alignItems: "center",
  color: COLORS.main_text_color,
  fontSize: width * 0.035,
  width: width * 0.42,
 fontFamily: Font.medium,

},
addressField: {
  marginLeft: Metrics.smallMargin,
  color: COLORS.main_text_color,
  fontSize: width * 0.03,
  width: width * 0.45,
  fontFamily: Font.regular,
  textAlignVertical: "top",
 
},
doubleImaageView:{
 // marginTop:Metrics.baseMargin,
  justifyContent:'center',
  flexDirection:'row',
  alignItems:'center',
 
  height:height*0.065
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
  fontSize: width * 0.022,
  textAlign: "right",
},
innerStyle: {
  width: width * 0.1,
  height: width * 0.1,
  marginTop:Metrics.xsmallMargin
},
smallIcon:{
  width: width * 0.05,
  height: height * 0.03,
  resizeMode:'contain',
  paddingHorizontal:Metrics.SmallMargin
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
workView: {
  width: width * 0.7,
  height: width * 0.85,
  borderWidth: 1,
  borderRadius: 5,
  borderColor: COLORS.main_text_color,
  marginLeft: Metrics.smallMargin,
  flexDirection: "row",
  position: "relative",
  backgroundColor: COLORS.white
},
checkedIcon: {
  width: width * 0.05,
  height: width * 0.05,
  resizeMode: "contain",
  marginTop: 6,
},
timeView: {
  width: width * 0.1,
  borderWidth: 1,
  height: width * 0.08,
  marginLeft: 10,
  borderRadius: 4,
  borderColor: COLORS.main_text_color,
  justifyContent: "center",
  alignItems: "center",
  // flex:1
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
workText: {
  color: COLORS.main_text_color,
  fontFamily: Font.regular,
  
},
selectTimezone: {
  alignItems: "center",
  justifyContent: "center",
  height: height * 0.04,
  width: width * 0.18,
  borderColor: COLORS.main_text_color,
  borderWidth: 1,
  borderRadius: 10,
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
LeftView: {
  width: width * 0.53,
  height: width * 0.8,
  marginLeft: 10,
},
 dayView: {
    flexDirection: "row",
    marginTop: 10,
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
  labelContainer: {
   
  },
  label: {
    fontFamily: Font.medium,
    fontSize: width * 0.03,
    padding: 10,
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
  modalBtn: {
    borderColor: COLORS.main_text_color,
    borderRadius: 11,
    borderWidth: 1,
    width: width * 0.2,
    height: width * 0.08,
    justifyContent: "center",
    alignItems: "center",
   },
   selectTypeText: {
    fontFamily: Font.light,
    fontSize: width * 0.023,
    color: COLORS.main_text_color,
  },
  addNew: {
    fontFamily: Font.medium,
    fontSize: width * 0.035,
  },
  addNewBox: {
    marginLeft: Metrics.xdoubleBaseMargin,
  },
  removeNew: {
    fontFamily: Font.medium,
    fontSize: width * 0.03,
    marginRight: Metrics.baseMargin,
    color: COLORS.red,
  },
  Text_1: {
    marginLeft: Metrics.smallMargin,
    color: COLORS.main_text_color,
    fontFamily: Font.regular,
  },
  blckView :{
    alignItems:"flex-start",
    justifyContent:"flex-start",
    width:width
  },
  centerTextStyle:{
    // borderWidth:1,
    width:width * 0.7,
    alignItems:'center'
  }
});

