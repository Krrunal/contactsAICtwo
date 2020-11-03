import {
  CheckBox,
  Dimensions,
  Image,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component, useState} from 'react';
import styled, { ThemeProvider } from "styled-components/native";

import {COLORS} from '../theme/Colors.js';
import Constants from "../../action/Constants";
import { DataTable } from 'react-native-paper';
import Font from "../theme/font";
import GeneralStatusBar from "../../components/StatusBar/index";
import Header from "../../components/header/index";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Metrics from '../theme/Metrics';
import Toast from 'react-native-easy-toast';
import { connect } from "react-redux";
import logo from '../../assets/images/logo.png';
import sideBar from '../../assets/images/sideBAR.png';
import styles from './style.js';

var {width, height} = Dimensions.get('window');

class Selectlabels extends Component {
  constructor() {
    super();
    this.state = {
      dataManage: [],
      checked: false,
      isSelected: false,
      selectedRealetion: [],
    };
  }

  componentDidMount() {
    this.setState({loader: true})
    const baseurl = Constants.baseurl;
    fetch(baseurl + "get_label")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
          if(responseJson.data.relation == "") {
            console.log(responseJson.data.relation)
            this.setState({ dataManage: "" });
          } else {
            var labelData = responseJson.data.relation.split(/,/).map((item) => {
              console.log(labelData)
              return { relation: item, isSelect: false }
            });
            this.setState({ dataManage: labelData });
          }          
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onchecked = (keyInd, item) => {
    const { dataManage, selectedRealetion } = this.state;
    let arr = dataManage.map((item, key) => {
      if (keyInd == key) {
        item.isSelect = !item.isSelect;
      }
      return { ...item };
    });
    this.setState({ dataManage: arr });
    console.log("datatmanage arr ===> ", dataManage);
    
  };

  deleteApiCall = (isSelect,item,key) => {
    const { dataManage, selectedRealetion } = this.state;

    dataManage.map((item) => {
      item.isSelect == true ? selectedRealetion.push(item.relation) : console.log('selected------->',item.isSelect)
    });

    const selected = selectedRealetion.toString();
    
    const baseurl = Constants.baseurl;
    var _body = new FormData();
    _body.append("relation", selected);

    fetch(baseurl + "delete_label", {
      method: "post",
      headers: {
        "Content-Type":
          Platform.OS == "ios" ? "application/json" : "multipart/form-data",
      },
      body: _body,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.refs.toast.show(responseJson.message);
        if(responseJson.data.relation == "") {
          this.setState({ dataManage: responseJson.data.relation });
        } else {
          var labelData = responseJson.data.relation.split(/,/).map((item) => {
            return { relation: item, isSelect: false }
          });
          this.setState({ dataManage: labelData });
        }          
      });
  };

  renderHeader() {
    return (
      <Header
        title="Labels"
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  renderMiddle() {
    const { dataManage, selectedRealetion } = this.state;
    return (
        <View style={{flex: 1,marginBottom:Metrics.smallMargin }}>
          <ScrollView>
          {this.state.dataManage === "" ?
              null :

            this.state.dataManage.map((item, key) => (
              <View style={styles.tripleView} key={key}>
                <CheckBox
                value={item.isSelect}
                onChange={() => {
                  this.onchecked(key,item.isSelect);
                }}
                tintColors={{true: '#1374A3', false: '#000'}}
              />    
                <View style={styles.manageView}>
                  <Text>Manage</Text>
                </View>
                <NormalText>{item.relation}</NormalText>
              </View>
            ))}
          </ScrollView>
        </View>
    );
  }

  renderLast(){
    return(
      <View style={{ alignItems: "center", flex: 0.2 }}>
      <View
        style={{
          flex: 1,
          bottom: 35,
          position: "absolute",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity style={styles.Whiteview} onPress={() => this.props.navigation.navigate('Label')}>
          <Text style={styles.bottomButton}>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.WhiteviewTwo} onPress={() => this.deleteApiCall()} >
          <Text style={styles.bottomButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>

    )
  }
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
        {this.renderHeader()}
        {this.renderMiddle()}
        {this.renderLast()}
          <Toast
              ref="toast"
              style={{
                backgroundColor: this.props.theme.mode === "light" ? 'black': 'white', 
                width: width * 0.8, 
                alignItems: 'center' 
              }}
              position='bottom'
              positionValue={200}
              fadeInDuration={1000}
              fadeOutDuration={1000}
              opacity={1}
              textStyle={{
                color: this.props.theme.mode === "light" ? 'white' : 'black',
                fontFamily: Font.medium,
                fontSize: width * 0.04
              }}
          />
      </Container>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
});

export default connect(mapStateToProps)(Selectlabels);
const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${(props) => props.theme.backColor};
`;
const NormalText = styled.Text`
font-family: Roboto-medium;
font-size: 17px;
margin-left: 15px;
text-transform: capitalize;
color: ${(props) => props.theme.iconColor};
`;