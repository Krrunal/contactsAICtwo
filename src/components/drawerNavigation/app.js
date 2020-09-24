import  { NavigationContainer, createAppContainer } from '@react-navigation/native';

import Add from '../../containers/AddContact/index'
import {Dimensions} from 'react-native';
import  {DrawerContent} from './DrawerContent';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Login from '../../containers/Login/index';
import React from 'react';
import Signup from '../../containers/Signup/index';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App(){
return(
    
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name="Add" component={Add}/>

                <Drawer.Screen name="Login" component={Login}/>
                <Drawer.Screen name="Signup" component={Signup}/>
       
            </Drawer.Navigator>
       </NavigationContainer>
       
);
}