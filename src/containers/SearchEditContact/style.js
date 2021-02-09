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
    textTransform: "capitalize",
    color: COLORS.main_text_color,
    padding:5
  },
  midName:{
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
    width: width * 0.13,
    height: width * 0.12,
  },
  scrollStyle: {
    alignItems: 'center',
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
  sideBarView:{
    justifyContent:'center',
    margin:Metrics.xsmallMargin,
},
blueView: {
  width: width * 0.9,
  height : width * 0.14,
  backgroundColor: COLORS.main_text_color,
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  marginTop:Metrics.doubleBaseMargin
},

sidebarViewRight:{
  margin:Metrics.xsmallMargin,
  flex:1,
  justifyContent:'flex-end',
  flexDirection:'row'
},
sidebarViewCenter:{
  width: width * 0.66,
  height: width * 0.12,
 // alignItems: 'center',
  //flexDirection: 'row',
  backgroundColor:COLORS.white,
  justifyContent:'center',
  borderRadius:10,

},
placholderStyle:{
  fontFamily: Font.regular,
  fontSize: width * 0.040,
  color:COLORS.main_text_color,
  marginBottom:25,
  marginLeft:7,
 
},
placholderStyle2 :{
  fontFamily: Font.regular,
  fontSize: width * 0.048,
  color:COLORS.main_text_color,
 marginLeft:7,
 marginBottom:25,
},
searchTextInput:{
  fontFamily: Font.regular,
  fontSize: width * 0.026,
  color:COLORS.main_text_color,
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
  marginRight:Metrics.baseMargin,
  marginTop:Metrics.smallMargin
},
profileImage2 :{
  width: width * 0.12,
      height: width * 0.12,
      borderRadius: 5,
},
serachText:{
  fontFamily: Font.regular,
  fontSize: width * 0.053,
  color:COLORS.main_sky_blue,
  marginLeft: 7,
}
});
