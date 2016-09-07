import {View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import GlobalNavigation from './GlobalNavigation';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <GlobalNavigation />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;