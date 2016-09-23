'use strict';
import React from 'react';
import {
  Image,
  View,
  TouchableHighlight,
  Text
} from 'react-native';

import styles from './styles/searchResultItemRowItemStyles'

export default function (rowData) {
  const {title, price_formatted, img_url, rowID, onPress} = rowData;
  const price = price_formatted.split(' ')[0];

  return (
    <TouchableHighlight onPress={() => onPress(rowData)}
                        testID={'property-' + rowID}
                        underlayColor='#dddddd'>
      <View>
        <View style={styles.rowContainer}>
          <Image style={styles.thumb} source={{ uri: img_url }}/>
          <View style={styles.textContainer}>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
          </View>
        </View>
        <View style={styles.separator}/>
      </View>
    </TouchableHighlight>
  );
}

