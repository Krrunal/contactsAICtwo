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
import Icon from 'react-native-vector-icons/FontAwesome5';
import Metrics from '../theme/Metrics';
import info from '../../assets/icons/info.svg';
import logo from '../../assets/images/logo.png';
import rigthLogo from '../../assets/icons/contact.png'
import sideBar from '../../assets/images/sideBAR.png';
import styles from './style.js';

var {width, height} = Dimensions.get('window');

export default class display extends Component {
  state = {
    checked: false,
  };
  renderHeader() {
    return (
      <View style={{alignItems: 'center'}}>
        <View style={styles.blueView}>
          <View style={{width: width * 0.9, flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.sideBarView}
              onPress={() => this.props.navigation.openDrawer()}>
              <Image source={sideBar} style={styles.sidebarStyle} />
            </TouchableOpacity>
            <View style={styles.sidebarViewCenter}>
              <Text style={styles.centerText}>Display</Text>
            </View>
            <View style={styles.sidebarViewRight}>
              <Image source={rigthLogo} style={styles.sidebarStyle} />
            </View>
          </View>
        </View>
      </View>
    );
  }
  renderMiddle() {
    return (
      <View style={styles.middleView}>
        <View style={styles.FirstView}>
          <Text style={styles.boldText}>Sort Contacts by:</Text>
          <View style={styles.checkView}>
            <CheckBox
              value={this.state.checked3}
              onValueChange={() =>
                this.setState({checked3: !this.state.checked3})
              }
              tintColors={{true: '#1374A3', false: '#000'}}
            />
            <Text style={styles.normalText}>First Name</Text>
          </View>
          <View style={styles.checkViewtwo}>
            <CheckBox
              value={this.state.checked3}
              onValueChange={() =>
                this.setState({checked3: !this.state.checked3})
              }
              tintColors={{true: '#1374A3', false: '#000'}}
            />
            <Text style={styles.normalText}>Last Name</Text>
          </View>
        </View>
        <View style={styles.FirstView}>
          <Text style={styles.boldText}>Display Contact's Name by</Text>
          <View style={styles.checkView}>
            <CheckBox
              value={this.state.checked3}
              onValueChange={() =>
                this.setState({checked3: !this.state.checked3})
              }
              tintColors={{true: '#1374A3', false: '#000'}}
            />
            <Text style={styles.normalText}>First Name First</Text>
          </View>
          <View style={styles.checkViewtwo}>
            <CheckBox
              value={this.state.checked3}
              onValueChange={() =>
                this.setState({checked3: !this.state.checked3})
              }
              tintColors={{true: '#1374A3', false: '#000'}}
            />
            <Text style={styles.normalText}>Last  Name Last</Text>
          </View>
        </View>
        <View style={styles.FirstView}>
          <Text style={styles.boldText}>Night Mode</Text>
          <View style={styles.checkView}>
            <CheckBox
              value={this.state.checked3}
              onValueChange={() =>
                this.setState({checked3: !this.state.checked3})
              }
              tintColors={{true: '#1374A3', false: '#000'}}
            />
            <Text style={styles.normalText}>On</Text>
          </View>
          <View style={styles.checkViewtwo}>
            <CheckBox
              value={this.state.checked3}
              onValueChange={() =>
                this.setState({checked3: !this.state.checked3})
              }
              tintColors={{true: '#1374A3', false: '#000'}}
            />
            <Text style={styles.normalText}>Off</Text>
          </View>
        </View>
        <View style={styles.FirstView}>
          <Text style={styles.boldText}>Export Dates to Calendar</Text>
          <View style={styles.checkView}>
            <CheckBox
              value={this.state.checked3}
              onValueChange={() =>
                this.setState({checked3: !this.state.checked3})
              }
              tintColors={{true: '#1374A3', false: '#000'}}
            />
            <Text style={styles.normalText}>On</Text>
          </View>
          <View style={styles.checkViewtwo}>
            <CheckBox
              value={this.state.checked3}
              onValueChange={() =>
                this.setState({checked3: !this.state.checked3})
              }
              tintColors={{true: '#1374A3', false: '#000'}}
            />
            <Text style={styles.normalText}>Off</Text>
          </View>
        </View>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderMiddle()}
      </View>
    );
  }
}
