import 'react-native-gesture-handler';
import React, {Component} from 'react';

// import App from './src/pickerImage';
import {AppRegistry} from 'react-native';
import Navigator from './App';
// import Navigator from './src/containers/Labels/GetLabel';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navigator);
