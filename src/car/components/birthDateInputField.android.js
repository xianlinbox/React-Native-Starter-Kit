import React, {Component} from 'react';
import {
  Text,
  View,
  DatePickerAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import WithLabel from './withLabel'
import {themeBlue} from '../../shared/styles/brandColors';

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
};

export default class BirthDateInputField extends Component {
  static defaultProps = {
    date: new Date()
  };

  state = {
    date: this.props.date
  };

  showPicker = async(stateKey, options) => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action !== DatePickerAndroid.dismissedAction) {
        var date = new Date(year, month, day);
        this.setState({date: date});
      }
    } catch (error) {
      console.warn(`Error in example '${stateKey}': `, error.message);
    }
  };


  render() {
    return (
      <WithLabel style={this.props.style} label={this.props.label}>
        <View style={ styles.date }>
          <TouchableWithoutFeedback onPress={ this.showPicker.bind(this, 'simple', {date: this.state.date}) }>
            <View >
              <Text>{this.state.date.toLocaleDateString()}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </WithLabel>
    );
  }
}