import React, {Component} from 'react';
import {
  Text,
  View,
  DatePickerIOS,
} from 'react-native';
import {textInput} from '../../shared/styles/atomicStyles'
import WithLabel from './withLabel'

export default class BirthDateInputField extends Component {
  static defaultProps = {
    date: new Date(),
    timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
  };

  state = {
    date: this.props.date,
  };

  onDateChange = (date) => {
    this.setState({date: date});
  };

  render() {
    return (
      <WithLabel style={this.props.style} label="Birth: ">
        <Text style={textInput}>{this.state.date.toLocaleDateString()}</Text>
      </WithLabel>
    );
  }
}