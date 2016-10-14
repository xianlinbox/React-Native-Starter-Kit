import React, {Component} from 'react';
import {
  Text,
  View,
  DatePickerIOS,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import WithLabel from './withLabel'
import { themeBlue } from '../../shared/styles/brandColors';

const styles = {
  date: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 3,
    borderWidth: 1,
    borderColor: themeBlue,
    borderRadius: 8,
  },
  datePicker: {
    borderTopWidth: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 220,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
  },
};

export default class BirthDateInputField extends Component {
  static defaultProps = {
    date: new Date()
  };

  state = {
    date: this.props.date,
    datePickerMode: 'hidden',
  };

  onDateChange = (date) => {
    this.props.input.onChange(date);
    this.setState({date: date});
  };

  toggleDatePicker() {
    var mode = this.state.datePickerMode == 'hidden' ? 'visible' : 'hidden';
    this.setState({datePickerMode: mode});
  }

  render() {
    var datePicker = (
      <View style={ styles.datePicker }>
        <TouchableOpacity onPress={ this.toggleDatePicker.bind(this) } style={{ padding: 5, alignItems: 'flex-end' }}>
          <Text>Done</Text>
        </TouchableOpacity>

        <DatePickerIOS
          date={this.state.date}
          mode="date"
          onDateChange={ this.onDateChange.bind(this) }
        />
      </View>
    );

    return (
      <WithLabel style={this.props.style} label={this.props.label}>
        <View style={ styles.date }>
          <TouchableWithoutFeedback onPress={ this.toggleDatePicker.bind(this) }>
            <View >
              <Text>{this.state.date.toLocaleDateString()}</Text>
            </View>
          </TouchableWithoutFeedback>
          { this.state.datePickerMode == 'visible' ? datePicker : <View/> }
        </View>
      </WithLabel>
    );
  }
}