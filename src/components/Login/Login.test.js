import React from 'react';
import { shallow } from 'enzyme';

import { Login } from './Login';

describe('Login component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  test('should render Login component', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
