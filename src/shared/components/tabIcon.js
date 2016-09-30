import React, {Component} from 'react';
import {Text} from 'react-native';

export default ({selected, title}) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
};

