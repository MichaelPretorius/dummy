import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';

describe('Header component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  test('should render Header component', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
