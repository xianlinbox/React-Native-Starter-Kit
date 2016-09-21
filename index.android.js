import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';
const SearchPage = require('./src/property/scenes/searchPage');

class PropertyFinder extends Component {
  render() {
    let defaultName = 'SearchPage';
    let defaultComponent = SearchPage;
    return (
      <Navigator
        initialRoute={{ name: defaultName, component: defaultComponent }}
        configureScene={(route) => {
                return Navigator.SceneConfigs.VerticalDownSwipeJump;
              }}
        renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
              }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
