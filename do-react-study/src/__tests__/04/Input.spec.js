import React from 'react';
import ReactDom from 'react-dom';
import Input from '../../03/Input';
import { shallow } from 'enzyme';

describe('<Input>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Input />);
    }).not.toThrow();
  });
});
