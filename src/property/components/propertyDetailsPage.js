import React, {Component} from 'react';
import {
  Image,
  View,
  Text
} from 'react-native';
import styles from './styles/propertyViewStyles';
import atomicStyles from '../../shared/styles/atomicStyles';


export default class PropertyView extends Component {

  render() {
    var property = this.props.property;
    var stats = `${property.bedroom_number} bed ${property.property_type}`;
    if (property.bathroom_number) {
      stats += ', ' + property.bathroom_number + ' ' + (property.bathroom_number > 1
          ? 'bathrooms' : 'bathroom');
    }

    var price = property.price_formatted.split(' ')[0];

    return (
      <View style={atomicStyles.container}>
        <Image style={styles.image}
               source={{uri: property.img_url}} />
        <View style={styles.heading}>
          <Text style={styles.price}>£{price}</Text>
          <Text style={styles.title} testID='PropertyTitle'>
            {property.title}
          </Text>
          <View style={styles.separator} />
        </View>
        <Text style={styles.description}>{stats}</Text>
        <Text style={styles.description}>{property.summary}</Text>
      </View>
    );
  }
}