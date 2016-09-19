import React, { TouchableHighlight } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
const SearchResult = require('../searchResults');
describe('SearchResult', () => {

  it('should render 2 property items', () => {
    const properties = [{
      "img_url": "http://imgs.nestimg.com/flat_4900010470571062606.jpg",
      "price": 929995,
      "price_currency": "£",
      "price_formatted": "£929,995",
      "title": "Maltby Street The Arc London, Tower Bridge Se1"

    },{
      "img_url": "http://imgs.nestimg.com/flat_london_1880117473936318315.jpg",
      "price": 1500000,
      "price_currency": "£",
      "price_formatted": "£1,500,000",
      "title": "Lovat Lane, City Of London Ec3r"
    }];
    const wrapper = shallow(<SearchResult listings = {properties}/>);
    expect(wrapper.find(TouchableHighlight)).to.have.length(2);
  });
});
