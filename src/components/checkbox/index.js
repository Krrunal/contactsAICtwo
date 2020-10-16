import {
    Alert,
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import React, {Component} from 'react';

import PropTypes from 'prop-types';
import checked  from '../../assets/icons/checked.png'
import unchecked from '../../assets/icons/unchecked.png'
import { useLinkProps } from '@react-navigation/native';

// import check from './assets/icons/checked.png';
export default class App extends Component {
    constructor(props) {
      super(props);
      checkedOn= this.props.checkedOn,
      checkedOff=this.props.checkedOff
    }
  
    
componentDidMount(){
    console.log(this.props.checkedOn,'--->',this.props.checkedOff)
}
    render() {
      return (
        <View>
           <TouchableHighlight underlayColor="transparent" onPress={this.props.onPress}>
            {this.props.checkedOn == true 
                ? <Image source={checked} style={{width:25,height:25}}/>  
                : <Image source={unchecked} style={{width:25,height:25}}/>  
                
            }
        </TouchableHighlight>
       <Text>On</Text>
        <TouchableHighlight underlayColor="transparent" onPress={this.props.onPress}>
            {this.props.checkedOff == true 
                ? <Image source={checked} style={{width:25,height:25}}/>  
                : <Image source={unchecked} style={{width:25,height:25}}/>  
                
            }
        </TouchableHighlight>
         <Text>Off</Text>
        </View>
      );
    }
  }
  