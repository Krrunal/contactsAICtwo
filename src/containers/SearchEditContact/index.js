import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React, {Component, useState} from 'react';
import styled, { ThemeProvider } from "styled-components/native";

import {COLORS} from '../theme/Colors.js';
import {CommonActions} from '@react-navigation/native';
import Font from '../theme/font';
import Header from '../../components/header/index';
import Metrics from '../theme/Metrics';
// import firebase from '../../services/FirebaseDatabase/db';
// import { getContact } from '../../services/FirebaseDatabase/getAllContact';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { connect } from "react-redux";
import edit from '../../assets/images/edit.png';
import outerimg from '../../assets/images/outerimg.png';
import plus from '../../assets/images/plus.png';
import reset from '../../assets/images/reset.png';
import styles from './style.js';

var {width, height} = Dimensions.get('window');

 class searchContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    }
  }

  // componentDidMount() {
  //     // getContact('1')  
  //     const contact = [];
  //     firebase.firestore().collection('1').get()
  //         .then((snap) => {
  //         // console.log('snap ==>', snap)
  //         snap.forEach((doc) => {
  //           var item = {};
  //           // console.log('doc data ==>', doc)
  //             item["data"] = doc._data;
  //             item["id"] = doc.id;

  //             contact.push(item);
  //         });
  //         this.setState({ contacts: contact})
  //         console.log('collection ---->',this.state.contacts);
  //     });
  // }

  renderHeader() {
    return (
        <Header 
          title="Search Contacts"
          onPress={() => this.props.navigation.openDrawer()}
        />
    );
  }

  // renderItem({ item, index }) {
  //   const lengthArray = this.state.contacts.length;
  //   // console.log('length===>',this.state.contacts)
  //   return (
  //     <View style={styles.quardView}>
  //       <Image source={outerimg} style={styles.outerImgStyle} />
  //       <Text style={styles.personName}>{item.data.first_name} {item.data.last_name}</Text>
  //       <TouchableHighlight underlayColor='transparant' 
  //         onPress={() => this.navigate(
  //           item.id,
  //           item.data.first_name,
  //           item.data.middle_name,
  //           item.data.last_name,
  //           item.data.nick_name,
  //           item.data.number1,
  //           item.data.number2,
  //           item.data.number3,
  //           item.data.email1,
  //           item.data.email2,
  //           item.data.address,
  //           item.data.messenger1,
  //           item.data.messenger2,
  //           item.data.social_media1,
  //           item.data.social_media2,
  //           item.data.website1,
  //           item.data.website2,
  //           item.data.dob,
  //           item.data.note,
  //           item.data.company,
  //           item.data.job_title,
  //           item.data.work_hour
  //   )}>
  //         <Image source={edit} style={styles.editImgStyle} />
  //       </TouchableHighlight>
  //       <Image source={reset} style={styles.resetImgStyle} />
  //     </View>
  //   );
  // }

  // navigate = ()=>{
  //   this.props.navigation.dispatch(
  //     CommonActions.navigate('editContact', {
  //       name: 'editContact',
  //     })
  //   )
  // }

//   navigate = (      
//     id,      
//     first_name,
//     middle_name,
//     last_name,
//     nick_name,
//     number1,
//     number2,
//     number3,
//     email1,
//     email2,
//     address,
//     messenger1,
//     messenger2,
//     social_media1,
//     social_media2,
//     website1,
//     website2,
//     dob,
//     note,
//     company,
//     job_title,
//     work_hour,
// ) => {
//     // this.props.navigation.navigate(screen:'editContact',
//     //   params: { user: 'jane' }
//     // })
//     this.props.navigation.dispatch(
//       CommonActions.navigate('editContact', {
//         name: 'editContact',
//         id: id,
//         first_name: first_name,
//         middle_name: middle_name,
//         last_name: last_name,
//         nick_name: nick_name,
//         number1: number1,
//         number2: number2,
//         number3: number3,
//         email1: email1,
//         email2: email2,
//         address: address,
//         messenger1: messenger1,
//         messenger2: messenger2,
//         social_media1: social_media1,
//         social_media2: social_media2,
//         website1: website1,
//         website2: website2,
//         dob: dob,
//         note: note,
//         company: company,
//         job_title: job_title,
//         work_hour: work_hour,
//         //routes: [{ name: 'Login' }],
//       })
//     );
//   }

  renderMiddle() {
    return (
      <View style={styles.scrollStyle}>
        <ScrollView style={{marginTop: Metrics.doubleBaseMargin}}>
          <View style={styles.mainView}>
            <View style={styles.quardView}>
              <Image source={outerimg} style={styles.outerImgStyle} />
              <NormalText>Ron Aron</NormalText>
              <Image source={edit} style={styles.editImgStyle} />
              <Image source={reset} style={styles.resetImgStyle} />
            </View>

              {/* <FlatList
                refreshing={true}
                keyExtractor={(item, index) => index.toString()}
                data={this.state.contacts}
                extraData={this.state}
                numColumns={1}
                renderItem={this.renderItem.bind(this)}
              /> */}
            
            <View style={styles.quardView}>
              <Image source={outerimg} style={styles.outerImgStyle} />
              <NormalText>Shelly Blimton</NormalText>
              <Image source={edit} style={styles.editImgStyle} />
              <Image source={reset} style={styles.resetImgStyle} />
            </View>
            <View style={styles.quardView}>
              <Image source={outerimg} style={styles.outerImgStyle} />
              <NormalText>Arnold Brosser</NormalText>
              <Image source={edit} style={styles.editImgStyle} />
              <Image source={reset} style={styles.resetImgStyle} />
            </View>
            <View style={styles.quardView}>
              <Image source={outerimg} style={styles.outerImgStyle} />
              <NormalText>Catherine Charcoal</NormalText>
              <Image source={edit} style={styles.editImgStyle} />
              <Image source={reset} style={styles.resetImgStyle} />
            </View>
            <View style={styles.quardView}>
              <Image source={outerimg} style={styles.outerImgStyle} />
              <NormalText>Amanda Hornberger </NormalText>
              <Image source={edit} style={styles.editImgStyle} />
              <Image source={reset} style={styles.resetImgStyle} />
            </View>
            <View style={styles.quardView}>
              <Image source={outerimg} style={styles.outerImgStyle} />
              <NormalText>Ron Aron</NormalText>
              <Image source={edit} style={styles.editImgStyle} />
              <Image source={reset} style={styles.resetImgStyle} />
            </View>
            <View style={styles.quardView}>
              <Image source={outerimg} style={styles.outerImgStyle} />
              <NormalText>Shelly Blimton</NormalText>
              <Image source={edit} style={styles.editImgStyle} />
              <Image source={reset} style={styles.resetImgStyle} />
            </View>
            <View style={styles.quardView}>
              <Image source={outerimg} style={styles.outerImgStyle} />
              <NormalText>Arnold Brosser</NormalText>
              <Image source={edit} style={styles.editImgStyle} />
              <Image source={reset} style={styles.resetImgStyle} />
            </View>
            <View style={styles.quardView}>
              <Image source={outerimg} style={styles.outerImgStyle} />
              <NormalText>Catherine Charcoal</NormalText>
              <Image source={edit} style={styles.editImgStyle} />
              <Image source={reset} style={styles.resetImgStyle} />
            </View>
            <View style={styles.quardView}>
              <Image source={outerimg} style={styles.outerImgStyle} />
              <NormalText>Amanda Hornberger </NormalText>
              <Image source={edit} style={styles.editImgStyle} />
              <Image source={reset} style={styles.resetImgStyle} />
            </View>
           
          </View>
        </ScrollView>
      </View>
    );
  }

  renderLast() {
    return (
      <View
        style={{
          alignItems: 'flex-end',
          flex: 1,
          marginRight: Metrics.baseMargin,
        }}>
        <View style={{flex: 1, bottom: 30, position: 'absolute'}}>
          <TouchableOpacity style={styles.Whiteview}   onPress={this.plusnavigate}>
            <Image
              source={plus}
              style={styles.plusStyle}
            
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  plusnavigate = () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: 'manuallyAddContact',
        //routes: [{ name: 'Login' }],
      }),
    );
  };

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
      <Container>

      {/* <View style={{backgroundColor: COLORS.white, flex: 1}}> */}
        {this.renderHeader()}

        {this.renderMiddle()}

        {this.renderLast()}
      {/* </View> */}
      </Container>
      </ThemeProvider>
    );
  }
}
const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
});

export default connect(mapStateToProps)(searchContact);

const Container = styled.View`
  flex: 1;

  width: 100%;
  /* align-items: center; */
  background-color: ${(props) => props.theme.backColor};
`;
const NormalText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 17px;
  color: ${(props) => props.theme.textColor};
  margin-left:5px;
`;