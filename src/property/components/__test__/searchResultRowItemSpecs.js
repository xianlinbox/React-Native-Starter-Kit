import React, {View, Text, TouchableHighlight} from 'react-native';
import {shallow} from 'enzyme';
import {expect} from 'chai';
const sinon = require('sinon').sandbox.create();
import searchResultItem from '../searchResultRowItem';

describe.only('SearchResultItem', () => {
  var Component;
  var onPressStub;

  beforeEach(() => {
    const onPressStub = sinon.stub();
    var rowData = {
      price_formatted: "£929,995",
      title: "propertyTitle",
      rowID: 1,
      onPress: onPressStub
    };

    Component = shallow(<TouchableHighlight>
      <View>
        <View >
          <View >
            <Text />
            <Text/>
          </View>
        </View>
      </View>
    </TouchableHighlight>);
  });


  afterEach(() => {
    sinon.restore();
  });

  it('should be touchable', () => {
    console.log("1");
    console.log(Component.find(Text).type());
    expect(Component.type()).to.equal(TouchableHighlight);
  });
});
