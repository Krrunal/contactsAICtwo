import { CheckBox, Image, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {COLORS} from '../theme/Colors.js';
import Metrics from '../theme/Metrics';
import styles from './style';

export default class Add extends Component {
    renderHeader(){
        return(
            <View style={styles.blueView}>
                <Text>Add Contact(s)</Text>
            </View>
        )
    }
    render(){
        return(
            <View style={styles.container}>
                {this.renderHeader()}
            </View>
        )
    }
}