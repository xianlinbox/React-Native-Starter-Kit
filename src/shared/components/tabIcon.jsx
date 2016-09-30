import React, {Component} from 'react';
import {Text} from 'react-native';

export default () => {
  return (
    <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
  );
};

