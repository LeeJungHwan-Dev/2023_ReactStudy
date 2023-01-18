import React from 'react';
import Input from '../../03/Input';
import { shallow } from 'enzyme';

describe('<Input>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Input name="name" />);
    }).not.toThrow();
  });
  it('has one element', () => {
    const wrapper = shallow(<Input name="name" />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toHaveLength(1);
  });
});
