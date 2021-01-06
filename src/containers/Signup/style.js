import { Dimensions, StyleSheet } from "react-native";

import { COLORS } from "../theme/Colors.js";
import Font from "../theme/font";
import Metrics from "../theme/Metrics";
import {Modal} from 'react-native-paper';

var { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
  },

  mobileView: {
    backgroundColor: COLORS.main_sky_blue,
    width: width * 0.9,
    height: height * 0.065,
    borderRadius: 10,
    marginTop: Metrics.doubleBaseMargin,
    // justifyContent:'center',
    //flexDirection: "row",
   // alignItems: "center",
 
  },
  numberView: {
    backgroundColor: COLORS.main_sky_blue,
    width: width * 0.9,
    height: height * 0.065,
    borderRadius: 10,
    marginTop: Metrics.baseMargin,
    justifyContent: "center",
    marginBottom: Metrics.smallMargin,
  },

  mobileInputView: {
    width: width * 0.9,
    borderRadius: 10,
    marginTop: Metrics.xsmallMargin,
    justifyContent: "center",
    //flexDirection: "row",
  },
  mobileInputView2 : {
    backgroundColor: COLORS.main_sky_blue,
    width: width * 0.9,
    height: height * 0.065,
    borderRadius: 10,
    marginTop: Metrics.doubleBaseMargin,
    // justifyContent:'center',
    flexDirection: "row",
    alignItems: "center",
  },
  mobileText:{
    fontSize: width*0.04, 
    fontFamily: Font.medium,
    justifyContent:'center',
    alignItems:'center',
   // color:COLORS.main_text_color,
    marginLeft:Metrics.xdoubleBaseMargin,
    width: width * 0.7,
    color:COLORS.main_text_color
  },
  mobileInputText: {
    fontSize: width * 0.04,
    fontFamily: Font.medium,
    color: COLORS.main_text_color,
  },

  passView: {
    backgroundColor: COLORS.main_sky_blue,
  
    width: width * 0.9,
    height: height * 0.065,
    borderRadius: 8,
    // alignItems: "center",
    // justifyContent: "center",
    // flexDirection: "row",
  },

  userText: {
    marginTop: Metrics.smallMargin,
    marginLeft: Metrics.baseMargin,
    flexDirection: "row",
  },

  downText: {
    fontSize: width * 0.03,
    marginTop: Metrics.xsmallMargin,
    marginLeft: Metrics.baseMargin,
    fontFamily: Font.light,
  },

  submitView: {
    backgroundColor: COLORS.white,
    width: width * 0.9,
    height: height * 0.075,
    borderRadius: 10,
    marginTop: Metrics.doubleBaseMargin,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: Metrics.doubleBaseMargin,
  },

  submitText: {
    fontSize: width * 0.04,
    fontFamily: Font.medium,
  },

  logoStyle: {
    width: width * 0.17,
    height: width * 0.17,
    marginVertical: Metrics.doubleBaseMargin,
  },

  logoText: {
    color: COLORS.main_text_color,
    fontSize: width * 0.053,
    fontFamily: Font.bold,
  },

  headerView: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Metrics.doubleBaseMargin,

  },

  normalText: {
    fontFamily: Font.medium,
    marginTop: Metrics.xsmallMargin,
    fontSize: width * 0.04,
  },

  RigthView: {
    width: width,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: Metrics.smallMargin,
    alignItems: "center",
    marginRight: Metrics.baseMargin,
  },

  eyeView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Metrics.baseMargin,

  },

  checkIcon: {
    width: width * 0.045,
    height: width * 0.045,
    resizeMode: "contain",
  },

  contactEyeView: {
    position: "absolute",
    right: 0,
    width: width * 0.15,
    alignItems: "center",
    justifyContent: "center",
    bottom: "15%",
  },

  contactIcon: {
    bottom: "20%",
    width: width * 0.045,
    height: width * 0.045,
    resizeMode: "contain",
  },

  footerModal: {
    justifyContent: "center",
    flex: 1,
  },

  contactContent: {
    margin: 0,
    marginTop: height * 0.4,
    width: width * 0.8,
    backgroundColor: COLORS.white,
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.05,
    borderRadius: 10,
   
  },

  popupHeader: {
    alignItems: "flex-end",
    
  },

  infoIcon: {
    width: width * 0.03,
    height: width * 0.03,
    alignSelf: "center",
    resizeMode: "contain",
  },
  error: {
    fontSize: 15,
    paddingLeft: width * 0.03,
    paddingTop: height * 0.005,
    fontFamily: Font.medium,
  },

  errorSuccess: {
    fontSize: 15,
    color: COLORS.green,
    paddingLeft: width * 0.03,
    paddingTop: height * 0.005,
    fontFamily: Font.medium,
  },
  errorFail: {
    fontSize: 15,
    color: COLORS.red,
    paddingLeft: width * 0.03,
    paddingTop: height * 0.005,
  },
  reqtext: {
    fontSize: width * 0.026,
    marginLeft: width * 0.01,
    fontFamily:Font.regular
  },
  eyeContain: {
  //  borderWidth: 2,
    width: width * 0.08,
    height: width * 0.08,
    alignItems: "center",
    justifyContent: "center",
  },
  uText:{
    fontSize: width*0.04, 
    fontFamily: Font.medium,
    justifyContent:'center',
    alignItems:'center',
   // color:COLORS.main_text_color,
    marginLeft:Metrics.xdoubleBaseMargin,
    width: width * 0.7,
    color:COLORS.main_text_color,
    marginTop:Metrics.xsmallMargin,
},
uText1 :{
  fontSize: width*0.04, 
  fontFamily: Font.medium,
   marginLeft:Metrics.xdoubleBaseMargin,
  width: width * 0.7,
  color:COLORS.main_text_color,
  marginBottom :Metrics.xsmallMargin,
  
},

  uTextGreen:{
    fontSize: width*0.04, 
    fontFamily: Font.medium,
    justifyContent:'center',
    alignItems:'center',
   // color:COLORS.main_text_color,
    marginLeft:Metrics.baseMargin,
    width: width * 0.7,
    color:COLORS.green
  },
  errorView:{
    marginLeft:Metrics.smallMargin,

  },
  modalView : {
    flexDirection:"row",
    marginTop:Metrics.smallMargin,
    alignItems:'center',

  },
  modelText:{
    marginLeft:Metrics.baseMargin,
    fontSize: width*0.03, 
    fontFamily: Font.medium,
  },
  modelIcon: {
  width: width * 0.045,
    height: width * 0.045,
    resizeMode: "contain",
  },
  emailText: {
    fontSize: width * 0.028,
    fontFamily: Font.medium,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: Metrics.baseMargin,
    width: width * 0.7,
    color: COLORS.main_text_color,
    marginLeft:Metrics.cdoubleBaseMargin,
  //  marginTop: Metrics.baseMargin,
  },
  error2:{
  
    fontSize: 15,
    marginLeft: width * 0.01,
    paddingTop: height * 0.005,
    fontFamily: Font.medium,
  }
});
