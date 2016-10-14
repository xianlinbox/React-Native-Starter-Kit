import React, {Component} from 'react';
import {
  TextInput,
} from 'react-native';
import {textInput} from '../../shared/styles/atomicStyles'

export default class EmailField extends Component {
  render() {
    const {input: {onChange}, ...otherProps} = this.props;
    return (
      <TextInput
        keyboardType="email-address"
        style={textInput}
        placeholder="Email"
        onChangeText={(value) => onChange(value)}
        {...otherProps}
      />
    );
  }
}