import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';

describe('Header component', () => {
  let wrapper;
  const mockLogoutUser = jest.fn();
  const mockProps = {
    logoutUser: mockLogoutUser,
    isAuthenticated: true,
  };

  beforeEach(() => {
    wrapper = shallow(<Header {...mockProps} />);
  });

  test('should render Header component', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  test('should render Button when isAuthenticated-true', () => {
    expect(
      wrapper
        .find('Button')
        .at(0)
        .text()
    ).toEqual('Logout');
  });

  test('should render Login/Signup when isAuthenticated-false', () => {
    const mockProps1 = {
      ...mockProps,
      isAuthenticated: false,
    };
    wrapper = shallow(<Header {...mockProps1} />);

    expect(
      wrapper
        .find('Nav')
        .at(3)
        .text()
    ).toEqual('Login');
  });

  test('should call logoutUser when Button clicked', () => {
    wrapper.find('Button').simulate('click');
    expect(mockLogoutUser).toBeCalled();
  });

  test('should call toggleNav when Burger clicked', () => {
    wrapper.find('Burger').simulate('click');
    expect(wrapper.find('Navbar').prop('showNav')).toEqual(true);
    wrapper.find('Burger').simulate('click');
    expect(wrapper.find('Navbar').prop('showNav')).toEqual(false);
  });
});
