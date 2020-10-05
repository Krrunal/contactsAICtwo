import * as React from 'react';

import { Image, Text, View } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

import {Colors} from '../theme/Colors';
import {CommonActions} from '@react-navigation/native';
// import GeneralStatusBar from '../../components/statusbar/index';
import styles from './style';

export default class Splash extends React.Component {

    async componentDidMount() {
        this.timeoutHandle = setTimeout(async() => {
            this.props.navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: 'Login' }],
                })
            );
        }, 2000);
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <GeneralStatusBar backgroundColor={Colors.transparent} barStyle="light-content" /> */}
                <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
                <View style={styles.nameView}>
                    <Text style={styles.text}> CONTACTS AIC </Text>
                </View>
                {/* <View style={styles.lineStyle}>
                </View> */}
            </View>
        );
    }
}


