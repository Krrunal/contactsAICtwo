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
  
import rigthLogo from '../../assets/icons/contact.png'
import sideBar from '../../assets/images/sideBAR.png';
import styles from './style';

var {width, height} = Dimensions.get('window');

class Header extends React.Component{
    render() {
        const {title} = this.props
        return(
            <View style={{alignItems: 'center'}}>
                <View style={styles.blueView}>
                    <View style={{width: width * 0.9, flexDirection: 'row'}}>
                        <TouchableOpacity
                            style={styles.sideBarView}
                            onPress={() => this.props.onPress()}
                        >
                            <Image source={sideBar} style={styles.sidebarStyle} />
                        </TouchableOpacity>
                        
                        <View style={styles.sidebarViewCenter}>
                            <Text style={styles.centerText}>{title}</Text>
                        </View>
                        
                        <View style={styles.sidebarViewRight}>
                            <Image source={rigthLogo} style={styles.sidebarStyleRight} />
                        </View>
                    </View>
                </View>
            </View>    
        )
    }
}

export default Header;