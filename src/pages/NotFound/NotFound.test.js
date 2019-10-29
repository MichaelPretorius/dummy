import React from 'react';
import { shallow } from 'enzyme';

import { NotFound } from './NotFound';

describe('Home component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NotFound />);
  });

  test('should render Home component', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
