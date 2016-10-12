import React, {Component, PropTypes} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  row:{
    flexDirection: 'row',
    marginBottom: 20,
    padding: 5,
    borderWidth: 2,
    borderColor: '#48BBEC',
  },

  label: {
    flex:1,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
  },
  input: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 3,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});

export default class CarSearchForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            name='name'
            placeholder='Name'/>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Phone:</Text>
          <TextInput
            style={styles.input}
            name='phone'
            placeholder='Mobile Number'/>
        </View>
        <TouchableHighlight style={styles.button}
                            onPress={this.props.handleSubmit}
                            underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}