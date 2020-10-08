/**
 * @format
 */
import 'react-native-gesture-handler';

import App from './src/components/drawerNavigation/app';
// import App from './src/checkTwo';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
