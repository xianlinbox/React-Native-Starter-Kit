import React, {Component} from 'react';
import {
  TextInput,
  StyleSheet,
} from 'react-native';
import {textInput} from '../../shared/styles/atomicStyles'

export default class NameInputField extends Component {
  render() {
    const {input: {onChange}, ...otherProps} = this.props;
    return (
      <TextInput
        style={textInput}
        placeholder="Name"
        onChangeText={(value) => onChange(value)}
        {...otherProps}
      />
    );
  }
}