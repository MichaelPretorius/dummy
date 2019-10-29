import React from 'react';
import { shallow } from 'enzyme';

import { Home } from './Home';

describe('Home component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  test('should render Home component', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
