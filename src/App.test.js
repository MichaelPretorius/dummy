import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';
import Header from './components/Header/Header';

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    const mockProps = {
      initialFetch: false,
    };

    wrapper = shallow(<App {...mockProps} />);
  });

  test('should render App component', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  test('should render Loading... if initialFetch is false', () => {
    expect(wrapper.contains(<div>Loading...</div>)).toEqual(true);
  });

  test('should render Header with page if initialFetch is true', () => {
    const mockProps1 = {
      initialFetch: true,
    };
    const wrapper1 = shallow(<App {...mockProps1} />);

    expect(wrapper1.exists(Header)).toEqual(true);
  });
});
