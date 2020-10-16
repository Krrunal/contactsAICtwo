/**
 * @format
 */
import React, {Component} from 'react';

import App from './src/components/drawerNavigation/app';
// import App from './src/pickerImage';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

// import {Provider} from 'react-redux';
// import allReducers from './src/reducer/index';

// const store = createStore(allReducers)

// const Redux = () => (
//     <Provider store={store}>
//         <App />
//     </Provider>
// )

AppRegistry.registerComponent(appName, () => App);
