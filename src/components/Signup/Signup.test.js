import React from 'react';
import { shallow } from 'enzyme';

import { Signup } from './Signup';

describe('Signup component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Signup />);
  });

  test('should render Signup component', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
