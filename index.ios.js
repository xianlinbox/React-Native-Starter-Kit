//@todo remove when RN upstream is fixed
console.ignoredYellowBox = ['Warning: Failed propType'];

import { AppRegistry } from 'react-native';
import PropertyFinder from './src/app/index';

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);