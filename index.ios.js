import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
const SearchPage = require('./src/searchPage');

class PropertyFinder extends Component {
  render() {
    return (
    <Navigator
      initialRoute={{ title: 'Property Finder', index: 0, component: SearchPage }}
      configureScene={() => {
               return Navigator.SceneConfigs.HorizontalSwipeJump;
            }}
      renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator}/>
            }}
      style={styles.container}
      navigationBar={
       <Navigator.NavigationBar
         routeMapper={{
           LeftButton: (route, navigator, index, navState) =>
            { if (route.index === 0) {
                return null;
              } else {
                return (
                  <TouchableHighlight onPress={() => navigator.pop()}>
                    <Text>Back</Text>
                  </TouchableHighlight>
                  );
              }
            },
           RightButton: (route, navigator, index, navState) =>
             { return (<Text>Done</Text>); },
           Title: (route, navigator, index, navState) =>
             { return (<Text>{route.title}</Text>); },
         }}
         style={{backgroundColor: 'gray'}}
       />
      }
    />
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
