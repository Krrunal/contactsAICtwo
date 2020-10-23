/**
 * @format
 */
import React, {Component} from 'react';

import Navigator from './App';
// import App from './src/pickerImage';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import storeRedux from "./src/reducer/index";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// import {Provider} from 'react-redux';
// import allReducers from './src/reducer/index';

// const store = createStore(allReducers)

// const Redux = () => (
//     <Provider store={store}>
//         <App />
//     </Provider>
// )
AppRegistry.registerComponent(appName, () => Navigator);
