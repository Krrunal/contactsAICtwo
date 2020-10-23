/**
 * @format
 */
import React, {Component} from 'react';

import DrawerNavigator from './src/components/drawerNavigation/app';
// import App from './src/pickerImage';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import storeRedux from "./src/reducer/index";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import NavigationService from './src/action/navigationService';

export default class Navigator extends React.Component{
  render(){
    const { store, persistor } = storeRedux();
    return(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <DrawerNavigator ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef)}}/>
        </PersistGate>
      </Provider>
    )
  }
}