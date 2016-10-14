import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { themeBlue } from '../../shared/styles/brandColors';


const styles = {
  gender: {
    flex: 1,
    padding:5,
  },
  label: {
    fontSize: 18,
    color: '#656565',
  },
  icon: {
    fontSize: 18,
    color: '#656565',
  },
};

export default class GenderField extends Component {
  state = {
    gender: '',
  };

  checkMale(){
    this.setState({gender:'male'});
   this.props.input.onChange('male')
  }

  checkFemale(){
    this.setState({gender:'female'});
    this.props.input.onChange('female')
  }
  render() {
    const maleIcon = this.state.gender == 'male'? 'check-square-o': 'square-o';
    const femaleIcon = this.state.gender == 'female'? 'check-square-o': 'square-o';
    return (
      <View style={this.props.style}>
        <View style={styles.gender}>
          <Text style={styles.label} >Male</Text>
          <Icon.Button name={maleIcon}
                       size={20}
                       backgroundColor="#FFFFFF"
                       color={themeBlue}
                       onPress={this.checkMale.bind(this)}/>
        </View>
        <View style={styles.gender}>
          <Text style={styles.label}>Female</Text>
          <Icon.Button name={femaleIcon}
                       size={20}
                       backgroundColor="#FFFFFF"
                       color={themeBlue}
                       onPress={this.checkFemale.bind(this)} />
        </View>
      </View>
    );
  }
}