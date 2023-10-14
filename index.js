/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import mainNavigator from './src/mainNavigator';

AppRegistry.registerComponent(appName, () => mainNavigator);
