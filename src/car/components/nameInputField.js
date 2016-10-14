import React, {Component} from 'react';
import {
  TextInput,
  StyleSheet,
} from 'react-native';
import {textInput} from '../../shared/styles/atomicStyles'
import WithLabel from './withLabel'

export default class NameInputField extends Component {
  render() {
    const {input: {onChange}, ...otherProps} = this.props;
    return (
      <WithLabel style={this.props.style} label={this.props.label}>
        <TextInput
          style={textInput}
          placeholder="Name"
          onChangeText={(value) => onChange(value)}
        />
      </WithLabel>
    );
  }
}