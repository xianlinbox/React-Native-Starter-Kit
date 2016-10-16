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
    console.log('conect-props:',this.props);
    const {input: {onChange}, meta:{touched, error}, initValue} = this.props;
    console.log('connect-',initValue);
    return (
      <WithLabel style={this.props.style} label={this.props.label}>
        <TextInput
          style={textInput}
          placeholder="Name"
          value={initValue}
          onChangeText={(value) => {
            onChange(value);
          }}
        />
        {touched && error && <span>{error}</span>}
      </WithLabel>
    );
  }
}