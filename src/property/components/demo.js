import React, {
  TouchableHighlight,
  StyleSheet,
  PropTypes,
  View,
  Text,
} from 'react-native';

export default class MyComponent extends React.Component {
  render() {
    return (
      <TouchableHighlight>
        <View>
          <Text>I wonder if there will be any problems...</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});