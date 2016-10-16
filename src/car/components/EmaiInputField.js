import React, {Component} from 'react';
import {
  TextInput,
} from 'react-native';
import {textInput} from '../../shared/styles/atomicStyles'
import WithLabel from './withLabel'

export default class EmailField extends Component {
  render() {
    const {input: {onChange}, initValue} = this.props;
    return (
      <WithLabel style={this.props.style} label={this.props.label}>
        <TextInput
          keyboardType="email-address"
          style={textInput}
          value={initValue}
          placeholder="Email"
          onChangeText={(value) => onChange(value)}
        />
      </WithLabel>

    );
  }
}