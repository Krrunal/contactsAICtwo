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
import checked  from './assets/icons/checked.png'
import unchecked from './assets/icons/unchecked.png'
import { useLinkProps } from '@react-navigation/native';

// import check from './assets/icons/checked.png';
export default class App extends Component {
    constructor(props) {
      
      super(props);
      global.checked= this.props.checked,
      global.checkedOff=this.props.checkedOff
      // this.state = {
      //   // checked: null,
      //   checked: this.props.checked,
      //   checkedOff:this.props.checkedOff
      // };
    
    }
  
    
    // check = () => {
    //   this.state.checked == false 
    //   ? this.setState({ checked: true })
    //   : this.setState({ checked: false })
  
    //   this.state.checkedOff == false 
    //   ? this.setState({ checkedOff: true })
    //   : this.setState({ checkedOff: false })
      
    // }
    // checkOff = () => {
    //   this.state.checked == false 
    //   ? this.setState({ checked: true })
    //   : this.setState({ checked: false })
    // }
componentDidMount(){
    console.log(this.props.checked,'--->',this.props.checkedOff)
}
    render() {
      return (
        <View>
           <TouchableHighlight underlayColor="transparent" onPress={this.props.onPress}>
            {this.props.checked == true 
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
  