import React, {Component, PropTypes} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import {Field} from 'redux-form'
import EmailInputField from './emaiInputField'
import NameInputField from './nameInputField'
import BirthDateInputField from './birthDateInputField'
import GenderField from './genderField'
import {themeBlue} from '../../shared/styles/brandColors'

const styles = StyleSheet.create({
  row: {
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
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: themeBlue,
    borderColor: themeBlue,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
});

export default class CarSearchForm extends Component {

  submit(values) {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    return sleep(1000)
      .then(() => {
        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
      })
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <View style={styles.container}>
        <Field name="name" label="Name:" style={styles.row}  component={NameInputField}/>
        <Field name="email" label="Email:" style={styles.row} component={EmailInputField}/>
        <Field name="birthDate" label="Birth:" style={styles.row} component={BirthDateInputField}/>
        <Field name="gender" style={styles.row} component={GenderField}/>
        <TouchableHighlight style={styles.button}
                            type="submit"
                            onPress={handleSubmit(this.submit)}
                            underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}