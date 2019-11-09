import React from 'react';
import { shallow } from 'enzyme';

import { Styles } from './Styles';

describe('Styles component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Styles />);
  });

  test('should render Styles component', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
