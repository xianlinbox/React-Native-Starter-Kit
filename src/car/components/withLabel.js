import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {themeBlue} from '../../shared/styles/brandColors';

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 5,
    borderWidth: 2,
    borderColor: themeBlue,
  },
  label: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
  },
});

export default class WithLabel extends React.Component {
  render() {
    return (
      <View style={styles.labelContainer}>
        <Text style={styles.label}>
          {this.props.label}
        </Text>
        {this.props.children}
      </View>
    );
  }
}