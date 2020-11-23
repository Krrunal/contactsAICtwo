import 'react-native-gesture-handler';

import React, {Component} from 'react';

//import App from './src/froDate';
import {AppRegistry} from 'react-native';
import Navigator from './App';
import {name as appName} from './app.json';

//import Navigator from './App';




AppRegistry.registerComponent(appName, () => Navigator);
