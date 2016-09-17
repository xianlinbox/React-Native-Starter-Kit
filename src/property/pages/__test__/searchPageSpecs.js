import React, { View, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
const Test = React.createClass({
  render() {
    return (
      <View>
        <Text>enzyme</Text>
        <Text>rules</Text>
      </View>
    )
  }
});
describe('<Test />', () => {
  it('it should render 1 view component', () => {
    const wrapper = shallow(<Test/>);
    expect(wrapper.find(View)).to.have.length(1);
  });

  it('it should render 2 text components', () => {
    const wrapper = shallow(<Test/>);
    expect(wrapper.find(Text)).to.have.length(2);
  });
});
