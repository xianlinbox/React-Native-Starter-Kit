import React, {Component} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import {textInput} from '../../shared/styles/atomicStyles'
import WithLabel from './withLabel'

export default class NameInputField extends Component {
  render() {
    console.log(this.props);
    const {input: {onChange}} = this.props;
    return (
      <WithLabel style={this.props.style} label={this.props.label}>
        <TextInput
          style={textInput}
          placeholder="Name"
          onChangeText={(value) => onChange(value)}
        />
        {this.props.touched && this.props.error && <span>{this.props.error}</span>}
      </WithLabel>
    );
  }
}