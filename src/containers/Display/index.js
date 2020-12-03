import {
  Dimensions,
  Image,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../theme/themeProps";
import { shortFirstName, shortLastName } from "../theme/sortNameProps";
import styled, { ThemeProvider } from "styled-components/native";

import CheckBox from "@react-native-community/checkbox";
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import { ResponsiveSize } from "../theme/GlobalFont";
import { bindActionCreators } from "redux";
import { checkContact } from "../../action/Authactions";
import styles from "./style.js";
import { switchContact } from "../../action/switchContactAction";
import { switchTheme } from "../../action/themeAction";

var { width, height } = Dimensions.get("window");
class display extends Component {
  state = {
    checked: false,
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
    checked7: false,
  };

  componentDidMount = () => {
    {
      if (this.props.theme.mode === "light") {
        this.setState({ checked4: false });
        this.setState({ checked5: true });
      } else {
        this.setState({ checked4: true });
        this.setState({ checked5: false });
      }
      if (this.props.contactChange.mode === "first") {
        this.setState({ checked: false });
        this.setState({ checked1: true });
      } else {
        this.setState({ checked: true });
        this.setState({ checked1: false });
      }
    }
  };

  checkName = () => {
    if (this.state.checked2 == true) {
      this.setState({ checked2: false, checked3: true });
      //this.props.switchContact(shortFirstName);
    } else {
      this.setState({ checked2: true, checked3: false });
     // this.props.switchContact(shortLastName);
    }
  };

  checkContact = () => {
    if (this.state.checked == true) {
      this.setState({ checked: false, checked1: true });
      this.props.switchContact(shortFirstName);
    } else {
      this.setState({ checked: true, checked1: false });
      this.props.switchContact(shortLastName);
    }
  };
  check = () => {
    if (this.state.checked4 == true) {
      this.setState({ checked4: false, checked5: true });
      this.props.switchTheme(lightTheme);
    } else {
      this.setState({ checked4: true, checked5: false });
      this.props.switchTheme(darkTheme);
    }
  };
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <GeneralStatusBar
          backgroundColor={
            this.props.theme.mode === "light" ? "white" : "black"
          }
          barStyle={
            this.props.theme.mode === "dark" ? "light-content" : "dark-content"
          }
        />
        <Container>
          <Header
            title="Display"
            onPress={() => this.props.navigation.openDrawer()}
          />
          <View style={styles.middleView}>
            <TouchableOpacity style={styles.FirstView}>
              <BoldText>Sort Contacts by:</BoldText>
              <View style={styles.checkView}>
                <CheckBox
                  value={this.state.checked}
                  onValueChange={this.checkContact}
                  tintColors={{ true: "#1374A3", false: "#1374A3" }}
                />
                <NormalText>First Name</NormalText>
              </View>
              <View style={styles.checkViewtwo}>
                <CheckBox
                  value={this.state.checked1}
                  onValueChange={this.checkContact}
                  tintColors={{ true: "#1374A3", false: "#1374A3" }}
                />
                <NormalText>Last Name</NormalText>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.FirstView}
              onPress={() => this.props.switchTheme(lightTheme)}
            >
              <BoldText>Display Contact's Name by</BoldText>
              <View style={styles.checkView}>
                <CheckBox
                  value={this.state.checked2}
                  onValueChange={this.checkName}
                  tintColors={{ true: "#1374A3", false: "#1374A3" }}
                />
                <NormalText>First Name First</NormalText>
              </View>
              <View style={styles.checkViewtwo}>
                <CheckBox
                  value={this.state.checked3}
                  onValueChange={this.checkName}
                  tintColors={{ true: "#1374A3", false: "#1374A3" }}
                />
                <NormalText>Last Name First</NormalText>
              </View>
            </TouchableOpacity>
            <View style={styles.FirstView}>
              <BoldText>Night Mode</BoldText>
              <TouchableOpacity style={styles.checkView}>
                <CheckBox
                  value={this.state.checked4}
                  onValueChange={this.check}
                  tintColors={{ true: "#1374A3", false: "#1374A3" }}
                />
                <NormalText>On</NormalText>
              </TouchableOpacity>
              <View style={styles.checkViewtwo}>
                <CheckBox
                  value={this.state.checked5}
                  onValueChange={this.check}
                  tintColors={{ true: "#1374A3", false: "#1374A3" }}
                />
                <NormalText>Off</NormalText>
              </View>
            </View>
            <View style={styles.FirstView}>
              <BoldText>Export Dates to Calendar</BoldText>
              <View style={styles.checkView}>
                <CheckBox
                  value={this.state.checked6}
                  onValueChange={() =>
                    this.setState({ checked6: !this.state.checked6 })
                  }
                  tintColors={{ true: "#1374A3", false: "#1374A3" }}
                />
                <NormalText>On</NormalText>
              </View>
              <View style={styles.checkViewtwo}>
                <CheckBox
                  value={this.state.checked7}
                  onValueChange={() =>
                    this.setState({ checked7: !this.state.checked7 })
                  }
                  tintColors={{ true: "#1374A3", false: "#1374A3" }}
                />
                <NormalText>Off</NormalText>
              </View>
            </View>
          </View>
        </Container>
      </ThemeProvider>
    );
  }
}
function mapStateToProps(state) {
  console.log(
    "State from display--->",
    state.switchNameReducer.nameChange
  );
  return {
    theme: state.themeReducer.theme,
    contactChange: state.sortContactsReducer.contactChange,
    nameChange:state.switchNameReducer.nameChange,
  };
}

const mapDispatchToProps = (dispatch) => ({
  switchTheme: bindActionCreators(switchTheme, dispatch),
  switchContact: bindActionCreators(switchContact, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(display);

const Container = styled.SafeAreaView`
  flex: 1;

  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.backColor};
`;
const NormalText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 17px;
  color: ${(props) => props.theme.textColor};
`;
const BoldText = styled.Text`
  font-family: Roboto-Bold;
  font-size: 17px;
  color: ${(props) => props.theme.textColor};
`;

// import {
// Dimensions,
// Image,
// Keyboard,
// ScrollView,
// Text,
// TextInput,
// TouchableOpacity,
// View,
// } from "react-native";
// import React, { Component } from "react";
// import { connect, useDispatch, useSelector } from "react-redux";
// import { darkTheme, lightTheme } from "../theme/themeProps";
// import styled, { ThemeProvider } from "styled-components/native";

// import CheckBox from "@react-native-community/checkbox";
// import Font from "../theme/font";
// import GeneralStatusBar from "../../components/StatusBar/index";
// import Header from "../../components/header/index";
// import { ResponsiveSize } from "../theme/GlobalFont";
// import { bindActionCreators } from "redux";
// import styles from "./style.js";
// import { switchTheme } from "../../action/themeAction";

// var { width, height } = Dimensions.get("window");
// class display extends Component {
//   state = {
//     checked: false,
//     checked1: false,
//     checked2: false,
//     checked3: false,
//     checked4: false,
//     checked5: false,
//     checked6: false,
//     checked7: false,
//   };

//   componentDidMount = () => {
//     {
//       if (this.props.theme.mode === "light") {
//         this.setState({ checked4: false });
//         this.setState({ checked5: true });
//       } else {
//         this.setState({ checked4: true });
//         this.setState({ checked5: false });
//       }

//       // this.props.theme.mode === "dark"
//       //   ? this.setState({ checked4: true })
//       //   : this.setState({ checked5: false });
//     }
//   };

//   check = () => {
//     if (this.state.checked4 == true) {
//       this.setState({ checked4: false, checked5: true });
//       this.props.switchTheme(lightTheme);
//     } else {
//       this.setState({ checked4: true, checked5: false });
//       this.props.switchTheme(darkTheme);
//     }
//   };
//   render() {
//     return (
//       <ThemeProvider theme={this.props.theme}>
//         <GeneralStatusBar
//           backgroundColor={
//             this.props.theme.mode === "light" ? "white" : "black"
//           }
//           barStyle={
//             this.props.theme.mode === "dark" ? "light-content" : "dark-content"
//           }
//         />
//         <Container>
//           <Header
//             title="Display"
//             onPress={() => this.props.navigation.openDrawer()}
//           />
//           <View style={styles.middleView}>
//             <TouchableOpacity style={styles.FirstView}>
//               <BoldText>Sort Contacts by:</BoldText>
//               <View style={styles.checkView}>
//                 <CheckBox
//                   value={this.state.checked}
//                   onValueChange={() =>
//                     this.setState({ checked: !this.state.checked })
//                   }
//                   tintColors={{ true: "#1374A3", false: "#1374A3"}}
//                 />
//                 <NormalText>First Name</NormalText>
//               </View>
//               <View style={styles.checkViewtwo}>
//                 <CheckBox
//                   value={this.state.checked1}
//                   onValueChange={() =>
//                     this.setState({ checked1: !this.state.checked1 })
//                   }
//                   tintColors={{ true: "#1374A3", false: "#1374A3"}}
//                 />
//                 <NormalText>Last Name</NormalText>
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.FirstView}
//               onPress={() => this.props.switchTheme(lightTheme)}
//             >
//               <BoldText>Display Contact's Name by</BoldText>
//               <View style={styles.checkView}>
//                 <CheckBox
//                   value={this.state.checked2}
//                   onValueChange={() =>
//                     this.setState({ checked2: !this.state.checked2 })
//                   }
//                   tintColors={{ true: "#1374A3", false: "#1374A3"}}
//                 />
//                 <NormalText>First Name First</NormalText>
//               </View>
//               <View style={styles.checkViewtwo}>
//                 <CheckBox
//                   value={this.state.checked3}
//                   onValueChange={() =>
//                     this.setState({ checked3: !this.state.checked3 })
//                   }
//                   tintColors={{ true: "#1374A3", false: "#1374A3"}}
//                 />
//                 <NormalText>Last Name First</NormalText>
//               </View>
//             </TouchableOpacity>
//             <View style={styles.FirstView}>
//               <BoldText>Night Mode</BoldText>
//               <TouchableOpacity style={styles.checkView}>
//                 <CheckBox
//                   value={this.state.checked4}
//                   onValueChange={this.check}
//                   tintColors={{ true: "#1374A3", false: "#1374A3"}}
//                 />
//                 <NormalText>On</NormalText>
//               </TouchableOpacity>
//               <View style={styles.checkViewtwo}>
//                 <CheckBox
//                   value={this.state.checked5}
//                   onValueChange={this.check}
//                   tintColors={{ true: "#1374A3", false: "#1374A3"}}
//                 />
//                 <NormalText>Off</NormalText>
//               </View>
//             </View>
//             <View style={styles.FirstView}>
//               <BoldText>Export Dates to Calendar</BoldText>
//               <View style={styles.checkView}>
//                 <CheckBox
//                   value={this.state.checked6}
//                   onValueChange={() =>
//                     this.setState({ checked6: !this.state.checked6 })
//                   }
//                   tintColors={{ true: "#1374A3", false: "#1374A3"}}
//                 />
//                 <NormalText>On</NormalText>
//               </View>
//               <View style={styles.checkViewtwo}>
//                 <CheckBox
//                   value={this.state.checked7}
//                   onValueChange={() =>
//                     this.setState({ checked7: !this.state.checked7 })
//                   }
//                   tintColors={{ true: "#1374A3", false: "#1374A3"}}
//                 />
//                 <NormalText>Off</NormalText>
//               </View>
//             </View>
//           </View>
//         </Container>
//       </ThemeProvider>
//     );
//   }
// }
// const mapStateToProps = (state) => ({
//   theme: state.themeReducer.theme,
// });

// const mapDispatchToProps = (dispatch) => ({
//   switchTheme: bindActionCreators(switchTheme, dispatch),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(display);

// const Container = styled.SafeAreaView`
//   flex: 1;

//   width: 100%;
//   align-items: center;
//   background-color: ${(props) => props.theme.backColor};
// `;
// const NormalText = styled.Text`
//   font-family: Roboto-Regular;
//   font-size: 17px;
//   color: ${(props) => props.theme.textColor};
// `;
// const BoldText = styled.Text`
//   font-family: Roboto-Bold;
//   font-size: 17px;
//   color: ${(props) => props.theme.textColor};
// `;
