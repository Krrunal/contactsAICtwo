/**
 * @format
 */

import App from './src/components/drawerNavigation/app';
// import App from './src/containers/Profile/index';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
