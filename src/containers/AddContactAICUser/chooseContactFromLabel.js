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
import React, {Component} from 'react';

import {COLORS} from '../theme/Colors.js';
import { CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Metrics from '../theme/Metrics';
import info from '../../assets/icons/info.svg';
import logo from '../../assets/images/logo.png';
import plus from '../../assets/images/plus.png';
import rigthLogo from '../../assets/icons/contact.png';
import sideBar from '../../assets/images/sideBAR.png';
import styles from './manuallyAddContactStyle';

var {width, height} = Dimensions.get('window');

export default class chooseContactFromLabel extends Component {
  state = {
    checked: false,
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
  };
  renderHeader() {
    return (
      <View style={{alignItems: 'center'}}>
        <View style={styles.blueView}>
          <View style={{width: width * 0.9, flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.sideBarView}
              onPress={() => this.props.navigation.openDrawer()}
              >
              <Image source={sideBar} style={styles.sidebarStyle} />
            </TouchableOpacity>
            <View style={styles.sidebarViewCenter}>
              <Text style={styles.centerText}>Add Contacts AIC User(s)</Text>
            </View>
            <View style={styles.sidebarViewRight}>
              <Image source={rigthLogo} style={styles.sidebarStyle} />
            </View>
          </View>
        </View>
        <View style={{width: width * 0.7}}>
          <Text style={styles.textMiddle}>
            Select which label(s) to associate with [ USERNAME ]
          </Text>
        </View>
      </View>
    );
  }
  renderMiddle() {
    return (
      <View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() => this.setState({checked: !this.state.checked})}
            tintColors={{true: '#1374A3', false: '#000'}}
          />
          <Text style={styles.contactText}>Family</Text>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked1}
            onValueChange={() =>
              this.setState({checked1: !this.state.checked1})
            }
            tintColors={{true: '#1374A3', false: '#000'}}
          />
          <Text style={styles.contactText}>Friend</Text>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked2}
            onValueChange={() =>
              this.setState({checked2: !this.state.checked2})
            }
            tintColors={{true: '#1374A3', false: '#000'}}
          />
          <Text style={styles.contactText}>Relative</Text>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked3}
            onValueChange={() =>
              this.setState({checked3: !this.state.checked3})
            }
            tintColors={{true: '#1374A3', false: '#000'}}
          />
          <Text style={styles.contactText}>Universal Studio</Text>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked4}
            onValueChange={() =>
              this.setState({checked4: !this.state.checked4})
            }
            tintColors={{true: '#1374A3', false: '#000'}}
          />
          <Text style={styles.contactText}>Sposrt Gambling Podcast</Text>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked5}
            onValueChange={() =>
              this.setState({checked5: !this.state.checked5})
            }
            tintColors={{true: '#1374A3', false: '#000'}}
          />
          <Text style={styles.contactText}>Green Inc.</Text>
        </View>
        <View style={styles.mainView}>
          <CheckBox
            value={this.state.checked6}
            onValueChange={() =>
              this.setState({checked6: !this.state.checked6})
            }
            tintColors={{true: '#1374A3', false: '#000'}}
          />
          <Text style={styles.contactText}>UCLA</Text>
        </View>
        <View style={styles.mainView}>
          <Image
            source={plus}
            style={{
              width: width * 0.055,
              height: width * 0.055,
              marginLeft: Metrics.xsmallMargin,
            }}
          />
          <View style={styles.smallWhiteview}>
            <Text
              style={{
                fontSize: width * 0.025,
                fontFamily: 'Roboto-Light',
                fontSize: width * 0.04,
              }}>
              Add
            </Text>
          </View>
        </View>
      </View>
    );
  }
  renderLast() {
    return (
      <View style={{alignItems: 'center', flex: 1}}>
        <View
          style={{
            flex: 1,
            bottom: 20,
            position: 'absolute',
            flexDirection: 'row',
          }}>
          <TouchableOpacity style={styles.Whiteview}  onPress={this.forAddContactNavigate}>
            <Text
              style={{
                color: COLORS.main_text_color,
                fontFamily: 'Roboto-Bold',
                fontSize: width * 0.045,
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  forAddContactNavigate = () => {
    this.props.navigation.dispatch(
        CommonActions.navigate({
          name: 'forAddContact',
          //routes: [{ name: 'Login' }],
        })
    );
}
  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderMiddle()}
        {this.renderLast()}
      </View>
    );
  }
}
