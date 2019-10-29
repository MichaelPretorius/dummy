import React from 'react';
import { shallow } from 'enzyme';

import { Private } from './Private';

describe('Private component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Private />);
  });

  test('should render Private component', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
