import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { App } from './App';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

const mockStore = configureStore();
const store = mockStore({
  auth: {
    isAuthenticated: true,
  },
});

describe('App component', () => {
  let wrapper;
  const mockProps = {
    initialFetch: true,
  };
  beforeEach(() => {
    wrapper = shallow(<App {...mockProps} />);
  });

  test('should render App component', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  test('should render Header with page if initialFetch is true', () => {
    expect(wrapper.exists(Header)).toEqual(true);
  });

  test('should render Loading... if initialFetch is false', () => {
    const mockProps1 = {
      initialFetch: false,
    };
    wrapper = shallow(<App {...mockProps1} />);
    expect(wrapper.contains(<div>Loading...</div>)).toEqual(true);
  });

  test('should render NotFound Page for invalid path', () => {
    wrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
        <Provider store={store}>
          <App {...mockProps} />
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });

  test('should render component(Home) for valid path(/)', () => {
    wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <App {...mockProps} />
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });
});
