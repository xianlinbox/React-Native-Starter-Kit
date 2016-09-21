//@todo remove when RN upstream is fixed
console.ignoredYellowBox = ['Warning: You are manually calling a React.PropTypes validation'];

import { AppRegistry } from 'react-native';
import PropertyFinder from './src/app/index';

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);